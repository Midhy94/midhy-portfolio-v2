import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { supabase, isSupabaseConfigured } from '@/services/supabase';
import type { User, Session } from '@supabase/supabase-js';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const session = ref<Session | null>(null);
  const isAdmin = ref(false);
  const isLoading = ref(true);

  const isAuthenticated = computed(() => Boolean(user.value && isAdmin.value));

  async function initSession() {
    isLoading.value = true;
    if (!isSupabaseConfigured) {
      isLoading.value = false;
      return;
    }

    try {
      const { data } = await supabase.auth.getSession();
      session.value = data.session;
      user.value = data.session?.user ?? null;
      if (user.value) {
        await verifyAdminRole(user.value.id);
      }
    } catch (err) {
      console.error('Session initialization error:', err);
    } finally {
      isLoading.value = false;
    }
  }

  async function verifyAdminRole(userId: string) {
    try {
      const { data, error } = await supabase
        .from('admin_users')
        .select('user_id')
        .eq('user_id', userId)
        .maybeSingle();

      isAdmin.value = !error && Boolean(data);
    } catch {
      isAdmin.value = false;
    }
  }

  async function logout() {
    if (isSupabaseConfigured) {
      await supabase.auth.signOut();
    }
    user.value = null;
    session.value = null;
    isAdmin.value = false;
  }

  return {
    user,
    session,
    isAdmin,
    isLoading,
    isAuthenticated,
    initSession,
    logout,
  };
});
