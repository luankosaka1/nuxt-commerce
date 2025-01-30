// https://nuxt.com/docs/api/configuration/nuxt-config
// reference icon: https://icones.js.org/collection/ic?s=shop
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@nuxt/image", "nuxt-icon", "nuxt-graphql-client", "vue3-carousel-nuxt", '@pinia/nuxt'],
  css: ["~/assets/scss/main.scss"],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  image: {
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },
  runtimeConfig: {
    public: {
      GQL_HOST: process.env.GQL_HOST,
    }
  },
})