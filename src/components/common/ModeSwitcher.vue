<template>
  <aside class="floating-switcher-wrap" aria-label="Experience Portal Switcher">
    <div
      class="mode-switcher-capsule"
      role="radiogroup"
      aria-label="Portal Selection"
    >
      <!-- Glass sliding thumb indicator matching iOS segmented control -->
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
        <svg
          class="btn-icon"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <span class="btn-text">Profile</span>
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
        <svg
          class="btn-icon"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="14" x="2" y="7" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
        <span class="btn-text">Projects</span>
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
  bottom: clamp(1.5rem, 3vw, 2.25rem);
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

  // Neutral glass capsule matching reference image with thin, subtle border
  .mode-switcher-capsule {
    pointer-events: auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 4px;
    border-radius: 9999px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%),
      rgba(20, 18, 16, 0.42);
    backdrop-filter: blur(28px) saturate(160%);
    -webkit-backdrop-filter: blur(28px) saturate(160%);
    border: 0.5px solid rgba(255, 255, 255, 0.22);
    box-shadow:
      0 16px 36px -6px rgba(0, 0, 0, 0.4),
      0 4px 12px -2px rgba(0, 0, 0, 0.2),
      inset 0 1px 1px 0 rgba(255, 255, 255, 0.2);
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
      border-color: rgba(255, 255, 255, 0.3);
      box-shadow:
        0 20px 42px -6px rgba(0, 0, 0, 0.46),
        0 6px 16px -2px rgba(0, 0, 0, 0.24),
        inset 0 1px 1px 0 rgba(255, 255, 255, 0.25);
      transform: translateY(-1px);
    }
  }

  // Active sliding thumb with NO border matching reference image
  .capsule-thumb {
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 4px;
    width: calc((100% - 8px) / 2);
    border-radius: 9999px;
    background: rgba(20, 18, 16, 0.78);
    border: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;
    z-index: 1;

    &.is-works {
      transform: translateX(100%);
    }
  }

  // Equal-width button slots for exact horizontal centering
  .switcher-btn {
    position: relative;
    z-index: 2;
    flex: 1 1 0;
    width: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.45rem;
    min-width: 94px;
    height: 2.375rem;
    padding: 0 1.25rem;
    font-size: 0.85rem;
    font-weight: 500;
    font-family: var(--font-family-sans);
    line-height: 1.15;
    letter-spacing: -0.005em;
    color: rgba(248, 247, 244, 0.75);
    border-radius: 9999px;
    border: none;
    background: transparent;
    cursor: pointer;
    transition: color 0.22s ease, transform 0.15s ease;
    user-select: none;
    white-space: nowrap;

    .btn-icon {
      flex-shrink: 0;
      opacity: 0.75;
      transition: opacity 0.22s ease;
    }

    &:hover:not(.active) {
      color: rgba(248, 247, 244, 0.98);

      .btn-icon {
        opacity: 0.98;
      }
    }

    &.active {
      color: #FFFFFF;
      font-weight: 550;

      .btn-icon {
        opacity: 1;
        color: #FFFFFF;
      }
    }

    &:focus-visible {
      outline: 2px solid var(--color-laterite);
      outline-offset: 2px;
    }

    &:active {
      transform: scale(0.97);
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
      width: calc((100% - 6px) / 2);
    }

    .switcher-btn {
      min-width: 82px;
      height: 2.15rem;
      padding: 0 0.95rem;
      font-size: 0.78rem;
      gap: 0.35rem;

      .btn-icon {
        width: 13px;
        height: 13px;
      }
    }
  }
}
</style>
