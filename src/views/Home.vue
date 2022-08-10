<template>
  <HomeLayout>
    <template #header><HomeHeader /></template>
  </HomeLayout>
</template>

<script>
import { HomeHeader, HomeLayout } from "@/components";

export default {
  name: "Home",

  components: { HomeHeader, HomeLayout },

  computed: {},

  methods: {},

  mounted() {},
};
</script>
<style lang="less">
@import (less) "../styles/views/home.less";
</style>
