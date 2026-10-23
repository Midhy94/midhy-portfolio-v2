<template>
  <div class="works-page">
    <WorksHero />
    <FeaturedProject @open-case-study="handleProjectClick" />
    <ProjectsGallery @open-case-study="handleProjectClick" />

    <!-- Link to Archive -->
    <section class="archive-bridge-section">
      <div class="bridge-container container-editorial">
        <div class="archive-banner-card">
          <div class="banner-content">
            <h2 class="banner-title font-serif">Looking for a full archive?</h2>
            <p class="banner-subtext">
              Browse the complete index of commercial products, design systems, and frontend experiments spanning 2018–2024.
            </p>
          </div>
          <RouterLink to="/work/archive" class="archive-link-btn">
            View Complete Archive (5+) →
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { Project } from '@/types/portfolio';
import WorksHero from '@/components/works/WorksHero.vue';
import FeaturedProject from '@/components/works/FeaturedProject.vue';
import ProjectsGallery from '@/components/works/ProjectsGallery.vue';

const router = useRouter();

const handleProjectClick = (project: Project) => {
  router.push(`/work/${project.slug}`);
};
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.works-page {
  width: 100%;
}

.archive-bridge-section {
  padding: 2rem 0 clamp(4rem, 6vw, 6rem);

  .archive-banner-card {
    background-color: var(--color-stone);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: clamp(2.5rem, 5vw, 3.5rem);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    .banner-content {
      max-width: 600px;

      .banner-tag {
        margin-bottom: 0.75rem;
      }

      .banner-title {
        font-size: clamp(1.75rem, 3vw, 2.25rem);
        font-weight: 400;
        line-height: 1.2;
        color: var(--color-ink);
        margin: 0 0 0.75rem;
      }

      .banner-subtext {
        font-size: 1rem;
        line-height: 1.6;
        color: var(--color-muted);
        margin: 0;
      }
    }

    .archive-link-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background-color: var(--color-ink);
      color: var(--color-chalk);
      font-size: 0.9375rem;
      font-weight: 500;
      padding: 0.875rem 1.75rem;
      border-radius: var(--radius-full);
      white-space: nowrap;
      transition: background-color $transition-fast, transform $transition-fast;

      &:hover {
        background-color: var(--color-laterite);
        transform: translateY(-2px);
      }
    }
  }
}

@media (max-width: 860px) {
  .archive-bridge-section {
    .archive-banner-card {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.75rem;
    }
  }
}
</style>
