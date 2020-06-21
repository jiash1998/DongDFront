<template>
  <div id="clockDaily">
    <div class="daily-body">
      <div class="body-title">
        <h3 id="title-h3">每日打卡</h3>
        <img id="title-img" src="../../../assets/images/clockDaily.png" />
      </div>
      <div class="body-item1">
        <!-- 没打卡 -->
        <div class="clock-no" v-if="isClock">
          <div class="clock" @click="clock_up">
            <p id="clock-p">{{clockUp}}</p>
          </div>
          <div class="anim">
            <img id="anim-img1" src="../../../assets/images/an1.png" />
            <img id="anim-img2" src="../../../assets/images/an2.png" />
            <img id="anim-img3" src="../../../assets/images/an3.png" />
            <img id="anim-img4" src="../../../assets/images/an4.png" />
          </div>
        </div>
        <!-- 打卡 -->
        <div class="clock-yes" v-else>
          <div class="yes-timeline">
            <el-timeline>
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :icon="activity.icon"
                :size="activity.size"
                :color="activity.color"
                :timestamp="activity.timestamp"
              >{{activity.content}}</el-timeline-item>
            </el-timeline>
          </div>
          <div class="yes-clock">
            <div class="clock" @click="clock_down">
              <p id="clock-p">{{clockDown}}</p>
            </div>
            <div class="anim">
              <img id="anim-img1" src="../../../assets/images/an1.png" />
              <img id="anim-img2" src="../../../assets/images/an2.png" />
              <img id="anim-img3" src="../../../assets/images/an3.png" />
              <img id="anim-img4" src="../../../assets/images/an4.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "clockDaily",
  data() {
    return {
      isClock: false,
      clockUp: "上班打卡",
      clockDown: "下班打卡",
      activities: [
        {
          content: "上班打卡",
          timestamp: "2018-04-12 20:46",
          icon: "el-icon-circle-check",
          color: "#0bbd87",
          size: "larger"
        },
        {
          content: "下班打卡",
          timestamp: "2018-04-03 20:46",
          icon: "el-icon-circle-close",
          color: "#e74c3c",
          size: "larger"
        }
      ],

    };
  },
  methods: {
    clock_up() {
      console.log("up");
      this.isClock = false;
      console.log(new Date());
    },
    clock_down() {
      console.log("down");
      this.isClock = false;
      console.log(new Date().getUTCFullYear());
      console.log(new Date().getUTCMonth());
      console.log(new Date().getDate());
      console.log(new Date().getHours());
      console.log(new Date().getUTCMinutes());
      this.clockDown = "打卡结束";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/user_css/clock/clockDaily.scss";
</style>