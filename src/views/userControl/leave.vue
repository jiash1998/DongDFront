<template>
  <div id="leave">
    <el-card shadow="never">
      <div slot="header">请假条</div>
      <el-form :model="leaveForm" ref="laeveForm" label-position="left" size="small">
        <el-form-item label="请假日期" label-width="80px">
          <el-date-picker
            v-model="leaveForm.time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="类型" label-width="80px">
          <el-radio-group v-model="leaveForm.type">
            <el-radio label="出差"></el-radio>
            <el-radio label="个人原因"></el-radio>
            <el-radio label="其他"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="紧急" label-width="80px">
          <el-radio-group v-model="leaveForm.type">
            <el-radio border label="紧急"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="补充说明" label-width="80px">
          <el-input v-model="leaveForm.detail" type="textarea" placeholder="可说明详情"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交假条</el-button>
        </el-form-item>
      </el-form>
      <div class="leave-flag">
        <p id="flag-p">解释</p>
        <ul>
          <li v-for="(item, index) in flag" :key="index">
             {{(index+1)}}、{{item.content}}
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "leave",
  data() {
    return {
      leaveForm: {
        time: "",
        type: "",
        detail: ""
      },
      flag: [
        {
          content:
            "如需请假，请至少提前三天提交假条。若为出差，至少提前一天请假。"
        },
        {
          content:
            "如果遇到紧急情况，可选择加急处理，每月加急次数有效，请酌情选择！"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/user_css/leave.scss";
</style>