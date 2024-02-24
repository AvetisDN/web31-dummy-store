<template>
  <div>
    <h1 class="text-3xl font-semibold capitalize">
      {{ route.params.slug.replace("-", " ") }}
      ({{ total }})
    </h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-stretch w-full my-4"
      v-if="products.length > 0"
    >
      <ProductCard v-for="product in products" :product="product" />
    </div>
    <p v-else class="text-3xl text-center w-full py-28">loading...</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import ProductCard from "@/components/ProductCard.vue";

const products = ref([]);
const total = ref(0);
const skip = ref(0);
const limit = ref(0);

const fetchProducts = async () => {
  const res = await fetch(
    `https://dummyjson.com/products/category/${route.params.slug}`
  );
  const data = await res.json();
  products.value = data.products;
  total.value = data.total;
  skip.value = data.skip;
  limit.value = data.limit;
};

onMounted(() => {
  fetchProducts();
});

const route = useRoute();
</script>
