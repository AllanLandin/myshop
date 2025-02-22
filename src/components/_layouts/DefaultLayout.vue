<script lang="ts" setup>
import { provide, ref } from "vue";
import Header from "../Header.vue";
import { cartListKey, useCartList } from "../../hooks/useCartList";
import Cart from "../Cart.vue";

const isCartVisible = ref<boolean>(false);
function changeCartVisibility(): void {
  isCartVisible.value = !isCartVisible.value;
}

provide("isCartVisible", isCartVisible);
provide("changeCartVisibility", changeCartVisibility);
const cartList = useCartList();
provide(cartListKey, cartList);
</script>

<template>
  <div class="container m-auto space-y-5 px-2 py-3">
    <Header />
    <Cart />
    <router-view></router-view>
  </div>
</template>
