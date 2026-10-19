<script setup lang="ts">
import { Mail, CheckCircle2, Clock, Globe } from 'lucide-vue-next';

// 1. Employment History strictly from resume
const workHistory = [
  {
    role: 'UI, UX, Product Designer',
    company: 'Techgentsia Software Technologies',
    period: '2020 – Present',
    responsibilities: [
      'Lead end-to-end UI/UX and product design across web and mobile platforms, applying user-centered methodologies from initial discovery through engineering handoff.',
      'Conduct qualitative user research, user interviews, surveys, and usability testing to extract behavioral insights and validate product decisions.',
      'Develop comprehensive user personas, journey maps, and user flows to align cross-functional engineering teams and stakeholders around user priorities.',
      'Build, govern, and scale design systems and component libraries, standardizing UI patterns and reducing frontend development time by 25%.',
      'Integrate AI-assisted workflows into UI/UX ideation, website development, rapid prototyping, design-to-code, and visual production to accelerate concept-to-delivery cycles.',
      'Utilize AI coding agents and vibe-coding workflows to rapidly prototype, build, and test responsive digital layouts, UI components, and functional web experiences.',
      'Prepare rigorous design documentation, design tokens, and inspect-ready specifications to streamline frontend developer collaboration and support WCAG-aligned accessibility requirements.',
      'Formulate and present design concepts, interactive prototypes, and UX rationale directly to clients, product managers, and executive leadership.',
    ],
  },
  {
    role: 'Web Designer',
    company: 'SASP',
    period: '2019 – 2020',
    responsibilities: [
      'Designed and delivered responsive, visually compelling, and user-friendly websites aligned with client brand identity and technical requirements.',
      'Created wireframes, high-fidelity mockups, and interactive prototypes for client presentation, feedback, and formal approval.',
      'Managed website project timelines, deliverables, and asset pipelines to ensure timely completion within project scopes and budgets.',
      'Optimized website performance, page load speed, cross-browser compatibility, and multi-device responsive viewports.',
      'Managed website content updates, technical maintenance, CMS administration, and troubleshooting for live client websites.',
    ],
  },
  {
    role: 'UI / UX Designer',
    company: 'Opesmount Technologies',
    period: '2016 – 2019',
    responsibilities: [
      'Managed and executed UI/UX design deliverables across multiple concurrent digital projects, prioritizing tasks to meet delivery milestones.',
      'Championed user-centered design principles and educated clients and stakeholders on the value and return on investment of UX design.',
      'Developed and maintained multi-brand design systems, component libraries, and style guides to ensure visual and functional consistency across products.',
      'Collaborated closely with software developers and product managers to ensure design solutions were technically feasible and aligned with commercial goals.',
    ],
  },
  {
    role: 'Junior Webdesigner',
    company: 'Rendeztech',
    period: '2012 – 2015',
    responsibilities: [
      'Designed structured, aesthetic web page layouts consistent with brand guidelines, design briefs, and client specifications.',
      'Optimized website graphics and interface elements for Search Engine Optimization (SEO) and improved user experience.',
      'Conducted cross-browser compatibility testing, responsive viewport validation, and functional troubleshooting to resolve usability issues.',
      'Communicated effectively with team members and clients to ensure project milestones were achieved on schedule.',
    ],
  },
];

// 2. Education & Certifications
const educationList = [
  { degree: 'Bachelor of Commerce (B.Com)', institution: 'M.G University', year: '2016' },
  { degree: 'Diploma in Web Designing', institution: 'G-Tech', year: '2013' },
  { degree: 'Higher Secondary Education', institution: 'Technical Higher Secondary School, Cherthala', year: '2012' },
];

const certificationsList = [
  { name: 'Foundations of UX Design by Google', issuer: 'Google UX Design Professional Certificate', status: 'Completed' },
  { name: 'Principles of UX/UI Design', issuer: 'Meta', status: 'In Progress' },
  { name: 'Developing Innovative Ideas for Product Leaders', issuer: 'Executive Leadership', status: 'In Progress' },
];

// 3. Languages
const languagesList = [
  { name: 'English', level: 'Upper Intermediate (B2)', note: 'Duolingo English Proficiency Score: 110' },
  { name: 'Hindi', level: 'Intermediate (B1)' },
  { name: 'Tamil', level: 'Beginner (A1)' },
];

// 4. Skills Taxonomy
const skillGroups = [
  {
    category: 'AI-Assisted Design & Engineering',
    items: [
      'AI-Assisted UI/UX Design', 'Design-to-Code Workflows', 'Vibe Coding',
      'Rapid Functional Prototyping', 'Prompt-Based UI Generation', 'AI Toolchain Integration'
    ],
  },
  {
    category: 'Product & UX Strategy',
    items: [
      'Qualitative User Research', 'User Interviews & Usability Testing', 'User Personas & Journey Maps',
      'Information Architecture', 'Low & High Fidelity Wireframes', 'Interactive Prototyping',
      'WCAG AA Inclusive Design'
    ],
  },
  {
    category: 'Design Systems & Tokens',
    items: [
      'Multi-Brand Token Architecture', 'Figma Component Libraries', 'Design Token Governance',
      'Responsive Mobile-First Architecture', 'Cross-Platform UI Specifications', 'Engineering Handoff'
    ],
  },
  {
    category: 'Web & Digital Delivery',
    items: [
      'HTML5, CSS3/SCSS, JavaScript', 'Vue.js Component Development', 'Cross-Browser Verification',
      'Performance Optimization', 'SEO Architecture', 'Technical CMS Maintenance'
    ],
  },
];

const designTools = ['Figma', 'Tokens Studio', 'Sketch', 'InVision', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'];
const primaryAiTools = ['Antigravity', 'Claude', 'Cursor', 'ChatGPT', 'Google Flow', 'Google Stitch'];
const ecosystemTools = ['Figma Make', 'v0', 'Lovable', 'Framer', 'Relume', 'Uizard', 'Adobe Firefly', 'Midjourney', 'Recraft'];
</script>

<template>
  <div class="about-view">
    <!-- SECTION 1: Editorial Profile Header -->
    <header class="about-hero">
      <div class="container">
        <div class="chapter-mark">
          <span class="chapter-mark__num">01</span>
          <span class="chapter-mark__rule"></span>
          <span>Profile & Philosophy</span>
        </div>

        <div class="hero-split">
          <div class="hero-text">
            <h1 class="hero-title">
              10+ years shaping intuitive digital products, scalable design systems, and AI-assisted workflows.
            </h1>

            <p class="hero-lead">
              I am <strong>Midhun M</strong>, a Senior UI/UX & Product Designer based in Alappuzha, Kerala. Over the past decade, my focus has been translating intricate business logic and domain constraints into validated, high-converting digital interfaces across fintech, SaaS, and hospitality.
            </p>

            <p class="hero-bio">
              My practice combines the rigor of user-centered design—conducting interviews, usability testing, and architecting design systems—with modern AI-assisted engineering and vibe-coding methods. This allows me to bridge the gap between design concepts and running code, testing ideas with live prototypes early in the product lifecycle.
            </p>

            <div class="hero-actions">
              <a
                href="mailto:mnairmidhun@gmail.com?subject=Resume%20Inquiry%20-%20Midhun%20M"
                class="button button--primary"
              >
                <Mail :size="16" />
                <span>Request Verified Resume</span>
              </a>

              <router-link to="/contact" class="button button--outline">
                <span>Start a Project Discussion</span>
              </router-link>
            </div>
          </div>

          <div class="hero-media">
            <div class="portrait-card">
              <div class="portrait-frame">
                <img
                  src="/images/designer-portrait.png"
                  alt="Midhun M - Senior Product Designer"
                  class="portrait-img"
                />
              </div>
              <div class="portrait-meta">
                <strong>Midhun M</strong>
                <span>Alappuzha, Kerala, India • Remote & Relocation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- SECTION 2: Career Milestones Ledger -->
    <section class="timeline-section">
      <div class="container">
        <div class="chapter-mark">
          <span class="chapter-mark__num">02</span>
          <span class="chapter-mark__rule"></span>
          <span>Career Ledger</span>
        </div>

        <div class="section-intro">
          <h2 class="section-heading">10+ years of verified employment history</h2>
          <p class="section-sub">Every role, promotion, and responsibility documented below is directly sourced from my verified career record.</p>
        </div>

        <div class="timeline-tree">
          <div v-for="job in workHistory" :key="job.company" class="timeline-entry">
            <div class="entry-meta">
              <span class="entry-period">{{ job.period }}</span>
              <span class="entry-company">{{ job.company }}</span>
            </div>

            <div class="entry-body">
              <h3 class="entry-role">{{ job.role }}</h3>
              <ul class="entry-bullets">
                <li v-for="(item, idx) in job.responsibilities" :key="idx">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: Skills & Tooling Taxonomy -->
    <section class="skills-section">
      <div class="container">
        <div class="chapter-mark">
          <span class="chapter-mark__num">03</span>
          <span class="chapter-mark__rule"></span>
          <span>Competencies & Tooling</span>
        </div>

        <div class="section-intro">
          <h2 class="section-heading">Comprehensive skills & technical taxonomy</h2>
          <p class="section-sub">Balanced across product discovery, design systems governance, and modern front-end delivery.</p>
        </div>

        <!-- Domain Skills Grid -->
        <div class="skills-grid">
          <div v-for="group in skillGroups" :key="group.category" class="skill-category">
            <h3 class="category-heading">{{ group.category }}</h3>
            <div class="chips-wrap">
              <span v-for="skill in group.items" :key="skill" class="skill-chip">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>

        <!-- Tooling Ledger -->
        <div class="tooling-ledger">
          <div class="tooling-group">
            <span class="tooling-label">Design & Prototyping</span>
            <div class="tooling-tags">
              <span v-for="t in designTools" :key="t" class="tag-chip">{{ t }}</span>
            </div>
          </div>

          <div class="tooling-group">
            <span class="tooling-label">AI & Agentic Coding Stack</span>
            <div class="tooling-tags">
              <span v-for="t in primaryAiTools" :key="t" class="tag-chip tag-chip--highlight">{{ t }}</span>
            </div>
          </div>

          <div class="tooling-group">
            <span class="tooling-label">Ecosystem & Generative UI</span>
            <div class="tooling-tags">
              <span v-for="t in ecosystemTools" :key="t" class="tag-chip">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: Credentials, Certifications & Languages -->
    <section class="credentials-section">
      <div class="container">
        <div class="chapter-mark">
          <span class="chapter-mark__num">04</span>
          <span class="chapter-mark__rule"></span>
          <span>Background</span>
        </div>

        <div class="credentials-grid">
          <!-- Education Column -->
          <div class="cred-col">
            <h3 class="cred-heading">Education</h3>
            <div class="cred-list">
              <div v-for="edu in educationList" :key="edu.degree" class="cred-entry">
                <strong>{{ edu.degree }}</strong>
                <span>{{ edu.institution }} • {{ edu.year }}</span>
              </div>
            </div>
          </div>

          <!-- Certifications Column -->
          <div class="cred-col">
            <h3 class="cred-heading">Certifications</h3>
            <div class="cred-list">
              <div v-for="cert in certificationsList" :key="cert.name" class="cred-entry">
                <strong>{{ cert.name }}</strong>
                <span>{{ cert.issuer }}</span>
                <span
                  class="status-chip"
                  :class="cert.status === 'Completed' ? 'status-chip--completed' : 'status-chip--processing'"
                >
                  <CheckCircle2 v-if="cert.status === 'Completed'" :size="12" />
                  <Clock v-else :size="12" />
                  <span>{{ cert.status }}</span>
                </span>
              </div>
            </div>
          </div>

          <!-- Languages Column -->
          <div class="cred-col">
            <h3 class="cred-heading">Languages</h3>
            <div class="cred-list">
              <div v-for="lang in languagesList" :key="lang.name" class="cred-entry">
                <div class="lang-row">
                  <Globe :size="14" class="lang-icon" />
                  <strong>{{ lang.name }}</strong>
                </div>
                <span>{{ lang.level }}</span>
                <small v-if="lang.note" class="lang-note">{{ lang.note }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.about-view {
  background-color: var(--color-bg-page);
  color: var(--color-text-primary);
  min-height: 100vh;
}

// ---------------------------------------------
// SECTION 1: Profile Header
// ---------------------------------------------
.about-hero {
  padding: var(--space-12) 0 var(--space-16);
  border-bottom: 1px solid var(--color-border);
}

.hero-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);
  align-items: center;

  @include respond-to('lg') {
    grid-template-columns: 1.35fr 1fr;
    gap: var(--space-16);
  }
}

.hero-title {
  margin-bottom: var(--space-5);
  max-width: 820px;
}

.hero-lead {
  font-size: clamp(1.0625rem, 1.25vw, 1.1875rem);
  line-height: 1.65;
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
  max-width: 680px;

  strong {
    font-weight: 600;
  }
}

.hero-bio {
  font-size: 1rem;
  line-height: 1.65;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-8);
  max-width: 680px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.hero-media {
  display: flex;
  justify-content: center;

  @include respond-to('lg') {
    justify-content: flex-end;
  }
}

.portrait-card {
  width: 100%;
  max-width: 360px;
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-card);
}

.portrait-frame {
  width: 100%;
  aspect-ratio: 4 / 4.2;
  background-color: var(--color-bg-surface);
  overflow: hidden;

  .portrait-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.portrait-meta {
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-top: 1px solid var(--color-border);

  strong {
    font-size: 0.9375rem;
    color: var(--color-text-primary);
  }

  span {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--color-text-muted);
  }
}

// ---------------------------------------------
// SECTION 2: Career Ledger
// ---------------------------------------------
.timeline-section {
  padding: var(--space-16) 0;
  border-bottom: 1px solid var(--color-border);
}

.section-intro {
  margin-bottom: var(--space-12);
  max-width: 680px;

  .section-heading {
    margin-bottom: var(--space-2);
  }

  .section-sub {
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
  }
}

.timeline-tree {
  display: flex;
  flex-direction: column;
}

.timeline-entry {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  padding: var(--space-8) 0;
  border-bottom: 1px solid var(--color-border);

  &:last-child {
    border-bottom: 0;
  }

  @include respond-to('md') {
    grid-template-columns: 240px 1fr;
    gap: var(--space-10);
  }
}

.entry-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;

  .entry-period {
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--color-accent-terracotta);
  }

  .entry-company {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-text-primary);
  }
}

.entry-body {
  .entry-role {
    font-size: 1.1875rem;
    color: var(--color-text-primary);
    margin-bottom: var(--space-4);
  }

  .entry-bullets {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    padding-left: var(--space-5);
    list-style-type: disc;

    li {
      font-size: 0.9375rem;
      line-height: 1.6;
      color: var(--color-text-secondary);
    }
  }
}

// ---------------------------------------------
// SECTION 3: Skills Taxonomy
// ---------------------------------------------
.skills-section {
  padding: var(--space-16) 0;
  border-bottom: 1px solid var(--color-border);
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
  margin-bottom: var(--space-12);

  @include respond-to('md') {
    grid-template-columns: repeat(2, 1fr);
  }
}

.skill-category {
  padding: var(--space-8);
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);

  .category-heading {
    font-size: 1.125rem;
    color: var(--color-text-primary);
    margin-bottom: var(--space-4);
  }
}

.chips-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.skill-chip {
  padding: 5px 12px;
  background-color: var(--color-bg-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-primary);
}

.tooling-ledger {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding: var(--space-8);
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.tooling-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);

  .tooling-label {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    text-transform: uppercase;
    color: var(--color-text-muted);
  }
}

.tooling-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);

  .tag-chip {
    padding: 5px 12px;
    background-color: var(--color-bg-page);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--color-text-primary);

    &--highlight {
      background-color: var(--color-accent-terracotta-soft);
      border-color: rgba(217, 87, 50, 0.25);
      color: var(--color-accent-terracotta);
      font-weight: 600;
    }
  }
}

// ---------------------------------------------
// SECTION 4: Credentials
// ---------------------------------------------
.credentials-section {
  padding: var(--space-16) 0 var(--space-24);
}

.credentials-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-10);

  @include respond-to('md') {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-8);
  }
}

.cred-col {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  .cred-heading {
    font-size: 1.25rem;
    padding-bottom: var(--space-3);
    border-bottom: 1px solid var(--color-border);
  }
}

.cred-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.cred-entry {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);

  strong {
    font-size: 0.9375rem;
    color: var(--color-text-primary);
  }

  span {
    font-size: 0.8125rem;
    color: var(--color-text-secondary);
  }
}

.status-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  width: fit-content;
  margin-top: 2px;

  &--completed {
    background-color: rgba(21, 128, 61, 0.1);
    color: var(--color-success);
    font-weight: 600;
  }

  &--processing {
    background-color: rgba(180, 83, 9, 0.1);
    color: var(--color-warning);
  }
}

.lang-row {
  display: flex;
  align-items: center;
  gap: var(--space-2);

  .lang-icon {
    color: var(--color-accent-terracotta);
  }
}

.lang-note {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  color: var(--color-text-muted);
}
</style>
