<script setup lang="ts">
import ProductCard from "../components/ProductCard.vue";
</script>

<template>
  <main class="flex flex-col gap-5">
    <section class="space-y-2">
      <h2 class="font-display text-xl font-semibold">Computadores</h2>
      <swiper-container
        :loop="true"
        :pagination="true"
        :space-between="30"
        :breakpoints="{
          0: {
            slidesPerView: 1,
          },
          800: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }"
      >
        <swiper-slide><ProductCard /></swiper-slide>
        <swiper-slide><ProductCard /></swiper-slide>
        <swiper-slide><ProductCard /></swiper-slide>
        <swiper-slide><ProductCard /></swiper-slide>
        <swiper-slide><ProductCard /></swiper-slide>
      </swiper-container>
    </section>
    <section class="space-y-2">
      <h2 class="font-display text-xl font-semibold">Computadores</h2>
      <swiper-container
        :loop="true"
        :pagination="true"
        :space-between="30"
        :breakpoints="{
          0: {
            slidesPerView: 1,
          },
          800: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }"
      >
        <swiper-slide><ProductCard /></swiper-slide>
        <swiper-slide><ProductCard /></swiper-slide>
        <swiper-slide><ProductCard /></swiper-slide>
        <swiper-slide><ProductCard /></swiper-slide>
        <swiper-slide><ProductCard /></swiper-slide>
      </swiper-container>
    </section>
    <section class="space-y-2">
      <h2 class="font-display text-xl font-semibold">Computadores</h2>
      <swiper-container
        :loop="true"
        :pagination="true"
        :space-between="30"
        :breakpoints="{
          0: {
            slidesPerView: 1,
          },
          800: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }"
      >
        <swiper-slide><ProductCard /></swiper-slide>
        <swiper-slide><ProductCard /></swiper-slide>
        <swiper-slide><ProductCard /></swiper-slide>
        <swiper-slide><ProductCard /></swiper-slide>
        <swiper-slide><ProductCard /></swiper-slide>
      </swiper-container>
    </section>
  </main>
</template>
