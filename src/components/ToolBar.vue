<template>
  <div class="flex items-center absolute top-5 right-10">
    <div v-if="userName" class="flex items-center">
      <p class="text-2xl mb-0 mr-4">Hello, {{ userName }}!</p>
      <base-button :title="'Log Out'" @click="setUserName(null)" />
    </div>
    <base-button
      v-else
      :title="'Login'"
      @click="openDialog('login-page', 'Login')"
    />
    <button
      type="button"
      class="text-3xl ml-4 hover:bg-transparent"
      @click="openDialog('set-appearance', 'Appearance')"
    >
      <i class="fa-solid fa-gear text-3xl"></i>
    </button>
  </div>
  <pop-up-dialog ref="popUpDialog" :title="dialog.title">
    <template v-slot>
      <keep-alive>
        <component
          :is="dialog.contentId"
          @close="$refs.popUpDialog.close()"
        ></component>
      </keep-alive>
    </template>
  </pop-up-dialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import PopUpDialog from "@/components/PopUpDialog.vue";
import BaseButton from "@/components/BaseButton.vue";
import SetAppearance from "@/views/dialog/SetAppearance.vue";
import LoginPage from "@/views/dialog/LoginPage.vue";
export default {
  name: "ToolBar",
  components: {
    "pop-up-dialog": PopUpDialog,
    "set-appearance": SetAppearance,
    "login-page": LoginPage,
    "base-button": BaseButton,
  },
  computed: {
    ...mapState({
      userName: (state) => state.userName,
    }),
  },
  data() {
    return {
      dialog: {
        title: null,
        contentId: null,
      },
    };
  },
  methods: {
    ...mapMutations(["setUserName"]),
    openDialog(contentId, title) {
      this.dialog = {
        title,
        contentId,
      };
      this.$refs.popUpDialog.openDialog();
    },
  },
};
</script>
