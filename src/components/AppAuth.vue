<template>
  <!-- Auth Modal -->
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    id="modal"
    :class="hiddenClass"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
        >&#8203;</span
      >

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <div class="py-4 text-left px-6">
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <div
              class="modal-close cursor-pointer z-50"
              @click.prevent="closeAuth"
            >
              <i class="fas fa-times"></i>
            </div>
          </div>
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a
                key="login"
                class="block rounded py-3 px-4 transition"
                href="#"
                :class="{
                  'hover:text-white text-white bg-blue-600': tab === 'login',
                }"
                @click.prevent="changeTab('login')"
                >Login</a
              >
            </li>
            <li class="flex-auto text-center">
              <a
                key="register"
                class="block rounded py-3 px-4 transition"
                href="#"
                :class="{
                  'hover:text-white text-white bg-blue-600': tab === 'register',
                }"
                @click.prevent="changeTab('register')"
                >Register</a
              >
            </li>
          </ul>
          <app-login-form v-if="loginTabVisible" />
          <app-registration-form v-if="registerTabVisible" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import useModalStore from "@/stores/modal";
import { mapState, mapWritableState } from "pinia";
import AppLoginForm from "@/components/LoginForm.vue";
import AppRegistrationForm from "@/components/RegistrationForm.vue";

export default {
  name: "AppAuth",
  components: {
    AppLoginForm,
    AppRegistrationForm,
  },
  data() {
    return {
      tab: "login",
    };
  },
  computed: {
    ...mapState(useModalStore, ["hiddenClass", "tabClass"]),
    ...mapWritableState(useModalStore, {
      modalVisibility: "isOpen",
    }),
    loginTabVisible() {
      return this.tab === "login";
    },
    registerTabVisible() {
      return this.tab === "register";
    },
  },
  methods: {
    closeAuth() {
      this.modalVisibility = !this.modalVisibility;
    },
    changeTab(key) {
      this.tab = key;
    },
  },
};
</script>
