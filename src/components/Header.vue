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
    <input
      type="text"
      placeholder="Pesquise aqui o que procura..."
      class="p-2 grow max-w-[650px] border border-zinc-200 rounded-lg"
    />
    <button class="hover:scale-110 hover:cursor-pointer transition-all">
      <ShoppingCart @click="changeCartVisibility" />
    </button>
  </header>
</template>
