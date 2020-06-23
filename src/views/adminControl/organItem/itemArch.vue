<template>
  <div id="itemArch">
    <div class="arch-body">
      <div class="body-views">
        <el-table :data="userArr" border size="small">
          <el-table-column label="员工名" prop="username"></el-table-column>
          <el-table-column label="员工密码" prop="password"></el-table-column>
          <el-table-column label="手机号" prop="phone"></el-table-column>
          <el-table-column label="所在公司编号  " prop="organCode"></el-table-column>
          <el-table-column label="员工名" width="200px" prop="organName"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import postApi from "../../../jsUtil/postRequest";
export default {
  name: "itemArch",
  data() {
    return {
      //员工数组
      userArr: []
    };
  },
  created() {
    //
    let data = JSON.parse(sessionStorage.getItem("adminInfo"));
    // console.log(data);
    this.getAllUser(data.organName);
  },
  methods: {
    //获取所有员工
    getAllUser(data) {
      let obj = { organName: data };
      postApi
        .getAllUser(obj)
        .then(res => {
          console.log(res.data.value);
          for (const i of res.data.value) {
            if (i.admin === "false") {
              this.userArr.push(i);
            }
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
@import "../../../assets/css/admin_css/itemArch.scss";
</style>