<template>
  <div class="form px-6">
    <a-form
      :model="form"
      name="login"
      autocomplete="off"
      layout="vertical"
      @finish="submit"
    >
      <a-form-item
        label="Username"
        name="name"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input
          v-model:value="form.name"
          placeholder="Please input your username..."
          allow-clear
        />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password
          v-model:value="form.password"
          placeholder="Please input your password..."
          allow-clear
        />
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          class="w-full mt-4"
          size="large"
        >
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "ContactPage",
  emits: ["close"],
  data() {
    return {
      form: {
        name: "test",
        password: "test",
      },
    };
  },
  methods: {
    ...mapMutations(["setUserName"]),
    submit() {
      this.setUserName(this.form.name);
      this.$notification.open({
        message: `Hello, ${this.form.name}!`,
        description: "Welcome to Space Tourism.",
        placement: "topRight",
      });
      this.form.name = null;
      this.form.password = null;
      this.$emit("close");
    },
  },
};
</script>
