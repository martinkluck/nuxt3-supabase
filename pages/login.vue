<script setup>
import { reactive } from "vue";
import { createClient } from "@supabase/supabase-js/dist/main/index.js";
const { supabaseUrl, supabasePublicKey } = useRuntimeConfig();
const supabase = createClient(supabaseUrl, supabasePublicKey);
const loginState = reactive({
  email: "",
});

const loading = ref('');

const login = async () => {
    try {
        loading.value = true;
        const { error } = supabase.auth.signIn({
            email: loginState.email,
        });
        if(error) throw error;
        alert('Login success');
    } catch (error) {
        alert(error.error_description || error.message);
    } finally {
        loading.value = false;
    }
};
</script>
<template>
  <h1>Login</h1>
  <form @submit.prevent>
    <input type="email" v-model="loginState.email" placeholder="Email" />
    <button @click="login">Sign up</button>
  </form>
</template>
