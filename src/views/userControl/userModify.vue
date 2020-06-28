<template>
  <div id="userModify">
    <div class="modify-body">
      <public-modify :info="info"></public-modify>
    </div>
  </div>
</template>

<script>
import publicModify from "../../components/publicModify";
export default {
  name: "userModify",
  components: {
    publicModify
  },
  data() {
    return {
      info: {}
    };
  },
  created() {
    let obj = JSON.parse(sessionStorage.getItem("userInfo"));
    console.log(obj);
    this.info = obj;
  }
};
</script>

<style lang="scss" scoped>
#userModify {
  width: 100%;
}
</style>