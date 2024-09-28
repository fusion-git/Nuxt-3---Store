// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  app: {
    head: {
      title: 'Fusion - Store',
      meta: [
        {name: 'description', content: 'Everything about Nuxt 3'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  
  tailwindcss: {
    exposeConfig: true,
  },

  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  },

  compatibilityDate: '2024-09-28'
})