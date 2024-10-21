<template>
  <div class="flex min-h-[100dvh] flex-col">
    <BrandHeader></BrandHeader>

    <main class="grow">
      <slot></slot>
    </main>

    <div class="border-b border-zinc-600 bg-slate-200 dark:bg-zinc-800 py-5">
      <FooterLinks></FooterLinks>
    </div>
    <footer class="bg-slate-200 py-10 text-center dark:bg-zinc-800 grid">
      Copyright © 2024 {{ BRAND }}. All rights reserved.
      <small>{{ clientVersion }}</small>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { BrandHeader, FooterLinks } from "#components";
const config = useRuntimeConfig();

const BRAND = config.public.BRAND_NAME;
const clientVersion = config.public.clientVersion;
</script>
