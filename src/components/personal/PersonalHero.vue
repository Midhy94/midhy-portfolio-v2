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
          <!-- Watermark Logo behind photo, at top (Matching Footer Logo) -->
          <div class="portrait-bg-logo" aria-hidden="true">
            <svg
              class="portrait-logo-svg"
              viewBox="0 0 1915 317"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M191.098 46.5661C199.976 52.9368 203.585 60.6829 207.598 67.8988L248.347 138.414C255.507 150.643 259.087 157.704 259.087 159.597H261.087C262.477 156.127 264.234 152.501 266.359 148.719L311.367 70.0034C318.97 56.1547 324.29 48.3355 332.701 44.0654C343.996 39.1751 355.945 39.2681 364.914 41.6117C376.953 46.9352 383.171 58.1432 389.13 69.1352L513.385 290.988C519.222 300.468 521.443 306.35 520.048 308.637C517.91 311.619 515.578 313.121 513.052 313.144L367.624 313.288C357.119 313.369 349.602 311.485 345.074 307.637C340.937 303.216 336.938 297.048 333.076 289.132L263.774 167.095C262.077 164.003 260.515 162.171 259.087 161.597C257.696 165.071 255.962 168.735 253.885 172.589L186.146 291.109C179.335 302.107 172.32 309.283 165.102 312.638C161.631 313.152 156.348 313.363 149.253 313.269L7.10374 313.144C3.90622 312.068 1.58057 310.566 0.126795 308.637C-0.384461 305.342 0.650382 301.282 3.23132 296.458L131.974 67.5708C137.928 57.0599 145.174 45.7138 157.103 41.5647C169.379 38.986 180.78 38.929 191.098 46.5661Z"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="currentColor"
              />
              <path
                d="M508.254 178.468L579.878 178.245C587.77 178.305 593.521 180.968 599.185 186.63L652.968 285.584C661.426 299.371 664.845 307.727 663.225 310.65C661.576 312.301 659.379 313.054 656.634 312.911L548.314 313.025C545.984 312.173 544.263 311.048 543.151 309.649L488.117 208.634C485.735 204.377 485.068 199.043 486.116 192.631C488.403 187.041 492.072 182.707 497.122 179.629C500.744 178.706 504.454 178.319 508.254 178.468Z"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="currentColor"
              />
              <path
                d="M835 40H923C937.667 40 945 47.3333 945 62V291C945 305.667 937.667 313 923 313H736C703.333 313 680 301.667 666 279C654 256.333 654 234 666 212C679.333 189.333 702.667 178 736 178H835V40ZM756 230C741.333 230 734 235.167 734 245.5C734 255.833 741.333 261 756 261H835V230H756Z"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="currentColor"
              />
              <path
                d="M963 62C963 47.3333 970.333 40 985 40H1073V178H1138C1170.67 178 1194 191 1208 217L1254 297C1260 307.667 1257 313 1245 313H1164C1155.33 313 1148.67 308.667 1144 300L1113 246C1108.33 238 1101.33 234 1092 234H1073V291C1073 305.667 1065.67 313 1051 313H985C970.333 313 963 305.667 963 291V62Z"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="currentColor"
              />
              <path
                d="M1248 178H1348V240C1348 252 1354.67 258 1368 258H1426V178H1536V291C1536 305.667 1528.67 313 1514 313H1338C1278 313 1248 283 1248 223V178Z"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="currentColor"
              />
              <path
                d="M1553 178H1728C1760.67 178 1784 191 1798 217L1844 297C1850 307.667 1847 313 1835 313H1754C1745.33 313 1738.67 308.667 1734 300L1703 246C1698.33 238 1691.33 234 1682 234H1663V291C1663 305.667 1655.67 313 1641 313H1575C1560.33 313 1553 305.667 1553 291V178Z"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="currentColor"
              />
              <circle cx="1885" cy="287" r="30" fill="#B84A27" />
            </svg>
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
      max-width: 430px;
      aspect-ratio: 2 / 3.2;
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

      .portrait-bg-logo {
        position: absolute;
        top: clamp(1.5rem, 3.2vw, 2.25rem);
        left: 50%;
        transform: translateX(-50%);
        width: 82%;
        max-width: 340px;
        z-index: 1;
        color: rgba(255, 255, 255, 0.12);
        pointer-events: none;
        user-select: none;

        .portrait-logo-svg {
          width: 100%;
          height: auto;
          display: block;
        }

        circle {
          opacity: 0.85;
        }
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
