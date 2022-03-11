<template>
  <div class="absolute top-5 right-4 tablet:top-8 tablet:right-8">
    <p v-if="userName" class="text-2xl tablet:text-3xl text-right mb-0">
      Hello, {{ userName }}!
    </p>
    <div class="flex justify-end">
      <base-button
        v-if="!userName"
        class="px-2 tablet:px-4 tablet:py-1"
        title="Login"
        @click="openDialog('login-page', 'Login')"
      />
      <a-tooltip v-else placement="bottom">
        <template v-slot:title> Log Out</template>
        <button class="hover:bg-transparent" @click="setUserName(null)">
          <i class="fa-solid fa-right-to-bracket text-2xl tablet:text-3xl"></i>
        </button>
      </a-tooltip>
      <a-tooltip placement="bottom">
        <template v-slot:title>Setting</template>
        <button
          type="button"
          class="ml-3 tablet:ml-4 hover:bg-transparent"
          @click="openDialog('set-appearance', 'Appearance')"
        >
          <i class="fa-solid fa-gear text-2xl tablet:text-3xl"></i>
        </button>
      </a-tooltip>
    </div>
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
