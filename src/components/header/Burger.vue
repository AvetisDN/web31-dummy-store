<template>
  <button
    class="w-10 h-10 flex items-center justify-center lg:hidden"
    @click="open = !open"
  >
    <Bars3Icon class="w-6 h-6 text-white dark:text-indigo-400" />
  </button>
  <div
    class="fixed top-0 h-screen bg-indigo-600 w-full max-w-72 flex flex-col p-10 gap-10 text-2xl font-bold transition-all -left-72"
    :class="{ open: open }"
  >
    <router-link to="/" @click="open = false">Home</router-link>
    <router-link to="/blog" @click="open = false">Blog</router-link>
    <router-link to="/contact" @click="open = false">Contact</router-link>
  </div>
</template>

<script setup>
import { Bars3Icon } from "@heroicons/vue/24/solid";
import { ref } from "vue";

const open = ref(false);
</script>

<style scoped>
.open {
  @apply left-0;
}
</style>
