<template>
  <div class="personal-page">
    <PersonalHero @switch-to-works="router.push('/work')" />
    <PersonalPhilosophy />
    <PersonalStats />

    <!-- Editorial Bridge to About & Career Page -->
    <section class="career-preview-bridge">
      <div class="bridge-container container-editorial">
        <div class="bridge-card">
          <div class="bridge-text">
            <h2 class="bridge-title font-serif">14 years of design leadership & craftsmanship.</h2>
            <p class="bridge-desc">
              Explore Midhun's journey across fintech, SaaS, and enterprise teams, design systems governance, and AI-assisted workflows.
            </p>
          </div>
          <RouterLink to="/about" class="bridge-link-btn">
            Read full career story →
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import PersonalHero from '@/components/personal/PersonalHero.vue';
import PersonalPhilosophy from '@/components/personal/PersonalPhilosophy.vue';
import PersonalStats from '@/components/personal/PersonalStats.vue';

const router = useRouter();
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.personal-page {
  width: 100%;
}

.career-preview-bridge {
  padding: 2rem 0 clamp(4rem, 6vw, 6rem);

  .bridge-card {
    background-color: var(--color-stone);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: clamp(2.5rem, 5vw, 3.5rem);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;

    .bridge-text {
      max-width: 620px;

      .bridge-tag {
        margin-bottom: 0.75rem;
      }

      .bridge-title {
        font-size: clamp(1.75rem, 3vw, 2.25rem);
        font-weight: 400;
        line-height: 1.2;
        color: var(--color-ink);
        margin: 0 0 0.75rem;
      }

      .bridge-desc {
        font-size: 1rem;
        line-height: 1.6;
        color: var(--color-muted);
        margin: 0;
      }
    }

    .bridge-link-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background-color: var(--color-ink);
      color: var(--color-chalk);
      font-size: 0.9375rem;
      font-weight: 500;
      padding: 0.875rem 1.75rem;
      border-radius: var(--radius-full);
      white-space: nowrap;
      transition: background-color $transition-fast, transform $transition-fast;

      &:hover {
        background-color: var(--color-laterite);
        transform: translateY(-2px);
      }
    }
  }
}

@media (max-width: 860px) {
  .career-preview-bridge {
    .bridge-card {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.75rem;
    }
  }
}
</style>
