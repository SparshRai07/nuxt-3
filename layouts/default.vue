<template>
  <div>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar color="#616161" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title class="text--white">ESHOP</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn prepend-icon="mdi-cart" @click = "router.push('/carts')"
        >{{ CartStore.items.length }}</v-btn>

        <v-btn
          v-if="authStore.token"
          variant="text"
          prepend-icon="mdi-login"
          text="logout"
          @click="authStore.logout()">
          Logout
          <v-progress-circular>
           v-if="authStore.loading"
           indeterminate
           color="primary"
          </v-progress-circular>
        </v-btn>

        <v-btn
          v-else
          variant="text"
          prepend-icon="mdi-login"
          text="login"
          @click="$router.push('/login')">
          Login
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" location="left" temporary>
        <v-list :items="items"></v-list>
      </v-navigation-drawer>

      <v-main>
        <!-- slot -->
        <nuxt-loader />
        <slot />
        <!-- slot -->
      </v-main>
    </v-layout>
  </div>
</template>

<script setup>

import { useAuthStore } from "~/store/auth";
const authStore = useAuthStore();
import {userCartStore} from "~/store/cart";
const CartStore = userCartStore();
CartStore.getCartItems();
authStore.getToken();;
import {ref, watch } from "vue";
const drawer = ref(false);
const group = ref(null);


watch(group, () => {
  drawer.value = false;
});


</script>

<style scoped>

.text--white {
  color: #FFFFFF; /* White color */
}
</style>
