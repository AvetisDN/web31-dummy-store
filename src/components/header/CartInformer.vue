<template>
  <div class="relative">
    <button
      class="bg-indigo-600 dark:bg-gray-950 w-10 h-10 flex items-center justify-center rounded-full relative"
      @click="open = !open"
    >
      <ShoppingCartIcon class="w-6 h-6 block" />
      <div
        class="text-xs font-semibold w-6 h-6 bg-red-500 flex justify-center items-center leading-none rounded-full absolute -top-1 -right-2"
      >
        <span class="-translate-y-px">{{ getTotalCount() }}</span>
      </div>
    </button>
    <div
      v-if="open"
      @click="open = false"
      class="fixed w-full h-screen top-0 left-0 z-40"
    ></div>
    <div
      v-if="open"
      class="absolute p-4 bg-gray-100 dark:bg-gray-800 rounded-md flex flex-col gap-3 text-gray-700 dark:text-gray-100 right-0 top-12 min-w-64 z-50 shadow-xl"
    >
      <InformerList />
      <hr />
      <div class="grid grid-cols-2 gap-1">
        <div>Total count:</div>
        <div class="font-bold">{{ getTotalCount() }}</div>
        <div>Total price:</div>
        <div class="font-bold">${{ getTotalSumm().toFixed(2) }}</div>
      </div>
      <router-link
        to="/cart"
        class="flex p-4 bg-indigo-500 text-indigo-50 rounded-md justify-center font-semibold uppercase transition hover:bg-violet-500"
        @click="open = false"
      >
        Checkout
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart";
import { ShoppingCartIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import InformerList from "./InformerList.vue";

const open = ref(false);

const store = useCartStore();
const { getTotalCount, getTotalSumm } = store;
</script>
