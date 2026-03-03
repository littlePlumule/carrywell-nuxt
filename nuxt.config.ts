// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/scss/style.scss'],
  modules: ['@nuxt/icon', '@nuxtjs/google-fonts', '@vee-validate/nuxt'],
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
