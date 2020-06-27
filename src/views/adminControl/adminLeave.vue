<template>
  <div id="adminLeave">
    <div class="leave-body">
        <el-card>
            <div slot="header">员工假条</div>
            <el-table :data="leaveArr" border>
              <el-table-column label="员工姓名" prop="username"></el-table-column>
              <el-table-column label="请假时间" prop="time"></el-table-column>
              <el-table-column label="请假类型" prop="type"></el-table-column>
              <el-table-column label="详情说明" prop="detail"></el-table-column>
              <el-table-column label="假条状态" prop="status"></el-table-column>
              <el-table-column label="操作"></el-table-column>
            </el-table>
        </el-card>
    </div>
  </div>
</template>

<script>
import postApi from "../../jsUtil/postRequest";
export default {
  name: "adminLeave",
  data() {
    return {
      leaveArr: [],
      obj: {}
    };
  },
  created() {
    let organCode = JSON.parse(sessionStorage.getItem("adminInfo")).organCode;
    this.obj.organCode = organCode;
    this.getUserLea(this.obj);
  },
  methods: {
    //获取组织员工请假情况
    async getUserLea(data) {
      let res = await postApi.getLeaveInfo(data);
      console.log(res.data);
      if(res.data.value.length > 0){
          this.leaveArr = res.data.value;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/admin_css/adminLeave.scss";
</style>