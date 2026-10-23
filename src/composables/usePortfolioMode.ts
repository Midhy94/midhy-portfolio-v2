import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { PortfolioMode } from '@/types/portfolio';

export function usePortfolioMode() {
  const route = useRoute();
  const router = useRouter();

  // Mode is strictly derived from the current URL path
  const mode = computed<PortfolioMode>(() => {
    return route.path.startsWith('/work') ? 'works' : 'personal';
  });

  const isPersonal = computed(() => mode.value === 'personal');
  const isWorks = computed(() => mode.value === 'works');

  const setMode = (targetMode: PortfolioMode) => {
    if (mode.value === targetMode) return;

    if (targetMode === 'works') {
      router.push('/work');
    } else {
      router.push('/');
    }
  };

  const toggleMode = () => {
    setMode(mode.value === 'personal' ? 'works' : 'personal');
  };

  return {
    mode,
    isPersonal,
    isWorks,
    setMode,
    toggleMode
  };
}
