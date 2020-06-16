<template>
  <div class="homebody">
    <!-- 主体展示1 -->
    <div class="display">
      <div class="display-top">
        <div class="top-module1 borderRadius">
          <div class="module1-title">
            <p>专属咚咚</p>
            <p>我的咚咚我做主，开启专属企业组织的数字化办公</p>
          </div>
          <div class="module1-body">
            <ul id="body-intro">
              <li>- 轻松打造专属自己的咚咚</li>
              <li>- 高级别安全保护</li>
              <li>- 支持深度定制</li>
            </ul>
          </div>
          <div class="module1-foot">
            <div class="public-more">
              <p id="foot-more">查看更多</p>
              <img id="go" src="../assets/images/right.png" />
            </div>
          </div>
        </div>
        <div class="top-module2 borderRadius">
          <div class="module2-title">
            <p>数字化平台</p>
            <p>将日常的考勤打卡及组织活动转换为数字化平台的应用</p>
          </div>
          <div class="module2-foot">
            <div class="public-more">
              <p id="foot-more">查看更多</p>
              <img id="go" src="../assets/images/right.png" />
            </div>
          </div>
        </div>
        <div class="top-module3 borderRadius">
          <div class="module3-title">
            <p>高效率</p>
            <p>咚咚尽可能对各种业务实现最合理的安排，为您保证最高效的操作</p>
          </div>
          <div class="module3-foot">
            <div class="public-more">
              <p id="foot-more">查看更多</p>
              <img id="go" src="../assets/images/right.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="display-bottom">
        <div class="bottom-module1 borderRadius">
          <div class="module1-title">
            <p>服务对象</p>
            <p>平台可接受多类服务对象，满足您的所有需求</p>
          </div>
          <div class="module1-foot">
            <div class="public-more">
              <p id="foot-more">查看更多</p>
              <img id="go" src="../assets/images/right.png" />
            </div>
          </div>
        </div>
        <div class="bottom-module2 borderRadius">
          <div class="module2-title">
            <p>人性化</p>
            <p>咚咚始终以用户为基础，时刻保持最良好的用户体验</p>
          </div>
          <div class="module2-foot">
            <div class="public-more">
              <p id="foot-more">查看更多</p>
              <img id="go" src="../assets/images/right.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- fill -->
    <div class="fill"></div>
    <!-- 主体展示2 -->
    <div class="advantage">
      <div class="advantage-title">
        <p class="title-p1 add">在咚咚</p>
        <P class="title-p2 add">工作简单高效更安全</P>
      </div>
      <div class="advantage-cont">
        <div class="cont-item" v-for="(item, index) in advantage" :key="index">
          <img :src="item.url" class="cont-img" />
          <p class="cont-p1">{{item.title}}</p>
          <p class="cont-p2">{{item.detail}}</p>
        </div>
      </div>
    </div>
    <!-- 主体展示3 -->
    <div class="other">
      <div class="other-body">
        <p id="body-p">Dong D</p>
        <span id="body-span">咚一下</span>
        <!-- <img id="body-img" src="../assets/images/science2.png" /> -->
      </div>
      <div class="other-foot">
        <ElButton type="primary" plain>立即注册</ElButton>
      </div>
    </div>
    <!-- 成功案例 -->
    <div class="success-example">
      <h1 id="example-h1">客户案例</h1>
    </div>
    <div class="success">
      <div class="success-body" v-for="(item, index) in success" :key="index">
        <img id="body-img" :src="item.url" />
        <p class="body-p1 public-add">
          {{item.type}}
          <b>|</b>
          {{item.name}}
        </p>
        <p class="body-p2 public-add">{{item.detail1}}</p>
        <p class="body-p3 public-add">{{item.detail2}}</p>
      </div>
    </div>
    <!-- fill -->
    <div class="fill"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      advantage: [
        {
          url: require("../assets/images/organ.png"),
          title: "组织关系更加在线化",
          detail:
            "安全可靠的组织通讯录，快速找到同事，实现组织架构扁平化、可视化"
        },
        {
          url: require("../assets/images/efficiency.png"),
          title: "提高组织沟通效率",
          detail:
            "组织沟通更加高效便捷，实现使命必达，激发组织中个体的创造创新力"
        },
        {
          url: require("../assets/images/digital.png"),
          title: "业务流程数字化",
          detail:
            "助力组织的业务流程数字化/在线化支撑组织协同高效运转，加速组织变革"
        }
      ],
      success: [
        {
          url: require("../assets/images/JML.png"),
          type: "食品/饮料",
          name: "今麦郎饮品股份有限公司",
          detail1: "传统信息化的智能转型之路",
          detail2:
            "今麦郎饮品股份有限公司全面启用咚咚，极大提升了业务流转的效率，助力传统信息化向智能信息化发展。"
        },
        {
          url: require("../assets/images/SX.png"),
          type: "纺织业",
          name: "上海水星家纺",
          detail1: "咚咚让思维和观念的改变变成习惯",
          detail2:
            "借助咚咚这样互联网化的交流工具，办公体系实现透明化、轻娱化，每一位水星人更有参与感、互动感！"
        },
        {
          url: require("../assets/images/YD.png"),
          type: "食品/饮料",
          name: "今麦郎饮品股份有限公司",
          detail1: "环保节能的办公方式",
          detail2:
            "远大科技集团一直提倡节能、环保理念，并在所生产产品中贯彻执行这个理念。咚咚提供的绿色环保办公方式，正好契合远大的目标，是适合远大的办公方式。"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/homeBody.scss";
</style>
