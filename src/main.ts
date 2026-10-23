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
    const theme = isDark ? 'light' : 'dark'
    // Update PNG links dynamically if browser doesn't honor media attribute on link tags
    const link32 = document.querySelector<HTMLLinkElement>('link[rel="icon"][sizes="32x32"]')
    const link16 = document.querySelector<HTMLLinkElement>('link[rel="icon"][sizes="16x16"]')
    if (link32) link32.href = `/favicon-${theme}.png?v=8`
    if (link16) link16.href = `/favicon-${theme}-16.png?v=8`
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

