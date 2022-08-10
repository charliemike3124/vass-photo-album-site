<template>
  <HomeLayout>
    <template #header><HomeHeader /></template>
    <template #landing><HomeLanding /></template>
    <template #photos><HomePhotos /></template>
    <template #footer><HomeFooter /></template>
  </HomeLayout>
</template>

<script>
import { HomeHeader, HomeLayout, HomeLanding, HomeFooter, HomePhotos } from "@/components";

export default {
  name: "Home",

  components: { HomeHeader, HomeLayout, HomeLanding, HomeFooter, HomePhotos },

  computed: {},

  methods: {},

  mounted() {},
};
</script>
<style lang="less">
@import (less) "../styles/views/home.less";
</style>
