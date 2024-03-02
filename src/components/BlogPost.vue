<template>
  <router-link
    :to="`/posts/${post.id}`"
    class="p-4 bg-gray-100 shadow-lg dark:bg-gray-900 rounded-md flex flex-col gap-4 transition hover:scale-105"
  >
    <h2 class="font-bold text-center capitalize text-xl">
      {{ post.title }}
    </h2>
    <div class="flex gap-2">
      <span class="text-indigo-500" v-for="tag in post.tags">
        {{ tag }}
      </span>
    </div>
    <div class="flex justify-between items-center opacity-70">
      <div class="flex items-center gap-1">
        <HandThumbUpIcon class="w-4 h-4" />
        {{ post.reactions }}
      </div>
      <div>Author: {{ post.userId }}</div>
    </div>
  </router-link>
</template>

<script setup>
import { HandThumbUpIcon } from "@heroicons/vue/24/solid";
defineProps(["post"]);
</script>
