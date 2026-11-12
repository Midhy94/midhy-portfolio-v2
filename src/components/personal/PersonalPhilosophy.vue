<template>
  <section
    id="philosophy"
    ref="sectionRef"
    class="personal-philosophy"
    :class="{ 'is-active': activeIndex > -1 }"
    aria-labelledby="philosophy-heading"
    @pointermove="onPointerMove"
    @pointerleave="onGridLeave"
  >
    <div class="philosophy-container container-editorial">
      <!-- Left Column: Sticky Editorial Sidebar -->
      <div class="philosophy-sidebar">
        <div class="sidebar-sticky">
          <h2 id="philosophy-heading" class="sidebar-headline font-serif">
            How I think<br>
            <em class="headline-accent">&amp; build.</em>
          </h2>
        </div>
      </div>

      <!-- Right Column: Lead Statement & 6 Principles Grid -->
      <div class="philosophy-content">
        <p class="philosophy-lead font-serif">
          {{ philosophyData.lead }}
        </p>

        <div class="principles-grid" @pointerleave="onGridLeave">
          <div
            v-for="(item, idx) in principles"
            :key="idx"
            :ref="el => setCardRef(el as HTMLElement | null, idx)"
            class="principle-card"
            :class="{ 'is-current': activeIndex === idx }"
            tabindex="0"
            role="group"
            :aria-label="`0${idx + 1} ${item.title}`"
            @pointerenter="onCardEnter(idx, $event)"
            @focus="onCardFocus(idx, $event)"
            @blur="onCardBlur"
          >
            <span class="principle-num font-mono">0{{ idx + 1 }}</span>
            <div class="principle-body">
              <h3 class="principle-title">{{ item.title }}</h3>
              <p class="principle-desc">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Preview: Refined thumbnail floating in the gutter so text is 100% visible -->
    <div
      ref="previewRef"
      class="irc-preview"
      aria-hidden="true"
    >
      <div class="irc-frame">
        <img
          v-for="(item, idx) in principles"
          :key="idx"
          :src="item.image"
          :alt="item.alt"
          width="190"
          height="240"
          loading="lazy"
          decoding="async"
          class="irc-img"
          :class="{ 'is-current': displayedIndex === idx }"
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { PERSONAL_CONTENT } from '@/data/portfolioData';

const philosophyData = PERSONAL_CONTENT.philosophy;

// Curated high-relevance editorial images specifically mapped to each principle concept
const PRINCIPLE_IMAGES = [
  {
    // 01 Listen first: User research, wireframing sketch on paper with "USER GOALS"
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=480&h=600&q=80',
    alt: 'UX designer sketching wireframes and user goals in research notebook'
  },
  {
    // 02 Stay curious: Glowing idea bulb held in hand, questioning assumptions and probing edge cases
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=480&h=600&q=80',
    alt: 'Glowing light bulb held in hand representing deep curiosity and questioning assumptions'
  },
  {
    // 03 Ship & learn: High-velocity rocket launch into orbit, shipping fast to real users
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=480&h=600&q=80',
    alt: 'Spacecraft rocket launch symbolizing speed, momentum, and shipping to real users'
  },
  {
    // 04 Systemize early: Figma Design System with Component Library, tokens, and UI guidelines
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=480&h=600&q=80',
    alt: 'Modular design system layout with UI component library and color tokens'
  },
  {
    // 05 Bridge the gap: VS Code frontend code window on MacBook Pro, connecting design with code
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=480&h=600&q=80',
    alt: 'Clean syntax-highlighted frontend code in editor representing design and engineering convergence'
  },
  {
    // 06 Keep it simple: Minimalist studio workspace with pure negative space and ruthless editing
    image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=480&h=600&q=80',
    alt: 'Minimalist clean white studio workspace with serene negative space'
  }
];

// Associate each principle with its verified relevant image
const principles = computed(() => {
  return philosophyData.principles.map((item, idx) => ({
    ...item,
    image: PRINCIPLE_IMAGES[idx % PRINCIPLE_IMAGES.length].image,
    alt: PRINCIPLE_IMAGES[idx % PRINCIPLE_IMAGES.length].alt
  }));
});

const sectionRef = ref<HTMLElement | null>(null);
const previewRef = ref<HTMLElement | null>(null);
const cardElements = ref<(HTMLElement | null)[]>([]);

const setCardRef = (el: HTMLElement | null, idx: number) => {
  cardElements.value[idx] = el;
};

const activeIndex = ref<number>(-1);
const displayedIndex = ref<number>(0);

const EASE = 0.16;
const TILT = 8;
const pos = { x: 0, y: 0 };
const target = { x: 0, y: 0 };
const last = { x: 0, y: 0 };
let rotation = 0;
let rafId: number | null = null;
let canHoverQuery: MediaQueryList | null = null;
let reduceMotionQuery: MediaQueryList | null = null;

const place = () => {
  if (!previewRef.value) return;
  const w = previewRef.value.offsetWidth || 190;
  const h = previewRef.value.offsetHeight || 240;
  previewRef.value.style.transform = `translate3d(${pos.x - w / 2}px, ${pos.y - h / 2}px, 0) rotate(${rotation}deg)`;
};

const tick = () => {
  const isReduced = reduceMotionQuery?.matches ?? false;
  const ease = isReduced ? 1 : EASE;
  const dx = target.x - pos.x;
  const dy = target.y - pos.y;
  pos.x += dx * ease;
  pos.y += dy * ease;
  rotation = isReduced ? 0 : Math.max(-TILT, Math.min(TILT, dx * 0.08));
  place();
  if (Math.abs(dx) > 0.3 || Math.abs(dy) > 0.3) {
    rafId = requestAnimationFrame(tick);
  } else {
    rafId = null;
  }
};

const run = () => {
  if (!rafId) {
    rafId = requestAnimationFrame(tick);
  }
};

/**
 * Intelligent UX positioning:
 * Places the floating preview in the central gutter adjacent to the active card,
 * ensuring the card's number, title, and description remain 100% visible and unblocked.
 */
const setTarget = (clientX: number, clientY: number, jump: boolean) => {
  if (!sectionRef.value) return;
  const rect = sectionRef.value.getBoundingClientRect();
  const relY = clientY - rect.top;

  const w = previewRef.value?.offsetWidth || 190;
  const h = previewRef.value?.offsetHeight || 240;

  let activeCardRect: DOMRect | null = null;
  if (activeIndex.value >= 0 && cardElements.value[activeIndex.value]) {
    activeCardRect = cardElements.value[activeIndex.value]!.getBoundingClientRect();
  }

  let desiredX: number;

  if (activeCardRect) {
    const cardRelLeft = activeCardRect.left - rect.left;
    const cardRelRight = activeCardRect.right - rect.left;
    const isRightCol = activeIndex.value % 2 === 1;

    if (isRightCol) {
      // Hovering right column: float preview to the left of the card in the gutter
      const cursorOffset = (clientX - activeCardRect.left) * 0.1;
      desiredX = cardRelLeft - w / 2 - 24 + cursorOffset;
    } else {
      // Hovering left column: float preview to the right of the card in the gutter
      const cursorOffset = (clientX - activeCardRect.left) * 0.1;
      desiredX = cardRelRight + w / 2 + 24 + cursorOffset;
    }
  } else {
    const relX = clientX - rect.left;
    desiredX = relX > rect.width * 0.5 ? relX - w / 2 - 32 : relX + w / 2 + 32;
  }

  // Constrain within section boundaries
  const minX = w / 2 + 16;
  const maxX = rect.width - w / 2 - 16;
  target.x = Math.max(minX, Math.min(maxX, desiredX));

  const minY = h / 2 + 16;
  const maxY = rect.height - h / 2 - 16;
  target.y = Math.max(minY, Math.min(maxY, relY));

  if (jump) {
    pos.x = target.x;
    pos.y = target.y;
  }
  run();
};

const setActive = (index: number) => {
  if (index === activeIndex.value) return;
  activeIndex.value = index;
  if (index > -1) {
    displayedIndex.value = index;
  }
};

const onPointerMove = (e: PointerEvent) => {
  if (e.pointerType !== 'mouse' || (canHoverQuery && !canHoverQuery.matches)) return;
  last.x = e.clientX;
  last.y = e.clientY;
  if (activeIndex.value > -1) {
    setTarget(e.clientX, e.clientY, false);
  }
};

const onCardEnter = (idx: number, e: PointerEvent) => {
  if (e.pointerType !== 'mouse' || (canHoverQuery && !canHoverQuery.matches)) return;
  const wasInactive = activeIndex.value === -1;
  setActive(idx);
  setTarget(e.clientX, e.clientY, wasInactive);
};

const onGridLeave = () => {
  setActive(-1);
};

const placeBeside = (el: HTMLElement, jump: boolean) => {
  const r = el.getBoundingClientRect();
  const clientX = r.left + r.width / 2;
  const clientY = r.top + r.height / 2;
  setTarget(clientX, clientY, jump);
};

const onCardFocus = (idx: number, e: FocusEvent) => {
  if (canHoverQuery && !canHoverQuery.matches) return;
  const wasInactive = activeIndex.value === -1;
  setActive(idx);
  const targetEl = e.currentTarget as HTMLElement | null;
  if (targetEl) {
    placeBeside(targetEl, wasInactive);
  }
};

const onCardBlur = () => {
  setActive(-1);
};

const onScroll = () => {
  if (activeIndex.value > -1 && sectionRef.value?.matches(':hover')) {
    setTarget(last.x, last.y, false);
  }
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    canHoverQuery = window.matchMedia('(hover: hover)');
    reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    window.addEventListener('scroll', onScroll, { passive: true });

    // Preload verified preview images for seamless, instant cross-fades
    PRINCIPLE_IMAGES.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', onScroll);
  }
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
});
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.personal-philosophy {
  position: relative;
  overflow: hidden;
  padding: clamp(4.5rem, 7vw, 7rem) 0;
  border-top: 1px solid var(--color-border);
  background-color: var(--color-paper);
  color: var(--color-ink);
  z-index: 2;
  --irc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --irc-dim: 0.35;

  .philosophy-container {
    display: grid;
    grid-template-columns: clamp(280px, 28vw, 340px) 1fr;
    gap: clamp(2.5rem, 5vw, 5rem);
    align-items: flex-start;
  }

  .philosophy-sidebar {
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

  .philosophy-content {
    .philosophy-lead {
      font-size: clamp(1.625rem, 2.6vw, 2.25rem);
      font-weight: 400;
      line-height: 1.35;
      letter-spacing: -0.02em;
      color: var(--color-ink);
      margin: 0 0 3.5rem;
      max-width: 820px;
    }

    .principles-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2.5rem 3rem;

      .principle-card {
        display: flex;
        align-items: flex-start;
        gap: 1.25rem;
        padding-top: 1.5rem;
        border-top: 1px solid var(--color-border);
        cursor: pointer;
        transition: opacity 0.3s ease;
        outline: none;

        &:focus-visible {
          outline: 2px solid var(--color-laterite, #E14B27);
          outline-offset: 4px;
          border-radius: 4px;
        }

        .principle-num {
          font-size: 1.125rem;
          font-weight: 500;
          color: #A8A29E;
          line-height: 1.3;
          flex-shrink: 0;
          transition: color 0.3s ease;
        }

        .principle-body {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          .principle-title {
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--color-ink);
            margin: 0;
            line-height: 1.3;
            transition: transform 0.3s ease, color 0.3s ease;
          }

          .principle-desc {
            font-size: 0.9375rem;
            line-height: 1.6;
            color: var(--color-muted);
            margin: 0;
          }
        }

        &.is-current {
          .principle-num {
            color: var(--color-laterite, #E14B27);
          }
        }
      }
    }
  }

  /* Reveal Cursor Active State: Dim unhovered items, slide current title */
  &.is-active {
    .principle-card:not(.is-current) {
      opacity: var(--irc-dim);
    }

    .principle-card.is-current .principle-title {
      transform: translateX(0.5rem);
    }
  }

  /* Floating cursor preview container: refined, non-obtrusive dimensions */
  .irc-preview {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 30;
    width: 165px;
    height: 215px;
    pointer-events: none;
    will-change: transform;

    @media (min-width: 1024px) {
      width: 190px;
      height: 240px;
    }
  }

  .irc-frame {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0.75rem;
    background-color: var(--color-stone, #EBE8E1);
    box-shadow:
      0 18px 36px -8px rgba(20, 18, 16, 0.22),
      0 3px 12px -2px rgba(20, 18, 16, 0.1),
      0 0 0 1px rgba(20, 18, 16, 0.08);
    opacity: 0;
    transform: scale(0.7);
    transition: opacity 0.3s ease, transform 0.45s var(--irc-ease);
  }

  &.is-active .irc-frame {
    opacity: 1;
    transform: scale(1);
  }

  .irc-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transform: scale(1.12);
    transition: opacity 0.35s ease, transform 0.7s var(--irc-ease);

    &.is-current {
      opacity: 1;
      transform: scale(1);
    }
  }
}

:global([data-theme='dark']) .personal-philosophy,
:global(.dark) .personal-philosophy {
  .irc-frame {
    box-shadow:
      0 18px 36px -8px rgba(0, 0, 0, 0.55),
      0 3px 12px -2px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.12);
  }
}

@media (max-width: 880px) {
  .personal-philosophy {
    .philosophy-container {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .philosophy-sidebar {
      .sidebar-sticky {
        position: static;
      }
    }

    .principles-grid {
      grid-template-columns: 1fr;
      gap: 1.75rem;
    }
  }
}

/* Touch devices: hide floating cursor preview */
@media (hover: none) {
  .personal-philosophy {
    .irc-preview {
      display: none !important;
    }
  }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .personal-philosophy {
    .irc-frame,
    .irc-img {
      transition: opacity 0.2s linear !important;
      transform: none !important;
    }

    &.is-active .irc-frame,
    .irc-img.is-current,
    &.is-active .principle-card.is-current .principle-title {
      transform: none !important;
    }
  }
}
</style>
