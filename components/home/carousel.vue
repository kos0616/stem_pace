<template>
  <swiper
    :slides-per-view="perView"
    :space-between="16"
    :auto-height="false"
    :loop="true"
    :lazy="true"
    :navigation="true"
    :autoplay="{ delay: 5000, disableOnInteraction: true }"
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
  >
    <swiper-slide v-for="(slide, i) in links" :key="`slide${i}`">
      <a :href="slide.to" target="_blank" class="block">
        <img
          :src="slide.href"
          :alt="`使用者應用 ${i}`"
          height="300"
          width="300"
          class="object-cover aspect-square mx-auto rounded-lg"
        />
      </a>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts" setup>
const perView = ref(3);
const initPerView = () => {
  if (window.screen.width < 768) perView.value = 2;
};

onMounted(() => {
  initPerView();
});

// const width = process.client ? window.screen.width : 1980;

const links = [
  {
    to: "https://www.facebook.com/photo/?fbid=1005120464946567&set=pcb.1005136011611679",
    href: (
      await import(
        "@/assets/img/users/449053065_1005120461613234_4817462339277416412_n.webp"
      )
    ).default,
  },
  {
    to: "https://www.facebook.com/photo/?fbid=8518929971455115&set=pcb.8518930444788401",
    href: (
      await import(
        "@/assets/img/users/449285941_8518932038121575_1687008058086551294_n.webp"
      )
    ).default,
  },
  {
    to: "https://www.threads.net/@anderson_060911/post/C_imlWry-4c",
    href: (
      await import(
        "@/assets/img/users/458398396_1590114911858077_1328859872875243159_n.webp"
      )
    ).default,
  },
  {
    to: "https://www.facebook.com/photo/?fbid=10233257869016892&set=pcb.10233257870496929",
    href: (
      await import(
        "@/assets/img/users/458930642_10233257875097044_2433736531637202482_n.webp"
      )
    ).default,
  },
  {
    to: "https://www.facebook.com/photo/?fbid=8615036668507440&set=pcb.3803780763174877",
    href: (
      await import(
        "@/assets/img/users/459003845_8615036678507439_7360217428262939924_n.webp"
      )
    ).default,
  },
  {
    to: "https://www.facebook.com/photo/?fbid=8959203007439399&set=pcb.8959203187439381",
    href: (
      await import(
        "@/assets/img/users/459081929_18451185322000313_4528637897259027094_n.webp"
      )
    ).default,
  },
];
</script>
