// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/scss/style.scss'],
  modules: ['@nuxt/icon', '@nuxtjs/google-fonts'],
  alias: {
    images: fileURLToPath(new URL('./app/assets/images', import.meta.url)),
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      'Noto Serif TC': [400, 500, 700],
      'Shippori Mincho': [400, 500, 700],
      Agbalumo: [400, 500, 700],
      Brawler: [400, 500, 700],
    },
    display: 'swap',
    preload: true,
  },
})
