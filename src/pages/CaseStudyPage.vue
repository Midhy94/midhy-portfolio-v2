<template>
  <div class="case-study-page" v-if="project">
    <div class="case-study-container container-editorial">
      <!-- Breadcrumb navigation -->
      <nav class="case-nav-breadcrumb" aria-label="Breadcrumb">
        <RouterLink to="/work" class="back-link">
          ← Back to Selected Works
        </RouterLink>
      </nav>

      <!-- Case Study Header -->
      <header class="case-header">
        <div class="case-top-meta">
          <span class="project-num font-mono">{{ project.number }}</span>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag-pill">{{ tag }}</span>
          </div>
        </div>

        <h1 class="case-headline font-serif">
          {{ project.caseStudy?.title || project.title }}
        </h1>

        <p class="case-subheadline">
          {{ project.caseStudy?.subtitle || project.summary }}
        </p>

        <!-- Metadata Bar -->
        <div class="case-meta-bar" v-if="project.caseStudy">
          <div class="meta-item" v-if="project.caseStudy.role">
            <span class="meta-label">ROLE</span>
            <span class="meta-val">{{ project.caseStudy.role }}</span>
          </div>
          <div class="meta-item" v-if="project.caseStudy.timeline">
            <span class="meta-label">TIMELINE</span>
            <span class="meta-val">{{ project.caseStudy.timeline }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">STATUS</span>
            <span class="meta-val">{{ project.inProgress ? 'Case study in progress' : 'Shipped & Verified' }}</span>
          </div>
        </div>
      </header>

      <!-- Visual Stage Banner -->
      <div class="case-visual-banner" :class="'theme-' + project.theme">
        <span class="visual-pixel-display font-pixel">{{ project.pixelWord }}</span>
      </div>

      <!-- Verified Metrics Banner -->
      <div class="case-metrics-banner" v-if="project.caseStudy?.metrics?.length">
        <div
          v-for="metric in project.caseStudy.metrics"
          :key="metric.label"
          class="metric-item"
        >
          <span class="metric-num font-serif">{{ metric.value }}</span>
          <span class="metric-label">{{ metric.label }}</span>
        </div>
      </div>

      <!-- Case Study Narrative Sections -->
      <div class="case-narrative-layout">
        <!-- Overview -->
        <section class="case-section" v-if="project.caseStudy?.overview">
          <div class="section-aside">
            <span class="aside-num font-mono">01 / Overview</span>
          </div>
          <div class="section-content">
            <p class="lead-paragraph">{{ project.caseStudy.overview }}</p>
          </div>
        </section>

        <!-- The Challenge -->
        <section class="case-section" v-if="project.caseStudy?.challenge">
          <div class="section-aside">
            <span class="aside-num font-mono">02 / The Challenge</span>
          </div>
          <div class="section-content">
            <p class="body-paragraph">{{ project.caseStudy.challenge }}</p>
          </div>
        </section>

        <!-- Insights & Research -->
        <section class="case-section" v-if="project.caseStudy?.researchAndInsights?.length">
          <div class="section-aside">
            <span class="aside-num font-mono">03 / Key Insights</span>
          </div>
          <div class="section-content">
            <ul class="insights-stack">
              <li v-for="(insight, idx) in project.caseStudy.researchAndInsights" :key="idx">
                {{ insight }}
              </li>
            </ul>
          </div>
        </section>

        <!-- Core Design Decisions -->
        <section class="case-section" v-if="project.caseStudy?.keyDecisions?.length">
          <div class="section-aside">
            <span class="aside-num font-mono">04 / Design Decisions</span>
          </div>
          <div class="section-content">
            <div class="decisions-grid">
              <div
                v-for="(dec, idx) in project.caseStudy.keyDecisions"
                :key="idx"
                class="decision-box"
              >
                <h3 class="decision-title">{{ dec.title }}</h3>
                <p class="decision-text">{{ dec.detail }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Solution -->
        <section class="case-section" v-if="project.caseStudy?.solution">
          <div class="section-aside">
            <span class="aside-num font-mono">05 / The Solution</span>
          </div>
          <div class="section-content">
            <p class="body-paragraph">{{ project.caseStudy.solution }}</p>
          </div>
        </section>

        <!-- Takeaways -->
        <section class="case-section" v-if="project.caseStudy?.takeaways">
          <div class="section-aside">
            <span class="aside-num font-mono">06 / Takeaways</span>
          </div>
          <div class="section-content">
            <blockquote class="takeaways-callout font-serif">
              “{{ project.caseStudy.takeaways }}”
            </blockquote>
          </div>
        </section>
      </div>

      <!-- Bottom Next Project Navigation -->
      <footer class="case-bottom-nav">
        <RouterLink to="/work" class="return-works-btn">
          ← Back to Selected Works
        </RouterLink>
        <RouterLink to="/work/archive" class="archive-btn">
          View All Projects Archive →
        </RouterLink>
      </footer>
    </div>
  </div>

  <div v-else class="not-found-case container-editorial">
    <p>Case study not found.</p>
    <RouterLink to="/work">← Return to Selected Works</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { WORKS_CONTENT } from '@/data/portfolioData';
import type { Project } from '@/types/portfolio';

const route = useRoute();

const allProjects: Project[] = [
  WORKS_CONTENT.featuredProject,
  ...WORKS_CONTENT.projects
];

const project = computed(() => {
  const rawSlug = route.params.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
  if (!slug || typeof slug !== 'string' || slug.length > 100) return null;
  const normalizedSlug = slug.trim().toLowerCase();
  return allProjects.find(p => p.slug === normalizedSlug || p.id === normalizedSlug) || null;
});
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.case-study-page {
  padding: 3rem 0 clamp(5rem, 8vw, 7.5rem);

  .case-nav-breadcrumb {
    margin-bottom: 2.5rem;

    .back-link {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--color-muted);
      transition: color $transition-fast, transform $transition-fast;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;

      &:hover {
        color: var(--color-laterite);
        transform: translateX(-3px);
      }
    }
  }

  .case-header {
    max-width: 860px;
    margin-bottom: 3.5rem;

    .case-top-meta {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      margin-bottom: 1.25rem;
      flex-wrap: wrap;

      .project-tags {
        display: flex;
        gap: 0.5rem;

        .tag-pill {
          font-size: 0.75rem;
          color: var(--color-muted);
        }
      }
    }

    .case-headline {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 400;
      line-height: 1.1;
      letter-spacing: -0.025em;
      color: var(--color-ink);
      margin: 0 0 1.5rem;
    }

    .case-subheadline {
      font-size: clamp(1.125rem, 2vw, 1.375rem);
      line-height: 1.6;
      color: var(--color-muted);
      margin: 0 0 2.5rem;
    }

    .case-meta-bar {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      padding: 1.5rem 0;
      border-top: 1px solid var(--color-border);
      border-bottom: 1px solid var(--color-border);

      .meta-item {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;

        .meta-label {
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--color-laterite);
        }

        .meta-val {
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--color-ink);
        }
      }
    }
  }

  .case-visual-banner {
    border-radius: var(--radius-md);
    aspect-ratio: 21 / 9;
    min-height: 280px;
    display: flex;
    align-items: flex-end;
    padding: clamp(2rem, 4vw, 3.5rem);
    margin-bottom: 3.5rem;
    position: relative;
    overflow: hidden;

    .visual-pixel-display {
      font-size: clamp(3rem, 7vw, 6rem);
      line-height: 1;
      font-weight: 700;
    }

    &.theme-dark {
      background-color: var(--color-ink);
      color: var(--color-chalk);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    &.theme-terracotta {
      background-color: #D98B70;
      color: var(--color-ink);
    }

    &.theme-stone {
      background-color: var(--color-stone);
      color: var(--color-ink);
      border: 1px solid var(--color-border);
    }
  }

  .case-metrics-banner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    background-color: var(--color-stone);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: 2.25rem 2.5rem;
    margin-bottom: 4.5rem;

    .metric-item {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;

      .metric-num {
        font-size: clamp(2.25rem, 4vw, 3.25rem);
        color: var(--color-laterite);
        font-weight: 400;
        line-height: 1;
      }

      .metric-label {
        font-size: 0.9375rem;
        color: var(--color-muted);
      }
    }
  }

  .case-narrative-layout {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-bottom: 5rem;

    .case-section {
      display: grid;
      grid-template-columns: 240px 1fr;
      gap: 3rem;
      padding-top: 2rem;
      border-top: 1px solid var(--color-border);

      .section-aside {
        .aside-num {
          position: sticky;
          top: 96px;
        }
      }

      .section-content {
        max-width: 720px;

        .lead-paragraph {
          font-size: 1.25rem;
          line-height: 1.7;
          color: var(--color-ink);
          margin: 0;
        }

        .body-paragraph {
          font-size: 1.0625rem;
          line-height: 1.75;
          color: var(--color-muted);
          margin: 0;
        }

        .insights-stack {
          margin: 0;
          padding-left: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          font-size: 1.0625rem;
          line-height: 1.65;
          color: var(--color-ink);
        }

        .decisions-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;

          .decision-box {
            background-color: var(--color-card);
            border: 1px solid var(--color-border);
            border-radius: var(--radius-sm);
            padding: 1.5rem 1.75rem;

            .decision-title {
              font-size: 1.0625rem;
              font-weight: 600;
              color: var(--color-ink);
              margin: 0 0 0.5rem;
            }

            .decision-text {
              font-size: 0.9375rem;
              line-height: 1.6;
              color: var(--color-muted);
              margin: 0;
            }
          }
        }

        .takeaways-callout {
          margin: 0;
          padding: 1.75rem 2rem;
          border-left: 3px solid var(--color-laterite);
          background-color: var(--color-card);
          font-style: italic;
          font-size: 1.375rem;
          line-height: 1.55;
          color: var(--color-ink);
        }
      }
    }
  }

  .case-bottom-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 3rem;
    border-top: 1px solid var(--color-border);
    flex-wrap: wrap;
    gap: 1.5rem;

    .return-works-btn,
    .archive-btn {
      font-size: 0.9375rem;
      font-weight: 500;
      color: var(--color-ink);
      text-decoration: underline;
      text-underline-offset: 4px;
      transition: color $transition-fast;

      &:hover {
        color: var(--color-laterite);
      }
    }
  }
}

.not-found-case {
  padding: 6rem 0;
}

@media (max-width: 840px) {
  .case-study-page {
    .case-header .case-meta-bar {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .case-metrics-banner {
      grid-template-columns: 1fr;
    }

    .case-narrative-layout .case-section {
      grid-template-columns: 1fr;
      gap: 1rem;

      .section-aside .aside-num {
        position: static;
      }
    }
  }
}
</style>
