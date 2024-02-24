import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);

  const addToCart = (product) => {
    const index = cart.value.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      cart.value[index].count++;
    } else {
      product.count = 1;
      cart.value.push(product);
    }
  };
  const increment = (id) => {};
  const decrement = (id) => {};
  const setCount = (id) => {};
  const deleteFromCart = (id) => {};
  const isInCart = (id) => {};

  const getTotalCount = () => {};
  const getTotalSumm = () => {};

  return {};
});
