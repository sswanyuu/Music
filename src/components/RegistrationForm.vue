<template>
  <!-- Registration Form -->
  <div
    class="text-white text-center font-bold p-4 rounded mb-4"
    v-if="show_alert"
    :class="alert_variant"
  >
    {{ alert_message }}
  </div>
  <vee-form
    v-show="tab === 'register'"
    :validation-schema="schema"
    @submit="register"
    :initial-values="userData"
  >
    <!-- Name -->
    <div class="mb-3">
      <label class="inline-block mb-2">Name</label>
      <vee-field
        name="name"
        type="text"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Name"
      />
      <ErrorMessage class="text-red-600" name="name" />
    </div>
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
    <!-- Age -->
    <div class="mb-3">
      <label class="inline-block mb-2">Age</label>
      <vee-field
        name="age"
        type="number"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="18"
      />
      <ErrorMessage class="text-red-600" name="age" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field name="password" :bails="false" v-slot="{ field, errors }">
        <input
          type="password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Password"
          v-bind="field"
        />
        <div class="text-red-600" v-for="error in errors" :key="error">
          {{ error }}
        </div>
      </vee-field>
    </div>
    <!-- Confirm Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Confirm Password</label>
      <vee-field
        type="password"
        name="confirm_password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Confirm Password"
      />
      <ErrorMessage class="text-red-600" name="confirm_password" />
    </div>
    <!-- Country -->
    <div class="mb-3">
      <label class="inline-block mb-2">Country</label>
      <vee-field
        as="select"
        name="country"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      >
        <option value="USA">USA</option>
        <option value="Taiwan">Taiwan</option>
        <option value="Australia">Australia</option>
      </vee-field>
      <ErrorMessage class="text-red-600" name="country" />
    </div>
    <!-- TOS -->
    <div class="mb-3 pl-6">
      <vee-field
        name="tos"
        type="checkbox"
        value="1"
        class="w-4 h-4 float-left -ml-6 mt-1 rounded"
      />
      <label class="inline-block">Accept terms of service</label>
      <ErrorMessage class="text-red-600 block" name="tos" />
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
import { ErrorMessage, Form as VeeForm, Field as VeeField } from "vee-validate";
import { auth, db } from "@/includes/firebase";

export default {
  name: "RegistrationForm",
  components: {
    ErrorMessage,
    VeeForm,
    VeeField,
  },
  props: {
    tab: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      userData: {
        country: "Taiwan",
      },
      in_submission: false,
      show_alert: false,
      alert_variant: "bg-blue-500",
      alert_message: "Please wait...",
      schema: {
        name: "required|min:3|max:100|alpha_spaces",
        email: "required|email|min:3|max:100|",
        age: "required|min_value:18|max_value:130",
        password: "required|min:8|max:16|alpha_num",
        confirm_password: "passwords_mismatch:@password",
        country: "required",
        tos: "tos",
      },
    };
  },
  methods: {
    async register(values) {
      console.log("🚀 ~ file: AppAuth.vue:224 ~ register ~ values", values);
      this.show_alert = true;
      this.in_submission = true;
      this.alert_variant = "bg-blue-500";
      this.alert_message = "Please wait...";
      let userCredential = null;
      try {
        userCredential = await auth.createUserWithEmailAndPassword(
          values.email,
          values.password
        );
      } catch (error) {
        this.in_submission = false;
        this.alert_variant = "bg-red-500";
        this.alert_message = "An unexpected error occurred. Please try again.";
        return;
      }
      console.log(
        "🚀 ~ file: RegistrationForm.vue ~ register ~ userCredential",
        userCredential
      );
      this.alert_variant = "bg-green-500";
      this.alert_message = "Account created successfully!";
    },
  },
};
</script>
