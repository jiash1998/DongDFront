<template>
  <div id="controlUser">
    <div class="user-head">
      <div class="head-item1">
        <img id="logo" src="../assets/images/logo2.png" />
        <p id="title">咚咚工作台</p>
      </div>
      <div class="head-item2">
        <el-menu default-active="1" mode="horizontal">
          <el-menu-item index="1">
            <router-link to="/controlUser/organManage" tag="div">所在组织</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/controlUser/clockManage" tag="div">我的考勤</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/controlUser/leave" tag="div">请假</router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link to="/controlUser/userModify" tag="div">设置</router-link>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="head-item3">
        <div class="item3-name">
          <p>{{username}}</p>
        </div>
        <el-button type="primary" @click="exit" size="mini" plain>退出</el-button>
      </div>
    </div>
    <div class="user-body">
      <router-view />
    </div>
    <public-foot></public-foot>
  </div>
</template>

<script>
import publicFoot from "../components/publicFoot";
import manageSession from '../jsUtil/manageSession.js';

export default {
  name: "controlUser",
  components: {
    publicFoot
  },
  data() {
    return {
      //用户名
      username: "甲生_Jst"
    };
  },
  created() {
    this.username = JSON.parse(sessionStorage.getItem("userInfo")).username;
  },
  methods: {
    exit() {
      manageSession.removeSession("userInfo");
      this.$router.push("/Sign");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/controlUser.scss";
</style>