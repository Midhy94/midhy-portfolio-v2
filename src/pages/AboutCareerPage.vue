<template>
  <div class="about-career-page">
    <!-- Editorial Page Header -->
    <header class="page-intro-header">
      <div class="intro-container container-editorial">
        <h1 class="intro-title font-serif">
          Designing for screens since 2012.
        </h1>
        <p class="intro-subtext">
          A decade-long chronicle of designing platforms for 500K+ users, establishing multi-brand design systems, and pioneering AI-assisted product development.
        </p>

        <div class="intro-actions">
          <a
            href="/Midhun_M_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="resume-download-btn"
          >
            Download Verified Résumé (PDF) ↗
          </a>
          <RouterLink to="/work" class="view-works-link">
            Explore Selected Work →
          </RouterLink>
        </div>
      </div>
    </header>

    <!-- Deep-dive About Statement -->
    <PersonalAbout />

    <!-- Dark Career Timeline: Fourteen Years, Four Teams -->
    <PersonalCareer />

    <!-- Capabilities & Tool Matrix -->
    <PersonalCapabilities />
  </div>
</template>

<script setup lang="ts">
import PersonalAbout from '@/components/personal/PersonalAbout.vue';
import PersonalCareer from '@/components/personal/PersonalCareer.vue';
import PersonalCapabilities from '@/components/personal/PersonalCapabilities.vue';
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.about-career-page {
  width: 100%;
}

.page-intro-header {
  padding: clamp(3.5rem, 6vw, 5.5rem) 0 clamp(2.5rem, 4vw, 4rem);
  border-bottom: 1px solid var(--color-border);

  .intro-container {
    max-width: 840px;

    .intro-overline {
      margin-bottom: 1rem;
    }

    .intro-title {
      font-size: clamp(2.5rem, 4.8vw, 3.75rem);
      font-weight: 400;
      line-height: 1.12;
      letter-spacing: -0.02em;
      color: var(--color-ink);
      margin: 0 0 1.5rem;
    }

    .intro-subtext {
      font-size: clamp(1.0625rem, 1.8vw, 1.25rem);
      line-height: 1.65;
      color: var(--color-muted);
      margin: 0 0 2.25rem;
    }

    .intro-actions {
      display: flex;
      align-items: center;
      gap: 1.75rem;
      flex-wrap: wrap;

      .resume-download-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background-color: var(--color-laterite);
        color: #FFFFFF;
        font-size: 0.9375rem;
        font-weight: 500;
        padding: 0.8rem 1.75rem;
        border-radius: var(--radius-full);
        border: none;
        transition: background-color $transition-fast, transform $transition-fast;

        &:hover {
          background-color: #C83B18;
          transform: translateY(-2px);
        }
      }

      .view-works-link {
        display: inline-flex;
        align-items: center;
        font-size: 0.9375rem;
        font-weight: 500;
        color: var(--color-ink);
        text-decoration: none;
        padding: 0.8rem 1.75rem;
        border-radius: var(--radius-full);
        border: 1px solid var(--color-border);
        transition: background-color $transition-fast, border-color $transition-fast, color $transition-fast;

        &:hover {
          background-color: var(--color-cloud);
          border-color: var(--color-ink);
        }
      }
    }
  }
}
</style>
