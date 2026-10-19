<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useDragAndDrop } from '@formkit/drag-and-drop/vue';
import MarkdownEditor from '@/components/admin/MarkdownEditor.vue';
import { useUiStore } from '@/stores/ui.store';
import {
  ArrowLeft,
  Save,
  Eye,
  Trash2,
  Copy,
  ChevronUp,
  ChevronDown,
  GripVertical,
  FileText,
  Image,
  SplitSquareVertical,
  BarChart3,
  Quote as QuoteIcon
} from 'lucide-vue-next';

interface EditorBlock {
  id: string;
  type: 'markdown' | 'image_full' | 'image_grid' | 'before_after' | 'metrics_stats' | 'quote' | 'process_steps' | 'embed' | 'divider';
  title?: string;
  content: Record<string, any>;
}

const route = useRoute();
const router = useRouter();
const uiStore = useUiStore();

const projectId = computed(() => route.params.id as string || 'new');
const isNew = computed(() => projectId.value === 'new');

// Project metadata
const project = ref({
  title: 'European Online Payment Platform',
  slug: 'european-payment-platform',
  category: 'Fintech & Architecture',
  status: 'published' as 'draft' | 'published' | 'archived',
  summary: 'Architected the end-to-end payment workflow and visual design serving 500K+ European users.',
  coverImage: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
  metricHighlight: '500K+ European Users',
  recognition: 'European Client Commendation',
});

// Blocks list
const blocks = ref<EditorBlock[]>([
  {
    id: 'b-1',
    type: 'markdown',
    title: 'Context & Problem Framing',
    content: {
      text: '## The Challenge\nDigital payment solutions across the European market require balancing rigorous security and regulatory compliance with zero-friction checkout experiences. Users expect sub-second responsiveness across diverse banking providers.',
    },
  },
  {
    id: 'b-2',
    type: 'metrics_stats',
    title: 'Impact Highlights',
    content: {
      stat1_value: '500K+',
      stat1_label: 'European Active Users',
      stat2_value: '0',
      stat2_label: 'Critical Checkout Usability Regressions',
    },
  },
  {
    id: 'b-3',
    type: 'image_full',
    title: 'High-Fidelity Interface Overview',
    content: {
      url: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1600&q=85',
      alt: 'European Online Payment Platform Interface',
      caption: 'The unified payment dashboard and instant checkout modal.',
    },
  },
  {
    id: 'b-4',
    type: 'quote',
    title: 'Client Commendation',
    content: {
      quote: 'Midhun conceptualized and designed the UI/UX architecture from the initial wireframe stage, delivering an intuitive, visually stunning payment experience.',
      author: 'European Client Stakeholder',
    },
  },
]);

// Set up FormKit Drag and Drop
const [parentEl, blockList] = useDragAndDrop<EditorBlock>(blocks.value, {
  dragHandle: '.drag-handle',
});

// Sync changes between blockList and blocks
watch(blockList, (newVal) => {
  blocks.value = newVal;
  isDirty.value = true;
});

// Persistence states
const isSaving = ref(false);
const isDirty = ref(false);
const lastSaved = ref<string>('Just now');

// Debounced Autosave (1500ms)
let autosaveTimer: any = null;
watch(
  [project, blocks],
  () => {
    isDirty.value = true;
    clearTimeout(autosaveTimer);
    autosaveTimer = setTimeout(() => {
      saveProject(true);
    }, 1500);
  },
  { deep: true }
);

function saveProject(isAutosave = false) {
  isSaving.value = true;
  setTimeout(() => {
    isSaving.value = false;
    isDirty.value = false;
    lastSaved.value = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (!isAutosave) {
      uiStore.addToast('Case study successfully saved and published!', 'success');
    }
  }, 500);
}

// Block Operations
function addBlock(type: EditorBlock['type']) {
  const newId = `b-${Date.now()}`;
  const newBlock: EditorBlock = {
    id: newId,
    type,
    title: `New ${type.replace('_', ' ')} block`,
    content: getDefaultContent(type),
  };
  blocks.value.push(newBlock);
  blockList.value = [...blocks.value];
  isDirty.value = true;
  uiStore.addToast(`Added ${type} block.`, 'info', 2000);
}

function deleteBlock(id: string) {
  blocks.value = blocks.value.filter((b) => b.id !== id);
  blockList.value = [...blocks.value];
  isDirty.value = true;
}

function duplicateBlock(block: EditorBlock) {
  const cloned: EditorBlock = {
    id: `b-${Date.now()}`,
    type: block.type,
    title: `${block.title || 'Block'} (Copy)`,
    content: JSON.parse(JSON.stringify(block.content)),
  };
  const idx = blocks.value.findIndex((b) => b.id === block.id);
  blocks.value.splice(idx + 1, 0, cloned);
  blockList.value = [...blocks.value];
  isDirty.value = true;
}

function moveBlock(idx: number, direction: 'up' | 'down') {
  if (direction === 'up' && idx > 0) {
    const temp = blocks.value[idx];
    blocks.value[idx] = blocks.value[idx - 1];
    blocks.value[idx - 1] = temp;
  } else if (direction === 'down' && idx < blocks.value.length - 1) {
    const temp = blocks.value[idx];
    blocks.value[idx] = blocks.value[idx + 1];
    blocks.value[idx + 1] = temp;
  }
  blockList.value = [...blocks.value];
  isDirty.value = true;
}

function getDefaultContent(type: EditorBlock['type']) {
  switch (type) {
    case 'markdown':
      return { text: '### Section Heading\nWrite your design rationale here...' };
    case 'image_full':
      return { url: '', alt: '', caption: '' };
    case 'metrics_stats':
      return { stat1_value: '100%', stat1_label: 'Metric Label' };
    case 'quote':
      return { quote: 'Design quote or stakeholder feedback', author: 'Author Name' };
    case 'before_after':
      return { beforeUrl: '', afterUrl: '', caption: 'Before & After comparison' };
    default:
      return {};
  }
}

function openLivePreview() {
  uiStore.isPreviewMode = true;
  router.push(`/work/${project.value.slug}`);
}
</script>

<template>
  <div class="case-study-editor">
    <!-- Top Sticky Bar -->
    <header class="editor-header">
      <div class="container editor-header__inner">
        <div class="header-left">
          <router-link to="/admin/projects" class="back-link">
            <ArrowLeft :size="16" />
            <span>Projects</span>
          </router-link>
          <span class="divider">/</span>
          <span class="editor-title">{{ isNew ? 'Create Case Study' : project.title }}</span>
        </div>

        <div class="header-actions">
          <!-- Persistence status -->
          <div class="save-indicator">
            <span v-if="isSaving" class="status-pill status-pill--saving">Saving...</span>
            <span v-else-if="isDirty" class="status-pill status-pill--dirty">Unsaved changes</span>
            <span v-else class="status-pill status-pill--saved">Saved at {{ lastSaved }}</span>
          </div>

          <!-- Preview -->
          <button type="button" class="btn-tool" @click="openLivePreview">
            <Eye :size="14" />
            <span>Preview</span>
          </button>

          <!-- Explicit Save -->
          <button type="button" class="btn-primary" @click="saveProject(false)" :disabled="isSaving">
            <Save :size="14" />
            <span>{{ isSaving ? 'Saving...' : 'Save & Publish' }}</span>
          </button>
        </div>
      </div>
    </header>

    <div class="container editor-body">
      <!-- Project Metadata Card -->
      <section class="meta-card">
        <h2 class="card-title">Case Study Settings</h2>
        <div class="meta-fields-grid">
          <div class="field-item">
            <label class="field-label">Project Title</label>
            <input v-model="project.title" type="text" class="field-input" />
          </div>

          <div class="field-item">
            <label class="field-label">URL Slug</label>
            <input v-model="project.slug" type="text" class="field-input font-mono" />
          </div>

          <div class="field-item">
            <label class="field-label">Category</label>
            <input v-model="project.category" type="text" class="field-input" />
          </div>

          <div class="field-item">
            <label class="field-label">Publication Status</label>
            <select v-model="project.status" class="field-input field-select">
              <option value="draft">Draft (Private)</option>
              <option value="published">Published (Public)</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          <div class="field-item full-width">
            <label class="field-label">Summary Overview</label>
            <textarea v-model="project.summary" rows="2" class="field-input"></textarea>
          </div>
        </div>
      </section>

      <!-- Reorderable Content Blocks -->
      <section class="blocks-section">
        <div class="blocks-header">
          <div>
            <h2 class="card-title">Storytelling Blocks</h2>
            <p class="card-subtitle">Drag handles or use arrows to reorder. Every block renders live in public case studies.</p>
          </div>
        </div>

        <!-- FormKit Drag and Drop Container -->
        <div ref="parentEl" class="blocks-list">
          <div
            v-for="(block, idx) in blocks"
            :key="block.id"
            class="block-card"
          >
            <!-- Block Card Header -->
            <div class="block-card__header">
              <div class="block-info">
                <button type="button" class="drag-handle" title="Drag to reorder">
                  <GripVertical :size="16" />
                </button>
                <span class="block-type-badge">{{ block.type }}</span>
                <input
                  v-model="block.title"
                  type="text"
                  placeholder="Block Title (optional)"
                  class="block-title-input"
                />
              </div>

              <!-- Block Actions (Reorder buttons, duplicate, delete) -->
              <div class="block-actions">
                <button
                  type="button"
                  class="action-btn"
                  @click="moveBlock(idx, 'up')"
                  :disabled="idx === 0"
                  title="Move Up"
                >
                  <ChevronUp :size="15" />
                </button>
                <button
                  type="button"
                  class="action-btn"
                  @click="moveBlock(idx, 'down')"
                  :disabled="idx === blocks.length - 1"
                  title="Move Down"
                >
                  <ChevronDown :size="15" />
                </button>
                <button
                  type="button"
                  class="action-btn"
                  @click="duplicateBlock(block)"
                  title="Duplicate Block"
                >
                  <Copy :size="14" />
                </button>
                <button
                  type="button"
                  class="action-btn action-btn--danger"
                  @click="deleteBlock(block.id)"
                  title="Delete Block"
                >
                  <Trash2 :size="14" />
                </button>
              </div>
            </div>

            <!-- Block Body by Type -->
            <div class="block-card__body">
              <!-- Type 1: Markdown -->
              <div v-if="block.type === 'markdown'">
                <MarkdownEditor v-model="block.content.text" />
              </div>

              <!-- Type 2: Full Width Image -->
              <div v-else-if="block.type === 'image_full'" class="image-fields">
                <input
                  v-model="block.content.url"
                  type="url"
                  placeholder="Image URL (e.g. https://... or /images/...)"
                  class="field-input"
                />
                <input
                  v-model="block.content.caption"
                  type="text"
                  placeholder="Image caption or annotation..."
                  class="field-input"
                />
              </div>

              <!-- Type 3: Metrics & Stats -->
              <div v-else-if="block.type === 'metrics_stats'" class="stats-fields-grid">
                <div>
                  <label class="field-label">Stat 1 Value</label>
                  <input v-model="block.content.stat1_value" type="text" class="field-input" />
                </div>
                <div>
                  <label class="field-label">Stat 1 Label</label>
                  <input v-model="block.content.stat1_label" type="text" class="field-input" />
                </div>
              </div>

              <!-- Type 4: Quote -->
              <div v-else-if="block.type === 'quote'" class="quote-fields">
                <textarea
                  v-model="block.content.quote"
                  rows="2"
                  placeholder="Testimonial or stakeholder quotation..."
                  class="field-input"
                ></textarea>
                <input
                  v-model="block.content.author"
                  type="text"
                  placeholder="Author / Attribution..."
                  class="field-input"
                />
              </div>

              <!-- Default Fallback -->
              <div v-else class="generic-content">
                <p>Configured for type: {{ block.type }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Add Block Palette Bar -->
        <div class="palette-bar">
          <span class="palette-title">Add Content Block:</span>
          <div class="palette-buttons">
            <button type="button" class="palette-btn" @click="addBlock('markdown')">
              <FileText :size="13" />
              <span>Markdown</span>
            </button>
            <button type="button" class="palette-btn" @click="addBlock('image_full')">
              <Image :size="13" />
              <span>Image</span>
            </button>
            <button type="button" class="palette-btn" @click="addBlock('metrics_stats')">
              <BarChart3 :size="13" />
              <span>Metrics</span>
            </button>
            <button type="button" class="palette-btn" @click="addBlock('quote')">
              <QuoteIcon :size="13" />
              <span>Quote</span>
            </button>
            <button type="button" class="palette-btn" @click="addBlock('before_after')">
              <SplitSquareVertical :size="13" />
              <span>Comparison</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.case-study-editor {
  padding-bottom: var(--space-20);
  background-color: var(--color-dark-bg);
  min-height: 100vh;
}

.editor-header {
  position: sticky;
  top: 68px;
  z-index: 40;
  background-color: rgba(9, 8, 8, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-dark-border);
  padding: var(--space-4) 0;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.header-left {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: 0.875rem;

  .back-link {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    color: var(--color-dark-text-muted);

    &:hover {
      color: var(--color-dark-text-primary);
    }
  }

  .divider {
    color: var(--color-dark-text-muted);
  }

  .editor-title {
    font-weight: 600;
    color: var(--color-dark-text-primary);
  }
}

.header-actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.status-pill {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  padding: 3px 10px;
  border-radius: var(--radius-pill);

  &--saving {
    background: rgba(245, 158, 11, 0.15);
    color: var(--color-warning);
  }

  &--dirty {
    background: rgba(239, 68, 68, 0.15);
    color: var(--color-danger);
  }

  &--saved {
    background: rgba(16, 185, 129, 0.15);
    color: var(--color-success);
  }
}

.btn-tool {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 8px 14px;
  background-color: var(--color-dark-surface);
  border: 1px solid var(--color-dark-border);
  border-radius: var(--radius-pill);
  font-size: 0.8125rem;
  color: var(--color-dark-text-primary);

  &:hover {
    background-color: var(--color-dark-surface-elevated);
  }
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 8px 18px;
  background-color: oklch(1 0 0);
  color: oklch(0 0 0);
  border-radius: var(--radius-pill);
  font-size: 0.8125rem;
  font-weight: 600;

  &:hover:not(:disabled) {
    opacity: 0.9;
  }
}

.editor-body {
  padding-top: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-10);
}

.meta-card,
.blocks-section {
  background-color: var(--color-dark-card);
  border: 1px solid var(--color-dark-border);
  border-radius: var(--radius-card);
  padding: var(--space-8);
}

.card-title {
  font-size: 1.25rem;
  color: var(--color-dark-text-primary);
  margin-bottom: var(--space-2);
}

.card-subtitle {
  font-size: 0.875rem;
  color: var(--color-dark-text-secondary);
}

.meta-fields-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);
  margin-top: var(--space-6);

  @include respond-to('md') {
    grid-template-columns: repeat(2, 1fr);
  }

  .full-width {
    grid-column: 1 / -1;
  }
}

.field-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-dark-text-muted);
  margin-bottom: var(--space-2);
}

.field-input {
  width: 100%;
  padding: 10px 14px;
  border-radius: var(--radius-chip);
  background-color: var(--color-dark-surface);
  border: 1px solid var(--color-dark-border);
  color: var(--color-dark-text-primary);
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: var(--color-accent-terracotta);
  }
}

.font-mono {
  font-family: var(--font-mono);
}

.blocks-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  margin-top: var(--space-6);
}

.block-card {
  background-color: var(--color-dark-surface);
  border: 1px solid var(--color-dark-border);
  border-radius: var(--radius-card);
  overflow: hidden;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-3) var(--space-4);
    background-color: #121111;
    border-bottom: 1px solid var(--color-dark-border-subtle);
  }

  &__body {
    padding: var(--space-5);
  }
}

.block-info {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
}

.drag-handle {
  cursor: grab;
  color: var(--color-dark-text-muted);
  display: flex;
  align-items: center;
  padding: 4px;

  &:active {
    cursor: grabbing;
  }
}

.block-type-badge {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: var(--radius-chip);
  background-color: rgba(224, 93, 56, 0.15);
  color: var(--color-accent-terracotta);
}

.block-title-input {
  border: none;
  background: transparent;
  color: var(--color-dark-text-primary);
  font-size: 0.875rem;
  font-weight: 500;
  flex: 1;

  &:focus {
    outline: none;
  }
}

.block-actions {
  display: flex;
  align-items: center;
  gap: 2px;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: var(--radius-chip);
  color: var(--color-dark-text-muted);

  &:hover:not(:disabled) {
    background-color: var(--color-dark-surface-elevated);
    color: var(--color-dark-text-primary);
  }

  &--danger:hover {
    color: var(--color-danger);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
}

.palette-bar {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-top: var(--space-8);
  padding: var(--space-5);
  background-color: var(--color-dark-surface);
  border: 1px dashed var(--color-dark-border);
  border-radius: var(--radius-card);

  @include respond-to('md') {
    flex-direction: row;
    align-items: center;
  }
}

.palette-title {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-dark-text-muted);
}

.palette-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.palette-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: 6px 14px;
  background-color: var(--color-dark-surface-elevated);
  border: 1px solid var(--color-dark-border);
  border-radius: var(--radius-pill);
  font-size: 0.75rem;
  color: var(--color-dark-text-secondary);
  transition: all 0.15s ease;

  &:hover {
    color: var(--color-dark-text-primary);
    border-color: rgba(255, 255, 255, 0.3);
  }
}

.image-fields,
.quote-fields {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.stats-fields-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}
</style>
