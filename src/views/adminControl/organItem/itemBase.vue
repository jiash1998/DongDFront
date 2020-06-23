<template>
  <div id="itemBase" v-loading="fullscreenLoading">
    <div class="base-body">{{organ}}</div>
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
</style>