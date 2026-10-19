<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next';

const currentYear = new Date().getFullYear();

// Authentic URLs extracted directly from Midhun_M_Resume.pdf
const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/midhy/' },
  { name: 'Behance', url: 'https://www.behance.net/midhy' },
  { name: 'Dribbble', url: 'https://dribbble.com/midhy' },
  { name: 'Email', url: 'mailto:mnairmidhun@gmail.com' },
];
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__main">
        <div class="footer__meta">
          <router-link to="/" class="footer__logo-link" aria-label="Midhun M Home">
            <img src="/logo-dark.svg" alt="Midhun M" class="footer__logo-img" />
          </router-link>

          <p class="footer__craft-note">
            Designed with care in<br />
            <strong>Alappuzha, Kerala, India</strong>
          </p>

          <div class="footer__pill-tags">
            <span class="pill-tag">Design Systems</span>
            <span class="pill-tag">Product UX</span>
          </div>
        </div>

        <nav class="footer__nav" aria-label="Footer Navigation">
          <div class="footer__nav-col">
            <span class="footer__col-title">Navigation</span>
            <router-link to="/" class="footer__col-link">Home</router-link>
            <router-link to="/work" class="footer__col-link">Work</router-link>
            <router-link to="/about" class="footer__col-link">About</router-link>
            <router-link to="/contact" class="footer__col-link">Contact</router-link>
            <router-link to="/admin/login" class="footer__col-link footer__col-link--subtle">Admin Portal</router-link>
          </div>

          <div class="footer__nav-col">
            <span class="footer__col-title">Socials</span>
            <a
              v-for="item in socialLinks"
              :key="item.name"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__col-link"
            >
              <span>{{ item.name }}</span>
              <ArrowUpRight :size="12" class="arrow-icon" />
            </a>
          </div>
        </nav>
      </div>

      <div class="footer__legal">
        <p>© {{ currentYear }} Midhun M. All rights reserved.</p>
        <p class="footer__legal-note">Senior UI/UX & Product Designer</p>
      </div>

      <!-- Giant Faust-Style Watermark -->
      <div class="footer__watermark" aria-hidden="true">
        <span>midhun.</span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.footer {
  background-color: var(--color-bg-card, #fbfbfa);
  border-top: 1px solid var(--color-border, rgba(0, 0, 0, 0.08));
  padding: var(--space-16) 0 var(--space-10);
  color: var(--color-text-secondary, #4a4947);

  &__main {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-8);
    padding-bottom: var(--space-10);
    border-bottom: 1px solid var(--color-border, rgba(0, 0, 0, 0.08));

    @include respond-to('md') {
      grid-template-columns: 1.4fr 1.6fr;
      align-items: flex-start;
      gap: var(--space-12);
    }
  }

  &__logo-link {
    display: inline-block;
    margin-bottom: var(--space-4);
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.75;
    }
  }

  &__logo-img {
    height: 28px;
    width: auto;
    display: block;
    object-fit: contain;
  }

  &__craft-note {
    font-family: var(--font-sans);
    font-size: 0.875rem;
    line-height: 1.5;
    color: var(--color-text-secondary, #4a4947);
    margin-bottom: var(--space-4);

    strong {
      color: var(--color-text-primary, #111010);
      font-weight: 600;
    }
  }

  &__pill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);

    .pill-tag {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      padding: 3px 10px;
      border-radius: 999px;
      background-color: var(--color-bg-surface, #f4f3f0);
      color: var(--color-text-secondary, #4a4947);
      border: 1px solid var(--color-border, rgba(0, 0, 0, 0.08));
    }
  }

  &__nav {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-8);

    @include respond-to('md') {
      grid-template-columns: repeat(2, 1fr);
      padding-left: var(--space-8);
    }
  }

  &__nav-col {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  &__col-title {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-text-muted, #7a7977);
    margin-bottom: var(--space-2);
    font-weight: 600;
  }

  &__col-link {
    font-family: var(--font-sans);
    font-size: 0.875rem;
    color: var(--color-text-primary, #111010);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 0;
    transition: color 0.15s ease;

    &:hover {
      color: var(--color-accent-terracotta);
    }

    &--subtle {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--color-text-muted, #7a7977);
      margin-top: var(--space-2);
    }

    .arrow-icon {
      opacity: 0.5;
      transition: transform 0.15s ease;
    }

    &:hover .arrow-icon {
      opacity: 1;
      transform: translate(2px, -2px);
    }
  }

  &__legal {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    padding: var(--space-6) 0 var(--space-4);
    font-size: 0.75rem;
    color: var(--color-text-muted, #7a7977);

    @include respond-to('md') {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__legal-note {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
  }

  // Giant Faust/Faizur-style Watermark
  &__watermark {
    overflow: hidden;
    user-select: none;
    pointer-events: none;
    padding-top: var(--space-6);
    border-top: 1px solid var(--color-border-subtle, rgba(0, 0, 0, 0.04));

    span {
      display: block;
      font-family: var(--font-sans);
      font-weight: 800;
      font-size: clamp(4.5rem, 16vw, 15rem);
      line-height: 0.85;
      letter-spacing: -0.05em;
      text-transform: lowercase;
      color: rgba(0, 0, 0, 0.04);
      white-space: nowrap;
      margin-bottom: -0.1em;
    }
  }
}
</style>
