<script lang="ts" setup>
import { computed, inject } from "vue";
import { ShoppingBasket, X } from "lucide-vue-next";
import { cartListKey } from "../hooks/useCartList";
import CartItem from "./CartItem.vue";

const isCartVisible = inject<boolean>("isCartVisible");
const changeCartVisibility = inject<() => void>("changeCartVisibility");
const cartList = inject(cartListKey);
const totalCart = computed(() => {
  const totalPrice = cartList?.value.reduce(
    (acc, curr) => acc + curr.productAmount * curr.price,
    0
  );
  return totalPrice?.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
});
</script>
<template>
  <div
    v-if="isCartVisible"
    class="h-screen w-screen md:w-1/2 z-50 space-y-1 rounded-l-lg p-5 bg-emerald-400 top-0 fixed right-0 transition flex flex-col"
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
    <ul
      v-if="cartList?.length"
      class="flex flex-col gap-3 py-3 w-full overflow-y-auto p-2 h-full scrollbar-none"
    >
      <CartItem v-for="product in cartList" :product="product" />
    </ul>
    <div v-else class="h-full flex items-center justify-center">
      <div class="flex flex-col gap-2 items-center font-display font-bold">
        <span class="text-2xl">O seu carrinho está vazio!</span>
        <ShoppingBasket :size="70" />
      </div>
    </div>
    <div class="py-3 flex justify-between items-center">
      <div>
        <span class="font-semibold text-xl">Total do carrinho: </span>
        <span class="font-semibold text-xl">{{ totalCart }}</span>
      </div>
      <button
        class="p-2 bg-emerald-100 rounded font-semibold cursor-pointer hover:scale-105 transition-all"
      >
        Finalizar compra
      </button>
    </div>
  </div>
</template>
