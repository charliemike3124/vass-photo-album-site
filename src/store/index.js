import Vue from "vue";
import Vuex from "vuex";
import { photos } from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    photos,
  },
});
