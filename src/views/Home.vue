<template>
  <div class="home">
    <!-- 主页导航栏 -->
    <div class="navbar">
      <router-link tag="span" to="/Home">
        <div class="navbar-logo">
          <img id="logo" src="../assets/images/logo2.png" />
          <p id="name">咚咚</p>
        </div>
      </router-link>
      <div class="navbar-cont">
        <router-link to="/Home/Notice" id="cont-help" tag="p">公告详情</router-link>
        <router-link to="/Home/Help" id="cont-help" tag="p">使用手册</router-link>
        <router-link to="/Home/About" id="cont-help" tag="p">关于我们</router-link>
      </div>
      <div class="navbar-manage">
        <ElButton type="primary" @click="toNew('Register')" plain round>注 册</ElButton>
        <p id="manage-sign" @click="toNew('Sign')">登录</p>
      </div>
    </div>
    <router-view />
    <public-foot></public-foot>
  </div>
</template>

<script>
import publicFoot from "../components/publicFoot";

export default {
  name: "Home",
  components: {
    publicFoot
  },
  methods: {
    //注册
    toNew(url) {
      const newUrl = this.$router.resolve({ name: url });
      window.open(newUrl.href, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/home.scss";
</style>
