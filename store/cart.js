import { defineStore } from "pinia";
import axiosApi from "~/config/axios";

export const userCartStore = defineStore('cart', {
  state: () => ({
    message: null,
    items: null,
    loading: false,
  }),
  actions: {
    async addToCart(cartData) {
      try {
        this.loading = true;
        var token = localStorage.getItem("token");
        var response = await axiosApi.post("cart", cartData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status == 200) {
          this.message = response.data.data.message;
          alert(this.message);
          this.getCartItems(); // Fixed: Corrected the function name
        }
      } catch (e) {
        console.warn(e); // Fixed: Changed "$e" to "e"
      } finally {
        this.loading = false;
      }
    },
    async getCartItems() { // Fixed: Corrected function name
      try {
        this.loading = true;
        var token = localStorage.getItem("token");
        var response = await axiosApi.get("cart", { // Fixed: Changed "post" to "get"
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status == 200) {
          this.items = response.data.data.data;
          alert(this.message); // Fixed: Alerting correct message
        }
      } catch (e) {
        console.warn(e); // Fixed: Changed "$e" to "e"
      } finally {
        this.loading = false;
      }
    },
  }
});
