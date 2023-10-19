// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@nuxtjs/eslint-module', { /* module options */ }],
    '@unlazy/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icons',
    'nuxt-graphql-client',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/style/global.sass"',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
      S3_REGION: process.env.S3_REGION,
      GQL_HOST: process.env.GQL_HOST,
    },
  },
})
