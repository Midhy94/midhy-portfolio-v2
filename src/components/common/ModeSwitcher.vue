<template>
  <aside class="floating-switcher-wrap" aria-label="Experience Portal Switcher">
    <div
      class="mode-switcher-capsule"
      role="radiogroup"
      aria-label="Portal Selection"
    >
      <!-- Glass sliding thumb indicator matching reference image -->
      <div
        class="capsule-thumb"
        :class="`is-${mode}`"
        aria-hidden="true"
      />

      <button
        type="button"
        role="radio"
        :aria-checked="mode === 'personal'"
        class="switcher-btn"
        :class="{ active: mode === 'personal' }"
        @click="goTo('personal')"
        @keydown.right.prevent="goTo('works')"
      >
        <span class="btn-text">Personal</span>
      </button>

      <button
        type="button"
        role="radio"
        :aria-checked="mode === 'works'"
        class="switcher-btn"
        :class="{ active: mode === 'works' }"
        @click="goTo('works')"
        @keydown.left.prevent="goTo('personal')"
      >
        <span class="btn-text">Works</span>
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { PortfolioMode } from '@/types/portfolio';

const props = defineProps<{
  mode: PortfolioMode;
}>();

const router = useRouter();

const goTo = (target: PortfolioMode) => {
  if (target === 'works') {
    router.push('/work');
  } else {
    router.push('/');
  }
};
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.floating-switcher-wrap {
  position: fixed;
  bottom: clamp(1.5rem, 3.5vw, 2.25rem);
  left: 50%;
  transform: translateX(-50%);
  z-index: 70;
  pointer-events: none;
  transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);

:global(body.menu-is-open .floating-switcher-wrap) {
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, 14px);
}

  .mode-switcher-capsule {
    pointer-events: auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 4px;
    border-radius: 9999px;
    background: rgba(20, 18, 16, 0.55);
    backdrop-filter: blur(28px) saturate(180%);
    -webkit-backdrop-filter: blur(28px) saturate(180%);
    border: 1px solid rgba(248, 247, 244, 0.2);
    box-shadow:
      0 20px 40px -8px rgba(20, 18, 16, 0.35),
      0 8px 16px -4px rgba(20, 18, 16, 0.2),
      inset 0 1px 1.5px rgba(248, 247, 244, 0.35),
      inset 0 -1.5px 2px rgba(248, 247, 244, 0.7);
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
      box-shadow:
        0 24px 48px -6px rgba(20, 18, 16, 0.45),
        0 10px 20px -3px rgba(20, 18, 16, 0.25),
        inset 0 1px 2px rgba(248, 247, 244, 0.45),
        inset 0 -1.5px 2px rgba(248, 247, 244, 0.85);
      transform: translateY(-1px);
    }
  }

  // Sliding glass thumb matching brand palette
  .capsule-thumb {
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 4px;
    width: calc(50% - 4px);
    border-radius: 9999px;
    background: rgba(20, 18, 16, 0.88);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid rgba(248, 247, 244, 0.14);
    box-shadow:
      0 4px 14px rgba(20, 18, 16, 0.35),
      inset 0 1px 1px rgba(248, 247, 244, 0.2);
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;
    z-index: 1;

    &.is-works {
      transform: translateX(100%);
    }
  }

  .switcher-btn {
    position: relative;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 96px;
    padding: 0.55rem 1.45rem;
    font-size: 0.9375rem;
    font-weight: 450;
    font-family: var(--font-family-sans);
    letter-spacing: -0.01em;
    color: rgba(248, 247, 244, 0.6);
    border-radius: 9999px;
    border: none;
    background: transparent;
    cursor: pointer;
    transition: color 0.25s ease;
    user-select: none;
    white-space: nowrap;

    &:hover:not(.active) {
      color: rgba(248, 247, 244, 0.95);
    }

    &.active {
      color: var(--color-chalk);
      font-weight: 550;
    }

    &:focus-visible {
      outline: 2px solid var(--color-laterite);
      outline-offset: 2px;
    }
  }
}

@media (max-width: 640px) {
  .floating-switcher-wrap {
    bottom: calc(1rem + env(safe-area-inset-bottom, 0px));

    .mode-switcher-capsule {
      padding: 3px;
    }

    .capsule-thumb {
      top: 3px;
      bottom: 3px;
      left: 3px;
      width: calc(50% - 3px);
    }

    .switcher-btn {
      min-width: 82px;
      padding: 0.45rem 1.15rem;
      font-size: 0.8125rem;
    }
  }
}
</style>
