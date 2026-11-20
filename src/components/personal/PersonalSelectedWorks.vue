<template>
  <section
    id="selected-works"
    ref="sectionRef"
    class="selected-works-section"
    aria-labelledby="selected-works-heading"
  >
    <!-- Section Editorial Header Band -->
    <div class="works-header-band container-editorial">
      <div class="header-content">
        <span class="section-badge font-sans">02 / SELECTED WORK</span>
        <h2 id="selected-works-heading" class="section-headline font-serif">
          Selected Works <span class="works-count">({{ String(featuredProjects.length).padStart(2, '0') }})</span>
        </h2>
        <p class="section-subtext font-serif">
          A curated selection of design systems, digital products, and platforms shaped from strategy to delivery.
        </p>
      </div>

      <div class="header-action">
        <button
          type="button"
          class="all-works-btn font-sans"
          @click="$emit('switch-to-works')"
        >
          <span>Explore all works</span>
          <span class="btn-arrow" aria-hidden="true">→</span>
        </button>
      </div>
    </div>

    <!-- Pinned Horizontal Stage for Desktop / Responsive Stack for Mobile -->
    <div ref="viewportRef" class="works-viewport">
      <div ref="trackRef" class="works-track">
        <article
          v-for="(project, index) in featuredProjects"
          :key="project.id"
          class="work-card"
          :class="`work-card--${project.theme}`"
          @click="handleNavigate(project.slug)"
        >
          <div class="work-grid container-editorial">
            <!-- Left Column: Story & Timeline -->
            <div class="work-col work-col--left">
              <div class="work-intro">
                <span class="work-number font-mono">{{ project.number }}</span>
                <h3 class="work-title font-serif">
                  <a
                    :href="`/work/${project.slug}`"
                    class="work-title-link"
                    @click.prevent="handleNavigate(project.slug)"
                  >
                    {{ project.title }}
                  </a>
                </h3>
                <p class="work-summary font-sans">
                  {{ project.summary }}
                </p>
              </div>

              <div class="work-fact work-fact--timeline">
                <span class="fact-label font-mono">Project Timeline</span>
                <span class="fact-value font-sans">{{ project.timeline }}</span>
              </div>
            </div>

            <!-- Center Column: Hero Showcase Media -->
            <div class="work-col work-col--center">
              <div class="media-container" :style="{ '--accent-color': project.accentColor }">
                <!-- Hairline Vertical Dividers (Jithin RP reference drawing lines) -->
                <div class="divider-line divider-line--left" aria-hidden="true"></div>
                <div class="divider-line divider-line--right" aria-hidden="true"></div>

                <!-- Showcase Canvas Surface -->
                <div class="media-surface" :style="{ backgroundColor: project.surfaceBg }">
                  <!-- Ambient Studio Glow -->
                  <div class="media-ambient-glow" aria-hidden="true"></div>

                  <!-- Bespoke UI Simulation Showcase -->
                  <div class="showcase-content">
                    <!-- Project 1: Design Systems UI Simulation -->
                    <template v-if="project.id === 'product-design-system'">
                      <div class="ui-mockup mockup--ds">
                        <div class="ds-header">
                          <span class="ds-pill font-mono">tokens.config.json</span>
                          <span class="ds-status font-mono">● 84 primitives</span>
                        </div>
                        <div class="ds-swatches-grid">
                          <div class="ds-swatch" style="background-color: #E14B27;">
                            <span class="swatch-name font-mono">laterite.500</span>
                          </div>
                          <div class="ds-swatch" style="background-color: #141210;">
                            <span class="swatch-name font-mono">ink.900</span>
                          </div>
                          <div class="ds-swatch" style="background-color: #EFEFEA;">
                            <span class="swatch-name font-mono">cloud.200</span>
                          </div>
                          <div class="ds-swatch" style="background-color: #344636;">
                            <span class="swatch-name font-mono">moss.700</span>
                          </div>
                        </div>
                        <div class="ds-components-row">
                          <span class="component-pill is-primary font-sans">Button / Primary</span>
                          <span class="component-pill is-secondary font-sans">Toggle Switch</span>
                          <span class="component-pill is-badge font-sans">Tag / Active</span>
                        </div>
                      </div>
                    </template>

                    <!-- Project 2: Hospitality Booking UI Simulation -->
                    <template v-else-if="project.id === 'hospitality-booking-flow'">
                      <div class="ui-mockup mockup--booking">
                        <div class="phone-notch"></div>
                        <div class="phone-screen">
                          <div class="phone-header">
                            <span class="phone-brand font-serif">Aura Lounge</span>
                            <span class="phone-rating font-sans">★ 4.9</span>
                          </div>
                          <div class="time-chips-row">
                            <span class="time-chip font-sans">19:00</span>
                            <span class="time-chip is-selected font-sans">19:30</span>
                            <span class="time-chip font-sans">20:00</span>
                          </div>
                          <div class="booking-card">
                            <div class="booking-row">
                              <span class="b-label font-sans">Terrace Table</span>
                              <span class="b-price font-mono">$120</span>
                            </div>
                            <span class="b-sub font-sans">4 Guests · Sunset View</span>
                          </div>
                          <div class="cta-strip font-sans">Instant Confirmation →</div>
                        </div>
                      </div>
                    </template>

                    <!-- Project 3: Crypto Vault UI Simulation -->
                    <template v-else-if="project.id === 'crypto-wallet-vault'">
                      <div class="ui-mockup mockup--crypto">
                        <div class="crypto-header">
                          <span class="crypto-title font-mono">VAULT // HARDWARE_KEY_01</span>
                          <span class="crypto-badge font-mono">SECURE</span>
                        </div>
                        <div class="key-fingerprint">
                          <span class="fingerprint-hash font-mono">0x9F42...88BC</span>
                          <span class="fingerprint-status font-sans">Hardware Enclave Paired</span>
                        </div>
                        <div class="biometric-gate">
                          <div class="biometric-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                              <path d="M12 2a10 10 0 0 0-10 10c0 4.4 2.8 8.1 6.8 9.4.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.2-.2-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.8-4.6 5 .4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A10 10 0 0 0 22 12 10 10 0 0 0 12 2z"/>
                            </svg>
                          </div>
                          <span class="biometric-label font-mono">BIOMETRIC TOUCH CONFIRMED</span>
                        </div>
                      </div>
                    </template>

                    <!-- Project 4: AI Workflow Canvas UI Simulation -->
                    <template v-else>
                      <div class="ui-mockup mockup--ai">
                        <div class="ai-canvas-grid">
                          <div class="node-box node--prompt">
                            <span class="node-tag font-mono">Prompt Node</span>
                            <span class="node-title font-sans">Persona / Design Lead</span>
                          </div>
                          <div class="node-connector" aria-hidden="true">
                            <span class="node-line"></span>
                            <span class="node-pulse"></span>
                          </div>
                          <div class="node-box node--model">
                            <span class="node-tag font-mono">Model Chaining</span>
                            <span class="node-title font-sans">Claude 3.7 Sonnet</span>
                          </div>
                        </div>
                        <div class="ai-metrics-footer">
                          <span class="font-mono">LATENCY: 124ms</span>
                          <span class="font-mono">VALIDATION: PASS</span>
                        </div>
                      </div>
                    </template>
                  </div>

                  <!-- Hover Case Study Pill -->
                  <div class="hover-action-pill font-sans">
                    <span>View case study</span>
                    <span class="pill-arrow" aria-hidden="true">↗</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Column: Role, Tools & Metrics -->
            <div class="work-col work-col--right">
              <div class="work-fact">
                <span class="fact-label font-mono">My Role</span>
                <span class="fact-value font-sans">{{ project.role }}</span>
              </div>

              <div class="work-fact">
                <span class="fact-label font-mono">Core Impact</span>
                <div class="impact-metrics-list">
                  <div
                    v-for="metric in project.metrics"
                    :key="metric.label"
                    class="metric-item"
                  >
                    <span class="metric-value font-serif">{{ metric.value }}</span>
                    <span class="metric-label font-sans">{{ metric.label }}</span>
                  </div>
                </div>
              </div>

              <div class="work-fact">
                <span class="fact-label font-mono">Tools & Stack</span>
                <div class="tools-badges-wrap">
                  <span
                    v-for="tool in project.tools"
                    :key="tool"
                    class="tool-badge font-sans"
                  >
                    {{ tool }}
                  </span>
                </div>
              </div>

              <div class="work-cta-wrap">
                <button
                  type="button"
                  class="case-study-action-btn font-sans"
                  @click.stop="handleNavigate(project.slug)"
                >
                  <span>Explore Case Study</span>
                  <span class="action-arrow" aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

defineEmits<{
  (e: 'switch-to-works'): void;
}>();

const router = useRouter();

const sectionRef = ref<HTMLElement | null>(null);
const viewportRef = ref<HTMLElement | null>(null);
const trackRef = ref<HTMLElement | null>(null);

let horizontalScrollTween: gsap.core.Tween | null = null;
let tickerVelocityCallback: ((time: number, dt: number) => void) | null = null;

// Curated 4 premier flagship projects directly matching Midhun's core craft
const featuredProjects = [
  {
    id: 'product-design-system',
    slug: 'product-design-system',
    number: '01',
    title: 'Multi-Brand Enterprise Design System',
    summary: 'A unified token architecture and reusable component universe scaling across 10+ distributed teams with automated Figma-to-code pipelines.',
    timeline: '2022 – Present',
    role: 'Design System Lead',
    accentColor: '#B84A27',
    surfaceBg: '#181614',
    theme: 'dark',
    metrics: [
      { value: '25%', label: 'Frontend Time Saved' },
      { value: '10+', label: 'Teams Governed' },
    ],
    tools: ['Figma', 'Tokens Studio', 'Vue 3', 'Storybook', 'GitHub PRs'],
  },
  {
    id: 'hospitality-booking-flow',
    slug: 'hospitality-booking-flow',
    number: '02',
    title: 'Hospitality Booking & Menu Platform UX',
    summary: 'Eliminating friction points in dining reservations and mobile orders through ergonomic one-thumb interaction and instant dietary filtering.',
    timeline: '4 Months',
    role: 'Senior Product Designer',
    accentColor: '#1E3A5F',
    surfaceBg: '#0E1724',
    theme: 'dark',
    metrics: [
      { value: '+38%', label: 'Checkout Completion' },
      { value: '45s', label: 'Faster Ordering' },
    ],
    tools: ['Figma', 'UserTesting', 'Principle', 'React Native'],
  },
  {
    id: 'crypto-wallet-vault',
    slug: 'crypto-wallet-vault',
    number: '03',
    title: 'Institutional Crypto Asset Custody Platform',
    summary: 'Designing high-security key management workflows with human error prevention, multi-party hardware confirmation, and tactile sensory feedback.',
    timeline: '6 Months',
    role: 'Lead Product Designer',
    accentColor: '#1A3326',
    surfaceBg: '#0E1C15',
    theme: 'dark',
    metrics: [
      { value: '$1.2B', label: 'Assets Secured' },
      { value: '0', label: 'Security Incidents' },
    ],
    tools: ['Figma', 'Hardware Specs', 'Security Flows', 'Tailwind'],
  },
  {
    id: 'ai-workflow-canvas',
    slug: 'ai-workflow-canvas',
    number: '04',
    title: 'Generative AI Pipeline Studio',
    summary: 'Visual node graph orchestration for prompt engineering and model chaining with spatial navigation and live telemetry feedback.',
    timeline: '5 Months',
    role: 'AI Product Architect',
    accentColor: '#3B234A',
    surfaceBg: '#180E21',
    theme: 'dark',
    metrics: [
      { value: '3.5x', label: 'Faster Authoring' },
      { value: '12k', label: 'Active Workflows' },
    ],
    tools: ['Figma', 'WebGL Canvas', 'Claude API', 'Python'],
  },
];

const handleNavigate = (slug: string) => {
  router.push(`/work/${slug}`);
};

const initHorizontalScroll = () => {
  if (typeof window === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth <= 1024;

  if (prefersReducedMotion || isMobile) return;
  if (!sectionRef.value || !viewportRef.value || !trackRef.value) return;

  // Clean up existing instance
  if (horizontalScrollTween) {
    horizontalScrollTween.scrollTrigger?.kill();
    horizontalScrollTween.kill();
    horizontalScrollTween = null;
  }
  if (tickerVelocityCallback) {
    gsap.ticker.remove(tickerVelocityCallback);
    tickerVelocityCallback = null;
  }

  const track = trackRef.value;
  const viewport = viewportRef.value;

  // Calculate total horizontal scroll distance needed
  const getScrollDistance = () => Math.max(0, track.scrollWidth - window.innerWidth);

  // GSAP Pinned Horizontal Scrub (Directly matching Jithin RP horizontalWorks)
  horizontalScrollTween = gsap.to(track, {
    x: () => -getScrollDistance(),
    ease: 'none',
    scrollTrigger: {
      trigger: viewport,
      start: 'top top',
      end: () => `+=${getScrollDistance()}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
  });

  // Jithin RP Jelly Skew dynamics:
  // Words and columns gently lean with scroll momentum and settle with a natural spring
  const skewElements = track.querySelectorAll('.work-intro, .work-fact, .media-surface');
  const setSkew = Array.from(skewElements).map((el) => gsap.quickSetter(el, 'skewX', 'deg'));

  let lastX = 0;
  let velocity = 0;
  let lean = 0;
  let leanVelocity = 0;
  let lastReportedLean = 0;

  tickerVelocityCallback = (_time: number, dt: number) => {
    const step = Math.min(dt, 50) / 1000;
    const currentX = gsap.getProperty(track, 'x') as number;

    velocity += ((currentX - lastX) / step - velocity) * (1 - Math.exp(-step * 10));
    lastX = currentX;

    const targetLean = gsap.utils.clamp(-3.5, 3.5, velocity * 0.0035);
    leanVelocity += (40 * (targetLean - lean) - 9 * leanVelocity) * step;
    lean += leanVelocity * step;

    const roundedLean = Math.round(lean * 100) / 100;
    if (roundedLean === lastReportedLean) return;
    lastReportedLean = roundedLean;

    setSkew.forEach((apply) => apply(roundedLean));
  };

  gsap.ticker.add(tickerVelocityCallback);
};

onMounted(() => {
  nextTick(() => {
    initHorizontalScroll();

    // Recompute on window resize
    const handleResize = () => {
      initHorizontalScroll();
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Refresh triggers once fonts/images settle
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  });
});

onUnmounted(() => {
  if (horizontalScrollTween) {
    horizontalScrollTween.scrollTrigger?.kill();
    horizontalScrollTween.kill();
    horizontalScrollTween = null;
  }
  if (tickerVelocityCallback) {
    gsap.ticker.remove(tickerVelocityCallback);
    tickerVelocityCallback = null;
  }
});
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.selected-works-section {
  position: relative;
  width: 100%;
  background-color: var(--color-paper);
  color: var(--color-ink);
  overflow: visible;

  // Header Band
  .works-header-band {
    padding: clamp(4.5rem, 7vw, 6.5rem) clamp(1.5rem, 4vw, 3rem) clamp(2.5rem, 4vw, 3.5rem);
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2.5rem;
    border-bottom: 1px solid var(--color-border);

    .header-content {
      max-width: 680px;

      .section-badge {
        display: inline-block;
        font-size: 0.8125rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        color: var(--color-laterite);
        margin-bottom: 0.75rem;
      }

      .section-headline {
        font-size: clamp(2.75rem, 5vw, 4.25rem);
        font-weight: 400;
        line-height: 1.12;
        letter-spacing: -0.025em;
        color: var(--color-ink);
        margin: 0 0 1rem;

        .works-count {
          font-family: var(--font-family-sans);
          font-size: clamp(1.25rem, 2vw, 1.75rem);
          color: var(--color-muted-light);
          vertical-align: middle;
          margin-left: 0.5rem;
        }
      }

      .section-subtext {
        font-size: clamp(1.0625rem, 1.4vw, 1.25rem);
        line-height: 1.5;
        color: var(--color-muted);
        margin: 0;
      }
    }

    .all-works-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      background-color: transparent;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-full);
      padding: 0.875rem 1.75rem;
      font-size: 0.9375rem;
      font-weight: 500;
      color: var(--color-ink);
      cursor: pointer;
      white-space: nowrap;
      transition: all $transition-fast;

      .btn-arrow {
        transition: transform $transition-fast;
      }

      &:hover {
        background-color: var(--color-ink);
        color: var(--color-chalk);
        border-color: var(--color-ink);

        .btn-arrow {
          transform: translateX(4px);
        }
      }
    }
  }

  // Pinned Viewport Container
  .works-viewport {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  // Horizontal Track
  .works-track {
    display: flex;
    flex-direction: row;
    width: max-content;
    will-change: transform;
  }

  // Individual Project Card Slide
  .work-card {
    width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(3rem, 6vh, 5.5rem) 0;
    cursor: pointer;
    position: relative;

    .work-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.05fr) minmax(0, 1.45fr) minmax(0, 1.15fr);
      column-gap: clamp(2rem, 4vw, 4.5rem);
      align-items: center;
      width: 100%;
      height: 100%;
    }

    // Left Column
    .work-col--left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: clamp(2rem, 4vh, 3.5rem);

      .work-intro {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .work-number {
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--color-laterite);
        }

        .work-title {
          font-size: clamp(2rem, 3.2vw, 3rem);
          font-weight: 400;
          line-height: 1.18;
          letter-spacing: -0.02em;
          margin: 0;
          color: var(--color-ink);

          .work-title-link {
            color: inherit;
            text-decoration: none;
            background: linear-gradient(currentColor, currentColor) 0 100% / 0 1.5px no-repeat;
            transition: background-size 0.4s ease;

            &:hover {
              background-size: 100% 1.5px;
            }
          }
        }

        .work-summary {
          font-size: clamp(0.9375rem, 1.15vw, 1.0625rem);
          line-height: 1.65;
          color: var(--color-muted);
          margin: 0;
        }
      }

      .work-fact {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;

        .fact-label {
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-muted-light);
        }

        .fact-value {
          font-size: 1.0625rem;
          font-weight: 500;
          color: var(--color-ink);
        }
      }
    }

    // Center Column: Showcase Media Surface
    .work-col--center {
      position: relative;
      display: flex;
      justify-content: center;

      .media-container {
        position: relative;
        width: 100%;
        max-width: 460px;
        aspect-ratio: 436 / 560;

        // Framing Vertical Hairlines (Jithin RP architecture)
        .divider-line {
          position: absolute;
          top: -20px;
          bottom: -20px;
          width: 1px;
          background: rgba(0, 0, 0, 0.08);

          &--left {
            left: -20px;
          }
          &--right {
            right: -20px;
          }
        }

        .media-surface {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: clamp(16px, 2vw, 24px);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          box-sizing: border-box;
          box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;

          .media-ambient-glow {
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 50% 35%, var(--accent-color) 0%, transparent 65%);
            opacity: 0.35;
            filter: blur(35px);
            pointer-events: none;
          }

          .showcase-content {
            position: relative;
            z-index: 2;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          // Floating View Case Study Pill on Hover
          .hover-action-pill {
            position: absolute;
            bottom: 1.5rem;
            z-index: 5;
            display: inline-flex;
            align-items: center;
            gap: 0.45rem;
            background-color: rgba(255, 255, 255, 0.95);
            color: #141210;
            font-size: 0.8125rem;
            font-weight: 600;
            padding: 0.6rem 1.15rem;
            border-radius: var(--radius-full);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
            opacity: 0;
            transform: translateY(10px);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }

          &:hover {
            transform: translateY(-6px) scale(1.015);
            box-shadow: 0 32px 64px -16px rgba(0, 0, 0, 0.26);

            .hover-action-pill {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      }
    }

    // Right Column
    .work-col--right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: clamp(1.75rem, 3.5vh, 2.5rem);

      .work-fact {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .fact-label {
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-muted-light);
        }

        .fact-value {
          font-size: 1.0625rem;
          font-weight: 500;
          color: var(--color-ink);
        }
      }

      .impact-metrics-list {
        display: flex;
        flex-direction: column;
        gap: 0.85rem;

        .metric-item {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;

          .metric-value {
            font-size: 1.65rem;
            font-weight: 400;
            color: var(--color-laterite);
            line-height: 1;
          }

          .metric-label {
            font-size: 0.875rem;
            color: var(--color-muted);
          }
        }
      }

      .tools-badges-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;

        .tool-badge {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-ink);
          background-color: var(--color-cloud);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }
      }

      .work-cta-wrap {
        padding-top: 0.5rem;

        .case-study-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background-color: var(--color-ink);
          color: var(--color-chalk);
          border: none;
          border-radius: var(--radius-full);
          padding: 0.875rem 1.65rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color $transition-fast, transform $transition-fast;

          .action-arrow {
            transition: transform $transition-fast;
          }

          &:hover {
            background-color: var(--color-laterite);
            transform: translateY(-2px);

            .action-arrow {
              transform: translateX(4px);
            }
          }
        }
      }
    }
  }

  // Bespoke UI Mockups Styling
  .ui-mockup {
    width: 100%;
    color: #FFFFFF;
    user-select: none;

    &.mockup--ds {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 1.25rem;

      .ds-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.6);

        .ds-status {
          color: #48BB78;
        }
      }

      .ds-swatches-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.65rem;
        margin-bottom: 1rem;

        .ds-swatch {
          padding: 0.75rem 0.5rem;
          border-radius: 6px;
          display: flex;
          align-items: flex-end;

          .swatch-name {
            font-size: 0.65rem;
            color: #FFFFFF;
            background: rgba(0, 0, 0, 0.4);
            padding: 2px 4px;
            border-radius: 3px;
          }
        }
      }

      .ds-components-row {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;

        .component-pill {
          font-size: 0.7rem;
          padding: 0.35rem 0.65rem;
          border-radius: 6px;

          &.is-primary {
            background-color: var(--color-laterite);
            color: #FFFFFF;
          }
          &.is-secondary {
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: rgba(255, 255, 255, 0.85);
          }
          &.is-badge {
            background-color: rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.7);
          }
        }
      }
    }

    &.mockup--booking {
      max-width: 280px;
      margin: 0 auto;
      background: #060B12;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 28px;
      padding: 1.25rem 1rem;
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);

      .phone-notch {
        width: 60px;
        height: 6px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
        margin: 0 auto 1.25rem;
      }

      .phone-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 1rem;

        .phone-brand {
          font-size: 1.15rem;
          color: #FFFFFF;
        }
        .phone-rating {
          font-size: 0.75rem;
          color: #ECC94B;
        }
      }

      .time-chips-row {
        display: flex;
        gap: 0.4rem;
        margin-bottom: 1rem;

        .time-chip {
          flex: 1;
          text-align: center;
          font-size: 0.75rem;
          padding: 0.45rem 0;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.75);

          &.is-selected {
            background: #2B6CB0;
            color: #FFFFFF;
            font-weight: 600;
          }
        }
      }

      .booking-card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        padding: 0.75rem;
        margin-bottom: 1rem;

        .booking-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }
        .b-sub {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.5);
        }
      }

      .cta-strip {
        background: #2B6CB0;
        color: #FFFFFF;
        font-size: 0.75rem;
        font-weight: 600;
        text-align: center;
        padding: 0.6rem;
        border-radius: 8px;
      }
    }

    &.mockup--crypto {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 1.25rem;

      .crypto-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.7rem;
        margin-bottom: 1.25rem;
        color: rgba(255, 255, 255, 0.65);

        .crypto-badge {
          background: rgba(56, 161, 105, 0.2);
          color: #48BB78;
          padding: 2px 6px;
          border-radius: 4px;
        }
      }

      .key-fingerprint {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        margin-bottom: 1.5rem;

        .fingerprint-hash {
          font-size: 1.15rem;
          color: #FFFFFF;
          letter-spacing: 0.05em;
        }
        .fingerprint-status {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
        }
      }

      .biometric-gate {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        background: rgba(56, 161, 105, 0.12);
        border: 1px solid rgba(56, 161, 105, 0.35);
        padding: 0.75rem;
        border-radius: 8px;

        .biometric-icon {
          width: 22px;
          height: 22px;
          color: #48BB78;
        }

        .biometric-label {
          font-size: 0.7rem;
          color: #48BB78;
          letter-spacing: 0.04em;
        }
      }
    }

    &.mockup--ai {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 1.25rem;

      .ai-canvas-grid {
        display: flex;
        flex-direction: column;
        gap: 0.85rem;
        margin-bottom: 1.25rem;

        .node-box {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;

          .node-tag {
            font-size: 0.65rem;
            color: #9F7AEA;
            text-transform: uppercase;
          }
          .node-title {
            font-size: 0.85rem;
            color: #FFFFFF;
            font-weight: 500;
          }
        }

        .node-connector {
          display: flex;
          justify-content: center;
          position: relative;
          height: 14px;

          .node-line {
            width: 2px;
            height: 100%;
            background: rgba(159, 122, 234, 0.4);
          }
        }
      }

      .ai-metrics-footer {
        display: flex;
        justify-content: space-between;
        font-size: 0.7rem;
        color: rgba(255, 255, 255, 0.55);
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        padding-top: 0.75rem;
      }
    }
  }
}

// Tablet & Mobile Adaptation (Switch from pinned horizontal to editorial vertical stack)
@media (max-width: 1024px) {
  .selected-works-section {
    .works-header-band {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
    }

    .works-viewport {
      overflow: visible;
    }

    .works-track {
      flex-direction: column;
      width: 100%;
    }

    .work-card {
      width: 100%;
      min-height: auto;
      padding: clamp(3rem, 6vw, 5rem) 0;
      border-bottom: 1px solid var(--color-border);

      .work-grid {
        grid-template-columns: 1fr;
        row-gap: 2.5rem;
      }

      .work-col--center {
        order: -1; // Image showcase sits between intro or at top for mobile clarity

        .media-container {
          max-width: 100%;
          aspect-ratio: 16 / 11;

          .divider-line {
            display: none;
          }
        }
      }

      .work-col--right {
        .impact-metrics-list {
          flex-direction: row;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
      }
    }
  }
}
</style>
