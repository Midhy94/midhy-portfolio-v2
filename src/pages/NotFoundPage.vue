<template>
  <div class="not-found-page">
    <InnerHeroStage mode="personal" :compact="true">
      <div class="not-found-card container-editorial">
        <span class="status-badge font-mono" role="status">404 / ERROR</span>
        <h1 id="not-found-title" class="not-found-title font-serif">Page Not Found</h1>
        <p class="status-description font-sans">
          The requested URL was not found on this server. This route confirms that router fallback handling is configured properly.
        </p>
        <div class="return-nav">
          <RouterLink to="/" class="home-link font-sans">
            &larr; Return to Foundation Home
          </RouterLink>
        </div>
      </div>
    </InnerHeroStage>
  </div>
</template>

<script setup lang="ts">
import InnerHeroStage from '@/components/common/InnerHeroStage.vue';
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.not-found-page {
  width: 100%;
}

.not-found-card {
  max-width: 600px;
  text-align: left;

  .status-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: var(--color-laterite);
    background-color: rgba(225, 75, 39, 0.12);
    border: 1px solid rgba(225, 75, 39, 0.3);
    border-radius: var(--radius-full);
    margin-bottom: 1.25rem;
  }

  .not-found-title {
    font-size: clamp(2.5rem, 4.5vw, 3.75rem);
    font-weight: 400;
    line-height: 1.1;
    color: #FFFFFF;
    margin: 0 0 1rem;
  }

  .status-description {
    font-size: clamp(1rem, 1.4vw, 1.125rem);
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.76);
    margin-bottom: 2rem;
    max-width: 520px;
  }

  .return-nav {
    display: flex;

    .home-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background-color: var(--color-laterite);
      color: #FFFFFF;
      font-size: 0.9375rem;
      font-weight: 600;
      padding: 0.85rem 1.85rem;
      border-radius: var(--radius-full);
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
  }
}
</style>
