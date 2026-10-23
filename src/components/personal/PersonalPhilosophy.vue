<template>
  <section id="philosophy" class="personal-philosophy" aria-labelledby="philosophy-heading">
    <div class="philosophy-container container-editorial">
      <!-- Left Column: Sticky Editorial Sidebar -->
      <div class="philosophy-sidebar">
        <div class="sidebar-sticky">
          <h2 id="philosophy-heading" class="sidebar-headline font-serif">
            How I think<br>
            <em class="headline-accent">&amp; build.</em>
          </h2>
        </div>
      </div>

      <!-- Right Column: Lead Statement & 6 Principles Grid -->
      <div class="philosophy-content">
        <p class="philosophy-lead font-serif">
          {{ philosophyData.lead }}
        </p>

        <div class="principles-grid">
          <div
            v-for="(item, idx) in philosophyData.principles"
            :key="idx"
            class="principle-card"
          >
            <span class="principle-num font-mono">0{{ idx + 1 }}</span>
            <div class="principle-body">
              <h3 class="principle-title">{{ item.title }}</h3>
              <p class="principle-desc">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PERSONAL_CONTENT } from '@/data/portfolioData';

const philosophyData = PERSONAL_CONTENT.philosophy;
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.personal-philosophy {
  padding: clamp(4.5rem, 7vw, 7rem) 0;
  border-top: 1px solid var(--color-border);

  .philosophy-container {
    display: grid;
    grid-template-columns: clamp(280px, 28vw, 340px) 1fr;
    gap: clamp(2.5rem, 5vw, 5rem);
    align-items: flex-start;
  }

  .philosophy-sidebar {
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

    .sidebar-headline {
      font-size: clamp(2.25rem, 3.6vw, 3.125rem);
      font-weight: 400;
      line-height: 1.12;
      letter-spacing: -0.025em;
      color: var(--color-ink);
      margin: 0;

      .headline-accent {
        font-style: italic;
        color: var(--color-laterite);
        font-weight: 400;
      }
    }
  }

  .philosophy-content {
    .philosophy-lead {
      font-size: clamp(1.625rem, 2.6vw, 2.25rem);
      font-weight: 400;
      line-height: 1.35;
      letter-spacing: -0.02em;
      color: var(--color-ink);
      margin: 0 0 3.5rem;
      max-width: 820px;
    }

    .principles-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2.5rem 3rem;

      .principle-card {
        display: flex;
        align-items: flex-start;
        gap: 1.25rem;
        padding-top: 1.5rem;
        border-top: 1px solid var(--color-border);

        .principle-num {
          font-size: 1.125rem;
          font-weight: 500;
          color: #A8A29E;
          line-height: 1.3;
          flex-shrink: 0;
        }

        .principle-body {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          .principle-title {
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--color-ink);
            margin: 0;
            line-height: 1.3;
          }

          .principle-desc {
            font-size: 0.9375rem;
            line-height: 1.6;
            color: var(--color-muted);
            margin: 0;
          }
        }
      }
    }
  }
}

@media (max-width: 880px) {
  .personal-philosophy {
    .philosophy-container {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .philosophy-sidebar {
      .sidebar-sticky {
        position: static;
      }
    }

    .principles-grid {
      grid-template-columns: 1fr;
      gap: 1.75rem;
    }
  }
}
</style>
