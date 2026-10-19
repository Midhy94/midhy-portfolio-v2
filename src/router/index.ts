import { createRouter, createWebHistory } from 'vue-router';
import { setupRouterGuards } from './guards';

// Views (Code Split / Lazy Loaded)
const HomeView = () => import('@/views/public/HomeView.vue');
const WorkView = () => import('@/views/public/WorkView.vue');
const CaseStudyView = () => import('@/views/public/CaseStudyView.vue');
const AboutView = () => import('@/views/public/AboutView.vue');
const ContactView = () => import('@/views/public/ContactView.vue');
const NotFoundView = () => import('@/views/public/NotFoundView.vue');

const AdminLoginView = () => import('@/views/admin/AdminLoginView.vue');
const AdminDashboardView = () => import('@/views/admin/AdminDashboardView.vue');
const AdminProjectsView = () => import('@/views/admin/AdminProjectsView.vue');
const AdminProjectEditView = () => import('@/views/admin/AdminProjectEditView.vue');

const routes = [
  // Public Routes
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home' },
  },
  {
    path: '/work',
    name: 'work',
    component: WorkView,
    meta: { title: 'Selected Work' },
  },
  {
    path: '/work/:slug',
    name: 'case-study',
    component: CaseStudyView,
    meta: { title: 'Case Study' },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: 'About & Philosophy' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { title: 'Contact' },
  },

  // Admin Routes
  {
    path: '/admin/login',
    name: 'admin-login',
    component: AdminLoginView,
    meta: { title: 'CMS Login' },
  },
  {
    path: '/admin',
    redirect: '/admin/dashboard',
  },
  {
    path: '/admin/dashboard',
    name: 'admin-dashboard',
    component: AdminDashboardView,
    meta: { title: 'CMS Dashboard', requiresAuth: true },
  },
  {
    path: '/admin/projects',
    name: 'admin-projects',
    component: AdminProjectsView,
    meta: { title: 'Manage Projects', requiresAuth: true },
  },
  {
    path: '/admin/projects/new',
    name: 'admin-project-new',
    component: AdminProjectEditView,
    meta: { title: 'Create Case Study', requiresAuth: true },
  },
  {
    path: '/admin/projects/:id/edit',
    name: 'admin-project-edit',
    component: AdminProjectEditView,
    meta: { title: 'Edit Case Study', requiresAuth: true },
  },
  {
    path: '/admin/media',
    name: 'admin-media',
    component: AdminDashboardView, // Placeholder for Phase 4
    meta: { title: 'Media Library', requiresAuth: true },
  },
  {
    path: '/admin/settings',
    name: 'admin-settings',
    component: AdminDashboardView, // Placeholder for Phase 4
    meta: { title: 'Profile Settings', requiresAuth: true },
  },

  // 404 Catch All
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
    meta: { title: 'Page Not Found' },
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, behavior: 'smooth' };
  },
});

setupRouterGuards(router);
