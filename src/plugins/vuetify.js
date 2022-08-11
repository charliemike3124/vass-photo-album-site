import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import minifyTheme from "minify-css-string";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
      minifyTheme,
      themeCache: {
        get: (key) => localStorage.getItem(key),
        set: (key, value) => localStorage.setItem(key, value),
      },
    },
    themes: {
      light: {
        primary: "#fc758c",
      },
    },
  },
  icons: {
    iconfont: "mdi",
  },
});
