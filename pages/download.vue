<template>
  <div class="py-20 bg-zinc-800">
    <DownloadTutorial
      @upload="handleUploaded"
      class="container"
    ></DownloadTutorial>
    <DownloadPreview :modelValue="STEPS"></DownloadPreview>
  </div>
</template>

<script lang="ts" setup>
import { DownloadPreview, DownloadTutorial } from "#components";

/** 區段 */
const STEPS = ref<STEP[]>([]);

/** 讀取 .csv 檔案 並放在 STEPS */
const handleUploaded = (arr: STEP[]) => {
  STEPS.value = arr;
};

const isUpload = computed(
  () => Array.isArray(STEPS.value) && STEPS.value.length > 0
);
</script>
