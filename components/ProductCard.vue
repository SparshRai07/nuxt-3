<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12 rounded-lg shadow-lg"
    max-width="374"
    color="#FAFAFA"
  >
    <!-- Check if product is defined before rendering -->
    <template v-if="product">
      <!-- Your input fields here -->
      <v-img
        height="250"
        :src="product.image"
        :lazy-src="product.image"
      ></v-img>

      <v-card-item>
        <v-card-title>{{ product.name }}</v-card-title>

        <v-card-subtitle>
          <span class="me-1">Local Favorite</span>

          <v-icon
            color="error"
            icon="mdi-fire-circle"
            size="small"
          ></v-icon>
        </v-card-subtitle>
      </v-card-item>

      <!-- Rest of your card content -->

      <v-card-actions>
        <v-btn
          dark
          variant="text"
          @mouseenter="buttonHovered = true"
          @mouseleave="buttonHovered = false"
          :style="{ color: buttonHovered ? '#FFFFFF' : 'white', backgroundColor: buttonHovered ? '#ff5252' : 'red' }"
          @click="addToCart"
          class="rounded-lg"
        >
          ADD TO CART
        </v-btn>
      </v-card-actions>
    </template>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { userCartStore } from "~/store/cart";

const { addToCart, getCartItems } = userCartStore();
const loading = ref(false);
const buttonHovered = ref(false);
const product = ref(null); // Initialize product as a ref

// Fetch product data from API when the component is mounted
onMounted(async () => {
  try {
    loading.value = true;
    const productData = await fetchProductData(); // Replace with actual method
    loading.value = false;
    product.value = productData; // Set product data
  } catch (error) {
    console.error('Error fetching product data:', error);
    loading.value = false;
  }
});
</script>

<style scoped>
/* Add styles as needed */
</style>
