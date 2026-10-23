import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Personal Portal Pages
    {
      path: '/',
      name: 'personal-home',
      component: () => import('@/pages/PersonalPage.vue'),
      meta: { title: 'Midhun M. — Senior UI/UX & Product Designer' }
    },
    {
      path: '/about',
      name: 'personal-about',
      component: () => import('@/pages/AboutCareerPage.vue'),
      meta: { title: 'About & Career — Midhun M.' }
    },

    // Works Portal Pages
    {
      path: '/work',
      name: 'works-selected',
      component: () => import('@/pages/WorksPage.vue'),
      meta: { title: 'Selected Works — Midhun M.' }
    },
    {
      path: '/work/archive',
      name: 'works-archive',
      component: () => import('@/pages/WorkArchivePage.vue'),
      meta: { title: 'All Projects Archive — Midhun M.' }
    },
    {
      path: '/work/:slug',
      name: 'works-case-study',
      component: () => import('@/pages/CaseStudyPage.vue'),
      meta: { title: 'Case Study — Midhun M.' }
    },

    // 404 Catch-all
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/pages/NotFoundPage.vue'),
      meta: { title: 'Page Not Found — Midhun M.' }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return { top: 0, behavior: 'smooth' };
  }
});

router.afterEach((to) => {
  if (to.meta?.title) {
    document.title = to.meta.title as string;
  }
});

export default router;
