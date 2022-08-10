<template>
  <v-dialog v-model="showModal" width="650">
    <v-card>
      <v-card-title>({{ id }}) {{ title }}</v-card-title>
      <v-card-text>
        <v-img :src="url" width="600"></v-img>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "PhotoModal",
  props: {
    id: Number,
    title: String,
    url: String,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
