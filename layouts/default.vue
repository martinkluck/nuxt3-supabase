<script setup>
import { ref } from "vue";
import { store } from "../store";
import { createClient } from "@supabase/supabase-js/dist/main/index.js";
const { supabaseUrl, supabasePublicKey } = useRuntimeConfig();
const supabase = createClient(supabaseUrl, supabasePublicKey);

const navLinks = ref([
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Login",
    url: "/login",
  },
  {
    label: "Profile",
    url: "/profile",
  },
  {
    label: "TodoMVC",
    url: "/todomvc",
  },
]);

store.user = supabase.auth.user();
supabase.auth.onAuthStateChange((_, session) => {
  store.user = session.user;
});

const displayNavLinks = computed(() => {
  if (store.user?.aud === "authenticated") {
    return navLinks.value.filter((item) => item.url !== "/login");
  } else {
    return navLinks.value.filter((item) => item.url !== "/profile");
  }
});
</script>

<template>
  <main>
    <nav>
      <ul class="nav-list">
        <li
          v-for="(navItem, index) in displayNavLinks"
          :key="navItem.url + index"
        >
          <nuxt-link :to="navItem.url">{{ navItem.label }}</nuxt-link>
        </li>
      </ul>
    </nav>
    <slot></slot>
  </main>
</template>

<style scoped>
.nav-list {
  display: flex;
  list-style: none;
  padding: 1rem;
  margin: 0;
}

.nav-list li {
  margin-right: 1rem;
}
</style>
