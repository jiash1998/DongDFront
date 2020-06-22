<template>
  <div id="itemBase"></div>
</template>

<script>
export default {
  name: "itemBase",
  data() {
    return {};
  },
  created() {
    console.log(JSON.parse(sessionStorage.getItem("adminInfo")));
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>