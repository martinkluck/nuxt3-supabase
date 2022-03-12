<script setup>
import { reactive } from "vue";
import { createClient } from "@supabase/supabase-js/dist/main/index.js";
const { supabaseUrl, supabasePublicKey } = useRuntimeConfig();
const supabase = createClient(supabaseUrl, supabasePublicKey);
const loginState = reactive({
  email: "",
  password: "",
  error: null,
  user: null,
});

const signUp = async () => {
  let { user, error } = await supabase.auth.signUp({
    email: loginState.email,
    password: loginState.password,
  });

  loginState.user = user;
  loginState.error = error;

  console.log({ loginState });
};
</script>
<template>
  <h1>Sign up</h1>
  <form @submit.prevent>
    <input type="email" v-model="loginState.email" placeholder="Email" />
    <input
      type="password"
      v-model="loginState.password"
      placeholder="Password"
    />
    <button @click="signUp">Sign up</button>
  </form>
</template>
