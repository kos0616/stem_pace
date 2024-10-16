import pkg from "./package.json";
const date = new Date().toLocaleTimeString();
const BRAND_NAME = "Stem Pace";
const BASE_URL = "/";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
        },
      },
    },
  },
  css: ["@/assets/css/tailwind.scss"],
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      clientVersion: pkg.version,
      // BASE_URL,
      BRAND_NAME,
    },
  },
  app: {
    // baseURL: BASE_URL,
    // buildAssetsDir: 'assets', // 這邊會影響到預設的 assets資料夾
    head: {
      htmlAttrs: {
        lang: "zh-Hant",
        "data-version": pkg.version,
        "data-time": date,
      },
      title: "Stem Pace 配速小抄",
      meta: [
        {
          name: "apple-mobile-web-app-title",
          content: "Stem Pace 配速小抄",
        },
        {
          name: "description",
          content: "製作你的專屬公路車配速小抄。",
        },
        { name: "author", content: "kos0616" },
        { name: "copyright", content: "kos0616" },
        { name: "og:title", content: "Stem Pace 配速小抄" },
        {
          name: "og:description",
          content:
            "線上編輯您的自行車配速表，發揮創意上色與修改。市民車手也能有PRO的筆記。",
        },
        /** 待測試 社群分享的連結如果是FB會怎樣 */
        { name: "og:url", content: "" },
        { name: "og:image", content: BASE_URL + "favicon.svg" },
        // windows home screen app top bar color
        { name: "msapplication-TileColor", content: "#27272a" },
        {
          name: "theme-color",
          media: "(prefers-color-scheme: light)",
          content: "#F4F4F5",
        },
        {
          name: "theme-color",
          media: "(prefers-color-scheme: dark)",
          content: "#27272A",
        },
      ],
      script: [{ src: BASE_URL + "theme.js" }],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: BASE_URL + "apple-touch-icon.png",
        },
        { rel: "apple-touch-startup-image", href: BASE_URL + "favicon.svg" },
        { rel: "icon", href: BASE_URL + "favicon.svg" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "48x48",
          href: BASE_URL + "favicon-48x48.png",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: BASE_URL + "favicon.svg",
        },
        {
          rel: "shortcut",
          href: BASE_URL + "favicon.ico",
        },
        { rel: "manifest", href: BASE_URL + "manifest.webmanifest" },
      ],
    },
  },
});
