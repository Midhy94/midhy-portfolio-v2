<template>
  <div
    class="curtains-wipe-viewport"
    :class="{ 'is-active': isActive }"
    aria-hidden="true"
  >
    <div
      ref="panelEl"
      class="curtains-wipe-panel"
      :class="`wipe-${direction}`"
    >
      <!-- Leading edge glow line matching brand terracotta accent -->
      <div class="wipe-leading-edge" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useCurtainsWipe } from '@/composables/useCurtainsWipe';

const { isActive, direction, curtainEl } = useCurtainsWipe();
const panelEl = ref<HTMLElement | null>(null);

onMounted(() => {
  curtainEl.value = panelEl.value;
});
</script>

<style scoped lang="scss">
.curtains-wipe-viewport {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99990;
  pointer-events: none;
  overflow: hidden;
  visibility: hidden;

  &.is-active {
    pointer-events: auto;
    visibility: visible;
  }
}

.curtains-wipe-panel {
  position: absolute;
  top: -15vh;
  left: -30vw;
  width: 160vw;
  height: 130vh;
  background: linear-gradient(
    135deg,
    #FFFFFF 0%,
    #FAF9F6 50%,
    #F3EFE8 100%
  );
  will-change: transform;
  transform-origin: center center;
  transform: translateX(-115%) skewX(14deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  outline: 1px solid transparent; // Eliminates jagged edge aliasing during skew transforms
  box-shadow:
    -24px 0 60px rgba(20, 18, 16, 0.16),
    24px 0 60px rgba(20, 18, 16, 0.16),
    0 0 2px rgba(20, 18, 16, 0.12);

  .wipe-leading-edge {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(
      180deg,
      rgba(225, 75, 39, 0) 0%,
      rgba(225, 75, 39, 0.85) 20%,
      rgba(225, 75, 39, 1) 50%,
      rgba(225, 75, 39, 0.85) 80%,
      rgba(225, 75, 39, 0) 100%
    );
    box-shadow: 0 0 20px rgba(225, 75, 39, 0.4), 0 0 40px rgba(225, 75, 39, 0.2);
  }

  &.wipe-right .wipe-leading-edge {
    right: 0;
  }

  &.wipe-left .wipe-leading-edge {
    left: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .curtains-wipe-viewport {
    display: none !important;
  }
}
</style>
