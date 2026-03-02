// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/scss/style.scss'],
  modules: ['@nuxt/icon'],
  alias: {
    images: fileURLToPath(new URL('./app/assets/images', import.meta.url)),
  },
})
