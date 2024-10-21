<template>
  <article class="container py-5 pb-20 grid gap-5">
    <h1 class="mb-10 border-b pb-3">關於</h1>
    <div class="grid gap-4">
      <div id="feat" class="pb-10">
        <h2>更新小記</h2>
        <p>
          在
          1.0版本上線一段日子後，原以為已過氣的小抄產生器，仍有車友願意賞光，令我感動不已。
        </p>
        <p>這次的改版中，除了將原有功能移植，也試圖加入一些強化功能。</p>
        <p>
          最重要的更新，莫過於把廢話獨立在這頁。
          讓急用！箭在弦上的車友們能更快拿到想要的小抄
        </p>
      </div>

      <div class="grid gap-20">
        <lite-youtube
          videoid="PRmUBohZG9c"
          :style="{
            'background-image': `url(${youtubeImg})`,
          }"
          class="w-full h-auto aspect-video mb-3"
        ></lite-youtube>

        <div class="md:flex gap-4">
          <div class="flex gap-2 shrink-0">
            <img
              src="@/assets/img/ctYeh.jpg"
              alt="CT Yeh"
              class="w-20 h-20 rounded-full border-2"
            />
            <nav>
              <ul class="grid gap-1">
                <li>
                  <a
                    href="https://ctyeh.com"
                    target="_blank"
                    title="個人官網"
                    class="dark:hover:text-primary dark:hover:bg-transparent hover:bg-primary transition-colors duration-300 p-1 px-2 rounded"
                  >
                    <svg
                      class="inline-block fill-current"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
                      />
                    </svg>
                    個人官網
                  </a>
                </li>
                <li>
                  <a
                    href="http://instagram.com/ctyehbike"
                    target="_blank"
                    title="instagram"
                    class="dark:hover:text-primary dark:hover:bg-transparent hover:bg-primary transition-colors duration-300 p-1 px-2 rounded"
                  >
                    <svg
                      class="inline-block fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"
                      />
                    </svg>
                    instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/CTMEDIATW"
                    target="_blank"
                    title="facebook"
                    class="dark:hover:text-primary dark:hover:bg-transparent hover:bg-primary transition-colors duration-300 p-1 px-2 rounded"
                  >
                    <svg
                      class="inline-block fill-current"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                      />
                    </svg>
                    facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/c/CTYeh"
                    target="_blank"
                    title="前往 CT Yeh 的頻道"
                    ><img
                      src="https://img.shields.io/youtube/channel/subscribers/UC5AIxJqajtl41ZxCbiuoagA?label=%E8%A8%82%E9%96%B1%E6%88%90%E9%95%B7%E4%B8%AD"
                      alt="CT Yeh 頻道的訂閱人數"
                      class="max-w-full h-auto inline-block"
                      width="116"
                      height="20"
                      loading="lazy"
                  /></a>
                </li>
              </ul>
            </nav>
          </div>
          <blockquote
            cite="https://www.youtube.com/c/CTYeh/about"
            class="border border-stone-300 border-dashed py-2 px-3 rounded-md relative"
          >
            <i
              class="icon-scissors absolute right-0 top-2/3 translate-x-1/2 rotate-90"
            ></i>
            " 以自行車冒險、路線分析攻略、空拍、比賽實況、訓練台、3C
            等運動科技相關議題為主，歡迎訂閱鎖定 "
            <div class="text-right pt-3">- AI 配速產生器作者 CT Yeh</div>
          </blockquote>
        </div>

        <div class="md:flex gap-4">
          <blockquote
            cite="https://github.com/kos0616/stem_pace"
            class="border border-stone-300 border-dashed py-2 px-3 rounded-md relative"
          >
            <i
              class="icon-scissors absolute left-0 top-2/3 -translate-x-1/2 -rotate-90"
            ></i>
            " 此站是在看了 CT Yeh 的 AI
            配速產生器特輯後，受到啟發而製作的，希望這個配速小抄產生器能幫助到車友。"
            <footer class="text-end">- 小抄美化作者 Mark Liang</footer>
          </blockquote>

          <div class="flex gap-2 shrink-0">
            <img
              src="@/assets/img/author.jpeg"
              alt="作者頭像"
              class="w-20 h-20 rounded-full border-2"
            />
            <nav>
              <ul class="grid gap-1">
                <li>
                  <a
                    href="http://instagram.com/javert0616"
                    target="_blank"
                    title="instagram"
                    class="dark:hover:text-primary dark:hover:bg-transparent hover:bg-primary transition-colors duration-300 p-1 px-2 rounded"
                  >
                    <svg
                      class="inline-block fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"
                      />
                    </svg>
                    instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.strava.com/athletes/24027552"
                    target="_blank"
                    title="strava"
                    class="dark:hover:text-primary dark:hover:bg-transparent hover:bg-primary transition-colors duration-300 p-1 px-2 rounded"
                  >
                    <svg
                      class="inline-block fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 384 512"
                    >
                      <path
                        d="M158.4 0L7 292h89.2l62.2-116.1L220.1 292h88.5zm150.2 292l-43.9 88.2-44.6-88.2h-67.6l112.2 220 111.5-220z"
                      />
                    </svg>
                    strava
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/kos0616/stem_pace"
                    target="_blank"
                    title="github"
                    class="dark:hover:text-primary dark:hover:bg-transparent hover:bg-primary transition-colors duration-300 p-1 px-2 rounded"
                  >
                    <svg
                      class="inline-block fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                      height="1em"
                    >
                      <path
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      />
                    </svg>
                    github
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import youtubeImg from "@/assets/img/hqdefault.webp";
useSeoMeta({ title: "關於" });

useHead({
  link: [
    {
      rel: "preload",
      href: "/js/lite-youtube-embed/src/lite-yt-embed.css",
      as: "style",
      onload: "this.onload=null;this.rel='stylesheet'",
    },
  ],
  script: [{ src: "/js/lite-youtube-embed/src/lite-yt-embed.js" }],
});
</script>
