<template>
  <div class="dark:bg-zinc-800">
    <DownloadTutorial
      @upload="handleUploaded"
      class="container py-20 print:hidden"
    ></DownloadTutorial>
    <DownloadPreview v-if="isUpload" :modelValue="STEPS"></DownloadPreview>
    <div v-else class="container text-gray-800 border-gray-800 pb-10">
      <div
        @click="onUploadClicked"
        role="button"
        class="hover:border-primary w-full bg-white rounded-xl border-4 border-dashed aspect-video flex items-center justify-center"
      >
        <strong class="text-5xl">匯入/預覽</strong>
      </div>
    </div>
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

/** 觸發上傳表單 */
const onUploadClicked = () => {
  const input = document.getElementById("uploader");
  if (input) input.click();
};
</script>
