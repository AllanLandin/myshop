import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import Home from "./pages/Home.vue";
import DefaultLayout from "./components/_layouts/DefaultLayout.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: DefaultLayout,
    children: [{ path: "/", component: Home }],
  },
];

const router = createRouter({ routes: routes, history: createWebHistory() });

export default router;
