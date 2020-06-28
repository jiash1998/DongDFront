<template>
  <div id="publicModify">
    <div class="modify-body">
      <el-card>
        <div slot="header">修改信息</div>
        <el-form :model="modForm">
          <el-form-item label="用户名"></el-form-item>
          <el-form-item label="密码"></el-form-item>
          <el-form-item label="手机号"></el-form-item>
          <el-form-item label="所在组织"></el-form-item>
          <el-form-item label="组织编码"></el-form-item>
          <el-form-item label>
              <el-button type="primary" plain>保存</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import postApi from '../jsUtil/postRequest';
export default {
  name: "publicModify",
  data() {
    return {
      modForm: {},
      obj:{}
    };
  },
  created() {
      let name = JSON.parse(sessionStorage.getItem("userinfo"));
  },
  methods: {
      
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/comp_css/publicModify.scss";
</style>