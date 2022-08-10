<template>
  <div class="d-flex flex-column justify-center">
    <div class="align-self-center py-12">
      <v-btn icon class="mr-4">
        <v-icon color="primary">mdi-view-grid</v-icon>
      </v-btn>
      <v-btn icon class="mr-4">
        <v-icon color="primary">mdi-view-stream</v-icon>
      </v-btn>
    </div>
    <div class="align-self-center py-12 btn-wrapper">
      <v-btn tile color="primary" elevation="0">All</v-btn>
      <v-btn tile text>Branding</v-btn>
      <v-btn tile text>Web</v-btn>
      <v-btn tile text>Photography</v-btn>
      <v-btn tile text>App</v-btn>
    </div>
    <div class="photo-wrapper py-12">
      <v-row justify="start" align="start">
        <v-col v-for="(photo, index) in currentPhotos" :key="index">
          <v-img :src="photo.thumbnailUrl" width="250" />
        </v-col>
      </v-row>
    </div>
    <div class="align-self-center mb-8">
      <v-btn tile color="primary" elevation="0" @click="loadNextPage" :loading="loadingImages">Show Me More</v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "HomePhotos",
  computed: {
    ...mapState("photos", ["photos"]),
    currentPhotos() {
      return this.photos.slice(0, this.page * this.photosPerPage);
    },
  },

  data() {
    return {
      page: 1,
      photosPerPage: 9,
      currentAlbumId: 1,
      loadingImages: false,
    };
  },

  methods: {
    ...mapActions("photos", ["GetPhotosByAlbumId"]),

    async loadNextPage() {
      this.page++;
      this.loadingImages = true;
      const currentPhotoAmount = this.photosPerPage * this.page;
      if (currentPhotoAmount > this.currentPhotos.length) {
        this.currentAlbumId++;
        await this.GetPhotosByAlbumId(this.currentAlbumId);
      }
      this.loadingImages = false;
    },
  },

  async created() {
    await this.GetPhotosByAlbumId(this.currentAlbumId);
  },
};
</script>

<style lang="less">
@import (less) "../../styles/components/homePhotos.less";
</style>
