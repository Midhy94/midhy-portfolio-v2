<template>
  <section id="projects" class="projects-gallery-section" aria-labelledby="gallery-heading">
    <div class="gallery-container container-editorial">
      <!-- Section Header -->
      <div class="gallery-header">
        <h2 id="gallery-heading" class="gallery-title font-serif">More projects</h2>
        <span class="gallery-count font-mono">{{ projects.length }} projects</span>
      </div>

      <!-- 2-Column Masonry Layout (Desktop & Tablet) -->
      <div class="projects-masonry">
        <div class="masonry-col">
          <ProjectCard
            v-for="item in leftColumn"
            :key="item.id"
            :project="item"
            @open="$emit('open-case-study', $event)"
          />
        </div>

        <div class="masonry-col">
          <ProjectCard
            v-for="item in rightColumn"
            :key="item.id"
            :project="item"
            @open="$emit('open-case-study', $event)"
          />
        </div>
      </div>

      <!-- Linear Stack (Mobile Viewports <= 800px) -->
      <div class="projects-stack-mobile">
        <ProjectCard
          v-for="item in projects"
          :key="item.id"
          :project="item"
          @open="$emit('open-case-study', $event)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Project } from '@/types/portfolio';
import { WORKS_CONTENT } from '@/data/portfolioData';
import ProjectCard from './ProjectCard.vue';

defineEmits<{
  (e: 'open-case-study', project: Project): void;
}>();

const projects = WORKS_CONTENT.projects;

// Split into left and right columns for true masonry stacking
const leftColumn = computed(() => projects.filter((_, idx) => idx % 2 === 0));
const rightColumn = computed(() => projects.filter((_, idx) => idx % 2 === 1));
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

  // Masonry 2-column container: cards stack to correct spacing with zero gaps
  .projects-masonry {
    display: flex;
    gap: 3rem;
    align-items: flex-start;
    width: 100%;

    @media (max-width: 800px) {
      display: none;
    }

    .masonry-col {
      flex: 1 1 0;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 3.5rem;
    }
  }

  // Mobile single-column linear stack
  .projects-stack-mobile {
    display: none;

    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      width: 100%;
    }
  }
}
</style>
