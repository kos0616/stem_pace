<template>
  <div>
    <HomeBanner></HomeBanner>
    <div class="py-20">
      <div class="container">
        <HomeAboutSticker></HomeAboutSticker>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({ title: "" });

import {
  HomeBanner,
  HomeAboutSticker,
  //   HomeBrand,
  //   HomeAdvtange,
  //   HomeUserExperts,
  //   HomePrupose,
  //   ConcatUs,
} from "#components";
</script>
