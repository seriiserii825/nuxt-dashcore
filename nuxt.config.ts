// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  compatibilityDate: "2025-07-15",
  ssr: false,
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/fonts", "@nuxt/eslint"],
  css: ["@/assets/scss/main.scss", "@fortawesome/fontawesome-svg-core/styles.css"],
});
