<template>
  <div id="adminClock">
    <div class="clock-body">
      <el-card>
        <div slot="header">员工考勤</div>
        <el-table
          :data="clockArr.slice((current-1)*pageSizes,current*pageSizes)"
          border
          size="small"
        >
          <el-table-column label="员工姓名" prop="username"></el-table-column>
          <el-table-column label="上班时间" prop="todayStart"></el-table-column>
          <el-table-column label="下班时间" prop="rodayEnd"></el-table-column>
        </el-table>
        <el-pagination
          :total="clockArr.length"
          :current-page="1"
          :page-size="6"
          :page-sizes="[3,6,9]"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
          layout="total,sizes, prev, pager, next,jumper"
        ></el-pagination>
      </el-card>
    </div>
  </div>
</template>

<script>
import postApi from "../../jsUtil/postRequest";
export default {
  name: "adminClock",
  data() {
    return {
      clockArr: [],
      obj: {
        organCode: ""
      },
      pageSizes: 6,
      current: 1
    };
  },
  created() {
    let code = JSON.parse(sessionStorage.getItem("adminInfo")).organCode;
    this.obj.organCode = code;
    this.getAllClock(this.obj);
  },
  methods: {
    //根据组织代码获取
    async getAllClock(data) {
      let res = await postApi.getClockInfo(data);
      console.log(res.data);
      if (res.data.value.length > 0) {
        this.clockArr = res.data.value;
      }
    },
    //分页
    handleSizeChange(val) {
      this.pageSizes = val;
    },
    handleCurrentChange(val) {
      this.current = val;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/admin_css/adminClock.scss";
</style>