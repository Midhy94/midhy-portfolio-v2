<template>
  <main class="not-found-container">
    <section class="not-found-card" aria-labelledby="not-found-title">
      <header class="card-header">
        <span class="status-badge" role="status">404</span>
        <h1 id="not-found-title">Page Not Found</h1>
      </header>

      <p class="status-description">
        The requested URL was not found on this server. This route confirms that router fallback handling is configured properly.
      </p>

      <nav class="return-nav" aria-label="Fallback navigation">
        <RouterLink to="/" class="home-link">&larr; Return to Foundation Home</RouterLink>
      </nav>
    </section>
  </main>
</template>

<script setup lang="ts">
// Minimal 404 placeholder view verifying router catch-all functionality
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.not-found-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $spacing-6;
}

.not-found-card {
  width: 100%;
  max-width: 520px;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: $spacing-10;
  text-align: center;

  .card-header {
    margin-bottom: $spacing-4;

    .status-badge {
      display: inline-block;
      padding: $spacing-1 $spacing-3;
      font-size: $font-size-xs;
      font-weight: 700;
      letter-spacing: 0.05em;
      color: var(--color-primary);
      background-color: var(--color-badge-bg);
      border-radius: var(--radius-full);
      margin-bottom: $spacing-3;
    }

    h1 {
      font-size: $font-size-2xl;
      font-weight: 700;
      color: var(--color-text);
      line-height: 1.25;
    }
  }

  .status-description {
    font-size: $font-size-base;
    line-height: 1.6;
    color: var(--color-text-muted);
    margin-bottom: $spacing-8;
  }

  .return-nav {
    display: flex;
    justify-content: center;

    .home-link {
      font-size: $font-size-sm;
      font-weight: 500;
      color: var(--color-primary);
      transition: color var(--transition-fast);

      &:hover {
        color: var(--color-primary-hover);
        text-decoration: underline;
      }
    }
  }
}
</style>
