<template>
   <v-container>
      <div v-for="p in cartStore.items" :key="p.id">
         <div>
            <div>
            <v-img
            :src="p.image"
            :lazy-src="p.image"
            width="100"
            height="100"
            ></v-img>
         
         </div>
         <div>
       <h5>{{p.product}}</h5>
      <p>({{p.qty}}) x {{p.price}} = {{}}</p>
      </div>
   </div>
   </div>
     
   </v-container>
</template>

<script>
import {useCartStore} from "~/store?cart"
const cartStore = useCartStore();
</script>


<style>
</style>