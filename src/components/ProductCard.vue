<template>
  <div
    class="p-4 bg-gray-100 shadow-lg dark:bg-gray-900 rounded-md flex flex-col gap-3 transition hover:scale-105"
  >
    <img
      :src="product.thumbnail"
      :alt="product.title"
      class="h-52 w-full object-cover"
    />
    <router-link
      :to="`/product/${product.id}`"
      class="font-bold capitalize text-xl grow"
    >
      {{ product.title }}
    </router-link>
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-1 leading-none">
        <div class="line-through">${{ product.price.toFixed(2) }}</div>
        <div class="text-red-500 font-bold text-xl">
          ${{ getPriceWithDiscount(product.price, product.discountPercentage) }}
        </div>
      </div>
      <button class="bg-indigo-500 text-white p-3 rounded-md">
        <ShoppingCartIcon class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ShoppingCartIcon } from "@heroicons/vue/24/outline";
defineProps(["product"]);

const getPriceWithDiscount = (oldPrice, discountPercentage) =>
  (oldPrice - (oldPrice * discountPercentage) / 100).toFixed(2);
</script>
