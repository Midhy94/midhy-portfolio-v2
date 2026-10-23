<template>
  <section class="works-hero" aria-labelledby="works-hero-heading">
    <div class="hero-container container-editorial">
      <div class="hero-header-row">
        <!-- Left: Headline -->
        <div class="hero-title-col">
          <h1 id="works-hero-heading" class="hero-headline font-serif">
            <span>{{ heroData.headlineStart }}</span>
            <span>{{ heroData.headlineMiddle }}</span>
            <span class="headline-bottom">
              systems
              <span class="pixel-accent font-pixel">{{ heroData.headlineAccent }}</span>
            </span>
          </h1>
        </div>

        <!-- Right: Lead Introduction Statement -->
        <div class="hero-lead-col">
          <p class="hero-lead-text">
            {{ heroData.lead }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { WORKS_CONTENT } from '@/data/portfolioData';

const heroData = WORKS_CONTENT.hero;
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.works-hero {
  padding: clamp(3.5rem, 6vw, 6rem) 0 clamp(3.5rem, 5vw, 5rem);

  .hero-header-row {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: clamp(2rem, 5vw, 5rem);
    align-items: flex-end;
  }

  .hero-title-col {
    .hero-overline {
      margin-bottom: 1.25rem;
    }

    .hero-headline {
      font-size: clamp(2.75rem, 5.2vw, 4.375rem);
      font-weight: 400;
      line-height: 1.08;
      letter-spacing: -0.03em;
      color: var(--color-ink);
      margin: 0;
      display: flex;
      flex-direction: column;

      .headline-bottom {
        display: inline-flex;
        align-items: baseline;
        gap: 0.5rem;
        flex-wrap: wrap;

        .pixel-accent {
          color: var(--color-laterite);
          font-size: 0.85em;
          letter-spacing: -0.01em;
          font-weight: 700;
        }
      }
    }
  }

  .hero-lead-col {
    .hero-lead-text {
      font-size: clamp(1.0625rem, 1.8vw, 1.25rem);
      line-height: 1.65;
      color: var(--color-muted);
      margin: 0;
      max-width: 480px;
    }
  }
}

@media (max-width: 860px) {
  .works-hero {
    .hero-header-row {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
}
</style>
