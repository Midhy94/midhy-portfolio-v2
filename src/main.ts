import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.scss'

/**
 * Adaptive Favicon Manager
 * - Light mode devices/tabs -> Dark icon (#141210)
 * - Dark mode devices/tabs -> Light icon (#FFFFFF)
 */
function initAdaptiveFavicon() {
  if (typeof window === 'undefined' || !window.matchMedia) return
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  const update = (isDark: boolean) => {
    // Dynamic SVG Favicon: light logo (#FFFFFF) on dark tabs, dark logo (#141210) on light tabs
    const svgLink = document.querySelector<HTMLLinkElement>('link[rel="icon"][type="image/svg+xml"]:not([media])')
    if (svgLink) {
      svgLink.href = isDark ? '/favicon-dark.svg?v=mi2' : '/favicon-light.svg?v=mi2'
    }
  }

  update(mediaQuery.matches)
  try {
    mediaQuery.addEventListener('change', (e) => update(e.matches))
  } catch {
    // Safari fallback
    mediaQuery.addListener((e) => update(e.matches))
  }
}

initAdaptiveFavicon()

const app = createApp(App)

app.use(router)

app.mount('#app')

