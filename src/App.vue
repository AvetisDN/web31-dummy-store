<template>
  <div :class="{ dark: theme === 'dark' }">
    <div
      class="w-full min-h-screen bg-gray-200 dark:bg-gray-950 text-gray-700 dark:text-gray-200 flex flex-col gap-4 xl:gap-6"
    >
      <Header />
      <main class="container mx-auto grow flex items-star p-4">
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import { useThemeStore } from "@/store/theme";
import { storeToRefs } from "pinia";

const store = useThemeStore();

const { theme } = storeToRefs(store);
</script>
