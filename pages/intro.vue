<template>
  <div>
    <HomeBanner></HomeBanner>
    <HomeAboutSticker></HomeAboutSticker>
    <HomeIntro></HomeIntro>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({ title: "簡介" });

import {
  HomeBanner,
  HomeAboutSticker,
  HomeIntro,
  //   HomeBrand,
  //   HomeAdvtange,
  //   HomeUserExperts,
  //   HomePrupose,
  //   ConcatUs,
} from "#components";
</script>
