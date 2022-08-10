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
    const photos = await photoService.GetImagesByAlbumId(id);
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
