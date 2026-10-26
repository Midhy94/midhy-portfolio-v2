# Project Instructions & AI Guidelines

This workspace is the personal design portfolio of Midhun M. (`midhy-portfolio-v2`), built with Vue 3, Vite, TypeScript, and SCSS.

## Mandatory Security Rules
All AI agents, contributors, and automated tooling operating in this repository MUST strictly follow the permanent security rules documented in [SECURITY_RULES.md](./SECURITY_RULES.md).

Key directives:
- Do not hardcode credentials or expose secret keys in client bundles.
- Use safe Vue rendering (`{{ }}`) and avoid raw DOM injection (`v-html`, `innerHTML`).
- Enforce `rel="noopener noreferrer"` on all external links opening new tabs.
- Always run `npm run test:security` and `npm run build` to verify changes before concluding tasks.
- Maintain existing visual craft, typography, transitions, and the dual-portal (Personal/Works) switcher.
