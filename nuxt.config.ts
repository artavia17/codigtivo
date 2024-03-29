// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: true 
  },

  css: [
    "~/assets/style/global.scss"
  ],

  modules: ["@nuxt/image"]
})