<template>
  <HomeLayout>
    <template #header><HomeHeader /></template>
    <template #landing><HomeLanding /></template>
    <template #photos><HomePhotos data-aos="fade-up" /></template>
    <template #footer><HomeFooter data-aos="fade-up" /></template>
  </HomeLayout>
</template>

<script>
import { HomeHeader, HomeLayout, HomeLanding, HomeFooter, HomePhotos } from "@/components";

export default {
  name: "Home",

  components: { HomeHeader, HomeLayout, HomeLanding, HomeFooter, HomePhotos },
};
</script>
