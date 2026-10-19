<script setup lang="ts">
import { ref, computed } from 'vue';
import { ArrowRight, X, ExternalLink, CheckCircle2 } from 'lucide-vue-next';

interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  role: string;
  stage: string;
  industry: string;
  period: string;
  metric: string;
  commendation?: string;
  coverImage: string;
  story: string;
  gallery: string[];
}

const activeCategory = ref('All');

const categories = ['All', 'Fintech & Architecture', 'Hospitality & Web Apps', 'Design Systems'];

// Projects reflecting resume-documented impact
const projects = ref<ProjectItem[]>([
  {
    id: 'euro-pay',
    title: 'European Online Payment Platform',
    slug: 'european-payment-platform',
    category: 'Fintech & Architecture',
    role: 'UI/UX Product Designer',
    stage: 'Wireframe to Production Handoff',
    industry: 'Fintech & Digital Banking',
    period: '2021 – 2023',
    metric: '500K+ Active European Users',
    commendation: 'Formal Client Commendation: Recognized by European client for conceptualizing and designing the UI/UX architecture from the initial wireframe stage.',
    summary: 'Designed an online payment application serving over 500,000 active users across Europe, conceptualizing its UI/UX architecture from the initial wireframe stage through engineering handoff.',
    coverImage: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
    story: 'Led end-to-end UX discovery, wireframing, component-level prototyping, and client presentations for a high-volume European payment platform. Formulated intuitive transaction confirmation flows, accessible state styling, and earned formal client commendation for rapid delivery and usability.',
    gallery: [
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'hospitality-flow',
    title: 'Hospitality Online Menu & Ordering Platform',
    slug: 'hospitality-menu-redesign',
    category: 'Hospitality & Web Apps',
    role: 'UI/UX Product Designer',
    stage: 'Redesign & Usability Optimization',
    industry: 'Hospitality & Foodtech',
    period: '2022 – 2023',
    metric: '40% Drop-off Reduction',
    commendation: 'CEO Recognition: Received special commendation and rewards from the hotel CEO for innovating the guest digital ordering experience.',
    summary: 'Redesigned the guest ordering flow and digital menu architecture for a premier hotel platform, slashing customer drop-offs by 40% and receiving special recognition from the hotel CEO.',
    coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    story: 'Conducted customer journey mapping and analytics inspection to pinpoint cart abandonment triggers. Streamlined the selection architecture, designed sensory dish presentation modules, and reduced checkout friction, delivering an immediate 40% reduction in customer drop-off.',
    gallery: [
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'scale-ds',
    title: 'Enterprise Multi-Product Design System',
    slug: 'enterprise-design-system',
    category: 'Design Systems',
    role: 'Design Systems Lead',
    stage: 'System Architecture & Scale',
    industry: 'Enterprise Software & SaaS',
    period: '2020 – Present',
    metric: '25% Dev Time Reduction',
    commendation: 'Standardized UI across engineering squads, eliminating recurring design debt and establishing strict WCAG AA accessibility.',
    summary: 'Built, standardized, and scaled a comprehensive design system and reusable component library that eliminated redundant UI work and reduced frontend development cycles by 25%.',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    story: 'Engineered a unified design token architecture across Figma and frontend codebases. Built an accessible component library with extensive developer guidelines, ensuring strict WCAG AA adherence and cutting cross-functional sprint time by a quarter.',
    gallery: [
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    ],
  },
]);

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return projects.value;
  return projects.value.filter((p) => p.category === activeCategory.value);
});

// Quick View Sheet
const activePreview = ref<ProjectItem | null>(null);

function openPreview(p: ProjectItem) {
  activePreview.value = p;
  document.body.style.overflow = 'hidden';
}

function closePreview() {
  activePreview.value = null;
  document.body.style.overflow = '';
}
</script>

<template>
  <div class="work-view">
    <!-- SECTION 1: Editorial Work Header -->
    <header class="work-header">
      <div class="container">
        <div class="chapter-mark">
          <span class="chapter-mark__num">01</span>
          <span class="chapter-mark__rule"></span>
          <span>Project Archive</span>
        </div>

        <h1 class="work-title">
          Selected digital products, design systems, and UX architectures.
        </h1>

        <p class="work-lead">
          Over 10 years crafting high-impact digital experiences across fintech, enterprise SaaS, and hospitality. Specializing in UX strategy, scalable token systems, and rapid prototyping workflows.
        </p>

        <!-- Category Filter Tabs -->
        <div class="filter-strip" role="tablist" aria-label="Project categories">
          <button
            v-for="cat in categories"
            :key="cat"
            type="button"
            class="filter-tab"
            :class="{ 'filter-tab--active': activeCategory === cat }"
            @click="activeCategory = cat"
            role="tab"
            :aria-selected="activeCategory === cat"
          >
            <span>{{ cat }}</span>
            <span class="filter-count" v-if="cat === 'All'">({{ projects.length }})</span>
            <span class="filter-count" v-else>({{ projects.filter(p => p.category === cat).length }})</span>
          </button>
        </div>
      </div>
    </header>

    <!-- SECTION 2: Art-Directed Project List -->
    <main class="work-content">
      <div class="container">
        <div class="projects-list">
          <!-- Iterate over filtered projects with bespoke presentation -->
          <article
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            class="work-item"
            :class="{ 'work-item--featured': index === 0 && activeCategory === 'All' }"
          >
            <div class="work-item__content">
              <div class="work-item__meta-top">
                <span class="category-name">{{ project.category }}</span>
                <span class="period-name">{{ project.period }}</span>
              </div>

              <h2 class="work-item__title">
                <router-link :to="`/work/${project.slug}`">{{ project.title }}</router-link>
              </h2>

              <p class="work-item__summary">{{ project.summary }}</p>

              <!-- Documented Commendation if available -->
              <div v-if="project.commendation" class="commendation-pill">
                <CheckCircle2 :size="15" class="check-icon" />
                <span>{{ project.commendation }}</span>
              </div>

              <dl class="work-item__details">
                <div>
                  <dt>Role & Scope</dt>
                  <dd>{{ project.role }}</dd>
                </div>
                <div>
                  <dt>Stage</dt>
                  <dd>{{ project.stage }}</dd>
                </div>
                <div>
                  <dt>Documented Outcome</dt>
                  <dd class="highlight-dd">{{ project.metric }}</dd>
                </div>
              </dl>

              <div class="work-item__actions">
                <router-link :to="`/work/${project.slug}`" class="button button--primary button--small">
                  <span>View Full Case Study</span>
                  <ArrowRight :size="14" />
                </router-link>

                <button
                  type="button"
                  class="button button--subtle button--small"
                  @click="openPreview(project)"
                >
                  <span>Quick Overview</span>
                </button>
              </div>
            </div>

            <div class="work-item__visual" @click="openPreview(project)">
              <div class="visual-frame">
                <img :src="project.coverImage" :alt="project.title" loading="lazy" />
                <div class="visual-hover-hint">
                  <span>Quick View</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>

    <!-- Quick Preview Gallery Sheet Modal (Preserved Functionality) -->
    <teleport to="body">
      <transition name="sheet-slide">
        <div v-if="activePreview" class="gallery-sheet-overlay" @click.self="closePreview">
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
              <span class="sheet-tag">Project Overview</span>
              <div class="sheet-title-block">
                <h2>{{ activePreview.title }}</h2>
                <p>{{ activePreview.summary }}</p>
              </div>
            </header>

            <div class="sheet-hero-image">
              <img :src="activePreview.coverImage" :alt="activePreview.title" />
            </div>

            <section class="sheet-meta-section">
              <dl class="sheet-meta">
                <div>
                  <dt>Role & Scope</dt>
                  <dd>{{ activePreview.role }}</dd>
                </div>
                <div>
                  <dt>Industry</dt>
                  <dd>{{ activePreview.industry }}</dd>
                </div>
                <div>
                  <dt>Stage</dt>
                  <dd>{{ activePreview.stage }}</dd>
                </div>
                <div>
                  <dt>Key Outcome</dt>
                  <dd class="accent-dd">{{ activePreview.metric }}</dd>
                </div>
              </dl>

              <div class="sheet-story">
                <p>{{ activePreview.story }}</p>
              </div>
            </section>

            <div class="sheet-gallery-row" v-if="activePreview.gallery?.length">
              <div
                v-for="(img, idx) in activePreview.gallery"
                :key="idx"
                class="sheet-gallery-item"
              >
                <img :src="img" :alt="`${activePreview.title} shot ${idx + 1}`" loading="lazy" />
              </div>
            </div>

            <div class="sheet-footer">
              <router-link
                :to="`/work/${activePreview.slug}`"
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

.work-view {
  background-color: var(--color-bg-page);
  color: var(--color-text-primary);
  min-height: 100vh;
}

// ---------------------------------------------
// Header Section
// ---------------------------------------------
.work-header {
  padding: var(--space-12) 0 var(--space-10);
  border-bottom: 1px solid var(--color-border);
}

.work-title {
  margin-bottom: var(--space-4);
  max-width: 820px;
}

.work-lead {
  font-size: clamp(1.0625rem, 1.25vw, 1.1875rem);
  line-height: 1.6;
  color: var(--color-text-secondary);
  max-width: 680px;
  margin-bottom: var(--space-10);
}

// Typographic Category Filter
.filter-strip {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}

.filter-tab {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 8px 16px;
  border-radius: var(--radius-pill);
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    color: var(--color-text-primary);
    border-color: var(--color-border-strong);
    background-color: var(--color-bg-surface);
  }

  &--active {
    background-color: var(--color-text-primary);
    color: #ffffff;
    border-color: var(--color-text-primary);
    font-weight: 600;

    .filter-count {
      opacity: 0.7;
      color: #ffffff;
    }

    &:hover {
      background-color: #242220;
      color: #ffffff;
    }
  }

  .filter-count {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--color-text-muted);
  }
}

// ---------------------------------------------
// Content Section
// ---------------------------------------------
.work-content {
  padding: var(--space-14) 0 var(--space-24);
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
}

.work-item {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-bg-card);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  display: grid;
  grid-template-columns: 1fr;
  transition: border-color var(--transition-base), box-shadow var(--transition-base);

  &:hover {
    border-color: var(--color-border-strong);
    box-shadow: var(--shadow-hover);
  }

  @include respond-to('lg') {
    grid-template-columns: 1.15fr 1fr;
  }

  &--featured {
    @include respond-to('lg') {
      grid-template-columns: 1.25fr 1.05fr;
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

  &__meta-top {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin-bottom: var(--space-3);

    .category-name {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--color-text-muted);
    }

    .period-name {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      color: var(--color-text-muted);
      opacity: 0.6;
    }
  }

  &__title {
    font-family: var(--font-serif);
    font-size: clamp(1.625rem, 2.4vw, 2.25rem);
    line-height: 1.15;
    letter-spacing: -0.025em;
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

  &__details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
    padding: var(--space-4) 0;
    border-top: 1px solid var(--color-border);
    margin-bottom: var(--space-8);

    @include respond-to('md') {
      grid-template-columns: repeat(3, 1fr);
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

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

      &.highlight-dd {
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
    background-color: var(--color-bg-surface);
    overflow: hidden;
    cursor: pointer;
    min-height: 280px;

    .visual-frame {
      width: 100%;
      height: 100%;
      position: relative;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-smooth);
    }

    &:hover img {
      transform: scale(1.03);
    }

    .visual-hover-hint {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity var(--transition-fast);

      span {
        padding: 6px 14px;
        background-color: #ffffff;
        color: #111010;
        border-radius: var(--radius-pill);
        font-family: var(--font-sans);
        font-size: 0.75rem;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
    }

    &:hover .visual-hover-hint {
      opacity: 1;
    }
  }
}

.commendation-pill {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background-color: var(--color-accent-terracotta-soft);
  border: 1px solid rgba(217, 87, 50, 0.2);
  border-radius: var(--radius-sm);
  margin-bottom: var(--space-6);

  .check-icon {
    color: var(--color-accent-terracotta);
    margin-top: 2px;
    flex-shrink: 0;
  }

  span {
    font-size: 0.8125rem;
    line-height: 1.45;
    color: var(--color-text-primary);
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

  .sheet-tag {
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

.sheet-gallery-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.sheet-gallery-item {
  border-radius: var(--radius-md);
  overflow: hidden;
  aspect-ratio: 4 / 3;
  border: 1px solid var(--color-border);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
