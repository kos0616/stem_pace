<template>
  <header
    class="sticky top-0 z-20 border-b border-zinc-300 bg-zinc-100 pt-2 px-2 pb-1 shadow-sm dark:border-zinc-600 dark:bg-zinc-800"
  >
    <div class="container flex">
      <a href="/" class="mr-auto block">
        <strong class="flex gap-2">
          <img
            src="@/public/favicon.svg"
            alt="LOGO"
            height="25px"
            class="inline-block h-6"
          />
          <span class="text-lg">{{ BRAND }}</span>
        </strong>
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
        class="fixed bottom-0 right-0 top-0 z-10 flex w-full max-w-[150px] flex-col content-center gap-3 bg-zinc-200/95 pt-10 transition-all dark:bg-zinc-900/95 md:static md:w-auto md:max-w-full md:translate-x-0 md:flex-row md:bg-transparent md:pt-0 dark:md:bg-transparent"
      >
        <NuxtLink @click="isOpen = false" class="home-nav-link px-3" to="/">
          Home
        </NuxtLink>
        <NuxtLink
          @click="isOpen = false"
          class="home-nav-link px-3"
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
  @apply transition-colors md:mx-1 md:p-1;

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
</style>
