<template>
  <div id="clockHist">
    <div class="hist-body">
      <div class="body-title">
        <h3 id="title-h3">打卡历史</h3>
        <img id="title-img" src="../../../assets/images/clockHist2.png" />
      </div>
      <div class="body-item">
        <div class="item-con1">
          <el-button
            type="primary"
            plain
            size="mini"
            v-for="(item, index) in dataSel"
            :key="index"
            @click="selData(item.type)"
          >{{item.name}}</el-button>
        </div>
        <div class="item-con2">
          <el-table
            :data="clockData.slice((current-1)*pageSizes, current*pageSizes)"
            size="small"
            border
          >
            <el-table-column label="打卡日期" prop="times"></el-table-column>
            <el-table-column label="是否打卡" prop="flag"></el-table-column>
            <el-table-column label="是否请假" prop="isLeave"></el-table-column>
            <el-table-column label="请假类型" prop="leaType"></el-table-column>
          </el-table>
          <el-pagination
            :total="clockData.length"
            :current-page="1"
            :page-size="7"
            :page-sizes="[7,10,15]"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
            layout="total,sizes, prev, pager, next,jumper"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "clockHist",
  data() {
    return {
      dataSel: [
        {
          name: "本周",
          type: "week"
        },
        {
          name: "本月",
          type: "month"
        },
        {
          name: "过去三个月",
          type: "lastThreeMon"
        }
      ],
      clockData: [
        {
          times: "2020-06-17",
          flag: "yes",
          isLeave: "no",
          leaType: "none"
        },
        {
          times: "2020-06-18",
          flag: "yes",
          isLeave: "no",
          leaType: "none"
        }, {
          times: "2020-06-18",
          flag: "yes",
          isLeave: "no",
          leaType: "none"
        }, {
          times: "2020-06-18",
          flag: "yes",
          isLeave: "no",
          leaType: "none"
        }, {
          times: "2020-06-18",
          flag: "yes",
          isLeave: "no",
          leaType: "none"
        }, {
          times: "2020-06-18",
          flag: "yes",
          isLeave: "no",
          leaType: "none"
        }, {
          times: "2020-06-18",
          flag: "yes",
          isLeave: "no",
          leaType: "none"
        }, {
          times: "2020-06-18",
          flag: "yes",
          isLeave: "no",
          leaType: "none"
        }, {
          times: "2020-06-18",
          flag: "yes",
          isLeave: "no",
          leaType: "none"
        }, {
          times: "2020-06-18",
          flag: "yes",
          isLeave: "no",
          leaType: "none"
        }, {
          times: "2020-06-18",
          flag: "yes",
          isLeave: "no",
          leaType: "none"
        }, {
          times: "2020-06-18",
          flag: "yes",
          isLeave: "no",
          leaType: "none"
        }, {
          times: "2020-06-18",
          flag: "yes",
          isLeave: "no",
          leaType: "none"
        }, {
          times: "2020-06-18",
          flag: "yes",
          isLeave: "no",
          leaType: "none"
        }, {
          times: "2020-06-18",
          flag: "yes",
          isLeave: "no",
          leaType: "none"
        }, {
          times: "2020-06-18",
          flag: "yes",
          isLeave: "no",
          leaType: "none"
        }, {
          times: "2020-06-18",
          flag: "yes",
          isLeave: "no",
          leaType: "none"
        }, {
          times: "2020-06-18",
          flag: "yes",
          isLeave: "no",
          leaType: "none"
        }, {
          times: "2020-06-18",
          flag: "yes",
          isLeave: "no",
          leaType: "none"
        },
      ],
      current: 1,
      pageSizes: 7
    };
  },
  methods: {
    selData(val) {
      console.log(val);
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
@import "../../../assets/css/user_css/clock/clockHistory.scss";
</style>