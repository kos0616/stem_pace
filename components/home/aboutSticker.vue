<template>
  <article class="pb-16 dark:bg-zinc-800 bg-zinc-100">
    <div class="container py-20">
      <h2 class="mb-6 text-primary text-3xl">什麼小抄？</h2>
      <div
        class="md:grid grid-cols-2 gap-x-16 gap-y-5 text-xl text-gray-400"
        style="grid-template-areas: 'intro01 intro03' 'intro02 intro04'"
      >
        <p style="grid-area: intro01">
          隨著騎乘經驗的累積、腿力逐漸變強，你可能開始有個<span
            class="dark:text-gray-100 text-primary"
            >「小」野心</span
          >...或者說，立下了一張軍令狀？
        </p>
        <p style="grid-area: intro02">
          透過不斷的訓練，一步步逼近目標，等到挑戰當天全力衝刺，終於在終點享受那份征服的快感，這就是你熱愛的騎行人生。
        </p>
        <p style="grid-area: intro03">
          但別忘了，通往山巔的路可不是一馬平川！平路的速度可應付不了那些陡坡與起伏，只靠簡單的
          (目標時間/距離) 計算是不夠的。
        </p>
        <p style="grid-area: intro04">
          這時候，配速表就是你的「軍師」，它告訴你何時該加速，何時該穩住。
          它不僅能幫你穩步達成目標，還能讓補給車上的夥伴、守在終點的朋友<span
            class="text-gray-100"
            >掌握你的進度。
          </span>
        </p>
      </div>
    </div>
  </article>
  <article>
    <div id="usuage" class="container py-20">
      <h2 class="mb-6 text-primary text-3xl">小抄怎麼用？</h2>
      <div class="text-xl text-gray-400">
        <p>
          只要列印下來，以護貝機或者透明膠帶做一層簡易的防水，接著貼在龍頭或者上管處即可。
        </p>
      </div>
      <p class="text-gray-400">實際的使用者安裝範例</p>
      <HomeCarousel></HomeCarousel>

      <div class="mx-auto max-w-xl flex items-center justify-between mt-16">
        <div class="text-2xl">
          <p>
            <i class="fas fa-triangle-exclamation fa-fw"></i> 錯誤的使用者案例
          </p>
          <small class="text-gray-400">天啊，千萬別這樣做！</small>
          <div class="text-center mt-5">
            <i
              class="fa-solid fa-arrow-right fa-fw fa-3x hover:animate-bounce"
            ></i>
          </div>
        </div>
        <a :href="errorImg" title="觀賞這藝術般的創作" target="_blank">
          <img
            :src="errorImg"
            alt="將配速表貼在下管的自行車"
            class="rounded-lg"
            height="300"
            width="300"
          />
        </a>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import errorImg from "@/assets/img/IMG_6353.webp";
import { HomeCarousel } from "#components";
</script>
