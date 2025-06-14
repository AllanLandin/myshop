<script lang="ts" setup>
import { ShoppingCart } from "lucide-vue-next";
import { inject } from "vue";
const changeCartVisibility = inject<() => void>("changeCartVisibility");
</script>

<template>
  <header class="flex justify-between gap-3">
    <router-link
      to="/"
      class="transition font-display font-semibold text-2xl hover:scale-105"
      >MyShop</router-link
    >

    <button class="hover:scale-110 hover:cursor-pointer transition-all">
      <ShoppingCart @click="changeCartVisibility" />
    </button>
  </header>
</template>
