import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  nitro: {
    preset: "cloudflare-pages",
  },

  fonts: {
    experimental: {
      processCSSVariables: true,
    },
  },

  image: {
    quality: 80,
    format: ["webp"],
  },

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false,
  },

  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
    supabaseProjectName: process.env.PROJECT_NAME,
    public: {},
  },

  modules: [
    "nitro-cloudflare-dev",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/supabase",
  ],
});
