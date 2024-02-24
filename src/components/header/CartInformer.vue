<template>
  <div>
    <button
      class="bg-indigo-600 dark:bg-gray-950 w-10 h-10 flex items-center justify-center rounded-full relative"
    >
      <ShoppingCartIcon class="w-6 h-6 block" />
      <div
        class="text-xs font-semibold w-6 h-6 bg-red-500 flex justify-center items-center leading-none rounded-full absolute -top-1 -right-2"
      >
        <span class="-translate-y-px">{{ count }}</span>
      </div>
    </button>
  </div>
</template>

<script setup>
import { ShoppingCartIcon } from "@heroicons/vue/24/solid";
const count = 22;
</script>
