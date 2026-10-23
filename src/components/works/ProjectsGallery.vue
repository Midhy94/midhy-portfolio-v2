<template>
  <section id="projects" class="projects-gallery-section" aria-labelledby="gallery-heading">
    <div class="gallery-container container-editorial">
      <!-- Section Header -->
      <div class="gallery-header">
        <h2 id="gallery-heading" class="gallery-title font-serif">More projects</h2>
        <span class="gallery-count">{{ projects.length }} projects</span>
      </div>

      <!-- Asymmetrical Editorial Project Grid -->
      <div class="projects-grid">
        <article
          v-for="item in projects"
          :key="item.id"
          class="project-item"
          :class="['theme-' + item.theme, { 'is-tall': item.id === 'hospitality-booking-flow' }]"
          @click="$emit('open-case-study', item)"
        >
          <!-- Visual Card Surface -->
          <div
            class="project-card-surface"
            role="button"
            tabindex="0"
            :aria-label="`Open ${item.title} case study`"
            @keydown.enter="$emit('open-case-study', item)"
          >
            <div class="surface-top">
              <span class="surface-num">{{ item.number }}</span>
              <span class="surface-action">{{ item.actionLabel }}</span>
            </div>

            <div class="surface-center">
              <span class="surface-pixel-word font-pixel">{{ item.pixelWord }}</span>
            </div>
          </div>

          <!-- Bottom Meta & Description -->
          <div class="project-card-footer">
            <div class="footer-title-row">
              <h3 class="item-title font-serif">{{ item.title }}</h3>
              <span class="item-arrow">↗</span>
            </div>

            <p class="item-summary">{{ item.summary }}</p>

            <div class="item-tags-row">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="item-tag"
                :class="{ 'in-progress': tag.includes('progress') }"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Project } from '@/types/portfolio';
import { WORKS_CONTENT } from '@/data/portfolioData';

defineEmits<{
  (e: 'open-case-study', project: Project): void;
}>();

const projects = WORKS_CONTENT.projects;
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.projects-gallery-section {
  padding-bottom: clamp(5rem, 8vw, 7.5rem);

  .gallery-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--color-border);
    margin-bottom: 3.5rem;

    .gallery-title {
      font-size: clamp(2rem, 3.5vw, 2.75rem);
      font-weight: 400;
      color: var(--color-ink);
      margin: 0;
    }

    .gallery-count {
      font-family: var(--font-family-mono);
      font-size: 0.875rem;
      color: var(--color-muted);
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.5rem 3rem;
    align-items: start;

    .project-item {
      display: flex;
      flex-direction: column;
      cursor: pointer;

      &:hover {
        .project-card-surface {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(25, 21, 18, 0.14);

          .surface-action {
            transform: translateX(3px);
          }
        }

        .item-arrow {
          transform: translate(2px, -2px);
          color: var(--color-laterite);
        }

        .item-title {
          color: var(--color-laterite);
        }
      }

      .project-card-surface {
        border-radius: var(--radius-md);
        aspect-ratio: 16 / 10;
        padding: 1.5rem 1.75rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 1.25rem;
        position: relative;
        overflow: hidden;
        transition: transform $transition-base, box-shadow $transition-base;

        .surface-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.08em;

          .surface-action {
            transition: transform $transition-fast;
          }
        }

        .surface-center {
          margin-top: auto;

          .surface-pixel-word {
            font-size: clamp(2.25rem, 4vw, 3.5rem);
            line-height: 1;
            letter-spacing: -0.02em;
            font-weight: 700;
          }
        }
      }

      // Theme variations matching screenshots
      &.theme-dark .project-card-surface {
        background-color: var(--color-ink);
        border: 1px solid rgba(255, 255, 255, 0.08);

        .surface-top {
          color: #8A827B;
        }

        .surface-pixel-word {
          color: var(--color-chalk);
        }
      }

      &.theme-terracotta .project-card-surface {
        background-color: #D98B70;
        border: 1px solid rgba(0, 0, 0, 0.06);

        .surface-top {
          color: rgba(25, 21, 18, 0.7);
        }

        .surface-pixel-word {
          color: var(--color-ink);
        }
      }

      &.theme-stone .project-card-surface {
        background-color: var(--color-stone);
        border: 1px solid var(--color-border);

        .surface-top {
          color: var(--color-muted);
        }

        .surface-pixel-word {
          color: var(--color-ink);
        }
      }

      // Proportions: Card 2 in reference is taller
      &.is-tall .project-card-surface {
        aspect-ratio: 4 / 3.8;
      }

      .project-card-footer {
        display: flex;
        flex-direction: column;

        .footer-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;

          .item-title {
            font-size: 1.375rem;
            font-weight: 400;
            color: var(--color-ink);
            margin: 0;
            transition: color $transition-fast;
          }

          .item-arrow {
            font-size: 1.125rem;
            color: var(--color-muted);
            transition: all $transition-fast;
          }
        }

        .item-summary {
          font-size: 0.9375rem;
          line-height: 1.55;
          color: var(--color-muted);
          margin: 0 0 1rem;
        }

        .item-tags-row {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          flex-wrap: wrap;

          .item-tag {
            font-size: 0.75rem;
            color: var(--color-muted);
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;

            &.in-progress {
              color: var(--color-laterite);
              font-weight: 500;

              .progress-dot {
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background-color: var(--color-laterite);
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .projects-gallery-section {
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 3rem;

      .project-item.is-tall .project-card-surface {
        aspect-ratio: 16 / 10;
      }
    }
  }
}
</style>
