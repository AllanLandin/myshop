<script lang="ts" setup>
import { computed } from "vue";
import type { cartListItemType } from "../hooks/useCartList";

const { product } = defineProps<{ product: cartListItemType }>();
const totalPerItem = computed(() => {
  return (product.price * product.productAmount).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
});
</script>
<template>
  <div class="flex gap-3 rounded bg-zinc-50 p-4">
    <img :src="product.thumbnail.replace(/\.jpg$/i, 'W.jpg')" class="w-1/4" />
    <div>
      <p class="text-2xl font-semibold font-sans">{{ product.title }}</p>
      <div class="flex flex-col space-y-0.5">
        <div class="space-x-1.5">
          <span>Quantidade:</span>
          <input
            min="1"
            type="number"
            v-model="product.productAmount"
            class="border border-zinc-300 rounded p-1"
          />
        </div>

        <div>
          <span>Valor unitário:</span>
          {{
            product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          }}
        </div>
        <span>Total: {{ totalPerItem }}</span>
        <button
          class="text-red-500 hover:text-red-600 cursor-pointer self-start mt-2"
        >
          Excluir do carrinho
        </button>
      </div>
    </div>
  </div>
</template>
