<template>
  <div id="sign">
    <public-head :url="urlName">
      <div slot="info">注册</div>
    </public-head>
    <div class="sign-body">
      <div class="body-item">
        <el-card>
          <!-- <div slot="header">咚咚登录</div> -->
          <div slot="header" style="text-align:center;">咚咚💙登录</div>
          <ElForm :model="signForm" ref="regForm" label-position="left" size="small">
            <ElFormItem label="用户名" label-width="60px">
              <ElInput v-model="signForm.username" placeholder="请输入用户名"></ElInput>
            </ElFormItem>
            <ElFormItem label="密码" label-width="60px">
              <ElInput v-model="signForm.password" show-password placeholder="请输入密码"></ElInput>
            </ElFormItem>
            <ElFormItem>
              <ElButton type="primary" :plain="isOk" :disabled="isOk" @click="signin">登录</ElButton>
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
//引入接口
import postApi from "../jsUtil/postRequest.js";
import getDataApi from "../jsUtil/getRequest.js";

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
        password: ""
      },
      urlName: "/Register",
      isOk: true,
    };
  },
  watch: {
    signForm: {
      handler(val) {
        if (val.username !== "" && val.password !== "") {
          this.isOk = false;
          return;
        }
        this.isOk = true;
      },
      deep: true
    }
  },
  methods: {
    //登录提交
    signin() {
      // let data = this.signForm;
      let data = this.signForm;
      console.log(data);
      this.$router.push({ path: "/controlUser" });
      // const newWin = this.$router.resolve({ name: "controlUser" });
      // window.open(newWin.href, "_blank");
      // postApi
      //   .signin(data)
      //   .then(res => {
      //     console.log(res.data);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      //post类型 接口测试
      // let data = "949";
      // insertUserApi
      //   .insertUser({values:data})
      //   .then(res => {
      //     console.log(res.data);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      //get类型 接口测试
      // getDataApi
      //   .getData()
      //   .then(res => {
      //     console.log("123");
      //     console.log(res.data);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/sign.scss";
</style>;
