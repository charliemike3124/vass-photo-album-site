import { MutationsHelper } from "@/store/helper";
import photoService from "../../services/photoService";

const state = {
  photos: [],
};

const mutations = {
  SetPhotos: MutationsHelper.set("photos"),
};

const actions = {
  async GetPhotos({ commit }, id) {
    const photos = await photoService.GetImagesByAlbumId(id);
    commit("SetPhotos", photos);
  },
};

const storageKeys = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
