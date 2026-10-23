<template>
  <footer id="contact" class="site-footer" data-theme="dark" role="contentinfo">
    <div class="footer-container container-editorial">
      <div class="footer-top-row">
        <div class="footer-content">
          <h2 class="footer-headline font-serif">
            {{ mode === 'works' ? FOOTER_CONTENT.works.headline : FOOTER_CONTENT.personal.headline }}
          </h2>

          <p class="footer-subtext">
            {{ mode === 'works' ? FOOTER_CONTENT.works.subtext : FOOTER_CONTENT.personal.subtext }}
          </p>

          <!-- Interactive Copy-to-Clipboard Email Box -->
          <button
            type="button"
            class="email-action-box"
            :class="{ copied }"
            @click="handleCopyEmail"
            :aria-label="copied ? 'Email copied to clipboard' : 'Click to copy email address mnairmidhun@gmail.com'"
          >
            <span class="email-prompt">
              <template v-if="copied">
                <span class="copied-check">✓ Copied to clipboard!</span>
              </template>
              <template v-else>
                <span class="prompt-label">Drop me an email directly at —</span>
                <span class="prompt-address">{{ FOOTER_CONTENT.email }}</span>
              </template>
            </span>
            <span class="email-action-hint">
              {{ copied ? 'Ready to paste' : '(click to copy)' }}
            </span>
          </button>
        </div>

        <!-- Right Side: Social Links & Live Status Widget (Matching user screenshots) -->
        <div class="footer-aside">
          <!-- Social Links Column (Matching fluid hover & color fade) -->
          <nav class="footer-social-column" aria-label="Social Profiles">
            <a
              v-for="social in FOOTER_CONTENT.socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="footer-social-link"
            >
              <span class="social-roller">
                <span class="social-line line--default">{{ social.label }}</span>
                <span class="social-line line--hover" aria-hidden="true">{{ social.label }}</span>
              </span>
            </a>
          </nav>
        </div>
      </div>


      <!-- Signature Large Wordmark Logo (Like Faizur.com footer__wordmark) -->
      <div class="footer-wordmark-stage" aria-hidden="true">
        <svg
          class="footer-wordmark-svg"
          viewBox="0 0 1915 317"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M191.098 46.5661C199.976 52.9368 203.585 60.6829 207.598 67.8988L248.347 138.414C255.507 150.643 259.087 157.704 259.087 159.597H261.087C262.477 156.127 264.234 152.501 266.359 148.719L311.367 70.0034C318.97 56.1547 324.29 48.3355 332.701 44.0654C343.996 39.1751 355.945 39.2681 364.914 41.6117C376.953 46.9352 383.171 58.1432 389.13 69.1352L513.385 290.988C519.222 300.468 521.443 306.35 520.048 308.637C517.91 311.619 515.578 313.121 513.052 313.144L367.624 313.288C357.119 313.369 349.602 311.485 345.074 307.637C340.937 303.216 336.938 297.048 333.076 289.132L263.774 167.095C262.077 164.003 260.515 162.171 259.087 161.597C257.696 165.071 255.962 168.735 253.885 172.589L186.146 291.109C179.335 302.107 172.32 309.283 165.102 312.638C161.631 313.152 156.348 313.363 149.253 313.269L7.10374 313.144C3.90622 312.068 1.58057 310.566 0.126795 308.637C-0.384461 305.342 0.650382 301.282 3.23132 296.458L131.974 67.5708C137.928 57.0599 145.174 45.7138 157.103 41.5647C169.379 38.986 180.78 38.929 191.098 46.5661Z"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="currentColor"
          />
          <path
            d="M508.254 178.468L579.878 178.245C587.77 178.305 593.521 180.968 599.185 186.63L652.968 285.584C661.426 299.371 664.845 307.727 663.225 310.65C661.576 312.301 659.379 313.054 656.634 312.911L548.314 313.025C545.984 312.173 544.263 311.048 543.151 309.649L488.117 208.634C485.735 204.377 485.068 199.043 486.116 192.631C488.403 187.041 492.072 182.707 497.122 179.629C500.744 178.706 504.454 178.319 508.254 178.468Z"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="currentColor"
          />
          <path
            d="M835 40H923C937.667 40 945 47.3333 945 62V291C945 305.667 937.667 313 923 313H736C703.333 313 680 301.667 666 279C654 256.333 654 234 666 212C679.333 189.333 702.667 178 736 178H835V40ZM756 230C741.333 230 734 235.167 734 245.5C734 255.833 741.333 261 756 261H835V230H756Z"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="currentColor"
          />
          <path
            d="M963 62C963 47.3333 970.333 40 985 40H1073V178H1138C1170.67 178 1194 191 1208 217L1254 297C1260 307.667 1257 313 1245 313H1164C1155.33 313 1148.67 308.667 1144 300L1113 246C1108.33 238 1101.33 234 1092 234H1073V291C1073 305.667 1065.67 313 1051 313H985C970.333 313 963 305.667 963 291V62Z"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="currentColor"
          />
          <path
            d="M1248 178H1348V240C1348 252 1354.67 258 1368 258H1426V178H1536V291C1536 305.667 1528.67 313 1514 313H1338C1278 313 1248 283 1248 223V178Z"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="currentColor"
          />
          <path
            d="M1553 178H1728C1760.67 178 1784 191 1798 217L1844 297C1850 307.667 1847 313 1835 313H1754C1745.33 313 1738.67 308.667 1734 300L1703 246C1698.33 238 1691.33 234 1682 234H1663V291C1663 305.667 1655.67 313 1641 313H1575C1560.33 313 1553 305.667 1553 291V178Z"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="currentColor"
          />
          <circle cx="1885" cy="287" r="30" fill="#B84A27" />
        </svg>
      </div>

      <!-- Bottom baseline metadata -->
      <div class="footer-baseline">
        <div class="baseline-left">
          <span>{{ FOOTER_CONTENT.copyright }}</span>
          <span class="baseline-divider">/</span>
          <span>Alappuzha, Kerala, India</span>
        </div>
        <div class="baseline-right">
          <span class="designer-role">{{ FOOTER_CONTENT.roleLabel }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { PortfolioMode } from '@/types/portfolio';
import { FOOTER_CONTENT } from '@/data/portfolioData';
import { useClipboard } from '@/composables/useClipboard';

const props = defineProps<{
  mode: PortfolioMode;
}>();

const { copied, copy } = useClipboard();

const handleCopyEmail = () => {
  copy(FOOTER_CONTENT.email);
};
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.site-footer {
  background-color: var(--color-ink);
  color: var(--color-chalk);
  padding: clamp(5rem, 8vw, 7.5rem) 0 clamp(3.5rem, 5vw, 4.5rem);
  position: relative;
  border-top: 1px solid var(--color-border-dark);
  overflow: hidden;

  .footer-container {
    display: flex;
    flex-direction: column;
    min-height: 480px;
    justify-content: space-between;
  }

  .footer-top-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: clamp(2.5rem, 5vw, 5rem);
    margin-bottom: clamp(3rem, 5vw, 4.5rem);
  }

  .footer-content {
    flex: 1 1 auto;
    max-width: 760px;

    .footer-overline {
      color: var(--color-laterite);
      margin-bottom: 1.25rem;
    }

    .footer-headline {
      font-size: clamp(2.25rem, 5vw, 3.75rem);
      font-weight: 400;
      line-height: 1.15;
      letter-spacing: -0.02em;
      color: var(--color-chalk);
      margin: 0 0 1.25rem;
    }

    .footer-subtext {
      font-size: clamp(1rem, 1.8vw, 1.25rem);
      line-height: 1.6;
      color: #A8A29E;
      margin: 0 0 2.25rem;
      max-width: 580px;
    }

    .email-action-box {
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      gap: clamp(1rem, 2vw, 1.75rem);
      background-color: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: var(--radius-full);
      padding: 0.875rem clamp(1.25rem, 2vw, 1.75rem);
      color: var(--color-chalk);
      font-size: clamp(0.875rem, 1.1vw, 0.9375rem);
      cursor: pointer;
      text-align: left;
      white-space: nowrap;
      max-width: 100%;
      transition: all $transition-fast;

      .email-prompt {
        font-weight: 400;
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        white-space: nowrap;

        .prompt-label {
          font-family: var(--font-family-sans);
          color: var(--color-chalk);
        }

        .prompt-address {
          font-family: var(--font-family-mono);
          color: #FFFFFF;
          font-weight: 500;
        }

        .copied-check {
          font-family: var(--font-family-sans);
          color: #F8B49E;
          font-weight: 500;
        }
      }

      .email-action-hint {
        color: #8A827B;
        font-size: 0.8125rem;
        font-family: var(--font-family-mono);
        white-space: nowrap;
        flex-shrink: 0;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.35);
        transform: translateY(-1px);
      }

      &.copied {
        background-color: rgba(184, 74, 39, 0.18);
        border-color: var(--color-laterite);
        color: #F8B49E;

        .email-action-hint {
          color: #F8B49E;
        }
      }

      &:focus-visible {
        outline: 2px solid var(--color-laterite);
        outline-offset: 3px;
      }
    }
  }

  // Right Side: Social Profiles & Live Weather/Mood Status Widget
  .footer-aside {
    flex: 0 0 auto;
    display: flex;
    gap: clamp(2.5rem, 4.5vw, 4.5rem);
    align-items: flex-start;
    padding-top: 0.5rem;

    .footer-social-column {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      min-width: 140px;

      // Sibling color fade just like the toggle menu
      &:has(.footer-social-link:hover) .footer-social-link:not(:hover) {
        opacity: 0.35;
      }

      .footer-social-link {
        font-family: var(--font-family-sans);
        font-size: clamp(1.35rem, 1.8vw, 1.75rem);
        font-weight: 400;
        line-height: 1.35;
        letter-spacing: -0.015em;
        color: var(--color-chalk);
        text-decoration: none;
        display: inline-flex;
        transition: color $transition-fast, opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1);

        .social-roller {
          display: inline-flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          height: 1.35em;
          vertical-align: top;

          .social-line {
            display: block;
            line-height: 1.35;
            white-space: nowrap;
            transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
            will-change: transform;

            &.line--default {
              transform: translateY(0%);
            }

            &.line--hover {
              position: absolute;
              top: 100%;
              left: 0;
              width: 100%;
              color: #FFFFFF;
              transform: translateY(0%);
            }
          }
        }

        &:hover {
          color: #FFFFFF;

          .social-line.line--default {
            transform: translateY(-100%);
          }

          .social-line.line--hover {
            transform: translateY(-100%);
          }
        }

        &:focus-visible {
          outline: 2px solid var(--color-laterite);
          outline-offset: 4px;
        }
      }
    }
  }

  // Large Signature Wordmark Logo matching reference link (Faizur.com)
  .footer-wordmark-stage {
    width: 100%;
    margin: clamp(2rem, 4vw, 3.5rem) 0 clamp(2.5rem, 5vw, 4rem);
    display: flex;
    justify-content: center;
    color: rgba(247, 244, 238, 0.08);
    user-select: none;
    pointer-events: none;

    .footer-wordmark-svg {
      width: 100%;
      max-width: 1140px;
      height: auto;
      max-height: 220px;
      display: block;
      transition: opacity $transition-base;
    }
  }

  .footer-baseline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.8125rem;
    color: #8A827B;

    .baseline-left {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      .baseline-divider {
        color: #57534E;
      }
    }

    .baseline-right {
      .designer-role {
        letter-spacing: 0.04em;
        text-transform: uppercase;
        font-size: 0.75rem;
        font-weight: 500;
      }
    }
  }
}

@media (max-width: 980px) {
  .site-footer {
    .footer-top-row {
      flex-direction: column;
      gap: 3.5rem;
    }

    .footer-aside {
      width: 100%;
      justify-content: flex-start;
      gap: clamp(3rem, 6vw, 4.5rem);
    }
  }
}

@media (max-width: 768px) {
  .site-footer {
    .email-action-box {
      .prompt-label {
        display: none; // Keep button compact and single-line on smaller viewports
      }
    }
  }
}

@media (max-width: 540px) {
  .site-footer {
    .footer-aside {
      flex-direction: column;
      gap: 2.5rem;
    }

    .email-action-box {
      width: 100%;
      border-radius: var(--radius-lg);
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      white-space: normal;

      .email-prompt {
        white-space: normal;
        word-break: break-all;
      }
    }

    .footer-wordmark-stage {
      margin: 1.5rem 0 2rem;

      .footer-wordmark-svg {
        max-height: 120px;
      }
    }

    .footer-baseline {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }
  }
}
</style>
