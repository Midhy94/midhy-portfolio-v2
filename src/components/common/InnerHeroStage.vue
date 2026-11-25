<template>
  <section class="inner-hero-stage" aria-label="Page hero">
    <div class="hero-card-stage" :class="{ 'hero-card-stage--compact': compact }">
      <!-- Living Dynamic Mesh Background (Grainient WebGL2 Shader) -->
      <Grainient
        class="hero-card-canvas"
        :colors="activeColors"
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

      <!-- Embedded Navbar inside the top of the dark hero card stage -->
      <SiteHeader :mode="computedMode" :is-loaded="true" :embedded="true" />

      <!-- Inner Page Bespoke Content Slot -->
      <div class="inner-hero-content" :class="contentClass">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePortfolioMode } from '@/composables/usePortfolioMode';
import Grainient from '@/components/common/Grainient.vue';
import SiteHeader from '@/components/common/SiteHeader.vue';

interface Props {
  mode?: 'personal' | 'works';
  contentClass?: string;
  compact?: boolean;
  colors?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  mode: undefined,
  contentClass: '',
  compact: false,
  colors: undefined,
});

// Warm Obsidian Terracotta signature palette (rich espresso, amber embers & laterite glow)
const DEFAULT_INNER_COLORS = [
  '#000000',
  '#0d0705',
  '#1f0d08',
  '#421a0f',
  '#732c18',
  '#b54e27',
  '#2e1208',
  '#000000'
];

const { mode: activeMode } = usePortfolioMode();
const computedMode = computed(() => props.mode || activeMode.value);
const activeColors = computed(() => props.colors || DEFAULT_INNER_COLORS);
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.inner-hero-stage {
  --hero-frame-gap: clamp(0.75rem, 1.25vw, 1.25rem);

  position: relative;
  z-index: 70;
  width: 100%;
  margin: 0;
  background-color: var(--color-paper);
  // Identical 4-sided whitespace framing around the hero stage matching Home
  padding: var(--hero-frame-gap);
  box-sizing: border-box;

  .hero-card-stage {
    position: relative;
    width: 100%;
    margin: 0 auto;
    border-radius: clamp(22px, 2.5vw, 32px);
    overflow: visible;
    will-change: transform;
    box-shadow: none;
    border: none;

    // Deep obsidian espresso fallback behind the WebGL shader canvas
    background-color: #090605;

    // Left and right padding matches PersonalHero exactly: clamp(1.5rem, 3.5vw, 3.5rem)
    padding: clamp(1rem, 1.6vw, 1.5rem) clamp(1.5rem, 3.5vw, 3.5rem) clamp(2.25rem, 3.6vw, 3.25rem);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
    min-height: clamp(260px, 30vh, 340px);

    &--compact {
      min-height: clamp(200px, 22vh, 260px);
      padding-bottom: clamp(1.75rem, 2.5vw, 2.25rem);
    }

    .hero-card-canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      overflow: hidden;
      z-index: 0;
      pointer-events: none;
    }
  }

  .inner-hero-content {
    position: relative;
    z-index: 2;
    width: 100%;
    margin-top: clamp(2rem, 3.8vw, 3.5rem);

    // Defensively ensure slotted containers align flush to the card's edge without double gutters
    :deep(.container-editorial) {
      max-width: 100%;
      margin: 0;
      padding-left: 0;
      padding-right: 0;
    }
  }
}
</style>
