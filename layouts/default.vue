<template>
  <div class="flex min-h-[100dvh] flex-col">
    <BrandHeader class="print:hidden"></BrandHeader>

    <main class="grow">
      <slot></slot>
    </main>

    <footer class="bg-slate-200 py-10 text-center dark:bg-zinc-800 grid print:hidden">
      Copyright © 2024 {{ BRAND }}. All rights reserved.
      <small>{{ clientVersion }}</small>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { BrandHeader } from "#components";
const config = useRuntimeConfig();

const BRAND = config.public.BRAND_NAME;
const clientVersion = config.public.clientVersion;
</script>
