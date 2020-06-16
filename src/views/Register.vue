<template>
  <div id="register">
    <public-head :url="url">
        <span slot="info">登录</span>
    </public-head>
    <div class="register-body">
      <el-card>
        <div slot="header">用户💙注册</div>
        <el-form :model="regForm" ref="regForm" :rules="rules" label-position="left" size="small">
          <el-form-item label="用户名" label-width="80px">
            <el-input v-model="regForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" label-width="80px">
            <el-input v-model="regForm.passagain" show-password placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" label-width="80px">
            <el-input v-model="regForm.phone" show-password placeholder="请再次输入密码"></el-input>
          </el-form-item>
          <el-form-item label="手机号" label-width="80px">
            <el-input v-model="regForm.phone" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="margin-right:10%">注册</el-button>
            <router-link to="/Sign">
              <el-button type="primary" plain>返回</el-button>
            </router-link>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <public-foot></public-foot>
  </div>
</template>

<script>
import publicHead from "../components/publicHead";
import publicFoot from "../components/publicFoot";
export default {
  name: "register",
  components: {
    publicHead,
    publicFoot
  },
  data() {
    return {
      regForm: {
        username: "",
        password: "",
        passagain: "",
        phone: ""
      },
      url:"/Sign"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/register.scss";
</style>