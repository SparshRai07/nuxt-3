import { defineStore } from "pinia";
import axiosApi from "~/config/axios";
export const useProductStore = defineStore("product", {
   state: () => ({
      products: null,
      loading: false,
   }),

   actions: {
      async getProducts() {
         try {
            this.loading = true;
            var response = await axiosApi.get("products");
            
            if (response.status == 200) {
               this.products = response.data.data;
            }
         } catch (e) {
            console.warn(e);
         } finally {
            this.loading = false;
         }
      },
   },
});
