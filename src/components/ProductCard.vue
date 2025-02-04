<script setup lang="ts">
import { CircleMinus, CirclePlus } from "lucide-vue-next";
import { ref } from "vue";

const productAmount = ref(5);
</script>

<template>
  <div class="bg-blue-300 p-3 rounded-lg flex flex-col items-center gap-3">
    <img src="/assets/computer.jpg" class="object-cover rounded max-w-72" />
    <div class="space-y-1.5">
      <p class="text-xl font-semibold">Notebook ASUS 5.000</p>
      <p>
        O computador notebook ASUS tem uma super capacidade de armazenamento e
        processamento
      </p>
    </div>
    <footer class="flex items-center flex-col mb-7 gap-5">
      <div class="flex gap-2">
        <button @click="productAmount--" class="hover:cursor-pointer">
          <CircleMinus class="hover:text-zinc-100 transition" />
        </button>
        <input
          type="number"
          v-model="productAmount"
          class="shrink border border-zinc-200 rounded p-1 text-center"
        />
        <button @click="productAmount++" class="hover:cursor-pointer">
          <CirclePlus class="hover:text-zinc-100 transition" />
        </button>
      </div>
      <button
        class="bg-amber-300 hover:bg-amber-400 transition cursor-pointer px-2 py-1 rounded"
      >
        Comprar
      </button>
    </footer>
  </div>
</template>
