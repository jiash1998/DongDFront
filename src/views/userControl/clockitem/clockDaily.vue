<template>
  <div id="clockDaily">
    <div class="daily-body">
      <div class="body-title">
        <h3 id="title-h3">每日打卡</h3>
        <img id="title-img" src="../../../assets/images/clockDaily.png" />
      </div>
      <div class="body-item1">
        <table>
          <tr>
            <th>打卡情况</th>
            <th>
              <el-tag type="warning" size="mini">未打</el-tag>
            </th>
          </tr>
          <tr>
            <td>日期</td>
            <td>2020-06-18</td>
          </tr>
          <tr>
            <td>操作</td>
            <td>
              <el-button type="primary" plain size="mini">打卡</el-button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "clockDaily"
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/user_css/clock/clockDaily.scss";
</style>