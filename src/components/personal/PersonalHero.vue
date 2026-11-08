<template>
  <section
    id="personal-hero"
    class="personal-hero"
    aria-labelledby="personal-hero-heading"
  >
    <div class="hero-card-stage">
      <!-- Upper 3-Zone Compositional Grid -->
      <div class="hero-main-grid">
        <!-- Left Column: Bold Display Typography -->
        <div class="hero-left-column">
          <span class="hero-greeting font-sans">{{ heroData.greeting }}</span>
          <h1 id="personal-hero-heading" class="hero-role-title font-sans">
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
          <h2 class="hero-statement-title font-sans">
            {{ heroData.statementTitle }}
          </h2>
          <p class="hero-statement-desc font-sans">
            {{ heroData.statementDesc }}
          </p>

          <div class="hero-actions">
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
import { PERSONAL_CONTENT } from '@/data/portfolioData';

defineEmits<{
  (e: 'switch-to-works'): void;
}>();

const heroData = PERSONAL_CONTENT.hero;
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.personal-hero {
  position: relative;
  width: 100%;
  margin: 0;
  // Clean framing spacing below navbar
  padding: clamp(0.5rem, 1.2vw, 1rem) clamp(0.75rem, 2vw, 2rem) clamp(2.5rem, 4vw, 4rem);
  box-sizing: border-box;

  .hero-card-stage {
    position: relative;
    width: 100%;
    margin: 0 auto;
    border-radius: clamp(24px, 3.2vw, 36px);
    overflow: hidden;
    box-shadow:
      0 20px 50px -12px rgba(14, 12, 11, 0.25),
      0 0 0 1px rgba(255, 255, 255, 0.10);

    // Ash-to-Silver Studio Gradient (Sampled directly from reference mockup)
    background-color: #0E0C0B;
    background-image:
      // 1. Subtle warm studio rim backlight centered behind subject
      radial-gradient(ellipse 50% 45% at 50% 46%, rgba(225, 75, 39, 0.26) 0%, rgba(180, 100, 60, 0.10) 35%, transparent 70%),
      // 2. High-key silver ambient illumination wash across top-right & top-center
      radial-gradient(ellipse 90% 70% at 75% 0%, #E0DFE1 0%, #D4D0CE 24%, #A29C9A 52%, transparent 85%),
      // 3. Diagonal foundational ash-to-carbon gradient ramp
      linear-gradient(155deg, #8A827F 0%, #645A58 22%, #38312F 50%, #1A1615 78%, #0C0A09 100%);

    padding: clamp(2.5rem, 4vw, 3.75rem) clamp(1.5rem, 3.5vw, 3.5rem) clamp(3.25rem, 4.5vw, 4.5rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: clamp(680px, 90vh, 860px);
    box-sizing: border-box;
  }

  // 3-Zone Panoramic Grid
  .hero-main-grid {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1.15fr 1.35fr 1.05fr;
    align-items: center;
    gap: clamp(1rem, 2vw, 3rem);
    margin-bottom: clamp(1.5rem, 2.5vw, 2.5rem);
    flex: 1;
  }

  // Left Column: Bold Display Typography
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
      font-size: clamp(3.6rem, 7.2vw, 6.6rem);
      font-weight: 800;
      line-height: 0.94;
      letter-spacing: -0.04em;
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

  // Center Column: Subject Portrait & Rim Light Halo
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
      max-width: 520px;
    }

    .portrait-lighting-halo {
      position: absolute;
      top: 15%;
      left: 50%;
      transform: translateX(-50%);
      width: clamp(280px, 32vw, 420px);
      height: clamp(280px, 32vw, 420px);
      border-radius: 50%;
      background: radial-gradient(circle at 50% 50%, rgba(225, 75, 39, 0.32) 0%, rgba(255, 255, 255, 0.12) 35%, transparent 70%);
      filter: blur(32px);
      pointer-events: none;
      z-index: 1;
    }

    .portrait-img {
      position: relative;
      z-index: 2;
      width: 100%;
      height: auto;
      max-height: clamp(480px, 62vh, 660px);
      object-fit: contain;
      object-position: bottom center;
      filter: drop-shadow(0 24px 36px rgba(0, 0, 0, 0.5));
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
      font-size: clamp(1.4rem, 2.3vw, 2rem);
      font-weight: 700;
      line-height: 1.25;
      letter-spacing: -0.025em;
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
      align-items: center;
      gap: 1.25rem;
      flex-wrap: wrap;

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
    }
  }

  // Bottom Capabilities Bar: 4 Numbered Pillars
  .hero-pillars-row {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1.15fr 1fr 1fr 1.15fr;
    gap: clamp(1.5rem, 3.5vw, 4.5rem);
    padding-top: clamp(1.5rem, 2.2vw, 2.25rem);
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
        max-width: 320px;
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
    padding: 0.25rem 0.5rem 2rem;

    .hero-card-stage {
      padding: 2.25rem 1.15rem 4.5rem;
      border-radius: 20px;
      min-height: auto;
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
        max-width: 280px;
      }

      .portrait-img {
        max-height: 320px;
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
        .cta-secondary-link {
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

// Respect Reduced Motion
@media (prefers-reduced-motion: reduce) {
  .personal-hero {
    .cta-primary-btn,
    .cta-secondary-link {
      transition: none !important;
      transform: none !important;
    }
  }
}
</style>
