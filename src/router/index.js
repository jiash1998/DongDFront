import Vue from "vue";
import VueRouter from "vue-router";

//主页细则
import Home from "../views/Home.vue";
import HomeBody from "../views/HomeBody.vue";
import Notice from "../views/Notice.vue";
import Help from "../views/Help.vue";
import About from "../views/About.vue";
import Sign from "../views/Sign.vue";
import Register from "../views/Register.vue";

//管理员
import controlAdmin from "../views/controlAdmin.vue";

//用户
import controlUser from "../views/controlUser.vue";
import organManage from "../views/userControl/organManage.vue";
import clockManage from "../views/userControl/clockManage.vue";
import leave from "../views/userControl/leave.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/Home",
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/Home",
        redirect: "/Home/HomeBody",
      },
      {
        path: "/Home/HomeBody",
        name: "HomeBody",
        component: HomeBody,
      },
      {
        path: "/Home/Notice",
        name: "Notice",
        component: Notice,
      },
      {
        path: "/Home/Help",
        name: "Help",
        component: Help,
      },
      {
        path: "/Home/About",
        name: "About",
        component: About,
      },
    ],
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
  //用户
  {
    path: "/controlUser",
    name: "controlUser",
    component: controlUser,
    children: [
      {
        path: "/controlUser",
        redirect: "/controlUser/organManage",
      },
      {
        path: "/controlUser/organManage",
        name: "organManage",
        component: organManage,
      },
      {
        path: "/controlUser/clockManage",
        name: "clockManage",
        component: clockManage,
      },
      {
        path: "/controlUser/leave",
        name: "leave",
        component: leave,
      },
    ],
  },
  //管理员
  {
    path: "/controlAdmin",
    name: "controlAdmin",
    component: controlAdmin,
    children: [],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
