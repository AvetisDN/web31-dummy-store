<template>
  <ul class="flex flex-col gap-2 text-sm py-2">
    <li class="flex gap-3 items-center leading-none" v-for="item in cart">
      <span class="grow">{{ item.title }}</span>
      <span>&times;{{ item.count }}</span>
      <button @click="deleteFromCart(item.id)">
        <TrashIcon class="w-4 h-4 block text-red-500" />
      </button>
    </li>
  </ul>
</template>

<script setup>
import { TrashIcon } from "@heroicons/vue/24/solid";
import { useCartStore } from "@/store/cart";
import { storeToRefs } from "pinia";
const store = useCartStore();
const { deleteFromCart } = store;
const { cart } = storeToRefs(store);
</script>
