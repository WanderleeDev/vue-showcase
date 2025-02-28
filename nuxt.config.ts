import tailwindcss from "@tailwindcss/vite";
import { metadata } from "./constants/metadata.global";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: metadata,
  },
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
