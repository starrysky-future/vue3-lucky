import { createRouter, createWebHashHistory } from "vue-router";
import { getTokenAUTH } from "../utils/auth";
import { useUserStore } from "@/store/user";

const Home = () => import("@/views/home/home");
const About = () => import("@/views/about/about");
const Login = () => import("@/views/login/login");

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      name: "home",
      meta: {
        requireAuth: true,
      },
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      meta: {
        requireAuth: true,
      },
      component: About,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

router.beforeEach((to, from, next) => {
  // 页面是否需要登录
  if (to.meta.requireAuth) {
    // 判断是否登录
    if (!getTokenAUTH()) {
      const userStore = useUserStore();
      userStore.lastVisitRoute = to.path;
      next({ path: "/login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
