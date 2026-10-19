<script setup lang="ts">
import { ref } from 'vue';
import { useUiStore } from '@/stores/ui.store';
import { Plus, Edit3, Trash2, Eye, EyeOff, Copy } from 'lucide-vue-next';

interface CMSProject {
  id: string;
  title: string;
  slug: string;
  category: string;
  status: 'published' | 'draft' | 'archived';
  views: number;
  lastUpdated: string;
}

const uiStore = useUiStore();

const projects = ref<CMSProject[]>([
  {
    id: 'euro-pay',
    title: 'European Online Payment Platform',
    slug: 'european-payment-platform',
    category: 'Fintech & Architecture',
    status: 'published',
    views: 842,
    lastUpdated: 'Oct 18, 2026',
  },
  {
    id: 'hospitality-flow',
    title: 'Hospitality Online Menu & Ordering Platform',
    slug: 'hospitality-menu-redesign',
    category: 'Hospitality & Web Apps',
    status: 'published',
    views: 614,
    lastUpdated: 'Oct 14, 2026',
  },
  {
    id: 'scale-ds',
    title: 'Enterprise Design System & Token Library',
    slug: 'enterprise-design-system',
    category: 'Design Systems',
    status: 'published',
    views: 520,
    lastUpdated: 'Oct 09, 2026',
  },
  {
    id: 'ai-vibe-studio',
    title: 'AI Prototyping & Vibe Coding Explorations',
    slug: 'ai-prototyping-vibe-coding',
    category: 'AI & Prototyping',
    status: 'draft',
    views: 0,
    lastUpdated: 'Just now',
  },
]);

function toggleStatus(proj: CMSProject) {
  if (proj.status === 'published') {
    proj.status = 'draft';
    uiStore.addToast(`"${proj.title}" moved to draft (unplublished).`, 'warning');
  } else {
    proj.status = 'published';
    uiStore.addToast(`"${proj.title}" is now published publicly!`, 'success');
  }
}

function duplicateProject(proj: CMSProject) {
  const cloned: CMSProject = {
    id: `proj-${Date.now()}`,
    title: `${proj.title} (Copy)`,
    slug: `${proj.slug}-copy`,
    category: proj.category,
    status: 'draft',
    views: 0,
    lastUpdated: 'Just now',
  };
  projects.value.push(cloned);
  uiStore.addToast(`Duplicated "${proj.title}" as draft.`, 'info');
}

function deleteProject(id: string) {
  const target = projects.value.find((p) => p.id === id);
  if (confirm(`Are you sure you want to delete "${target?.title}"?`)) {
    projects.value = projects.value.filter((p) => p.id !== id);
    uiStore.addToast('Project removed.', 'error');
  }
}
</script>

<template>
  <div class="admin-projects-view">
    <div class="container">
      <header class="view-header">
        <div>
          <span class="eyebrow">CMS Management</span>
          <h1 class="view-title">Case Studies & Projects</h1>
          <p class="view-subtitle">Create, edit, duplicate, archive, and publish your work.</p>
        </div>

        <router-link to="/admin/projects/new" class="btn-create">
          <Plus :size="15" />
          <span>New Case Study</span>
        </router-link>
      </header>

      <!-- Projects Table Card -->
      <div class="table-card">
        <div class="table-responsive">
          <table class="cms-table">
            <thead>
              <tr>
                <th>Project Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Views</th>
                <th>Last Updated</th>
                <th class="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="proj in projects" :key="proj.id">
                <td class="title-cell">
                  <strong>{{ proj.title }}</strong>
                  <span class="slug-meta">/work/{{ proj.slug }}</span>
                </td>
                <td>
                  <span class="category-badge">{{ proj.category }}</span>
                </td>
                <td>
                  <span
                    class="status-chip"
                    :class="`status-chip--${proj.status}`"
                  >
                    {{ proj.status }}
                  </span>
                </td>
                <td class="font-mono text-muted">{{ proj.views }}</td>
                <td class="font-mono text-muted">{{ proj.lastUpdated }}</td>
                <td class="actions-cell">
                  <!-- Toggle Publish -->
                  <button
                    type="button"
                    class="action-icon-btn"
                    @click="toggleStatus(proj)"
                    :title="proj.status === 'published' ? 'Unpublish to draft' : 'Publish publicly'"
                  >
                    <EyeOff v-if="proj.status === 'published'" :size="15" />
                    <Eye v-else :size="15" />
                  </button>

                  <!-- Edit -->
                  <router-link
                    :to="`/admin/projects/${proj.id}/edit`"
                    class="action-icon-btn"
                    title="Edit Case Study"
                  >
                    <Edit3 :size="15" />
                  </router-link>

                  <!-- Duplicate -->
                  <button
                    type="button"
                    class="action-icon-btn"
                    @click="duplicateProject(proj)"
                    title="Duplicate Project"
                  >
                    <Copy :size="15" />
                  </button>

                  <!-- Delete -->
                  <button
                    type="button"
                    class="action-icon-btn action-icon-btn--danger"
                    @click="deleteProject(proj.id)"
                    title="Delete Project"
                  >
                    <Trash2 :size="15" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.admin-projects-view {
  padding: var(--space-8) 0 var(--space-20);
  background-color: var(--color-dark-bg);
  min-height: 80vh;
}

.view-header {
  @include flex-between;
  margin-bottom: var(--space-8);
  flex-wrap: wrap;
  gap: var(--space-4);

  .eyebrow {
    color: var(--color-accent-terracotta);
    margin-bottom: var(--space-2);
    display: inline-block;
  }
}

.view-title {
  color: var(--color-dark-text-primary);
  margin-bottom: var(--space-1);
}

.view-subtitle {
  font-size: 0.9375rem;
  color: var(--color-dark-text-secondary);
}

.btn-create {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 10px 20px;
  background-color: oklch(1 0 0);
  color: oklch(0 0 0);
  border-radius: var(--radius-pill);
  font-size: 0.875rem;
  font-weight: 600;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.92;
  }
}

.table-card {
  background-color: var(--color-dark-card);
  border: 1px solid var(--color-dark-border);
  border-radius: var(--radius-card);
  overflow: hidden;
}

.table-responsive {
  overflow-x: auto;
}

.cms-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.875rem;

  th {
    padding: var(--space-4) var(--space-6);
    background-color: #121111;
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-dark-text-muted);
    border-bottom: 1px solid var(--color-dark-border-subtle);
  }

  td {
    padding: var(--space-5) var(--space-6);
    border-bottom: 1px solid var(--color-dark-border-subtle);
    color: var(--color-dark-text-secondary);
  }

  tbody tr:hover {
    background-color: rgba(255, 255, 255, 0.02);
  }
}

.title-cell {
  display: flex;
  flex-direction: column;
  gap: 2px;

  strong {
    color: var(--color-dark-text-primary);
    font-size: 0.9375rem;
  }

  .slug-meta {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    color: var(--color-dark-text-muted);
  }
}

.category-badge {
  font-size: 0.75rem;
  padding: 3px 8px;
  background: var(--color-dark-surface);
  border: 1px solid var(--color-dark-border-subtle);
  border-radius: var(--radius-chip);
}

.status-chip {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: var(--radius-pill);
  font-weight: 600;

  &--published {
    background: rgba(16, 185, 129, 0.15);
    color: var(--color-success);
  }

  &--draft {
    background: rgba(245, 158, 11, 0.15);
    color: var(--color-warning);
  }

  &--archived {
    background: rgba(255, 255, 255, 0.08);
    color: var(--color-dark-text-muted);
  }
}

.font-mono {
  font-family: var(--font-mono);
}

.text-muted {
  color: var(--color-dark-text-muted);
}

.text-right {
  text-align: right;
}

.actions-cell {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
}

.action-icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-chip);
  color: var(--color-dark-text-secondary);
  transition: all 0.15s ease;

  &:hover {
    background-color: var(--color-dark-surface-elevated);
    color: var(--color-dark-text-primary);
  }

  &--danger:hover {
    color: var(--color-danger);
  }
}
</style>
