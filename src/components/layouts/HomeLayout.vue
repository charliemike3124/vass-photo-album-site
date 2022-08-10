<template>
  <div class="wrapper">
    <div><slot name="header"></slot></div>
    <div><slot name="landing"></slot></div>
    <div><slot name="photos"></slot></div>
    <div><slot name="footer"></slot></div>
  </div>
</template>

<script>
export default {
  name: "HomeLayout",
};
</script>

<style lang="less" scoped>
@import (less) "../../styles/components/homeLayout.less";
</style>
