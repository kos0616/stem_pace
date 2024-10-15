<template>
  <NuxtLayout>
    {{ BRAND }}
    {{ clientVersion }}
    <h2 class="p-5 bg-teal-300">header</h2>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import structuredData from "@/assets/LD.json";
import { useHead } from "#imports";
const config = useRuntimeConfig();
const BRAND = config.public.BRAND_NAME;
const clientVersion = config.public.clientVersion;

useHead({
  script: [{ type: "application/ld+json", innerHTML: structuredData }],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${BRAND}` : BRAND;
  },
});
</script>
