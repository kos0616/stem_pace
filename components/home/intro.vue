<template>
  <div class="dark:bg-zinc-800 py-20 bg-zinc-100">
    <article class="container lg:flex gap-x-10 items-start justify-between">
      <div class="sm:w-2/3 lg:w-full px-3 xl:px-0 py-5 lg:py-0">
        <h2 class="text-2xl title">
          <i class="icon-edit text-orange-500" aria-hidden="true" />
          自由編輯，隨興發揮
        </h2>
        <div class="mb-5">
          <h3 class="text-xl mb-1">
            <i class="icon-table" aria-hidden="true" />
            表格文字
          </h3>
          <p class="pl-7">
            您可以將小七改為7-11、標記休息點、或是移除單位以節省空間。
          </p>
        </div>
        <div class="mb-5">
          <h3 class="text-xl mb-1">
            <i
              class="w-5 h-5 inline-block border rounded border-gray-400 border-dashed align-sub"
            />
            表頭表尾備註
          </h3>
          <p class="pl-7">
            緊急聯絡人？「莫忘初衷」？ 只要龍頭/上管塞得下就沒問題！
          </p>
        </div>

        <div class="mb-5">
          <h3 class="text-xl mb-1">
            <i class="icon-image text-gray-500" aria-hidden="true" />
            圖片裝飾
          </h3>
          <p class="pl-7">
            小孩照片還是另一半的照片？ 別擔心，可以放2張照片。
            <small class="block text-gray-400">
              *本工具沒有上傳功能，不會記錄任何圖片
            </small>
          </p>
        </div>
      </div>

      <figure class="w-full hidden lg:block">
        <img
          src="@/assets/img/sample2.webp"
          width="492"
          height="328"
          loading="lazy"
          alt="貼在龍頭的小抄"
        />
      </figure>
    </article>
    <div class="text-center py-10">
      <NuxtLink
        title="開始製作屬於你的配速小抄"
        to="/"
        class="font-bold text-2xl bg-primary text-gray-700 px-5 py-3 rounded-lg hover:bg-primary-300 transition-colors hover:text-gray-900"
        style="
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5),
            -1px -1px 4px -1px rgba(200, 200, 200, 0.7);
        "
      >
        START
      </NuxtLink>
    </div>
  </div>
</template>
