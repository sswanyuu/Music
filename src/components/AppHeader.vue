<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <a class="text-white font-bold uppercase text-2xl mr-4" href="#">Music</a>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li v-if="!isLoggedIn">
            <a
              class="px-2 text-white"
              href="#"
              @click.prevent="toggleAuthVisibility"
              >Login / Register</a
            >
          </li>
          <template v-else>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="signOut"
                >Logout</a
              >
            </li>
            <li>
              <a class="px-2 text-white" href="#">Manage</a>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapState, mapActions } from "pinia";
import useModalStore from "@/stores/modal";
import useUserStore from "@/stores/user";
export default {
  name: "AppHeader",
  computed: {
    ...mapState(useUserStore, ["isLoggedIn"]),
  },
  methods: {
    ...mapActions(useModalStore, ["toggleAuthVisibility"]),
    ...mapActions(useUserStore, ["signOut"]),
  },
};
</script>
