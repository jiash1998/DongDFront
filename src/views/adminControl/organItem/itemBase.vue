<template>
  <div id="itemBase" v-loading="fullscreenLoading">
    <div class="base-body">
      <div class="organ-name">
        <p>{{organ.organName}}</p>
      </div>
      <div class="organ-body">
        <div class="body-item1">
          <div class="item1-head">
            <img class="item-img" src="../../../assets/images/baseInfo2.png" />
            <p class="public-add-p1">基本信息</p>
          </div>
          <div class="item1-oper">
            <p class="public-add-p2">
              组织人数：
              <span>{{organ.organScale}}</span>
            </p>
          </div>
        </div>
        <div class="body-item2">
          <div class="item2-head">
            <img src="../../../assets/images/manage2.png" />
            <p class="public-add-p1">管理人员</p>
          </div>
          <div class="item2-oper">
            <p class="public-add-p2">管理人员：{{organ.organBoss}}</p>
            <p class="public-add-p2">联系方式：{{organ.organPhone}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adminApi from "../../../jsUtil/postRequest.js";

export default {
  name: "itemBase",
  data() {
    return {
      //遮罩
      fullscreenLoading: false,
      organ: {}
    };
  },
  created() {
    let adminInfo = JSON.parse(sessionStorage.getItem("adminInfo"));
    this.fullscreenLoading = true;
    setTimeout(() => {
      this.fullscreenLoading = false;
      this.getOrganSelf(adminInfo.username);
    }, 800);

    console.log(adminInfo);
  },
  methods: {
    //获取组织
    getOrganSelf(data) {
      let obj = {
        username: data
      };
      adminApi
        .getOrgan(obj)
        .then(res => {
          console.log(res.data);
          if (res.data.value == null) {
            this.isCreate = "none";
          } else {
            this.isCreate = res.data.value.organCode;
            this.organ = res.data.value;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/admin_css/itemBase.scss";
</style>