<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { getProducts, type resultsType } from "../api/get-products";
import ProductCard from "../components/ProductCard.vue";
import { LoaderCircle } from "lucide-vue-next";

const route = useRoute();
const loading = ref(true);

const productsList = ref<resultsType[]>([]);

watchEffect(async () => {
  loading.value = true;
  const queryValue = String(route.query.q) || "";
  productsList.value = await getProducts({ query: queryValue, limit: 30 });
  loading.value = false;
});
</script>
<template>
  <div
    v-if="!loading"
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
  >
    <ProductCard v-for="product in productsList" :product="product" />
  </div>
  <div v-else class="flex flex-col gap-3">
    <div
      class="w-full h-[530px] bg-zinc-200 animate-pulse rounded-lg flex items-center justify-center"
    >
      <LoaderCircle class="animate-spin" />
    </div>
    <div
      class="w-full h-[530px] bg-zinc-200 animate-pulse rounded-lg flex items-center justify-center"
    >
      <LoaderCircle class="animate-spin" />
    </div>
    <div
      class="w-full h-[530px] bg-zinc-200 animate-pulse rounded-lg flex items-center justify-center"
    >
      <LoaderCircle class="animate-spin" />
    </div>
  </div>
</template>
