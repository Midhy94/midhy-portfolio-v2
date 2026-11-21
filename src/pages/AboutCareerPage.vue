<template>
  <div class="about-career-page">
    <!-- Editorial Page Header inside Living Mesh Hero Stage -->
    <InnerHeroStage mode="personal">
      <div class="intro-container container-editorial">
        <h1 class="intro-title font-serif">
          Designing for screens since 2012.
        </h1>
        <p class="intro-subtext font-sans">
          A decade-long chronicle of designing platforms for 500K+ users, establishing multi-brand design systems, and pioneering AI-assisted product development.
        </p>

        <div class="intro-actions">
          <a
            href="/Midhun_M_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="resume-download-btn font-sans"
          >
            Download Verified Résumé (PDF) ↗
          </a>
          <RouterLink to="/work" class="view-works-link font-sans">
            Explore Selected Work →
          </RouterLink>
        </div>
      </div>
    </InnerHeroStage>

    <!-- Deep-dive About Statement -->
    <PersonalAbout />

    <!-- Dark Career Timeline: Fourteen Years, Five Teams -->
    <PersonalCareer />

    <!-- Capabilities & Tool Matrix -->
    <PersonalCapabilities />
  </div>
</template>

<script setup lang="ts">
import InnerHeroStage from '@/components/common/InnerHeroStage.vue';
import PersonalAbout from '@/components/personal/PersonalAbout.vue';
import PersonalCareer from '@/components/personal/PersonalCareer.vue';
import PersonalCapabilities from '@/components/personal/PersonalCapabilities.vue';
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.about-career-page {
  width: 100%;
}

.intro-container {
  max-width: 880px;

  .intro-title {
    font-size: clamp(2.5rem, 4.8vw, 3.85rem);
    font-weight: 400;
    line-height: 1.12;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    margin: 0 0 1.25rem;
  }

  .intro-subtext {
    font-size: clamp(1.0625rem, 1.8vw, 1.25rem);
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.76);
    margin: 0 0 clamp(1.75rem, 3vw, 2.5rem);
    max-width: 720px;
    text-wrap: pretty;
  }

  .intro-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;

    .resume-download-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background-color: var(--color-laterite);
      color: #FFFFFF;
      font-size: 0.9375rem;
      font-weight: 600;
      padding: 0.85rem 1.85rem;
      border-radius: var(--radius-full);
      border: none;
      text-decoration: none;
      transition: background-color $transition-fast, transform $transition-fast, box-shadow $transition-fast;

      &:hover {
        background-color: #C83B18;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(225, 75, 39, 0.4);
      }

      &:focus-visible {
        outline: 2px solid #FFFFFF;
        outline-offset: 3px;
      }
    }

    .view-works-link {
      display: inline-flex;
      align-items: center;
      font-size: 0.9375rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.85);
      text-decoration: none;
      padding: 0.85rem 1.65rem;
      border-radius: var(--radius-full);
      border: 1px solid rgba(255, 255, 255, 0.22);
      background-color: rgba(255, 255, 255, 0.04);
      backdrop-filter: blur(8px);
      transition: background-color $transition-fast, border-color $transition-fast, color $transition-fast, transform $transition-fast;

      &:hover {
        background-color: rgba(255, 255, 255, 0.12);
        border-color: rgba(255, 255, 255, 0.45);
        color: #FFFFFF;
        transform: translateY(-1px);
      }

      &:focus-visible {
        outline: 2px solid #FFFFFF;
        outline-offset: 3px;
      }
    }
  }
}
</style>
