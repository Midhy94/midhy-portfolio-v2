<script setup lang="ts">
import { FolderGit2, Image, Eye, Plus, ArrowUpRight } from 'lucide-vue-next';

const metrics = [
  { label: 'Published Projects', value: '3', icon: FolderGit2 },
  { label: 'Drafts in Progress', value: '1', icon: FolderGit2 },
  { label: 'Total Case Study Views', value: '1,420', icon: Eye },
  { label: 'Media Library Assets', value: '28', icon: Image },
];
</script>

<template>
  <div class="admin-dashboard-view">
    <div class="container">
      <header class="dashboard-header">
        <div>
          <span class="eyebrow">CMS Overview</span>
          <h1 class="dashboard-title">Dashboard</h1>
        </div>

        <div class="header-actions">
          <router-link to="/admin/projects" class="btn-action">
            <Plus :size="16" />
            <span>New Project</span>
          </router-link>
        </div>
      </header>

      <!-- Stats Grid -->
      <div class="metrics-grid">
        <div v-for="metric in metrics" :key="metric.label" class="metric-card">
          <div class="metric-card__header">
            <span class="metric-card__label">{{ metric.label }}</span>
            <component :is="metric.icon" :size="18" class="metric-card__icon" />
          </div>
          <span class="metric-card__value">{{ metric.value }}</span>
        </div>
      </div>

      <!-- Quick Links / Next Steps -->
      <div class="dashboard-section">
        <h2 class="section-title">Quick Actions</h2>
        <div class="quick-grid">
          <router-link to="/admin/projects" class="quick-card">
            <h3>Manage Case Studies</h3>
            <p>Reorder, edit content blocks, publish drafts, and modify SEO settings.</p>
            <span class="card-link">
              <span>Go to Projects</span>
              <ArrowUpRight :size="14" />
            </span>
          </router-link>

          <router-link to="/admin/media" class="quick-card">
            <h3>Media Library</h3>
            <p>Upload project screenshots, mockups, design tokens, and resume PDFs.</p>
            <span class="card-link">
              <span>Go to Media</span>
              <ArrowUpRight :size="14" />
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.admin-dashboard-view {
  padding: var(--space-8) 0 var(--space-20);
}

.dashboard-header {
  @include flex-between;
  margin-bottom: var(--space-10);
}

.dashboard-title {
  margin-top: var(--space-2);
}

.btn-action {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-5);
  background: var(--color-primary);
  color: #ffffff;
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: 600;
  transition: all var(--transition-fast);

  &:hover {
    background: var(--color-primary-light);
    transform: translateY(-1px);
  }
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--space-6);
  margin-bottom: var(--space-12);

  @include respond-to('sm') {
    grid-template-columns: repeat(2, 1fr);
  }

  @include respond-to('lg') {
    grid-template-columns: repeat(4, 1fr);
  }
}

.metric-card {
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-subtle);

  &__header {
    @include flex-between;
    margin-bottom: var(--space-2);
  }

  &__label {
    font-size: var(--font-size-xs);
    color: var(--color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  &__icon {
    color: var(--color-primary-light);
  }

  &__value {
    font-family: var(--font-family-display);
    font-size: var(--font-size-3xl);
    font-weight: 800;
  }
}

.dashboard-section {
  .section-title {
    font-size: var(--font-size-xl);
    margin-bottom: var(--space-6);
  }
}

.quick-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);

  @include respond-to('md') {
    grid-template-columns: repeat(2, 1fr);
  }
}

.quick-card {
  padding: var(--space-8);
  border-radius: var(--radius-lg);
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-subtle);
  transition: all var(--transition-normal);

  &:hover {
    border-color: var(--color-border-hover);
    transform: translateY(-2px);

    .card-link {
      color: var(--color-primary-light);
    }
  }

  h3 {
    font-size: var(--font-size-lg);
    margin-bottom: var(--space-2);
  }

  p {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-6);
  }
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: var(--color-text-primary);
  transition: color var(--transition-fast);
}
</style>
