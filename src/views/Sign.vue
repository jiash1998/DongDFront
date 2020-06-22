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
//管理session
import manageSession from "../jsUtil/manageSession.js";
//引入接口
import postApi from "../jsUtil/postRequest.js";
import qs from "querystring";
// import signinApi from "../jsUtil/getRequest.js";

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
      isOk: true
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
  // mounted() {
  //   console.log(JSON.parse(sessionStorage.getItem("adminInfo")));
  // },
  methods: {
    //登录提交
    signin() {
      // let data = this.signForm;
      let data = this.signForm;
      // manageSession.setSession("adminInfo", data);
      // this.$router.push({
      //   path: "/controlAdmin"
      // });
      // this.axios
      //   .post("http://localhost:8080/apis/signin", qs.stringify(data), {
      //     headers: {
      //       "Content-Type": "application/x-www-form-urlencoded"
      //     }
      //   })
      //   .then(res => {
      //     //登录接口发送成功后
      //     console.log(res.data);
      //     let info = res.data;
      //     //根据返回信息判断
      //     if (info) {
      //       if (info.admin == "true") {
      //         //session保存s管理员信息
      //         manageSession.setSession("adminInfo", info);
      //         this.$router.push({ path: "/controlAdmin" });
      //       } else {
      //         //session保存员工信息
      //         manageSession.setSession("userInfo", info);
      //         this.$router.push({ path: "/controlUser" });
      //       }
      //     } else {
      //       this.$message({
      //         message: "验证失败，重新登陆",
      //         type: "error",
      //         duration: 2000
      //       });
      //     }
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      //接口
      postApi
        .signin(data)
        .then(res => {
          //登录接口发送成功后
          console.log(res.data);
          let info = res.data;
          //根据返回信息判断
          if (info) {
            if (info.admin == "true") {
              //session保存s管理员信息
              manageSession.setSession("adminInfo", info);
              this.$router.push({ path: "/controlAdmin" });
            } else {
              //session保存员工信息
              manageSession.setSession("userInfo", info);
              this.$router.push({ path: "/controlUser" });
            }
          } else {
            this.$message({
              message: "验证失败，重新登陆",
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
@import "../assets/css/sign.scss";
</style>;
