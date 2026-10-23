<template>
  <section id="about" class="personal-about" aria-labelledby="about-heading">
    <div class="about-container container-editorial">
      <!-- Left Column: Sticky Editorial Sidebar -->
      <div class="about-sidebar">
        <div class="sidebar-sticky">
          <h2 id="about-heading" class="sidebar-headline font-serif">
            The story<br>
            behind the <em class="headline-accent">screens.</em>
          </h2>
        </div>
      </div>

      <!-- Right Column: Personal Statement -->
      <div class="about-content">
        <p class="about-lead font-serif">
          {{ aboutData.lead }}
        </p>

        <p class="about-paragraph">
          {{ aboutData.paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PERSONAL_CONTENT } from '@/data/portfolioData';

const aboutData = PERSONAL_CONTENT.about;
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.personal-about {
  padding: clamp(4.5rem, 7vw, 7rem) 0 clamp(5rem, 8vw, 7.5rem);
  border-top: 1px solid var(--color-border);

  .about-container {
    display: grid;
    grid-template-columns: clamp(280px, 28vw, 340px) 1fr;
    gap: clamp(2.5rem, 5vw, 5rem);
    align-items: flex-start;
  }

  .about-sidebar {
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

  .about-content {
    max-width: 820px;

    .about-lead {
      font-size: clamp(1.625rem, 2.6vw, 2.25rem);
      font-weight: 400;
      line-height: 1.35;
      letter-spacing: -0.02em;
      color: var(--color-ink);
      margin: 0 0 2rem;
    }

    .about-paragraph {
      font-size: clamp(1.0625rem, 1.6vw, 1.1875rem);
      line-height: 1.8;
      color: var(--color-muted);
      margin: 0;
    }
  }
}

@media (max-width: 880px) {
  .personal-about {
    .about-container {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .about-sidebar {
      .sidebar-sticky {
        position: static;
      }
    }
  }
}
</style>
