import { MutationsHelper } from "@/store/helper";
import photoService from "../../services/photoService";

const state = {
  photos: [],
};

const mutations = {
  SetPhotos: MutationsHelper.set("photos"),
};

const actions = {
  async GetPhotosByAlbumId({ commit, state }, id) {
    //TODO - Validate that the provided id exists in the API.
    //TODO - Store images in local storage to avoid hitting the endpoint innecesarily.
    const response = await photoService.GetImagesByAlbumId(id);
    const photos = response.map((photo) => ({
      id: photo.id,
      thumbnailUrl: photo.thumbnailUrl,
      title: photo.title,
      url: photo.url,
    }));
    commit("SetPhotos", [...state.photos, ...photos]);
  },
};

const storageKeys = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
