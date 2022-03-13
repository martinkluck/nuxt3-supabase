<script setup>
import { ref } from "vue";
import { createClient } from "@supabase/supabase-js/dist/main/index.js";
import { store } from "../store";
const { supabaseUrl, supabasePublicKey } = useRuntimeConfig();
const supabase = createClient(supabaseUrl, supabasePublicKey);
const newTask = ref("");
const taskList = ref([]);

const addTask = async () => {
  try {
    const { data, error } = await supabase.from("todos").insert({
      user_id: store.user.id,
      task: newTask.value,
      is_complete: false,
    });
    if (error) throw error;
    console.log(data);
    newTask.value = "";
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <h1>Todo MVC</h1>
  <input type="text" v-model="newTask" @keyup.enter="addTask" />
  <h2>List of tasks</h2>

  <ul>
    <li v-for="(task, index) in taskList" :key="index">
      <input type="checkbox" v-model="task.isComplete" />
      {{ task.task }}
    </li>
  </ul>
</template>

<style></style>
