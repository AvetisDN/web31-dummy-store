<template>
  <div
    class="flex flex-col gap-4 bg-gray-100 dark:bg-gray-900 p-6 rounded w-full shadow-lg self-start"
  >
    <h1 class="text-3xl font-bold">Checkout</h1>
    <ul class="flex flex-col gap-5 py-2">
      <li class="flex gap-5 items-center leading-none" v-for="item in cart">
        <span>
          <img
            class="w-16 h-16 object-cover rounded border-2 border-gray-300 dark:border-gray-600"
            :src="item.thumbnail"
            :alt="item.title"
          />
        </span>
        <span class="grow font-semibold text-lg">{{ item.title }}</span>
        <span class="capitalize">{{ item.category.replace("-", " ") }}</span>
        <div class="flex items-center gap-2 ms-5">
          <button
            class="disabled:pointer-events-none disabled:opacity-30"
            @click="decrement(item.id)"
            :disabled="item.count === 1"
          >
            <MinusCircleIcon class="w-6 h-6 block text-gray-500" />
          </button>
          <input
            type="number"
            min="1"
            :max="item.stock"
            :value="item.count"
            class="p-3 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-950 rounded w-16 text-center font-medium"
            @input="setCount(item.id, item.stock, +$event.target.value)"
          />
          <button
            class="disabled:pointer-events-none disabled:opacity-30"
            @click="increment(item.id)"
            :disabled="item.count === item.stock"
          >
            <PlusCircleIcon class="w-6 h-6 block text-gray-500" />
          </button>
        </div>
        <button @click="deleteFromCart(item.id)">
          <TrashIcon class="w-6 h-6 block text-red-500" />
        </button>
      </li>
    </ul>
    <hr />
    <div class="flex justify-end">
      <div class="text-xl grid grid-cols-2 gap-1 justify-end justify-items-end">
        <div>Total count:</div>
        <div class="font-bold">{{ getTotalCount() }}</div>
        <div>Total price:</div>
        <div class="font-bold">${{ getTotalSumm().toFixed(2) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  TrashIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "@heroicons/vue/24/solid";
// import { MaskInput } from "vue-3-mask";
import { useCartStore } from "@/store/cart";
import { storeToRefs } from "pinia";
const store = useCartStore();
const {
  deleteFromCart,
  increment,
  decrement,
  setCount,
  getTotalCount,
  getTotalSumm,
} = store;
const { cart } = storeToRefs(store);
</script>

<style scoped>
input[type="number"] {
  appearance: none;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
