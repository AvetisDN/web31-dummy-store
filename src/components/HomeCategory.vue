<template>
  <router-link
    :to="`/category/${category}`"
    class="p-4 bg-gray-100 shadow-lg dark:bg-gray-900 rounded-md flex flex-col gap-3 transition hover:scale-105"
  >
    <img
      :src="`/images/categories/${category}.jpg`"
      :alt="category"
      class="h-56 w-full object-cover"
    />
    <h2 class="font-bold text-center capitalize text-xl">
      {{ category.replace("-", " ") }}
    </h2>
  </router-link>
</template>

<script setup>
defineProps(["category"]);
</script>
