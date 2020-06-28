<template>
  <div id="itemMore">
    <div class="more-body">
      <el-card shadow="never">
        <div slot="header">修改组织</div>
        <el-form :model="form" size="mini" label-width="100px" label-position="left">
          <el-form-item label="组织名称">
            <el-input v-model="form.organName" value="form.organName"></el-input>
          </el-form-item>
          <el-form-item label="组织编码">
            <el-input v-model="form.organCode" disabled value="form.organCode"></el-input>
          </el-form-item>
          <el-form-item label="经营类型">
            <el-input v-model="form.organIndustry" value="form.organIndustry"></el-input>
          </el-form-item>
          <el-form-item label="规模">
            <el-input v-model="form.organScale" value="form.organScale"></el-input>
          </el-form-item>
          <el-form-item label="负责人">
            <el-input v-model="form.organBoss" value="form.organBoss"></el-input>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="form.organPhone" value="form.organPhone"></el-input>
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
import postApi from "../../../jsUtil/postRequest";
export default {
  name: "itemMore",
  data() {
    return {
      form: {
        organName: ""
      },
      obj: {}
    };
  },
  created() {
    let name = JSON.parse(sessionStorage.getItem("adminInfo")).username;
    this.obj.username = name;
    this.getOrganInfo(this.obj);
  },
  methods: {
    //获取组织信息
    async getOrganInfo(data) {
      let res = await postApi.getOrgan(data);
      //   console.log(res.data);
      this.form = res.data.value;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/admin_css/itemMore.scss";
</style>