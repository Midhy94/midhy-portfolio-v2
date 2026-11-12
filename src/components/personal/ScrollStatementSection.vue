<template>
  <section
    id="statement"
    ref="sectionRef"
    class="scroll-statement-section"
    aria-label="Design statement"
  >
    <div class="statement-sticky-viewport">
      <div class="statement-container container-editorial">
        <h2 class="statement-headline font-sans">
          <span
            v-for="(word, index) in words"
            :key="index"
            class="word-wrapper"
          >
            <span
              class="word-token"
              :style="getWordStyle(index)"
            >{{ word }}</span>
            <span class="word-spacer" aria-hidden="true">&nbsp;</span>
          </span>
        </h2>

        <!-- Refined Secondary Subtitle / Tagline -->
        <p
          class="statement-tagline font-sans"
          :style="taglineStyle"
        >
          {{ taglineText }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PERSONAL_CONTENT } from '@/data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const props = withDefaults(
  defineProps<{
    text?: string;
    tagline?: string;
  }>(),
  {
    text: '',
    tagline: '',
  }
);

const statementText = computed(() => {
  return (
    props.text ||
    PERSONAL_CONTENT.statement?.text ||
    'We believe the strongest digital brands are built through strategy, not just aesthetics. Every interface is designed to capture attention, inspire action, and create lasting business growth.'
  );
});

const taglineText = computed(() => {
  return (
    props.tagline ||
    PERSONAL_CONTENT.statement?.tagline ||
    'Performance-driven design & strategy, from vision to execution. Built for ambitious digital brands.'
  );
});

const words = computed(() => {
  return statementText.value.trim().split(/\s+/).filter(Boolean);
});

const sectionRef = ref<HTMLElement | null>(null);

// Reactive progress state (0.0 -> 1.0)
const scrollProgress = ref(0);
let rafId: number | null = null;
let themeTrigger: ScrollTrigger | null = null;
let progressTrigger: ScrollTrigger | null = null;
let isUnmounted = false;

// Compute word style based on scroll progress (Original illuminated fade animation from previous version)
const getWordStyle = (index: number) => {
  const total = words.value.length;
  if (!total) return {};

  const p = scrollProgress.value;
  // Reserve the first 82% of scroll distance for the headline words
  const headlineMax = 0.82;
  const wordStep = headlineMax / total;
  // Smooth overlap between neighboring words so the illuminate flows naturally
  const windowSize = wordStep * 1.8;
  const start = index * wordStep;
  const end = Math.min(headlineMax, start + windowSize);

  let wordProgress = 0;
  if (p >= end) {
    wordProgress = 1;
  } else if (p <= start) {
    wordProgress = 0;
  } else {
    wordProgress = (p - start) / (end - start);
  }

  // Exact linear interpolation from previous version:
  // Base muted state: opacity 0.22, translateY 2.5px (other texts shouldn't be visible)
  // Fully active state: opacity 1.0, translateY 0px, solid white text
  const opacity = (0.22 + 0.78 * wordProgress).toFixed(3);
  const translateY = ((1 - wordProgress) * 2.5).toFixed(1);

  return {
    opacity,
    transform: `translateY(${translateY}px)`,
    color: wordProgress > 0.55 ? '#FFFFFF' : 'inherit',
  };
};

const taglineStyle = computed(() => {
  const p = scrollProgress.value;
  // Tagline gently emerges as the headline concludes (0.76 -> 0.96)
  const taglineProgress = Math.max(0, Math.min(1, (p - 0.76) / 0.20));
  const opacity = taglineProgress.toFixed(3);
  const translateY = ((1 - taglineProgress) * 6).toFixed(1);

  return {
    opacity,
    transform: `translateY(${translateY}px)`,
    color: 'rgba(255, 255, 255, 0.78)',
  };
});

// Update progress directly from pinned sticky scroll position
const updateProgressFromViewport = () => {
  if (!sectionRef.value || isUnmounted) return;

  const rect = sectionRef.value.getBoundingClientRect();
  const windowHeight = window.innerHeight || 800;
  const totalScroll = rect.height - windowHeight;

  if (totalScroll <= 0) {
    scrollProgress.value = 1;
    return;
  }

  // When rect.top is > 0: section is scrolling up towards sticky position (approaching)
  // When rect.top <= 0 and >= -totalScroll: sticky pinning is active!
  // When rect.top < -totalScroll: scrolled past
  const currentScroll = -rect.top;
  const rawProgress = currentScroll / totalScroll;
  const clamped = Math.max(0, Math.min(1, rawProgress));

  scrollProgress.value = clamped;
};

const handleScroll = () => {
  if (rafId !== null) return;
  rafId = requestAnimationFrame(() => {
    updateProgressFromViewport();
    rafId = null;
  });
};

onMounted(() => {
  nextTick(() => {
    // Respect reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      scrollProgress.value = 1;
      return;
    }

    // Atmospheric subtle dark inversion when entering and leaving statement section
    if (sectionRef.value) {
      themeTrigger = ScrollTrigger.create({
        trigger: sectionRef.value,
        start: 'top 65%',
        end: 'bottom top',
        onEnter: () => document.body.classList.add('theme-dark-statement'),
        onLeave: () => document.body.classList.remove('theme-dark-statement'),
        onEnterBack: () => document.body.classList.add('theme-dark-statement'),
        onLeaveBack: () => document.body.classList.remove('theme-dark-statement'),
      });

      // Synchronous scroll progress trigger pinned to section scroll duration
      progressTrigger = ScrollTrigger.create({
        trigger: sectionRef.value,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          scrollProgress.value = self.progress;
        },
      });
    }

    // Initial measurement
    updateProgressFromViewport();

    // Attach passive scroll and resize listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Recheck after layout / preloader settling
    setTimeout(() => {
      if (!isUnmounted) {
        updateProgressFromViewport();
        themeTrigger?.refresh();
        progressTrigger?.refresh();
      }
    }, 1000);
  });
});

onUnmounted(() => {
  isUnmounted = true;
  if (themeTrigger) {
    themeTrigger.kill();
    themeTrigger = null;
  }
  if (progressTrigger) {
    progressTrigger.kill();
    progressTrigger = null;
  }
  if (typeof document !== 'undefined') {
    document.body.classList.remove('theme-dark-statement');
  }
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleScroll);
  }
});
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.scroll-statement-section {
  --statement-bg: var(--color-paper);
  --statement-text-active: var(--color-ink);
  --statement-text-muted: var(--color-muted-light);
  --statement-tagline: var(--color-muted);

  position: relative;
  width: 100%;
  height: 220vh;
  background-color: var(--statement-bg);
  color: var(--statement-text-muted);
  transition: background-color 0.85s cubic-bezier(0.16, 1, 0.3, 1), color 0.85s cubic-bezier(0.16, 1, 0.3, 1);

  .statement-sticky-viewport {
    position: sticky;
    top: 0;
    height: 100vh;
    height: 100dvh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 2rem 0;
  }

  .statement-container {
    max-width: 1040px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 clamp(1.25rem, 4vw, 2.5rem);
  }

  .statement-headline {
    font-family: var(--font-family-sans);
    font-size: clamp(2.1rem, 4.4vw, 3.6rem);
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -0.028em;
    color: var(--statement-text-muted);
    margin: 0 auto clamp(2rem, 4vw, 3.25rem);
    text-align: center;
    text-wrap: balance;
    word-break: normal;
    user-select: text;
  }

  .word-wrapper {
    display: inline-flex;
    align-items: baseline;
    white-space: nowrap;
  }

  .word-token {
    display: inline-block;
    color: inherit;
    will-change: opacity, transform, color;
    transition: opacity 0.1s ease-out, transform 0.1s ease-out, color 0.14s ease-out;
  }

  .word-spacer {
    display: inline;
    user-select: none;
  }

  .statement-tagline {
    font-family: var(--font-family-sans);
    font-size: clamp(0.9375rem, 1.4vw, 1.15rem);
    font-weight: 400;
    line-height: 1.6;
    color: var(--statement-tagline);
    max-width: 620px;
    margin: 0 auto;
    text-align: center;
    text-wrap: balance;
    will-change: opacity, transform;
    transition: opacity 0.18s ease-out, transform 0.18s ease-out;
  }
}

:global(body.theme-dark-statement) .scroll-statement-section {
  --statement-bg: #05070B;
  --statement-text-active: #FFFFFF;
  --statement-text-muted: rgba(255, 255, 255, 0.22);
  --statement-tagline: rgba(255, 255, 255, 0.78);
}

// Tablet adjustments
@media (max-width: 1024px) {
  .scroll-statement-section {
    height: 200vh;

    .statement-headline {
      font-size: clamp(1.85rem, 4.8vw, 2.75rem);
      line-height: 1.28;
    }
  }
}

// Mobile adaptation
@media (max-width: 768px) {
  .scroll-statement-section {
    height: 180vh;

    .statement-headline {
      font-size: clamp(1.5rem, 6.4vw, 2rem);
      line-height: 1.34;
      letter-spacing: -0.02em;
      margin-bottom: 1.75rem;
    }

    .statement-tagline {
      font-size: 0.9375rem;
      line-height: 1.55;
    }
  }
}

// Reduced motion override
@media (prefers-reduced-motion: reduce) {
  .scroll-statement-section {
    height: auto !important;
    padding: clamp(5rem, 10vw, 8rem) 0;

    .statement-sticky-viewport {
      position: relative !important;
      top: auto !important;
      height: auto !important;
      overflow: visible !important;
      padding: 0 !important;
    }

    .word-token {
      opacity: 1 !important;
      transform: none !important;
      color: var(--color-ink) !important;
      transition: none !important;
    }

    .statement-tagline {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }
  }
}
</style>
