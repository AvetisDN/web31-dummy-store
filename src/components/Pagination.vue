<template>
  <div class="flex gap-1 justify-center items-center">
    <router-link
      :to="`/blog`"
      class="page-num me-1"
      :class="{ disabled: page === 1 }"
    >
      <ChevronDoubleLeftIcon class="w-4 h-4" />
    </router-link>
    <router-link
      :to="`/blog${page === 1 ? '' : `/${page - 1}`}`"
      class="page-num me-5"
      :class="{ disabled: page === 1 }"
    >
      <ChevronLeftIcon class="w-4 h-4" />
    </router-link>
    <router-link
      v-for="n in pagesArray"
      :to="`/blog${n === 0 ? '' : `/${n}`}`"
      class="page-num"
      :class="{ current: page === n }"
    >
      {{ n }}
    </router-link>
    <router-link
      :to="`/blog${page === totalPages ? `/${page}` : `/${page + 1}`}`"
      class="page-num ms-5"
      :class="{ disabled: page === totalPages }"
    >
      <ChevronRightIcon class="w-4 h-4" />
    </router-link>
    <router-link
      :to="`/blog/${totalPages}`"
      class="page-num ms-1"
      :class="{ disabled: page === totalPages }"
    >
      <ChevronDoubleRightIcon class="w-4 h-4" />
    </router-link>
  </div>
</template>

<script setup>
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/vue/24/solid";
import { computed } from "vue";
const props = defineProps(["total", "limit", "page"]);
const totalPages = computed(() => Math.ceil(props.total / props.limit));
const pagesArray = computed(() => {
  let start = 0;
  let finish = 0;
  let arr = [];
  if (totalPages.value < 5) {
    start = 1;
    finish = totalPages.value;
  } else {
    if (props.page <= 3) {
      start = 1;
      finish = 5;
    } else if (props.page + 2 >= totalPages.value) {
      finish = totalPages.value;
      start = totalPages.value - 4;
    } else {
      start = props.page - 2;
      finish = props.page + 2;
    }
  }
  for (let i = start; i <= finish; i++) {
    arr.push(i);
  }
  return arr;
});
</script>

<style scoped>
.page-num {
  @apply w-8 h-8 bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-50 flex items-center justify-center rounded font-medium transition hover:bg-indigo-500 hover:text-gray-50 dark:hover:bg-indigo-500 dark:hover:text-gray-50 select-none shadow-md;
}
.page-num.current {
  @apply bg-indigo-500 text-gray-50 pointer-events-none;
}
.page-num.disabled {
  @apply opacity-50 pointer-events-none;
}
</style>
