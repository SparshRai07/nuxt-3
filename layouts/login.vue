<template>
  <div class="login-container">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-card outlined class="login-card">
            <v-img
              :src="backgroundImage"
              height="250"
            >
              <v-card-title class="text-center">
                <v-icon size="48" class="mdi text-dark">mdi-account-circle</v-icon>
                <h2 class="mb-0 text-green-sxl">Welcome Back</h2>
              </v-card-title>
            </v-img>
            <v-card-text>
              <v-text-field v-model="userData.email" label="Email" outlined dense color="primary"></v-text-field>
              <v-text-field v-model="userData.password" label="Password" outlined dense color="primary" type="password"></v-text-field>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="green" dark @click="authStore.login(userData)">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useAuthStore } from "~/store/auth";
import { ref } from "vue";

const authStore = useAuthStore();
const userData = ref({
  email: "",
  password: ""
});

const backgroundImage = "https://cdn.pixabay.com/photo/2024/02/12/16/05/hunter-peak-8568915_1280.jpg";
</script>

<style scoped>
.login-container {
  height: 120vh;
  background-color: #f3f8f2; /* Light green background */
}

.login-card {
  background-color: rgba(255, 255, 255, 0.9); /* Transparent white card background */
}

.login-card:hover {
  transform: scale(1.05); /* Hover effect */
  transition: transform 0.3s ease;
}

.text-h2 {
  font-size: 24px; /* Larger font size */
  font-weight: bold; /* Bolder font weight */
  color: #007bff; /* Bright blue color */
}
</style>
