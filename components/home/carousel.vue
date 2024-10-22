<template>
  <swiper
    :slides-per-view="perView"
    :space-between="20"
    :auto-height="false"
    :loop="true"
    :lazy="true"
    :navigation="true"
    :autoplay="{ delay: 5000, disableOnInteraction: false }"
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
  >
    <swiper-slide v-for="(slide, i) in links" :key="`slide${i}`">
      <NuxtLink :to="slide.to" class="block">
        <img
          :src="slide.href"
          :alt="slide.title"
          height="300"
          width="300"
          class="object-cover aspect-square"
        />
      </NuxtLink>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts" setup>
const perView = ref(4);
const initPerView = () => {
  if (window.screen.width < 1400) perView.value = 3;
};

onMounted(() => {
  initPerView();
});

// const width = process.client ? window.screen.width : 1980;

const links = [
  {
    to: "/projects/1",
    href: (await import("@/assets/img/author.jpeg")).default,
    title: "Project 1",
  },
  {
    to: "/projects/2",
    href: (await import("@/assets/img/banner.webp")).default,
    title: "Project 2",
  },
  {
    to: "/projects/3",
    href: (await import("@/assets/img/ctYeh.jpg")).default,
    title: "Project 3",
  },
];
</script>
