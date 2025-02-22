<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { getProducts, type resultsType } from "../api/get-products";
import ProductCard from "../components/ProductCard.vue";

const route = useRoute();

const productsList = ref<resultsType[]>([]);

watchEffect(async () => {
  const queryValue = String(route.query.q) || "";
  productsList.value = await getProducts({ query: queryValue, limit: 30 });
});
</script>
<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
  >
    <ProductCard v-for="product in productsList" :product="product" />
  </div>
</template>
