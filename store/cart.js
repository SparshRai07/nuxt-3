import { defineStore } from "pinia";
import axiosApi from "~/config/axios";

export const userCartStore = defineStore('cart', {
  state: () => ({
    message: null,
    items: [],
    loading: false,
  }),
  actions: {
    async addToCart(cartData) {
      try {
        this.loading = true;

        // Check if client-side (browser) to access localStorage
        if (process.client) {
          var token = localStorage.getItem("token");
          var response = await axiosApi.post("cart", cartData, {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (response.status === 200) {
            this.message = response.data.data.message;
            alert(this.message);
            await this.getCartItems();
          }
        } else {
          // Handle server-side logic if needed (e.g., database access)
          console.warn("Add to cart not available on server-side");
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },
    async getCartItems() {
      try {
        this.loading = true;

        // Check if client-side (browser) to access localStorage
        if (process.client) {
          var token = localStorage.getItem("token");
          var response = await axiosApi.get("cart", {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (response.status === 200) {
            this.items = response.data.data.data;
            alert("Cart items retrieved successfully");
          }
        } else {
          // Handle server-side logic if needed (e.g., database access)
          console.warn("Get cart items not available on server-side");
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },
  },
});
