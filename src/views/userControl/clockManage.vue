<template>
  <div id="clockManage">
    <div class="clock-body">
      <div class="body-left">
        <el-menu default-active="1" background-color="#f4f6f8">
          <el-menu-item index="1">
            <router-link to="/controlUser/clockManage/clockDaily" tag="div">
              <i class="el-icon-finished"></i>
              <span>每日打卡</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/controlUser/clockManage/clockHistory" tag="div">
              <i class="el-icon-document"></i>
              <span>打卡历史</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/controlUser/clockManage/leaveHistory" tag="div">
              <i class="el-icon-date"></i>
              <span>假条</span>
            </router-link>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="body-right">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "clockManage"
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/user_css/clockManage.scss";
</style>