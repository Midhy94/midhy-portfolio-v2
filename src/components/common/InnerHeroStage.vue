<template>
  <section class="inner-hero-stage" aria-label="Page hero">
    <div class="hero-card-stage" :class="{ 'hero-card-stage--compact': compact }">
      <!-- Living Dynamic Mesh Background (Grainient WebGL2 Shader matching Home) -->
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
}

const props = withDefaults(defineProps<Props>(), {
  mode: undefined,
  contentClass: '',
  compact: false,
});

const { mode: activeMode } = usePortfolioMode();
const computedMode = computed(() => props.mode || activeMode.value);
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.inner-hero-stage {
  --hero-frame-gap: clamp(0.75rem, 1.25vw, 1.25rem);

  position: relative;
  width: 100%;
  margin: 0;
  background-color: var(--color-paper);
  // Identical 4-sided whitespace framing around the hero stage
  padding: var(--hero-frame-gap);
  box-sizing: border-box;

  .hero-card-stage {
    position: relative;
    width: 100%;
    margin: 0 auto;
    border-radius: clamp(22px, 2.5vw, 32px);
    overflow: hidden;
    will-change: transform;
    box-shadow: none;
    border: 1px solid rgba(255, 255, 255, 0.08);

    // Deep base fallback color behind the WebGL shader canvas
    background-color: #010814;

    padding: clamp(1rem, 1.6vw, 1.5rem) clamp(1.5rem, 3.5vw, 3.5rem) clamp(2.5rem, 4vw, 4rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    min-height: clamp(340px, 44vh, 480px);

    &--compact {
      min-height: clamp(260px, 32vh, 360px);
      padding-bottom: clamp(2rem, 3vw, 3rem);
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
    margin-top: clamp(1.75rem, 3.5vw, 3rem);
  }
}
</style>
