# Security Threat Model — Midhun M. Portfolio (`midhy-portfolio-v2`)

**Date**: October 2026  
**Auditor**: Application Security Engineering Review  
**Target Architecture**: Vue 3 (Composition API), Vite 6, TypeScript 5.7, Vue Router 4.5, SCSS, static SPA deployment.

---

## 1. Application Inventory & Architecture

### 1.1 Architecture Overview
The application is a high-craft, client-rendered Single Page Application (SPA) serving two distinct user experiences:
1. **Personal Portal**: Professional identity, philosophy, career timeline, design capabilities, and resume download.
2. **Works Portal**: Selected projects gallery, comprehensive project archives, and detailed case studies.

All content is statically compiled from TypeScript data modules (`src/data/portfolioData.ts`). No backend API, dynamic server-side rendering, active database connection, or external authentication system is currently integrated. (A legacy Supabase CMS integration was removed in commit `3e6f725` to shift to a static data-driven model).

### 1.2 Route & Entrypoint Surface
| Route Path | View Component | Access Level | Input Parameters |
|---|---|---|---|
| `/` | `PersonalPage.vue` | Public | None |
| `/about` | `AboutCareerPage.vue` | Public | None |
| `/work` | `WorksPage.vue` | Public | None |
| `/work/archive` | `WorkArchivePage.vue` | Public | None |
| `/work/:slug` | `CaseStudyPage.vue` | Public | URL Route Parameter (`:slug`) |
| `/:pathMatch(.*)*` | `NotFoundPage.vue` | Public | Path fallback |

### 1.3 Outbound Data Flows & External Services
- **External Links**: Outbound links to LinkedIn, GitHub, Dribbble, X (Twitter), and local resume PDF (`/Midhun_M_Resume.pdf`).
- **Typography Assets**: Google Fonts CDN (`fonts.googleapis.com`, `fonts.gstatic.com`).
- **Communication Channels**: Client-side copy-to-clipboard email utility and `mailto:mnairmidhun@gmail.com`. No server-side mailers or contact forms exist.

---

## 2. Threat Analysis & Classification

Threats are evaluated using the STRIDE model and classified by risk severity according to OWASP criteria.

### 2.1 Threat Catalog & Severity Ratings

| Threat ID | Threat Category | Description | Potential Impact | Severity | Status / Mitigation |
|---|---|---|---|---|---|
| **THREAT-01** | **Information Disclosure** | Accidental exposure of private API keys, cloud tokens, or DB credentials in git commits or client bundles. | Critical | **Low (Residual)** | **Mitigated**: Working tree & git log verified clean. `.env.example` created with safe placeholders. Automated secret scanning script implemented. |
| **THREAT-02** | **Tampering / Supply Chain** | Compromised third-party npm dependencies introducing malicious scripts during build. | High | **Low (Residual)** | **Mitigated**: `npm audit` confirms 0 high/critical vulnerabilities. Lockfile committed. Automated CI audit step added. |
| **THREAT-03** | **Cross-Site Scripting (XSS)** | Injection of untrusted scripts via DOM rendering or route parameters. | High | **Low (Residual)** | **Mitigated**: No `v-html`, `innerHTML`, or `eval()` present in code. Safe Vue template interpolation (`{{ }}`) used exclusively. Route `:slug` bounds-checked and normalized. |
| **THREAT-04** | **Reverse Tabnabbing** | External target `_blank` links hijacked via `window.opener` to redirect unsuspecting users. | Medium | **Resolved** | **Mitigated**: Every external anchor tag verified and enforced with `rel="noopener noreferrer"`. |
| **THREAT-05** | **Clickjacking / Framing** | Embedding the portfolio in malicious iframes to deceive users or harvest clicks. | Medium | **Mitigated** | **Mitigated**: `X-Frame-Options: DENY` and CSP `frame-ancestors 'none'` defined in `vercel.json`, `netlify.toml`, and `public/_headers`. |
| **THREAT-06** | **MIME Sniffing** | Browser incorrectly interpreting text or binary assets as executable script. | Low | **Mitigated** | **Mitigated**: `<meta http-equiv="X-Content-Type-Options" content="nosniff">` added to `index.html` and configured across all hosting profiles. |
| **THREAT-07** | **Future Admin / CMS Auth Bypass** | Introducing an admin panel without server-side policy enforcement, relying solely on frontend route guards. | Critical (Future) | **Informational** | **Documented**: Comprehensive requirements established in `SECURITY_RULES.md` and `SECURITY_AUDIT_REPORT.md` requiring server-side Supabase RLS and least-privilege tokens. |

---

## 3. Data Flow Diagram

```
[ Visitor Browser ]
        │
        ├── HTTPS Request ───────────────► [ Hosting CDN Edge (Vercel / Netlify / Cloudflare) ]
        │                                             │
        │◄── Security Headers (CSP, HSTS, X-Frame) ───┤
        │◄── Statically Compiled HTML/JS/CSS/SVG ─────┘
        │
        ├── Fonts / CDN Requests ────────► [ Google Fonts (fonts.googleapis.com / fonts.gstatic.com) ]
        │
        └── Outbound Navigation ─────────► [ External Social Profiles (rel="noopener noreferrer") ]
```

---

## 4. Key Security Assets & Protection Boundaries

1. **Brand & Identity Integrity**: The designer's published resume, professional milestones, case studies, and contact details must be tamper-proof against defacement.
2. **Visitor Trust & Safety**: Visitors must be protected against malicious tab redirection, malicious third-party scripts, and clickjacking.
3. **Repository Cleanliness**: No confidential API tokens or environment secrets must ever enter the public git history or client bundles.
