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

    // 3D Spatial Skew, Tilt & Depth Parallax on hero exit (No fading!)
    if (heroRef?.value && !isReducedMotion()) {
      const stageEl = heroRef.value.querySelector<HTMLElement>('.hero-card-stage');
      const portraitEl = heroRef.value.querySelector<HTMLElement>('.portrait-img');
      const leftColEl = heroRef.value.querySelector<HTMLElement>('.hero-left-column');
      const rightColEl = heroRef.value.querySelector<HTMLElement>('.hero-right-column');
      const pillarsEl = heroRef.value.querySelector<HTMLElement>('.hero-pillars-row');

      if (stageEl) {
        gsap.set(stageEl, {
          transformPerspective: 1400,
          transformOrigin: '50% 10%',
        });

        scrollTriggerInstance = ScrollTrigger.create({
          trigger: heroRef.value,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
          onUpdate: (self) => {
            const p = self.progress;
            const velocity = self.getVelocity();
            // Tactile velocity-responsive skew: faster scroll = dynamic slant flex
            const velocitySkew = gsap.utils.clamp(-2.5, 2.5, velocity / 500);

            // 1. Stage Card: 3D perspective tilt + dynamic skew + subtle recession (ZERO fading!)
            gsap.set(stageEl, {
              scale: 1 - p * 0.07,
              rotateX: p * 6.5,
              skewY: -p * 2.2 + velocitySkew,
              borderRadius: `${24 + p * 18}px`,
            });

            // 2. Portrait: Floats forward in space with decoupled counter-skew and parallax lift
            if (portraitEl) {
              gsap.set(portraitEl, {
                y: -p * 75,
                scale: 1 + p * 0.035,
                skewY: p * 0.8,
              });
            }

            // 3. Display Typography: Subtle lateral slide & dynamic slant
            if (leftColEl) {
              gsap.set(leftColEl, {
                x: -p * 45,
                y: -p * 28,
                skewY: -p * 1.5,
              });
            }

            // 4. Narrative Statement: Divergent lateral slide
            if (rightColEl) {
              gsap.set(rightColEl, {
                x: p * 40,
                y: -p * 28,
                skewY: -p * 1.5,
              });
            }

            // 5. Pillars Row: Sinks gracefully into depth
            if (pillarsEl) {
              gsap.set(pillarsEl, {
                y: p * 25,
                skewY: -p * 1.0,
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
