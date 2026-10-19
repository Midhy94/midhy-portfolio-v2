<script setup lang="ts">
import { ref } from 'vue';
import { ArrowRight } from 'lucide-vue-next';
import { useUiStore } from '@/stores/ui.store';

const uiStore = useUiStore();
const newsletterEmail = ref('');
const subscribed = ref(false);

function handleSubscribe() {
  if (!newsletterEmail.value || !newsletterEmail.value.includes('@')) {
    uiStore.addToast('Please enter a valid email address', 'error');
    return;
  }
  subscribed.value = true;
  uiStore.addToast('Thank you for subscribing to the design notes!', 'success');
  newsletterEmail.value = '';
}

// 4 Service Offerings matching Faizur's "Here's how I can help you"
const services = [
  {
    num: '01',
    title: 'Product Design & UX Strategy',
    desc: 'End-to-end UX research, user journey mapping, and conversion-focused interface architecture for web and mobile platforms.',
    badge: null,
    link: '/contact',
  },
  {
    num: '02',
    title: 'Design systems & component libraries',
    desc: 'Scalable multi-brand design systems, token architecture, and production-ready Vue/React components for engineering velocity.',
    badge: null,
    link: '/work',
  },
  {
    num: '03',
    title: 'Book a 1:1 strategy session',
    desc: 'Deep-dive heuristic review of your existing product usability, checkout friction, and conversion bottlenecks.',
    badge: '1 spot left',
    link: '/contact',
  },
  {
    num: '04',
    title: 'Hire me as your product design partner',
    desc: 'Dedicated monthly design leadership for fast-growing startups and scaling tech companies.',
    badge: null,
    link: '/contact',
  },
];

// 4 Story Photos/Mockups matching Faizur's 4-photo gallery
const storyPhotos = [
  {
    src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
    alt: 'Midhun at design workstation architecting interface systems',
    caption: 'Figma Token Modeling',
  },
  {
    src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80',
    alt: 'Mobile UX prototyping and user journey mapping',
    caption: 'Mobile UX Testing',
  },
  {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    alt: 'Design system collaboration with engineering squads',
    caption: 'Design System Governance',
  },
  {
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
    alt: 'Code inspection and design-to-code velocity handoff',
    caption: 'Frontend Handshake',
  },
];

// Articles / Solo Letters matching Faizur's list
const articles = [
  {
    id: 1,
    title: 'How we reduced checkout drop-off by 40% on a European payment platform',
    excerpt: 'Detailed UX analysis on micro-interactions, trust architecture, and progressive disclosure in multi-currency transactions.',
    time: '6 min read',
    date: 'Oct 2026',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=400&q=80',
    slug: 'european-payment-platform',
  },
  {
    id: 2,
    title: 'Building multi-brand design tokens that frontend engineers actually love',
    excerpt: 'The three-layer token structure (primitive → semantic → component) that accelerated development cycles by 25%.',
    time: '8 min read',
    date: 'Sep 2026',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80',
    slug: 'enterprise-design-system',
  },
  {
    id: 3,
    title: 'Using AI to accelerate product design without losing human craftsmanship',
    excerpt: 'Practical workflows integrating LLMs into user research synthesis, wireframe stress-testing, and rapid prototyping.',
    time: '5 min read',
    date: 'Aug 2026',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80',
    slug: 'ai-design-velocity',
  },
];

// 3 Featured Resources / Case Studies matching Faizur's 3-column grid
const featuredWork = [
  {
    id: 'euro-pay',
    title: 'European Online Payment Platform',
    category: 'Fintech & Transaction Flow',
    desc: 'Architected UI/UX serving 500,000+ European users with multi-currency checkout and strict financial trust standards.',
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
    tag: '500K+ Users',
    slug: 'european-payment-platform',
  },
  {
    id: 'telehealth',
    title: 'Enterprise Telehealth & Clinical SaaS',
    category: 'Healthcare & Clinical Flow',
    desc: 'HIPAA-compliant patient consultation suite and provider portal with low-latency video UX and EHR sync.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    tag: 'HIPAA Compliant',
    slug: 'telehealth-clinical-platform',
  },
  {
    id: 'hospitality',
    title: 'Hospitality Online Menu & Ordering',
    category: 'Hospitality & Foodtech',
    desc: 'Guest ordering flow and interactive menu redesign that achieved a measured 40% reduction in customer drop-off.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    tag: '40% Drop-off Cut',
    slug: 'hospitality-menu-redesign',
  },
];
</script>

<template>
  <div class="home-page">
    <div class="container home-container">
      <!-- ============================================================== -->
      <!-- SECTION 1: THE FAIZUR-STYLE HERO SPLIT CARD                     -->
      <!-- ============================================================== -->
      <section class="hero-split-card" aria-label="Hero Introduction">
        <div class="hero-split-card__inner">
          <!-- Left Column: Moody Dark Text Narrative -->
          <div class="hero-split-card__content">
            <p class="hero-script">Hey friends,</p>
            <h1 class="hero-title">I'm Midhun</h1>
            <p class="hero-bio">
              A Senior UI/UX &amp; Product Designer based in India. I help companies build
              high-impact digital experiences, enterprise design systems, and modern web platforms.
            </p>
          </div>

          <!-- Right Column: Seamless Dark Portrait -->
          <div class="hero-split-card__media">
            <div class="portrait-frame">
              <img
                src="/images/designer-portrait.png"
                alt="Midhun M — Senior UI/UX & Product Designer"
                class="portrait-img"
              />
            </div>
          </div>
        </div>

        <!-- Hero Bottom Strip: Client & Credential Monochrome Badges -->
        <div class="hero-split-card__footer">
          <div class="brand-item">TECHGENTSIA</div>
          <div class="brand-item">EUROPEAN PAYMENTS</div>
          <div class="brand-item">ENTERPRISE SAAS</div>
          <div class="brand-item">FINTECH CORE</div>
          <div class="brand-item">GOOGLE UX CERTIFIED</div>
        </div>
      </section>

      <!-- ============================================================== -->
      <!-- SECTION 2: NEWSLETTER / DESIGN NOTES STRIP                     -->
      <!-- ============================================================== -->
      <section class="notes-strip" aria-label="Design Notes Newsletter">
        <div class="notes-strip__left">
          <span class="micro-eyebrow">JOIN 5,000+ DESIGNERS &amp; BUILDERS</span>
          <h2 class="notes-strip__title">
            I share practical design notes &amp; UI architecture that drive results.
          </h2>
          <p class="notes-strip__desc">
            Every week, I break down real client problems, design system strategies,
            and AI workflows that helped scale products to 500k+ users.
          </p>
        </div>

        <div class="notes-strip__right">
          <form class="subscribe-form" @submit.prevent="handleSubscribe">
            <input
              v-model="newsletterEmail"
              type="email"
              placeholder="Email address"
              class="subscribe-input"
              required
            />
            <button type="submit" class="subscribe-btn">
              <span>Get the design notes</span>
            </button>
          </form>
          <p class="subscribe-subtext">No spam, unsubscribe anytime.</p>
        </div>
      </section>

      <!-- ============================================================== -->
      <!-- SECTION 3: HERE'S HOW I CAN HELP YOU                           -->
      <!-- ============================================================== -->
      <section class="help-section" aria-label="Services and Collaboration">
        <div class="help-section__left">
          <span class="micro-eyebrow">SERVICES &amp; COLLABORATION</span>
          <h2 class="help-headline">
            Here's how<br />
            I can help <span class="highlight-red">you</span>
          </h2>
        </div>

        <div class="help-section__right">
          <div class="services-list">
            <router-link
              v-for="service in services"
              :key="service.num"
              :to="service.link"
              class="service-row"
            >
              <div class="service-row__num">{{ service.num }}</div>
              <div class="service-row__body">
                <div class="service-row__header">
                  <h3 class="service-row__title">{{ service.title }}</h3>
                  <span v-if="service.badge" class="pill-badge">{{ service.badge }}</span>
                </div>
                <p class="service-row__desc">{{ service.desc }}</p>
              </div>
              <div class="service-row__arrow">
                <ArrowRight :size="18" />
              </div>
            </router-link>
          </div>
        </div>
      </section>

      <!-- ============================================================== -->
      <!-- SECTION 4: STORY & 4-PHOTO GALLERY                             -->
      <!-- ============================================================== -->
      <section class="story-section" aria-label="About Story & Work Gallery">
        <div class="story-header">
          <span class="micro-eyebrow">ABOUT</span>
          <h2 class="story-headline">
            From enterprise engineering<br />
            to 10+ years designing products used by millions
          </h2>
        </div>

        <!-- 4 Vertical Rounded Photos/Visuals in a Row -->
        <div class="gallery-row">
          <div
            v-for="(photo, index) in storyPhotos"
            :key="index"
            class="gallery-card"
          >
            <img :src="photo.src" :alt="photo.alt" class="gallery-card__img" />
            <div class="gallery-card__tag">{{ photo.caption }}</div>
          </div>
        </div>

        <!-- 2 Text Columns Below Gallery -->
        <div class="story-columns">
          <div class="story-col story-col--lead">
            <p>
              I started my journey crafting digital interfaces back in 2014. Over the past decade,
              I've served as Lead UI/UX Designer, Senior Product Designer, and Design Systems Architect
              for enterprise fintechs and SaaS startups.
            </p>
            <p>
              Today, I partner with ambitious founders and engineering leaders to design products
              that solve complex problems and drive business growth.
            </p>
          </div>

          <div class="story-col story-col--body">
            <p>
              My approach bridges the gap between high-aesthetic craft and production engineering.
              Having worked closely with frontend developers across Vue, React, and design token pipelines,
              I ensure what we design actually gets built with precision.
            </p>
            <p>
              I've led design initiatives for European multi-currency payment platforms serving
              500k+ users, reducing checkout drop-off by 40% and accelerating engineering velocity.
            </p>
            <p>
              Based in Alappuzha, Kerala, I work with clients globally across Europe, North America,
              and Asia.
            </p>

            <router-link to="/about" class="editorial-read-link">
              <span>Read full story</span>
              <ArrowRight :size="14" />
            </router-link>
          </div>
        </div>
      </section>

      <!-- ============================================================== -->
      <!-- SECTION 5: WEEKLY DESIGN NOTES & FEATURED PLAYBOOK             -->
      <!-- ============================================================== -->
      <section class="writing-section" aria-label="Recent Writing & Resources">
        <div class="writing-layout">
          <!-- Left: 3 Articles List -->
          <div class="writing-list-col">
            <span class="micro-eyebrow">RECENT WRITING</span>
            <h2 class="writing-heading">Weekly design notes</h2>

            <div class="articles-stack">
              <router-link
                v-for="item in articles"
                :key="item.id"
                :to="`/work/${item.slug}`"
                class="article-card"
              >
                <div class="article-card__thumb">
                  <img :src="item.image" :alt="item.title" />
                </div>
                <div class="article-card__info">
                  <h3 class="article-card__title">{{ item.title }}</h3>
                  <p class="article-card__excerpt">{{ item.excerpt }}</p>
                  <div class="article-card__meta">
                    <span>{{ item.time }}</span>
                    <span>•</span>
                    <span>{{ item.date }}</span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>

          <!-- Right: Book / Playbook Resource Card -->
          <div class="playbook-col">
            <span class="micro-eyebrow">FEATURED RESOURCE</span>
            <div class="playbook-card">
              <div class="playbook-cover">
                <div class="playbook-cover__inner">
                  <span class="playbook-tag">GUIDE</span>
                  <p class="playbook-title-mock">THE PRODUCT DESIGN PLAYBOOK</p>
                  <p class="playbook-sub-mock">Token Architecture &amp; Scalability</p>
                  <span class="playbook-author-mock">Midhun M.</span>
                </div>
              </div>

              <div class="playbook-details">
                <h3 class="playbook-name">The Product Design Playbook</h3>
                <p class="playbook-desc">
                  A 45-page tactical guide to designing scalable web applications, token systems,
                  and rapid design-to-code velocity.
                </p>
                <a
                  href="/resume/Midhun_M_Resume.pdf"
                  download="Midhun_M_Resume.pdf"
                  class="playbook-download-btn"
                >
                  <span>Download Free</span>
                  <ArrowRight :size="14" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================================== -->
      <!-- SECTION 6: CHECK OUT FEATURED WORK (3-COLUMN GRID)             -->
      <!-- ============================================================== -->
      <section class="resources-section" aria-label="Featured Work">
        <div class="resources-header">
          <span class="micro-eyebrow">• SELECTED WORK &amp; CASE STUDIES •</span>
          <h2 class="resources-title">Check out featured work</h2>
        </div>

        <div class="resources-grid">
          <router-link
            v-for="item in featuredWork"
            :key="item.id"
            :to="`/work/${item.slug}`"
            class="resource-card"
          >
            <div class="resource-card__preview">
              <img :src="item.image" :alt="item.title" />
              <span class="resource-badge">{{ item.tag }}</span>
            </div>
            <div class="resource-card__content">
              <span class="resource-cat">{{ item.category }}</span>
              <h3 class="resource-card__title">{{ item.title }}</h3>
              <p class="resource-card__desc">{{ item.desc }}</p>
              <div class="resource-card__footer">
                <span class="read-action">
                  <span>Explore Case Study</span>
                  <ArrowRight :size="14" />
                </span>
              </div>
            </div>
          </router-link>
        </div>
      </section>

      <!-- ============================================================== -->
      <!-- SECTION 7: SOFT WARM STUDIO CTA CARD                           -->
      <!-- ============================================================== -->
      <section class="studio-cta" aria-label="Collaboration Call to Action">
        <div class="studio-cta__card">
          <span class="studio-cta__tag">The Design Studio</span>
          <h2 class="studio-cta__headline">
            A personal partner for teams creating digital products that matter.
          </h2>
          <p class="studio-cta__sub">
            Get in touch to discuss your next product launch, interface redesign,
            or design system architecture.
          </p>
          <router-link to="/contact" class="studio-cta__btn">
            <span>Let's work together</span>
            <ArrowRight :size="16" />
          </router-link>
          <p class="studio-cta__note">Typically replies within 24 hours.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.home-page {
  padding-bottom: var(--space-16);
}

.home-container {
  display: flex;
  flex-direction: column;
  gap: var(--space-16);

  @include respond-to('md') {
    gap: var(--space-20, 100px);
  }
}

// -----------------------------------------------------------------------------
// Shared Micro Eyebrow
// -----------------------------------------------------------------------------
.micro-eyebrow {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted, #787672);
  margin-bottom: var(--space-3);
  font-weight: 500;
}

// -----------------------------------------------------------------------------
// SECTION 1: THE FAIZUR-STYLE HERO SPLIT CARD
// -----------------------------------------------------------------------------
.hero-split-card {
  background: radial-gradient(circle at 30% 30%, #1c1b1a 0%, #0d0c0c 70%);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 28px;
  overflow: hidden;
  color: #ffffff;
  box-shadow: 0 20px 48px -12px rgba(0, 0, 0, 0.35);

  &__inner {
    display: grid;
    grid-template-columns: 1fr;
    min-height: 480px;

    @include respond-to('md') {
      grid-template-columns: 1.15fr 0.85fr;
      align-items: stretch;
    }
  }

  &__content {
    padding: var(--space-10) var(--space-8);
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include respond-to('md') {
      padding: var(--space-16) var(--space-14);
    }

    .hero-script {
      font-family: var(--font-script);
      font-size: 2.25rem;
      color: var(--color-accent-terracotta, #d95732);
      line-height: 1;
      margin-bottom: var(--space-2);
      transform: rotate(-1deg);
    }

    .hero-title {
      font-family: var(--font-serif);
      font-size: clamp(3rem, 6vw, 4.75rem);
      font-weight: 700;
      color: #ffffff;
      line-height: 1.05;
      letter-spacing: -0.02em;
      margin-bottom: var(--space-6);
    }

    .hero-bio {
      font-family: var(--font-sans);
      font-size: clamp(1rem, 1.25vw, 1.125rem);
      line-height: 1.6;
      color: #a6a4a0;
      max-width: 480px;
    }
  }

  &__media {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 60% 50%, #201e1d 0%, transparent 60%);

    .portrait-frame {
      width: 100%;
      max-width: 420px;
      height: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }

    .portrait-img {
      width: 100%;
      height: 100%;
      max-height: 520px;
      object-fit: cover;
      object-position: top center;
      display: block;
      filter: contrast(1.04) brightness(0.96);
    }
  }

  &__footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    gap: var(--space-4);
    padding: var(--space-5) var(--space-8);
    background-color: rgba(0, 0, 0, 0.4);
    border-top: 1px solid rgba(255, 255, 255, 0.08);

    .brand-item {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      color: rgba(255, 255, 255, 0.55);
      transition: color 0.2s ease;

      &:hover {
        color: #ffffff;
      }
    }
  }
}

// -----------------------------------------------------------------------------
// SECTION 2: NEWSLETTER / DESIGN NOTES STRIP
// -----------------------------------------------------------------------------
.notes-strip {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
  padding: var(--space-10) 0;
  border-top: 1px solid var(--color-border, rgba(0, 0, 0, 0.08));
  border-bottom: 1px solid var(--color-border, rgba(0, 0, 0, 0.08));

  @include respond-to('md') {
    grid-template-columns: 1.25fr 1fr;
    align-items: center;
    gap: var(--space-12);
  }

  &__title {
    font-family: var(--font-serif);
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    font-weight: 700;
    line-height: 1.25;
    color: var(--color-text-primary, #111010);
    margin-bottom: var(--space-3);
  }

  &__desc {
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--color-text-secondary, #4a4947);
    max-width: 520px;
  }

  .subscribe-form {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);

    @include respond-to('sm') {
      flex-direction: row;
    }
  }

  .subscribe-input {
    flex: 1;
    padding: 13px 18px;
    border-radius: 999px;
    border: 1px solid var(--color-border-strong, rgba(0, 0, 0, 0.16));
    background-color: var(--color-bg-page, #ffffff);
    color: var(--color-text-primary, #111010);
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    transition: border-color 0.2s ease;

    &:focus {
      outline: none;
      border-color: var(--color-text-primary, #111010);
    }
  }

  .subscribe-btn {
    padding: 13px 24px;
    border-radius: 999px;
    background-color: #111010;
    color: #ffffff;
    border: none;
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    transition: background-color 0.2s ease, transform 0.15s ease;

    &:hover {
      background-color: #262524;
      transform: translateY(-1px);
    }
  }

  .subscribe-subtext {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    color: var(--color-text-muted, #787672);
    margin-top: var(--space-2);
  }
}

// -----------------------------------------------------------------------------
// SECTION 3: HERE'S HOW I CAN HELP YOU
// -----------------------------------------------------------------------------
.help-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
  padding: var(--space-8) 0;

  @include respond-to('md') {
    grid-template-columns: 0.85fr 1.15fr;
    gap: var(--space-14);
    align-items: flex-start;
  }

  .help-headline {
    font-family: var(--font-serif);
    font-size: clamp(2.25rem, 4.5vw, 3.5rem);
    font-weight: 700;
    line-height: 1.1;
    color: var(--color-text-primary, #111010);

    .highlight-red {
      color: var(--color-accent-terracotta, #d95732);
      font-style: italic;
    }
  }

  .services-list {
    display: flex;
    flex-direction: column;
  }

  .service-row {
    display: grid;
    grid-template-columns: 36px 1fr 28px;
    gap: var(--space-4);
    align-items: flex-start;
    padding: var(--space-6) 0;
    border-top: 1px solid var(--color-border, rgba(0, 0, 0, 0.08));
    text-decoration: none;
    color: inherit;
    transition: background-color 0.2s ease, padding 0.2s ease;

    &:last-child {
      border-bottom: 1px solid var(--color-border, rgba(0, 0, 0, 0.08));
    }

    &:hover {
      .service-row__title {
        color: var(--color-accent-terracotta, #d95732);
      }
      .service-row__arrow {
        transform: translateX(4px);
        color: var(--color-accent-terracotta, #d95732);
      }
    }

    &__num {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--color-text-muted, #787672);
      padding-top: 3px;
    }

    &__header {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      margin-bottom: var(--space-2);
    }

    &__title {
      font-family: var(--font-sans);
      font-size: 1.1875rem;
      font-weight: 600;
      color: var(--color-text-primary, #111010);
      transition: color 0.2s ease;
    }

    &__desc {
      font-family: var(--font-sans);
      font-size: 0.875rem;
      line-height: 1.55;
      color: var(--color-text-secondary, #4a4947);
      max-width: 480px;
    }

    &__arrow {
      color: var(--color-text-muted, #787672);
      display: flex;
      justify-content: flex-end;
      padding-top: 4px;
      transition: transform 0.2s ease, color 0.2s ease;
    }
  }

  .pill-badge {
    font-family: var(--font-mono);
    font-size: 0.625rem;
    padding: 2px 8px;
    border-radius: 999px;
    background-color: var(--color-accent-terracotta-soft, rgba(217, 87, 50, 0.1));
    color: var(--color-accent-terracotta, #d95732);
    font-weight: 600;
    text-transform: uppercase;
  }
}

// -----------------------------------------------------------------------------
// SECTION 4: STORY & 4-PHOTO GALLERY
// -----------------------------------------------------------------------------
.story-section {
  padding: var(--space-10) 0;

  .story-header {
    margin-bottom: var(--space-8);
  }

  .story-headline {
    font-family: var(--font-serif);
    font-size: clamp(2rem, 3.8vw, 3.25rem);
    font-weight: 700;
    line-height: 1.15;
    color: var(--color-accent-terracotta, #d95732);
    max-width: 820px;
  }

  .gallery-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
    margin-bottom: var(--space-12);

    @include respond-to('md') {
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-5);
    }
  }

  .gallery-card {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    aspect-ratio: 3 / 4;
    background-color: var(--color-bg-surface, #f4f3f0);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.4s ease;

      &:hover {
        transform: scale(1.03);
      }
    }

    &__tag {
      position: absolute;
      bottom: 10px;
      left: 10px;
      right: 10px;
      background: rgba(17, 16, 16, 0.7);
      backdrop-filter: blur(8px);
      padding: 4px 10px;
      border-radius: 8px;
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      color: #ffffff;
      text-align: center;
    }
  }

  .story-columns {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-8);

    @include respond-to('md') {
      grid-template-columns: 1fr 1.25fr;
      gap: var(--space-14);
    }
  }

  .story-col {
    font-family: var(--font-sans);
    line-height: 1.7;

    p {
      margin-bottom: var(--space-5);
    }

    &--lead {
      font-size: 1.125rem;
      font-weight: 500;
      color: var(--color-text-primary, #111010);
    }

    &--body {
      font-size: 0.9375rem;
      color: var(--color-text-secondary, #4a4947);
    }
  }

  .editorial-read-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--color-accent-terracotta, #d95732);
    text-decoration: none;
    margin-top: var(--space-2);
    transition: transform 0.2s ease;

    &:hover {
      transform: translateX(4px);
    }
  }
}

// -----------------------------------------------------------------------------
// SECTION 5: WEEKLY DESIGN NOTES & FEATURED PLAYBOOK
// -----------------------------------------------------------------------------
.writing-section {
  padding: var(--space-10) 0;
  border-top: 1px solid var(--color-border, rgba(0, 0, 0, 0.08));

  .writing-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-10);

    @include respond-to('md') {
      grid-template-columns: 1.35fr 0.85fr;
      gap: var(--space-12);
    }
  }

  .writing-heading {
    font-family: var(--font-serif);
    font-size: 2.25rem;
    font-weight: 700;
    color: var(--color-text-primary, #111010);
    margin-bottom: var(--space-8);
  }

  .articles-stack {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
  }

  .article-card {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: var(--space-5);
    align-items: center;
    text-decoration: none;
    padding-bottom: var(--space-6);
    border-bottom: 1px solid var(--color-border, rgba(0, 0, 0, 0.08));

    @include respond-to('sm') {
      grid-template-columns: 110px 1fr;
    }

    &__thumb {
      width: 100%;
      aspect-ratio: 1;
      border-radius: 12px;
      overflow: hidden;
      background-color: var(--color-bg-surface, #f4f3f0);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__title {
      font-family: var(--font-sans);
      font-size: 1.0625rem;
      font-weight: 600;
      line-height: 1.35;
      color: var(--color-text-primary, #111010);
      margin-bottom: var(--space-2);
      transition: color 0.15s ease;
    }

    &:hover &__title {
      color: var(--color-accent-terracotta, #d95732);
    }

    &__excerpt {
      font-family: var(--font-sans);
      font-size: 0.8125rem;
      line-height: 1.5;
      color: var(--color-text-secondary, #4a4947);
      margin-bottom: var(--space-2);
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    &__meta {
      display: flex;
      gap: var(--space-2);
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      color: var(--color-text-muted, #787672);
    }
  }

  // Playbook Card
  .playbook-card {
    background-color: var(--color-bg-card, #fbfbfa);
    border: 1px solid var(--color-border, rgba(0, 0, 0, 0.08));
    border-radius: 20px;
    padding: var(--space-8);
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
    align-items: center;
    text-align: center;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
  }

  .playbook-cover {
    width: 160px;
    aspect-ratio: 1 / 1.4;
    background: linear-gradient(135deg, #1f1e1d 0%, #111010 100%);
    border-radius: 10px;
    box-shadow: 0 12px 24px -4px rgba(0, 0, 0, 0.3);
    padding: 16px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__inner {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
    }

    .playbook-tag {
      font-family: var(--font-mono);
      font-size: 0.5625rem;
      background: var(--color-accent-terracotta, #d95732);
      padding: 2px 6px;
      border-radius: 4px;
      align-self: flex-start;
      letter-spacing: 0.08em;
    }

    .playbook-title-mock {
      font-family: var(--font-sans);
      font-size: 0.8125rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      line-height: 1.2;
    }

    .playbook-sub-mock {
      font-family: var(--font-sans);
      font-size: 0.5625rem;
      color: #a6a4a0;
    }

    .playbook-author-mock {
      font-family: var(--font-mono);
      font-size: 0.625rem;
      color: #787672;
    }
  }

  .playbook-name {
    font-family: var(--font-serif);
    font-size: 1.375rem;
    font-weight: 700;
    color: var(--color-text-primary, #111010);
    margin-bottom: var(--space-2);
  }

  .playbook-desc {
    font-family: var(--font-sans);
    font-size: 0.875rem;
    line-height: 1.5;
    color: var(--color-text-secondary, #4a4947);
    margin-bottom: var(--space-4);
  }

  .playbook-download-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 10px 20px;
    border-radius: 999px;
    background-color: #111010;
    color: #ffffff;
    text-decoration: none;
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    font-weight: 500;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: var(--color-accent-terracotta, #d95732);
    }
  }
}

// -----------------------------------------------------------------------------
// SECTION 6: CHECK OUT FEATURED WORK (3-COLUMN GRID)
// -----------------------------------------------------------------------------
.resources-section {
  padding: var(--space-10) 0;

  .resources-header {
    text-align: center;
    margin-bottom: var(--space-10);
  }

  .resources-title {
    font-family: var(--font-serif);
    font-size: clamp(2rem, 3.5vw, 2.75rem);
    font-weight: 700;
    color: var(--color-text-primary, #111010);
  }

  .resources-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-6);

    @include respond-to('md') {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .resource-card {
    background-color: var(--color-bg-card, #fbfbfa);
    border: 1px solid var(--color-border, rgba(0, 0, 0, 0.08));
    border-radius: 20px;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    transition: transform 0.25s ease, box-shadow 0.25s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 32px -8px rgba(0, 0, 0, 0.08);

      .read-action {
        color: var(--color-accent-terracotta, #d95732);
        transform: translateX(4px);
      }
    }

    &__preview {
      position: relative;
      aspect-ratio: 16 / 10;
      background-color: var(--color-bg-surface, #f4f3f0);
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .resource-badge {
        position: absolute;
        top: 12px;
        right: 12px;
        background: rgba(17, 16, 16, 0.8);
        backdrop-filter: blur(8px);
        color: #ffffff;
        font-family: var(--font-mono);
        font-size: 0.625rem;
        font-weight: 500;
        padding: 3px 8px;
        border-radius: 6px;
      }
    }

    &__content {
      padding: var(--space-6);
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .resource-cat {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--color-accent-terracotta, #d95732);
      margin-bottom: var(--space-2);
      display: block;
    }

    &__title {
      font-family: var(--font-serif);
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--color-text-primary, #111010);
      line-height: 1.3;
      margin-bottom: var(--space-2);
    }

    &__desc {
      font-family: var(--font-sans);
      font-size: 0.875rem;
      line-height: 1.5;
      color: var(--color-text-secondary, #4a4947);
      margin-bottom: var(--space-4);
      flex: 1;
    }

    &__footer {
      border-top: 1px solid var(--color-border-subtle, rgba(0, 0, 0, 0.04));
      padding-top: var(--space-4);

      .read-action {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-family: var(--font-sans);
        font-size: 0.8125rem;
        font-weight: 600;
        color: var(--color-text-primary, #111010);
        transition: transform 0.2s ease, color 0.2s ease;
      }
    }
  }
}

// -----------------------------------------------------------------------------
// SECTION 7: SOFT WARM STUDIO CTA CARD
// -----------------------------------------------------------------------------
.studio-cta {
  padding: var(--space-6) 0;

  &__card {
    background-color: #f7f6f3;
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 28px;
    padding: var(--space-14) var(--space-8);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-4);

    @include respond-to('md') {
      padding: var(--space-18) var(--space-16);
    }
  }

  &__tag {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-text-muted, #787672);
  }

  &__headline {
    font-family: var(--font-serif);
    font-size: clamp(2rem, 3.8vw, 3.25rem);
    font-weight: 700;
    color: var(--color-text-primary, #111010);
    max-width: 680px;
    line-height: 1.15;
  }

  &__sub {
    font-family: var(--font-sans);
    font-size: clamp(0.9375rem, 1.2vw, 1.0625rem);
    line-height: 1.6;
    color: var(--color-text-secondary, #4a4947);
    max-width: 520px;
    margin-bottom: var(--space-3);
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 15px 32px;
    border-radius: 999px;
    background-color: #111010;
    color: #ffffff;
    font-family: var(--font-sans);
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    transition: background-color 0.2s ease, transform 0.15s ease;

    &:hover {
      background-color: var(--color-accent-terracotta, #d95732);
      transform: translateY(-2px);
    }
  }

  &__note {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    color: var(--color-text-muted, #787672);
  }
}
</style>
