<template>
  <div class="w-full">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-semibold capitalize">Welcome to our Blog</h1>
      <label class="flex items-center gap-1">
        <span>Posts per page:</span>
        <select
          class="p-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900"
          v-model="limit"
        >
          <option v-for="option in limitOptions" :value="option">
            {{ option }}
          </option>
        </select>
      </label>
    </div>
    <div v-if="posts.length" class="py-10">
      <Pagination :total="total" :limit="limit" :page="page" />
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-5"
      >
        <BlogPost v-for="post in posts" :post="post" />
      </div>
      <Pagination :total="total" :limit="limit" :page="page" />
    </div>
    <p v-else class="text-3xl text-center w-full py-28">loading...</p>
  </div>
</template>

<script setup>
import BlogPost from "@/components/BlogPost.vue";
import Pagination from "@/components/Pagination.vue";
import { usePaginationStore } from "@/store/pagination";
import { storeToRefs } from "pinia";
import { ref, onMounted, watch, toRef } from "vue";
import { useRoute, useRouter } from "vue-router";

const store = usePaginationStore();

const route = useRoute();
const router = useRouter();

const posts = ref([]);
const data = ref(null);
const { limit } = storeToRefs(store);
const total = ref(0);
const page = ref(route.params.page ? +route.params.page : 1);

const limitOptions = [12, 24, 48, 96];

const fetchPosts = async () => {
  const res = await fetch(
    `https://dummyjson.com/posts?limit=${limit.value}&skip=${
      limit.value * (page.value - 1)
    }`
  );
  data.value = await res.json();
  posts.value = data.value.posts;
  total.value = data.value.total;
};

onMounted(() => {
  fetchPosts();
});

watch(limit, () => {
  if (page.value === 1) {
    fetchPosts();
  } else {
    router.push("/blog");
  }
});
</script>
