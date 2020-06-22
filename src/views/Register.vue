<template>
  <div id="register">
    <public-head :url="url">
      <span slot="info">登录</span>
    </public-head>
    <div class="register-body">
      <el-card>
        <div slot="header">用户💙注册</div>
        <el-form :model="regForm" ref="regForm" label-position="left" size="small">
          <el-form-item label="用户名" label-width="80px">
            <el-input v-model="regForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" label-width="80px">
            <el-input v-model="regForm.password" show-password placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="手机号" label-width="80px">
            <el-input v-model="regForm.phone" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="身份" label-width="80px">
            <el-radio-group v-model="regForm.admin" size="mini">
              <el-radio label="true">管理者</el-radio>
              <el-radio label="false">员工</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="toReg" style="margin-right:10%">注册</el-button>
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
import postApi from "../jsUtil/postRequest.js";
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
        phone: "",
        admin: "",
        organName: "none",
        organCode: "none"
      },
      url: "/Sign"
    };
  },
  methods: {
    toReg() {
      let data = this.regForm;
      console.log(data);
       this.$router.push({ path: "/Sign" });
      postApi
        .register(data)
        .then(res => {
          console.log(res.data);
          if (res.data) {
            this.$router.push({ path: "/Sign" });
          } else {
            this.$message({
              message: "注册失败",
              type: "error",
              duration: 2000
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/register.scss";
</style>