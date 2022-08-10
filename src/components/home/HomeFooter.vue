<template>
  <div class="d-flex flex-column justify-center align-center my-16">
    <div class="mb-8">
      <span class="grey--text">
        ©2016 -
        <span class="primary--text">Sneak</span>
        All Rights Reserved
      </span>
    </div>
    <div class="">
      <v-btn icon :color="iconColor" x-small>
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn icon :color="iconColor" x-small>
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon :color="iconColor" x-small>
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn icon :color="iconColor" x-small>
        <v-icon>mdi-google-plus</v-icon>
      </v-btn>
      <v-btn icon :color="iconColor" x-small>
        <v-icon>mdi-youtube</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeFooter",
  data() {
    return {
      iconColor: "grey",
    };
  },
};
</script>

<style lang="less">
@import (less) "../../styles/components/homeFooter.less";
</style>
