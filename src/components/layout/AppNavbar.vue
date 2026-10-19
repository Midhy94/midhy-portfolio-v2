<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useUiStore } from '@/stores/ui.store';
import { useAuthStore } from '@/stores/auth.store';
import { Shield, Check, Copy } from 'lucide-vue-next';

const route = useRoute();
const uiStore = useUiStore();
const authStore = useAuthStore();

const isAdminRoute = computed(() => route.path.startsWith('/admin'));
const isWorkRoute = computed(() => route.path.startsWith('/work'));
const isHomeRoute = computed(() => route.path === '/');

const isMenuOpen = ref(false);
const copiedEmail = ref(false);

const emailAddress = 'mnairmidhun@gmail.com';

function copyEmail() {
  navigator.clipboard.writeText(emailAddress).then(() => {
    copiedEmail.value = true;
    uiStore.addToast('Email copied to clipboard!', 'success');
    setTimeout(() => {
      copiedEmail.value = false;
    }, 2800);
  }).catch(() => {
    window.location.href = `mailto:${emailAddress}`;
  });
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

const navLinks = [
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/midhy/' },
  { name: 'Behance', url: 'https://www.behance.net/midhy' },
  { name: 'Dribbble', url: 'https://dribbble.com/midhy' },
];
</script>

<template>
  <header class="header" :class="{ 'header--admin': isAdminRoute, 'header--menu-open': isMenuOpen }">
    <div class="header__bar">
      <!-- Start: Brand Logo & Mode Pill (Matches faizur.com) -->
      <div class="header__start">
        <router-link to="/" class="header__logo" aria-label="Midhun M — Home" @click="closeMenu">
          <img src="/logo-dark.svg" alt="Midhun M" class="header__logo-img" />
        </router-link>

        <!-- Faizur-style Mode Switcher Pill: [Designer] [Work] -->
        <nav aria-label="Mode" class="header__mode" v-if="!isAdminRoute">
          <router-link
            to="/"
            class="header__mode-btn"
            :class="{ 'is-active': isHomeRoute }"
          >
            Designer
          </router-link>
          <router-link
            to="/work"
            class="header__mode-btn"
            :class="{ 'is-active': isWorkRoute }"
          >
            Work
          </router-link>
        </nav>
      </div>

      <!-- End: Nav Links, Copy Email Pill, 9-dot Grid Menu Button -->
      <div class="header__end" v-if="!isAdminRoute">
        <nav aria-label="Main navigation" class="header__nav">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="nav-link"
            :class="{ 'is-active': route.path === link.path }"
          >
            {{ link.name }}
          </router-link>
        </nav>

        <!-- Faizur-style Rolling / Copy Email Pill -->
        <button
          type="button"
          class="header__contact"
          :class="{ 'header__contact--copied': copiedEmail }"
          @click="copyEmail"
          :title="`Click to copy ${emailAddress}`"
          aria-label="Copy email address"
        >
          <span v-if="!copiedEmail" class="contact-label">
            <span>Contact</span>
            <span class="contact-email-hint">{{ emailAddress }}</span>
          </span>
          <span v-else class="contact-copied">
            <Check :size="14" class="check-icon" />
            <span>Copied to clipboard</span>
          </span>
        </button>

        <!-- CMS indicator if authenticated -->
        <router-link
          v-if="authStore.isAuthenticated"
          to="/admin/dashboard"
          class="admin-badge"
          title="Admin CMS"
        >
          <Shield :size="12" />
          <span>CMS</span>
        </router-link>

        <!-- Faizur-style 3x3 9-Dot Grid Menu Toggle -->
        <button
          type="button"
          class="header__toggle"
          @click="toggleMenu"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <svg width="20" height="22" viewBox="0 0 20 22" aria-hidden="true" class="grid-icon">
            <circle cx="2" cy="2" r="2" fill="currentColor" />
            <circle cx="10" cy="2" r="2" fill="currentColor" />
            <circle cx="18" cy="2" r="2" fill="currentColor" />
            <circle cx="2" cy="11" r="2" fill="currentColor" />
            <circle cx="10" cy="11" r="2" fill="currentColor" />
            <circle cx="18" cy="11" r="2" fill="currentColor" />
            <circle cx="2" cy="20" r="2" fill="currentColor" />
            <circle cx="10" cy="20" r="2" fill="currentColor" />
            <circle cx="18" cy="20" r="2" fill="currentColor" />
          </svg>
        </button>
      </div>

      <!-- Admin Top Navigation Bar (When on /admin) -->
      <div class="header__end" v-else>
        <nav class="header__nav">
          <router-link to="/admin/dashboard" class="nav-link">Dashboard</router-link>
          <router-link to="/admin/projects" class="nav-link">Projects</router-link>
          <router-link to="/admin/media" class="nav-link">Media</router-link>
          <router-link to="/admin/settings" class="nav-link">Settings</router-link>
        </nav>
        <router-link to="/" class="btn-exit-cms">Exit CMS</router-link>
      </div>
    </div>

    <!-- Faizur-style Slide-out Drawer Panel -->
    <transition name="drawer-fade">
      <div v-if="isMenuOpen" class="header__panel">
        <div class="header__panel-backdrop" @click="closeMenu" aria-hidden="true"></div>
        <div class="header__panel-content">
          <div class="panel-inner">
            <div class="panel-section">
              <span class="panel-eyebrow">Navigation</span>
              <nav class="panel-links">
                <router-link to="/" class="panel-link" @click="closeMenu">
                  <span>Home</span>
                  <span class="panel-link-sub">Overview & Philosophy</span>
                </router-link>
                <router-link to="/work" class="panel-link" @click="closeMenu">
                  <span>Selected Work</span>
                  <span class="panel-link-sub">Case studies & systems</span>
                </router-link>
                <router-link to="/about" class="panel-link" @click="closeMenu">
                  <span>About & Credentials</span>
                  <span class="panel-link-sub">10+ years journey & impact</span>
                </router-link>
                <router-link to="/contact" class="panel-link" @click="closeMenu">
                  <span>Get in Touch</span>
                  <span class="panel-link-sub">Leadership & engagements</span>
                </router-link>
              </nav>
            </div>

            <div class="panel-section">
              <span class="panel-eyebrow">Professional Networks</span>
              <div class="panel-socials">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="panel-social-link"
                >
                  {{ social.name }}
                </a>
              </div>
            </div>

            <div class="panel-section panel-email-box">
              <span class="panel-eyebrow">Direct Contact</span>
              <button type="button" class="panel-copy-btn" @click="copyEmail">
                <span class="email-text">{{ emailAddress }}</span>
                <span class="copy-action">
                  <Check v-if="copiedEmail" :size="14" />
                  <Copy v-else :size="14" />
                  <span>{{ copiedEmail ? 'Copied!' : 'Copy' }}</span>
                </span>
              </button>
            </div>

            <div class="panel-footer">
              <router-link to="/admin/login" class="panel-cms-link" @click="closeMenu">
                CMS Administration
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &--admin {
    background-color: rgba(255, 255, 255, 0.96);
  }

  &__bar {
    max-width: var(--container-max-width);
    margin: 0 auto;
    height: 72px;
    padding: 0 var(--space-7);
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include respond-to('md') {
      padding: 0 var(--space-10);
    }
  }

  &__start {
    display: flex;
    align-items: center;
    gap: var(--space-7);
  }

  &__logo {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.2s ease, transform 0.2s ease;

    &:hover {
      opacity: 0.85;
      transform: scale(0.98);
    }
  }

  &__logo-img {
    height: 28px;
    width: auto;
    display: block;
    object-fit: contain;
  }

  // Faizur-style Mode Switcher: [Designer] [Work]
  &__mode {
    display: inline-flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: var(--radius-pill);
    padding: 3px;
    gap: 2px;
  }

  &__mode-btn {
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1;
    padding: 6px 14px;
    border-radius: var(--radius-pill);
    color: #666664;
    text-decoration: none;
    transition: all 0.25s var(--ease-editorial);

    &:hover {
      color: #000000;
    }

    &.is-active {
      background: #ffffff;
      color: #000000;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
  }

  &__end {
    display: flex;
    align-items: center;
    gap: var(--space-5);
  }

  &__nav {
    display: none;
    align-items: center;
    gap: var(--space-6);

    @include respond-to('md') {
      display: flex;
    }
  }
}

.nav-link {
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  font-weight: 500;
  color: #555452;
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;
  padding: 4px 0;

  &:hover {
    color: #000000;
  }

  &.is-active {
    color: #000000;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 1.5px;
      background: var(--color-accent-terracotta);
    }
  }
}

// Faizur-style Rolling / Copy Contact Button
.header__contact {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: none;
  cursor: pointer;
  background-color: #090808;
  color: #ffffff;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  padding: 9px 18px;
  border-radius: var(--radius-pill);
  box-shadow: inset 0 0 0.1875rem 0.125rem rgba(255, 255, 255, 0.15),
              0 2px 4px rgba(0, 0, 0, 0.15);
  transition: transform 0.25s var(--ease-editorial), background-color 0.2s ease, color 0.2s ease;
  overflow: hidden;

  &:hover {
    transform: scale(1.04);
    background-color: #1a1a1a;
  }

  &:active {
    transform: scale(0.98);
  }

  .contact-label {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .contact-email-hint {
    display: none;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
  }

  &--copied {
    background-color: var(--color-accent-terracotta);
    color: #ffffff;
  }

  .contact-copied {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
    font-size: 0.8125rem;
  }
}

// Faizur-style 3x3 Dot Grid Menu Toggle
.header__toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-pill);
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: #090808;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 0, 0, 0.16);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  .grid-icon {
    display: block;
    color: #090808;
  }
}

.admin-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: var(--radius-pill);
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: #555452;
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  text-decoration: none;
}

.btn-exit-cms {
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: var(--radius-pill);
  background: rgba(0, 0, 0, 0.08);
  color: #000000;
  text-decoration: none;
}

// Slide-out Drawer Panel matching faizur.com (White Theme)
.header__panel {
  position: fixed;
  inset: 0;
  z-index: 150;
  display: flex;
  justify-content: flex-end;
}

.header__panel-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
}

.header__panel-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 420px;
  height: 100vh;
  background: #ffffff;
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  overflow-y: auto;
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.12);
}

.panel-inner {
  padding: var(--space-12) var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-10);
  min-height: 100%;
}

.panel-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.panel-eyebrow {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #8c8a87;
}

.panel-links {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.panel-link {
  display: flex;
  flex-direction: column;
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-card);
  text-decoration: none;
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;

  span:first-child {
    font-family: var(--font-serif);
    font-size: 1.375rem;
    color: #111010;
  }

  .panel-link-sub {
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    color: #7a7977;
    margin-top: 2px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.12);
    transform: translateX(4px);
  }
}

.panel-socials {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.panel-social-link {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  color: #4a4947;
  padding: 6px 14px;
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: var(--radius-pill);
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: #000000;
    background: rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 0, 0, 0.12);
  }
}

.panel-email-box {
  background: rgba(0, 0, 0, 0.03);
  padding: var(--space-4);
  border-radius: var(--radius-card);
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.panel-copy-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #111010;
  padding: 10px 14px;
  border-radius: var(--radius-card);
  cursor: pointer;
  transition: all 0.2s ease;

  .email-text {
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    color: #4a4947;
  }

  .copy-action {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.75rem;
    font-family: var(--font-sans);
    color: var(--color-accent-terracotta);
    font-weight: 600;
  }

  &:hover {
    background: #ffffff;
    border-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  }
}

.panel-footer {
  margin-top: auto;
  padding-top: var(--space-6);
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.panel-cms-link {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #8c8a87;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #111010;
  }
}

// Drawer animation
.drawer-fade-enter-active,
.drawer-fade-leave-active {
  transition: opacity 0.3s ease;

  .header__panel-content {
    transition: transform 0.35s var(--ease-editorial);
  }
}

.drawer-fade-enter-from,
.drawer-fade-leave-to {
  opacity: 0;

  .header__panel-content {
    transform: translateX(100%);
  }
}
</style>
