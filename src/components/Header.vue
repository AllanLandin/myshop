<script lang="ts" setup>
import { Search, ShoppingCart } from "lucide-vue-next";
import { inject, ref } from "vue";
import { useRouter } from "vue-router";
import { toast } from "vue-sonner";
const changeCartVisibility = inject<() => void>("changeCartVisibility");

const searchQuery = ref("");
const router = useRouter();

function handleSearch() {
  if (!searchQuery.value) {
    toast.error("Digite algo para pesquisar!");
    return;
  }

  router.push({
    path: "/searchProduct",
    query: { q: searchQuery.value },
  });
}
</script>

<template>
  <header class="flex justify-between gap-3">
    <router-link
      to="/"
      class="transition font-display font-semibold text-2xl hover:scale-105"
      >MyShop</router-link
    >
    <div
      class="border border-zinc-200 rounded-lg p-2 grow max-w-[650px] flex gap-3"
    >
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Pesquise aqui o que procura..."
        class="grow"
      />
      <button
        @click="handleSearch"
        class="cursor-pointer hover:text-emerald-300 transition"
      >
        <Search :size="24" />
      </button>
    </div>
    <button class="hover:scale-110 hover:cursor-pointer transition-all">
      <ShoppingCart @click="changeCartVisibility" />
    </button>
  </header>
</template>
