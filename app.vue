<template>
  <NuxtLayout>
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
