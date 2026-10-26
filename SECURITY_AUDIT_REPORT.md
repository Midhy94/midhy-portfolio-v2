# Comprehensive Security Audit & Hardening Report

**Application**: Midhun M. Portfolio (`midhy-portfolio-v2`)  
**Auditor**: Senior Application Security Engineer & DevSecOps Specialist  
**Assessment Date**: October 2026  
**Status**: Hardened & Verified  

---

## 1. Executive Summary

A comprehensive application security audit, static code analysis, dependency vulnerability check, and deployment configuration review was conducted on `midhy-portfolio-v2`.

The application is currently a static, client-rendered Vue 3 SPA built with Vite, TypeScript, and SCSS, serving two primary portals: **Personal** and **Works**. A historical Supabase CMS integration was removed in commit `3e6f725` to shift to a static data-driven model.

### Key Outcomes:
- **0 High/Critical Vulnerabilities** detected in dependencies (`npm audit`).
- **0 Hardcoded Secrets or Credentials** discovered in working tree or compiled `dist/` assets.
- **XSS & DOM Injection Audit**: Zero instances of `v-html`, `innerHTML`, `outerHTML`, or `eval()` present in the codebase. Safe Vue text interpolation is used exclusively.
- **Tabnabbing Prevention**: 100% of external links opening in new tabs (`target="_blank"`) enforce `rel="noopener noreferrer"`.
- **Route Validation Hardening**: Case study dynamic `:slug` parameter parsing in `CaseStudyPage.vue` was hardened against malformed/array payloads and bounded.
- **Edge Security Headers Configured**: Production-grade Content Security Policy (CSP), Strict-Transport-Security (HSTS), X-Frame-Options, X-Content-Type-Options, and Referrer-Policy configurations created for Vercel, Netlify, and Cloudflare Pages.
- **Automated CI Security Gate**: GitHub Actions workflow and automated verification script (`npm run test:security`) added to prevent future security regressions.

---

## 2. Tools & Verification Checks Executed

| Tool / Check | Purpose | Command / Target | Execution Result |
|---|---|---|---|
| **NPM Audit** | Dependency supply-chain vulnerability scan | `npm audit --audit-level=high` | **0 vulnerabilities** (Clean) |
| **Vue TypeScript Check** | Static typing & compilation verification | `npx vue-tsc --noEmit` | **0 errors** (Clean) |
| **Vite Production Build** | Bundle generation & asset integrity | `npm run build` | **Build completed in 1.82s** |
| **Static Code Grep** | XSS and raw DOM injection vectors | Grep `v-html`, `innerHTML`, `document.write`, `eval` | **0 occurrences found** |
| **Link Tabnabbing Scan** | External anchor protection | Grep `target="_blank"` vs `rel="noopener noreferrer"` | **All 8 occurrences protected** |
| **Secrets Regex Engine** | Secret keys, AWS, GitHub, JWT tokens | Custom Python AST / Regex scanner | **0 secrets detected** |
| **Custom Audit Suite** | Automated regression security script | `npm run test:security` | **5/5 Security Checks Passed** |

---

## 3. Detailed Findings & Fixes Applied

### 3.1 SEC-01: Hardening Route Slug Parsing (Low Severity — Fixed)
- **File**: `src/pages/CaseStudyPage.vue`
- **Finding**: The `:slug` route parameter was previously cast directly as `route.params.slug as string`. In Vue Router, route parameters can occasionally resolve as arrays (`string[]`) or undefined if malformed query structures are provided.
- **Fix**: Implemented explicit type coercion, array unwrapping, string length bounds (< 100 characters), trimming, and lowercase normalization before project lookup:
  ```ts
  const rawSlug = route.params.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
  if (!slug || typeof slug !== 'string' || slug.length > 100) return null;
  const normalizedSlug = slug.trim().toLowerCase();
  return allProjects.find(p => p.slug === normalizedSlug || p.id === normalizedSlug) || null;
  ```
- **Verification**: Verified via `npm run type-check` and `npm run test:security`.

### 3.2 SEC-02: Missing Security Meta Tags in HTML (Low Severity — Fixed)
- **File**: `index.html`
- **Finding**: `index.html` lacked defensive baseline meta tags for MIME sniffing protection and referrer leakage.
- **Fix**: Added standard defensive meta tags:
  ```html
  <meta http-equiv="X-Content-Type-Options" content="nosniff" />
  <meta name="referrer" content="strict-origin-when-cross-origin" />
  ```
- **Verification**: Verified via `npm run build` and inspection of `dist/index.html`.

### 3.3 SEC-03: Edge Security Headers & Hosting Configuration (Medium Severity — Fixed)
- **Files Created**: `vercel.json`, `netlify.toml`, `public/_headers`
- **Finding**: Static portfolio applications deployed to CDNs (Vercel, Netlify, Cloudflare) default to permissive edge headers, leaving the site vulnerable to iframe framing (clickjacking) and missing Content Security Policy enforcement.
- **Fix**: Created production configurations enforcing:
  - `Content-Security-Policy`:
    ```
    default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;
    ```
  - `Strict-Transport-Security`: `max-age=63072000; includeSubDomains; preload`
  - `X-Frame-Options`: `DENY`
  - `X-Content-Type-Options`: `nosniff`
  - `Referrer-Policy`: `strict-origin-when-cross-origin`
  - `Permissions-Policy`: `camera=(), microphone=(), geolocation=(), payment=(), usb=()`
  - Cache-Control headers for hashed static assets (`public, max-age=31536000, immutable`).

### 3.4 SEC-04: Environment Configuration Template (Low Severity — Fixed)
- **File Created**: `.env.example`
- **Finding**: No `.env.example` template existed to guide future developers and AI agents on safe configuration practices.
- **Fix**: Created `.env.example` clearly documenting that:
  - All `VITE_*` variables are public to browsers.
  - Privileged credentials (such as Supabase `service_role` keys) must never be added to frontend code or `.env` files.

### 3.5 SEC-05: Automated Security Verification & CI Guardrails (Fixed)
- **Files Created**: `scripts/security-audit.js`, `.github/workflows/security.yml`, `package.json`
- **Finding**: No automated security test existed to catch regressions (e.g. newly introduced `v-html` tags, unprotected external links, or committed secrets).
- **Fix**:
  - Implemented `scripts/security-audit.js` and added `"test:security": "node scripts/security-audit.js"` to `package.json`.
  - Configured `.github/workflows/security.yml` to automatically execute type-checking, the security audit suite, and the production build on all pushes and pull requests.

---

## 4. Requirements for Future Admin Panel / Supabase Integration

If authentication or a content management admin panel is introduced in the future, the following non-negotiable controls must be satisfied:

1. **Server-Side Authorization**: Vue route guards (`router.beforeEach`) provide UX redirection only. True authorization MUST be enforced on Supabase Row Level Security (RLS) or trusted API middleware.
2. **Deny by Default**: Enable RLS on every database table. Grant anonymous access (`anon` role) strictly `SELECT` permissions on public portfolio content (`status = 'published'`).
3. **No Service-Role Key in Frontend**: Never expose `SUPABASE_SERVICE_ROLE_KEY` in `VITE_*` variables or repository code. Keep administrative mutations behind an authenticated Supabase user session or a protected serverless backend.
4. **MFA & Rate Limiting**: Enable Multi-Factor Authentication (TOTP) for the administrator account. Enforce rate limiting on login endpoints.
5. **Session Handling**: Store authentication tokens in secure session storage or HttpOnly cookies. Never expose session tokens in URLs or telemetry logs.

---

## 5. False Positives & Limitations

- **Git History Matches**: Historical search for keywords like `service_role` and `password` matched documentation comments inside `@supabase/supabase-js` within commit `8a5b412` (which was removed in `3e6f725`). No real credentials were ever exposed.
- **CSP Style Directives**: `style-src 'unsafe-inline'` is permitted due to Vue runtime style injection during component transitions and scoped SCSS. Nonce-based CSP can be evaluated if moving to an SSR architecture in the future.

---

## 6. Recommended Next Steps

1. **Configure Hosting Domain**: When connecting a custom domain (e.g. `midhun.design`) on Vercel or Netlify, verify that automatic HTTPS redirection and HSTS preloading are enabled in the provider dashboard.
2. **Enable GitHub Branch Protection**: Set up branch protection rules on `main` and `development` requiring the `Security & Quality Guardrails` CI workflow to pass before merging.
3. **Enable GitHub Secret Scanning**: Turn on Dependabot alerts and GitHub secret scanning in the repository settings.
