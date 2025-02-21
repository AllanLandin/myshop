<script lang="ts" setup>
import { provide, ref } from "vue";
import Header from "../Header.vue";

const isCartVisible = ref<boolean>(false);
function changeCartVisibility(): void {
  isCartVisible.value = !isCartVisible.value;
  console.log(isCartVisible);
}

provide("isCartVisible", isCartVisible);
provide("changeCartVisibility", changeCartVisibility);
</script>

<template>
  <div class="container m-auto space-y-1.5 px-2 py-3">
    <Header />
    <router-view></router-view>
  </div>
</template>
