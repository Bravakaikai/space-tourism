<template>
  <div class="form px-6">
    <a-form
      :model="form"
      name="contact"
      autocomplete="off"
      layout="vertical"
      @finish="submit"
    >
      <a-form-item
        label="Name"
        name="name"
        :rules="[{ required: true, message: 'Please input your name!' }]"
      >
        <a-input
          v-model:value="formName"
          placeholder="Please input your name..."
          allow-clear
        />
      </a-form-item>

      <a-form-item
        label="E-mail"
        name="email"
        :rules="[
          {
            required: true,
            type: 'email',
            message: form.email
              ? 'The input is not valid E-mail!'
              : 'Please input your e-mail!',
          },
        ]"
      >
        <a-input
          v-model:value="form.email"
          type="email"
          placeholder="Please input your email..."
          allow-clear
        />
      </a-form-item>
      <a-form-item
        label="Message"
        name="message"
        :rules="[{ required: true, message: 'Please input your message!' }]"
      >
        <a-textarea
          v-model:value="form.message"
          placeholder="Please input your message..."
          :rows="4"
          :maxlength="300"
          show-count
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
import { mapState } from "vuex";
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: null,
        email: null,
        message: null,
      },
    };
  },
  computed: {
    ...mapState({
      userName: (state) => state.userName,
    }),
    formName: {
      get() {
        if (!this.form.name && this.userName) this.setUserName();
        return this.form.name;
      },
      set(val) {
        this.form.name = val;
      },
    },
  },
  methods: {
    setUserName() {
      this.form.name = this.userName;
    },
    submit() {
      this.form.name = null;
      this.form.email = null;
      this.form.message = null;
      this.$message.success("Thank you! Your response has been recorded.", 3);
    },
  },
};
</script>
