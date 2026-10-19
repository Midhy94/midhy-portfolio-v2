<script setup lang="ts">
import { useUiStore } from '@/stores/ui.store';
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from 'lucide-vue-next';

const uiStore = useUiStore();
</script>

<template>
  <div class="toast-container" aria-live="polite">
    <transition-group name="page-fade">
      <div
        v-for="toast in uiStore.toasts"
        :key="toast.id"
        class="toast"
        :class="`toast--${toast.type}`"
      >
        <CheckCircle2 v-if="toast.type === 'success'" :size="18" class="toast__icon" />
        <AlertTriangle v-else-if="toast.type === 'warning'" :size="18" class="toast__icon" />
        <AlertCircle v-else-if="toast.type === 'error'" :size="18" class="toast__icon" />
        <Info v-else :size="18" class="toast__icon" />

        <span class="toast__message">{{ toast.message }}</span>

        <button
          type="button"
          class="toast__close"
          @click="uiStore.removeToast(toast.id)"
          aria-label="Dismiss alert"
        >
          <X :size="14" />
        </button>
      </div>
    </transition-group>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.toast-container {
  position: fixed;
  bottom: var(--space-6);
  right: var(--space-6);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  pointer-events: none;
}

.toast {
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  font-size: var(--font-size-sm);
  color: var(--color-text-primary);
  min-width: 280px;
  max-width: 420px;
  @include glassmorphism(16px, var(--color-bg-surface-elevated), var(--color-border-default));

  &--success {
    border-left: 4px solid var(--color-success);
    .toast__icon { color: var(--color-success); }
  }

  &--warning {
    border-left: 4px solid var(--color-warning);
    .toast__icon { color: var(--color-warning); }
  }

  &--danger,
  &--error {
    border-left: 4px solid var(--color-danger);
    .toast__icon { color: var(--color-danger); }
  }

  &--info {
    border-left: 4px solid var(--color-primary-light);
    .toast__icon { color: var(--color-primary-light); }
  }

  &__message {
    flex: 1;
    line-height: var(--line-height-normal);
  }

  &__close {
    color: var(--color-text-tertiary);
    display: flex;
    align-items: center;
    padding: var(--space-1);
    border-radius: var(--radius-xs);

    &:hover {
      color: var(--color-text-primary);
      background: var(--color-bg-subtle);
    }
  }
}
</style>
