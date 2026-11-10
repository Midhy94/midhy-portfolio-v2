import { onMounted, onUnmounted, type Ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

interface OneScrollOptions {
  /** Target element selector to scroll down to (e.g. '#statement') */
  targetSelector: string;
  /** Hero section element reference */
  heroRef?: Ref<HTMLElement | null>;
  /** Duration of scroll animation in seconds */
  duration?: number;
  /** GSAP easing formula */
  ease?: string;
}

export function useOneScrollTransition(options: OneScrollOptions) {
  const {
    targetSelector,
    heroRef,
    duration = 1.15,
    ease = 'power3.inOut',
  } = options;

  let isAutoScrolling = false;
  let touchStartY = 0;
  let scrollTriggerInstance: ScrollTrigger | null = null;

  const isReducedMotion = () => {
    return (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  };

  /**
   * Get the target scroll position (in pixels from document top)
   */
  const getTargetScrollY = (): number => {
    const el = document.querySelector(targetSelector);
    if (!el) {
      return window.innerHeight;
    }
    const rect = el.getBoundingClientRect();
    return Math.round(window.scrollY + rect.top);
  };

  /**
   * Perform the ultra-smooth animated scroll down to the next section
   */
  const scrollToNext = () => {
    if (isAutoScrolling) return;

    const targetY = getTargetScrollY();
    if (isReducedMotion()) {
      window.scrollTo({ top: targetY, behavior: 'auto' });
      return;
    }

    isAutoScrolling = true;

    gsap.to(window, {
      duration,
      scrollTo: {
        y: targetY,
        autoKill: false,
      },
      ease,
      overwrite: 'auto',
      onComplete: () => {
        // Cooldown buffer allows trailing trackpad momentum to expire
        setTimeout(() => {
          isAutoScrolling = false;
        }, 160);
      },
    });
  };

  /**
   * Perform smooth animated scroll back up to the hero top
   */
  const scrollToTop = () => {
    if (isAutoScrolling) return;

    if (isReducedMotion()) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    isAutoScrolling = true;

    gsap.to(window, {
      duration: duration * 0.9,
      scrollTo: {
        y: 0,
        autoKill: false,
      },
      ease: 'power3.out',
      overwrite: 'auto',
      onComplete: () => {
        setTimeout(() => {
          isAutoScrolling = false;
        }, 160);
      },
    });
  };

  /**
   * Wheel event listener for "one-scroll" trigger
   */
  const handleWheel = (e: WheelEvent) => {
    // If currently in an animated glide, consume events to prevent micro-stutters
    if (isAutoScrolling) {
      e.preventDefault();
      return;
    }

    const currentY = window.scrollY;
    const targetY = getTargetScrollY();

    // Trigger 1: At top of Hero or inside Hero zone, user initiates scroll DOWN
    // Uses low threshold (> 1) so Mac trackpad initial micro-deltas don't cause jitter
    if (currentY < targetY - 60 && e.deltaY > 1) {
      e.preventDefault();
      scrollToNext();
      return;
    }

    // Trigger 2: At boundary of next section, user initiates scroll UP
    if (currentY >= 15 && currentY <= targetY + 30 && e.deltaY < -1) {
      e.preventDefault();
      scrollToTop();
      return;
    }
  };

  /**
   * Touch support for mobile / touch devices
   */
  const handleTouchStart = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      touchStartY = e.touches[0].clientY;
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isAutoScrolling) {
      e.preventDefault();
      return;
    }

    if (e.touches.length === 0) return;
    const currentTouchY = e.touches[0].clientY;
    const deltaY = touchStartY - currentTouchY; // positive = swipe up = scroll down

    const currentY = window.scrollY;
    const targetY = getTargetScrollY();

    if (currentY < targetY - 60 && deltaY > 30) {
      e.preventDefault();
      scrollToNext();
      return;
    }

    if (currentY >= 15 && currentY <= targetY + 30 && deltaY < -30) {
      e.preventDefault();
      scrollToTop();
      return;
    }
  };

  /**
   * Keyboard support: ArrowDown, PageDown, Space when at top
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
    const targetY = getTargetScrollY();

    if (currentY < targetY - 60 && (e.key === 'ArrowDown' || e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey))) {
      e.preventDefault();
      scrollToNext();
    }
  };

  onMounted(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown, { passive: false });

    // Setup subtle hero depth / exit parallax animation with ScrollTrigger
    if (heroRef?.value && !isReducedMotion()) {
      const stageEl = heroRef.value.querySelector('.hero-card-stage');
      const portraitEl = heroRef.value.querySelector('.portrait-img');
      const textEls = heroRef.value.querySelectorAll('.hero-left-column, .hero-right-column');

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
    gsap.killTweensOf(window);
  });

  return {
    scrollToNext,
    scrollToTop,
  };
}
