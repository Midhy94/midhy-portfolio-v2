<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="menu-backdrop"
        @click.self="$emit('close')"
        role="dialog"
        aria-modal="true"
        aria-label="Site Navigation"
      >
        <div class="menu-panel">
          <div class="menu-header">
            <!-- Mode Switcher Pill in Drawer -->
            <div class="drawer-mode-capsule" role="radiogroup" aria-label="Portal Mode">
              <button
                type="button"
                role="radio"
                :aria-checked="mode === 'personal'"
                class="capsule-tab"
                :class="{ active: mode === 'personal' }"
                @click="switchPortal('personal')"
              >
                Personal
              </button>
              <button
                type="button"
                role="radio"
                :aria-checked="mode === 'works'"
                class="capsule-tab"
                :class="{ active: mode === 'works' }"
                @click="switchPortal('works')"
              >
                Works
              </button>
            </div>

            <button
              type="button"
              class="close-btn"
              @click="$emit('close')"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <!-- Contextual Navigation Links: Clean 3-Link Structure -->
          <nav class="menu-links">
            <span class="portal-badge overline-editorial">
              {{ mode === 'personal' ? 'Personal & Career Portal' : 'Selected Works Portal' }}
            </span>

            <!-- If Personal Mode: 3 Simple Merged Nav Items -->
            <template v-if="mode === 'personal'">
              <RouterLink
                to="/"
                class="menu-link-item"
                @click="$emit('close')"
              >
                <span class="link-num">01</span>
                <span class="link-label">Overview</span>
              </RouterLink>

              <RouterLink
                to="/about"
                class="menu-link-item"
                @click="$emit('close')"
              >
                <span class="link-num">02</span>
                <span class="link-label">About & Career</span>
              </RouterLink>
            </template>

            <!-- If Works Mode: 3 Simple Merged Nav Items -->
            <template v-else>
              <RouterLink
                to="/work"
                class="menu-link-item"
                @click="$emit('close')"
              >
                <span class="link-num">01</span>
                <span class="link-label">Selected Work</span>
              </RouterLink>

              <RouterLink
                to="/work/archive"
                class="menu-link-item"
                @click="$emit('close')"
              >
                <span class="link-num">02</span>
                <span class="link-label">Project Archive</span>
              </RouterLink>
            </template>

            <!-- Contact Link (3rd Item) -->
            <a
              href="#contact"
              class="menu-link-item"
              @click="handleContactClick"
            >
              <span class="link-num">03</span>
              <span class="link-label">Contact & Inquiries</span>
            </a>

            <!-- Resume Download -->
            <a
              href="/Midhun_M_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="menu-link-item resume-link"
              @click="$emit('close')"
            >
              <span class="link-num">↗</span>
              <span class="link-label">Download Résumé (PDF)</span>
            </a>
          </nav>

          <div class="menu-footer">
            <p class="designer-bio">
              Midhun M. — Senior UI/UX & Product Designer based in Kerala, India. Specializing in fintech, design systems, and AI-assisted workflows.
            </p>
            <div class="footer-contacts">
              <a href="mailto:mnairmidhun@gmail.com" class="footer-email">mnairmidhun@gmail.com</a>
              <span class="footer-phone">+91 8921089470</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import type { PortfolioMode } from '@/types/portfolio';

const props = defineProps<{
  isOpen: boolean;
  mode: PortfolioMode;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const router = useRouter();

const switchPortal = (target: PortfolioMode) => {
  emit('close');
  if (target === 'works') {
    router.push('/work');
  } else {
    router.push('/');
  }
};

const handleContactClick = (e: MouseEvent) => {
  e.preventDefault();
  emit('close');
  setTimeout(() => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  }, 180);
};

// Handle Escape key
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close');
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.menu-backdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  background-color: rgba(25, 21, 18, 0.65);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  justify-content: flex-end;
}

.menu-panel {
  width: 100%;
  max-width: 440px;
  height: 100%;
  background-color: var(--color-paper);
  padding: 2.25rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: -8px 0 32px rgba(25, 21, 18, 0.2);
  overflow-y: auto;

  .menu-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--color-border);

    .drawer-mode-capsule {
      display: inline-flex;
      background-color: var(--color-stone);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-full);
      padding: 2px;
      gap: 2px;

      .capsule-tab {
        padding: 0.35rem 0.95rem;
        font-size: 0.8125rem;
        font-weight: 500;
        color: var(--color-muted);
        border-radius: var(--radius-full);
        background: transparent;
        cursor: pointer;
        transition: all $transition-fast;

        &.active {
          background-color: var(--color-ink);
          color: var(--color-chalk);
          font-weight: 600;
        }
      }
    }

    .close-btn {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid var(--color-border);
      background: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      color: var(--color-ink);
      cursor: pointer;
      transition: background-color $transition-fast, transform $transition-fast;

      &:hover {
        background-color: var(--color-stone);
        transform: scale(1.05);
      }
    }
  }

  .menu-links {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin: 2rem 0;

    .portal-badge {
      margin-bottom: 0.5rem;
    }

    .menu-link-item {
      display: flex;
      align-items: baseline;
      gap: 1rem;
      font-size: 1.25rem;
      font-family: var(--font-family-serif);
      color: var(--color-ink);
      background: none;
      border: none;
      padding: 0.375rem 0;
      text-align: left;
      cursor: pointer;
      transition: color $transition-fast, transform $transition-fast;

      .link-num {
        font-family: var(--font-family-sans);
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--color-laterite);
      }

      .link-label {
        font-weight: 400;
      }

      &:hover {
        color: var(--color-laterite);
        transform: translateX(4px);
      }

      &.router-link-exact-active {
        color: var(--color-laterite);
        font-weight: 600;
      }

      &.resume-link {
        font-size: 1rem;
        color: var(--color-muted);
        border-top: 1px dashed var(--color-border);
        padding-top: 1rem;

        &:hover {
          color: var(--color-ink);
        }
      }
    }
  }

  .menu-footer {
    border-top: 1px solid var(--color-border);
    padding-top: 1.5rem;

    .designer-bio {
      font-size: 0.8125rem;
      line-height: 1.55;
      color: var(--color-muted);
      margin-bottom: 1.25rem;
    }

    .footer-contacts {
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
      font-size: 0.875rem;

      .footer-email {
        color: var(--color-ink);
        font-weight: 500;
        text-decoration: underline;
        text-underline-offset: 3px;
      }

      .footer-phone {
        color: var(--color-muted);
      }
    }
  }
}

// Fade transitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease;

  .menu-panel {
    transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1);
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;

  .menu-panel {
    transform: translateX(100%);
  }
}
</style>
