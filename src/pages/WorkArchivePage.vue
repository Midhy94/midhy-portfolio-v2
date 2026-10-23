<template>
  <div class="pinterest-archive-page" :class="{ 'modal-open': !!activePin }">
    <div class="archive-container">
      <!-- Editorial Page Header -->
      <header class="archive-intro-header">
        <h1 class="archive-headline font-serif">
          All projects, systems &amp; experiments.
        </h1>
        <p class="archive-description">
          A visual catalog of production interfaces, design system architectures, and interaction experiments crafted across fintech, healthcare, and developer tooling.
        </p>
      </header>

      <!-- Pinterest Top Filter Bar (Left-Aligned Text Tabs with Underline Indicator) -->
      <nav class="pinterest-filter-bar" aria-label="Archive Categories">
        <div class="filter-tabs-scroll">
          <button
            v-for="cat in categories"
            :key="cat.id"
            type="button"
            class="filter-tab-btn"
            :class="{ 'is-active': selectedCategory === cat.id }"
            @click="selectedCategory = cat.id"
          >
            <span class="tab-label">{{ cat.label }}</span>
            <span v-if="selectedCategory === cat.id" class="active-indicator" aria-hidden="true" />
          </button>
        </div>

        <div class="filter-meta-count font-mono" aria-live="polite">
          {{ filteredPins.length }} items
        </div>
      </nav>

      <!-- Pinterest Multi-Column Masonry Grid -->
      <div v-if="filteredPins.length === 0" class="empty-state">
        <p class="empty-text">No archive items found for this category.</p>
        <button type="button" class="reset-btn" @click="selectedCategory = 'all'">
          Show all items
        </button>
      </div>

      <div v-else class="pinterest-masonry-grid">
        <article
          v-for="pin in filteredPins"
          :key="pin.id"
          class="pin-card"
          tabindex="0"
          role="button"
          :aria-label="`View details for ${pin.title}`"
          @click="openPinView(pin)"
          @keydown.enter="openPinView(pin)"
        >
          <!-- Pin Media Box with Rounded Corners & Aspect Ratio -->
          <div class="pin-media" :class="[pin.aspectClass, 'theme-' + pin.theme]">
            <!-- Graphic Artwork Preview -->
            <div class="pin-graphic" :style="{ background: pin.gradient }">
              <!-- Top Pin Badge -->
              <div class="graphic-top-row">
                <span class="pin-code font-mono">{{ pin.code }}</span>
                <span class="pin-year font-mono">{{ pin.year }}</span>
              </div>

              <!-- Center Display Element -->
              <div class="graphic-center">
                <span class="pin-keyword font-pixel">{{ pin.pixelWord }}</span>
                <span v-if="pin.mockupType === 'chart'" class="micro-chart" aria-hidden="true">
                  <span class="bar bar-1" />
                  <span class="bar bar-2" />
                  <span class="bar bar-3" />
                  <span class="bar bar-4" />
                  <span class="bar bar-5" />
                </span>
                <span v-else-if="pin.mockupType === 'toggle'" class="micro-toggle" aria-hidden="true">
                  <span class="toggle-pill active" />
                  <span class="toggle-pill" />
                </span>
                <span v-else-if="pin.mockupType === 'code'" class="micro-code font-mono" aria-hidden="true">
                  <span>{ token: '$color-laterite' }</span>
                </span>
                <span v-else-if="pin.mockupType === 'stats'" class="micro-stats font-mono" aria-hidden="true">
                  <span class="stat-num">{{ pin.statVal || '99.9%' }}</span>
                  <span class="stat-lbl">{{ pin.statLbl || 'EFFICIENCY' }}</span>
                </span>
              </div>

              <!-- Bottom Graphic Metadata -->
              <div class="graphic-bottom-row">
                <span class="discipline-tag">{{ pin.categoryLabel }}</span>
              </div>
            </div>

            <!-- Pinterest Hover Overlay with White CTA Button -->
            <div class="pin-hover-overlay" aria-hidden="true">
              <!-- Clean Solid White CTA Pill (ONLY visible on hover) -->
              <button
                type="button"
                class="pin-hover-cta"
                tabindex="-1"
                @click.stop="openPinView(pin)"
              >
                <span>View</span>
                <span class="cta-arrow">↗</span>
              </button>
            </div>
          </div>

          <!-- Pin Text Details (Title & Subtext below Image, matching Pinterest) -->
          <div class="pin-info">
            <h2 class="pin-title">{{ pin.title }}</h2>
            <div class="pin-meta-row">
              <span class="pin-author">{{ pin.categoryLabel }} &middot; {{ pin.year }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- PINTEREST PIN DETAIL VIEW MODAL (EXPANDED VIEW SHEET) -->
    <Transition name="pin-modal-fade">
      <div
        v-if="activePin"
        class="pin-view-overlay"
        @click.self="closePinView"
        @keydown.esc="closePinView"
      >
        <div class="pin-view-sheet">
          <!-- Sheet Header Bar -->
          <div class="sheet-top-bar">
            <div class="sheet-meta">
              <span class="sheet-code font-mono">{{ activePin.code }}</span>
              <span class="sheet-divider">&bull;</span>
              <span class="sheet-cat">{{ activePin.categoryLabel }}</span>
              <span class="sheet-divider">&bull;</span>
              <span class="sheet-year font-mono">{{ activePin.year }}</span>
            </div>

            <button
              type="button"
              class="sheet-close-btn"
              aria-label="Close detailed view"
              @click="closePinView"
            >
              ✕
            </button>
          </div>

          <!-- Sheet Body: Two Columns (Visual Left + Editorial Right) -->
          <div class="sheet-body">
            <!-- Left: Hero Visual Showcase -->
            <div class="sheet-visual-showcase" :style="{ background: activePin.gradient }">
              <div class="showcase-watermark font-pixel">
                {{ activePin.pixelWord }}
              </div>
              <div v-if="activePin.statVal" class="showcase-metric font-mono">
                <span class="metric-big">{{ activePin.statVal }}</span>
                <span class="metric-small">{{ activePin.statLbl }}</span>
              </div>
            </div>

            <!-- Right: Editorial Content & Rationale -->
            <div class="sheet-content-panel">
              <h2 class="sheet-title font-serif">{{ activePin.title }}</h2>
              <p class="sheet-summary">{{ activePin.summary }}</p>

              <!-- Tags Cluster -->
              <div class="sheet-tags-section">
                <span class="section-label font-mono">DISCIPLINES &amp; TOOLS</span>
                <div class="sheet-tags-row">
                  <span v-for="tag in activePin.tags" :key="tag" class="sheet-tag-pill">
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Navigation & Case Study Actions -->
              <div class="sheet-action-footer">
                <!-- If Pin has a dedicated Case Study Page -->
                <button
                  v-if="activePin.hasCaseStudy && activePin.slug"
                  type="button"
                  class="read-case-study-btn"
                  @click="goToCaseStudy(activePin.slug)"
                >
                  <span>Read Full Case Study</span>
                  <span class="btn-arrow">↗</span>
                </button>

                <!-- Step Previous / Next Work -->
                <div class="sheet-nav-arrows">
                  <button
                    type="button"
                    class="nav-arrow-btn"
                    title="Previous item (Left Arrow)"
                    aria-label="Previous item"
                    @click="stepPin(-1)"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    class="nav-arrow-btn"
                    title="Next item (Right Arrow)"
                    aria-label="Next item"
                    @click="stepPin(1)"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Pinterest Category Filter Tabs (Left-aligned)
const categories = [
  { id: 'all', label: 'All' },
  { id: 'fintech', label: 'Fintech & Web3' },
  { id: 'systems', label: 'Design Systems' },
  { id: 'product', label: 'Product UX' },
  { id: 'ai', label: 'AI & Experiments' },
  { id: 'motion', label: 'Micro UI & Motion' }
];

const selectedCategory = ref<string>('all');

interface PinterestPin {
  id: number;
  slug?: string;
  code: string;
  title: string;
  category: 'fintech' | 'systems' | 'product' | 'ai' | 'motion';
  categoryLabel: string;
  year: string;
  aspectClass: 'aspect-tall' | 'aspect-medium' | 'aspect-extra-tall' | 'aspect-square' | 'aspect-wide';
  theme: 'dark' | 'terracotta' | 'paper' | 'moss' | 'navy';
  gradient: string;
  pixelWord: string;
  mockupType: 'chart' | 'toggle' | 'code' | 'stats' | 'none';
  statVal?: string;
  statLbl?: string;
  hasCaseStudy: boolean;
  summary: string;
  tags: string[];
}

// 22 Curated High-Fidelity Pins with Rich Editorial Overviews
const allPins: PinterestPin[] = [
  {
    id: 1,
    slug: 'payment-platform',
    code: '01 / SAAS',
    title: 'European Online Payment Platform',
    category: 'fintech',
    categoryLabel: 'Fintech',
    year: '2023',
    aspectClass: 'aspect-tall',
    theme: 'dark',
    gradient: 'linear-gradient(145deg, #181614 0%, #25221F 100%)',
    pixelWord: 'PAYMENT',
    mockupType: 'stats',
    statVal: '500K+',
    statLbl: 'ACTIVE USERS',
    hasCaseStudy: true,
    summary: 'Architecting high-volume cross-border checkout flows with progressive disclosure of fees and tactile validation states across European markets.',
    tags: ['Product UX', 'Fintech', 'Design Tokens', 'Checkout Flow']
  },
  {
    id: 2,
    slug: 'product-design-system',
    code: '02 / SYSTEM',
    title: 'Enterprise Multi-Tier Token Hierarchy',
    category: 'systems',
    categoryLabel: 'Design Systems',
    year: '2024',
    aspectClass: 'aspect-medium',
    theme: 'navy',
    gradient: 'linear-gradient(145deg, #111827 0%, #1F2937 100%)',
    pixelWord: 'TOKENS',
    mockupType: 'code',
    hasCaseStudy: true,
    summary: 'A unified three-layer token hierarchy (Primitive → Semantic → Component) governing 80+ accessible components across 10+ distributed teams.',
    tags: ['Tokens Studio', 'Figma Variables', 'WCAG AA', 'Design Tokens']
  },
  {
    id: 3,
    slug: 'crypto-wallet-vault',
    code: '03 / WEB3',
    title: 'Multi-Sig Cold Storage Vault Signing',
    category: 'fintech',
    categoryLabel: 'Web3 & Security',
    year: '2024',
    aspectClass: 'aspect-extra-tall',
    theme: 'dark',
    gradient: 'linear-gradient(160deg, #131211 0%, #221E1B 60%, #301F18 100%)',
    pixelWord: 'VAULT',
    mockupType: 'stats',
    statVal: '100%',
    statLbl: 'SIGNING SECURITY',
    hasCaseStudy: true,
    summary: 'Multi-signature air-gapped signing journey with transaction state simulation to prevent blind signing and phishing attacks.',
    tags: ['Multi-Sig', 'Cryptographic UX', 'Web3', 'Security']
  },
  {
    id: 4,
    slug: 'clinical-telemetry-dashboard',
    code: '04 / ICU',
    title: 'Clinical Telemetry Monitor & Vitals',
    category: 'product',
    categoryLabel: 'Clinical UX',
    year: '2024',
    aspectClass: 'aspect-square',
    theme: 'moss',
    gradient: 'linear-gradient(145deg, #152217 0%, #223525 100%)',
    pixelWord: 'VITALS',
    mockupType: 'chart',
    hasCaseStudy: true,
    summary: 'High-density ICU real-time patient monitor engineered with color-isolated alert tiers to prevent clinical alarm fatigue.',
    tags: ['Healthcare', 'Real-Time', 'High Density UI', 'Ergonomics']
  },
  {
    id: 5,
    slug: 'ai-workflow-canvas',
    code: '05 / AI CANVAS',
    title: 'Generative AI Node Workflow Canvas',
    category: 'ai',
    categoryLabel: 'Generative AI',
    year: '2024',
    aspectClass: 'aspect-wide',
    theme: 'dark',
    gradient: 'linear-gradient(145deg, #1F1410 0%, #3D1F16 100%)',
    pixelWord: 'WORKFLOW',
    mockupType: 'stats',
    statVal: '3x',
    statLbl: 'ITERATION LIFT',
    hasCaseStudy: true,
    summary: 'Node-based visual orchestration canvas allowing designers and engineers to chain LLMs, vector memory, and image generation tools seamlessly.',
    tags: ['Generative AI', 'Infinite Canvas', 'Node Graph', 'LLM UI']
  },
  {
    id: 6,
    slug: 'tokens-studio-cli',
    code: '06 / DEVTOOLS',
    title: 'Bidirectional Tokens Studio CLI Pipeline',
    category: 'systems',
    categoryLabel: 'Developer Tools',
    year: '2024',
    aspectClass: 'aspect-medium',
    theme: 'dark',
    gradient: 'linear-gradient(145deg, #18191E 0%, #2A2D35 100%)',
    pixelWord: 'PIPELINE',
    mockupType: 'code',
    hasCaseStudy: true,
    summary: 'Automated GitHub PR pipeline exporting Figma design tokens directly into SCSS and Tailwind variables with zero manual code changes.',
    tags: ['Automation', 'CLI', 'GitHub Actions', 'SCSS']
  },
  {
    id: 7,
    slug: 'hospitality-booking-flow',
    code: '07 / LUXURY',
    title: 'Hospitality Luxury Room Booking Flow',
    category: 'product',
    categoryLabel: 'Product UX',
    year: '2023',
    aspectClass: 'aspect-tall',
    theme: 'terracotta',
    gradient: 'linear-gradient(155deg, #7A2E19 0%, #A84325 100%)',
    pixelWord: 'BOOKING',
    mockupType: 'stats',
    statVal: '+18%',
    statLbl: 'CHECKOUT RATE',
    hasCaseStudy: true,
    summary: 'Eliminating friction in boutique luxury reservations with an ergonomic date picker, instant currency conversion, and visual suite comparison.',
    tags: ['Hospitality', 'Booking UX', 'Mobile First', 'Conversion']
  },
  {
    id: 8,
    slug: 'marketing-website',
    code: '08 / BRAND',
    title: 'Fintech Narrative Marketing Experience',
    category: 'fintech',
    categoryLabel: 'Brand & Web',
    year: '2022',
    aspectClass: 'aspect-extra-tall',
    theme: 'dark',
    gradient: 'linear-gradient(150deg, #101010 0%, #262422 100%)',
    pixelWord: 'EDITORIAL',
    mockupType: 'chart',
    hasCaseStudy: true,
    summary: 'Award-winning narrative marketing website with smooth GSAP animations, tactile micro-interactions, and 100% Lighthouse performance.',
    tags: ['Brand Identity', 'Editorial', 'Creative Dev', 'Motion']
  },
  {
    id: 9,
    slug: 'this-portfolio',
    code: '09 / PORTFOLIO',
    title: 'Dual-Mode Portfolio & Creative Dev',
    category: 'ai',
    categoryLabel: 'AI & Engineering',
    year: '2024',
    aspectClass: 'aspect-square',
    theme: 'dark',
    gradient: 'linear-gradient(145deg, #161514 0%, #282522 100%)',
    pixelWord: 'PORTAL',
    mockupType: 'toggle',
    hasCaseStudy: true,
    summary: 'An editorial design system with dual modes (Profile / Projects), frosted glass navigation capsules, and high-performance Vue 3 architecture.',
    tags: ['Vue 3', 'TypeScript', 'SCSS', 'Creative Development']
  },
  {
    id: 10,
    code: '10 / MOTION',
    title: 'Tactile Button Press States & Haptics',
    category: 'motion',
    categoryLabel: 'Motion Design',
    year: '2024',
    aspectClass: 'aspect-medium',
    theme: 'dark',
    gradient: 'linear-gradient(145deg, #1E1B18 0%, #352F2A 100%)',
    pixelWord: 'TACTILE',
    mockupType: 'toggle',
    hasCaseStudy: false,
    summary: 'Micro-interaction physics study modeling spring-damped button press depressions and surface resistance curves for mobile touch screens.',
    tags: ['Micro-Interactions', 'Spring Physics', 'Tactile UI']
  },
  {
    id: 11,
    code: '11 / GLASS',
    title: 'Liquid Glass Floating Navigation Pill',
    category: 'motion',
    categoryLabel: 'Micro UI',
    year: '2024',
    aspectClass: 'aspect-wide',
    theme: 'dark',
    gradient: 'linear-gradient(145deg, #1B1E22 0%, #2F3740 100%)',
    pixelWord: 'CAPSULE',
    mockupType: 'toggle',
    hasCaseStudy: false,
    summary: 'Refined neutral frosted glass capsule with bottom specular highlights and seamless sliding segmented thumb physics.',
    tags: ['Glassmorphism', 'CSS Shaders', 'iOS Physics']
  },
  {
    id: 12,
    slug: 'clinical-telemetry-dashboard',
    code: '12 / ALERTS',
    title: 'ICU Alarm Fatigue Suppression Matrix',
    category: 'product',
    categoryLabel: 'Healthcare UX',
    year: '2024',
    aspectClass: 'aspect-tall',
    theme: 'moss',
    gradient: 'linear-gradient(155deg, #172419 0%, #283F2B 100%)',
    pixelWord: 'MONITOR',
    mockupType: 'chart',
    hasCaseStudy: true,
    summary: 'Adaptive noise suppression algorithms mapped to patient condition stability tiers, reducing unnecessary nurse disruptions by 40%.',
    tags: ['Clinical Ergonomics', 'Medical Design', 'Alarm Fatigue']
  },
  {
    id: 13,
    slug: 'payment-platform',
    code: '13 / FX',
    title: 'Cross-Border FX Fee Transparency Modal',
    category: 'fintech',
    categoryLabel: 'Fintech',
    year: '2023',
    aspectClass: 'aspect-medium',
    theme: 'dark',
    gradient: 'linear-gradient(145deg, #1A1715 0%, #302A26 100%)',
    pixelWord: 'EXCHANGE',
    mockupType: 'stats',
    statVal: '0%',
    statLbl: 'HIDDEN FEES',
    hasCaseStudy: true,
    summary: 'Clear fee breakdown module displaying interbank exchange spreads, processing fees, and delivery timestamps in real time.',
    tags: ['Transparency', 'Fintech', 'Modal UX']
  },
  {
    id: 14,
    slug: 'ai-workflow-canvas',
    code: '14 / PROMPT',
    title: 'Multi-Agent LLM Prompt Playground',
    category: 'ai',
    categoryLabel: 'AI Tooling',
    year: '2024',
    aspectClass: 'aspect-extra-tall',
    theme: 'navy',
    gradient: 'linear-gradient(160deg, #111422 0%, #202742 100%)',
    pixelWord: 'AGENT',
    mockupType: 'code',
    hasCaseStudy: true,
    summary: 'Side-by-side prompt experimentation environment with token usage cost meters, latency gauges, and semantic similarity scoring.',
    tags: ['Prompt Engineering', 'AI Workspace', 'Evaluation']
  },
  {
    id: 15,
    slug: 'product-design-system',
    code: '15 / PALETTE',
    title: 'Dark Mode Contrast & Semantic Scales',
    category: 'systems',
    categoryLabel: 'Design Tokens',
    year: '2024',
    aspectClass: 'aspect-square',
    theme: 'dark',
    gradient: 'linear-gradient(145deg, #141414 0%, #2C2C2C 100%)',
    pixelWord: 'CONTRAST',
    mockupType: 'chart',
    hasCaseStudy: true,
    summary: 'Strict APCA and WCAG contrast ratio calculations ensuring accessible readability across both OLED dark backgrounds and oyster paper surfaces.',
    tags: ['Accessibility', 'APCA', 'Color Systems']
  },
  {
    id: 16,
    slug: 'crypto-wallet-vault',
    code: '16 / SHARD',
    title: 'Shamir Secret Sharing Key Recovery',
    category: 'fintech',
    categoryLabel: 'Web3 & Cryptography',
    year: '2024',
    aspectClass: 'aspect-tall',
    theme: 'dark',
    gradient: 'linear-gradient(155deg, #181413 0%, #332420 100%)',
    pixelWord: 'RECOVERY',
    mockupType: 'stats',
    statVal: '3 of 5',
    statLbl: 'SHARDS THRESHOLD',
    hasCaseStudy: true,
    summary: 'Social key reconstruction interface enabling non-technical users to securely recover cryptographic seeds without centralized custody.',
    tags: ['Cryptography', 'Key Management', 'Social Recovery']
  },
  {
    id: 17,
    slug: 'hospitality-booking-flow',
    code: '17 / SUITE',
    title: 'Room Tier Comparison & Amenities Grid',
    category: 'product',
    categoryLabel: 'Product UX',
    year: '2023',
    aspectClass: 'aspect-medium',
    theme: 'terracotta',
    gradient: 'linear-gradient(150deg, #87341D 0%, #B84B2B 100%)',
    pixelWord: 'PENTHOUSE',
    mockupType: 'stats',
    statVal: '4.9 ★',
    statLbl: 'GUEST RATING',
    hasCaseStudy: true,
    summary: 'Side-by-side suite comparison cards showcasing square footage, private terraces, and dining inclusions with instant date re-calculation.',
    tags: ['UI Design', 'Hospitality', 'Comparison Matrix']
  },
  {
    id: 18,
    code: '18 / TYPO',
    title: 'Editorial Typography & Scale System',
    category: 'systems',
    categoryLabel: 'Design Engineering',
    year: '2024',
    aspectClass: 'aspect-extra-tall',
    theme: 'paper',
    gradient: 'linear-gradient(160deg, #EBE8E1 0%, #D8D4CA 100%)',
    pixelWord: 'SERIF',
    mockupType: 'stats',
    statVal: '1.25',
    statLbl: 'MODULAR RATIO',
    hasCaseStudy: false,
    summary: 'Modular type scale pairing the literary dignity of Newsreader serif with Plus Jakarta Sans and Merriweather Sans display accents.',
    tags: ['Typography', 'Editorial', 'Design Engineering']
  },
  {
    id: 19,
    slug: 'clinical-telemetry-dashboard',
    code: '19 / ECG',
    title: 'Continuous ECG Rhythm Waveform Widget',
    category: 'product',
    categoryLabel: 'Healthcare UI',
    year: '2024',
    aspectClass: 'aspect-square',
    theme: 'moss',
    gradient: 'linear-gradient(145deg, #121F14 0%, #1F3323 100%)',
    pixelWord: 'RHYTHM',
    mockupType: 'chart',
    hasCaseStudy: true,
    summary: 'Hardware-accelerated SVG ECG canvas rendering multi-lead waveforms at 60 FPS with arrhythmia alert markers.',
    tags: ['ECG', 'Data Viz', 'Healthcare Technology']
  },
  {
    id: 20,
    slug: 'tokens-studio-cli',
    code: '20 / SYNC',
    title: 'GitHub PR Automated Token Sync Hook',
    category: 'systems',
    categoryLabel: 'Developer Tools',
    year: '2024',
    aspectClass: 'aspect-medium',
    theme: 'dark',
    gradient: 'linear-gradient(145deg, #15161A 0%, #23252E 100%)',
    pixelWord: 'ACTIONS',
    mockupType: 'code',
    hasCaseStudy: true,
    summary: 'Webhook integrating Figma plugin token diffs into automated pull request summaries with visual contrast delta checks.',
    tags: ['CI/CD', 'GitHub Actions', 'Design Tokens']
  },
  {
    id: 21,
    code: '21 / SPRING',
    title: 'Spring Physics Segmented Thumb Capsule',
    category: 'motion',
    categoryLabel: 'Micro Interaction',
    year: '2024',
    aspectClass: 'aspect-wide',
    theme: 'dark',
    gradient: 'linear-gradient(145deg, #1C1917 0%, #322B27 100%)',
    pixelWord: 'PHYSICS',
    mockupType: 'toggle',
    hasCaseStudy: false,
    summary: 'Damped spring equation `f = -k*x - c*v` providing tactile momentum when toggling between portfolio experiences.',
    tags: ['Physics', 'Animation', 'Mathematics']
  },
  {
    id: 22,
    slug: 'payment-platform',
    code: '22 / BILLING',
    title: 'Subscription Breakdown & Invoice Ledger',
    category: 'fintech',
    categoryLabel: 'Fintech',
    year: '2023',
    aspectClass: 'aspect-tall',
    theme: 'dark',
    gradient: 'linear-gradient(155deg, #151312 0%, #2A2420 100%)',
    pixelWord: 'LEDGER',
    mockupType: 'stats',
    statVal: '100%',
    statLbl: 'AUDIT COMPLIANT',
    hasCaseStudy: true,
    summary: 'Consolidated billing timeline with automated tax invoice PDF downloads and VAT exemption status flags.',
    tags: ['Billing', 'SaaS Accounting', 'Enterprise UX']
  }
];

// Computed filtered pins based on active tab
const filteredPins = computed(() => {
  if (selectedCategory.value === 'all') return allPins;
  return allPins.filter(p => p.category === selectedCategory.value);
});

// View Modal State
const activePin = ref<PinterestPin | null>(null);

const openPinView = (pin: PinterestPin) => {
  activePin.value = pin;
};

const closePinView = () => {
  activePin.value = null;
};

const stepPin = (step: number) => {
  if (!activePin.value) return;
  const list = filteredPins.value;
  const currentIndex = list.findIndex(p => p.id === activePin.value?.id);
  if (currentIndex === -1) return;
  const nextIndex = (currentIndex + step + list.length) % list.length;
  activePin.value = list[nextIndex];
};

const goToCaseStudy = (slug: string) => {
  router.push(`/work/${slug}`);
};

// Keyboard listener for Escape & Left/Right Arrows
const handleKeyDown = (e: KeyboardEvent) => {
  if (activePin.value) {
    if (e.key === 'Escape') {
      closePinView();
    } else if (e.key === 'ArrowRight') {
      stepPin(1);
    } else if (e.key === 'ArrowLeft') {
      stepPin(-1);
    }
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.pinterest-archive-page {
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-paper);
  color: var(--color-ink);
  // Ample top padding so filters are completely visible below the fixed site header
  padding-top: clamp(6.25rem, 9vw, 7.5rem);
  padding-bottom: 7rem;
  font-family: $font-family-sans;

  &.modal-open {
    overflow: hidden;
  }
}

.archive-container {
  max-width: 1720px;
  margin: 0 auto;
  padding-inline: clamp(1rem, 3.5vw, 2.5rem);
}

// ------------------------------------------
// EDITORIAL ARCHIVE INTRO HEADER
// ------------------------------------------
.archive-intro-header {
  margin-bottom: 2rem;
  max-width: 800px;

  .archive-headline {
    font-size: clamp(2rem, 3.8vw, 2.75rem);
    font-weight: 500;
    line-height: 1.15;
    letter-spacing: -0.025em;
    color: var(--color-ink);
    margin: 0 0 0.75rem 0;
  }

  .archive-description {
    font-size: clamp(0.9375rem, 1.2vw, 1.0625rem);
    line-height: 1.6;
    color: var(--color-muted);
    margin: 0;
    max-width: 640px;
  }
}

// ------------------------------------------
// PINTEREST FILTER TABS (LEFT-ALIGNED WITH UNDERLINE)
// ------------------------------------------
.pinterest-filter-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(220, 218, 212, 0.6);

  .filter-tabs-scroll {
    display: flex;
    align-items: center;
    gap: 1.75rem;
    overflow-x: auto;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 0.25rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .filter-tab-btn {
    position: relative;
    background: transparent;
    border: none;
    padding: 0.5rem 0.1rem;
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--color-muted);
    cursor: pointer;
    white-space: nowrap;
    transition: color 0.18s ease;

    &:hover {
      color: var(--color-ink);
    }

    &.is-active {
      color: var(--color-ink);
      font-weight: 700;

      .active-indicator {
        position: absolute;
        bottom: -0.55rem;
        left: 0;
        right: 0;
        height: 2.5px;
        background-color: var(--color-ink);
        border-radius: 9999px;
      }
    }
  }

  .filter-meta-count {
    font-size: 0.8125rem;
    color: var(--color-muted-light);
    white-space: nowrap;
    flex-shrink: 0;
  }
}

// ------------------------------------------
// PINTEREST MASONRY GRID (CSS MULTI-COLUMN)
// ------------------------------------------
.pinterest-masonry-grid {
  column-count: 5;
  column-gap: 16px;

  @media (max-width: 1540px) {
    column-count: 4;
  }

  @media (max-width: 1120px) {
    column-count: 3;
    column-gap: 14px;
  }

  @media (max-width: 720px) {
    column-count: 2;
    column-gap: 12px;
  }

  @media (max-width: 440px) {
    column-count: 2;
    column-gap: 10px;
  }
}

// ------------------------------------------
// PIN CARD COMPONENT
// ------------------------------------------
.pin-card {
  break-inside: avoid;
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
  outline: none;
  transition: transform 0.2s ease;

  &:focus-visible .pin-media {
    outline: 2px solid $color-laterite;
    outline-offset: 3px;
  }
}

// ------------------------------------------
// PIN MEDIA CONTAINER & HOVER EFFECTS
// ------------------------------------------
.pin-media {
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background-color: #141210;
  box-shadow: 0 1px 3px rgba(20, 18, 16, 0.05);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;

  // Staggered Aspect Ratios for organic Pinterest layout
  &.aspect-tall {
    aspect-ratio: 1 / 1.55;
  }
  &.aspect-medium {
    aspect-ratio: 1 / 1.32;
  }
  &.aspect-extra-tall {
    aspect-ratio: 1 / 1.82;
  }
  &.aspect-square {
    aspect-ratio: 1 / 1;
  }
  &.aspect-wide {
    aspect-ratio: 1 / 0.88;
  }

  // Hover dark dim overlay & show white CTA
  &:hover {
    box-shadow: 0 8px 24px rgba(20, 18, 16, 0.14);

    .pin-hover-overlay {
      opacity: 1;
    }

    .pin-hover-cta {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

// Graphic Artwork Surface
.pin-graphic {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 1.25rem 1.15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #FCFBF9;

  .graphic-top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.6875rem;
    opacity: 0.65;
    letter-spacing: 0.05em;
  }

  .graphic-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.75rem;
    padding: 1rem 0;

    .pin-keyword {
      font-size: clamp(1.25rem, 2.2vw, 1.85rem);
      font-weight: 800;
      letter-spacing: 0.08em;
      line-height: 1.1;
      opacity: 0.95;
      text-transform: uppercase;
    }

    // Micro UI Visuals
    .micro-chart {
      display: inline-flex;
      align-items: flex-end;
      gap: 4px;
      height: 24px;

      .bar {
        width: 4px;
        background: #E14B27;
        border-radius: 2px;
        opacity: 0.85;

        &.bar-1 { height: 40%; }
        &.bar-2 { height: 75%; }
        &.bar-3 { height: 50%; }
        &.bar-4 { height: 100%; }
        &.bar-5 { height: 60%; }
      }
    }

    .micro-toggle {
      display: inline-flex;
      background: rgba(255, 255, 255, 0.12);
      padding: 3px;
      border-radius: 9999px;
      gap: 3px;

      .toggle-pill {
        width: 18px;
        height: 10px;
        border-radius: 9999px;
        background: transparent;

        &.active {
          background: #FFFFFF;
        }
      }
    }

    .micro-code {
      font-size: 0.6875rem;
      background: rgba(0, 0, 0, 0.35);
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      opacity: 0.8;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .micro-stats {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;

      .stat-num {
        font-size: 1.35rem;
        font-weight: 700;
        color: #E14B27;
      }

      .stat-lbl {
        font-size: 0.625rem;
        letter-spacing: 0.08em;
        opacity: 0.65;
      }
    }
  }

  .graphic-bottom-row {
    display: flex;
    align-items: center;

    .discipline-tag {
      font-size: 0.6875rem;
      font-weight: 600;
      padding: 0.2rem 0.55rem;
      border-radius: 9999px;
      background: rgba(255, 255, 255, 0.14);
      backdrop-filter: blur(8px);
      letter-spacing: 0.02em;
    }
  }
}

// Light theme graphic overrides
.theme-paper .pin-graphic {
  color: #141210;

  .graphic-top-row {
    opacity: 0.5;
  }
  .discipline-tag {
    background: rgba(20, 18, 16, 0.08);
  }
  .micro-code {
    background: rgba(255, 255, 255, 0.7);
    border-color: rgba(20, 18, 16, 0.1);
  }
}

// ------------------------------------------
// PINTEREST HOVER OVERLAY (SOLID WHITE CTA BUTTON)
// ------------------------------------------
.pin-hover-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.28);
  opacity: 0;
  transition: opacity 0.22s ease;
  pointer-events: none;
  z-index: 5;

  // Solid White CTA Button (Clean high-contrast Pinterest aesthetic)
  .pin-hover-cta {
    position: absolute;
    top: 12px;
    right: 12px;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    background-color: #FFFFFF;
    color: #141210;
    border: none;
    border-radius: 9999px;
    padding: 0.52rem 1.05rem;
    font-size: 0.8125rem;
    font-weight: 600;
    font-family: var(--font-family-sans);
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.06);
    opacity: 0;
    transform: translateY(-4px);
    transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
                background-color 0.15s ease,
                box-shadow 0.15s ease;
    pointer-events: auto;

    &:hover {
      background-color: #F8F7F4;
      transform: translateY(-1px) scale(1.03);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.26);
    }

    .cta-arrow {
      font-size: 0.875rem;
      line-height: 1;
    }
  }
}

// ------------------------------------------
// PIN INFO BELOW IMAGE (TITLE & META)
// ------------------------------------------
.pin-info {
  margin-top: 8px;
  padding-inline: 4px;

  .pin-title {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.35;
    color: var(--color-ink);
    margin: 0 0 3px 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .pin-meta-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    .pin-author {
      font-size: 0.75rem;
      color: var(--color-muted);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

// ------------------------------------------
// PIN VIEW MODAL / EXPANDED VIEW SHEET
// ------------------------------------------
.pin-view-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(14, 12, 10, 0.72);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  touch-action: pan-y;
}

.pin-view-sheet {
  width: 100%;
  max-width: 860px;
  max-height: 88vh;
  overflow-y: auto;
  border-radius: 24px;
  background-color: #FCFBF9;
  border: 1px solid rgba(220, 218, 212, 0.8);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 105;
  animation: sheet-pop 0.28s cubic-bezier(0.16, 1, 0.3, 1);

  .sheet-top-bar {
    padding: 1.25rem 1.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(220, 218, 212, 0.5);

    .sheet-meta {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      color: var(--color-muted-light);

      .sheet-cat {
        font-weight: 600;
        color: $color-laterite;
      }
    }

    .sheet-close-btn {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background: rgba(20, 18, 16, 0.06);
      border: none;
      color: var(--color-ink);
      font-size: 0.85rem;
      display: grid;
      place-items: center;
      cursor: pointer;
      transition: background-color 0.15s ease, transform 0.15s ease;

      &:hover {
        background-color: rgba(20, 18, 16, 0.12);
        transform: scale(1.05);
      }
    }
  }

  .sheet-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 420px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .sheet-visual-showcase {
    padding: 2.5rem 1.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    color: #FCFBF9;

    .showcase-watermark {
      font-size: clamp(2.5rem, 5vw, 3.75rem);
      font-weight: 800;
      letter-spacing: 0.08em;
      opacity: 0.95;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
    }

    .showcase-metric {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      background: rgba(0, 0, 0, 0.32);
      backdrop-filter: blur(12px);
      padding: 0.65rem 1.25rem;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.15);

      .metric-big {
        font-size: 1.5rem;
        font-weight: 700;
        color: #E14B27;
      }

      .metric-small {
        font-size: 0.6875rem;
        letter-spacing: 0.08em;
        opacity: 0.8;
      }
    }
  }

  .sheet-content-panel {
    padding: 2rem 2rem 2.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .sheet-title {
      font-size: clamp(1.5rem, 2.8vw, 2rem);
      font-weight: 500;
      line-height: 1.2;
      color: var(--color-ink);
      margin: 0 0 1rem 0;
    }

    .sheet-summary {
      font-size: 0.9375rem;
      line-height: 1.6;
      color: var(--color-muted);
      margin: 0 0 1.5rem 0;
    }

    .sheet-tags-section {
      margin-bottom: 1.75rem;

      .section-label {
        font-size: 0.6875rem;
        color: var(--color-muted-light);
        letter-spacing: 0.06em;
        display: block;
        margin-bottom: 0.5rem;
      }

      .sheet-tags-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;

        .sheet-tag-pill {
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.25rem 0.65rem;
          border-radius: 9999px;
          background: rgba(20, 18, 16, 0.06);
          color: var(--color-ink);
        }
      }
    }

    .sheet-action-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding-top: 1.25rem;
      border-top: 1px solid rgba(220, 218, 212, 0.5);

      .read-case-study-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        background-color: var(--color-ink);
        color: #FCFBF9;
        border: none;
        padding: 0.65rem 1.35rem;
        border-radius: 9999px;
        font-size: 0.875rem;
        font-weight: 600;
        font-family: var(--font-family-sans);
        cursor: pointer;
        transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);

        &:hover {
          background-color: $color-laterite;
          transform: translateY(-1px);
        }

        .btn-arrow {
          font-size: 1rem;
        }
      }

      .sheet-nav-arrows {
        display: flex;
        align-items: center;
        gap: 0.4rem;

        .nav-arrow-btn {
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          background: rgba(20, 18, 16, 0.05);
          border: none;
          color: var(--color-ink);
          font-size: 1rem;
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: background-color 0.15s ease, transform 0.15s ease;

          &:hover {
            background-color: rgba(20, 18, 16, 0.1);
            transform: scale(1.06);
          }
        }
      }
    }
  }
}

@keyframes sheet-pop {
  0% {
    opacity: 0;
    transform: scale(0.94) translateY(10px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.pin-modal-fade-enter-active,
.pin-modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.pin-modal-fade-enter-from,
.pin-modal-fade-leave-to {
  opacity: 0;
}

// Empty State
.empty-state {
  text-align: center;
  padding: 4rem 1rem;

  .empty-text {
    font-size: 1rem;
    color: var(--color-muted);
    margin-bottom: 1.25rem;
  }

  .reset-btn {
    background: var(--color-ink);
    color: #FCFBF9;
    border: none;
    padding: 0.6rem 1.25rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
  }
}
</style>
