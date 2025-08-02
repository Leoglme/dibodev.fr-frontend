// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,

  nitro: {
    preset: 'static',
  },
  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots'],
  site: {
    url: 'https://dibodev.fr',
    name: 'Dibodev',
  },
})
