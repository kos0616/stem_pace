<template>
  <header class="header-banner relative">
    <a
      href="https://cyclingtips.com/2017/04/tour-flanders-tech-boonens-custom-rim-brake-roubaix-cobble-smoothing-comfort/"
      title="cyclingtips"
      class="absolute right-5 bottom-2 z-20"
      target="_blank"
    >
      <small class="text-gray-300">圖片來源</small>
    </a>
    <div
      class="text-gray-600 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-center"
    >
      <div class="bg-slate-100 mt-5">
        <p
          class="sm:text-lg p-3 border-b border-gray-400 border-dashed relative"
        >
          印出你的配速小抄
          <i
            class="icon-scissors absolute left-0 bottom-0 translate-x-3 translate-y-1/2"
          />
        </p>
        <NuxtLink
          title="開始製作屬於你的配速小抄"
          to="/"
          class="group block p-3 hover:bg-gray-300/90 transition-colors"
        >
          馬上開始！
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-banner {
  aspect-ratio: 1.5 / 1;

  @media screen and (min-width: 640px) {
    aspect-ratio: 2 / 1;
  }
  @media screen and (min-width: 992px) {
    aspect-ratio: 3 / 1;
  }
  @media screen and (min-width: 1400px) {
    aspect-ratio: 4 / 1;
  }
}
</style>

<style lang="postcss" scoped>
.header-banner::before {
  content: "";
  background-image: url(@/assets/img/banner.webp);
  filter: grayscale(0.5);
  @apply bg-no-repeat bg-center bg-cover absolute left-0 top-0 right-0 bottom-0;
}
</style>
