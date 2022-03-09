<template>
  <div class="flex items-center absolute top-5 right-10">
    <button
      type="button"
      class="border-2 border-solid border-themeText rounded px-4 py-1 text-2xl"
    >
      LOGIN
    </button>
    <button
      type="button"
      class="text-3xl ml-4"
      @click="openDialog('Appearance')"
    >
      <i class="fa-solid fa-gear text-3xl"></i>
    </button>
    <pop-up-dialog ref="popUpDialog" :title="dialogTitle">
      <template v-slot>
        <div v-if="dialogTitle === 'Appearance'" class="flex justify-center">
          <div>
            <input
              type="radio"
              v-model="darkMode"
              id="light"
              name="darkMode"
              value="light"
              checked
            />
            <label for="light">Light</label>
          </div>
          <div class="ml-4">
            <input
              type="radio"
              v-model="darkMode"
              id="dark"
              name="darkMode"
              value="dark"
            />
            <label for="dark">Dark</label>
          </div>
        </div>
      </template>
    </pop-up-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import PopUpDialog from "@/components/PopUpDialog.vue";
export default {
  name: "ToolBar",
  components: {
    "pop-up-dialog": PopUpDialog,
  },
  computed: {
    ...mapState({
      mode: (state) => state.darkMode,
    }),
    darkMode: {
      get() {
        return this.mode;
      },
      set(val) {
        this.setDarkMode(val);
      },
    },
  },
  data() {
    return {
      dialogTitle: null,
    };
  },
  methods: {
    ...mapMutations(["setDarkMode"]),
    openDialog(title) {
      this.dialogTitle = title;
      this.$refs.popUpDialog.openDialog();
    },
  },
};
</script>

<style lang="scss" scoped>
input[type="radio"] {
  cursor: pointer;
  transform: scale(1.5);
}
input[type="radio"] + label {
  margin-left: 10px;
  font-size: 24px;
}
</style>
