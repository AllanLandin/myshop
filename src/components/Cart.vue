<script lang="ts" setup>
import { inject } from "vue";
import { X } from "lucide-vue-next";

const isCartVisible = inject<boolean>("isCartVisible");
const changeCartVisibility = inject<() => void>("changeCartVisibility");
</script>
<template>
  <div
    v-if="isCartVisible"
    class="h-screen w-screen md:w-1/2 z-50 rounded-l-lg p-5 bg-emerald-300 top-0 fixed right-0 transition"
  >
    <div class="flex justify-between">
      <span class="font-display text-2xl font-semibold">Carrinho</span>
      <button
        @click="changeCartVisibility"
        class="cursor-pointer hover:scale-110"
      >
        <X />
      </button>
    </div>
  </div>
</template>
