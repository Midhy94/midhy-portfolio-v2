<script setup lang="ts">
import { ref } from 'vue';
import { ArrowUpRight, ArrowRight, X, ExternalLink, Mail, CheckCircle2 } from 'lucide-vue-next';

// Documented metrics from Midhun_M_Resume.pdf
const keyMetrics = [
  { value: '500K+', label: 'European Payment Platform Users', detail: 'Architected UI/UX from initial wireframes to production handoff' },
  { value: '40%', label: 'Drop-off Reduction', detail: 'Slashing cart abandonment in premier hospitality ordering flows' },
  { value: '25%', label: 'Engineering Cycle Acceleration', detail: 'Via enterprise design token architecture and shared component libraries' },
  { value: '10+', label: 'Years Design Leadership', detail: 'Across fintech, enterprise SaaS, and digital hospitality' },
];

// Documented Projects with bespoke presentation data
const featuredProjects = [
  {
    id: 'euro-pay',
    title: 'European Online Payment Platform',
    category: 'Fintech & Transaction Architecture',
    role: 'UI/UX Product Designer',
    stage: 'Wireframe to Production Handoff',
    client: 'European Financial Institution (via Techgentsia)',
    timeline: '2021 – 2023',
    slug: 'european-payment-platform',
    metrics: '500K+ Active European Users',
    commendation: 'Formal Client Commendation: Recognized for conceptualizing and delivering the end-to-end UI/UX architecture from initial wireframes.',
    summary: 'Architected the end-to-end payment workflow and visual design serving 500,000+ active users across Europe, transforming multi-step financial transaction flows into a seamless, high-trust experience.',
    story: 'Led UX discovery, customer journey mapping, wireframing, high-fidelity component prototyping, and engineering handoff. Designed intuitive transaction confirmation flows, multi-currency selectors, and stateful error recovery, earning formal client commendation for usability and rapid delivery.',
    coverImage: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
    tags: ['Information Architecture', 'Wireframes', 'Design Tokens', 'WCAG AA Compliance', 'Design-to-Code'],
  },
  {
    id: 'hospitality-flow',
    title: 'Hospitality Online Menu & Ordering Platform',
    category: 'Hospitality & Foodtech',
    role: 'UI/UX Product Designer',
    stage: 'Redesign & Usability Optimization',
    client: 'Premier Hotel Brand',
    timeline: '2022 – 2023',
    slug: 'hospitality-menu-redesign',
    metrics: '40% Drop-off Reduction',
    commendation: 'CEO Recognition: Received special commendation and rewards from the hotel CEO for innovating the guest digital ordering experience.',
    summary: 'Restructured the digital guest ordering flow and interactive menu architecture, slashing customer drop-offs by 40% and optimizing mobile ordering speed.',
    story: 'Pinpointed checkout abandonment friction points through heuristic reviews. Re-architected item categorization, introduced modal dish customizations, and streamlined checkout into single-thumb touch targets.',
    coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    tags: ['Mobile UX', 'Conversion Optimization', 'Menu Architecture', 'Prototyping'],
  },
  {
    id: 'scale-ds',
    title: 'Enterprise Multi-Product Design System',
    category: 'Design Systems & Tooling',
    role: 'Design Systems Lead',
    stage: 'System Architecture & Cross-Team Governance',
    client: 'Techgentsia Enterprise Product Suite',
    timeline: '2020 – Present',
    slug: 'enterprise-design-system',
    metrics: '25% Dev Time Reduction',
    commendation: 'Standardized UI across engineering squads, eliminating redundant design debt and establishing strict WCAG AA accessibility.',
    summary: 'Engineered a unified design token architecture and reusable component library that accelerated engineering velocity by 25% and enforced accessible standards.',
    story: 'Created a three-layer token structure (primitive → semantic → component) allowing seamless cross-platform synchronization between Figma and Vue/TypeScript frontend codebases.',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    tags: ['Design Tokens', 'Figma Libraries', 'Vue.js Components', 'WCAG AA Matrix', 'Governance'],
  },
];

// Documented career record from Midhun_M_Resume.pdf
const careerHighlights = [
  {
    period: '2020 – Present',
    role: 'UI, UX, Product Designer',
    company: 'Techgentsia Software Technologies',
    impact: 'Leading end-to-end UI/UX product design, user research, design token architectures, and AI-assisted engineering workflows across web and mobile surfaces.',
  },
  {
    period: '2019 – 2020',
    role: 'Web Designer',
    company: 'SASP',
    impact: 'Designed and deployed responsive digital experiences, created high-fidelity client presentations, and optimized web performance and cross-browser accessibility.',
  },
  {
    period: '2016 – 2019',
    role: 'UI / UX Designer',
    company: 'Opesmount Technologies',
    impact: 'Championed user-centered design methodologies, built multi-brand component libraries, and aligned product interfaces with commercial requirements.',
  },
  {
    period: '2012 – 2015',
    role: 'Junior Webdesigner',
    company: 'Rendeztech',
    impact: 'Designed structured web layouts, visual graphics, responsive viewports, and conducted cross-browser compatibility testing.',
  },
];

// Quick View Modal
const activePreviewProject = ref<typeof featuredProjects[0] | null>(null);

function openPreview(project: typeof featuredProjects[0]) {
  activePreviewProject.value = project;
  document.body.style.overflow = 'hidden';
}

function closePreview() {
  activePreviewProject.value = null;
  document.body.style.overflow = '';
}
</script>

<template>
  <div class="home-view">
    <!-- SECTION 1: Considered Hero Introduction (Spacious, Typographic, Authentic) -->
    <section class="hero-section">
      <div class="container hero-container">
        <div class="hero-layout">
          <!-- Text Narrative Column -->
          <div class="hero-content">
            <div class="hero-meta">
              <span class="status-indicator"></span>
              <span class="meta-location">Alappuzha, Kerala, India</span>
              <span class="meta-sep">•</span>
              <span class="meta-status">Senior UI/UX & Product Designer</span>
            </div>

            <h1 class="hero-headline">
              Shaping <span class="serif-italic">intuitive digital architectures</span>, scalable design systems, and high-velocity workflows.
            </h1>

            <p class="hero-lead">
              Over 10 years of craft partnering with product teams to translate complex domain logic into validated, high-converting interfaces across fintech, enterprise SaaS, and hospitality.
            </p>

            <div class="hero-actions">
              <router-link to="/work" class="button button--primary">
                <span>Explore Selected Work</span>
                <ArrowRight :size="16" />
              </router-link>

              <router-link to="/about" class="button button--outline">
                <span>Career Record & Approach</span>
              </router-link>
            </div>
          </div>

          <!-- Restrained Designer Portrait Presentation -->
          <div class="hero-aside">
            <div class="portrait-card">
              <div class="portrait-frame">
                <img
                  src="/images/designer-portrait.png"
                  alt="Midhun M — Senior UI/UX & Product Designer"
                  class="portrait-image"
                  loading="eager"
                />
              </div>
              <div class="portrait-caption">
                <div class="caption-info">
                  <span class="caption-name">Midhun M</span>
                  <span class="caption-role">10+ Years Professional Practice</span>
                </div>
                <span class="caption-badge">Verified Career</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: Key Career Metrics (Quiet Editorial Strip with Hairline Dividers) -->
    <section class="metrics-strip">
      <div class="container">
        <div class="metrics-row">
          <div v-for="(metric, idx) in keyMetrics" :key="idx" class="metric-block">
            <span class="metric-num">{{ metric.value }}</span>
            <div class="metric-desc">
              <strong class="metric-title">{{ metric.label }}</strong>
              <span class="metric-detail">{{ metric.detail }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: Selected Work (Individually Art-Directed Projects) -->
    <section class="work-section" id="selected-work">
      <div class="container">
        <!-- Chapter Header -->
        <div class="section-head">
          <div class="chapter-mark">
            <span class="chapter-mark__num">01</span>
            <span class="chapter-mark__rule"></span>
            <span>Selected Work</span>
          </div>
          <div class="head-row">
            <h2 class="section-title">Case studies in architecture, usability, and scale</h2>
            <router-link to="/work" class="link-editorial">
              <span>View All 3 Projects</span>
              <ArrowUpRight :size="14" class="link-arrow" />
            </router-link>
          </div>
        </div>

        <!-- LEAD FEATURE: European Payment Platform (Wide Asymmetric Layout) -->
        <article class="lead-project">
          <div class="lead-project__inner">
            <div class="lead-project__content">
              <div class="project-eyebrow">
                <span class="category-pill">{{ featuredProjects[0].category }}</span>
                <span class="timeline-tag">{{ featuredProjects[0].timeline }}</span>
              </div>

              <h3 class="lead-project__title">
                <router-link :to="`/work/${featuredProjects[0].slug}`">
                  {{ featuredProjects[0].title }}
                </router-link>
              </h3>

              <p class="lead-project__summary">
                {{ featuredProjects[0].summary }}
              </p>

              <!-- Verified Commendation Callout -->
              <div class="commendation-box">
                <div class="commendation-icon">
                  <CheckCircle2 :size="16" />
                </div>
                <div class="commendation-text">
                  <span class="commendation-label">Documented Achievement</span>
                  <p>{{ featuredProjects[0].commendation }}</p>
                </div>
              </div>

              <div class="lead-project__meta">
                <div class="meta-item">
                  <span class="meta-k">Role</span>
                  <span class="meta-v">{{ featuredProjects[0].role }}</span>
                </div>
                <div class="meta-item">
                  <span class="meta-k">Verified Scale</span>
                  <span class="meta-v highlight-val">{{ featuredProjects[0].metrics }}</span>
                </div>
              </div>

              <div class="lead-project__actions">
                <router-link :to="`/work/${featuredProjects[0].slug}`" class="button button--primary button--small">
                  <span>Read Full Case Study</span>
                  <ArrowRight :size="14" />
                </router-link>

                <button
                  type="button"
                  class="button button--subtle button--small"
                  @click="openPreview(featuredProjects[0])"
                >
                  <span>Quick View</span>
                </button>
              </div>
            </div>

            <div class="lead-project__visual" @click="openPreview(featuredProjects[0])">
              <div class="visual-wrapper">
                <img
                  :src="featuredProjects[0].coverImage"
                  :alt="featuredProjects[0].title"
                  class="visual-img"
                  loading="lazy"
                />
                <div class="visual-overlay">
                  <span class="visual-badge">Click for Overview</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- SECONDARY PROJECTS: Staggered Dual Editorial Row -->
        <div class="dual-projects">
          <article
            v-for="project in featuredProjects.slice(1)"
            :key="project.id"
            class="secondary-card"
          >
            <div class="secondary-card__visual" @click="openPreview(project)">
              <img :src="project.coverImage" :alt="project.title" loading="lazy" />
              <div class="visual-badge-corner">{{ project.metrics }}</div>
            </div>

            <div class="secondary-card__body">
              <div class="project-eyebrow">
                <span class="category-pill">{{ project.category }}</span>
              </div>

              <h3 class="secondary-card__title">
                <router-link :to="`/work/${project.slug}`">{{ project.title }}</router-link>
              </h3>

              <p class="secondary-card__summary">{{ project.summary }}</p>

              <div class="secondary-card__footer">
                <span class="secondary-card__role">{{ project.role }}</span>
                <router-link :to="`/work/${project.slug}`" class="link-editorial">
                  <span>Case Study</span>
                  <ArrowRight :size="13" class="link-arrow" />
                </router-link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- SECTION 4: Professional Experience (Clean Typographic Ledger) -->
    <section class="experience-section">
      <div class="container">
        <div class="section-head">
          <div class="chapter-mark">
            <span class="chapter-mark__num">02</span>
            <span class="chapter-mark__rule"></span>
            <span>Career Milestones</span>
          </div>
          <h2 class="section-title">10+ years of verified employment history</h2>
        </div>

        <div class="experience-ledger">
          <div
            v-for="(item, index) in careerHighlights"
            :key="index"
            class="ledger-row"
          >
            <div class="ledger-period">{{ item.period }}</div>
            <div class="ledger-role">
              <h3 class="role-title">{{ item.role }}</h3>
              <span class="company-name">{{ item.company }}</span>
            </div>
            <div class="ledger-impact">
              <p>{{ item.impact }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: AI-Assisted Craft & Engineering Velocity -->
    <section class="craft-section">
      <div class="container">
        <div class="craft-card">
          <div class="craft-grid">
            <div class="craft-content">
              <div class="chapter-mark">
                <span class="chapter-mark__num">03</span>
                <span class="chapter-mark__rule"></span>
                <span>Methodology</span>
              </div>
              <h2 class="craft-title">
                AI-assisted workflows grounded in <span class="serif-italic">design rigor</span>.
              </h2>
              <p class="craft-lead">
                I integrate agentic coding and generative design tooling not as a gimmick, but as an engineering velocity multiplier. By connecting Figma design tokens directly with running Vue and TypeScript environments, concept-to-prototype cycles compress from weeks into days.
              </p>

              <div class="craft-pillars">
                <div class="pillar">
                  <strong>01 / Design-to-Code</strong>
                  <span>Synchronizing Figma component tokens directly with production-ready Vue layouts.</span>
                </div>
                <div class="pillar">
                  <strong>02 / Rapid Vibe Coding</strong>
                  <span>Building working interactive prototypes with real logic to test usability before engineering sprints.</span>
                </div>
                <div class="pillar">
                  <strong>03 / Accessibility Auditing</strong>
                  <span>Automating WCAG AA contrast, keyboard focus, and semantic landmark validation.</span>
                </div>
              </div>
            </div>

            <div class="craft-tooling">
              <span class="tooling-label">Core Working Stack</span>
              <div class="tooling-list">
                <div class="tooling-group">
                  <span class="group-title">Design & Systems</span>
                  <div class="tool-tags">
                    <span>Figma</span>
                    <span>Tokens Studio</span>
                    <span>Sketch</span>
                    <span>Adobe CC</span>
                  </div>
                </div>
                <div class="tooling-group">
                  <span class="group-title">AI & Agentic Coding</span>
                  <div class="tool-tags">
                    <span>Antigravity</span>
                    <span>Cursor</span>
                    <span>Claude</span>
                    <span>ChatGPT</span>
                  </div>
                </div>
                <div class="tooling-group">
                  <span class="group-title">Frontend Delivery</span>
                  <div class="tool-tags">
                    <span>Vue 3</span>
                    <span>TypeScript</span>
                    <span>Vite</span>
                    <span>SCSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 6: Closing Invitation -->
    <section class="connect-section">
      <div class="container">
        <div class="connect-box">
          <div class="connect-content">
            <div class="chapter-mark">
              <span class="chapter-mark__num">04</span>
              <span class="chapter-mark__rule"></span>
              <span>Inquiry</span>
            </div>
            <h2 class="connect-title">Let’s discuss your next digital product.</h2>
            <p class="connect-lead">
              Available for senior and principal design roles, enterprise UX leadership, and design system governance.
            </p>
            <div class="connect-actions">
              <a href="mailto:mnairmidhun@gmail.com" class="button button--primary">
                <Mail :size="16" />
                <span>mnairmidhun@gmail.com</span>
              </a>
              <router-link to="/contact" class="button button--outline">
                <span>View Contact Channels</span>
              </router-link>
            </div>
          </div>
          <div class="connect-aside">
            <span class="aside-label">Direct Communication</span>
            <p class="aside-note">
              Based in Alappuzha, Kerala, India (UTC +05:30). Open to global remote, hybrid, and relocation engagements.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Preview Gallery Sheet Modal (Preserved Functionality) -->
    <teleport to="body">
      <transition name="sheet-slide">
        <div v-if="activePreviewProject" class="gallery-sheet-overlay" @click.self="closePreview">
          <div class="gallery-sheet-backdrop" @click="closePreview"></div>
          <dialog class="gallery-sheet" open>
            <button
              type="button"
              class="gallery-sheet__close"
              aria-label="Close case study preview"
              @click="closePreview"
            >
              <X :size="20" />
            </button>

            <header class="sheet-head">
              <span class="sheet-label">Case Study Overview</span>
              <div class="sheet-title-block">
                <h2>{{ activePreviewProject.title }}</h2>
                <p>{{ activePreviewProject.summary }}</p>
              </div>
            </header>

            <div class="sheet-hero-image">
              <img :src="activePreviewProject.coverImage" :alt="activePreviewProject.title" />
            </div>

            <section class="sheet-meta-section">
              <dl class="sheet-meta">
                <div>
                  <dt>Role & Scope</dt>
                  <dd>{{ activePreviewProject.role }}</dd>
                </div>
                <div>
                  <dt>Timeline</dt>
                  <dd>{{ activePreviewProject.timeline }}</dd>
                </div>
                <div>
                  <dt>Verified Outcome</dt>
                  <dd class="accent-dd">{{ activePreviewProject.metrics }}</dd>
                </div>
              </dl>

              <div class="sheet-story">
                <p>{{ activePreviewProject.story }}</p>
              </div>
            </section>

            <div class="sheet-footer">
              <router-link
                :to="`/work/${activePreviewProject.slug}`"
                class="button button--primary"
                @click="closePreview"
              >
                <span>Read Full In-Depth Case Study</span>
                <ExternalLink :size="16" />
              </router-link>
            </div>
          </dialog>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.home-view {
  background-color: var(--color-bg-page);
  color: var(--color-text-primary);
}

// ---------------------------------------------
// SECTION 1: Considered Hero
// ---------------------------------------------
.hero-section {
  padding: var(--space-12) 0 var(--space-16);
  border-bottom: 1px solid var(--color-border);

  @include respond-to('md') {
    padding: var(--space-16) 0 var(--space-20);
  }
}

.hero-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);
  align-items: center;

  @include respond-to('lg') {
    grid-template-columns: 1.35fr 1fr;
    gap: var(--space-14);
  }
}

.hero-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-muted);
  margin-bottom: var(--space-6);

  .status-indicator {
    width: 7px;
    height: 7px;
    border-radius: var(--radius-pill);
    background-color: var(--color-accent-terracotta);
    display: inline-block;
  }

  .meta-sep {
    opacity: 0.4;
  }
}

.hero-headline {
  margin-bottom: var(--space-6);
  max-width: 780px;
}

.hero-lead {
  font-size: clamp(1.0625rem, 1.25vw, 1.1875rem);
  line-height: 1.65;
  color: var(--color-text-secondary);
  max-width: 620px;
  margin-bottom: var(--space-10);

  strong {
    color: var(--color-text-primary);
    font-weight: 600;
  }
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4);
}

// Restrained Portrait Presentation
.hero-aside {
  display: flex;
  justify-content: center;

  @include respond-to('lg') {
    justify-content: flex-end;
  }
}

.portrait-card {
  width: 100%;
  max-width: 380px;
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-card);
}

.portrait-frame {
  width: 100%;
  aspect-ratio: 4 / 4.2;
  overflow: hidden;
  background-color: var(--color-bg-surface);

  .portrait-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: contrast(1.02);
  }
}

.portrait-caption {
  padding: var(--space-4) var(--space-5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--color-border);
  background-color: var(--color-bg-card);

  .caption-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .caption-name {
    font-family: var(--font-sans);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-primary);
  }

  .caption-role {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    color: var(--color-text-muted);
  }

  .caption-badge {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    padding: 3px 8px;
    background-color: var(--color-bg-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    color: var(--color-text-primary);
  }
}

// ---------------------------------------------
// SECTION 2: Metrics Strip
// ---------------------------------------------
.metrics-strip {
  padding: var(--space-10) 0;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-bg-card);
}

.metrics-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);

  @include respond-to('sm') {
    grid-template-columns: repeat(2, 1fr);
  }

  @include respond-to('lg') {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-10);
  }
}

.metric-block {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);

  .metric-num {
    font-family: var(--font-serif);
    font-size: clamp(2.25rem, 3.5vw, 3rem);
    font-weight: 400;
    line-height: 1;
    color: var(--color-accent-terracotta);
    letter-spacing: -0.03em;
  }

  .metric-desc {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .metric-title {
    font-family: var(--font-sans);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-primary);
  }

  .metric-detail {
    font-size: 0.8125rem;
    line-height: 1.45;
    color: var(--color-text-secondary);
  }
}

// ---------------------------------------------
// SECTION 3: Selected Work
// ---------------------------------------------
.work-section {
  padding: var(--space-16) 0 var(--space-20);
  border-bottom: 1px solid var(--color-border);
}

.section-head {
  margin-bottom: var(--space-12);

  .head-row {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);

    @include respond-to('md') {
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
    }
  }

  .section-title {
    max-width: 680px;
  }
}

// Lead Feature Card (Wide Asymmetric)
.lead-project {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-bg-card);
  overflow: hidden;
  margin-bottom: var(--space-10);
  box-shadow: var(--shadow-card);
  transition: border-color var(--transition-base), box-shadow var(--transition-base);

  &:hover {
    border-color: var(--color-border-strong);
    box-shadow: var(--shadow-hover);
  }

  &__inner {
    display: grid;
    grid-template-columns: 1fr;

    @include respond-to('lg') {
      grid-template-columns: 1.1fr 1fr;
    }
  }

  &__content {
    padding: var(--space-8);
    display: flex;
    flex-direction: column;

    @include respond-to('md') {
      padding: var(--space-10);
    }
  }

  &__title {
    font-family: var(--font-serif);
    font-size: clamp(1.75rem, 2.5vw, 2.25rem);
    letter-spacing: -0.025em;
    line-height: 1.15;
    margin-bottom: var(--space-4);

    a {
      color: var(--color-text-primary);
      text-decoration: none;
      transition: color var(--transition-fast);

      &:hover {
        color: var(--color-accent-terracotta);
      }
    }
  }

  &__summary {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
    margin-bottom: var(--space-6);
  }

  &__meta {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-4);
    padding: var(--space-4) 0;
    border-top: 1px solid var(--color-border);
    margin-bottom: var(--space-8);

    .meta-item {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .meta-k {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      text-transform: uppercase;
      color: var(--color-text-muted);
    }

    .meta-v {
      font-family: var(--font-sans);
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--color-text-primary);

      &.highlight-val {
        color: var(--color-accent-terracotta);
        font-weight: 600;
      }
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin-top: auto;
  }

  &__visual {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    background-color: var(--color-bg-surface);
    min-height: 320px;

    .visual-wrapper {
      width: 100%;
      height: 100%;
      position: relative;
    }

    .visual-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-smooth);
    }

    &:hover .visual-img {
      transform: scale(1.03);
    }

    .visual-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity var(--transition-fast);
    }

    &:hover .visual-overlay {
      opacity: 1;
    }

    .visual-badge {
      padding: 6px 14px;
      background-color: #ffffff;
      color: #111010;
      font-family: var(--font-sans);
      font-size: 0.75rem;
      font-weight: 600;
      border-radius: var(--radius-pill);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  }
}

.project-eyebrow {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-3);

  .category-pill {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-muted);
  }

  .timeline-tag {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    color: var(--color-text-muted);
    opacity: 0.6;
  }
}

.commendation-box {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background-color: var(--color-accent-terracotta-soft);
  border: 1px solid rgba(217, 87, 50, 0.2);
  border-radius: var(--radius-sm);
  margin-bottom: var(--space-6);

  .commendation-icon {
    color: var(--color-accent-terracotta);
    margin-top: 2px;
    flex-shrink: 0;
  }

  .commendation-label {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--color-accent-terracotta);
    margin-bottom: 2px;
  }

  p {
    font-size: 0.8125rem;
    line-height: 1.45;
    color: var(--color-text-primary);
  }
}

// Dual Secondary Projects Grid
.dual-projects {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);

  @include respond-to('md') {
    grid-template-columns: 1fr 1fr;
  }
}

.secondary-card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-bg-card);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-card);
  transition: border-color var(--transition-base), box-shadow var(--transition-base);

  &:hover {
    border-color: var(--color-border-strong);
    box-shadow: var(--shadow-hover);
  }

  &__visual {
    position: relative;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    cursor: pointer;
    background-color: var(--color-bg-surface);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-smooth);
    }

    &:hover img {
      transform: scale(1.04);
    }

    .visual-badge-corner {
      position: absolute;
      bottom: var(--space-3);
      left: var(--space-3);
      padding: 4px 10px;
      background-color: rgba(17, 16, 16, 0.85);
      color: #ffffff;
      backdrop-filter: blur(8px);
      border-radius: var(--radius-sm);
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      font-weight: 500;
    }
  }

  &__body {
    padding: var(--space-6);
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  &__title {
    font-family: var(--font-serif);
    font-size: 1.375rem;
    line-height: 1.25;
    margin-bottom: var(--space-3);

    a {
      color: var(--color-text-primary);
      text-decoration: none;

      &:hover {
        color: var(--color-accent-terracotta);
      }
    }
  }

  &__summary {
    font-size: 0.875rem;
    line-height: 1.55;
    color: var(--color-text-secondary);
    margin-bottom: var(--space-6);
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: var(--space-4);
    border-top: 1px solid var(--color-border);
    margin-top: auto;
  }

  &__role {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    color: var(--color-text-muted);
  }
}

// ---------------------------------------------
// SECTION 4: Experience Ledger
// ---------------------------------------------
.experience-section {
  padding: var(--space-16) 0;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-bg-page);
}

.experience-ledger {
  display: flex;
  flex-direction: column;
}

.ledger-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3);
  padding: var(--space-6) 0;
  border-bottom: 1px solid var(--color-border);

  @include respond-to('md') {
    grid-template-columns: 180px 260px 1fr;
    gap: var(--space-8);
    align-items: baseline;
  }

  &:last-child {
    border-bottom: 0;
  }
}

.ledger-period {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-accent-terracotta);
  font-weight: 600;
}

.ledger-role {
  display: flex;
  flex-direction: column;
  gap: 2px;

  .role-title {
    font-size: 1.0625rem;
    font-weight: 600;
    color: var(--color-text-primary);
  }

  .company-name {
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }
}

.ledger-impact {
  p {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
  }
}

// ---------------------------------------------
// SECTION 5: Craft & Methodology
// ---------------------------------------------
.craft-section {
  padding: var(--space-16) 0;
  border-bottom: 1px solid var(--color-border);
}

.craft-card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-bg-card);
  padding: var(--space-10) var(--space-8);

  @include respond-to('md') {
    padding: var(--space-14) var(--space-12);
  }
}

.craft-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-10);

  @include respond-to('lg') {
    grid-template-columns: 1.3fr 1fr;
    gap: var(--space-14);
  }
}

.craft-title {
  margin-bottom: var(--space-4);
}

.craft-lead {
  font-size: 1rem;
  line-height: 1.65;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-8);
}

.craft-pillars {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  .pillar {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-left: var(--space-4);
    border-left: 2px solid var(--color-accent-terracotta);

    strong {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      text-transform: uppercase;
      color: var(--color-text-primary);
    }

    span {
      font-size: 0.875rem;
      line-height: 1.5;
      color: var(--color-text-secondary);
    }
  }
}

.craft-tooling {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  background-color: var(--color-bg-page);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: var(--space-8);

  .tooling-label {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-text-muted);
  }

  .tooling-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
  }

  .group-title {
    display: block;
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: var(--space-2);
  }

  .tool-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);

    span {
      padding: 4px 10px;
      background-color: var(--color-bg-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-sm);
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--color-text-primary);
    }
  }
}

// ---------------------------------------------
// SECTION 6: Connect
// ---------------------------------------------
.connect-section {
  padding: var(--space-16) 0 var(--space-20);
}

.connect-box {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-bg-card);
  padding: var(--space-10) var(--space-8);
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);

  @include respond-to('md') {
    grid-template-columns: 1.4fr 1fr;
    align-items: center;
    padding: var(--space-14) var(--space-12);
  }
}

.connect-title {
  margin-bottom: var(--space-3);
}

.connect-lead {
  font-size: 1.0625rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-8);
  max-width: 540px;
}

.connect-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
}

.connect-aside {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-border);

  @include respond-to('md') {
    padding-top: 0;
    padding-left: var(--space-8);
    border-top: 0;
    border-left: 1px solid var(--color-border);
  }

  .aside-label {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    text-transform: uppercase;
    color: var(--color-text-muted);
  }

  .aside-note {
    font-size: 0.875rem;
    line-height: 1.55;
    color: var(--color-text-secondary);
  }
}

// ---------------------------------------------
// Quick Preview Modal
// ---------------------------------------------
.gallery-sheet-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @include respond-to('md') {
    align-items: center;
    padding: var(--space-8);
  }
}

.gallery-sheet-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(8px);
}

.gallery-sheet {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 860px;
  max-height: 90vh;
  background: #ffffff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  overflow-y: auto;
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);

  @include respond-to('md') {
    padding: var(--space-12);
  }

  &__close {
    position: absolute;
    top: var(--space-6);
    right: var(--space-6);
    width: 36px;
    height: 36px;
    border-radius: var(--radius-pill);
    background: var(--color-bg-surface);
    border: 1px solid var(--color-border);
    color: var(--color-text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color var(--transition-fast);

    &:hover {
      background: var(--color-border);
    }
  }
}

.sheet-head {
  margin-bottom: var(--space-6);

  .sheet-label {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    text-transform: uppercase;
    color: var(--color-accent-terracotta);
    margin-bottom: var(--space-2);
    display: block;
  }

  h2 {
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    letter-spacing: -0.025em;
    margin-bottom: var(--space-2);
  }

  p {
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
  }
}

.sheet-hero-image {
  border-radius: var(--radius-md);
  overflow: hidden;
  aspect-ratio: 16 / 9;
  margin-bottom: var(--space-8);
  border: 1px solid var(--color-border);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.sheet-meta-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  margin-bottom: var(--space-8);

  @include respond-to('md') {
    grid-template-columns: 1fr 1.6fr;
  }
}

.sheet-meta {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-right: var(--space-6);
  border-right: 1px solid var(--color-border);

  dt {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    text-transform: uppercase;
    color: var(--color-text-muted);
  }

  dd {
    font-size: 0.875rem;
    color: var(--color-text-primary);
    margin: 0;
  }

  .accent-dd {
    color: var(--color-accent-terracotta);
    font-weight: 600;
  }
}

.sheet-story {
  p {
    font-size: 0.9375rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
  }
}

.sheet-footer {
  display: flex;
  justify-content: flex-end;
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}

// Transition
.sheet-slide-enter-active,
.sheet-slide-leave-active {
  transition: opacity 0.3s ease;

  .gallery-sheet {
    transition: transform 0.35s var(--ease-editorial);
  }
}

.sheet-slide-enter-from,
.sheet-slide-leave-to {
  opacity: 0;

  .gallery-sheet {
    transform: translateY(100%);
  }
}
</style>
