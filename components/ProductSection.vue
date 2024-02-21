<template>
   <div>
      
      <v-container>
         <v-row>   
            <v-col v-for="product in productStore.products" :key="product">
               <product-card  :product="product" />
   
            </v-col>
         </v-row>
      </v-container>
   </div>
</template>

<script setup>
import { useProductStore } from "~/store/product";
const  productStore = useProductStore();
await productStore.getProducts();
</script>

<style lang="scss" scoped>

</style>