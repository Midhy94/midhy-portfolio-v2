<template>
  <!-- Full-Screen Initial Page Loader with Logo Animation -->
  <PageLoader @loaded="handleLoaded" />

  <!-- Full-Screen Motion Curtains: Wipe Overlay (Profile <-> Work switch) -->
  <CurtainsWipe />

  <div class="portfolio-shell" :class="['portal-' + mode, { 'is-loaded': isPageLoaded }]">
    <!-- Shared Site Header with 2-mode switcher pill & 3 simple links -->
    <SiteHeader :mode="mode" :is-loaded="isPageLoaded" />

    <!-- Main View with Page Content -->
    <main class="portfolio-main" role="main">
      <RouterView v-slot="{ Component, route }">
        <Transition :name="isCurtainActive ? '' : 'page-fade'" :mode="isCurtainActive ? 'default' : 'out-in'">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>

    <!-- Shared Dark Editorial Footer -->
    <SiteFooter :mode="mode" />

    <!-- Persistent Floating Portal Switcher -->
    <ModeSwitcher :mode="mode" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePortfolioMode } from '@/composables/usePortfolioMode';
import { useCurtainsWipe } from '@/composables/useCurtainsWipe';

import PageLoader from '@/components/common/PageLoader.vue';
import CurtainsWipe from '@/components/common/CurtainsWipe.vue';
import SiteHeader from '@/components/common/SiteHeader.vue';
import SiteFooter from '@/components/common/SiteFooter.vue';
import ModeSwitcher from '@/components/common/ModeSwitcher.vue';

const { mode } = usePortfolioMode();
const { isActive: isCurtainActive } = useCurtainsWipe();
const isPageLoaded = ref(false);

const handleLoaded = () => {
  isPageLoaded.value = true;
};
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.portfolio-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-paper);
  color: var(--color-ink);
  position: relative;

  .portfolio-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }
}

// Restrained Page Transition
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 220ms ease, transform 220ms cubic-bezier(0.16, 1, 0.3, 1);
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (prefers-reduced-motion: reduce) {
  .page-fade-enter-active,
  .page-fade-leave-active {
    transition: none;
  }
  .page-fade-enter-from,
  .page-fade-leave-to {
    opacity: 1;
    transform: none;
  }
}
</style>
