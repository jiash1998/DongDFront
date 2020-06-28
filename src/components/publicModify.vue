<template>
  <div id="publicModify">
    <div class="modify-body">
      <el-card>
        <div slot="header">修改信息</div>
        <el-form :model="modForm" size="small" label-width="100px" label-position="left">
          <el-form-item label="用户名">
            <el-input v-model="modForm.username" value="modForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="modForm.password" value="modForm.password"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="modForm.phone" value="modForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="所在组织">
            <el-input v-model="modForm.organName" value="modForm.organName" disabled></el-input>
          </el-form-item>
          <el-form-item label="组织编码">
            <el-input v-model="modForm.organCode" value="modForm.organCode" disabled></el-input>
          </el-form-item>
          <el-form-item label>
            <el-button type="primary" plain>保存</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import postApi from "../jsUtil/postRequest";
export default {
  name: "publicModify",
  data() {
    return {
      modForm: {},
      obj: {}
    };
  },
  props: {
    info: Object
  },
  created() {
    let name = JSON.parse(sessionStorage.getItem("userinfo"));
    console.log(this.info);
    this.modForm = this.info;
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../assets/css/comp_css/publicModify.scss";
</style>