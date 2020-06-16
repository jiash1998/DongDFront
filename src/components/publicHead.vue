<template>
  <div id="publicHead">
    <div class="head">
      <router-link to="/Home" tag="div">
        <div class="head-logo">
          <img id="logo-img" src="../assets/images/logo2.png" />
          <p id="logo-p">咚咚管理后台</p>
        </div>
      </router-link>
      <div class="head-reg">
        <router-link :to="url">
          <ElButton type="primary" size="small" plain>
            <slot name="info"></slot>
          </ElButton>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "publicHead",
  props: {
    url: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/comp_css/publicHead.scss";
</style>