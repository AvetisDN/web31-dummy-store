import { defineStore } from "pinia";
import { ref } from "vue";

const getLocalStorageTheme = () => {
  if (localStorage.getItem("dummy-theme")) {
    return localStorage.getItem("dummy-theme");
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const useThemeStore = defineStore("theme", () => {
  const theme = ref(getLocalStorageTheme());
  const toggle = () => {
    if (theme.value === "light") {
      theme.value = "dark";
      localStorage.setItem("dummy-theme", "dark");
    } else {
      theme.value = "light";
      localStorage.setItem("dummy-theme", "light");
    }
  };

  return { theme, toggle };
});
