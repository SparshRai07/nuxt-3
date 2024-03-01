import { defineStore } from "pinia";
import axiosApi from "~/config/axios";
import { navigateTo } from 'vue-router';

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null,
    loading: false,
  }),

  actions: {
    async login(userData) {
      try {
        this.loading = true;
        var response = await axiosApi.post("login", userData);

        if (response.status == 200) {
          if (process.client && response.data.data.token != null) {
            this.token = response.data.data.token;
            localStorage.setItem("token", `${response.data.data.token}`);
            navigateTo("/");
          }
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },

    getToken() {
      if (process.client) {
        this.token = localStorage.getItem("token") ?? null;
      }
    },

    async logout() {
      try {
        if (process.client) {
          var token = localStorage.getItem("token");
          this.loading = true;
          var response = await axiosApi.get("logout", {
            headers: { Authorization: `Bearer ${token}` },
          });

          console.warn(response.data);
          if (response.status == 200) {
            localStorage.removeItem("token");
            navigateTo("/login");
          }
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },
  },
});
