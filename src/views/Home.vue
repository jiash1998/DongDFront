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
        <router-link to="/Register">
          <ElButton type="primary" plain round>注 册</ElButton>
        </router-link>
        <router-link to="/Sign" id="manage-sign" tag="p">登录</router-link>
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
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/home.scss";
</style>
