<template>
  <section
    id="personal-hero"
    ref="heroRootRef"
    class="personal-hero"
    aria-labelledby="personal-hero-heading"
  >
    <div class="hero-card-stage">
      <!-- Living Dynamic Mesh Background (Grainient WebGL2 Shader from React Bits) -->
      <Grainient
        class="hero-card-canvas"
        :colors="['#000000', '#000b21', '#1a3b5e', '#4c7fae', '#649ccd', '#34618b', '#081d38', '#000000']"
        :angle="221"
        :flow="0.55"
        :silk="0"
        :grain-amount="0"
        :scale="3"
        :speed="0.9"
        :grain-size="0.9"
        :saturation="0.96"
        :intro="false"
      />

      <!-- Embedded Navbar inside the top of the hero image/card -->
      <SiteHeader :mode="'personal'" :is-loaded="true" :embedded="true" />

      <!-- Upper 3-Zone Compositional Grid -->
      <div class="hero-main-grid">
        <!-- Left Column: Bold Display Typography -->
        <div class="hero-left-column">
          <span class="hero-greeting font-sans">{{ heroData.greeting }}</span>
          <h1 id="personal-hero-heading" class="hero-role-title font-serif">
            <span class="role-line">{{ heroData.roleLine1 }}</span>
            <span class="role-line">{{ heroData.roleLine2 }}</span>
          </h1>
        </div>

        <!-- Center Column: Grounded Subject Portrait with Studio Halo -->
        <div class="hero-portrait-column">
          <div class="portrait-stage">
            <!-- Studio Key/Fill Halo behind Midhun -->
            <div class="portrait-lighting-halo" aria-hidden="true"></div>

            <!-- Authentic Untampered High-Resolution Portrait Cutout -->
            <img
              :src="heroData.portrait"
              alt="Midhun M. — Creative Director & Senior Product Designer"
              class="portrait-img"
              loading="eager"
              width="500"
              height="700"
            />
          </div>
        </div>

        <!-- Right Column: Statement, Narrative & Action Levers -->
        <div class="hero-right-column">
          <h2 class="hero-statement-title font-serif">
            {{ heroData.statementTitle }}
          </h2>
          <p class="hero-statement-desc font-sans">
            {{ heroData.statementDesc }}
          </p>

          <div class="hero-actions">
            <div class="hero-cta-group">
              <button
                type="button"
                class="cta-primary-btn font-sans"
                @click="$emit('switch-to-works')"
              >
                {{ heroData.primaryCta }}
              </button>

              <a
                :href="heroData.resumeUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="cta-secondary-link font-sans"
              >
                {{ heroData.secondaryCta }}
              </a>
            </div>

            <!-- Smooth One-Scroll Down Trigger -->
            <button
              type="button"
              class="cta-scroll-cue-btn font-sans"
              aria-label="Scroll down to next section"
              @click="scrollToNext"
            >
              <span class="mouse-track" aria-hidden="true">
                <span class="mouse-dot"></span>
              </span>
              <span class="cue-label">Scroll to explore</span>
              <span class="cue-arrow" aria-hidden="true">↓</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom Capabilities Bar: 4 Numbered Pillars -->
      <div class="hero-pillars-row" aria-label="Core disciplines">
        <div
          v-for="pillar in heroData.pillars"
          :key="pillar.number"
          class="pillar-item"
        >
          <span class="pillar-number font-sans">{{ pillar.number }}</span>
          <span class="pillar-label font-sans">{{ pillar.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PERSONAL_CONTENT } from '@/data/portfolioData';
import SiteHeader from '@/components/common/SiteHeader.vue';
import Grainient from '@/components/common/Grainient.vue';
import { useOneScrollTransition } from '@/composables/useOneScrollTransition';

defineEmits<{
  (e: 'switch-to-works'): void;
}>();

const heroData = PERSONAL_CONTENT.hero;
const heroRootRef = ref<HTMLElement | null>(null);

const { scrollToNext } = useOneScrollTransition({
  targetSelector: '#statement',
  heroRef: heroRootRef,
  duration: 1.35,
});
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.personal-hero {
  --hero-frame-gap: clamp(0.75rem, 1.25vw, 1.25rem);

  position: relative;
  width: 100%;
  margin: 0;
  background-color: var(--color-paper);
  // Identical 4-sided whitespace framing around the hero stage (Faizur reference)
  padding: var(--hero-frame-gap);
  box-sizing: border-box;

  .hero-card-stage {
    position: relative;
    width: 100%;
    margin: 0 auto;
    border-radius: clamp(22px, 2.5vw, 32px);
    overflow: visible;
    will-change: transform;

    // Completely removed box shadow from below hero section (flush, razor-clean framing)
    box-shadow: none;
    border: 1px solid rgba(255, 255, 255, 0.08);

    // Deep base fallback color behind the WebGL shader canvas
    background-color: #010814;

    padding: clamp(1rem, 1.6vw, 1.5rem) clamp(1.5rem, 3.5vw, 3.5rem) clamp(1.25rem, 2vw, 2rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    // Dynamic Viewport Height: Card dynamically scales to viewport height minus the 4-sided uniform whitespace
    height: calc(100dvh - (2 * var(--hero-frame-gap)));
    min-height: max(580px, calc(100dvh - (2 * var(--hero-frame-gap))));
    box-sizing: border-box;

    .hero-card-canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      overflow: hidden;
      z-index: 0;
      pointer-events: auto;
    }
  }

  // 3-Zone Panoramic Grid
  .hero-main-grid {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1.05fr 1.45fr 1fr;
    align-items: center;
    gap: clamp(1rem, 2vw, 2.5rem);
    margin-bottom: clamp(0.75rem, 1.5vw, 1.5rem);
    flex: 1;
    min-height: 0;
  }

  // Left Column: Bold Display Typography (Refined Editorial Serif)
  .hero-left-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;

    .hero-greeting {
      font-size: clamp(1.15rem, 1.8vw, 1.5rem);
      font-weight: 500;
      color: rgba(255, 255, 255, 0.92);
      letter-spacing: -0.015em;
      margin-bottom: clamp(0.4rem, 0.8vw, 0.75rem);
    }

    .hero-role-title {
      font-family: var(--font-family-serif);
      font-size: clamp(3.2rem, 6.8vw, 6.2rem);
      font-weight: 400;
      line-height: 0.98;
      letter-spacing: -0.03em;
      color: #FFFFFF;
      margin: 0;
      display: flex;
      flex-direction: column;

      .role-line {
        display: block;
        white-space: nowrap;
      }
    }
  }

  // Center Column: Subject Portrait & Cool Ambient Light (No orange glow, enlarged)
  .hero-portrait-column {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    align-self: stretch;
    z-index: 3;

    .portrait-stage {
      position: relative;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      width: 100%;
      height: 100%;
      max-width: clamp(440px, 46vw, 660px);
    }

    .portrait-lighting-halo {
      position: absolute;
      top: 15%;
      left: 50%;
      transform: translateX(-50%);
      width: clamp(320px, 36vw, 500px);
      height: clamp(320px, 36vw, 500px);
      border-radius: 50%;
      // Cool luminous atmospheric glow - zero orange tint
      background: radial-gradient(circle at 50% 48%, rgba(95, 160, 245, 0.28) 0%, rgba(45, 95, 180, 0.12) 45%, transparent 70%);
      filter: blur(40px);
      pointer-events: none;
      z-index: 1;
    }

    .portrait-img {
      position: relative;
      z-index: 2;
      width: 100%;
      height: auto;
      max-height: clamp(460px, 100vh, 800px);
      object-fit: contain;
      object-position: bottom center;
      filter: drop-shadow(0 28px 42px rgba(0, 0, 0, 0.55));
      user-select: none;
      pointer-events: none;
    }
  }

  // Right Column: Statement, Narrative & Action Levers
  .hero-right-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    padding-left: clamp(0.5rem, 1.5vw, 1.5rem);

    .hero-statement-title {
      font-family: var(--font-family-serif);
      font-size: clamp(1.6rem, 2.6vw, 2.35rem);
      font-weight: 400;
      line-height: 1.2;
      letter-spacing: -0.02em;
      color: #FFFFFF;
      margin: 0 0 1rem;
      text-wrap: balance;
    }

    .hero-statement-desc {
      font-size: clamp(0.9375rem, 1.2vw, 1.0625rem);
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.72);
      margin: 0 0 clamp(1.5rem, 2.5vw, 2.25rem);
      max-width: 380px;
      text-wrap: pretty;
    }

    .hero-actions {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.15rem;

      .hero-cta-group {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        flex-wrap: wrap;
      }

      .cta-primary-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background-color: var(--color-laterite);
        color: #FFFFFF;
        font-size: 0.9375rem;
        font-weight: 600;
        padding: 0.85rem 1.85rem;
        border-radius: var(--radius-full);
        border: none;
        cursor: pointer;
        transition: background-color $transition-fast, transform $transition-fast, box-shadow $transition-fast;

        &:hover {
          background-color: #C83B18;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(225, 75, 39, 0.4);
        }

        &:focus-visible {
          outline: 2px solid #FFFFFF;
          outline-offset: 3px;
        }
      }

      .cta-secondary-link {
        display: inline-flex;
        align-items: center;
        font-size: 0.9375rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.85);
        text-decoration: none;
        padding: 0.85rem 1.65rem;
        border-radius: var(--radius-full);
        border: 1px solid rgba(255, 255, 255, 0.22);
        background-color: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(8px);
        transition: background-color $transition-fast, border-color $transition-fast, color $transition-fast, transform $transition-fast;

        &:hover {
          background-color: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.45);
          color: #FFFFFF;
          transform: translateY(-1px);
        }

        &:focus-visible {
          outline: 2px solid #FFFFFF;
          outline-offset: 3px;
        }
      }

      .cta-scroll-cue-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.65rem;
        background: transparent;
        border: none;
        padding: 0.35rem 0 0;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 0.01em;
        cursor: pointer;
        transition: color $transition-fast, transform $transition-fast;

        &:hover {
          color: #FFFFFF;
          transform: translateY(2px);

          .mouse-track {
            border-color: rgba(255, 255, 255, 0.85);
          }
          .cue-arrow {
            transform: translateY(2px);
            color: var(--color-laterite);
          }
        }

        &:focus-visible {
          outline: 2px solid #FFFFFF;
          outline-offset: 3px;
        }

        .mouse-track {
          width: 14px;
          height: 22px;
          border: 1.5px solid rgba(255, 255, 255, 0.45);
          border-radius: 9px;
          display: flex;
          justify-content: center;
          padding-top: 3px;
          position: relative;
          transition: border-color $transition-fast;

          .mouse-dot {
            width: 3px;
            height: 4px;
            background-color: var(--color-laterite);
            border-radius: 2px;
            animation: mouseWheelScroll 1.6s infinite ease-in-out;
          }
        }

        .cue-label {
          font-family: var(--font-family-sans);
        }

        .cue-arrow {
          display: inline-block;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.55);
          transition: transform $transition-fast, color $transition-fast;
        }
      }
    }
  }

  // Bottom Capabilities Bar: 4 Numbered Pillars
  .hero-pillars-row {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1.15fr 1fr 1fr 1.15fr;
    gap: clamp(4.5rem, 3.5vw, 4.5rem);
    padding: clamp(1.5rem, 3.2vw, 2.25rem);
    border-top: 1px solid rgba(255, 255, 255, 0.12);

    .pillar-item {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;

      &:nth-child(2) {
        text-align: left;
        padding-right: 0.5rem;
      }

      &:nth-child(3) {
        text-align: left;
        padding-left: 0.5rem;
      }

      .pillar-number {
        font-size: clamp(0.9375rem, 1.2vw, 1.1rem);
        font-weight: 700;
        color: var(--color-laterite);
        letter-spacing: -0.01em;
      }

      .pillar-label {
        font-size: clamp(0.875rem, 1.1vw, 1rem);
        font-weight: 500;
        color: rgba(255, 255, 255, 0.94);
        letter-spacing: -0.015em;
        line-height: 1.35;
      }
    }
  }
}

// Tablet Layout (max-width: 1080px)
@media (max-width: 1080px) {
  .personal-hero {
    --hero-frame-gap: clamp(0.625rem, 1.5vw, 1rem);
    padding: var(--hero-frame-gap);

    .hero-card-stage {
      height: auto;
      min-height: calc(100dvh - (2 * var(--hero-frame-gap)));
      padding: clamp(1rem, 2vw, 1.5rem) clamp(1.25rem, 3vw, 2.5rem) clamp(1.5rem, 2.5vw, 2rem);
    }

    .hero-main-grid {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "title portrait"
        "statement statement";
      gap: 2rem;
    }

    .hero-left-column {
      grid-area: title;
      .hero-role-title {
        font-size: clamp(2.8rem, 5.5vw, 4.2rem);
      }
    }

    .hero-portrait-column {
      grid-area: portrait;
      .portrait-stage {
        max-width: 480px;
      }
      .portrait-img {
        max-height: 540px;
      }
    }

    .hero-right-column {
      grid-area: statement;
      padding-left: 0;
      max-width: 600px;
    }

    .hero-pillars-row {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }
}

// Mobile Layout (max-width: 720px)
@media (max-width: 720px) {
  .personal-hero {
    --hero-frame-gap: clamp(0.5rem, 1.8vw, 0.75rem);
    padding: var(--hero-frame-gap);

    .hero-card-stage {
      height: auto;
      min-height: calc(100dvh - (2 * var(--hero-frame-gap)));
      padding: 1.15rem 1.15rem 2.25rem;
      border-radius: clamp(16px, 3.5vw, 22px);
    }

    .hero-main-grid {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.75rem;
      margin-bottom: 2rem;
    }

    .hero-left-column {
      width: 100%;

      .hero-greeting {
        font-size: 1rem;
      }

      .hero-role-title {
        font-size: clamp(2.35rem, 9.2vw, 3.25rem);
        .role-line {
          white-space: normal;
        }
      }
    }

    .hero-portrait-column {
      width: 100%;
      justify-content: center;

      .portrait-stage {
        max-width: 380px;
      }

      .portrait-img {
        max-height: 440px;
      }
    }

    .hero-right-column {
      width: 100%;

      .hero-statement-title {
        font-size: 1.35rem;
      }

      .hero-statement-desc {
        max-width: 100%;
        font-size: 0.9375rem;
      }

      .hero-actions {
        width: 100%;
        gap: 0.85rem;
        margin-bottom: 0.5rem;

        .cta-primary-btn,
        .cta-secondary-link,
        .cta-scroll-cue-btn {
          width: 100%;
          justify-content: center;
        }
      }
    }

    .hero-pillars-row {
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem 1rem;
      padding-top: 1.5rem;

      .pillar-item {
        .pillar-number {
          font-size: 0.9375rem;
        }
        .pillar-label {
          font-size: 0.875rem;
        }
      }
    }
  }
}

// Subtle vertical gliding dot keyframe for mouse wheel icon
@keyframes mouseWheelScroll {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0.35;
    transform: translateY(5px);
  }
  100% {
    opacity: 0;
    transform: translateY(7px);
  }
}

// Respect Reduced Motion
@media (prefers-reduced-motion: reduce) {
  .personal-hero {
    .cta-primary-btn,
    .cta-secondary-link,
    .cta-scroll-cue-btn {
      transition: none !important;
      transform: none !important;
    }
    .cta-scroll-cue-btn .mouse-dot {
      animation: none !important;
    }
  }
}
</style>
