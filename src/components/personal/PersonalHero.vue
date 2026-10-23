<template>
  <section class="personal-hero" aria-labelledby="personal-hero-heading">
    <div class="hero-container container-editorial">
      <!-- Left Column: Copy & CTAs -->
      <div class="hero-content">
        <span class="hero-overline font-pixel">{{ heroData.overline }}</span>

        <h1 id="personal-hero-heading" class="hero-headline font-serif">
          <span>{{ heroData.headlineStart }}</span>
          <span>{{ heroData.headlineMiddle }}</span>
          <span>
            {{ heroData.headlineEnd }}
            <em class="hero-headline-accent">{{ heroData.headlineAccent }}</em>
          </span>
        </h1>

        <p class="hero-bio">
          {{ heroData.bio }}
        </p>

        <div class="hero-actions">
          <button
            type="button"
            class="cta-primary-btn"
            @click="$emit('switch-to-works')"
          >
            {{ heroData.primaryCta }}
          </button>

          <a
            :href="heroData.resumeUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="cta-secondary-link"
          >
            {{ heroData.secondaryCta }}
          </a>
        </div>
      </div>

      <!-- Right Column: Geometric Portrait Visual -->
      <div class="hero-visual">
        <div class="portrait-stage">
          <!-- Subtle Name Text Watermark behind photo, at top -->
          <span class="portrait-bg-name font-pixel" aria-hidden="true">MIDHUN</span>

          <!-- Two-tone background block matching design reference -->
          <div class="stage-backdrop">
            <div class="backdrop-left"></div>
            <div class="backdrop-right"></div>
          </div>

          <!-- Cutout Image of Midhun -->
          <img
            :src="heroData.portrait"
            alt="Midhun M. — Senior UI/UX & Product Designer"
            class="portrait-img"
            loading="eager"
            width="420"
            height="580"
          />

          <!-- Floating Metadata Badge (Designation Pill) -->
          <div class="portrait-tag-badge font-pixel">
            <span class="tag-text">{{ heroData.portraitTag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PERSONAL_CONTENT } from '@/data/portfolioData';

const emit = defineEmits<{
  (e: 'switch-to-works'): void;
}>();

const heroData = PERSONAL_CONTENT.hero;
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.personal-hero {
  padding: clamp(3.5rem, 6vw, 6rem) 0 clamp(4rem, 7vw, 6.5rem);
  position: relative;

  .hero-container {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: clamp(2rem, 5vw, 5rem);
    align-items: center;
  }

  .hero-content {
    display: flex;
    flex-direction: column;

    .hero-overline {
      font-family: var(--font-family-pixel);
      font-size: 0.8125rem;
      font-weight: 800;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--color-laterite);
      margin-bottom: 1.25rem;
      display: inline-block;
    }

    .hero-headline {
      font-size: clamp(2.75rem, 5.2vw, 4.375rem);
      font-weight: 400;
      line-height: 1.08;
      letter-spacing: -0.03em;
      color: var(--color-ink);
      margin: 0 0 1.75rem;
      display: flex;
      flex-direction: column;

      .hero-headline-accent {
        font-style: italic;
        color: var(--color-laterite);
        font-weight: 400;
        margin-left: 0.2rem;
      }
    }

    .hero-bio {
      font-size: clamp(1.0625rem, 1.8vw, 1.25rem);
      line-height: 1.65;
      color: var(--color-muted);
      margin: 0 0 2.25rem;
      max-width: 540px;
    }

    .hero-actions {
      display: flex;
      align-items: center;
      gap: 1.75rem;

      .cta-primary-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background-color: var(--color-laterite);
        color: #FFFFFF;
        font-size: 0.9375rem;
        font-weight: 500;
        padding: 0.8rem 1.75rem;
        border-radius: var(--radius-full);
        border: none;
        cursor: pointer;
        transition: background-color $transition-fast, transform $transition-fast, box-shadow $transition-fast;

        &:hover {
          background-color: #C83B18;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(225, 75, 39, 0.28);
        }

        &:focus-visible {
          outline: 2px solid var(--color-ink);
          outline-offset: 3px;
        }
      }

      .cta-secondary-link {
        display: inline-flex;
        align-items: center;
        font-size: 0.9375rem;
        font-weight: 500;
        color: var(--color-ink);
        text-decoration: none;
        padding: 0.8rem 1.75rem;
        border-radius: var(--radius-full);
        border: 1px solid var(--color-border);
        background-color: transparent;
        transition: background-color $transition-fast, border-color $transition-fast, color $transition-fast;

        &:hover {
          background-color: var(--color-cloud);
          border-color: var(--color-ink);
        }
      }
    }
  }

  // Right column: Portrait visual with #141210 background
  .hero-visual {
    display: flex;
    justify-content: flex-end;

    .portrait-stage {
      position: relative;
      width: 100%;
      max-width: 420px;
      aspect-ratio: 2 / 3;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      background-color: #141210;
      border-radius: 24px;
      overflow: hidden;
      box-shadow:
        0 24px 50px -12px rgba(20, 18, 16, 0.28),
        0 4px 16px rgba(20, 18, 16, 0.08);
      border: 1px solid rgba(20, 18, 16, 0.12);

      .portrait-bg-name {
        position: absolute;
        top: 1.75rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
        font-family: var(--font-family-pixel);
        font-size: clamp(3rem, 6.5vw, 4.5rem);
        font-weight: 800;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.08);
        line-height: 1;
        pointer-events: none;
        user-select: none;
        white-space: nowrap;
      }

      .stage-backdrop {
        display: none;
      }

      .portrait-img {
        position: relative;
        z-index: 2;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: bottom center;
        display: block;
      }

      .portrait-tag-badge {
        position: absolute;
        bottom: 1.25rem;
        left: 1.25rem;
        z-index: 3;
        display: inline-flex;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.12);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        color: #FFFFFF;
        font-family: var(--font-family-pixel);
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: -0.01em;
        padding: 0.45rem 0.95rem;
        border-radius: var(--radius-full);
        border: 1px solid rgba(255, 255, 255, 0.22);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
        max-width: calc(100% - 2.5rem);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}

@media (max-width: 900px) {
  .personal-hero {
    .hero-container {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .hero-visual {
      order: -1;
      justify-content: center;

      .portrait-stage {
        max-width: 320px;
      }
    }
  }
}
</style>
