<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-stretch w-full"
    v-if="categories.length > 0"
  >
    <HomeCategory v-for="category in categories" :category="category" />
  </div>
  <p v-else class="text-3xl text-center w-full py-28">loading...</p>
</template>

<script setup>
import HomeCategory from "@/components/HomeCategory.vue";
import { ref, onMounted } from "vue";

const categories = ref([]);

const fetchCategories = async () => {
  const res = await fetch("https://dummyjson.com/products/categories");
  categories.value = await res.json();
};

onMounted(() => {
  fetchCategories();
});
</script>
