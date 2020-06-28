<template>
  <div id="leaveHist">
    <div class="leave-body">
      <div class="body-title">
        <h3 id="title-h3">我的假条</h3>
        <img id="title-img" src="../../../assets/images/leave.png" />
      </div>
      <div class="body-item">
        <el-table
          :data="leaveArr.slice((current-1)*pageSizes, current*pageSizes)"
          border
          size="small"
        >
          <el-table-column label="请假日期" prop="time"></el-table-column>
          <el-table-column label="请假原因" prop="type"></el-table-column>
          <el-table-column label="补充原因" prop="detail"></el-table-column>
          <el-table-column label="假条状态" prop="status"></el-table-column>
        </el-table>
        <el-pagination
          :total="leaveArr.lenth"
          :current-page="1"
          :page-size="3"
          :page-sizes="[3,6,9]"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
          layout="total,sizes, prev, pager, next,jumper"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import postApi from "../../../jsUtil/postRequest";
export default {
  name: "leaveHist",
  data() {
    return {
      leaveArr: [],
      current: 1,
      pageSizes: 6
    };
  },
  created() {
    let obj = {
      username: JSON.parse(sessionStorage.getItem("userInfo")).username
    };
    this.getLeaveInfo(obj);
  },
  methods: {
    async getLeaveInfo(name) {
      let res = await postApi.getLeaves(name);
      console.log(res.data);
      if (res.data.value.length > 0) {
        this.leaveArr = res.data.value;
      }
    },
    //当前页码
    handleCurrentChange(val) {
      console.log(val);
      this.current = val;
    },
    //每页多少条数据
    handleSizeChange(val) {
      console.log(val);
      this.pageSizes = val;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/user_css/clock/leaveHist.scss";
</style>