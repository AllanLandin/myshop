<script setup lang="ts">
import { register } from "swiper/element/bundle";
import { Toaster } from "vue-sonner";
register();
</script>

<template>
  <Toaster position="bottom-left" />
  <router-view></router-view>
</template>
