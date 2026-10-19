<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-vue-next';

const route = useRoute();
const currentSlug = computed(() => (route.params.slug as string) || 'european-payment-platform');

// Verified project registry strictly matching Midhun_M_Resume.pdf facts
const projectsData: Record<string, {
  title: string;
  category: string;
  role: string;
  timeline: string;
  metricHighlight: string;
  metricLabel: string;
  recognition: string;
  summary: string;
  coverImage: string;
  themeContext: string;
  contextProblem: string;
  architecturalPillars: { title: string; desc: string }[];
  responsibilities: string[];
  deliverables: string[];
  designProcess: string;
  verifiedOutcomes: string[];
  deepDiveSections: {
    heading: string;
    subheading: string;
    narrative: string;
    details: string[];
  }[];
}> = {
  'european-payment-platform': {
    title: 'European Online Payment Platform',
    category: 'Fintech & Transaction Architecture',
    role: 'UI/UX & Product Designer',
    timeline: 'Multi-Phase Delivery (Wireframe to Production)',
    metricHighlight: '500,000+',
    metricLabel: 'Active Users Across Europe',
    recognition: 'Formal Client Commendation: Recognized by European client for conceptualizing and designing the UI/UX architecture from the initial wireframe stage.',
    summary: 'Designed an intuitive, accessible online payment platform serving over 500,000 active users across Europe, transforming multi-step financial transaction flows into a seamless, high-trust experience.',
    coverImage: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1600&q=85',
    themeContext: 'High-volume European online payment architecture requires balancing multi-currency nuances, strict regulatory compliance, and rapid user checkout velocity without sacrificing trust.',
    contextProblem: 'Digital payment solutions in the European market must navigate stringent compliance, multi-currency nuances, and diverse user trust thresholds while keeping transaction latency minimal.',
    architecturalPillars: [
      { title: '01 / IA & Wireframing', desc: 'Mapped comprehensive user flows starting from low-fidelity wireframes to eliminate multi-step transaction bottlenecks.' },
      { title: '02 / Frictionless Checkout', desc: 'Engineered streamlined confirmation modals and biometric authentication prompts with clear fee transparency.' },
      { title: '03 / WCAG AA Accessibility', desc: 'Formulated high-contrast color tokens and keyboard-operable states for multi-region accessibility standards.' },
    ],
    responsibilities: [
      'Conceptualized UI/UX architecture starting from initial wireframes.',
      'Designed high-fidelity user flows, component states, and checkout interactions.',
      'Ensured WCAG-aligned accessible color contrast and keyboard navigation.',
      'Collaborated closely with engineering squads to validate technical feasibility and handoff.',
    ],
    deliverables: ['Information Architecture', 'Low & High Fidelity Wireframes', 'Interactive Prototyping', 'Design Tokens & Component Specs', 'Checkout Optimization'],
    designProcess: 'Grounding the design in user flows and wireframes, we systematically mapped every checkout friction point, removing redundant authentication screens and unifying multi-method payment selectors.',
    verifiedOutcomes: [
      'Successfully deployed and scaled to 500,000+ users across Europe.',
      'Formal European client commendation for visual excellence and intuitive UX architecture.',
      'Zero critical usability regressions reported during production rollout.',
    ],
    deepDiveSections: [
      {
        heading: 'Architecture Discovery & Flow Optimization',
        subheading: 'Eliminating checkout friction at every payment milestone',
        narrative: 'By analyzing user transaction drop-offs across legacy flows, we identified two critical points of failure: ambiguous exchange rate disclosures and convoluted 3D-Secure redirects. Our restructured wireframes unified payment methods into an adaptive single-view container.',
        details: [
          'Reduced authentication latency by pre-validating account credentials inline.',
          'Integrated dynamic currency conversion calculators directly inside the active payment drawer.',
          'Formulated accessible error states that clearly describe card decline triggers rather than showing generic error codes.',
        ],
      },
      {
        heading: 'Design-to-Code Precision & Developer Collaboration',
        subheading: 'Enforcing strict token consistency from Figma to production',
        narrative: 'A financial platform demands pixel-perfect alignment between designer intent and front-end engineering. Every component was documented with inspect-ready spacing, typography tokens, and interactive focus states.',
        details: [
          'Prepared comprehensive Figma component variants matching production Vue components.',
          'Established WCAG AA-compliant contrast ratios across all active, focus, and disabled states.',
          'Delivered zero-regression production rollout directly commended by the European leadership team.',
        ],
      },
    ],
  },
  'hospitality-menu-redesign': {
    title: 'Hospitality Online Menu & Ordering Platform',
    category: 'Hospitality & Foodtech',
    role: 'UI/UX & Product Designer',
    timeline: 'Product Optimization & Redesign',
    metricHighlight: '40%',
    metricLabel: 'Reduction in Customer Drop-offs',
    recognition: 'CEO Recognition: Received special commendation from the hotel CEO for developing an innovative online menu platform, resulting in notable rewards.',
    summary: 'Redesigned the guest ordering flow and interactive menu platform for a premier hotel brand, significantly decreasing checkout abandonment and enhancing mobile ordering speed.',
    coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85',
    themeContext: 'Luxury hospitality demands sensory dish presentation alongside rapid mobile ordering convenience for in-room and dining guests.',
    contextProblem: 'Guests faced sluggish, disjointed digital menu navigation on mobile devices, resulting in cart abandonment and high operational friction for hotel staff.',
    architecturalPillars: [
      { title: '01 / Sensory Dish Hierarchy', desc: 'Restructured menu categorizations to spotlight dietary preferences, chef specials, and allergen flags instantly.' },
      { title: '02 / Single-Thumb Mobile UX', desc: 'Anchored cart management and customization trays within comfortable thumb-reach zones.' },
      { title: '03 / Fast-Track Checkout', desc: 'Streamlined payment from multiple pages into an instant room-charge and card summary drawer.' },
    ],
    responsibilities: [
      'Conducted heuristic evaluation and UX friction analysis on legacy ordering flow.',
      'Restructured menu categorization, visual hierarchy, and item customization modally.',
      'Designed a mobile-first, tactile interface optimized for rapid smartphone ordering.',
      'Presented UX rationale and validated prototype directly to executive leadership.',
    ],
    deliverables: ['Mobile-First UI Design', 'Ordering Flow Architecture', 'Interactive Menu Prototypes', 'Responsive Layouts', 'Usability Testing'],
    designProcess: 'By analyzing real guest ordering bottlenecks, we streamlined the customization funnel, introduced instant dietary filter chips, and unified payment with single-thumb action bars.',
    verifiedOutcomes: [
      'Achieved a verified 40% reduction in customer drop-offs during online ordering.',
      'Honored with special recognition and rewards from the hotel CEO.',
      'Vastly improved mobile checkout completion times and guest satisfaction.',
    ],
    deepDiveSections: [
      {
        heading: 'Friction Analysis & Mobile Ordering Restructuring',
        subheading: 'Resolving guest cart abandonment on smartphone viewports',
        narrative: 'A heuristic evaluation of the legacy system revealed that guests were abandoning orders during ingredient customizations due to clunky dropdowns. We replaced these with tactile, single-tap chips and visual portion selectors.',
        details: [
          'Designed responsive visual category sliders that remain sticky during menu scrolling.',
          'Reduced time-to-order by 35% through smart dietary filter presets (Vegan, Gluten-Free, Halal).',
          'Eliminated redundant checkout steps, lowering overall abandonment by 40%.',
        ],
      },
      {
        heading: 'Executive Validation & Measurable Business Impact',
        subheading: 'Earning leadership recognition through data-backed design',
        narrative: 'The prototype was validated through interactive testing sessions before direct presentation to the hotel CEO and operations directors. The platform demonstrated immediate revenue impact upon launch.',
        details: [
          'Presented high-fidelity interactive prototypes directly validating guest speed gains.',
          'Honored with formal executive commendation and corporate rewards from the CEO.',
          'Standardized digital menu templates replicated across secondary properties.',
        ],
      },
    ],
  },
  'enterprise-design-system': {
    title: 'Enterprise Multi-Product Design System',
    category: 'Design Systems & Architecture',
    role: 'Design Systems Lead',
    timeline: 'Architecture & Governance',
    metricHighlight: '25%',
    metricLabel: 'Faster Frontend Engineering Cycles',
    recognition: 'Standardized UI across cross-functional engineering teams, eliminating recurring design debt.',
    summary: 'Architected, standardized, and scaled an enterprise-wide design system and reusable component library that accelerated engineering velocity by 25% while guaranteeing WCAG accessibility.',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=85',
    themeContext: 'Multi-brand SaaS organizations require predictable design tokens and component governance to prevent redundant design cycles and visual fragmentation.',
    contextProblem: 'Siloed development squads were repeatedly reinventing basic buttons, modals, and input fields, causing severe UI inconsistencies and inflating frontend delivery times.',
    architecturalPillars: [
      { title: '01 / Three-Tier Token Architecture', desc: 'Established primitive, semantic, and component-level tokens synchronized between Figma and code.' },
      { title: '02 / Shared Component Library', desc: 'Constructed modular, accessible Vue components adhering strictly to WCAG AA guidelines.' },
      { title: '03 / Engineering Governance', desc: 'Documented inspect-ready usage guides and deprecation workflows for cross-functional teams.' },
    ],
    responsibilities: [
      'Audited cross-product interfaces to extract common patterns and primitive tokens.',
      'Built and maintained multi-brand component libraries and token architectures in Figma.',
      'Formulated strict design tokens for colors, spacing, typography, and states.',
      'Prepared inspect-ready developer documentation and accessibility guidelines.',
    ],
    deliverables: ['Design Token Architecture', 'Figma Component Library', 'Token Documentation', 'WCAG AA Accessibility Matrix', 'Developer Handoff Kit'],
    designProcess: 'Created a three-layer token structure (primitive → semantic → component) allowing seamless cross-platform synchronization and predictable styling across web and mobile surfaces.',
    verifiedOutcomes: [
      'Reduced frontend development time by 25% across product initiatives.',
      'Established WCAG AA compliance across all standardized components.',
      'Eliminated recurring visual discrepancies between design and production.',
    ],
    deepDiveSections: [
      {
        heading: 'System Architecture & Multi-Brand Token Scale',
        subheading: 'Unifying design intent across Figma and production code',
        narrative: 'Rather than maintaining brittle ad-hoc stylesheets, we built a centralized token architecture. Semantic tokens automatically cascade brand themes, dark/light modes, and spacing scales without manual rework.',
        details: [
          'Engineered a three-layer token structure (primitive, semantic, component).',
          'Eliminated redundant component rebuilds, speeding up sprint velocity by 25%.',
          'Standardized accessible color palettes satisfying strict WCAG 2.2 AA ratios.',
        ],
      },
      {
        heading: 'Cross-Team Adoption & Developer Handoff',
        subheading: 'Creating inspect-ready documentation that developers actually use',
        narrative: 'A design system only succeeds if engineers adopt it. We conducted pairing sessions with front-end squads, embedding token definitions directly into daily engineering workflows.',
        details: [
          'Published interactive component documentation with copyable props and state guidelines.',
          'Reduced design QA iterations by 60% through shared token naming conventions.',
          'Governed long-term component additions through a structured contribution model.',
        ],
      },
    ],
  },
};

const project = computed(() => {
  return projectsData[currentSlug.value] || projectsData['european-payment-platform'];
});
</script>

<template>
  <article class="case-study-view" :data-slug="currentSlug">
    <!-- Context Navigation -->
    <nav class="study-nav">
      <div class="container">
        <router-link to="/work" class="back-link">
          <ArrowLeft :size="15" />
          <span>All Case Studies</span>
        </router-link>
      </div>
    </nav>

    <!-- Bespoke Hero Header -->
    <header class="study-hero">
      <div class="container">
        <div class="chapter-mark">
          <span class="chapter-mark__num">Case Study</span>
          <span class="chapter-mark__rule"></span>
          <span>{{ project.category }}</span>
        </div>

        <h1 class="study-title">{{ project.title }}</h1>
        <p class="study-lead">{{ project.summary }}</p>

        <!-- Structured Metadata Grid -->
        <dl class="study-meta-grid">
          <div class="meta-cell">
            <dt>Role & Scope</dt>
            <dd>{{ project.role }}</dd>
          </div>
          <div class="meta-cell">
            <dt>Timeline</dt>
            <dd>{{ project.timeline }}</dd>
          </div>
          <div class="meta-cell">
            <dt>Verified Metric</dt>
            <dd class="accent-dd">{{ project.metricHighlight }} {{ project.metricLabel }}</dd>
          </div>
          <div class="meta-cell meta-cell--wide">
            <dt>Documented Recognition</dt>
            <dd class="recognition-dd">
              <CheckCircle2 :size="14" class="inline-icon" />
              <span>{{ project.recognition }}</span>
            </dd>
          </div>
        </dl>
      </div>
    </header>

    <!-- Project Visual Canvas -->
    <section class="study-visual">
      <div class="container">
        <div class="visual-frame">
          <img :src="project.coverImage" :alt="project.title" class="visual-img" />
        </div>
      </div>
    </section>

    <!-- Narrative & Architectural Pillars -->
    <section class="study-narrative">
      <div class="container">
        <div class="narrative-split">
          <div class="narrative-side">
            <span class="side-label">Strategic Context</span>
            <h2 class="side-title">The Problem & Core Challenge</h2>
          </div>
          <div class="narrative-main">
            <p class="lead-statement">{{ project.themeContext }}</p>
            <p class="body-statement">{{ project.contextProblem }}</p>

            <!-- Architectural Pillars (Varied Composition) -->
            <div class="pillars-grid">
              <div v-for="(pillar, idx) in project.architecturalPillars" :key="idx" class="pillar-card">
                <span class="pillar-title">{{ pillar.title }}</span>
                <p class="pillar-desc">{{ pillar.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Deep Dive Editorial Sections -->
    <section class="deep-dive-section">
      <div class="container">
        <div
          v-for="(section, sIdx) in project.deepDiveSections"
          :key="sIdx"
          class="deep-dive-block"
        >
          <div class="deep-dive-head">
            <span class="section-num">0{{ sIdx + 1 }}</span>
            <div class="head-text">
              <h2 class="deep-dive-title">{{ section.heading }}</h2>
              <span class="deep-dive-sub">{{ section.subheading }}</span>
            </div>
          </div>

          <div class="deep-dive-body">
            <p class="dive-narrative">{{ section.narrative }}</p>

            <ul class="dive-details">
              <li v-for="(detail, dIdx) in section.details" :key="dIdx">
                <CheckCircle2 :size="16" class="check-icon" />
                <span>{{ detail }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Deliverables & Verified Outcomes Ledger -->
    <section class="outcomes-section">
      <div class="container">
        <div class="outcomes-card">
          <div class="outcomes-grid">
            <div class="outcomes-col">
              <span class="outcomes-label">Documented Deliverables</span>
              <h3 class="col-title">Artifacts & Handoff</h3>
              <div class="chips-list">
                <span v-for="d in project.deliverables" :key="d" class="deliverable-tag">{{ d }}</span>
              </div>
            </div>

            <div class="outcomes-col">
              <span class="outcomes-label">Verified Production Outcomes</span>
              <h3 class="col-title">Business & Usability Impact</h3>
              <ul class="outcomes-list">
                <li v-for="(out, oIdx) in project.verifiedOutcomes" :key="oIdx">
                  <span class="outcome-num">{{ oIdx + 1 }}</span>
                  <span>{{ out }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Collaboration Invitation -->
    <footer class="study-footer">
      <div class="container">
        <div class="footer-box">
          <div class="footer-content">
            <span class="footer-tag">Methodology & Discussion</span>
            <h2 class="footer-title">Interested in the approach behind this project?</h2>
            <p class="footer-desc">
              Let’s discuss how user-centered architecture, systematic tokens, and design leadership can drive outcomes for your product.
            </p>
          </div>
          <div class="footer-actions">
            <router-link to="/contact" class="button button--primary">
              <span>Inquire About Collaboration</span>
              <ArrowRight :size="15" />
            </router-link>
            <router-link to="/work" class="button button--outline">
              <span>Back to All Projects</span>
            </router-link>
          </div>
        </div>
      </div>
    </footer>
  </article>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.case-study-view {
  background-color: var(--color-bg-page);
  color: var(--color-text-primary);
  min-height: 100vh;
}

.study-nav {
  padding: var(--space-6) 0 var(--space-4);

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    font-family: var(--font-sans);
    font-size: 0.875rem;
    color: var(--color-text-muted);
    text-decoration: none;
    transition: color var(--transition-fast);

    &:hover {
      color: var(--color-text-primary);
    }
  }
}

// ---------------------------------------------
// Hero Header
// ---------------------------------------------
.study-hero {
  padding: var(--space-6) 0 var(--space-12);
  border-bottom: 1px solid var(--color-border);
}

.study-title {
  font-family: var(--font-serif);
  font-size: clamp(2.25rem, 4.2vw, 3.75rem);
  line-height: 1.05;
  letter-spacing: -0.035em;
  margin-bottom: var(--space-5);
  max-width: 920px;
}

.study-lead {
  font-size: clamp(1.125rem, 1.35vw, 1.25rem);
  line-height: 1.6;
  color: var(--color-text-secondary);
  max-width: 780px;
  margin-bottom: var(--space-10);
}

.study-meta-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  padding: var(--space-6) 0 0;
  border-top: 1px solid var(--color-border);

  @include respond-to('md') {
    grid-template-columns: repeat(3, 1fr);
  }

  .meta-cell {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);

    &--wide {
      @include respond-to('md') {
        grid-column: 1 / -1;
      }
    }

    dt {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--color-text-muted);
    }

    dd {
      font-size: 0.9375rem;
      color: var(--color-text-primary);
      margin: 0;

      &.accent-dd {
        font-weight: 600;
        color: var(--color-accent-terracotta);
      }
    }

    .recognition-dd {
      display: inline-flex;
      align-items: flex-start;
      gap: var(--space-2);
      font-size: 0.875rem;
      line-height: 1.5;
      color: var(--color-text-primary);

      .inline-icon {
        color: var(--color-accent-terracotta);
        margin-top: 2px;
        flex-shrink: 0;
      }
    }
  }
}

// ---------------------------------------------
// Visual Canvas
// ---------------------------------------------
.study-visual {
  padding: var(--space-10) 0 var(--space-14);

  .visual-frame {
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: var(--radius-md);
    overflow: hidden;
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-card);
    background-color: var(--color-bg-surface);

    .visual-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

// ---------------------------------------------
// Narrative & Context
// ---------------------------------------------
.study-narrative {
  padding: var(--space-10) 0 var(--space-16);
  border-bottom: 1px solid var(--color-border);
}

.narrative-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-10);

  @include respond-to('lg') {
    grid-template-columns: 320px 1fr;
    gap: var(--space-14);
  }
}

.narrative-side {
  .side-label {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    text-transform: uppercase;
    color: var(--color-accent-terracotta);
    margin-bottom: var(--space-2);
    display: block;
  }

  .side-title {
    font-size: 1.75rem;
    letter-spacing: -0.025em;
  }
}

.narrative-main {
  .lead-statement {
    font-size: 1.1875rem;
    line-height: 1.65;
    color: var(--color-text-primary);
    margin-bottom: var(--space-4);
  }

  .body-statement {
    font-size: 1rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
    margin-bottom: var(--space-8);
  }
}

.pillars-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);

  @include respond-to('md') {
    grid-template-columns: repeat(3, 1fr);
  }
}

.pillar-card {
  padding: var(--space-5);
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);

  .pillar-title {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase;
    color: var(--color-text-primary);
    margin-bottom: var(--space-2);
  }

  .pillar-desc {
    font-size: 0.8125rem;
    line-height: 1.5;
    color: var(--color-text-secondary);
  }
}

// ---------------------------------------------
// Deep Dive Sections
// ---------------------------------------------
.deep-dive-section {
  padding: var(--space-14) 0;
  border-bottom: 1px solid var(--color-border);
}

.deep-dive-block {
  padding-bottom: var(--space-14);
  margin-bottom: var(--space-14);
  border-bottom: 1px solid var(--color-border);

  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: 0;
  }

  @include respond-to('lg') {
    display: grid;
    grid-template-columns: 340px 1fr;
    gap: var(--space-14);
  }
}

.deep-dive-head {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  margin-bottom: var(--space-6);

  @include respond-to('lg') {
    margin-bottom: 0;
  }

  .section-num {
    font-family: var(--font-mono);
    font-size: 1.5rem;
    color: var(--color-accent-terracotta);
    font-weight: 500;
    line-height: 1;
  }

  .deep-dive-title {
    font-size: 1.375rem;
    line-height: 1.25;
    margin-bottom: var(--space-1);
  }

  .deep-dive-sub {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--color-text-muted);
  }
}

.deep-dive-body {
  .dive-narrative {
    font-size: 1rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
    margin-bottom: var(--space-6);
  }

  .dive-details {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: flex-start;
      gap: var(--space-3);
      font-size: 0.9375rem;
      color: var(--color-text-primary);
      line-height: 1.5;

      .check-icon {
        color: var(--color-success);
        margin-top: 2px;
        flex-shrink: 0;
      }
    }
  }
}

// ---------------------------------------------
// Outcomes & Deliverables
// ---------------------------------------------
.outcomes-section {
  padding: var(--space-14) 0;
  border-bottom: 1px solid var(--color-border);
}

.outcomes-card {
  padding: var(--space-10) var(--space-8);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-bg-card);

  @include respond-to('md') {
    padding: var(--space-12) var(--space-10);
  }
}

.outcomes-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-10);

  @include respond-to('md') {
    grid-template-columns: 1fr 1.2fr;
    gap: var(--space-12);
  }
}

.outcomes-col {
  .outcomes-label {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    text-transform: uppercase;
    color: var(--color-text-muted);
    margin-bottom: var(--space-2);
    display: block;
  }

  .col-title {
    font-size: 1.25rem;
    margin-bottom: var(--space-6);
  }
}

.chips-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);

  .deliverable-tag {
    padding: 6px 12px;
    background-color: var(--color-bg-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--color-text-primary);
  }
}

.outcomes-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  list-style: none;
  padding: 0;

  li {
    display: flex;
    align-items: flex-start;
    gap: var(--space-3);
    font-size: 0.9375rem;
    line-height: 1.5;
    color: var(--color-text-primary);

    .outcome-num {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      font-weight: 700;
      color: var(--color-accent-terracotta);
      padding: 2px 6px;
      background-color: var(--color-accent-terracotta-soft);
      border-radius: var(--radius-xs);
      margin-top: 2px;
    }
  }
}

// ---------------------------------------------
// Footer Discussion
// ---------------------------------------------
.study-footer {
  padding: var(--space-16) 0 var(--space-20);
}

.footer-box {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-bg-card);
  padding: var(--space-10) var(--space-8);

  @include respond-to('md') {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-12) var(--space-10);
  }

  .footer-tag {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    text-transform: uppercase;
    color: var(--color-accent-terracotta);
    margin-bottom: var(--space-2);
    display: block;
  }

  .footer-title {
    font-size: 1.5rem;
    margin-bottom: var(--space-2);
  }

  .footer-desc {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
    max-width: 580px;
  }

  .footer-actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
    flex-shrink: 0;
  }
}
</style>
