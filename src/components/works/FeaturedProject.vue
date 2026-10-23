<template>
  <section id="featured" class="featured-project-section" aria-labelledby="featured-project-title">
    <div class="featured-container container-editorial">
      <div class="featured-grid">
        <!-- Left: Project Visual Card -->
        <div
          class="project-visual-card"
          @click="$emit('open-case-study', project)"
          role="button"
          tabindex="0"
          :aria-label="`View ${project.title} case study`"
          @keydown.enter="$emit('open-case-study', project)"
        >
          <div class="card-top-bar">
            <span class="card-num">{{ project.number }}</span>
            <span class="card-action">{{ project.actionLabel }}</span>
          </div>

          <div class="card-center-stage">
            <span class="card-pixel-word font-pixel">{{ project.pixelWord }}</span>
          </div>
        </div>

        <!-- Right: Project Narrative & Meta -->
        <div class="project-info-col">
          <h2 id="featured-project-title" class="project-title font-serif">
            {{ project.title }}
          </h2>

          <p class="project-summary">
            {{ project.summary }}
          </p>

          <div class="project-tags-row">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="tag-item"
              :class="{ 'in-progress': tag.includes('progress') }"
            >
              {{ tag }}
            </span>
          </div>

          <button
            type="button"
            class="view-case-btn"
            @click="$emit('open-case-study', project)"
          >
            View case study →
          </button>
        </div>
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

const project = WORKS_CONTENT.featuredProject;
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.featured-project-section {
  padding-bottom: clamp(4rem, 7vw, 6.5rem);

  .featured-grid {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: clamp(2rem, 5vw, 4.5rem);
    align-items: center;
  }

  .project-visual-card {
    background-color: var(--color-ink);
    border-radius: var(--radius-md);
    aspect-ratio: 16 / 10;
    padding: 1.75rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform $transition-base, box-shadow $transition-base;
    border: 1px solid rgba(255, 255, 255, 0.08);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 16px 36px rgba(25, 21, 18, 0.16);

      .card-action {
        color: var(--color-chalk);
        transform: translateX(3px);
      }
    }

    .card-top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.6875rem;
      letter-spacing: 0.08em;
      font-weight: 600;
      color: #8A827B;

      .card-action {
        transition: color $transition-fast, transform $transition-fast;
      }
    }

    .card-center-stage {
      margin-top: auto;

      .card-pixel-word {
        font-size: clamp(2.5rem, 5vw, 4.25rem);
        color: var(--color-chalk);
        line-height: 1;
        letter-spacing: -0.02em;
        font-weight: 700;
      }
    }
  }

  .project-info-col {
    display: flex;
    flex-direction: column;

    .featured-badge {
      margin-bottom: 1rem;
    }

    .project-title {
      font-size: clamp(2rem, 3.8vw, 2.75rem);
      font-weight: 400;
      line-height: 1.15;
      letter-spacing: -0.02em;
      color: var(--color-ink);
      margin: 0 0 1rem;
    }

    .project-summary {
      font-size: clamp(1rem, 1.6vw, 1.125rem);
      line-height: 1.65;
      color: var(--color-muted);
      margin: 0 0 1.75rem;
      max-width: 480px;
    }

    .project-tags-row {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 2.25rem;

      .tag-item {
        font-size: 0.8125rem;
        color: var(--color-muted);
        display: inline-flex;
        align-items: center;
        gap: 0.375rem;

        &.in-progress {
          color: var(--color-laterite);
          font-weight: 500;

          .progress-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: var(--color-laterite);
          }
        }
      }
    }

    .view-case-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      align-self: flex-start;
      font-size: 0.875rem;
      font-weight: 500;
      color: #FFFFFF;
      background-color: var(--color-ink);
      border: none;
      padding: 0.75rem 1.625rem;
      border-radius: var(--radius-full);
      cursor: pointer;
      transition: background-color $transition-fast, transform $transition-fast;

      &:hover {
        background-color: var(--color-laterite);
        transform: translateY(-2px);
      }
    }
  }
}

@media (max-width: 860px) {
  .featured-project-section {
    .featured-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }
}
</style>
