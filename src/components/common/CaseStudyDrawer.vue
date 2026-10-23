<template>
  <Teleport to="body">
    <Transition name="drawer">
      <div
        v-if="isOpen && project"
        class="case-drawer-backdrop"
        @click.self="$emit('close')"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="'case-title-' + project.id"
      >
        <div class="case-drawer-panel">
          <!-- Drawer Header -->
          <div class="drawer-header">
            <div class="header-meta">
              <span class="project-num font-mono">{{ project.number }}</span>
              <span class="project-tags">
                <span v-for="tag in project.tags" :key="tag" class="meta-tag">{{ tag }}</span>
              </span>
            </div>
            <button
              type="button"
              class="close-drawer-btn"
              @click="$emit('close')"
              aria-label="Close case study"
            >
              ✕
            </button>
          </div>

          <!-- Drawer Body -->
          <div class="drawer-body">
            <h1 :id="'case-title-' + project.id" class="case-headline font-serif">
              {{ project.caseStudy?.title || project.title }}
            </h1>

            <p class="case-subheadline">
              {{ project.caseStudy?.subtitle || project.summary }}
            </p>

            <!-- Metadata Grid -->
            <div class="case-meta-grid" v-if="project.caseStudy">
              <div class="meta-box" v-if="project.caseStudy.role">
                <span class="box-label">Role</span>
                <span class="box-value">{{ project.caseStudy.role }}</span>
              </div>
              <div class="meta-box" v-if="project.caseStudy.timeline">
                <span class="box-label">Timeline</span>
                <span class="box-value">{{ project.caseStudy.timeline }}</span>
              </div>
            </div>

            <!-- Verified Metrics -->
            <div class="case-metrics-banner" v-if="project.caseStudy?.metrics">
              <div
                v-for="metric in project.caseStudy.metrics"
                :key="metric.label"
                class="metric-item"
              >
                <span class="metric-number font-serif">{{ metric.value }}</span>
                <span class="metric-text">{{ metric.label }}</span>
              </div>
            </div>

            <!-- Overview Section -->
            <section class="case-section" v-if="project.caseStudy?.overview">
              <h2 class="section-title font-mono">01 / Overview</h2>
              <p class="section-text">{{ project.caseStudy.overview }}</p>
            </section>

            <!-- Challenge Section -->
            <section class="case-section" v-if="project.caseStudy?.challenge">
              <h2 class="section-title font-mono">02 / The Challenge</h2>
              <p class="section-text">{{ project.caseStudy.challenge }}</p>
            </section>

            <!-- Research & Insights -->
            <section class="case-section" v-if="project.caseStudy?.researchAndInsights?.length">
              <h2 class="section-title font-mono">03 / Key Insights</h2>
              <ul class="insights-list">
                <li v-for="(insight, idx) in project.caseStudy.researchAndInsights" :key="idx">
                  {{ insight }}
                </li>
              </ul>
            </section>

            <!-- Key Decisions -->
            <section class="case-section" v-if="project.caseStudy?.keyDecisions?.length">
              <h2 class="section-title font-mono">04 / Core Design Decisions</h2>
              <div class="decisions-stack">
                <div
                  v-for="(decision, idx) in project.caseStudy.keyDecisions"
                  :key="idx"
                  class="decision-card"
                >
                  <h3 class="decision-heading">{{ decision.title }}</h3>
                  <p class="decision-detail">{{ decision.detail }}</p>
                </div>
              </div>
            </section>

            <!-- Solution -->
            <section class="case-section" v-if="project.caseStudy?.solution">
              <h2 class="section-title font-mono">05 / The Solution</h2>
              <p class="section-text">{{ project.caseStudy.solution }}</p>
            </section>

            <!-- Takeaways -->
            <section class="case-section" v-if="project.caseStudy?.takeaways">
              <h2 class="section-title font-mono">06 / Takeaways</h2>
              <blockquote class="takeaways-quote">
                {{ project.caseStudy.takeaways }}
              </blockquote>
            </section>

            <!-- Drawer Footer CTA -->
            <div class="drawer-action-footer">
              <button
                type="button"
                class="return-btn"
                @click="$emit('close')"
              >
                ← Back to Works
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import type { Project } from '@/types/portfolio';

const props = defineProps<{
  isOpen: boolean;
  project: Project | null;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close');
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.case-drawer-backdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  background-color: rgba(25, 21, 18, 0.6);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  justify-content: flex-end;
}

.case-drawer-panel {
  width: 100%;
  max-width: 680px;
  height: 100%;
  background-color: var(--color-paper);
  display: flex;
  flex-direction: column;
  box-shadow: -12px 0 40px rgba(25, 21, 18, 0.25);
  overflow-y: auto;

  .drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.75rem 2.25rem;
    border-bottom: 1px solid var(--color-border);
    position: sticky;
    top: 0;
    background-color: rgba(247, 244, 238, 0.95);
    backdrop-filter: blur(8px);
    z-index: 10;

    .header-meta {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      .project-num {
        margin-bottom: 0;
      }

      .project-tags {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;

        .meta-tag {
          font-size: 0.75rem;
          color: var(--color-muted);
        }
      }
    }

    .close-drawer-btn {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      border: 1px solid var(--color-border);
      background: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      cursor: pointer;
      color: var(--color-ink);
      transition: background-color $transition-fast, transform $transition-fast;

      &:hover {
        background-color: var(--color-stone);
        transform: scale(1.05);
      }
    }
  }

  .drawer-body {
    padding: 2.5rem 2.25rem 4rem;

    .case-headline {
      font-size: clamp(2rem, 4vw, 2.75rem);
      font-weight: 400;
      line-height: 1.15;
      letter-spacing: -0.02em;
      color: var(--color-ink);
      margin: 0 0 1rem;
    }

    .case-subheadline {
      font-size: 1.125rem;
      line-height: 1.6;
      color: var(--color-muted);
      margin: 0 0 2rem;
    }

    .case-meta-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      padding: 1.25rem 0;
      border-top: 1px solid var(--color-border);
      border-bottom: 1px solid var(--color-border);
      margin-bottom: 2rem;

      .meta-box {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        .box-label {
          font-size: 0.6875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-laterite);
        }

        .box-value {
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--color-ink);
        }
      }
    }

    .case-metrics-banner {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.25rem;
      background-color: var(--color-stone);
      padding: 1.5rem;
      border-radius: var(--radius-md);
      margin-bottom: 2.5rem;

      .metric-item {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        .metric-number {
          font-size: 2rem;
          color: var(--color-laterite);
          font-weight: 500;
        }

        .metric-text {
          font-size: 0.8125rem;
          color: var(--color-muted);
        }
      }
    }

    .case-section {
      margin-bottom: 2.25rem;

      .section-title {
        margin-bottom: 0.75rem;
      }

      .section-text {
        font-size: 1rem;
        line-height: 1.7;
        color: var(--color-ink);
        margin: 0;
      }

      .insights-list {
        margin: 0;
        padding-left: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
        font-size: 0.9375rem;
        line-height: 1.6;
        color: var(--color-ink);
      }

      .decisions-stack {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .decision-card {
          background-color: var(--color-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 1.125rem 1.25rem;

          .decision-heading {
            font-size: 0.9375rem;
            font-weight: 600;
            color: var(--color-ink);
            margin: 0 0 0.375rem;
          }

          .decision-detail {
            font-size: 0.875rem;
            line-height: 1.55;
            color: var(--color-muted);
            margin: 0;
          }
        }
      }

      .takeaways-quote {
        margin: 0;
        padding: 1rem 1.25rem;
        border-left: 3px solid var(--color-laterite);
        background-color: var(--color-card);
        font-style: italic;
        font-size: 1rem;
        line-height: 1.6;
        color: var(--color-ink);
      }
    }

    .drawer-action-footer {
      padding-top: 2rem;
      border-top: 1px solid var(--color-border);

      .return-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.625rem 1.25rem;
        border-radius: var(--radius-full);
        background-color: var(--color-ink);
        color: var(--color-chalk);
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
        transition: background-color $transition-fast, transform $transition-fast;

        &:hover {
          background-color: var(--color-laterite);
          transform: translateX(-2px);
        }
      }
    }
  }
}

// Drawer animation
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 250ms ease;

  .case-drawer-panel {
    transition: transform 280ms cubic-bezier(0.16, 1, 0.3, 1);
  }
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;

  .case-drawer-panel {
    transform: translateX(100%);
  }
}

@media (max-width: 640px) {
  .case-drawer-panel {
    .drawer-header {
      padding: 1.25rem 1.5rem;
    }

    .drawer-body {
      padding: 1.75rem 1.5rem 3rem;
    }
  }
}
</style>
