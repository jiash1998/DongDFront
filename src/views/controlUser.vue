<template>
  <div id="controlUser">
    <div class="user-head">
      <div class="head-item1">
        <img id="logo" src="../assets/images/logo2.png" />
        <p id="title">咚咚工作台</p>
      </div>
      <div class="head-item2">
        <el-menu default-active="1" mode="horizontal">
          <!-- <el-submenu index="1">
        <template slot="title">打卡</template>
        <el-menu-item index="1-1">测试1</el-menu-item>
          </el-submenu>-->
          <el-menu-item index="1">
            <router-link to="/controlUser/organManage" tag="div">所在组织</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/controlUser/clockManage" tag="div">考勤事务</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/controlUser/leave" tag="div">请假</router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link to="/controlUser/leave" tag="div">设置</router-link>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="head-item3">
        <div class="item3-name">
          <p>甲生_Jst</p>
        </div>
        <el-button type="primary" size="mini" plain>
          <router-link tag="p" to="/Sign">退出</router-link>
        </el-button>
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
export default {
  name: "controlUser",
  components: {
    publicFoot
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/user_css/controlUser.scss";
</style>