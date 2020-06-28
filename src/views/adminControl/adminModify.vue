<template>
  <div id="adminModify">
    <div class="modify-body">
      <public-modify :info="info"></public-modify>
    </div>
  </div>
</template>

<script>
import publicModify from "../../components/publicModify";
import postApis from "../../jsUtil/postRequest";
export default {
  name: "adminModify",
  components: {
    publicModify
  },
  data() {
    return {
      info: {}
    };
  },
  created() {
    let obj = JSON.parse(sessionStorage.getItem("adminInfo"));
    console.log(obj);
    this.info = obj;
  }
};
</script>

<style lang="scss" scoped>
#adminModify {
  width: 100%;
}
</style>