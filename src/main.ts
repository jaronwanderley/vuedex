// @unocss-include
import { createApp } from 'vue'
import '@/assets/style.css'
import { createRouter, createWebHashHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import generatedRoutes from '~pages'

import rippleDirective from '@/directives/ripple'
import intersectDirective from '@/directives/intersect'

import '@unocss/reset/tailwind.css'
import 'uno.css'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.use(autoAnimatePlugin)
app.directive('ripple', rippleDirective({
  set: 'w-0 h-0 rounded-full bg-blue-7/50 absolute transition duration-600 ease-out',
  start: 'scale-0 opacity-100',
  end: 'scale-250 opacity-0',
}))
app.directive('intersect', intersectDirective)

app.mount('#app')
