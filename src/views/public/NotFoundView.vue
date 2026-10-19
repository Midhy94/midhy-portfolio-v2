<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next';
</script>

<template>
  <div class="not-found-view">
    <div class="container not-found-view__inner">
      <span class="eyebrow">404 Error</span>
      <h1 class="not-found-title">Page Not Found</h1>
      <p class="not-found-desc">
        The page or case study you are looking for doesn't exist, has been archived, or moved.
      </p>
      <router-link to="/" class="btn-home">
        <ArrowLeft :size="16" />
        <span>Return to Home</span>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.not-found-view {
  min-height: 60vh;
  @include flex-center;
  padding: var(--space-20) 0;
  text-align: center;

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 520px;
  }
}

.not-found-title {
  margin: var(--space-4) 0 var(--space-4);
}

.not-found-desc {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-8);
}

.btn-home {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  background: var(--color-primary);
  color: #ffffff;
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: 600;
  transition: all var(--transition-fast);

  &:hover {
    background: var(--color-primary-light);
    transform: translateY(-2px);
  }
}
</style>
