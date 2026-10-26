# Mandatory Security Rules for Future AI & Developer Contributions

These rules are permanent requirements for any AI assistant, automated agent, or developer making modifications to this repository (`midhy-portfolio-v2`).

---

## 1. Core Architectural & Code Rules

1. **Inspect Existing Architecture Before Editing**: Understand data flows, routing models, and component boundaries before introducing new state or abstractions.
2. **Never Hardcode Secrets**: Never embed API keys, access tokens, database passwords, private encryption keys, or signing secrets in code, templates, or commits.
3. **Never Place Privileged Credentials in Frontend Code**: All `VITE_*` environment variables are compiled into client browser bundles. Never place Supabase `service_role` keys, backend admin secrets, or private mailer credentials in frontend variables.
4. **Never Disable Security Checks for Convenience**: Do not disable type-checking, linter rules, Content Security Policies, route guards, or input validation to force a feature or build to succeed.
5. **Never Trust Client-Side Permissions**: If an administrative or authenticated portal is introduced, authorization MUST be enforced on the server/database layer (e.g. Supabase RLS and server functions), never solely via Vue Router guards or UI toggles.
6. **Evaluate Dependencies Rigorously**: Do not introduce new packages without confirming maintenance activity, licensing, size impact, and absence of known CVEs. Never run automated force-fix commands (`npm audit fix --force`) that risk breaking updates.
7. **Validate Untrusted Input at the Trusted Boundary**: Sanitize and validate route parameters, query strings, and external payload strings before consumption. Use schema validation on server endpoints.
8. **Use Safe Vue Rendering by Default**: Always use standard Vue text interpolation (`{{ }}`). Do not introduce `v-html`, `innerHTML`, `outerHTML`, or `document.write` unless rigorously justified and sanitized by a maintained library (e.g. DOMPurify).
9. **Review Every Database Policy Change**: When working with Supabase or databases, verify that Row Level Security (RLS) is enabled and test negative cases (anonymous visitor cannot create, update, or delete records).
10. **Add Tests for Security-Sensitive Behavior**: When adding routes, forms, or data access, maintain regression tests verifying that unauthorized access and malformed payloads are rejected.
11. **Preserve Existing Design and UX**: Maintain the human-crafted editorial visual direction, typography, animations, responsive layouts, and Personal/Works portal switcher unless a design change is required to mitigate a verified security issue.
12. **Never Claim Verification Without Execution**: Never state that a build, audit, or test succeeded without actively executing it in the terminal and inspecting the exit code and output.
13. **Document Security Trade-offs**: When implementing features that balance security with developer experience or third-party integrations, record the rationale and residual risks in security documentation.
14. **Require Explicit Approval for Destructive or Production Actions**: Do not deploy code, modify production DNS, drop database tables, rotate live API keys, or alter remote repository settings without explicit user authorization.

---

## 2. CI Verification Command

Before committing or opening a pull request, always verify:
```bash
npm run type-check      # Verify TypeScript integrity
npm run test:security   # Verify XSS, tabnabbing, secrets, and CVEs
npm run build           # Verify production build compilation
```
