<template>
  <router-link to="/" class="flex gap-1 items-end me-auto">
    <ShoppingBagIcon
      class="w-[29px] h-[29px] text-white dark:text-indigo-400"
    />
    <span class="text-2xl font-bold uppercase leading-none hidden sm:block">
      DummyStore
    </span>
  </router-link>
</template>

<script setup>
import { ShoppingBagIcon } from "@heroicons/vue/24/solid";
</script>
