<template>
  <div class="work-archive-page">
    <header class="archive-header">
      <div class="archive-header-inner container-editorial">
        <h1 class="archive-title font-serif">
          All projects, systems & experiments.
        </h1>
        <p class="archive-subtext">
          A comprehensive catalog of fintech applications, enterprise component architectures, client redesigns, and exploratory interfaces.
        </p>
      </div>
    </header>

    <!-- Archive Table / Grid Layout -->
    <main class="archive-body container-editorial">
      <div class="archive-table-header">
        <span class="col-num">#</span>
        <span class="col-project">PROJECT</span>
        <span class="col-category">DISCIPLINE</span>
        <span class="col-role">ROLE</span>
        <span class="col-year">YEAR</span>
        <span class="col-action">ACTION</span>
      </div>

      <div class="archive-list">
        <article
          v-for="item in allProjects"
          :key="item.id"
          class="archive-row"
          @click="router.push(`/work/${item.slug}`)"
        >
          <span class="col-num font-mono">{{ item.number.split('/')[0].trim() }}</span>

          <div class="col-project">
            <h2 class="project-name font-serif">{{ item.title }}</h2>
            <p class="project-mini-summary">{{ item.summary }}</p>
          </div>

          <span class="col-category">
            <span class="tag-pill">{{ item.tags[0] }}</span>
          </span>

          <span class="col-role">{{ item.caseStudy?.role || 'UI/UX Designer' }}</span>

          <span class="col-year font-mono">{{ item.caseStudy?.timeline?.split('–')[0].trim() || '2024' }}</span>

          <span class="col-action">
            <RouterLink :to="`/work/${item.slug}`" class="view-link">
              View Case Study ↗
            </RouterLink>
          </span>
        </article>
      </div>

      <footer class="archive-footer-bridge">
        <RouterLink to="/work" class="back-selected-link">
          ← Back to Selected Works
        </RouterLink>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { WORKS_CONTENT } from '@/data/portfolioData';
import type { Project } from '@/types/portfolio';

const router = useRouter();

const allProjects: Project[] = [
  WORKS_CONTENT.featuredProject,
  ...WORKS_CONTENT.projects
];
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.work-archive-page {
  width: 100%;
}

.archive-header {
  padding: clamp(3.5rem, 6vw, 5.5rem) 0 clamp(2.5rem, 4vw, 3.5rem);
  border-bottom: 1px solid var(--color-border);

  .archive-header-inner {
    max-width: 820px;

    .archive-overline {
      margin-bottom: 1rem;
    }

    .archive-title {
      font-size: clamp(2.5rem, 4.8vw, 3.75rem);
      font-weight: 400;
      line-height: 1.12;
      color: var(--color-ink);
      margin: 0 0 1.25rem;
    }

    .archive-subtext {
      font-size: clamp(1.0625rem, 1.8vw, 1.25rem);
      line-height: 1.6;
      color: var(--color-muted);
      margin: 0;
    }
  }
}

.archive-body {
  padding: 3rem 0 clamp(5rem, 8vw, 7rem);

  .archive-table-header {
    display: grid;
    grid-template-columns: 60px 2.2fr 1.3fr 1.3fr 90px 140px;
    gap: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--color-ink);
    font-size: 0.6875rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: var(--color-laterite);
  }

  .archive-list {
    display: flex;
    flex-direction: column;

    .archive-row {
      display: grid;
      grid-template-columns: 60px 2.2fr 1.3fr 1.3fr 90px 140px;
      gap: 1.5rem;
      align-items: center;
      padding: 1.75rem 0;
      border-bottom: 1px solid var(--color-border);
      cursor: pointer;
      transition: background-color $transition-fast;

      &:hover {
        background-color: rgba(25, 21, 18, 0.02);

        .project-name {
          color: var(--color-laterite);
        }

        .view-link {
          color: var(--color-laterite);
          text-decoration: underline;
        }
      }

      .col-num {
        font-size: 0.875rem;
        color: var(--color-muted);
      }

      .col-project {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        .project-name {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--color-ink);
          margin: 0;
          transition: color $transition-fast;
        }

        .project-mini-summary {
          font-size: 0.875rem;
          color: var(--color-muted);
          margin: 0;
        }
      }

      .col-category {
        .tag-pill {
          font-size: 0.75rem;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          background-color: var(--color-stone);
          color: var(--color-ink);
        }
      }

      .col-role {
        font-size: 0.875rem;
        color: var(--color-muted);
      }

      .col-year {
        font-size: 0.875rem;
        color: var(--color-muted);
      }

      .col-action {
        .view-link {
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--color-ink);
          transition: color $transition-fast;
        }
      }
    }
  }

  .archive-footer-bridge {
    padding-top: 3.5rem;

    .back-selected-link {
      font-size: 0.9375rem;
      font-weight: 500;
      color: var(--color-ink);
      text-decoration: underline;
      text-underline-offset: 4px;

      &:hover {
        color: var(--color-laterite);
      }
    }
  }
}

@media (max-width: 900px) {
  .archive-body {
    .archive-table-header {
      display: none;
    }

    .archive-list .archive-row {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
      padding: 1.5rem 0;

      .col-action {
        margin-top: 0.5rem;
      }
    }
  }
}
</style>
