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
          <div :class="[clockNum >= 2?'yes-clock-ban':'yes-clock']">
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
//时间转转换字符串
import times from "../../../jsUtil/getTimes.js";
export default {
  name: "clockDaily",
  data() {
    return {
      //切换打卡状态,需要放入sessionStorage
      isClock: true,
      //打卡所需数据
      clockUp: "上班打卡",
      clockWait: "下班前请再次打卡",
      clockDown: "下班打卡",
      iconCheck: "el-icon-circle-check",
      iconWait: "el-icon-loading",
      iconClose: "el-icon-circle-close",
      colorSuc: "#0bbd87",
      colorError: "#e74c3c",
      colorWait: "#f39c12",
      //打卡计数
      clockNum: 0,
      //时间线展示数组
      activities: [],
      //打卡提交
      clockObj:{
        username:"",
        organName:"",
        organCode:"",
        todayStart:"",
        todayEnd:"",
        isEnd:""
      }
    };
  },
  methods: {
    clock_up() {
      this.isClock = false;
      this.clockNum++;
      this.pushActivity(this.clockUp, this.iconCheck, this.colorSuc);
      this.pushActivity(this.clockWait, this.iconWait, this.colorWait);
      console.log(times.calcTimes());
    },
    clock_down() {
      this.isClock = false;
      this.clockNum++;

      if (this.clockNum > 2) {
        console.log("别点了！！！");
      } else {
        this.activities.pop();
        this.clockDown = "打卡结束";
        this.pushActivity(this.clockDown, this.iconClose, this.colorError);
      }
    },
    //时间线操作
    pushActivity(text, icon, color) {
      let obj = {
        content: text,
        timestamp: times.calcTimes(),
        icon: icon,
        color: color,
        size: "larger"
      };
      this.activities.push(obj);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/user_css/clock/clockDaily.scss";
</style>