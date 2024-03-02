import { defineStore } from "pinia";
import { ref, watch } from "vue";

const getLocalStorageLimit = () => {
  if (localStorage.getItem("dummy-limit")) {
    return localStorage.getItem("dummy-limit");
  }
  return 12;
};

export const usePaginationStore = defineStore("limit", () => {
  const limit = ref(getLocalStorageLimit());

  watch(limit, () => {
    localStorage.setItem("dummy-limit", limit.value);
  });

  return { limit };
});
