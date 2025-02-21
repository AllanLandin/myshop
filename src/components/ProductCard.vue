<script setup lang="ts">
import { CircleMinus, CirclePlus } from "lucide-vue-next";
import { inject, ref } from "vue";
import type { resultsType } from "../api/get-products";
import { cartListKey } from "../hooks/useCartList";

const { product } = defineProps<{ product: resultsType }>();

const productAmount = ref(0);

const cartList = inject(cartListKey);

function addProductOnCart() {
  const index = cartList?.value.findIndex((item) => item.id === product.id);

  const isProductAlreadyOnCart = index !== -1;

  if (!index || !cartList) {
    return;
  }

  if (isProductAlreadyOnCart) {
    const updatedCart = [...cartList.value];
    updatedCart[index] = {
      ...updatedCart[index],
      productAmount: productAmount.value,
    };
  } else {
    cartList?.value.push({ ...product, productAmount: productAmount.value });
  }
}
</script>

<template>
  <div
    class="border border-zinc-200 p-3 rounded-lg flex flex-col items-center gap-3"
  >
    <img
      :src="product.thumbnail.replace(/\.jpg$/i, 'W.jpg')"
      class="object-cover w-full rounded max-w-72"
    />
    <div class="space-y-1.5">
      <p class="text-xl font-semibold">
        {{
          product.title.length > 30
            ? product.title.slice(0, 30) + " ..."
            : product.title
        }}
      </p>
      <p class="text-center text-3xl text-emerald-400 font-semibold">
        {{
          product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        }}
      </p>
    </div>
    <footer class="flex items-center flex-col mb-7 gap-5">
      <div class="flex gap-2">
        <button
          @click="productAmount > 0 && productAmount--"
          class="hover:cursor-pointer"
        >
          <CircleMinus class="hover:text-red-400 transition" />
        </button>
        <input
          type="number"
          min="0"
          v-model="productAmount"
          class="shrink border border-zinc-200 rounded p-1 text-center"
        />
        <button @click="productAmount++" class="hover:cursor-pointer">
          <CirclePlus class="hover:text-emerald-400 transition" />
        </button>
      </div>

      <button
        class="bg-emerald-400 hover:bg-emerald-500 hover:scale-105 transition cursor-pointer px-4 py-2 rounded"
        @click="addProductOnCart"
      >
        Adicionar ao carrinho
      </button>
    </footer>
  </div>
</template>
