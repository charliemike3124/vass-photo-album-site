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
    <div class="align-self-center btn-wrapper">
      <v-btn elevation="0" tile :color="!filter ? 'primary' : ''" :text="!!filter" @click="() => (filter = null)">
        All
      </v-btn>
      <v-btn elevation="0" tile :color="isOdd ? 'primary' : ''" :text="!isOdd" @click="() => (filter = 'odd')">
        Odd
      </v-btn>
      <v-btn elevation="0" tile :color="isEven ? 'primary' : ''" :text="!isEven" @click="() => (filter = 'even')">
        Even
      </v-btn>
    </div>
    <div class="photo-wrapper py-12">
      <v-row>
        <v-col v-for="(photo, index) in currentPhotos" :key="index">
          <v-img
            :src="photo.thumbnailUrl"
            width="284"
            :class="photo.gridFixer ? '' : 'photo'"
            @click="openPhotoModal(photo)"
          />
        </v-col>
      </v-row>
    </div>
    <div class="align-self-center">
      <v-btn tile color="primary" elevation="0" @click="loadNextPage" :loading="loadingImages">Show Me More</v-btn>
    </div>
    <PhotoModal ref="photoModal" v-bind="selectedPhoto" />
  </div>
</template>

<script>
import PhotoModal from "./PhotoModal.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "HomePhotos",
  components: {
    PhotoModal,
  },

  computed: {
    ...mapState("photos", ["photos"]),
    currentPhotos() {
      let currentPhotos = this.photos.slice(0, this.page * this.photosPerPage);
      switch (this.filter) {
        case "odd":
          currentPhotos = currentPhotos.filter((photo) => photo.id % 2 !== 0);
          break;
        case "even":
          currentPhotos = currentPhotos.filter((photo) => photo.id % 2 === 0);
          break;
      }
      if (currentPhotos.length % 2 !== 0) {
        currentPhotos.push({
          gridFixer: true,
        });
      }
      return currentPhotos;
    },

    isEven() {
      return this.filter === "even";
    },

    isOdd() {
      return this.filter === "odd";
    },
  },

  data() {
    return {
      page: 1,
      photosPerPage: 9,
      currentAlbumId: 1,
      loadingImages: false,
      filter: null,
      selectedPhoto: null,
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

    openPhotoModal(photo) {
      if (photo.gridFixer) return;
      this.selectedPhoto = photo;
      this.$refs.photoModal.showModal = true;
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
