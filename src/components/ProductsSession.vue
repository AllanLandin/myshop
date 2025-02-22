<script lang="ts" setup>
import { useQuery } from "@tanstack/vue-query";
import ProductCard from "../components/ProductCard.vue";
import { getProducts, type resultsType } from "../api/get-products";
const { title } = defineProps<{ title: string }>();

const { data: productsList } = useQuery<resultsType[]>({
  queryKey: ["session-products", title],
  queryFn: () => getProducts({ query: title, limit: 10 }),
});
</script>
<template>
  <section class="space-y-2">
    <h2 class="font-display text-xl font-semibold">{{ title }}</h2>
    <swiper-container
      :loop="false"
      :pagination="true"
      :space-between="30"
      :breakpoints="{
        0: {
          slidesPerView: 1,
        },
        800: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }"
    >
      <swiper-slide v-for="product in productsList">
        <ProductCard :product="product" />
      </swiper-slide>
    </swiper-container>
  </section>
</template>
