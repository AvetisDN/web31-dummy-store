<template>
  <button
    class="bg-indigo-600 dark:bg-gray-950 w-10 h-10 flex items-center justify-center rounded-full"
    @click="toggle"
  >
    <SunIcon class="w-6 h-6 block dark:hidden" />
    <MoonIcon class="w-5 h-5 hidden dark:block" />
  </button>
</template>

<script setup>
import { SunIcon, MoonIcon } from "@heroicons/vue/24/solid";
import { useThemeStore } from "@/store/theme";

const { toggle } = useThemeStore();
</script>
