<template>
  <div id="controlAdmin">
    <div class="user-head">
      <div class="head-item1">
        <img id="logo" src="../assets/images/enterprise2.png" />
        <p id="title">咚咚企业后台</p>
      </div>
      <div class="head-item2">
        <el-menu default-active="1" mode="horizontal">
          <el-menu-item index="1">
            <router-link to="/controlAdmin/adminOrgan" tag="div">组织管理</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/controlAdmin/adminClock" tag="div">考勤事务</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/controlAdmin/adminLeave" tag="div">假条批阅</router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link to="/controlAdmin" tag="div">设置</router-link>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="head-item3">
        <div class="item3-name">
          <p>甲生_Jst</p>
        </div>
        <el-button type="primary" size="mini" @click="exit" plain>退出</el-button>
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
  name: "controlAdmin",
  components: {
    publicFoot
  },
  methods: {
    exit(){
      manageSession.removeSession("adminInfo");
      this.$router.push("/Sign");
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/controlAdmin.scss";
</style>