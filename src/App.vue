<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth.store';
import { useUiStore } from '@/stores/ui.store';
import AppNavbar from '@/components/layout/AppNavbar.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import ToastContainer from '@/components/common/ToastContainer.vue';
import { Eye, X } from 'lucide-vue-next';

const authStore = useAuthStore();
const uiStore = useUiStore();

onMounted(async () => {
  await authStore.initSession();
});
</script>

<template>
  <div class="app-root">
    <!-- Live Preview Banner for Unpublished Drafts -->
    <div v-if="uiStore.isPreviewMode" class="preview-banner">
      <div class="container preview-banner__inner">
        <div class="preview-badge">
          <Eye :size="14" />
          <span>Live Draft Preview Mode (Administrator View)</span>
        </div>
        <button
          type="button"
          class="btn-exit-preview"
          @click="uiStore.isPreviewMode = false"
        >
          <span>Exit Preview</span>
          <X :size="12" />
        </button>
      </div>
    </div>

    <AppNavbar />

    <main class="app-main">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <AppFooter />
    <ToastContainer />
  </div>
</template>

<style lang="scss">
@use '@/styles/main.scss';

.app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-main {
  flex: 1;
}

.preview-banner {
  background: var(--color-warning);
  color: #000000;
  padding: var(--space-2) 0;
  font-size: var(--font-size-xs);
  font-weight: 700;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.preview-badge {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.btn-exit-preview {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  background: rgba(0, 0, 0, 0.15);
  padding: 2px 8px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;

  &:hover {
    background: rgba(0, 0, 0, 0.25);
  }
}
</style>
