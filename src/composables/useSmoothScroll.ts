import { shallowRef } from 'vue';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;
let tickerCallback: ((time: number) => void) | null = null;
const isLenisReady = shallowRef(false);

export function useSmoothScroll() {
  const initSmoothScroll = () => {
    if (typeof window === 'undefined' || lenisInstance) return lenisInstance;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return null;

    lenisInstance = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard exponential ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.25,
      infinite: false,
    });

    // Synchronize Lenis scroll positions directly with GSAP ScrollTrigger
    lenisInstance.on('scroll', ScrollTrigger.update);

    // Drive Lenis directly via GSAP's high-precision RAF ticker
    tickerCallback = (time: number) => {
      lenisInstance?.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    isLenisReady.value = true;
    return lenisInstance;
  };

  const getLenis = () => lenisInstance;

  const scrollTo = (
    target: string | number | HTMLElement,
    options?: {
      offset?: number;
      immediate?: boolean;
      lock?: boolean;
      duration?: number;
      easing?: (t: number) => number;
      onComplete?: () => void;
    }
  ) => {
    if (lenisInstance) {
      lenisInstance.scrollTo(target, options);
    } else if (typeof window !== 'undefined') {
      if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: options?.immediate ? 'auto' : 'smooth' });
      } else {
        const el = typeof target === 'string' ? document.querySelector(target) : target;
        el?.scrollIntoView({ behavior: options?.immediate ? 'auto' : 'smooth' });
      }
      if (options?.onComplete) {
        setTimeout(options.onComplete, 400);
      }
    }
  };

  const destroySmoothScroll = () => {
    if (tickerCallback) {
      gsap.ticker.remove(tickerCallback);
      tickerCallback = null;
    }
    if (lenisInstance) {
      lenisInstance.destroy();
      lenisInstance = null;
      isLenisReady.value = false;
    }
  };

  return {
    initSmoothScroll,
    getLenis,
    scrollTo,
    destroySmoothScroll,
    isLenisReady,
  };
}
