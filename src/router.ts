import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import Home from "./pages/Home.vue";
import DefaultLayout from "./components/_layouts/DefaultLayout.vue";
import SearchProduct from "./pages/SearchProduct.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "/", component: Home },
      { path: "/searchProduct", component: SearchProduct },
    ],
  },
];

const router = createRouter({ routes: routes, history: createWebHistory() });

export default router;
