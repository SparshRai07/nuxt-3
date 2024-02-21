<template>
  <div style="height:100vh; display: flex; align-items: center">
 <v-container>
  
 <v-label class="text-h4">Welcome Back</v-label>
 <v-text-field label="Email" v-model="userData.email"></v-text-field>
 <v-text-field label="Password" v-model="userData.password"></v-text-field>
 <v-btn text="login" @click="authStore.login(userData)"></v-btn>
 </v-container>
  </div>
</template>
 
 <script setup>
 import {useAuthStore} from "~/store/auth";
 const authStore = useAuthStore (); 

 definePageMeta({
  layout: "login",
 });
 
 
const userData = ref({
  email: null,
  password:null,
 });

 </script>

 <style scoped>
 
 </style>