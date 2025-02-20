<template>
  <!-- Login Form -->
  <div
    class="text-white text-center font-bold p-4 rounded mb-4"
    v-if="show_alert"
    :class="alert_variant"
  >
    {{ alert_message }}
  </div>
  <vee-form :validation-schema="schema" @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        name="email"
        type="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field
        name="password"
        type="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
      />
      <ErrorMessage class="text-red-600" name="password" />
    </div>
    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
      :disabled="in_submission"
    >
      Submit
    </button>
  </vee-form>
</template>
<script>
import { ErrorMessage, Form as VeeForm } from "vee-validate";
export default {
  name: "LoginForm",
  components: {
    ErrorMessage,
    VeeForm,
  },
  data() {
    return {
      in_submission: false,
      show_alert: false,
      alert_variant: "bg-blue-500",
      alert_message: "Please wait...",
      schema: {
        email: "required|email|min:3|max:100|",
        password: "required|min:8|max:16|alpha_num",
      },
    };
  },
  methods: {
    login(values) {
      console.log("🚀 ~ file: AppAuth.vue:224 ~ register ~ values", values);
      this.in_submission = true;
      this.show_alert = true;
      this.alert_variant = "bg-blue-500";
      this.alert_message = "Please wait, we are logging you in...";
      this.alert_variant = "bg-green-500";
      this.alert_message = "Success! You are now logged in!";
    },
  },
};
</script>
