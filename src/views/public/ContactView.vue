<script setup lang="ts">
import { ref } from 'vue';
import { useUiStore } from '@/stores/ui.store';
import { Mail, MapPin, Send, ArrowUpRight, Copy, Check } from 'lucide-vue-next';

const uiStore = useUiStore();

const form = ref({
  name: '',
  email: '',
  category: 'Product Design Leadership',
  message: '',
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const copiedEmail = ref(false);

const emailAddress = 'mnairmidhun@gmail.com';

function copyDirectEmail() {
  navigator.clipboard.writeText(emailAddress).then(() => {
    copiedEmail.value = true;
    uiStore.addToast('Email copied to clipboard: mnairmidhun@gmail.com', 'success');
    setTimeout(() => {
      copiedEmail.value = false;
    }, 2400);
  });
}

const engagementCategories = [
  'Product Design Leadership / Senior Role',
  'Enterprise UX Architecture & Redesign',
  'Design Token Architecture & Systems',
  'Rapid AI-Assisted Prototyping',
  'Advisory & Consulting',
];

const directLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/midhy/' },
  { name: 'Behance', url: 'https://www.behance.net/midhy' },
  { name: 'Dribbble', url: 'https://dribbble.com/midhy' },
];

function handleSubmit() {
  isSubmitting.value = true;
  setTimeout(() => {
    isSubmitting.value = false;
    submitSuccess.value = true;
    uiStore.addToast('Inquiry drafted! You may also write directly to mnairmidhun@gmail.com.', 'success');
  }, 500);
}
</script>

<template>
  <div class="contact-view">
    <!-- Header -->
    <header class="contact-header">
      <div class="container">
        <div class="chapter-mark">
          <span class="chapter-mark__num">01</span>
          <span class="chapter-mark__rule"></span>
          <span>Direct Inquiries</span>
        </div>

        <h1 class="contact-title">Direct conversation and engagement inquiries.</h1>
        <p class="contact-lead">
          Available for Senior & Principal Product Design roles, enterprise UX architecture, and design system governance. Direct recruiter correspondence and collaborative discussions are welcomed.
        </p>
      </div>
    </header>

    <!-- Main Content Grid -->
    <main class="contact-body">
      <div class="container">
        <div class="contact-grid">
          <!-- Left Info Column -->
          <div class="contact-info">
            <h2 class="info-title">Verified Channels</h2>
            <p class="info-desc">
              For immediate correspondence regarding product roles or speaking opportunities, reach out directly via email or LinkedIn.
            </p>

            <div class="channels-stack">
              <div class="channel-row">
                <div class="channel-icon">
                  <Mail :size="18" />
                </div>
                <div class="channel-text">
                  <span class="channel-label">Primary Email</span>
                  <a :href="`mailto:${emailAddress}`" class="channel-val">{{ emailAddress }}</a>
                </div>
                <button
                  type="button"
                  class="btn-copy"
                  :aria-label="copiedEmail ? 'Copied' : 'Copy email address'"
                  @click="copyDirectEmail"
                >
                  <Check v-if="copiedEmail" :size="14" class="copy-success" />
                  <Copy v-else :size="14" />
                </button>
              </div>

              <div class="channel-row">
                <div class="channel-icon">
                  <MapPin :size="18" />
                </div>
                <div class="channel-text">
                  <span class="channel-label">Base Location & Mobility</span>
                  <span class="channel-val">Alappuzha, Kerala, India (UTC +05:30)</span>
                  <small class="channel-note">Open to remote, hybrid, and relocation</small>
                </div>
              </div>
            </div>

            <!-- Verified Portfolios -->
            <div class="profiles-section">
              <span class="profiles-label">Portfolio & Social Networks</span>
              <div class="profiles-list">
                <a
                  v-for="item in directLinks"
                  :key="item.name"
                  :href="item.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="profile-link"
                >
                  <span>{{ item.name }}</span>
                  <ArrowUpRight :size="13" class="arrow-icon" />
                </a>
              </div>
            </div>
          </div>

          <!-- Right Form Column -->
          <div class="contact-form-wrapper">
            <div v-if="submitSuccess" class="success-panel">
              <span class="success-tag">Transmission Recorded</span>
              <h3 class="success-title">Thank you for reaching out.</h3>
              <p class="success-desc">
                Your message details have been captured. You can also send formal RFPs and specifications directly to
                <a :href="`mailto:${emailAddress}`" class="email-link">{{ emailAddress }}</a>.
              </p>
              <button type="button" class="button button--outline button--small" @click="submitSuccess = false">
                <span>Send Another Message</span>
              </button>
            </div>

            <form v-else class="inquiry-form" @submit.prevent="handleSubmit">
              <div class="form-head">
                <h2 class="form-heading">Project or Opportunity Brief</h2>
                <span class="form-sub">Responses typically delivered within 24 business hours.</span>
              </div>

              <div class="form-group">
                <label for="contact-name" class="input-label">Your Name</label>
                <input
                  id="contact-name"
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="e.g. Eleanor Vance"
                  class="text-input"
                />
              </div>

              <div class="form-group">
                <label for="contact-email" class="input-label">Work Email</label>
                <input
                  id="contact-email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="e.g. eleanor@company.com"
                  class="text-input"
                />
              </div>

              <div class="form-group">
                <label for="contact-category" class="input-label">Engagement Focus</label>
                <select id="contact-category" v-model="form.category" class="text-input select-input">
                  <option v-for="cat in engagementCategories" :key="cat" :value="cat">
                    {{ cat }}
                  </option>
                </select>
              </div>

              <div class="form-group">
                <label for="contact-message" class="input-label">Scope & Timeline Details</label>
                <textarea
                  id="contact-message"
                  v-model="form.message"
                  rows="4"
                  required
                  placeholder="Describe your product challenges, team requirements, or project timeline..."
                  class="text-input textarea-input"
                ></textarea>
              </div>

              <button type="submit" class="button button--primary" :disabled="isSubmitting">
                <Send :size="15" />
                <span>{{ isSubmitting ? 'Transmitting...' : 'Send Inquiry' }}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.contact-view {
  background-color: var(--color-bg-page);
  color: var(--color-text-primary);
  min-height: 100vh;
}

.contact-header {
  padding: var(--space-12) 0 var(--space-10);
  border-bottom: 1px solid var(--color-border);
}

.contact-title {
  margin-bottom: var(--space-4);
  max-width: 820px;
}

.contact-lead {
  font-size: clamp(1.0625rem, 1.25vw, 1.1875rem);
  line-height: 1.6;
  color: var(--color-text-secondary);
  max-width: 680px;
}

.contact-body {
  padding: var(--space-14) 0 var(--space-24);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);

  @include respond-to('lg') {
    grid-template-columns: 1fr 1.2fr;
    gap: var(--space-16);
  }
}

// ---------------------------------------------
// Left Info Column
// ---------------------------------------------
.contact-info {
  .info-title {
    font-size: 1.5rem;
    margin-bottom: var(--space-3);
  }

  .info-desc {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
    margin-bottom: var(--space-8);
  }
}

.channels-stack {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-bottom: var(--space-10);
}

.channel-row {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-5) var(--space-6);
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);

  .channel-icon {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-sm);
    background-color: var(--color-bg-surface);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-accent-terracotta);
    flex-shrink: 0;
  }

  .channel-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .channel-label {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    text-transform: uppercase;
    color: var(--color-text-muted);
  }

  .channel-val {
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--color-text-primary);
    text-decoration: none;

    &:hover {
      color: var(--color-accent-terracotta);
    }
  }

  .channel-note {
    font-size: 0.75rem;
    color: var(--color-text-muted);
  }

  .btn-copy {
    width: 32px;
    height: 32px;
    border-radius: var(--radius-sm);
    background-color: var(--color-bg-surface);
    border: 1px solid var(--color-border);
    color: var(--color-text-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all var(--transition-fast);

    &:hover {
      color: var(--color-text-primary);
      background-color: var(--color-border);
    }

    .copy-success {
      color: var(--color-success);
    }
  }
}

.profiles-section {
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-border);

  .profiles-label {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    text-transform: uppercase;
    color: var(--color-text-muted);
    margin-bottom: var(--space-4);
    display: block;
  }

  .profiles-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
  }

  .profile-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: 6px 14px;
    border-radius: var(--radius-sm);
    background-color: var(--color-bg-card);
    border: 1px solid var(--color-border);
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--color-text-primary);
    text-decoration: none;
    transition: all var(--transition-fast);

    &:hover {
      border-color: var(--color-border-strong);
      color: var(--color-accent-terracotta);
    }

    .arrow-icon {
      opacity: 0.5;
      transition: transform var(--transition-fast);
    }

    &:hover .arrow-icon {
      opacity: 1;
      transform: translate(2px, -2px);
    }
  }
}

// ---------------------------------------------
// Right Form Column
// ---------------------------------------------
.contact-form-wrapper {
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-8);
  box-shadow: var(--shadow-card);

  @include respond-to('md') {
    padding: var(--space-10);
  }
}

.inquiry-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);

  .form-head {
    margin-bottom: var(--space-2);
  }

  .form-heading {
    font-size: 1.25rem;
    margin-bottom: var(--space-1);
  }

  .form-sub {
    font-size: 0.8125rem;
    color: var(--color-text-muted);
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);

  .input-label {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--color-text-muted);
  }

  .text-input {
    width: 100%;
    padding: 11px 14px;
    border-radius: var(--radius-sm);
    background-color: var(--color-bg-page);
    border: 1px solid var(--color-border);
    color: var(--color-text-primary);
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    transition: border-color var(--transition-fast);

    &:focus {
      outline: none;
      border-color: var(--color-accent-terracotta);
    }
  }

  .select-input {
    cursor: pointer;
  }

  .textarea-input {
    resize: vertical;
    min-height: 110px;
  }
}

.success-panel {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-6);

  .success-tag {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    text-transform: uppercase;
    color: var(--color-success);
    font-weight: 600;
  }

  .success-title {
    font-size: 1.5rem;
  }

  .success-desc {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
  }

  .email-link {
    color: var(--color-accent-terracotta);
    font-weight: 600;
    text-decoration: underline;
  }
}
</style>
