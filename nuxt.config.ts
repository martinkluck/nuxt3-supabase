import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabasePublicKey: process.env.SUPABASE_PUBLIC_KEY,
  },
});
