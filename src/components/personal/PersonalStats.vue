<template>
  <section class="personal-legacy" aria-labelledby="legacy-heading">
    <div class="legacy-container container-editorial">
      <!-- Main Headline in Newsreader serif matching site theme -->
      <h2 id="legacy-heading" class="legacy-headline font-serif">
        <span>{{ legacyData.headlinePart1 }}</span>
        <span class="headline-indent">
          we leave the ability to <em class="headline-accent">improve.</em>
        </span>
      </h2>

      <!-- Two-column Statement -->
      <div class="legacy-columns">
        <div class="col-lead">
          <p class="lead-statement font-serif">
            {{ legacyData.statementLead }}
          </p>
        </div>

        <div class="col-detail">
          <p class="detail-statement font-sans">
            {{ legacyData.statementDetail }}
          </p>
        </div>
      </div>
    </div>

    <!-- Dual Infinite Scrolling Marquee Ribbon -->
    <div class="legacy-marquee-stage" aria-hidden="true">
      <!-- Row 1: Large Items with Diamond Bullets in Merriweather Sans -->
      <div class="ticker-ribbon ribbon-primary">
        <div class="ticker-track">
          <template v-for="n in 3" :key="'r1-' + n">
            <span
              v-for="(item, idx) in legacyData.marqueeRow1"
              :key="'item-1-' + idx"
              class="ticker-item item--primary font-pixel"
            >
              <span class="item-text">{{ item }}</span>
              <span class="item-bullet">◆</span>
            </span>
          </template>
        </div>
      </div>

      <!-- Row 2: Smaller Subtle Items with Dot Bullets -->
      <div class="ticker-ribbon ribbon-secondary">
        <div class="ticker-track track--reverse">
          <template v-for="n in 3" :key="'r2-' + n">
            <span
              v-for="(item, idx) in legacyData.marqueeRow2"
              :key="'item-2-' + idx"
              class="ticker-item item--secondary font-sans"
            >
              <span class="item-text">{{ item }}</span>
              <span class="item-dot">•</span>
            </span>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PERSONAL_CONTENT } from '@/data/portfolioData';

const legacyData = PERSONAL_CONTENT.legacy;
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.personal-legacy {
  padding: clamp(4.5rem, 7vw, 7rem) 0 clamp(3.5rem, 6vw, 5.5rem);
  background-color: var(--color-paper);
  border-top: 1px solid var(--color-border);
  position: relative;
  overflow: hidden;

  .legacy-container {
    width: 100%;
    margin-bottom: clamp(3rem, 5vw, 4.5rem);
  }

  // Main Headline in Newsreader serif
  .legacy-headline {
    font-family: var(--font-family-serif);
    font-size: clamp(2.35rem, 4.6vw, 3.875rem);
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -0.025em;
    color: var(--color-ink);
    margin: 0 0 clamp(2.25rem, 4vw, 3.25rem);
    display: flex;
    flex-direction: column;

    .headline-indent {
      color: var(--color-ink);
    }

    .headline-accent {
      font-style: italic;
      color: var(--color-laterite);
      font-weight: 400;
    }
  }


  // Two-column Statement
  .legacy-columns {
    display: grid;
    grid-template-columns: 1.15fr 1fr;
    gap: clamp(2.5rem, 6vw, 5.5rem);
    align-items: flex-start;

    .col-lead {
      .lead-statement {
        font-family: var(--font-family-serif);
        font-size: clamp(1.35rem, 2.2vw, 1.85rem);
        font-weight: 400;
        line-height: 1.35;
        letter-spacing: -0.015em;
        color: var(--color-ink);
        margin: 0;
      }
    }

    .col-detail {
      .detail-statement {
        font-family: var(--font-family-sans);
        font-size: clamp(0.9375rem, 1.3vw, 1.0625rem);
        line-height: 1.7;
        color: var(--color-muted);
        margin: 0;
      }
    }
  }

  // Dual Infinite Marquee Ticker
  .legacy-marquee-stage {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    padding: clamp(1.75rem, 3.5vw, 2.75rem) 0;
    background-color: #F0EFEA;
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent, black 7%, black 93%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 7%, black 93%, transparent);

    &:hover {
      .ticker-track {
        animation-play-state: paused;
      }
    }

    .ticker-ribbon {
      width: 100%;
      overflow: hidden;
      display: flex;
      white-space: nowrap;
    }

    .ticker-track {
      display: inline-flex;
      align-items: center;
      width: max-content;
      animation: tickerScroll 42s linear infinite;
      will-change: transform;

      &.track--reverse {
        animation: tickerScrollReverse 48s linear infinite;
      }
    }

    .ticker-item {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;

      &.item--primary {
        font-family: var(--font-family-pixel);
        font-size: clamp(1.35rem, 2.5vw, 2rem);
        font-weight: 700;
        letter-spacing: -0.02em;
        color: var(--color-ink);

        .item-bullet {
          font-size: 0.6em;
          color: var(--color-laterite);
          margin: 0 clamp(1.25rem, 2.5vw, 2rem);
          display: inline-block;
          transform: translateY(-2px);
        }
      }

      &.item--secondary {
        font-family: var(--font-family-sans);
        font-size: clamp(0.875rem, 1.2vw, 1.0625rem);
        font-weight: 500;
        letter-spacing: 0.01em;
        color: var(--color-muted);

        .item-dot {
          font-size: 1.1em;
          color: #BDB7AB;
          margin: 0 clamp(1rem, 2vw, 1.5rem);
        }
      }
    }
  }
}

@keyframes tickerScroll {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-33.333%, 0, 0);
  }
}

@keyframes tickerScrollReverse {
  0% {
    transform: translate3d(-33.333%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@media (max-width: 860px) {
  .personal-legacy {
    .legacy-columns {
      grid-template-columns: 1fr;
      gap: 1.75rem;
    }
  }
}
</style>
