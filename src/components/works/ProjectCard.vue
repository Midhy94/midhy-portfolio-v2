<template>
  <article
    class="project-item"
    :class="['theme-' + project.theme, { 'is-tall': project.id === 'hospitality-booking-flow' }]"
    @click="$emit('open', project)"
  >
    <!-- Visual Card Surface -->
    <div
      class="project-card-surface"
      role="button"
      tabindex="0"
      :aria-label="`Open ${project.title} case study`"
      @keydown.enter="$emit('open', project)"
    >
      <div class="surface-top">
        <span class="surface-num">{{ project.number }}</span>
        <span class="surface-action">{{ project.actionLabel }}</span>
      </div>

      <div class="surface-center">
        <span class="surface-pixel-word font-pixel">{{ project.pixelWord }}</span>
      </div>
    </div>

    <!-- Bottom Meta & Description -->
    <div class="project-card-footer">
      <div class="footer-title-row">
        <h3 class="item-title font-serif">{{ project.title }}</h3>
        <span class="item-arrow">↗</span>
      </div>

      <p class="item-summary">{{ project.summary }}</p>

      <div class="item-tags-row">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="item-tag"
          :class="{ 'in-progress': tag.includes('progress') }"
        >
          <span v-if="tag.includes('progress')" class="progress-dot" aria-hidden="true" />
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Project } from '@/types/portfolio';

defineProps<{
  project: Project;
}>();

defineEmits<{
  (e: 'open', project: Project): void;
}>();
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.project-item {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;

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

  // Theme variations matching original design
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

  // Proportions: Card 2 (Hospitality) is taller
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
</style>
