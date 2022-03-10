import { createStore } from "vuex";

export default createStore({
  state: {
    darkMode: "light",
    currTab: "Home",
    currPlanet: null,
    userName: null,
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
    setCurrPlanet(state, payload) {
      state.currPlanet = payload;
    },
    setUserName(state, payload) {
      state.userName = payload;
    },
  },
  actions: {},
  modules: {},
});
