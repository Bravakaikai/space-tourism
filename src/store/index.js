import { createStore } from "vuex";

export default createStore({
  state: {
    darkMode: "light",
    currTab: "Home",
  },
  getters: {},
  mutations: {
    setDarkMode(state, payload) {
      state.darkMode = payload;
      localStorage.setItem("darkMode", payload);
    },
    setCurrTab(state, payload) {
      state.currTab = payload;
    },
  },
  actions: {},
  modules: {},
});
