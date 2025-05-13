<template>
  <header
    class="progress fixed w-full top-0 z-20 border-b pt-2 px-2 pb-1 shadow-sm backdrop-blur-sm"
  >
    <div class="container flex">
      <a href="/" class="mr-auto block" title="Stem Pace">
        <h1 class="dec-h1 tracking-wider relative inline-block">
          <span class="siteName relative z-20">{{ BRAND }}</span>
        </h1>
      </a>

      <div class="fixed right-0 top-0 z-50 md:hidden">
        <button
          @click="isOpen = !isOpen"
          class="relative h-8 w-8 focus:outline-none"
        >
          <span class="sr-only">isOpen main menu</span>
          <div
            class="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform"
          >
            <span
              aria-hidden="true"
              class="absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
              :class="{ 'rotate-45': isOpen, ' -translate-y-1.5': !isOpen }"
            ></span>
            <span
              aria-hidden="true"
              class="absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
              :class="{ 'opacity-0': isOpen }"
            ></span>
            <span
              aria-hidden="true"
              class="absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
              :class="{ '-rotate-45': isOpen, ' translate-y-1.5': !isOpen }"
            ></span>
          </div>
        </button>
      </div>

      <nav
        :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
        class="fixed right-0 top-0 z-10 flex w-full max-w-[150px] flex-col content-center gap-3 bg-zinc-200/95 pt-10 transition-all dark:bg-zinc-900/95 md:static md:w-auto md:max-w-full md:translate-x-0 md:flex-row md:bg-transparent md:pt-0 dark:md:bg-transparent"
      >
        <NuxtLink
          @click="isOpen = false"
          class="home-nav-link flex items-center px-3"
          to="/"
        >
          Home
        </NuxtLink>
        <NuxtLink
          @click="isOpen = false"
          to="/intro"
          class="home-nav-link flex items-center px-3"
        >
          Intro
        </NuxtLink>
        <NuxtLink
          @click="isOpen = false"
          class="home-nav-link flex items-center px-3"
          to="/about"
        >
          About
        </NuxtLink>

        <SwitchDarkMode class="home-nav-link px-3"></SwitchDarkMode>
      </nav>
      <Transition>
        <div
          @click="isOpen = false"
          v-if="isOpen"
          class="fixed inset-0 bg-zinc-900/50 backdrop-blur-sm"
        />
      </Transition>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { SwitchDarkMode } from "#components";
const config = useRuntimeConfig();

const BRAND = config.public.BRAND_NAME;

const isOpen = ref(false);
</script>

<style lang="scss" scoped>
.brand {
  @apply tracking-wide first-letter:text-xl first-letter:font-bold first-letter:text-primary-400;
}

.home-nav-link {
  @apply transition-colors md:mx-1 md:py-1;

  &:after {
    @apply mt-2 block border-b border-primary-100 opacity-50 content-[''] dark:border-zinc-500 md:content-none;
  }

  &:not(.router-link-exact-active) {
    &:hover,
    &:focus,
    &:has(:focus) {
      @apply dark:text-primary-100 dark:bg-transparent bg-primary rounded text-white;
    }
  }
  &.router-link-exact-active {
    @apply text-primary-500;
  }
}
</style>

<style lang="scss" scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.progress {
  animation: scaleProgress auto linear;
  animation-timeline: scroll(root);
}
.progress:is([data-mode="dark"] *) {
  animation: scaleProgressDark auto linear;
  animation-timeline: scroll(root);
}

@keyframes scaleProgress {
  0%,
  10% {
    @apply bg-zinc-100/50 border-zinc-400/75;
  }
  20%,
  100% {
    @apply bg-zinc-50 border-zinc-300/100;
  }
}
@keyframes scaleProgressDark {
  0%,
  10% {
    @apply bg-stone-700/50 border-zinc-800/50;
  }
  20%,
  100% {
    @apply bg-stone-900/100 border-zinc-800/100;
  }
}
</style>
