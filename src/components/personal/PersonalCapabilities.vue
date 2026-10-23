<template>
  <section id="capabilities" class="personal-capabilities" aria-labelledby="capabilities-heading">
    <div class="capabilities-container container-editorial">
      <!-- Left Column: Sticky Editorial Sidebar -->
      <div class="capabilities-sidebar">
        <div class="sidebar-sticky">
          <h2 id="capabilities-heading" class="sidebar-headline font-serif">
            Skills &amp;<br>
            creative <em class="headline-accent">toolkit.</em>
          </h2>
        </div>
      </div>

      <!-- Right Column: Capabilities Stack & Tool Categories -->
      <div class="capabilities-content">
        <!-- Capabilities Stack -->
        <div class="capabilities-list">
          <div
            v-for="(group, idx) in capData.groups"
            :key="idx"
            class="capability-row"
          >
            <span class="capability-num font-mono">0{{ idx + 1 }}</span>
            <div class="capability-main">
              <h3 class="capability-name">{{ group.category }}</h3>
              <p class="capability-details">{{ group.details }}</p>
            </div>
          </div>
        </div>

        <!-- Tool Columns -->
        <div class="tools-grid">
          <div
            v-for="col in capData.toolColumns"
            :key="col.title"
            class="tool-column"
          >
            <h4 class="tool-category-title">{{ col.title }}</h4>
            <ul class="tool-items">
              <li v-for="tool in col.items" :key="tool" class="tool-item">
                {{ tool }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PERSONAL_CONTENT } from '@/data/portfolioData';

const capData = PERSONAL_CONTENT.capabilities;
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.personal-capabilities {
  padding: clamp(4.5rem, 7vw, 7rem) 0;
  border-top: 1px solid var(--color-border);

  .capabilities-container {
    display: grid;
    grid-template-columns: clamp(280px, 28vw, 340px) 1fr;
    gap: clamp(2.5rem, 5vw, 5rem);
    align-items: flex-start;
  }

  .capabilities-sidebar {
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

  .capabilities-content {
    .capabilities-list {
      display: flex;
      flex-direction: column;
      margin-bottom: 4rem;

      .capability-row {
        display: flex;
        align-items: flex-start;
        gap: 1.5rem;
        padding: 1.5rem 0;
        border-bottom: 1px solid var(--color-border);

        &:first-child {
          padding-top: 0;
        }

        .capability-num {
          font-size: 1.125rem;
          font-weight: 500;
          color: #A8A29E;
          line-height: 1.3;
          flex-shrink: 0;
        }

        .capability-main {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 2rem;
          width: 100%;

          .capability-name {
            font-size: 1.0625rem;
            font-weight: 600;
            color: var(--color-ink);
            margin: 0;
          }

          .capability-details {
            font-size: 0.9375rem;
            line-height: 1.6;
            color: var(--color-muted);
            margin: 0;
          }
        }
      }
    }

    .tools-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      padding-top: 1rem;

      .tool-column {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        .tool-category-title {
          margin-bottom: 0.25rem;
        }

        .tool-items {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          .tool-item {
            font-size: 0.9375rem;
            color: var(--color-ink);
            font-weight: 500;
          }
        }
      }
    }
  }
}

@media (max-width: 880px) {
  .personal-capabilities {
    .capabilities-container {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .capabilities-sidebar {
      .sidebar-sticky {
        position: static;
      }
    }

    .capabilities-content {
      .capabilities-list {
        .capability-row {
          .capability-main {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
        }
      }

      .tools-grid {
        grid-template-columns: 1fr;
        gap: 1.75rem;
      }
    }
  }
}
</style>
