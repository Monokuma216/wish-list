// off eslint
/* eslint-disable node/prefer-global/process */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },

    typescript: {
        typeCheck: true,
    },

    modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/devtools', '@nuxthub/core'],
    eslint: {
        config: {
            stylistic: true,
        },
    },
    css: ['~/assets/css/main.css'],

    runtimeConfig: {
        GOOGLE_DOC_ID: process.env.GOOGLE_DOC_ID,
        GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    },

    colorMode: {
        preference: 'system',
        fallback: 'light',
    },

    nitro: {
        routeRules: {
            '/api/graphql/**': { cors: true },
            '/ws': { proxy: 'ws://localhost:3000' },
        },
    },

    hub: {
        database: true,
    },
});
