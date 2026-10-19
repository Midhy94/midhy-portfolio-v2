import type { Router } from 'vue-router';
import { useAuthStore } from '@/stores/auth.store';

export function setupRouterGuards(router: Router) {
  // Navigation Guard: Auth & Metadata
  router.beforeEach(async (to, _from, next) => {
    // 1. Dynamic Page Title
    const siteTitle = 'Midhun M — Senior UI/UX & Product Designer';
    const pageTitle = to.meta.title as string | undefined;
    document.title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;

    // 2. Admin Route Protection
    if (to.meta.requiresAuth) {
      const authStore = useAuthStore();

      // If auth store hasn't initialized yet, wait for session
      if (authStore.isLoading) {
        await authStore.initSession();
      }

      if (!authStore.isAuthenticated) {
        return next({
          path: '/admin/login',
          query: { redirect: to.fullPath },
        });
      }
    }

    next();
  });
}
