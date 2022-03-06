<script setup>
import { createClient } from "@supabase/supabase-js";
const { supabaseUrl, supabaseKey } = useRuntimeConfig();
const supabase = createClient(supabaseUrl, supabaseKey);
console.log(supabase);
</script>

<template>
  <div>
    <h1>Nuxt 3 Supabase TodoMVC</h1>
  </div>
</template>
