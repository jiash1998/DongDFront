import Vue from 'vue'
import VueRouter from 'vue-router'

//主页细则
import Home from '../views/Home.vue'
import Help from "../views/Help.vue";
import About from "../views/About.vue";
import Sign from "../views/Sign.vue";
import Register from "../views/Register.vue";



Vue.use(VueRouter)
  const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/Help",
      name: "Help",
      component: Help,
    },
    {
      path: "/About",
      name: "About",
      component: About,
    },
    {
      path: "/Sign",
      name: "Sign",
      component: Sign,
    },
    {
      path: "/Register",
      name: "Register",
      component: Register,
    },
  ];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
