import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

export const useUiStore = defineStore('ui', () => {
  const isMobileMenuOpen = ref(false);
  const isPreviewMode = ref(false);
  const toasts = ref<Toast[]>([]);

  function toggleMobileMenu(open?: boolean) {
    isMobileMenuOpen.value = open !== undefined ? open : !isMobileMenuOpen.value;
  }

  function addToast(message: string, type: Toast['type'] = 'info', duration = 3500) {
    const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    toasts.value.push({ id, message, type });

    setTimeout(() => {
      removeToast(id);
    }, duration);
  }

  function removeToast(id: string) {
    toasts.value = toasts.value.filter((t) => t.id !== id);
  }

  return {
    isMobileMenuOpen,
    isPreviewMode,
    toasts,
    toggleMobileMenu,
    addToast,
    removeToast,
  };
});
