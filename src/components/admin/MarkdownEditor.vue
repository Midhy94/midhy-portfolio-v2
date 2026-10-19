<script setup lang="ts">
import { ref, computed } from 'vue';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { Bold, Italic, Heading2, Heading3, List, Link as LinkIcon, Quote, Eye, Edit3 } from 'lucide-vue-next';

const props = defineProps<{
  modelValue: string;
  placeholder?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const activeTab = ref<'write' | 'preview'>('write');
const textareaRef = ref<HTMLTextAreaElement | null>(null);

const sanitizedHtml = computed(() => {
  if (!props.modelValue) return '<p class="empty-preview">Nothing to preview yet.</p>';
  const rawHtml = marked.parse(props.modelValue, { async: false }) as string;
  return DOMPurify.sanitize(rawHtml);
});

function insertFormatting(prefix: string, suffix: string = '') {
  const el = textareaRef.value;
  if (!el) return;

  const start = el.selectionStart;
  const end = el.selectionEnd;
  const text = props.modelValue || '';
  const selected = text.substring(start, end);

  const replacement = `${prefix}${selected || 'text'}${suffix}`;
  const newValue = text.substring(0, start) + replacement + text.substring(end);

  emit('update:modelValue', newValue);

  setTimeout(() => {
    el.focus();
    el.setSelectionRange(start + prefix.length, start + prefix.length + (selected ? selected.length : 4));
  }, 10);
}
</script>

<template>
  <div class="markdown-editor">
    <!-- Toolbar -->
    <div class="editor-toolbar">
      <div class="toolbar-tools" v-if="activeTab === 'write'">
        <button type="button" class="tool-btn" @click="insertFormatting('**', '**')" title="Bold">
          <Bold :size="14" />
        </button>
        <button type="button" class="tool-btn" @click="insertFormatting('*', '*')" title="Italic">
          <Italic :size="14" />
        </button>
        <button type="button" class="tool-btn" @click="insertFormatting('## ')" title="Heading 2">
          <Heading2 :size="14" />
        </button>
        <button type="button" class="tool-btn" @click="insertFormatting('### ')" title="Heading 3">
          <Heading3 :size="14" />
        </button>
        <button type="button" class="tool-btn" @click="insertFormatting('- ')" title="Bullet List">
          <List :size="14" />
        </button>
        <button type="button" class="tool-btn" @click="insertFormatting('[', '](https://)')" title="Link">
          <LinkIcon :size="14" />
        </button>
        <button type="button" class="tool-btn" @click="insertFormatting('> ')" title="Quote">
          <Quote :size="14" />
        </button>
      </div>
      <div v-else class="toolbar-placeholder">
        <span>Sanitized Preview Mode</span>
      </div>

      <!-- Mode Toggle -->
      <div class="tab-toggle">
        <button
          type="button"
          class="tab-btn"
          :class="{ 'tab-btn--active': activeTab === 'write' }"
          @click="activeTab = 'write'"
        >
          <Edit3 :size="12" />
          <span>Write</span>
        </button>
        <button
          type="button"
          class="tab-btn"
          :class="{ 'tab-btn--active': activeTab === 'preview' }"
          @click="activeTab = 'preview'"
        >
          <Eye :size="12" />
          <span>Preview</span>
        </button>
      </div>
    </div>

    <!-- Edit Pane -->
    <div class="editor-pane">
      <textarea
        v-if="activeTab === 'write'"
        ref="textareaRef"
        :value="modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
        :placeholder="placeholder || 'Type markdown content here...'"
        class="editor-textarea"
        rows="8"
      ></textarea>

      <!-- Preview Pane (Sanitized) -->
      <div
        v-else
        class="editor-preview markdown-body"
        v-html="sanitizedHtml"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.markdown-editor {
  border: 1px solid var(--color-dark-border);
  border-radius: var(--radius-card);
  background-color: var(--color-dark-surface);
  overflow: hidden;
}

.editor-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background-color: var(--color-dark-card);
  border-bottom: 1px solid var(--color-dark-border-subtle);
}

.toolbar-tools {
  display: flex;
  align-items: center;
  gap: 4px;
}

.toolbar-placeholder {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  color: var(--color-dark-text-muted);
}

.tool-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: var(--radius-chip);
  color: var(--color-dark-text-secondary);
  transition: all 0.15s ease;

  &:hover {
    background-color: var(--color-dark-surface-elevated);
    color: var(--color-dark-text-primary);
  }
}

.tab-toggle {
  display: flex;
  align-items: center;
  background-color: var(--color-dark-surface);
  border-radius: var(--radius-pill);
  padding: 2px;
  border: 1px solid var(--color-dark-border-subtle);
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 10px;
  border-radius: var(--radius-pill);
  font-family: var(--font-sans);
  font-size: 0.6875rem;
  font-weight: 500;
  color: var(--color-dark-text-muted);
  transition: all 0.2s ease;

  &--active {
    background-color: oklch(1 0 0);
    color: oklch(0 0 0);
    font-weight: 600;
  }
}

.editor-pane {
  min-height: 180px;
}

.editor-textarea {
  width: 100%;
  padding: 14px;
  background: transparent;
  border: none;
  color: var(--color-dark-text-primary);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.6;
  resize: vertical;

  &:focus {
    outline: none;
  }
}

.editor-preview {
  padding: 16px;
  color: var(--color-dark-text-primary);
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  line-height: 1.65;
  min-height: 180px;

  :deep(h2) {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    color: var(--color-dark-text-primary);
  }

  :deep(h3) {
    font-size: 1.1rem;
    font-weight: 600;
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
    color: var(--color-dark-text-primary);
  }

  :deep(p) {
    margin-bottom: 0.75rem;
    color: var(--color-dark-text-secondary);
  }

  :deep(ul) {
    padding-left: 1.25rem;
    margin-bottom: 0.75rem;
    list-style: disc;

    li {
      color: var(--color-dark-text-secondary);
      margin-bottom: 0.25rem;
    }
  }

  :deep(blockquote) {
    border-left: 3px solid var(--color-accent-terracotta);
    padding-left: 1rem;
    font-style: italic;
    color: var(--color-dark-text-secondary);
    margin: 1rem 0;
  }

  :deep(a) {
    color: var(--color-accent-blue);
    text-decoration: underline;
  }

  :deep(.empty-preview) {
    color: var(--color-dark-text-muted);
    font-style: italic;
  }
}
</style>
