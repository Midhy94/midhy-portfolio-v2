<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth.store';
import { useUiStore } from '@/stores/ui.store';
import { supabase, isSupabaseConfigured } from '@/services/supabase';
import { Lock, Mail, ArrowRight, ShieldAlert } from 'lucide-vue-next';

const router = useRouter();
const authStore = useAuthStore();
const uiStore = useUiStore();

const email = ref('');
const password = ref('');
const isLoading = ref(false);
const errorMessage = ref('');

async function handleLogin() {
  errorMessage.value = '';
  isLoading.value = true;

  if (!isSupabaseConfigured) {
    isLoading.value = false;
    errorMessage.value = 'Supabase credentials are not configured yet in .env.';
    uiStore.addToast('Supabase connection pending configuration.', 'warning');
    return;
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (error) {
      errorMessage.value = error.message;
      return;
    }

    if (data.user) {
      await authStore.initSession();
      if (authStore.isAuthenticated) {
        uiStore.addToast('Welcome back, Midhun!', 'success');
        router.push('/admin/dashboard');
      } else {
        errorMessage.value = 'Authenticated, but user does not have administrator privileges.';
      }
    }
  } catch (err: unknown) {
    errorMessage.value = err instanceof Error ? err.message : 'An unexpected error occurred.';
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div class="admin-login-view">
    <div class="login-card">
      <div class="login-header">
        <router-link to="/" class="login-logo-link" title="Return to Portfolio">
          <img src="/logo.svg" alt="Midhun M" class="login-logo-img" />
        </router-link>
        <h1 class="login-title">Portfolio CMS Portal</h1>
        <p class="login-subtitle">Sign in to manage projects, content blocks, and media assets.</p>
      </div>

      <div v-if="!isSupabaseConfigured" class="config-alert">
        <ShieldAlert :size="18" class="config-alert__icon" />
        <div class="config-alert__text">
          <strong>Database Not Linked Yet</strong>
          <p>Local development mode active. Add your Supabase keys to <code>.env</code> when ready.</p>
        </div>
      </div>

      <form class="login-form" @submit.prevent="handleLogin">
        <div v-if="errorMessage" class="error-banner">
          {{ errorMessage }}
        </div>

        <div class="form-group">
          <label for="admin-email" class="form-label">Admin Email</label>
          <div class="input-wrapper">
            <Mail :size="16" class="input-icon" />
            <input
              id="admin-email"
              v-model="email"
              type="email"
              required
              placeholder="admin@midhun.design"
              class="form-input"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="admin-password" class="form-label">Password</label>
          <div class="input-wrapper">
            <Lock :size="16" class="input-icon" />
            <input
              id="admin-password"
              v-model="password"
              type="password"
              required
              placeholder="••••••••••••"
              class="form-input"
            />
          </div>
        </div>

        <button type="submit" class="btn-login" :disabled="isLoading">
          <span>{{ isLoading ? 'Verifying Credentials...' : 'Sign In to Dashboard' }}</span>
          <ArrowRight :size="16" />
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.admin-login-view {
  min-height: 80vh;
  @include flex-center;
  padding: var(--space-8);
}

.login-card {
  width: 100%;
  max-width: 440px;
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  box-shadow: var(--shadow-lg);

  @include respond-to('sm') {
    padding: var(--space-10);
  }
}

.login-header {
  text-align: center;
  margin-bottom: var(--space-8);
}

.login-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  background: rgba(59, 130, 246, 0.12);
  border: 1px solid rgba(59, 130, 246, 0.25);
  color: var(--color-primary-light);
  @include flex-center;
  margin: 0 auto var(--space-4);
}

.login-title {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--space-2);
}

.login-subtitle {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.config-alert {
  display: flex;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background: var(--color-warning-bg);
  border: 1px solid var(--color-warning);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-6);

  &__icon {
    color: var(--color-warning);
    flex-shrink: 0;
    margin-top: 2px;
  }

  &__text {
    font-size: var(--font-size-xs);
    color: var(--color-text-secondary);

    strong {
      color: var(--color-text-primary);
      display: block;
      margin-bottom: 2px;
    }

    code {
      font-family: var(--font-family-mono);
      color: var(--color-warning);
    }
  }
}

.error-banner {
  padding: var(--space-3) var(--space-4);
  background: var(--color-danger-bg);
  border: 1px solid var(--color-danger);
  border-radius: var(--radius-md);
  font-size: var(--font-size-xs);
  color: var(--color-danger);
  margin-bottom: var(--space-4);
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form-label {
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: var(--color-text-secondary);
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: var(--space-4);
  color: var(--color-text-tertiary);
  pointer-events: none;
}

.form-input {
  width: 100%;
  padding: var(--space-3) var(--space-4) var(--space-3) var(--space-10);
  border-radius: var(--radius-md);
  background: var(--color-bg-canvas);
  border: 1px solid var(--color-border-default);
  color: var(--color-text-primary);
  font-size: var(--font-size-sm);

  &:focus {
    border-color: var(--color-primary-light);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
  }
}

.btn-login {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  background: var(--color-primary);
  color: #ffffff;
  font-size: var(--font-size-sm);
  font-weight: 600;
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);
  margin-top: var(--space-2);
  transition: all var(--transition-fast);

  &:hover:not(:disabled) {
    background: var(--color-primary-light);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.login-logo-link {
  display: inline-block;
  margin-bottom: var(--space-4);
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
}

.login-logo-img {
  height: 36px;
  width: auto;
  display: block;
  margin: 0 auto;
}
</style>
