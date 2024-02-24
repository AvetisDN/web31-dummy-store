import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Blog from "./pages/Blog.vue";
import Contact from "./pages/Contact.vue";
import Error from "./pages/Error.vue";
import CategoryVue from "./pages/Category.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/category/:slug",
    component: CategoryVue,
  },
  {
    path: "/:pathMatch(.*)*",
    component: Error,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
