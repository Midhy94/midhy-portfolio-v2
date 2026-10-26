import { ref, computed } from 'vue';

export type WipeDirection = 'right' | 'left';

// Global shared state for full-screen angled wipe curtain page transitions
const isCovering = ref(false);
const isRevealing = ref(false);
const isActive = computed(() => isCovering.value || isRevealing.value);
const direction = ref<WipeDirection>('right');
const curtainEl = ref<HTMLElement | null>(null);

export function useCurtainsWipe() {
  const checkReducedMotion = (): boolean => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  const setDirection = (dir: WipeDirection) => {
    direction.value = dir;
  };

  const cover = async (dir?: WipeDirection): Promise<void> => {
    if (checkReducedMotion()) return;

    if (dir) direction.value = dir;
    isCovering.value = true;
    isRevealing.value = false;

    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => {
        const el = curtainEl.value;
        if (!el) {
          resolve();
          return;
        }

        const isRight = direction.value === 'right';
        const angle = isRight ? 14 : -14;
        const startX = isRight ? '-115%' : '115%';
        const skew = `skewX(${angle}deg)`;

        el.style.transform = `translateX(${startX}) ${skew}`;

        // Silky, smooth editorial wipe: gentle acceleration and luxurious gliding finish
        const anim = el.animate(
          [
            { transform: `translateX(${startX}) ${skew}` },
            { transform: `translateX(0%) ${skew}` },
          ],
          {
            duration: 520,
            easing: 'cubic-bezier(0.4, 0, 0.18, 1)',
            fill: 'forwards',
          }
        );

        let resolved = false;
        const complete = () => {
          if (resolved) return;
          resolved = true;
          el.style.transform = `translateX(0%) ${skew}`;
          try { anim.cancel(); } catch {}
          resolve();
        };

        anim.onfinish = complete;
        anim.onerror = complete;
        setTimeout(complete, 650);
      });
    });
  };

  const reveal = async (): Promise<void> => {
    if (checkReducedMotion()) {
      isCovering.value = false;
      isRevealing.value = false;
      return;
    }

    isRevealing.value = true;

    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => {
        const el = curtainEl.value;
        if (!el) {
          isCovering.value = false;
          isRevealing.value = false;
          resolve();
          return;
        }

        const isRight = direction.value === 'right';
        const angle = isRight ? 14 : -14;
        const endX = isRight ? '115%' : '-115%';
        const skew = `skewX(${angle}deg)`;

        // Seamless exit: carries momentum through center and smoothly glides to rest off-screen
        const anim = el.animate(
          [
            { transform: `translateX(0%) ${skew}` },
            { transform: `translateX(${endX}) ${skew}` },
          ],
          {
            duration: 520,
            easing: 'cubic-bezier(0.18, 0, 0.22, 1)',
            fill: 'forwards',
          }
        );

        let resolved = false;
        const complete = () => {
          if (resolved) return;
          resolved = true;
          isCovering.value = false;
          isRevealing.value = false;
          const resetX = isRight ? '-115%' : '115%';
          el.style.transform = `translateX(${resetX}) ${skew}`;
          try { anim.cancel(); } catch {}
          resolve();
        };

        anim.onfinish = complete;
        anim.onerror = complete;
        setTimeout(complete, 650);
      });
    });
  };

  return {
    isCovering,
    isRevealing,
    isActive,
    direction,
    curtainEl,
    setDirection,
    cover,
    reveal,
  };
}
