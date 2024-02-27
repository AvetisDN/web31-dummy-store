import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useCartStore = defineStore("cart", () => {
  const getFromLocal = () => {
    return JSON.parse(localStorage.getItem("dummy-cart"));
  };

  const cart = ref(getFromLocal() ? getFromLocal() : []);

  watch(cart, () => {
    // console.log(1);
  });

  const saveToLocal = () => {
    localStorage.setItem("dummy-cart", JSON.stringify(cart.value));
  };

  const addToCart = (product) => {
    const index = cart.value.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      cart.value[index].count++;
    } else {
      product.count = 1;
      cart.value.push(product);
    }
    saveToLocal();
  };
  const deleteFromCart = (id) => {
    const index = cart.value.findIndex((item) => item.id === id);
    if (index !== -1) {
      cart.value.splice(index, 1);
    }
    saveToLocal();
  };
  const increment = (id) => {
    const index = cart.value.findIndex((item) => item.id === id);
    if (index !== -1) {
      cart.value[index].count++;
    }
    saveToLocal();
  };
  const decrement = (id) => {
    const index = cart.value.findIndex((item) => item.id === id);
    if (index !== -1) {
      cart.value[index].count--;
    }
    saveToLocal();
  };
  const setCount = (id, maxCount, newValue) => {
    const index = cart.value.findIndex((item) => item.id === id);
    let tmp = cart.value;
    if (index !== -1) {
      tmp[index].count = newValue >= maxCount ? maxCount : newValue;
      cart.value = [...tmp];
    }
    saveToLocal();
  };
  const isInCart = (id) => {
    const index = cart.value.findIndex((item) => item.id === id);
    return index !== -1;
  };

  const getTotalCount = () => {
    let total = 0;
    cart.value.forEach((item) => {
      total += item.count;
    });
    return total;
  };
  const getTotalSumm = () => {
    let total = 0;
    cart.value.forEach((item) => {
      total +=
        item.count *
        (item.price - (item.price * item.discountPercentage) / 100);
    });
    return total;
  };

  return {
    cart,
    addToCart,
    getTotalCount,
    getTotalSumm,
    isInCart,
    deleteFromCart,
    increment,
    decrement,
    setCount,
  };
});
