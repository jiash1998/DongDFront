<template>
  <div class="home">
    <!-- 主页导航栏 -->
    <div class="navbar">
      <div class="navbar-logo">
        <img id="logo" src="../assets/images/logo2.png" />
        <p id="name">咚咚</p>
      </div>
      <div class="navbar-cont">
        <router-link to="/Help" id="cont-help" tag="p">公告详情</router-link>
        <router-link to="/Help" id="cont-help" tag="p">使用手册</router-link>
        <router-link to="/Help" id="cont-help" tag="p">关于我们</router-link>
      </div>
      <div class="navbar-manage">
        <router-link to="/Register">
          <ElButton type="primary" plain round>注 册</ElButton>
        </router-link>
        <router-link to="/Sign" id="manage-sign" tag="p">登录</router-link>
      </div>
    </div>
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
    <!-- 主体展示2 -->
    <div class="other"></div>
    <!-- 主体展示3 -->
    <div class="advantage"></div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
@import "../assets/css/home.scss";
</style>
