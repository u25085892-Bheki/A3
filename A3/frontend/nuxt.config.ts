export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/mdc'],
  srcDir: 'app/',
css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      strapiBase: 'http://localhost:1337'
    }
  }
})