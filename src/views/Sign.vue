<template>
  <div id="sign">
    <public-head :url="url">
      <div slot="info">注册</div>
    </public-head>
    <div class="sign-body">
      <div class="body-item">
        <el-card>
          <!-- <div slot="header">咚咚登录</div> -->
          <div slot="header" style="text-align:center;">咚咚💙登录</div>
          <ElForm :model="signForm" ref="regForm" :rules="rules" label-position="left" size="small">
            <ElFormItem label="用户名" label-width="60px">
              <ElInput v-model="signForm.username" placeholder="请输入用户名"></ElInput>
            </ElFormItem>
            <ElFormItem label="密码" label-width="60px">
              <ElInput v-model="signForm.password" show-password placeholder="请输入密码"></ElInput>
            </ElFormItem>
            <ElFormItem>
              <ElButton type="primary" plain>登录</ElButton>
            </ElFormItem>
          </ElForm>
        </el-card>
      </div>
    </div>
    <public-foot></public-foot>
  </div>
</template>

<script>
import publicHead from "../components/publicHead";
import publicFoot from "../components/publicFoot";

export default {
  name: "sign",
  components: {
    publicHead,
    publicFoot
  },
  data() {
    return {
      signForm: {
        username: "",
        passowrd: ""
      },
      url:"/Register"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/sign.scss";
</style>