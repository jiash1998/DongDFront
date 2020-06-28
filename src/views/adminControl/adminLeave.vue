<template>
  <div id="adminLeave">
    <div class="leave-body">
      <el-card>
        <div slot="header">员工假条</div>
        <el-table
          size="small"
          :data="leaveArr.slice((current-1)*pageSizes,current*pageSizes)"
          border
        >
          <el-table-column label="员工姓名" prop="username"></el-table-column>
          <el-table-column label="请假时间" prop="time"></el-table-column>
          <el-table-column label="请假类型" prop="type"></el-table-column>
          <el-table-column label="详情说明" prop="detail"></el-table-column>
          <el-table-column label="假条状态" prop="status"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                type="primary"
                plain
                size="mini"
                v-if="scope.row.status =='false'"
                @click="toReplyLeave(scope.row)"
              >批准</el-button>
              <el-button type="success" size="mini" v-else>已批准</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          :total="leaveArr.length"
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
  name: "adminLeave",
  data() {
    return {
      leaveArr: [],
      obj: {},
      pageSizes: 6,
      current: 1
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
      if (res.data.value.length > 0) {
        this.leaveArr = res.data.value;
      }
    },
    //回复请假
    async toReplyLeave(val) {
      console.log(val);
      let res = await postApi.replayLeave(val);
      console.log(res.data);
      if (res.data.msg === "true") {
        let organCode = JSON.parse(sessionStorage.getItem("adminInfo"))
          .organCode;
        this.obj.organCode = organCode;
        this.getUserLea(this.obj);
        this.$message({
          message: "批准成功",
          type: "success",
          duration: 2000
        });
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
@import "../../assets/css/admin_css/adminLeave.scss";
</style>