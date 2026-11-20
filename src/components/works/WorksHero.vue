<template>
  <InnerHeroStage mode="works">
    <div class="hero-container container-editorial">
      <div class="hero-header-row">
        <!-- Left: Headline -->
        <div class="hero-title-col">
          <h1 id="works-hero-heading" class="hero-headline font-serif">
            <span>{{ heroData.headlineStart }}</span>
            <span>{{ heroData.headlineMiddle }}</span>
            <span class="headline-accent font-serif">{{ heroData.headlineAccent }}</span>
          </h1>
        </div>

        <!-- Right: Lead Introduction Statement -->
        <div class="hero-lead-col">
          <p class="hero-lead-text font-sans">
            {{ heroData.lead }}
          </p>
        </div>
      </div>
    </div>
  </InnerHeroStage>
</template>

<script setup lang="ts">
import { WORKS_CONTENT } from '@/data/portfolioData';
import InnerHeroStage from '@/components/common/InnerHeroStage.vue';

const heroData = WORKS_CONTENT.hero;
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.hero-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  .hero-header-row {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: clamp(2rem, 5vw, 5rem);
    align-items: flex-end;
  }

  .hero-title-col {
    .hero-headline {
      font-size: clamp(2.75rem, 5.2vw, 4.375rem);
      font-weight: 400;
      line-height: 1.08;
      letter-spacing: -0.03em;
      color: #FFFFFF;
      margin: 0;
      display: flex;
      flex-direction: column;

      .headline-accent {
        color: var(--color-laterite);
        font-style: italic;
      }
    }
  }

  .hero-lead-col {
    .hero-lead-text {
      font-size: clamp(1.0625rem, 1.8vw, 1.25rem);
      line-height: 1.65;
      color: rgba(255, 255, 255, 0.76);
      margin: 0;
      max-width: 520px;
      text-wrap: pretty;
    }
  }
}

@media (max-width: 860px) {
  .hero-container {
    .hero-header-row {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      align-items: flex-start;
    }
  }
}
</style>
