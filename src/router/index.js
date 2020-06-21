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
import adminOrgan from "../views/adminControl/adminOrgan.vue";
import itemBase from "../views/adminControl/organItem/itemBase.vue";
import itemArch from "../views/adminControl/organItem/itemArch.vue";
import itemMore from "../views/adminControl/organItem/itemMore.vue";

import adminClock from "../views/adminControl/adminClock.vue";
import adminLeave from "../views/adminControl/adminLeave.vue";


//用户
import controlUser from "../views/controlUser.vue";
import organManage from "../views/userControl/organManage.vue";
import leave from "../views/userControl/leave.vue";
import clockManage from "../views/userControl/clockManage.vue";
import clockDaily from "../views/userControl/clockitem/clockDaily.vue";
import clockHistory from "../views/userControl/clockitem/clockHist.vue";

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
        children: [
          {
            path: "/controlUser/clockManage/",
            redirect: "/controlUser/clockManage/clockDaily",
          },
          {
            path: "/controlUser/clockManage/clockDaily",
            name: "clockDaily",
            component: clockDaily,
          },
          {
            path: "/controlUser/clockManage/clockHistory",
            name: "clockHistory",
            component: clockHistory,
          },
        ],
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
    children: [
      {
        path: "/controlAdmin",
        redirect: "/controlAdmin/adminOrgan",
      },
      {
        path: "/controlAdmin/adminOrgan",
        name: "adminOrgan",
        component: adminOrgan,
        children: [
          {
            path:"/controlAdmin/adminOrgan",
            redirect: "/controlAdmin/adminOrgan/itemBase"
          },
          {
            path: "/controlAdmin/adminOrgan/itemBase",
            name: "itemBase",
            component: itemBase,
          },
          {
            path: "/controlAdmin/adminOrgan/itemArch",
            name: "itemArch",
            component: itemArch,
          },
          {
            path: "/controlAdmin/adminOrgan/itemMore",
            name: "itemMore",
            component: itemMore,
          },
        ],
      },
      {
        path: "/controlAdmin/adminClock",
        name: "adminClock",
        component: adminClock,
      },
      {
        path: "/controlAdmin/adminLeave",
        name: "adminLeave",
        component: adminLeave,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
