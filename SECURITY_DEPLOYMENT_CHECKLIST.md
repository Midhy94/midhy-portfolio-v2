# Pre-Deployment Security Checklist — Midhun M. Portfolio

Complete this checklist prior to pointing production DNS or cutting a release for `midhy-portfolio-v2`.

---

## 1. Secrets & Environment Configuration

- [ ] **No Secrets in Source**: Confirm no API keys, private tokens, passwords, or Supabase service keys exist in the repository or git history.
- [ ] **Exclusion of Real `.env` Files**: Verify that `.env` and `.env.local` files are excluded by `.gitignore` and not tracked by git (`git status` shows clean).
- [ ] **Placeholders Only in `.env.example`**: Confirm that [.env.example](./.env.example) contains only non-sensitive template variables.
- [ ] **Provider Settings**: If any backend variables are needed, configure them directly within the hosting provider's dashboard (e.g. Vercel Environment Variables), scoped to Production.

---

## 2. Code Quality & Security Tests

- [ ] **Type-Check Passes**:
  ```bash
  npm run type-check
  ```
- [ ] **Automated Security Audit Passes**:
  ```bash
  npm run test:security
  ```
- [ ] **Production Build Passes Cleanly**:
  ```bash
  npm run build
  ```
- [ ] **Zero High/Critical Dependency CVEs**:
  ```bash
  npm audit --audit-level=high
  ```
- [ ] **Inspect Output Bundle**: Check `dist/` directory to confirm no `.map` source maps containing unminified source code are deployed unless explicitly intended.

---

## 3. Hosting & Edge Headers

- [ ] **Hosting Profile In Place**: Verify that your target hosting configuration file is present:
  - For Vercel: [vercel.json](./vercel.json)
  - For Netlify: [netlify.toml](./netlify.toml)
  - For Cloudflare Pages: [public/_headers](./public/_headers)
- [ ] **HTTPS Enforced**: Confirm that the hosting provider enforces automatic HTTP $\rightarrow$ HTTPS redirection.
- [ ] **Content-Security-Policy (CSP) Active**: Verify that the CSP header allows Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`) without console errors.
- [ ] **Frame Protection**: Confirm `X-Frame-Options: DENY` and `frame-ancestors 'none'` prevent clickjacking.
- [ ] **HSTS Enabled**: Ensure `Strict-Transport-Security` is active on production HTTPS domains.

---

## 4. UI & Behavioral Integrity Verification

- [ ] **Personal & Works Portal Switcher**: Click the floating pill switcher in both desktop and mobile viewports to verify that the cinematic wipe transition operates smoothly.
- [ ] **Route Navigation**: Verify that `/`, `/about`, `/work`, `/work/archive`, and `/work/design-systems-tokens` resolve as expected.
- [ ] **404 Catch-All**: Visit an invalid URL (e.g. `/invalid-test-route`) to verify that the custom 404 page is rendered cleanly without unhandled exceptions.
- [ ] **PDF Resume Download**: Click "Download Résumé (PDF)" to ensure `/Midhun_M_Resume.pdf` opens in a new tab without tabnabbing risks.
- [ ] **Email Copy Interaction**: Click the email copy button in both Site Header and Site Footer to confirm clipboard feedback works without errors.

---

## 5. Repository & Account Hardening

- [ ] **GitHub Account MFA**: Ensure Multi-Factor Authentication is enabled on the GitHub account owning `Midhy94/midhy-portfolio-v2`.
- [ ] **Hosting & Domain MFA**: Ensure MFA is enabled on Vercel/Netlify/Cloudflare and the domain registrar.
- [ ] **Branch Protection**: Require status checks (`Security & Quality Guardrails`) before merging into `main`.
- [ ] **Dependabot Enabled**: Enable Dependabot security alerts and version updates in GitHub repository settings.

---

## 6. Incident Response & Recovery

- [ ] **Repository Backup**: Maintain an off-site clone or secondary remote backup.
- [ ] **Revocation Procedure**: In the unlikely event an API key or token is committed:
  1. Revoke/rotate the credential immediately in the issuing service dashboard.
  2. Rewrite git history using `git-filter-repo` or BFG Repo-Cleaner if necessary.
  3. Force-push to all remote branches and notify collaborators.
