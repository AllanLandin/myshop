<script setup lang="ts">
import { register } from "swiper/element/bundle";
register();
import { ref, provide } from "vue";

const cartList = ref([{}]);
provide("cartList", cartList);
</script>

<template>
  <router-view></router-view>
</template>
