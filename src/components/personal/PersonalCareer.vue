<template>
  <section id="career" class="personal-career" data-theme="dark" aria-labelledby="career-heading">
    <div class="career-container container-editorial">
      <!-- Left Column: Sticky Editorial Sidebar -->
      <div class="career-sidebar">
        <div class="sidebar-sticky">
          <h2 id="career-heading" class="career-pixel-title font-pixel">
            <span>Fourteen</span>
            <span>years, Four</span>
            <span class="accent-word">teams.</span>
          </h2>
        </div>
      </div>

      <!-- Right Column: Timeline Rows -->
      <div class="career-content">
        <div class="milestones-list">
          <div
            v-for="item in careerData.milestones"
            :key="item.id"
            class="milestone-row"
          >
            <div class="milestone-main">
              <h3 class="company-name font-pixel">{{ item.company }}</h3>
              <span class="period-badge">{{ item.period }}</span>
            </div>

            <div class="milestone-details">
              <span class="role-title">{{ item.role }}</span>
              <p class="role-desc">{{ item.description }}</p>

              <div class="highlights-chips" v-if="item.highlights?.length">
                <span
                  v-for="(hl, idx) in item.highlights"
                  :key="idx"
                  class="highlight-chip"
                >
                  {{ hl }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PERSONAL_CONTENT } from '@/data/portfolioData';

const careerData = PERSONAL_CONTENT.career;
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.personal-career {
  background-color: var(--color-ink);
  color: var(--color-chalk);
  padding: clamp(5rem, 8vw, 7.5rem) 0;

  .career-container {
    display: grid;
    grid-template-columns: clamp(280px, 28vw, 340px) 1fr;
    gap: clamp(2.5rem, 5vw, 5rem);
    align-items: flex-start;
  }

  .career-sidebar {
    .sidebar-sticky {
      position: sticky;
      top: 104px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .section-tag {
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      color: var(--color-laterite);
      text-transform: uppercase;
    }

    .career-pixel-title {
      font-size: clamp(2.25rem, 3.8vw, 3.25rem);
      line-height: 1.15;
      color: var(--color-chalk);
      margin: 0;
      display: flex;
      flex-direction: column;
      font-weight: 700;

      .accent-word {
        color: var(--color-laterite);
      }
    }
  }

  .career-content {
    .milestones-list {
      display: flex;
      flex-direction: column;

      .milestone-row {
        padding: 2.25rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        display: flex;
        flex-direction: column;
        gap: 0.875rem;
        transition: background-color $transition-fast;

        &:first-child {
          padding-top: 0;
        }

        .milestone-main {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1.5rem;

          .company-name {
            font-size: clamp(1.375rem, 2.2vw, 1.75rem);
            font-weight: 600;
            color: var(--color-chalk);
            margin: 0;
            letter-spacing: -0.01em;
          }

          .period-badge {
            font-family: var(--font-family-mono);
            font-size: 0.875rem;
            color: #A8A29E;
            white-space: nowrap;
          }
        }

        .milestone-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          .role-title {
            font-size: 0.9375rem;
            font-weight: 500;
            color: var(--color-terracotta);
          }

          .role-desc {
            font-size: 0.875rem;
            line-height: 1.6;
            color: #A8A29E;
            margin: 0;
            max-width: 620px;
          }

          .highlights-chips {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
            margin-top: 0.375rem;

            .highlight-chip {
              font-size: 0.75rem;
              padding: 0.2rem 0.6rem;
              border-radius: var(--radius-full);
              background-color: rgba(255, 255, 255, 0.06);
              color: #D6D0C9;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 880px) {
  .personal-career {
    .career-container {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .career-sidebar {
      .sidebar-sticky {
        position: static;
      }
    }
  }
}
</style>
