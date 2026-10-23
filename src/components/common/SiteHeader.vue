<template>
  <header
    class="header"
    :class="{
      'header--stuck': isScrolled,
      'header--hidden': isHidden,
      'header--over-dark': isOverDark,
      'header--menu-open': isMenuOpen
    }"
    role="banner"
  >
    <div class="header__bar">
      <!-- Left: Brand Logo (No Switcher - floating switch is at bottom center) -->
      <div class="header__start">
        <RouterLink
          :to="mode === 'works' ? '/work' : '/'"
          class="header__logo"
          aria-label="Midhun M. — Home"
        >
          <svg
            class="header__logo-svg"
            width="65"
            height="24"
            viewBox="0 0 754 277"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              class="logo-mark"
              d="M191.207 9.62925C191.898 10.0778 192.589 10.5264 193.3 10.9886C200.087 15.998 203.696 23.7416 207.71 30.9564C209.932 34.9237 212.216 38.854 214.496 42.7887C216.428 46.1247 218.353 49.4643 220.277 52.805C220.927 53.9338 221.577 55.0625 222.247 56.2254C223.217 57.9103 223.217 57.9103 224.207 59.6293C226.727 64.0048 229.247 68.3798 231.769 72.7543C232.384 73.8203 232.998 74.8864 233.631 75.9847C238.54 84.4944 243.487 92.982 248.465 101.452C259.207 119.79 259.207 119.79 259.207 122.629C259.867 122.629 260.527 122.629 261.207 122.629C261.469 121.925 261.732 121.222 262.002 120.496C263.292 117.426 264.818 114.64 266.48 111.754C267.134 110.615 267.787 109.476 268.461 108.303C269.168 107.078 269.875 105.854 270.582 104.629C271.312 103.359 272.041 102.089 272.771 100.819C274.235 98.271 275.7 95.7237 277.166 93.1771C279.881 88.4606 282.574 83.7321 285.269 79.0043C288.44 73.4491 291.624 67.9019 294.824 62.3636C295.45 61.2796 296.076 60.1956 296.722 59.0787C297.998 56.8714 299.276 54.6649 300.555 52.4591C303.679 47.0603 306.764 41.6461 309.769 36.18C310.338 35.1506 310.908 34.1211 311.494 33.0604C312.554 31.1377 313.605 29.21 314.644 27.2762C319.099 19.2146 324.419 11.3977 332.832 7.12925C333.711 6.66519 334.59 6.20113 335.496 5.723C344.128 2.24018 356.079 2.33276 365.05 4.67613C377.09 9.99776 383.309 21.2031 389.269 32.1918C390.273 34.0245 391.28 35.8559 392.286 37.6871C392.962 38.9167 393.638 40.1467 394.312 41.3771C397.237 46.7051 400.238 51.9865 403.269 57.2543C408.211 65.8583 413.074 74.5044 417.91 83.1681C420.834 88.402 423.769 93.6282 426.738 98.8363C443.207 127.732 443.207 127.732 443.207 131.629C443.867 131.629 444.527 131.629 445.207 131.629C452.287 144.237 459.352 156.853 466.308 169.53C473.804 183.19 481.41 196.789 489.03 210.381C492.48 216.538 495.914 222.704 499.332 228.879C503.991 237.292 508.76 245.641 513.543 253.985C513.995 254.777 514.448 255.569 514.915 256.385C515.743 257.824 516.58 259.257 517.428 260.684C519.73 264.58 521.021 267.05 520.207 271.629C518.016 274.527 516.831 275.524 513.21 276.135C512.03 276.138 510.851 276.141 509.636 276.144C508.977 276.151 508.319 276.158 507.64 276.165C505.435 276.183 503.23 276.173 501.024 276.163C499.442 276.17 497.86 276.178 496.278 276.189C491.98 276.211 487.683 276.208 483.385 276.199C479.794 276.194 476.204 276.202 472.613 276.209C464.137 276.226 455.661 276.222 447.185 276.206C438.452 276.189 429.72 276.205 420.987 276.237C413.482 276.264 405.978 276.271 398.474 276.262C393.995 276.257 389.517 276.26 385.038 276.28C380.821 276.299 376.605 276.292 372.388 276.268C370.846 276.263 369.303 276.266 367.76 276.279C359.337 276.343 351.98 276.243 345.207 270.629C340.155 265.203 336.759 258.586 333.207 252.129C332.064 250.079 330.919 248.029 329.773 245.981C329.187 244.932 328.6 243.883 327.996 242.802C325.102 237.67 322.124 232.587 319.144 227.504C313.32 217.557 307.576 207.567 301.873 197.551C300.004 194.274 298.129 191 296.254 187.727C284.267 166.803 284.267 166.803 279.019 157.317C275.093 150.227 271.164 143.139 267.207 136.067C266.642 135.047 266.077 134.028 265.495 132.978C264.967 132.036 264.438 131.095 263.894 130.125C263.424 129.282 262.953 128.438 262.468 127.568C261.348 125.489 261.348 125.489 259.207 124.629C258.943 125.331 258.679 126.032 258.407 126.755C257.12 129.838 255.616 132.691 254.004 135.618C253.689 136.189 253.375 136.76 253.052 137.348C252.024 139.215 250.99 141.078 249.957 142.942C249.6 143.586 249.244 144.23 248.877 144.894C242.413 156.576 235.732 168.124 228.963 179.633C225.895 184.867 222.863 190.123 219.832 195.379C218.901 196.992 218.901 196.992 217.952 198.638C213.689 206.039 209.446 213.451 205.212 220.868C204.212 222.62 203.211 224.372 202.21 226.123C201.88 226.699 201.551 227.275 201.212 227.869C200.547 229.031 199.883 230.194 199.218 231.357C197.176 234.93 195.139 238.506 193.104 242.084C192.086 243.874 191.065 245.662 190.043 247.45C188.775 249.666 187.512 251.885 186.254 254.106C184.61 256.973 182.929 259.809 181.207 262.629C180.742 263.398 180.277 264.167 179.797 264.959C176.036 270.598 171.623 273.49 165.207 275.629C159.917 276.328 154.678 276.305 149.356 276.26C147.774 276.265 146.193 276.273 144.612 276.282C140.346 276.3 136.08 276.288 131.814 276.268C127.341 276.251 122.868 276.26 118.395 276.265C110.891 276.27 103.388 276.254 95.8854 276.226C87.2112 276.194 78.5374 276.194 69.8632 276.211C61.5081 276.227 53.1532 276.221 44.7981 276.203C41.2455 276.197 37.693 276.198 34.1405 276.205C29.9624 276.213 25.7848 276.201 21.6068 276.173C20.0733 276.166 18.5398 276.166 17.0063 276.173C14.9145 276.182 12.8243 276.166 10.7326 276.144C9.56197 276.141 8.39137 276.138 7.18531 276.135C3.57633 275.522 2.38831 274.521 0.206654 271.629C-0.559543 266.688 0.877792 263.707 3.31212 259.453C3.63321 258.884 3.95429 258.315 4.2851 257.728C5.3096 255.917 6.35132 254.117 7.39415 252.317C8.07568 251.12 8.75603 249.923 9.43517 248.725C10.7466 246.415 12.0651 244.11 13.3878 241.807C15.6994 237.769 17.9625 233.705 20.2067 229.629C20.8667 229.629 21.5267 229.629 22.2067 229.629C22.3175 228.906 22.4284 228.184 22.5426 227.439C23.2492 224.449 24.2993 222.328 25.8317 219.672C26.637 218.264 26.637 218.264 27.4586 216.827C28.3239 215.337 28.3239 215.337 29.2067 213.817C30.4047 211.727 31.6026 209.637 32.8004 207.547C33.6802 206.02 33.6802 206.02 34.5777 204.463C36.6458 200.865 38.6802 197.25 40.7067 193.629C43.7109 188.279 46.7284 182.937 49.7504 177.597C60.1809 159.163 70.5287 140.684 80.8019 122.162C94.6456 97.2029 108.532 72.2686 122.614 47.4432C124.242 44.5675 125.859 41.6866 127.476 38.805C128.532 36.9338 129.588 35.0627 130.644 33.1918C131.352 31.9228 131.352 31.9228 132.074 30.6283C138.029 20.1202 145.276 8.77728 157.207 4.62925C169.485 2.05082 180.888 1.99354 191.207 9.62925Z"
              fill="currentColor"
            />
            <path
              class="logo-mark"
              d="M518.331 141.468C519.159 141.463 519.987 141.458 520.84 141.453C523.582 141.439 526.324 141.432 529.066 141.426C530.973 141.421 532.88 141.415 534.787 141.409C538.789 141.399 542.79 141.393 546.791 141.389C551.91 141.384 557.029 141.36 562.148 141.331C566.089 141.313 570.03 141.307 573.972 141.306C575.858 141.303 577.745 141.295 579.631 141.282C582.276 141.265 584.92 141.267 587.565 141.273C588.339 141.264 589.113 141.255 589.911 141.245C597.798 141.305 603.545 143.968 609.206 149.629C610.184 151.52 611.155 153.413 612.079 155.33C614.126 159.505 616.406 163.555 618.644 167.629C619.713 169.582 620.782 171.536 621.851 173.489C622.678 175 622.678 175 623.521 176.542C626.307 181.646 629.068 186.763 631.831 191.879C636.061 199.703 640.34 207.496 644.682 215.258C647.413 220.156 650.046 225.097 652.644 230.067C655.92 236.332 659.389 242.464 662.956 248.567C674.211 267.892 674.211 267.892 673.206 273.629C670.732 276.104 670.028 275.882 666.62 275.89C665.654 275.897 664.688 275.904 663.693 275.912C662.629 275.909 661.566 275.907 660.47 275.904C659.353 275.909 658.236 275.914 657.085 275.92C653.377 275.934 649.669 275.933 645.96 275.93C643.392 275.934 640.824 275.938 638.256 275.943C632.866 275.951 627.477 275.951 622.087 275.945C615.855 275.939 609.622 275.951 603.39 275.973C597.398 275.992 591.406 275.996 585.414 275.992C582.863 275.993 580.311 275.998 577.76 276.008C574.197 276.02 570.635 276.013 567.072 276.002C566.011 276.009 564.949 276.017 563.856 276.025C562.887 276.018 561.918 276.011 560.92 276.004C559.656 276.004 559.656 276.004 558.366 276.004C555.693 275.54 554.874 274.726 553.206 272.629C552.115 270.802 551.083 268.938 550.089 267.055C549.189 265.36 549.189 265.36 548.27 263.63C547.955 263.03 547.639 262.429 547.314 261.81C546.318 259.916 545.315 258.025 544.31 256.135C542.935 253.546 541.561 250.956 540.189 248.365C537.346 243.002 534.47 237.656 531.581 232.317C531.053 231.34 530.525 230.363 529.98 229.357C525.805 221.669 521.503 214.058 517.175 206.455C510.653 194.958 504.373 183.321 498.206 171.629C497.827 170.916 497.448 170.203 497.057 169.469C495.073 165.177 495.547 160.202 496.206 155.629C498.598 150.215 502.224 145.861 507.206 142.629C510.947 141.383 514.434 141.474 518.331 141.468Z"
              fill="currentColor"
            />
            <circle cx="724" cy="247" r="30" fill="#B84A27" />
          </svg>
        </RouterLink>
      </div>

      <!-- Right: Desktop Nav Links + Contact Pill + 3x3 Dot Grid Menu Toggle -->
      <div class="header__end">
        <!-- Desktop Nav Links -->
        <nav class="header__nav" aria-label="Main Navigation">
          <template v-if="mode === 'personal'">
            <RouterLink to="/" class="nav-link" :class="{ active: route.path === '/' }">
              Overview
            </RouterLink>
            <RouterLink to="/about" class="nav-link" :class="{ active: route.path === '/about' }">
              About & Career
            </RouterLink>
          </template>
          <template v-else>
            <RouterLink to="/work" class="nav-link" :class="{ active: route.path === '/work' }">
              Selected
            </RouterLink>
            <RouterLink to="/work/archive" class="nav-link" :class="{ active: route.path === '/work/archive' }">
              Archive
            </RouterLink>
            <RouterLink to="/about" class="nav-link" :class="{ active: route.path === '/about' }">
              About
            </RouterLink>
          </template>
        </nav>

        <!-- Quick Contact Pill (Matching Faizur.com contact roll) -->
        <button
          ref="contactBtnRef"
          type="button"
          class="header__contact"
          :class="{ 'header__contact--copied': copied }"
          :data-ready="isReady ? '' : undefined"
          @click="handleCopyEmail"
          :aria-label="copied ? 'mnairmidhun@gmail.com copied to clipboard' : 'Copy email mnairmidhun@gmail.com'"
          :title="copied ? 'mnairmidhun@gmail.com copied to clipboard' : 'Click to copy mnairmidhun@gmail.com'"
        >
          <span
            ref="contactLabelRef"
            data-label="contact"
            class="contact-label"
            :data-pos="contactPos"
          >
            Contact
          </span>
          <span
            ref="emailLabelRef"
            data-label="email"
            class="email-label"
            :data-pos="emailPos"
          >
            <span class="check-badge" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C4.02943 0 0 4.02943 0 9C0 13.9705 4.02943 18 9 18C13.9705 18 18 13.9705 18 9C18 4.02943 13.9705 0 9 0ZM12.2224 7.17744C12.4585 6.88891 12.4159 6.46365 12.1274 6.22758C11.8389 5.99152 11.4136 6.03404 11.1776 6.32256L7.59989 10.6953L6.3273 9.42273C6.0637 9.15912 5.6363 9.15912 5.3727 9.42273C5.1091 9.68634 5.1091 10.1137 5.3727 10.3773L7.1727 12.1773C7.30755 12.3122 7.49316 12.3836 7.68362 12.3742C7.87409 12.3646 8.05166 12.275 8.17242 12.1274L12.2224 7.17744Z" fill="currentColor" />
              </svg>
            </span>
            <span class="email-text">mnairmidhun@gmail.com</span>
          </span>
        </button>

        <!-- 3-Slash Menu Component -->
        <div class="header__menu" ref="menuContainerRef">
          <!-- Morphing Toggle Trigger Button that transforms into the close button in place -->
          <button
            type="button"
            class="header__toggle"
            :class="{ 'header__toggle--open': isMenuOpen }"
            @click.stop="toggleMenu"
            :aria-expanded="isMenuOpen"
            :aria-label="isMenuOpen ? 'Close navigation menu' : 'Toggle navigation menu'"
          >
            <span class="toggle-icon-wrap" aria-hidden="true">
              <svg
                class="slash-icon icon-slashes"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line class="slash-line line-1" x1="4" y1="11" x2="11" y2="4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
                <line class="slash-line line-2" x1="5" y1="19" x2="19" y2="5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
                <line class="slash-line line-3" x1="13" y1="20" x2="20" y2="13" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
              </svg>
              <svg
                class="slash-icon icon-close"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </span>
          </button>

          <!-- Fluid Glass Menu Panel (Expanding from Top-Right) -->
          <Transition name="fluid-menu">
            <div
              v-if="isMenuOpen"
              class="header__panel"
              role="dialog"
              aria-modal="true"
              aria-label="Site Navigation"
              @click.stop
            >
              <!-- Panel Header: Eyebrow + Spacer for aligned toggle button -->
              <div class="panel__header">
                <span class="panel__eyebrow">MENU</span>
                <div class="panel__header-spacer" aria-hidden="true" />
              </div>

              <div class="panel__body">
                <!-- Large Editorial Navigation Links with Fluid Rolling Hover -->
                <nav class="panel__nav" aria-label="Page links">
                  <RouterLink to="/" @click="closeMenu" class="nav-item" :class="{ 'is-active': route.path === '/' }">
                    <span class="nav-roller">
                      <span class="roller-line line--default">Overview</span>
                      <span class="roller-line line--hover" aria-hidden="true">Overview</span>
                    </span>
                  </RouterLink>
                  <RouterLink to="/about" @click="closeMenu" class="nav-item" :class="{ 'is-active': route.path === '/about' }">
                    <span class="nav-roller">
                      <span class="roller-line line--default">About &amp; Career</span>
                      <span class="roller-line line--hover" aria-hidden="true">About &amp; Career</span>
                    </span>
                  </RouterLink>
                  <RouterLink to="/work" @click="closeMenu" class="nav-item" :class="{ 'is-active': route.path === '/work' }">
                    <span class="nav-roller">
                      <span class="roller-line line--default">Selected Works</span>
                      <span class="roller-line line--hover" aria-hidden="true">Selected Works</span>
                    </span>
                  </RouterLink>
                  <RouterLink to="/work/archive" @click="closeMenu" class="nav-item" :class="{ 'is-active': route.path === '/work/archive' }">
                    <span class="nav-roller">
                      <span class="roller-line line--default">Archive</span>
                      <span class="roller-line line--hover" aria-hidden="true">Archive</span>
                    </span>
                  </RouterLink>
                </nav>

                <!-- 2-Column Meta & Social Section (Matching Fluid Glass) -->
                <div class="panel__meta-grid">
                  <div class="meta-col">
                    <span class="meta-heading">CONNECT</span>
                    <div class="meta-links">
                      <a
                        href="https://linkedin.com/in/mnairmidhun"
                        target="_blank"
                        rel="noopener noreferrer"
                        @click="closeMenu"
                      >
                        <span class="meta-roller">
                          <span class="meta-line line--default">LinkedIn</span>
                          <span class="meta-line line--hover" aria-hidden="true">LinkedIn</span>
                        </span>
                      </a>
                      <a
                        href="https://github.com/midhun-m"
                        target="_blank"
                        rel="noopener noreferrer"
                        @click="closeMenu"
                      >
                        <span class="meta-roller">
                          <span class="meta-line line--default">GitHub</span>
                          <span class="meta-line line--hover" aria-hidden="true">GitHub</span>
                        </span>
                      </a>
                      <a
                        href="https://dribbble.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        @click="closeMenu"
                      >
                        <span class="meta-roller">
                          <span class="meta-line line--default">Dribbble</span>
                          <span class="meta-line line--hover" aria-hidden="true">Dribbble</span>
                        </span>
                      </a>
                      <a
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        @click="closeMenu"
                      >
                        <span class="meta-roller">
                          <span class="meta-line line--default">X (Twitter)</span>
                          <span class="meta-line line--hover" aria-hidden="true">X (Twitter)</span>
                        </span>
                      </a>
                    </div>
                  </div>

                  <div class="meta-col">
                    <span class="meta-heading">AVAILABILITY</span>
                    <div class="meta-info">
                      <div class="status-indicator">
                        <span class="status-pulse" aria-hidden="true" />
                        <span class="status-label">Available for Q4</span>
                      </div>
                      <p class="meta-location">Bengaluru, IN (Remote)</p>
                      <button
                        type="button"
                        class="meta-email-action"
                        @click="handleCopyEmail"
                        :title="copied ? 'Copied!' : 'Click to copy email'"
                      >
                        mnairmidhun@gmail.com
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Bottom Full-Width Inset Action Button (↳ GET IN TOUCH) -->
                <button
                  type="button"
                  class="panel__cta"
                  @click="handleCopyEmail"
                  :aria-label="copied ? 'Email copied to clipboard' : 'Click to copy mnairmidhun@gmail.com'"
                >
                  <span class="cta-arrow" aria-hidden="true">↳</span>
                  <span class="cta-text">
                    {{ copied ? 'COPIED TO CLIPBOARD' : 'GET IN TOUCH' }}
                  </span>
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>

    <!-- Soft Dark Background Dim Overlay -->
    <Transition name="fade-backdrop">
      <div
        v-if="isMenuOpen"
        class="header__backdrop"
        @click="closeMenu"
        aria-hidden="true"
      />
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import type { PortfolioMode } from '@/types/portfolio';

const route = useRoute();

defineProps<{
  mode: PortfolioMode;
}>();

const emit = defineEmits<{
  (e: 'toggle-menu'): void;
}>();

const isScrolled = ref(false);
const isHidden = ref(false);
const isOverDark = ref(false);
const isMenuOpen = ref(false);
const copied = ref(false);
const isReady = ref(false);
const contactPos = ref<'in' | 'out'>('in');
const emailPos = ref<'in' | 'wait' | 'right'>('wait');
const menuContainerRef = ref<HTMLElement | null>(null);

const contactBtnRef = ref<HTMLButtonElement | null>(null);
const contactLabelRef = ref<HTMLElement | null>(null);
const emailLabelRef = ref<HTMLElement | null>(null);

let contactWidth = 0;
let emailWidth = 0;
let copyTimeout: ReturnType<typeof setTimeout> | null = null;

const initContactWidths = () => {
  const btn = contactBtnRef.value;
  const contactEl = contactLabelRef.value;
  const emailEl = emailLabelRef.value;
  if (!btn || !contactEl || !emailEl) return;

  const cs = window.getComputedStyle(btn);
  const padding = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);

  // Measure natural widths of both labels
  contactWidth = Math.ceil(contactEl.offsetWidth + padding);
  emailWidth = Math.ceil(emailEl.offsetWidth + padding);

  if (contactWidth > 0) {
    btn.style.width = `${copied.value ? emailWidth : contactWidth}px`;
    isReady.value = true;
  }
};

let lastScrollY = typeof window !== 'undefined' ? Math.max(0, window.scrollY) : 0;
const scrollThreshold = 90;

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  emit('toggle-menu');
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleCopyEmail = async () => {
  try {
    await navigator.clipboard.writeText('mnairmidhun@gmail.com');
  } catch {
    window.location.href = 'mailto:mnairmidhun@gmail.com';
    return;
  }

  if (copyTimeout) clearTimeout(copyTimeout);

  const btn = contactBtnRef.value;
  if (!emailWidth || !contactWidth) {
    initContactWidths();
  }

  contactPos.value = 'out';
  emailPos.value = 'in';
  copied.value = true;
  if (btn && emailWidth) {
    btn.style.width = `${emailWidth}px`;
  }

  copyTimeout = setTimeout(() => {
    contactPos.value = 'in';
    emailPos.value = 'right';
    copied.value = false;
    if (btn && contactWidth) {
      btn.style.width = `${contactWidth}px`;
    }
  }, 1800);
};

/**
 * Automatically inspects whether the section behind the header is dark or light,
 * and handles smart hide/reveal on scroll with easing.
 */
const updateHeaderAppearance = () => {
  const scrollY = Math.max(0, window.scrollY);
  isScrolled.value = scrollY > 15;

  // Smart Hide on Scroll Down / Reveal on Scroll Up
  if (!isMenuOpen.value) {
    if (scrollY <= scrollThreshold) {
      isHidden.value = false;
    } else {
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      if (scrollY < maxScroll) {
        const delta = scrollY - lastScrollY;
        if (delta > 8) {
          isHidden.value = true;
        } else if (delta < -6) {
          isHidden.value = false;
        }
      }
    }
  } else {
    isHidden.value = false;
  }
  lastScrollY = scrollY;

  // Check any elements designated as dark sections (or footer / hero card)
  const headerHeight = 72;
  const darkElements = document.querySelectorAll(
    '[data-theme="dark"], .dark-section, .hero--dark, .site-footer, [data-dark="true"]'
  );

  let overlappingDark = false;
  darkElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= headerHeight && rect.bottom >= 0) {
      overlappingDark = true;
    }
  });

  // Dynamic luminance detection from element directly under header
  if (!overlappingDark) {
    try {
      const sampleX = window.innerWidth / 2;
      const sampleY = 36;
      const elements = document.elementsFromPoint(sampleX, sampleY);
      const target = elements.find((el) => !el.closest('.header'));
      if (target) {
        const bg = window.getComputedStyle(target).backgroundColor;
        const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (match) {
          const r = Number(match[1]);
          const g = Number(match[2]);
          const b = Number(match[3]);
          const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          if (luma < 90 && luma > 0) {
            overlappingDark = true;
          }
        }
      }
    } catch {
      // fallback to class detection
    }
  }

  isOverDark.value = overlappingDark;
};

const handleClickOutside = (event: MouseEvent) => {
  if (isMenuOpen.value && menuContainerRef.value && !menuContainerRef.value.contains(event.target as Node)) {
    closeMenu();
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isMenuOpen.value) {
    closeMenu();
  }
};

watch(isMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.classList.add('menu-is-open');
    document.body.style.overflow = 'hidden';
  } else {
    document.body.classList.remove('menu-is-open');
    document.body.style.overflow = '';
  }
});

onMounted(() => {
  window.addEventListener('scroll', updateHeaderAppearance, { passive: true });
  window.addEventListener('resize', () => {
    updateHeaderAppearance();
    initContactWidths();
  }, { passive: true });
  window.addEventListener('click', handleClickOutside);
  window.addEventListener('keydown', handleKeydown);
  updateHeaderAppearance();

  nextTick(() => {
    initContactWidths();
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        initContactWidths();
      });
    }
  });
});

onUnmounted(() => {
  if (copyTimeout) clearTimeout(copyTimeout);
  document.body.classList.remove('menu-is-open');
  document.body.style.overflow = '';
  window.removeEventListener('scroll', updateHeaderAppearance);
  window.removeEventListener('resize', updateHeaderAppearance);
  window.removeEventListener('click', handleClickOutside);
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.header {
  position: sticky;
  top: 0;
  z-index: 60;
  width: 100%;
  pointer-events: none;
  color: var(--color-ink);
  transform: translateY(0);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              color 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;

  // Smart Scroll: slide up out of view when scrolling down
  &--hidden {
    transform: translateY(-100%);
    pointer-events: none !important;

    * {
      pointer-events: none !important;
    }
  }

  &--menu-open {
    z-index: 100;
    transform: translateY(0) !important;
  }

  // When over dark background (Automatic color change for logo, text, and gradient)
  &--over-dark {
    color: #FFFFFF;

    .header__logo {
      color: #FFFFFF !important;
    }

    .header__nav .nav-link {
      color: rgba(255, 255, 255, 0.8) !important;

      &.active,
      &:hover {
        color: #FFFFFF !important;
      }
    }

    .header__toggle {
      color: #FFFFFF !important;
    }
  }

  .header__bar {
    max-width: $layout-max-width;
    margin: 0 auto;
    padding: 1.125rem clamp(1.25rem, 4vw, 3rem);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 10;
    pointer-events: auto;
  }
}

// Left Section: Just the Brand Logo
.header__start {
  display: flex;
  align-items: center;

  .header__logo {
    display: flex;
    align-items: center;
    color: var(--color-ink);
    text-decoration: none;
    transition: color 0.25s ease, opacity $transition-fast;

    &:hover {
      opacity: 0.85;
    }

    .header__logo-svg {
      height: 24px;
      width: auto;
      display: block;
    }
  }
}

// Right Section: Nav Links + Contact Pill + 3x3 Dot Grid Button
.header__end {
  display: flex;
  align-items: center;
  gap: 1rem;

  // Desktop Navigation
  .header__nav {
    display: none;
    align-items: center;
    gap: 0.5rem;

    @media (min-width: 768px) {
      display: flex;
    }

    // Faizur subtle dimming behavior on hover
    &:has(.nav-link:hover) .nav-link:not(:hover) {
      opacity: 0.45;
    }

    .nav-link {
      padding: 0.45rem 0.75rem;
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--color-muted);
      text-decoration: none;
      border-radius: 9999px; // Fully rounded pill
      transition: color 0.2s cubic-bezier(0.16, 1, 0.3, 1),
                  opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1);

      &.active,
      &:hover {
        color: var(--color-ink);
      }
    }
  }

  // Quick Contact Pill Button (Matching Faizur.com contact roll)
  .header__contact {
    display: inline-grid;
    grid-template-columns: minmax(0, 1fr);
    justify-items: center;
    align-items: center;
    text-align: center;
    height: 2.375rem;
    padding: 0 1.25rem;
    font-size: 0.875rem;
    font-weight: 550;
    font-family: var(--font-family-sans);
    color: var(--color-ink);
    background-color: #FFFFFF;
    border: none;
    border-radius: 9999px;
    box-shadow: 0 0 0 0.5px rgba(20, 18, 16, 0.08), 0 1px 2px rgba(20, 18, 16, 0.08);
    cursor: pointer;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    outline: none;
    transition: width 0.65s cubic-bezier(0.65, 0, 0.35, 1),
                background-color 0.2s ease,
                box-shadow 0.25s ease;

    &:hover:not(.header__contact--copied) {
      background-color: #F8F7F4;
    }

    &--copied {
      background-color: #FFFFFF;
      box-shadow: 0 0 0 0.5px rgba(20, 18, 16, 0.08), 0 1px 2px rgba(20, 18, 16, 0.08);
      cursor: default;
    }

    &:not([data-ready]) [data-label="email"] {
      letter-spacing: normal;
      visibility: hidden;
      position: absolute;
    }

    [data-label] {
      grid-area: 1 / 1;
      justify-self: center;
      align-items: center;
      gap: 0.45rem;
      white-space: nowrap;
      display: inline-flex;
      transition: translate 0.65s cubic-bezier(0.65, 0, 0.35, 1),
                  letter-spacing 0.65s cubic-bezier(0.65, 0, 0.35, 1),
                  opacity 0.65s cubic-bezier(0.65, 0, 0.35, 1);

      &[data-pos="in"] {
        letter-spacing: normal;
        opacity: 1;
        translate: 0 0;
      }

      &[data-pos="out"] {
        letter-spacing: 0.5em;
        opacity: 0;
        translate: -8rem 0;
      }

      &[data-pos="wait"],
      &[data-pos="right"] {
        letter-spacing: 0.5em;
        opacity: 0;
        translate: 8rem 0;
      }
    }

    .contact-label {
      color: var(--color-ink);
      line-height: 1;
    }

    .email-label {
      color: var(--color-laterite);
      font-size: 0.8125rem;
      font-weight: 550;
      line-height: 1;

      .check-badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--color-laterite);
        flex-shrink: 0;
      }

      .email-text {
        font-family: var(--font-family-sans);
        letter-spacing: -0.01em;
      }
    }
  }

  // Menu Anchor with 3-Diagonal Slashes Toggle
  .header__menu {
    position: relative;
    display: flex;
    align-items: center;

    .header__toggle {
      width: 2.375rem;
      height: 2.375rem;
      display: grid;
      place-items: center;
      border: 0.5px solid transparent;
      border-radius: 9999px;
      background: transparent;
      color: currentColor;
      cursor: pointer;
      position: relative;
      z-index: 105;
      transition: background-color 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                  border-color 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
                  box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                  color 0.25s ease;

      &:hover:not(.header__toggle--open) {
        background-color: rgba(20, 18, 16, 0.06);
      }

      &:active {
        transform: scale(0.94);
      }

      .toggle-icon-wrap {
        display: grid;
        place-items: center;
        width: 100%;
        height: 100%;
        position: relative;

        .slash-icon {
          grid-area: 1 / 1;
          display: block;
          transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.24s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .icon-slashes {
          opacity: 1;
          transform: rotate(0deg) scale(1);
        }

        .icon-close {
          opacity: 0;
          transform: rotate(-90deg) scale(0.6);
        }
      }

      // Morph into close button in the exact same spot
      &--open {
        color: #FFFFFF !important;
        background: rgba(255, 255, 255, 0.12);
        border-color: rgba(255, 255, 255, 0.24);
        box-shadow: none;

        &:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.36);
          transform: scale(1.05);
        }

        .toggle-icon-wrap {
          .icon-slashes {
            opacity: 0;
            transform: rotate(90deg) scale(0.6);
          }

          .icon-close {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }
      }
    }

    // Fluid Glass Menu Panel (Expanding from Top-Right)
    .header__panel {
      position: absolute;
      top: -0.625rem;
      right: -0.625rem;
      width: clamp(21.5rem, 90vw, 25rem);
      max-width: calc(100vw - 1.5rem);
      border-radius: 24px;
      background:
        linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%),
        rgba(20, 18, 16, 0.72);
      backdrop-filter: blur(32px) saturate(160%);
      -webkit-backdrop-filter: blur(32px) saturate(160%);
      border: 0.5px solid rgba(255, 255, 255, 0.22);
      box-shadow:
        0 24px 60px -8px rgba(0, 0, 0, 0.55),
        0 8px 24px -4px rgba(0, 0, 0, 0.35),
        inset 0 1px 1px 0 rgba(255, 255, 255, 0.2);
      padding: 0.625rem 0.625rem 1.65rem 1.65rem;
      color: var(--color-chalk);
      z-index: 101;
      transform-origin: top right;

      // Header row: 'MENU' eyebrow aligned with the morphing toggle button
      .panel__header {
        height: 2.25rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 0.15rem;
        margin-bottom: 1.25rem;
        animation: fluidItemIn 0.36s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;

        .panel__eyebrow {
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(248, 247, 244, 0.75);
          font-family: var(--font-family-sans);
          user-select: none;
        }

        .panel__header-spacer {
          width: 2.375rem;
          height: 2.375rem;
          flex-shrink: 0;
          pointer-events: none;
        }
      }

      .panel__body {
        display: flex;
        flex-direction: column;
      }

      // Large typography primary navigation
      .panel__nav {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        animation: fluidItemIn 0.42s cubic-bezier(0.16, 1, 0.3, 1) 0.08s both;

        &:has(.nav-item:hover) .nav-item:not(:hover) {
          opacity: 0.32;
          color: rgba(248, 247, 244, 0.32);
        }

        .nav-item {
          display: block;
          padding: 0.35rem 0;
          font-size: clamp(1.75rem, 3.5vw, 2.125rem);
          font-weight: 450;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: var(--color-chalk);
          text-decoration: none;
          transition: opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                      color 0.28s cubic-bezier(0.16, 1, 0.3, 1);

          .nav-roller {
            display: inline-flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
            height: 1.18em;
            vertical-align: top;

            .roller-line {
              display: block;
              line-height: 1.18;
              white-space: nowrap;
              transition: transform 0.36s cubic-bezier(0.16, 1, 0.3, 1);
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
            opacity: 1;
            color: #FFFFFF;

            .roller-line.line--default {
              transform: translateY(-100%);
            }

            .roller-line.line--hover {
              transform: translateY(-100%);
            }
          }

          &.is-active {
            color: var(--color-chalk);
          }
        }
      }

      // 2-Column Metadata & Socials Section (Matching Fluid Glass)
      .panel__meta-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.25rem;
        padding-top: 1.45rem;
        margin-top: 1.45rem;
        border-top: 1px solid rgba(248, 247, 244, 0.1);
        animation: fluidItemIn 0.42s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both;

        .meta-heading {
          display: block;
          margin-bottom: 0.65rem;
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(248, 247, 244, 0.4);
          font-family: var(--font-family-sans);
        }

        .meta-links {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;

          &:has(a:hover) a:not(:hover) {
            opacity: 0.45;
          }

          a {
            display: inline-flex;
            font-size: 0.875rem;
            font-weight: 450;
            color: rgba(248, 247, 244, 0.8);
            text-decoration: none;
            transition: color 0.18s ease, opacity 0.2s ease;

            .meta-roller {
              display: inline-flex;
              flex-direction: column;
              position: relative;
              overflow: hidden;
              height: 1.25em;
              vertical-align: top;

              .meta-line {
                display: block;
                line-height: 1.25;
                white-space: nowrap;
                transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);

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

              .meta-line.line--default {
                transform: translateY(-100%);
              }

              .meta-line.line--hover {
                transform: translateY(-100%);
              }
            }
          }
        }

        .meta-info {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;

          .status-indicator {
            display: inline-flex;
            align-items: center;
            gap: 0.45rem;
            font-weight: 500;
            font-size: 0.8125rem;
            color: var(--color-chalk);

            .status-pulse {
              width: 7px;
              height: 7px;
              border-radius: 9999px;
              background-color: #22C55E;
              box-shadow: 0 0 8px rgba(34, 197, 94, 0.6);
              flex-shrink: 0;
            }
          }

          .meta-location {
            margin: 0;
            font-size: 0.8125rem;
            color: rgba(248, 247, 244, 0.55);
            line-height: 1.35;
          }

          .meta-email-action {
            background: transparent;
            border: none;
            padding: 0;
            text-align: left;
            font-size: 0.8125rem;
            font-family: var(--font-family-sans);
            color: rgba(248, 247, 244, 0.75);
            text-decoration: underline;
            text-underline-offset: 3px;
            cursor: pointer;
            transition: color 0.18s ease;

            &:hover {
              color: #FFFFFF;
            }
          }
        }
      }

      // Bottom Full-Width Inset Action Button (Matching Fluid Glass '↳ GET A QUOTE')
      .panel__cta {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.55rem;
        width: 100%;
        padding: 0.85rem 1.25rem;
        margin-top: 1.35rem;
        border-radius: var(--radius-full);
        background: rgba(14, 12, 10, 0.9);
        border: 1px solid rgba(248, 247, 244, 0.12);
        color: var(--color-chalk);
        font-size: 0.8125rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        animation: fluidItemIn 0.42s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;

        &:hover {
          background: rgba(28, 25, 23, 0.96);
          border-color: rgba(248, 247, 244, 0.22);
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);

          .cta-arrow {
            transform: translate(2px, -2px);
          }
        }

        &:active {
          transform: translateY(0) scale(0.99);
        }

        .cta-arrow {
          font-size: 1.05rem;
          line-height: 1;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cta-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}

@media (max-width: 640px) {
  .header .header__contact {
    height: 2.15rem;
    padding: 0 1rem;
    font-size: 0.8125rem;

    .email-label {
      font-size: 0.75rem;

      .email-text {
        max-width: 140px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .header .header__menu .header__toggle {
    width: 2.15rem;
    height: 2.15rem;
  }

  .header .header__menu .header__panel .panel__header-spacer {
    width: 2.15rem;
    height: 2.15rem;
  }
}

// Background Dim Overlay (Gentle scrim overlay without blur so website remains crisp)
.header__backdrop {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(14, 12, 10, 0.35);
  z-index: 5;
  pointer-events: auto;
}

// Fluid Morph Transitions (Matching Fluid Glass)
.fluid-menu-enter-active {
  transition:
    transform 0.42s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}

.fluid-menu-leave-active {
  transition:
    transform 0.24s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.18s ease-in;
}

.fluid-menu-enter-from {
  opacity: 0;
  transform: scale(0.9);
}

.fluid-menu-leave-to {
  opacity: 0;
  transform: scale(0.92);
}

// Backdrop Fade Transition
.fade-backdrop-enter-active,
.fade-backdrop-leave-active {
  transition: opacity 0.32s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-backdrop-enter-from,
.fade-backdrop-leave-to {
  opacity: 0;
}

// Keyframes for Staggered Content Reveal
@keyframes fluidItemIn {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
