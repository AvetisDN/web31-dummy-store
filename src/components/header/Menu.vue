<template>
  <div class="mr-4 hidden lg:flex md:text-lg font-semibold gap-4 xl:gap-6">
    <router-link to="/">Home</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
</template>

<script setup></script>

<style scoped>
a {
  @apply text-indigo-300 dark:text-gray-100 hover:text-indigo-900 dark:hover:text-indigo-400 transition;
}
.router-link-exact-active {
  @apply text-indigo-50 dark:text-indigo-400;
}
</style>
