import { onMounted, onUnmounted, type Ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSmoothScroll } from '@/composables/useSmoothScroll';

gsap.registerPlugin(ScrollTrigger);

interface OneScrollOptions {
  /** Target element selector to scroll down to (e.g. '#statement') */
  targetSelector: string;
  /** Hero section element reference */
  heroRef?: Ref<HTMLElement | null>;
  /** Duration in seconds */
  duration?: number;
}

export function useOneScrollTransition(options: OneScrollOptions) {
  const {
    targetSelector,
    heroRef,
    duration = 1.35,
  } = options;

  const { getLenis, scrollTo } = useSmoothScroll();

  let scrollTriggerInstance: ScrollTrigger | null = null;
  let isNavigating = false;
  let touchStartY = 0;

  const isReducedMotion = () => {
    return (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  };

  /**
   * Buttery-smooth quartic ease-out curve (fast initial takeoff, ultra-soft glide)
   */
  const smoothEaseOut = (t: number) => 1 - Math.pow(1 - t, 4);

  /**
   * Scroll smoothly down to the target section
   */
  const scrollToNext = () => {
    if (isNavigating) return;
    isNavigating = true;

    scrollTo(targetSelector, {
      duration,
      easing: smoothEaseOut,
      onComplete: () => {
        isNavigating = false;
      },
    });
  };

  /**
   * Scroll smoothly back up to the top of the hero
   */
  const scrollToTop = () => {
    if (isNavigating) return;
    isNavigating = true;

    scrollTo(0, {
      duration: duration * 0.85,
      easing: smoothEaseOut,
      onComplete: () => {
        isNavigating = false;
      },
    });
  };

  /**
   * Passive wheel gesture listener:
   * When resting at the very top (hero), one scroll down smoothly glides to the target.
   * When scrolled back up into the hero zone, one scroll up glides back to top.
   */
  const handleWheel = (e: WheelEvent) => {
    if (isNavigating || isReducedMotion()) return;

    const currentY = window.scrollY;

    // Trigger 1: Sitting at the top of Hero (scrollY <= 20) and user rolls down
    if (currentY <= 20 && e.deltaY > 15) {
      scrollToNext();
      return;
    }

    // Trigger 2: Re-entered hero zone (scrollY between 20px and 220px) and user rolls up
    if (currentY > 20 && currentY < 220 && e.deltaY < -15) {
      scrollToTop();
      return;
    }
  };

  /**
   * Mobile touch gestures
   */
  const handleTouchStart = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      touchStartY = e.touches[0].clientY;
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isNavigating || isReducedMotion() || e.touches.length === 0) return;

    const currentTouchY = e.touches[0].clientY;
    const deltaY = touchStartY - currentTouchY; // positive = swipe up = scroll down
    const currentY = window.scrollY;

    if (currentY <= 20 && deltaY > 30) {
      scrollToNext();
    } else if (currentY > 20 && currentY < 220 && deltaY < -30) {
      scrollToTop();
    }
  };

  /**
   * Keyboard shortcuts: ArrowDown / PageDown / Space at top
   */
  const handleKeyDown = (e: KeyboardEvent) => {
    const active = document.activeElement;
    if (
      active &&
      (active.tagName === 'INPUT' ||
        active.tagName === 'TEXTAREA' ||
        active.getAttribute('contenteditable') === 'true')
    ) {
      return;
    }

    const currentY = window.scrollY;
    if (currentY <= 20 && (e.key === 'ArrowDown' || e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey))) {
      e.preventDefault();
      scrollToNext();
    }
  };

  onMounted(() => {
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    // Earlier subtle hero depth / exit parallax animation with ScrollTrigger
    if (heroRef?.value && !isReducedMotion()) {
      const stageEl = heroRef.value.querySelector<HTMLElement>('.hero-card-stage');
      const portraitEl = heroRef.value.querySelector<HTMLElement>('.portrait-img');
      const textEls = heroRef.value.querySelectorAll<HTMLElement>('.hero-left-column, .hero-right-column');

      if (stageEl) {
        scrollTriggerInstance = ScrollTrigger.create({
          trigger: heroRef.value,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
          onUpdate: (self) => {
            const p = self.progress;
            // Subtle 3D scale and opacity fade as hero leaves view
            gsap.set(stageEl, {
              scale: 1 - p * 0.035,
              opacity: 1 - p * 0.45,
              transformOrigin: 'center center',
            });
            if (portraitEl) {
              gsap.set(portraitEl, {
                y: -p * 50,
              });
            }
            if (textEls.length > 0) {
              gsap.set(textEls, {
                y: -p * 35,
                opacity: 1 - p * 0.6,
              });
            }
          },
        });
      }
    }
  });

  onUnmounted(() => {
    window.removeEventListener('wheel', handleWheel);
    window.removeEventListener('touchstart', handleTouchStart);
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('keydown', handleKeyDown);

    if (scrollTriggerInstance) {
      scrollTriggerInstance.kill();
      scrollTriggerInstance = null;
    }
  });

  return {
    scrollToNext,
    scrollToTop,
  };
}
