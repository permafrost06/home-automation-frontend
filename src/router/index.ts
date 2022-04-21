import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/signup",
      name: "Signup",
      component: () => import("../views/SignupView.vue"),
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("../views/DashboardView.vue"),
    },
    {
      path: "/add-device",
      name: "Add Device",
      component: () => import("../views/AddDeviceView.vue"),
    },
  ],
});

export default router;
