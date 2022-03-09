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
  </div>
  <pop-up-dialog ref="popUpDialog" :title="dialogTitle">
    <template v-slot>
      <set-appearance v-if="dialogTitle === 'Appearance'" />
    </template>
  </pop-up-dialog>
</template>

<script>
import PopUpDialog from "@/components/PopUpDialog.vue";
import SetAppearance from "@/views/dialog/SetAppearance.vue";
export default {
  name: "ToolBar",
  components: {
    "pop-up-dialog": PopUpDialog,
    "set-appearance": SetAppearance,
  },

  data() {
    return {
      dialogTitle: null,
    };
  },
  methods: {
    openDialog(title) {
      this.dialogTitle = title;
      this.$refs.popUpDialog.openDialog();
    },
  },
};
</script>
