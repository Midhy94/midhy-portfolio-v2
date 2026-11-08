<template>
  <footer id="contact" class="site-footer" data-theme="dark" role="contentinfo">
    <div class="footer-container container-editorial">
      <div class="footer-top-row">
        <div class="footer-content">
          <h2 class="footer-headline font-serif">
            {{ mode === 'works' ? FOOTER_CONTENT.works.headline : FOOTER_CONTENT.personal.headline }}
          </h2>

          <p class="footer-subtext">
            {{ mode === 'works' ? FOOTER_CONTENT.works.subtext : FOOTER_CONTENT.personal.subtext }}
          </p>

          <!-- Interactive Copy-to-Clipboard Email Box -->
          <button
            type="button"
            class="email-action-box"
            :class="{ copied }"
            @click="handleCopyEmail"
            :aria-label="copied ? 'Email copied to clipboard' : 'Click to copy email address mnairmidhun@gmail.com'"
          >
            <span class="email-prompt">
              <template v-if="copied">
                <span class="copied-check">✓ Copied to clipboard!</span>
              </template>
              <template v-else>
                <span class="prompt-label">Drop me an email directly at —</span>
                <span class="prompt-address">{{ FOOTER_CONTENT.email }}</span>
              </template>
            </span>
            <span class="email-action-hint">
              {{ copied ? 'Ready to paste' : '(click to copy)' }}
            </span>
          </button>
        </div>

        <!-- Right Side: Social Links & Live Status Widget (Matching user screenshots) -->
        <div class="footer-aside">
          <!-- Social Links Column (Matching fluid hover & color fade) -->
          <nav class="footer-social-column" aria-label="Social Profiles">
            <a
              v-for="social in FOOTER_CONTENT.socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="footer-social-link"
            >
              <span class="social-roller">
                <span class="social-line line--default">{{ social.label }}</span>
                <span class="social-line line--hover" aria-hidden="true">{{ social.label }}</span>
              </span>
            </a>
          </nav>
        </div>
      </div>


      <!-- Signature Large Wordmark Logo (Like Faizur.com footer__wordmark) -->
      <div
        ref="wordmarkStageRef"
        class="footer-wordmark-stage"
        :class="{ 'is-revealed': isRevealed }"
        @click="handleReplayLogo"
        role="button"
        tabindex="0"
        aria-label="Midhun signature wordmark (click to replay animation)"
      >
        <svg
          class="footer-wordmark-svg"
          viewBox="0 0 1915 317"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Impact shockwaves matching reference GIF ground ripples -->
          <g class="wordmark-shockwaves" aria-hidden="true">
            <ellipse class="impact-ring ring--m" cx="260" cy="313" rx="140" ry="12" />
            <ellipse class="impact-ring ring--d" cx="800" cy="313" rx="120" ry="10" />
            <ellipse class="impact-ring ring--h" cx="1110" cy="313" rx="110" ry="10" />
          </g>
          <g class="wordmark-glyph glyph--m">
            <path
              d="M191.098 46.5661C199.976 52.9368 203.585 60.6829 207.598 67.8988L248.347 138.414C255.507 150.643 259.087 157.704 259.087 159.597H261.087C262.477 156.127 264.234 152.501 266.359 148.719L311.367 70.0034C318.97 56.1547 324.29 48.3355 332.701 44.0654C343.996 39.1751 355.945 39.2681 364.914 41.6117C376.953 46.9352 383.171 58.1432 389.13 69.1352L513.385 290.988C519.222 300.468 521.443 306.35 520.048 308.637C517.91 311.619 515.578 313.121 513.052 313.144L367.624 313.288C357.119 313.369 349.602 311.485 345.074 307.637C340.937 303.216 336.938 297.048 333.076 289.132L263.774 167.095C262.077 164.003 260.515 162.171 259.087 161.597C257.696 165.071 255.962 168.735 253.885 172.589L186.146 291.109C179.335 302.107 172.32 309.283 165.102 312.638C161.631 313.152 156.348 313.363 149.253 313.269L7.10374 313.144C3.90622 312.068 1.58057 310.566 0.126795 308.637C-0.384461 305.342 0.650382 301.282 3.23132 296.458L131.974 67.5708C137.928 57.0599 145.174 45.7138 157.103 41.5647C169.379 38.986 180.78 38.929 191.098 46.5661Z"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="currentColor"
            />
          </g>
          <g class="wordmark-glyph glyph--i">
            <path
              d="M508.254 178.468L579.878 178.245C587.77 178.305 593.521 180.968 599.185 186.63L652.968 285.584C661.426 299.371 664.845 307.727 663.225 310.65C661.576 312.301 659.379 313.054 656.634 312.911L548.314 313.025C545.984 312.173 544.263 311.048 543.151 309.649L488.117 208.634C485.735 204.377 485.068 199.043 486.116 192.631C488.403 187.041 492.072 182.707 497.122 179.629C500.744 178.706 504.454 178.319 508.254 178.468Z"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="currentColor"
            />
          </g>
          <g class="wordmark-glyph glyph--d">
            <path
              d="M835 40H923C937.667 40 945 47.3333 945 62V291C945 305.667 937.667 313 923 313H736C703.333 313 680 301.667 666 279C654 256.333 654 234 666 212C679.333 189.333 702.667 178 736 178H835V40ZM756 230C741.333 230 734 235.167 734 245.5C734 255.833 741.333 261 756 261H835V230H756Z"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="currentColor"
            />
          </g>
          <g class="wordmark-glyph glyph--h">
            <path
              d="M963 62C963 47.3333 970.333 40 985 40H1073V178H1138C1170.67 178 1194 191 1208 217L1254 297C1260 307.667 1257 313 1245 313H1164C1155.33 313 1148.67 308.667 1144 300L1113 246C1108.33 238 1101.33 234 1092 234H1073V291C1073 305.667 1065.67 313 1051 313H985C970.333 313 963 305.667 963 291V62Z"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="currentColor"
            />
          </g>
          <g class="wordmark-glyph glyph--u">
            <path
              d="M1248 178H1348V240C1348 252 1354.67 258 1368 258H1426V178H1536V291C1536 305.667 1528.67 313 1514 313H1338C1278 313 1248 283 1248 223V178Z"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="currentColor"
            />
          </g>
          <g class="wordmark-glyph glyph--n">
            <path
              d="M1553 178H1728C1760.67 178 1784 191 1798 217L1844 297C1850 307.667 1847 313 1835 313H1754C1745.33 313 1738.67 308.667 1734 300L1703 246C1698.33 238 1691.33 234 1682 234H1663V291C1663 305.667 1655.67 313 1641 313H1575C1560.33 313 1553 305.667 1553 291V178Z"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="currentColor"
            />
          </g>
          <g class="wordmark-glyph glyph--dot">
            <circle cx="1885" cy="287" r="30" fill="#B84A27" />
            <g class="dot-burst" aria-hidden="true">
              <circle cx="1885" cy="287" r="6" class="burst-particle particle-1" fill="#B84A27" />
              <circle cx="1885" cy="287" r="5" class="burst-particle particle-2" fill="#B84A27" />
              <circle cx="1885" cy="287" r="6" class="burst-particle particle-3" fill="#B84A27" />
              <circle cx="1885" cy="287" r="4" class="burst-particle particle-4" fill="#B84A27" />
              <circle cx="1885" cy="287" r="5" class="burst-particle particle-5" fill="#B84A27" />
            </g>
          </g>
        </svg>
      </div>

      <!-- Bottom baseline metadata -->
      <div class="footer-baseline">
        <div class="baseline-left">
          <span>{{ FOOTER_CONTENT.copyright }}</span>
          <span class="baseline-divider">/</span>
          <span>Alappuzha, Kerala, India</span>
        </div>
        <div class="baseline-right">
          <span class="designer-role">{{ FOOTER_CONTENT.roleLabel }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue';
import type { PortfolioMode } from '@/types/portfolio';
import { FOOTER_CONTENT } from '@/data/portfolioData';
import { useClipboard } from '@/composables/useClipboard';

const props = withDefaults(
  defineProps<{
    mode: PortfolioMode;
    isLoaded?: boolean;
  }>(),
  {
    isLoaded: false,
  }
);

const { copied, copy } = useClipboard();

const handleCopyEmail = () => {
  copy(FOOTER_CONTENT.email);
};

// Footer signature wordmark scroll-reveal & kinetic physics animation
const wordmarkStageRef = ref<HTMLElement | null>(null);
const isRevealed = ref(false);
let wordmarkObserver: IntersectionObserver | null = null;
let scrollListener: (() => void) | null = null;
let safetyTimer: ReturnType<typeof setTimeout> | null = null;

// Purge any stale session lock from previous versions
try {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('midhy_footer_anim_shown');
  }
} catch {
  // Ignore
}

const handleReplayLogo = () => {
  isRevealed.value = false;
  nextTick(() => {
    if (wordmarkStageRef.value) {
      void wordmarkStageRef.value.offsetWidth;
    }
    isRevealed.value = true;
  });
};

const triggerReveal = () => {
  if (isRevealed.value) return;
  isRevealed.value = true;

  if (wordmarkObserver) {
    wordmarkObserver.disconnect();
    wordmarkObserver = null;
  }
  if (scrollListener && typeof window !== 'undefined') {
    window.removeEventListener('scroll', scrollListener);
    scrollListener = null;
  }
  if (safetyTimer) {
    clearTimeout(safetyTimer);
    safetyTimer = null;
  }
};

const onScroll = () => {
  if (isRevealed.value || !wordmarkStageRef.value) return;
  const rect = wordmarkStageRef.value.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    triggerReveal();
  }
};

const initRevealTrigger = () => {
  if (isRevealed.value || !wordmarkStageRef.value) return;

  // Respect user preference for reduced motion
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    isRevealed.value = true;
    return;
  }

  // Setup intersection observer for scroll reveal
  if (typeof IntersectionObserver !== 'undefined' && wordmarkStageRef.value) {
    if (wordmarkObserver) {
      wordmarkObserver.disconnect();
    }
    wordmarkObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          triggerReveal();
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px 50px 0px',
      }
    );
    wordmarkObserver.observe(wordmarkStageRef.value);
  }

  // Also bind passive scroll listener as bulletproof dual trigger
  if (typeof window !== 'undefined') {
    if (!scrollListener) {
      scrollListener = onScroll;
      window.addEventListener('scroll', onScroll, { passive: true });
    }
    // Check if footer is already within view
    onScroll();
  }
};

// Start observing when page preloader signals loaded
watch(
  () => props.isLoaded,
  (loaded) => {
    if (loaded) {
      nextTick(() => {
        initRevealTrigger();
      });
    }
  },
  { immediate: true }
);

onMounted(() => {
  // If page was already loaded or loader is absent, initialize right away
  if (props.isLoaded || (typeof document !== 'undefined' && !document.querySelector('.page-loader'))) {
    nextTick(() => {
      initRevealTrigger();
    });
  } else {
    // Safety fallback: if loaded event is missed for any reason, initialize after 2.4s
    safetyTimer = setTimeout(() => {
      initRevealTrigger();
    }, 2400);
  }
});

onUnmounted(() => {
  if (wordmarkObserver) {
    wordmarkObserver.disconnect();
    wordmarkObserver = null;
  }
  if (scrollListener && typeof window !== 'undefined') {
    window.removeEventListener('scroll', scrollListener);
    scrollListener = null;
  }
  if (safetyTimer) {
    clearTimeout(safetyTimer);
    safetyTimer = null;
  }
});
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.site-footer {
  background-color: var(--color-ink);
  color: var(--color-chalk);
  padding: clamp(5rem, 8vw, 7.5rem) 0 clamp(3.5rem, 5vw, 4.5rem);
  position: relative;
  border-top: 1px solid var(--color-border-dark);
  overflow: hidden;

  .footer-container {
    display: flex;
    flex-direction: column;
    min-height: 480px;
    justify-content: space-between;
  }

  .footer-top-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: clamp(2.5rem, 5vw, 5rem);
    margin-bottom: clamp(3rem, 5vw, 4.5rem);
  }

  .footer-content {
    flex: 1 1 auto;
    max-width: 760px;

    .footer-overline {
      color: var(--color-laterite);
      margin-bottom: 1.25rem;
    }

    .footer-headline {
      font-size: clamp(2.25rem, 5vw, 3.75rem);
      font-weight: 400;
      line-height: 1.15;
      letter-spacing: -0.02em;
      color: var(--color-chalk);
      margin: 0 0 1.25rem;
    }

    .footer-subtext {
      font-size: clamp(1rem, 1.8vw, 1.25rem);
      line-height: 1.6;
      color: #A8A29E;
      margin: 0 0 2.25rem;
      max-width: 580px;
    }

    .email-action-box {
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      gap: clamp(1rem, 2vw, 1.75rem);
      background-color: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: var(--radius-full);
      padding: 0.875rem clamp(1.25rem, 2vw, 1.75rem);
      color: var(--color-chalk);
      font-size: clamp(0.875rem, 1.1vw, 0.9375rem);
      cursor: pointer;
      text-align: left;
      white-space: nowrap;
      max-width: 100%;
      transition: all $transition-fast;

      .email-prompt {
        font-weight: 400;
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        white-space: nowrap;

        .prompt-label {
          font-family: var(--font-family-sans);
          color: var(--color-chalk);
        }

        .prompt-address {
          font-family: var(--font-family-mono);
          color: #FFFFFF;
          font-weight: 500;
        }

        .copied-check {
          font-family: var(--font-family-sans);
          color: #F8B49E;
          font-weight: 500;
        }
      }

      .email-action-hint {
        color: #8A827B;
        font-size: 0.8125rem;
        font-family: var(--font-family-mono);
        white-space: nowrap;
        flex-shrink: 0;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.35);
        transform: translateY(-1px);
      }

      &.copied {
        background-color: rgba(184, 74, 39, 0.18);
        border-color: var(--color-laterite);
        color: #F8B49E;

        .email-action-hint {
          color: #F8B49E;
        }
      }

      &:focus-visible {
        outline: 2px solid var(--color-laterite);
        outline-offset: 3px;
      }
    }
  }

  // Right Side: Social Profiles & Live Weather/Mood Status Widget
  .footer-aside {
    flex: 0 0 auto;
    display: flex;
    gap: clamp(2.5rem, 4.5vw, 4.5rem);
    align-items: flex-start;
    padding-top: 0.5rem;

    .footer-social-column {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      min-width: 140px;

      // Sibling color fade just like the toggle menu
      &:has(.footer-social-link:hover) .footer-social-link:not(:hover) {
        opacity: 0.35;
      }

      .footer-social-link {
        font-family: var(--font-family-sans);
        font-size: clamp(1.35rem, 1.8vw, 1.75rem);
        font-weight: 400;
        line-height: 1.35;
        letter-spacing: -0.015em;
        color: var(--color-chalk);
        text-decoration: none;
        display: inline-flex;
        transition: color $transition-fast, opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1);

        .social-roller {
          display: inline-flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          height: 1.35em;
          vertical-align: top;

          .social-line {
            display: block;
            line-height: 1.35;
            white-space: nowrap;
            transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
            will-change: transform;

            &.line--default {
              transform: translateY(0%);
            }

            &.line--hover {
              position: absolute;
              top: 100%;
              left: 0;
              width: 100%;
              color: #FFFFFF;
              transform: translateY(0%);
            }
          }
        }

        &:hover {
          color: #FFFFFF;

          .social-line.line--default {
            transform: translateY(-100%);
          }

          .social-line.line--hover {
            transform: translateY(-100%);
          }
        }

        &:focus-visible {
          outline: 2px solid var(--color-laterite);
          outline-offset: 4px;
        }
      }
    }
  }

  // Large Signature Wordmark Logo with Scroll-Reveal Kinetic Physics
  .footer-wordmark-stage {
    width: 100%;
    margin: clamp(2rem, 4vw, 3.5rem) 0 clamp(2.5rem, 5vw, 4rem);
    display: flex;
    justify-content: center;
    color: rgba(247, 244, 238, 0.08);
    user-select: none;
    pointer-events: auto;
    cursor: pointer;
    overflow: visible;
    transition: color $transition-base;

    &:hover {
      color: rgba(247, 244, 238, 0.16);
    }

    &:focus-visible {
      outline: 2px solid var(--color-laterite);
      outline-offset: 8px;
      border-radius: var(--radius-md);
    }

    .footer-wordmark-svg {
      width: 100%;
      max-width: 1140px;
      height: auto;
      max-height: 220px;
      display: block;
      overflow: visible;
    }

    // Default resting state before scroll trigger
    .wordmark-glyph {
      transform-box: fill-box;
      transform-origin: 50% 100%;
      opacity: 0;
      will-change: transform, opacity;
    }

    .glyph--dot {
      transform-origin: 50% 100%;
    }

    // Impact shockwaves matching reference GIF ground ripples
    .impact-ring {
      opacity: 0;
      fill: none;
      stroke: rgba(247, 244, 238, 0.22);
      stroke-width: 3;
      transform-box: fill-box;
      transform-origin: center;
      pointer-events: none;
    }

    .dot-burst {
      pointer-events: none;
    }

    .burst-particle {
      opacity: 0;
      transform-box: fill-box;
      transform-origin: center;
      will-change: transform, opacity;
    }

    // Triggered on scroll reveal
    &.is-revealed {
      /* M: explosive leap from below, high stretch, hard floor squash */
      .glyph--m {
        animation: anim-leap-rocket 0.68s cubic-bezier(0.12, 0.8, 0.2, 1) 0.04s forwards;
      }
      .ring--m {
        animation: anim-shockwave 0.38s ease-out 0.42s forwards;
      }

      /* i: quick spring leap right after M */
      .glyph--i {
        animation: anim-leap-rocket 0.66s cubic-bezier(0.12, 0.8, 0.2, 1) 0.12s forwards;
      }

      /* d: DROPS FROM CEILING like an anvil, slams floor, rebounds high */
      .glyph--d {
        animation: anim-plunge-sky 0.72s cubic-bezier(0.18, 0.85, 0.25, 1) 0.24s forwards;
      }
      .ring--d {
        animation: anim-shockwave 0.40s ease-out 0.58s forwards;
      }

      /* h: energetic jump from below */
      .glyph--h {
        animation: anim-leap-rocket 0.68s cubic-bezier(0.12, 0.8, 0.2, 1) 0.42s forwards;
      }
      .ring--h {
        animation: anim-shockwave 0.38s ease-out 0.80s forwards;
      }

      /* u: elastic leap from below */
      .glyph--u {
        animation: anim-leap-rocket 0.68s cubic-bezier(0.12, 0.8, 0.2, 1) 0.56s forwards;
      }

      /* n: quick leap completing word */
      .glyph--n {
        animation: anim-leap-rocket 0.66s cubic-bezier(0.12, 0.8, 0.2, 1) 0.68s forwards;
      }

      /* . dot: drops from above, heavy squash, spark explosion */
      .glyph--dot {
        animation: anim-dot-slam 0.64s cubic-bezier(0.15, 0.85, 0.25, 1) 0.86s forwards;
      }

      /* 5 radial sparks on dot impact at ~1.10s */
      .particle-1 {
        --p-dest: translate(38px, -36px);
        animation: anim-particle 0.44s ease-out 1.10s forwards;
      }
      .particle-2 {
        --p-dest: translate(48px, -8px);
        animation: anim-particle 0.44s ease-out 1.10s forwards;
      }
      .particle-3 {
        --p-dest: translate(36px, 28px);
        animation: anim-particle 0.44s ease-out 1.10s forwards;
      }
      .particle-4 {
        --p-dest: translate(10px, -42px);
        animation: anim-particle 0.44s ease-out 1.10s forwards;
      }
      .particle-5 {
        --p-dest: translate(52px, 14px);
        animation: anim-particle 0.44s ease-out 1.10s forwards;
      }
    }
  }

  @keyframes anim-leap-rocket {
    0% {
      opacity: 0;
      transform: translateY(180px) scale(1.2, 0.3) rotate(-3deg);
    }
    22% {
      opacity: 1;
      transform: translateY(-40px) scale(0.72, 1.65) rotate(-2deg);
    }
    45% {
      transform: translateY(-130px) scale(0.92, 1.15) rotate(1.5deg);
    }
    68% {
      transform: translateY(18px) scale(1.42, 0.58) rotate(1.5deg);
    }
    82% {
      transform: translateY(-22px) scale(0.92, 1.14) rotate(-0.5deg);
    }
    92% {
      transform: translateY(4px) scale(1.05, 0.95) rotate(0deg);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1, 1) rotate(0deg);
    }
  }

  @keyframes anim-plunge-sky {
    0% {
      opacity: 0;
      transform: translateY(-340px) scale(0.75, 1.7) rotate(3deg);
    }
    30% {
      opacity: 1;
      transform: translateY(-60px) scale(0.78, 1.5) rotate(2deg);
    }
    52% {
      transform: translateY(22px) scale(1.52, 0.52) rotate(-2deg);
    }
    70% {
      transform: translateY(-45px) scale(0.88, 1.22) rotate(1deg);
    }
    85% {
      transform: translateY(6px) scale(1.08, 0.92) rotate(-0.5deg);
    }
    94% {
      transform: translateY(-5px) scale(0.98, 1.02) rotate(0deg);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1, 1) rotate(0deg);
    }
  }

  @keyframes anim-dot-slam {
    0% {
      opacity: 0;
      transform: translateY(-260px) scale(0.35, 1.8);
    }
    32% {
      opacity: 1;
      transform: translateY(-20px) scale(0.7, 1.5);
    }
    48% {
      transform: translateY(14px) scale(1.55, 0.48);
    }
    66% {
      transform: translateY(-32px) scale(0.82, 1.3);
    }
    84% {
      transform: translateY(5px) scale(1.15, 0.88);
    }
    94% {
      transform: translateY(-4px) scale(0.97, 1.03);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1, 1);
    }
  }

  @keyframes anim-shockwave {
    0% {
      opacity: 0;
      transform: scale(0.2, 0.1);
    }
    25% {
      opacity: 0.65;
      transform: scale(0.8, 0.35);
    }
    100% {
      opacity: 0;
      transform: scale(1.8, 0.6);
    }
  }

  @keyframes anim-particle {
    0% {
      opacity: 0;
      transform: translate(0, 0) scale(0.2);
    }
    15% {
      opacity: 1;
      transform: translate(0, 0) scale(1);
    }
    70% {
      opacity: 0.8;
      transform: var(--p-dest) scale(0.85);
    }
    100% {
      opacity: 0;
      transform: var(--p-dest) scale(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .wordmark-glyph,
    .impact-ring,
    .burst-particle {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
    }
    .impact-ring,
    .dot-burst {
      display: none !important;
    }
  }

  .footer-baseline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.8125rem;
    color: #8A827B;

    .baseline-left {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      .baseline-divider {
        color: #57534E;
      }
    }

    .baseline-right {
      .designer-role {
        letter-spacing: 0.04em;
        text-transform: uppercase;
        font-size: 0.75rem;
        font-weight: 500;
      }
    }
  }
}

@media (max-width: 980px) {
  .site-footer {
    .footer-top-row {
      flex-direction: column;
      gap: 3.5rem;
    }

    .footer-aside {
      width: 100%;
      justify-content: flex-start;
      gap: clamp(3rem, 6vw, 4.5rem);
    }
  }
}

@media (max-width: 768px) {
  .site-footer {
    .email-action-box {
      .prompt-label {
        display: none; // Keep button compact and single-line on smaller viewports
      }
    }
  }
}

@media (max-width: 540px) {
  .site-footer {
    .footer-aside {
      flex-direction: column;
      gap: 2.5rem;
    }

    .email-action-box {
      width: 100%;
      border-radius: var(--radius-lg);
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      white-space: normal;

      .email-prompt {
        white-space: normal;
        word-break: break-all;
      }
    }

    .footer-wordmark-stage {
      margin: 1.5rem 0 2rem;

      .footer-wordmark-svg {
        max-height: 120px;
      }
    }

    .footer-baseline {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }
  }
}
</style>
