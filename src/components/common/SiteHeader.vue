<template>
  <header
    class="header"
    :class="{
      'header--embedded': embedded,
      'header--stuck': !embedded && isScrolled,
      'header--hidden': !embedded && isHidden,
      'header--over-dark': embedded || isOverDark,
      'header--menu-open': isMenuOpen
    }"
    role="banner"
  >
    <div class="header__bar">
      <!-- Left: Brand Logo -->
      <div class="header__start">
        <RouterLink
          :to="currentMode === 'works' ? '/work' : '/'"
          class="header__logo"
          :class="{ 'header__logo--enter': isLoaded }"
          aria-label="Midhun M. — Home"
        >
          <!-- Full Wordmark Logo from Logo.svg for Normal State -->
          <svg
            class="header__logo-full"
            width="145"
            height="24"
            viewBox="0 0 1915 317"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle class="logo-dot" cx="1885" cy="287" r="30" fill="#B84A27" />
            <path d="M191.098 46.5661C199.976 52.9368 203.585 60.6829 207.598 67.8988L248.347 138.414C255.507 150.643 259.087 157.704 259.087 159.597H261.087C262.477 156.127 264.234 152.501 266.359 148.719L311.367 70.0034C318.97 56.1547 324.29 48.3355 332.701 44.0654C343.996 39.1751 355.945 39.2681 364.914 41.6117C376.953 46.9352 383.171 58.1432 389.13 69.1352L513.385 290.988C519.222 300.468 521.443 306.35 520.048 308.637C517.91 311.619 515.578 313.121 513.052 313.144L367.624 313.288C357.119 313.369 349.602 311.485 345.074 307.637C340.937 303.216 336.938 297.048 333.076 289.132L263.774 167.095C262.077 164.003 260.515 162.171 259.087 161.597C257.696 165.071 255.962 168.735 253.885 172.589L186.146 291.109C179.335 302.107 172.32 309.283 165.102 312.638C161.631 313.152 156.348 313.363 149.253 313.269L7.10374 313.144C3.90622 312.068 1.58057 310.566 0.126795 308.637C-0.384461 305.342 0.650382 301.282 3.23132 296.458L131.974 67.5708C137.928 57.0599 145.174 45.7138 157.103 41.5647C169.379 38.986 180.78 38.929 191.098 46.5661Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>
            <path d="M508.254 178.468L579.878 178.245C587.77 178.305 593.521 180.968 599.185 186.63L652.968 285.584C661.426 299.371 664.845 307.727 663.225 310.65C661.576 312.301 659.379 313.054 656.634 312.911L548.314 313.025C545.984 312.173 544.263 311.048 543.151 309.649L488.117 208.634C485.735 204.377 485.068 199.043 486.116 192.631C488.403 187.041 492.072 182.707 497.122 179.629C500.744 178.706 504.454 178.319 508.254 178.468Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>
            <path d="M835 40H923C937.667 40 945 47.3333 945 62V291C945 305.667 937.667 313 923 313H736C703.333 313 680 301.667 666 279C654 256.333 654 234 666 212C679.333 189.333 702.667 178 736 178H835V40ZM756 230C741.333 230 734 235.167 734 245.5C734 255.833 741.333 261 756 261H835V230H756Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>
            <path d="M963 62C963 47.3333 970.333 40 985 40H1073V178H1138C1170.67 178 1194 191 1208 217L1254 297C1260 307.667 1257 313 1245 313H1164C1155.33 313 1148.67 308.667 1144 300L1113 246C1108.33 238 1101.33 234 1092 234H1073V291C1073 305.667 1065.67 313 1051 313H985C970.333 313 963 305.667 963 291V62Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>
            <path d="M1248 178H1348V240C1348 252 1354.67 258 1368 258H1426V178H1536V291C1536 305.667 1528.67 313 1514 313H1338C1278 313 1248 283 1248 223V178Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>
            <path d="M1553 178H1728C1760.67 178 1784 191 1798 217L1844 297C1850 307.667 1847 313 1835 313H1754C1745.33 313 1738.67 308.667 1734 300L1703 246C1698.33 238 1691.33 234 1682 234H1663V291C1663 305.667 1655.67 313 1641 313H1575C1560.33 313 1553 305.667 1553 291V178Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>
          </svg>

          <!-- Monogram Icon from icon.svg for Scrolled / Compact Header State -->
          <svg
            class="header__logo-icon"
            width="65"
            height="24"
            viewBox="0 0 754 277"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              class="logo-mark logo-mark--left"
              d="M191.207 9.62925C191.898 10.0778 192.589 10.5264 193.3 10.9886C200.087 15.998 203.696 23.7416 207.71 30.9564C209.932 34.9237 212.216 38.854 214.496 42.7887C216.428 46.1247 218.353 49.4643 220.277 52.805C220.927 53.9338 221.577 55.0625 222.247 56.2254C223.217 57.9103 223.217 57.9103 224.207 59.6293C226.727 64.0048 229.247 68.3798 231.769 72.7543C232.384 73.8203 232.998 74.8864 233.631 75.9847C238.54 84.4944 243.487 92.982 248.465 101.452C259.207 119.79 259.207 119.79 259.207 122.629C259.867 122.629 260.527 122.629 261.207 122.629C261.469 121.925 261.732 121.222 262.002 120.496C263.292 117.426 264.818 114.64 266.48 111.754C267.134 110.615 267.787 109.476 268.461 108.303C269.168 107.078 269.875 105.854 270.582 104.629C271.312 103.359 272.041 102.089 272.771 100.819C274.235 98.271 275.7 95.7237 277.166 93.1771C279.881 88.4606 282.574 83.7321 285.269 79.0043C288.44 73.4491 291.624 67.9019 294.824 62.3636C295.45 61.2796 296.076 60.1956 296.722 59.0787C297.998 56.8714 299.276 54.6649 300.555 52.4591C303.679 47.0603 306.764 41.6461 309.769 36.18C310.338 35.1506 310.908 34.1211 311.494 33.0604C312.554 31.1377 313.605 29.21 314.644 27.2762C319.099 19.2146 324.419 11.3977 332.832 7.12925C333.711 6.66519 334.59 6.20113 335.496 5.723C344.128 2.24018 356.079 2.33276 365.05 4.67613C377.09 9.99776 383.309 21.2031 389.269 32.1918C390.273 34.0245 391.28 35.8559 392.286 37.6871C392.962 38.9167 393.638 40.1467 394.312 41.3771C397.237 46.7051 400.238 51.9865 403.269 57.2543C408.211 65.8583 413.074 74.5044 417.91 83.1681C420.834 88.402 423.769 93.6282 426.738 98.8363C443.207 127.732 443.207 127.732 443.207 131.629C443.867 131.629 444.527 131.629 445.207 131.629C452.287 144.237 459.352 156.853 466.308 169.53C473.804 183.19 481.41 196.789 489.03 210.381C492.48 216.538 495.914 222.704 499.332 228.879C503.991 237.292 508.76 245.641 513.543 253.985C513.995 254.777 514.448 255.569 514.915 256.385C515.743 257.824 516.58 259.257 517.428 260.684C519.73 264.58 521.021 267.05 520.207 271.629C518.016 274.527 516.831 275.524 513.21 276.135C512.03 276.138 510.851 276.141 509.636 276.144C508.977 276.151 508.319 276.158 507.64 276.165C505.435 276.183 503.23 276.173 501.024 276.163C499.442 276.17 497.86 276.178 496.278 276.189C491.98 276.211 487.683 276.208 483.385 276.199C479.794 276.194 476.204 276.202 472.613 276.209C464.137 276.226 455.661 276.222 447.185 276.206C438.452 276.189 429.72 276.205 420.987 276.237C413.482 276.264 405.978 276.271 398.474 276.262C393.995 276.257 389.517 276.26 385.038 276.28C380.821 276.299 376.605 276.292 372.388 276.268C370.846 276.263 369.303 276.266 367.76 276.279C359.337 276.343 351.98 276.243 345.207 270.629C340.155 265.203 336.759 258.586 333.207 252.129C332.064 250.079 330.919 248.029 329.773 245.981C329.187 244.932 328.6 243.883 327.996 242.802C325.102 237.67 322.124 232.587 319.144 227.504C313.32 217.557 307.576 207.567 301.873 197.551C300.004 194.274 298.129 191 296.254 187.727C284.267 166.803 284.267 166.803 279.019 157.317C275.093 150.227 271.164 143.139 267.207 136.067C266.642 135.047 266.077 134.028 265.495 132.978C264.967 132.036 264.438 131.095 263.894 130.125C263.424 129.282 262.953 128.438 262.468 127.568C261.348 125.489 261.348 125.489 259.207 124.629C258.943 125.331 258.679 126.032 258.407 126.755C257.12 129.838 255.616 132.691 254.004 135.618C253.689 136.189 253.375 136.76 253.052 137.348C252.024 139.215 250.99 141.078 249.957 142.942C249.6 143.586 249.244 144.23 248.877 144.894C242.413 156.576 235.732 168.124 228.963 179.633C225.895 184.867 222.863 190.123 219.832 195.379C218.901 196.992 218.901 196.992 217.952 198.638C213.689 206.039 209.446 213.451 205.212 220.868C204.212 222.62 203.211 224.372 202.21 226.123C201.88 226.699 201.551 227.275 201.212 227.869C200.547 229.031 199.883 230.194 199.218 231.357C197.176 234.93 195.139 238.506 193.104 242.084C192.086 243.874 191.065 245.662 190.043 247.45C188.775 249.666 187.512 251.885 186.254 254.106C184.61 256.973 182.929 259.809 181.207 262.629C180.742 263.398 180.277 264.167 179.797 264.959C176.036 270.598 171.623 273.49 165.207 275.629C159.917 276.328 154.678 276.305 149.356 276.26C147.774 276.265 146.193 276.273 144.612 276.282C140.346 276.3 136.08 276.288 131.814 276.268C127.341 276.251 122.868 276.26 118.395 276.265C110.891 276.27 103.388 276.254 95.8854 276.226C87.2112 276.194 78.5374 276.194 69.8632 276.211C61.5081 276.227 53.1532 276.221 44.7981 276.203C41.2455 276.197 37.693 276.198 34.1405 276.205C29.9624 276.213 25.7848 276.201 21.6068 276.173C20.0733 276.166 18.5398 276.166 17.0063 276.173C14.9145 276.182 12.8243 276.166 10.7326 276.144C9.56197 276.141 8.39137 276.138 7.18531 276.135C3.57633 275.522 2.38831 274.521 0.206654 271.629C-0.559543 266.688 0.877792 263.707 3.31212 259.453C3.63321 258.884 3.95429 258.315 4.2851 257.728C5.3096 255.917 6.35132 254.117 7.39415 252.317C8.07568 251.12 8.75603 249.923 9.43517 248.725C10.7466 246.415 12.0651 244.11 13.3878 241.807C15.6994 237.769 17.9625 233.705 20.2067 229.629C20.8667 229.629 21.5267 229.629 22.2067 229.629C22.3175 228.906 22.4284 228.184 22.5426 227.439C23.2492 224.449 24.2993 222.328 25.8317 219.672C26.637 218.264 26.637 218.264 27.4586 216.827C28.3239 215.337 28.3239 215.337 29.2067 213.817C30.4047 211.727 31.6026 209.637 32.8004 207.547C33.6802 206.02 33.6802 206.02 34.5777 204.463C36.6458 200.865 38.6802 197.25 40.7067 193.629C43.7109 188.279 46.7284 182.937 49.7504 177.597C60.1809 159.163 70.5287 140.684 80.8019 122.162C94.6456 97.2029 108.532 72.2686 122.614 47.4432C124.242 44.5675 125.859 41.6866 127.476 38.805C128.532 36.9338 129.588 35.0627 130.644 33.1918C131.352 31.9228 131.352 31.9228 132.074 30.6283C138.029 20.1202 145.276 8.77728 157.207 4.62925C169.485 2.05082 180.888 1.99354 191.207 9.62925Z"
              fill="currentColor"
            />
            <path
              class="logo-mark logo-mark--right"
              d="M518.331 141.468C519.159 141.463 519.987 141.458 520.84 141.453C523.582 141.439 526.324 141.432 529.066 141.426C530.973 141.421 532.88 141.415 534.787 141.409C538.789 141.399 542.79 141.393 546.791 141.389C551.91 141.384 557.029 141.36 562.148 141.331C566.089 141.313 570.03 141.307 573.972 141.306C575.858 141.303 577.745 141.295 579.631 141.282C582.276 141.265 584.92 141.267 587.565 141.273C588.339 141.264 589.113 141.255 589.911 141.245C597.798 141.305 603.545 143.968 609.206 149.629C610.184 151.52 611.155 153.413 612.079 155.33C614.126 159.505 616.406 163.555 618.644 167.629C619.713 169.582 620.782 171.536 621.851 173.489C622.678 175 622.678 175 623.521 176.542C626.307 181.646 629.068 186.763 631.831 191.879C636.061 199.703 640.34 207.496 644.682 215.258C647.413 220.156 650.046 225.097 652.644 230.067C655.92 236.332 659.389 242.464 662.956 248.567C674.211 267.892 674.211 267.892 673.206 273.629C670.732 276.104 670.028 275.882 666.62 275.89C665.654 275.897 664.688 275.904 663.693 275.912C662.629 275.909 661.566 275.907 660.47 275.904C659.353 275.909 658.236 275.914 657.085 275.92C653.377 275.934 649.669 275.933 645.96 275.93C643.392 275.934 640.824 275.938 638.256 275.943C632.866 275.951 627.477 275.951 622.087 275.945C615.855 275.939 609.622 275.951 603.39 275.973C597.398 275.992 591.406 275.996 585.414 275.992C582.863 275.993 580.311 275.998 577.76 276.008C574.197 276.02 570.635 276.013 567.072 276.002C566.011 276.009 564.949 276.017 563.856 276.025C562.887 276.018 561.918 276.011 560.92 276.004C559.656 276.004 559.656 276.004 558.366 276.004C555.693 275.54 554.874 274.726 553.206 272.629C552.115 270.802 551.083 268.938 550.089 267.055C549.189 265.36 549.189 265.36 548.27 263.63C547.955 263.03 547.639 262.429 547.314 261.81C546.318 259.916 545.315 258.025 544.31 256.135C542.935 253.546 541.561 250.956 540.189 248.365C537.346 243.002 534.47 237.656 531.581 232.317C531.053 231.34 530.525 230.363 529.98 229.357C525.805 221.669 521.503 214.058 517.175 206.455C510.653 194.958 504.373 183.321 498.206 171.629C497.827 170.916 497.448 170.203 497.057 169.469C495.073 165.177 495.547 160.202 496.206 155.629C498.598 150.215 502.224 145.861 507.206 142.629C510.947 141.383 514.434 141.474 518.331 141.468Z"
              fill="currentColor"
            />
            <circle class="logo-dot" cx="724" cy="247" r="30" fill="#B84A27" />
          </svg>
        </RouterLink>
      </div>

      <!-- Right: Work and Profile switch toggle button + 3-Slash Menu Toggle -->
      <div class="header__end">
        <!-- Work & Profile Switch Capsule matching the glass reference -->
        <div class="header__switcher" role="radiogroup" aria-label="Portal Selection">
          <button
            type="button"
            role="radio"
            :aria-checked="currentMode === 'personal'"
            class="header__switcher-btn"
            :class="{ 'is-active': currentMode === 'personal' }"
            @click="switchMode('personal')"
            aria-label="Switch to Profile"
          >
            <span class="switcher-text">Profile</span>
          </button>
          <button
            type="button"
            role="radio"
            :aria-checked="currentMode === 'works'"
            class="header__switcher-btn"
            :class="{ 'is-active': currentMode === 'works' }"
            @click="switchMode('works')"
            aria-label="Switch to Works"
          >
            <span class="switcher-text">Works</span>
          </button>
        </div>

        <!-- 3-Slash Menu Component -->
        <div class="header__menu" ref="menuContainerRef">
          <!-- Morphing Toggle Trigger Button that transforms into the close button in place -->
          <button
            type="button"
            class="header__toggle"
            :class="{ 'header__toggle--open': isMenuOpen }"
            @click.stop.prevent="toggleMenu"
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
import { ref, watch, onMounted, onUnmounted, nextTick, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { PortfolioMode } from '@/types/portfolio';

const route = useRoute();
const router = useRouter();

const props = withDefaults(
  defineProps<{
    mode?: PortfolioMode;
    isLoaded?: boolean;
    embedded?: boolean;
  }>(),
  {
    mode: 'personal',
    isLoaded: true,
    embedded: false
  }
);

const emit = defineEmits<{
  (e: 'toggle-menu'): void;
}>();

const currentMode = computed<PortfolioMode>(() => {
  return route.path.startsWith('/work') ? 'works' : 'personal';
});

const switchMode = (target: PortfolioMode) => {
  if (currentMode.value === target) return;
  if (target === 'works') {
    router.push('/work');
  } else {
    router.push('/');
  }
};

const isScrolled = ref(false);
const isHidden = ref(false);
const isOverDark = ref(false);
const isMenuOpen = ref(false);
const menuContainerRef = ref<HTMLElement | null>(null);

const copied = ref(false);
let copyTimeout: number | null = null;

const handleCopyEmail = async () => {
  try {
    await navigator.clipboard.writeText('mnairmidhun@gmail.com');
    copied.value = true;
    if (copyTimeout) clearTimeout(copyTimeout);
    copyTimeout = window.setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy email:', err);
  }
};

let lastScrollY = typeof window !== 'undefined' ? Math.max(0, window.scrollY) : 0;
const scrollThreshold = 90;

const toggleMenu = (event?: MouseEvent | TouchEvent) => {
  if (event) {
    event.stopPropagation?.();
    event.preventDefault?.();
  }
  isMenuOpen.value = !isMenuOpen.value;
  emit('toggle-menu');
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

/**
 * Automatically inspects whether the section behind the header is dark or light,
 * and handles smart hide/reveal on scroll with easing.
 */
const updateHeaderAppearance = () => {
  if (props.embedded) {
    isOverDark.value = true;
    return;
  }

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

  // Check any elements designated as dark sections (or footer / dark containers)
  const headerHeight = 72;
  const darkElements = document.querySelectorAll(
    '[data-theme="dark"], .dark-section, .hero--dark, .site-footer, [data-dark="true"]'
  );

  let overlappingDark = false;
  darkElements.forEach((el) => {
    // Ignore overlay components such as page-loader, drawer, modal
    if (el.closest('.page-loader') || el.closest('.drawer') || el.closest('.modal')) {
      return;
    }
    const rect = el.getBoundingClientRect();
    if (rect.top <= headerHeight && rect.bottom >= 0) {
      overlappingDark = true;
    }
  });

  // Dynamic luminance detection from element directly under header ONLY when scrolled
  if (!overlappingDark && scrollY > 20) {
    try {
      const sampleX = window.innerWidth / 2;
      const sampleY = 36;
      const elements = document.elementsFromPoint(sampleX, sampleY);
      const target = elements.find((el) => 
        !el.closest('.header') &&
        !el.closest('.page-loader') &&
        !el.closest('.drawer') &&
        !el.closest('.modal') &&
        !el.closest('.portal-switcher')
      );
      if (target) {
        const bg = window.getComputedStyle(target).backgroundColor;
        const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
        if (match) {
          const r = Number(match[1]);
          const g = Number(match[2]);
          const b = Number(match[3]);
          const a = match[4] !== undefined ? Number(match[4]) : 1;
          if (a > 0.5) {
            const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
            if (luma < 90 && luma > 0) {
              overlappingDark = true;
            }
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
  if (!isMenuOpen.value) return;
  const target = event.target as Element | null;
  if (!target) return;

  // Never close if clicking inside toggle button or inside menu panel
  if (
    target.closest?.('.header__toggle') ||
    target.closest?.('.header__panel') ||
    (menuContainerRef.value && menuContainerRef.value.contains(target))
  ) {
    return;
  }

  // Never close if target element is detached from DOM during re-render
  if (!document.contains(target)) {
    return;
  }

  closeMenu();
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

watch(() => props.isLoaded, () => {
  nextTick(() => updateHeaderAppearance());
});

watch(() => route.path, () => {
  nextTick(() => updateHeaderAppearance());
});

onMounted(() => {
  window.addEventListener('scroll', updateHeaderAppearance, { passive: true });
  window.addEventListener('resize', updateHeaderAppearance, { passive: true });
  window.addEventListener('click', handleClickOutside);
  window.addEventListener('keydown', handleKeydown);
  updateHeaderAppearance();
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

  // Embedded mode: sits natively inside the hero card stage
  &--embedded {
    position: relative !important;
    top: auto !important;
    transform: none !important;
    width: 100%;
    pointer-events: auto;
    z-index: 25;

    &:before {
      display: none !important;
    }

    .header__bar {
      max-width: 100%;
      padding: 0 0 clamp(1rem, 2vw, 1.75rem) 0;
    }
  }

  // Smart Scroll: slide up out of view when scrolling down
  &--hidden {
    transform: translateY(calc(-100% - 4rem));
    pointer-events: none !important;

    &:before {
      opacity: 0;
      visibility: hidden;
    }
  }

  &--menu-open {
    z-index: 100;
    transform: translateY(0) !important;
    pointer-events: auto !important;

    .header__toggle {
      color: #FFFFFF !important;
    }
  }

  // Progressive gradient fade background that blends into page background only when scrolled
  &:before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    width: 100%;
    height: 5rem;
    opacity: 0;
    background: linear-gradient(180deg,
      #F6F5F2 0%,
      #F6F5F2 35%,
      rgba(246, 245, 242, 0.95) 45%,
      rgba(246, 245, 242, 0.82) 55%,
      rgba(246, 245, 242, 0.64) 65%,
      rgba(246, 245, 242, 0.42) 75%,
      rgba(246, 245, 242, 0.22) 84%,
      rgba(246, 245, 242, 0.08) 92%,
      rgba(246, 245, 242, 0) 100%
    );
    pointer-events: none;
    z-index: 0;
    transition: opacity 0.3s ease;
  }

  &--stuck {
    &:before {
      opacity: 1;
    }

    .header__logo {
      .header__logo-full {
        display: none;
      }

      .header__logo-icon {
        display: block;
      }
    }
  }

  // When over dark background or embedded in hero
  &--over-dark {
    color: #FFFFFF;

    &.header--stuck:before {
      opacity: 1;
      background: linear-gradient(180deg,
        #141210 0%,
        #141210 35%,
        rgba(20, 18, 16, 0.95) 45%,
        rgba(20, 18, 16, 0.82) 55%,
        rgba(20, 18, 16, 0.64) 65%,
        rgba(20, 18, 16, 0.42) 75%,
        rgba(20, 18, 16, 0.22) 84%,
        rgba(20, 18, 16, 0.08) 92%,
        rgba(20, 18, 16, 0) 100%
      );
    }

    .header__logo {
      color: #FFFFFF !important;
    }
  }

  // Dynamic light mode adaptation on light canvas (both embedded & floating stuck)
  &:not(.header--over-dark) {
    .header__switcher {
      background:
        linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 238, 234, 0.8) 100%),
        rgba(20, 18, 16, 0.06);
      border-color: rgba(20, 18, 16, 0.14);
      box-shadow:
        inset 0 1px 1px 0 rgba(255, 255, 255, 0.9),
        0 4px 14px rgba(0, 0, 0, 0.06);

      .header__switcher-btn {
        color: var(--color-muted);

        &:hover:not(.is-active) {
          color: var(--color-ink);
          background: rgba(20, 18, 16, 0.06);
        }

        &.is-active {
          background: #FFFFFF;
          color: var(--color-ink);
          border-color: rgba(20, 18, 16, 0.16);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.9);
        }
      }
    }

    .header__toggle:not(.header__toggle--open) {
      background:
        linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 238, 234, 0.8) 100%),
        rgba(20, 18, 16, 0.06);
      border-color: rgba(20, 18, 16, 0.14);
      color: var(--color-ink);
      box-shadow:
        inset 0 1px 1px 0 rgba(255, 255, 255, 0.9),
        0 4px 14px rgba(0, 0, 0, 0.06);

      &:hover {
        background: #FFFFFF;
        border-color: rgba(20, 18, 16, 0.22);
        transform: translateY(-1px);
      }
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
    padding: 0.25rem 0.35rem;
    margin: -0.25rem -0.35rem;
    border-radius: 8px;
    outline: none;
    transition: color 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);

    // Full Wordmark Logo (from Logo.svg) for normal state
    .header__logo-full {
      height: 22px;
      width: auto;
      max-width: 145px;
      display: block;
      overflow: visible;
      transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);

      .logo-dot {
        transform-origin: 1885px 287px;
        transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
                    fill 0.25s ease,
                    filter 0.35s ease;
      }
    }

    // Monogram icon (from icon.svg) for compact / sticky header
    .header__logo-icon {
      height: 24px;
      width: auto;
      display: none;
      overflow: visible;

      .logo-mark {
        transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
                    opacity 0.25s ease;
      }

      .logo-mark--left {
        transform-origin: 260px 140px;
      }

      .logo-mark--right {
        transform-origin: 580px 210px;
      }

      .logo-dot {
        transform-origin: 724px 247px;
        transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
                    fill 0.25s ease,
                    filter 0.35s ease;
      }
    }

    // Interactive Hover: Playful kinetic lift on marks & elastic spring bounce on terracotta dot
    &:hover {
      .header__logo-full .logo-dot {
        transform: translateY(-6px) scale(1.25);
        fill: #E14B27;
        filter: drop-shadow(0 2px 6px rgba(225, 75, 39, 0.5));
      }

      .header__logo-icon {
        .logo-mark--left {
          transform: translateY(-1.5px) rotate(-1.5deg);
        }

        .logo-mark--right {
          transform: translateY(-1px) rotate(1.5deg);
        }

        .logo-dot {
          transform: translateY(-7px) scale(1.22);
          fill: #E14B27;
          filter: drop-shadow(0 2px 6px rgba(225, 75, 39, 0.5));
        }
      }
    }

    &:active {
      transform: scale(0.96);

      .logo-dot {
        transform: translateY(1px) scale(0.9);
      }
    }

    // Entrance animation when page loads
    &--enter {
      .header__logo-full {
        animation: fluidItemIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
      }

      .logo-mark--left {
        animation: headerLogoMarkIn 0.65s cubic-bezier(0.16, 1, 0.3, 1) both;
      }

      .logo-mark--right {
        animation: headerLogoMarkIn 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.08s both;
      }

      .header__logo-icon .logo-dot {
        animation: headerLogoDotIn 0.75s cubic-bezier(0.34, 1.56, 0.64, 1) 0.16s both;
      }
    }
  }
}

@keyframes headerLogoMarkIn {
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.92);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes headerLogoDotIn {
  0% {
    opacity: 0;
    transform: scale(0) translateY(12px);
  }
  65% {
    opacity: 1;
    transform: scale(1.35) translateY(-3px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

// Right Section: Work/Profile Switch Capsule + 3-Slash Menu Toggle
.header__end {
  display: flex;
  align-items: center;
  gap: 0.75rem;

  // Work & Profile Switch Capsule matching the frosted glass reference
  .header__switcher {
    display: inline-flex;
    align-items: center;
    height: 2.375rem;
    padding: 3px;
    gap: 2px;
    border-radius: 9999px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.05) 100%),
      rgba(255, 255, 255, 0.07);
    backdrop-filter: blur(24px) saturate(190%);
    -webkit-backdrop-filter: blur(24px) saturate(190%);
    border: 1px solid rgba(255, 255, 255, 0.28);
    box-shadow:
      inset 0 1px 1px 0 rgba(255, 255, 255, 0.55),
      inset 0 -1px 1px 0 rgba(0, 0, 0, 0.18),
      0 8px 24px -4px rgba(0, 0, 0, 0.35),
      0 2px 6px -1px rgba(0, 0, 0, 0.2);
    user-select: none;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

    .header__switcher-btn {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0 clamp(0.75rem, 1.2vw, 1.05rem);
      border-radius: 9999px;
      border: 0.5px solid transparent;
      background: transparent;
      color: rgba(255, 255, 255, 0.72);
      font-family: var(--font-family-sans);
      font-size: 0.8125rem;
      font-weight: 500;
      letter-spacing: 0.02em;
      cursor: pointer;
      outline: none;
      transition: color 0.22s ease, background-color 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;

      .switcher-text {
        line-height: 1;
        pointer-events: none;
      }

      &:hover:not(.is-active) {
        color: #FFFFFF;
        background: rgba(255, 255, 255, 0.1);
      }

      &.is-active {
        color: #FFFFFF;
        font-weight: 600;
        background:
          linear-gradient(180deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.15) 100%),
          rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.45);
        box-shadow:
          inset 0 1px 1px 0 rgba(255, 255, 255, 0.6),
          inset 0 -1px 1px 0 rgba(0, 0, 0, 0.15),
          0 2px 8px rgba(0, 0, 0, 0.25);
      }

      &:active {
        transform: scale(0.96);
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
      border-radius: 9999px;
      background:
        linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.05) 100%),
        rgba(255, 255, 255, 0.07);
      backdrop-filter: blur(24px) saturate(190%);
      -webkit-backdrop-filter: blur(24px) saturate(190%);
      border: 1px solid rgba(255, 255, 255, 0.28);
      box-shadow:
        inset 0 1px 1px 0 rgba(255, 255, 255, 0.55),
        inset 0 -1px 1px 0 rgba(0, 0, 0, 0.18),
        0 8px 24px -4px rgba(0, 0, 0, 0.35),
        0 2px 6px -1px rgba(0, 0, 0, 0.2);
      color: #FFFFFF;
      cursor: pointer;
      position: relative;
      z-index: 105;
      outline: none;
      transition: background-color 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                  border-color 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
                  box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                  color 0.25s ease;

      &:hover:not(.header__toggle--open) {
        background:
          linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.1) 100%),
          rgba(255, 255, 255, 0.12);
        border-color: rgba(255, 255, 255, 0.42);
        transform: translateY(-1px);
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
        pointer-events: none;

        .slash-icon {
          grid-area: 1 / 1;
          display: block;
          pointer-events: none;
          transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.24s cubic-bezier(0.16, 1, 0.3, 1);

          line {
            pointer-events: none;
          }
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
        background: rgba(255, 255, 255, 0.22);
        border-color: rgba(255, 255, 255, 0.42);
        box-shadow:
          inset 0 1px 1px 0 rgba(255, 255, 255, 0.5),
          0 4px 16px rgba(0, 0, 0, 0.3);

        &:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.55);
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
                transform: translateY(0%);
                color: #FFFFFF;
              }
            }
          }

          &:hover .roller-line--default {
            transform: translateY(-100%);
          }

          &:hover .roller-line--hover {
            transform: translateY(-100%);
          }

          &.is-active {
            color: #FFFFFF;
            font-weight: 550;

            &:after {
              content: "";
              display: inline-block;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: var(--color-laterite);
              margin-left: 0.5rem;
              vertical-align: middle;
            }
          }
        }
      }

      // Meta grid
      .panel__meta-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.25rem;
        padding-top: 1.25rem;
        margin-top: 1.25rem;
        border-top: 0.5px solid rgba(255, 255, 255, 0.12);
        animation: fluidItemIn 0.46s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;

        .meta-col {
          display: flex;
          flex-direction: column;

          .meta-heading {
            font-size: 0.625rem;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: rgba(248, 247, 244, 0.45);
            margin-bottom: 0.65rem;
            font-family: var(--font-family-sans);
          }

          .meta-links {
            display: flex;
            flex-direction: column;
            gap: 0.35rem;

            a {
              font-size: 0.875rem;
              color: rgba(248, 247, 244, 0.75);
              text-decoration: none;
              line-height: 1.35;
              transition: color 0.2s ease;

              .meta-roller {
                display: inline-flex;
                flex-direction: column;
                position: relative;
                overflow: hidden;
                height: 1.35em;
                vertical-align: top;

                .meta-line {
                  display: block;
                  line-height: 1.35;
                  white-space: nowrap;
                  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);

                  &.line--default {
                    transform: translateY(0%);
                  }

                  &.line--hover {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    color: #FFFFFF;
                  }
                }
              }

              &:hover .line--default {
                transform: translateY(-100%);
              }
              &:hover .line--hover {
                transform: translateY(-100%);
              }
            }
          }

          .meta-info {
            display: flex;
            flex-direction: column;
            gap: 0.35rem;

            .status-indicator {
              display: inline-flex;
              align-items: center;
              gap: 0.45rem;

              .status-pulse {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: #22C55E;
                box-shadow: 0 0 8px rgba(34, 197, 94, 0.6);
                animation: pulseGlow 2s infinite ease-in-out;
              }

              .status-label {
                font-size: 0.8125rem;
                color: rgba(248, 247, 244, 0.9);
                font-weight: 500;
              }
            }

            .meta-location {
              font-size: 0.75rem;
              color: rgba(248, 247, 244, 0.5);
              margin: 0;
              line-height: 1.35;
            }

            .meta-email-action {
              padding: 0;
              margin-top: 0.15rem;
              border: none;
              background: none;
              font-size: 0.75rem;
              color: rgba(248, 247, 244, 0.7);
              text-decoration: underline;
              text-underline-offset: 2px;
              cursor: pointer;
              text-align: left;
              transition: color 0.2s ease;

              &:hover {
                color: #FFFFFF;
              }
            }
          }
        }
      }

      // Bottom CTA Button
      .panel__cta {
        margin-top: 1.25rem;
        width: 100%;
        height: 2.75rem;
        border-radius: 9999px;
        border: 0.5px solid rgba(255, 255, 255, 0.24);
        background:
          linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.05) 100%),
          rgba(255, 255, 255, 0.08);
        color: #FFFFFF;
        font-family: var(--font-family-sans);
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        cursor: pointer;
        padding: 0 1.25rem;
        box-shadow:
          inset 0 1px 1px 0 rgba(255, 255, 255, 0.35),
          0 4px 14px rgba(0, 0, 0, 0.25);
        transition: background-color 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
        animation: fluidItemIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.16s both;

        &:hover {
          background: rgba(255, 255, 255, 0.22);
          border-color: rgba(255, 255, 255, 0.45);
          transform: translateY(-1px);
        }

        &:active {
          transform: scale(0.98);
        }

        .cta-arrow {
          font-size: 0.875rem;
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
  .header .header__logo .header__logo-full {
    height: 18px;
    max-width: 112px;
  }

  .header .header__end {
    gap: 0.5rem;
  }

  .header .header__switcher {
    height: 2.15rem;
    padding: 2px;

    .header__switcher-btn {
      padding: 0 0.7rem;
      font-size: 0.75rem;
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

// Background Dim Overlay
.header__backdrop {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(14, 12, 10, 0.35);
  z-index: 5;
  pointer-events: auto;
}

// Fluid Morph Transitions
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

@keyframes pulseGlow {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.55;
    transform: scale(0.85);
  }
}
</style>
