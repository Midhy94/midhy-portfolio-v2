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

          <p class="footer__role-tag">Senior UI/UX & Product Designer</p>

          <p class="footer__tagline">
            Specializing in human-centered digital products, enterprise design systems,
            and AI-assisted engineering workflows across fintech, SaaS, and hospitality.
          </p>

          <p class="footer__location">
            Alappuzha, Kerala, India • Open to Global & Remote Engagements
          </p>
        </div>

        <nav class="footer__nav" aria-label="Social and Professional Profiles">
          <div class="footer__nav-group">
            <span class="footer__nav-heading">Profiles & Work</span>
            <div class="footer__links">
              <a
                v-for="item in socialLinks"
                :key="item.name"
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__link"
              >
                <span>{{ item.name }}</span>
                <ArrowUpRight :size="14" class="footer__link-arrow" />
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div class="footer__legal">
        <p>© {{ currentYear }} Midhun M. All rights reserved.</p>
        <div class="footer__legal-links">
          <router-link to="/work" class="legal-item">Work</router-link>
          <router-link to="/about" class="legal-item">About</router-link>
          <router-link to="/contact" class="legal-item">Contact</router-link>
          <router-link to="/admin/login" class="cms-portal-link">CMS Access</router-link>
        </div>
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
    gap: var(--space-10);
    padding-bottom: var(--space-12);
    border-bottom: 1px solid var(--color-border, rgba(0, 0, 0, 0.08));

    @include respond-to('md') {
      grid-template-columns: 1.6fr 1fr;
      align-items: flex-start;
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
    height: 32px;
    width: auto;
    display: block;
    object-fit: contain;
  }

  &__role-tag {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-accent-terracotta);
    margin-bottom: var(--space-3);
    font-weight: 500;
  }

  &__tagline {
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--color-text-secondary, #4a4947);
    max-width: 480px;
    margin-bottom: var(--space-4);
  }

  &__location {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--color-text-muted, #7a7977);
  }

  &__nav {
    display: flex;
    flex-direction: column;

    @include respond-to('md') {
      padding-left: var(--space-10);
      border-left: 1px solid var(--color-border, rgba(0, 0, 0, 0.08));
    }
  }

  &__nav-heading {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-text-muted, #7a7977);
    margin-bottom: var(--space-4);
    display: block;
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 1.0625rem;
    font-family: var(--font-sans);
    color: var(--color-text-primary, #111010);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease, transform 0.2s ease;

    &:hover {
      color: var(--color-accent-terracotta);
      transform: translateX(4px);
    }

    .footer__link-arrow {
      opacity: 0.5;
      transition: transform 0.2s ease;
    }

    &:hover .footer__link-arrow {
      opacity: 1;
      transform: translate(2px, -2px);
    }
  }

  &__legal {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    padding-top: var(--space-8);
    font-size: 0.75rem;
    color: var(--color-text-muted, #7a7977);

    @include respond-to('md') {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__legal-links {
    display: flex;
    align-items: center;
    gap: var(--space-5);
  }
}

.legal-item {
  color: var(--color-text-muted, #7a7977);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-text-primary, #111010);
  }
}

.cms-portal-link {
  font-family: var(--font-mono);
  color: var(--color-text-muted, #7a7977);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-accent-terracotta);
  }
}
</style>
