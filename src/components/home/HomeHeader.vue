<template>
  <v-row align="center">
    <v-col lg="6" md="5" sm="4" class="pa-0 img-row"><v-img src="@/assets/logo.jpg" width="180"></v-img></v-col>
    <v-col>
      <v-row justify="center" class="btn-row">
        <v-btn color="primary" tile width="80" elevation="0">All</v-btn>
        <v-btn tile text>Branding</v-btn>
        <v-btn tile text>Web</v-btn>
        <v-btn tile text>Photography</v-btn>
        <v-btn tile text>App</v-btn>
        <v-btn icon color="primary" class="ml-8"><v-icon>mdi-magnify</v-icon></v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HomeHeader",
};
</script>

<style lang="less" scoped>
@import (less) "../../styles/components/homeHeader.less";
</style>
