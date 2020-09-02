import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home";
import Shopcart from "../views/cart/Shopcart";
import Profile from "../views/profile/Profile";
import Detail from "../views/detail/Detail"

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/cart",
      component: Shopcart
    },
    {
      path: "/profile",
      component: Profile
    },
    {
      path: "/detail/:iid",
      component: Detail
    }
  ],
  // mode: "history"
});

export default router;
