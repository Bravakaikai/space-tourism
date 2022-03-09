import { createStore } from "vuex";

export default createStore({
  state: {
    darkMode: "light",
  },
  getters: {},
  mutations: {
    setDarkMode(state, payload) {
      state.darkMode = payload;
      localStorage.setItem("darkMode", payload);
    },
  },
  actions: {},
  modules: {},
});
