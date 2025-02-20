<script lang="ts" setup>
import ProductsSession from "../components/ProductsSession.vue";
import { provide } from "vue";
import { useCartList, cartListKey } from "../hooks/useCartList";

const cartList = useCartList();
provide(cartListKey, cartList);
</script>

<template>
  <main class="flex flex-col gap-5">
    <ProductsSession title="Computadores" />
    <ProductsSession title="Televisão" />
    <ProductsSession title="Geladeira" />
  </main>
</template>
