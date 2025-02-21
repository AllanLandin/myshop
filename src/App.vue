<script setup lang="ts">
import { register } from "swiper/element/bundle";
import { Toaster } from "vue-sonner";
register();
</script>

<template>
  <Toaster />
  <router-view></router-view>
</template>
