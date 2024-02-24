<template>
  <header class="bg-indigo-500 text-white dark:bg-gray-900 p-4 xl:p-6">
    <div class="container mx-auto flex gap-4 items-center">
      <Logo />
      <Menu />
      <ThemeToggle />
      <CartInformer />
      <Burger />
    </div>
  </header>
</template>

<script setup>
import Logo from "./header/Logo.vue";
import Menu from "./header/Menu.vue";
import ThemeToggle from "./header/ThemeToggle.vue";
import Burger from "./header/Burger.vue";
import CartInformer from "./header/CartInformer.vue";
</script>
