<template>
  <NuxtLayout>
    {{ BRAND }}
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import structuredData from "@/assets/LD.json";
import { useHead } from "#imports";
const config = useRuntimeConfig();
const BRAND = config.public.BRAND_NAME;

useHead({
  script: [{ type: "application/ld+json", innerHTML: structuredData }],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${BRAND}` : BRAND;
  },
});
</script>
