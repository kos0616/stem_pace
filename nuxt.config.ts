import pkg from "./package.json";
const date = new Date().toLocaleTimeString();
const BRAND_NAME = "Stem Pace";
const BASE_URL = "/";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
      title: "Stem Pace",
      meta: [
        {
          name: "description",
          content: "Print your own stem memo",
        },
        { name: "author", content: "kos0616" },
        { name: "copyright", content: "Budomistrz" },
        { name: "og:title", content: "Budomistrz" },
        {
          name: "og:description",
          content: "Print your own stem memo",
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
          sizes: "32x32",
          href: BASE_URL + "favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: BASE_URL + "favicon-16x16.png",
        },
        // mac OS safari tab icon color
        {
          rel: "mask-icon",
          href: BASE_URL + "safari-pinned-tab.svg",
          color: "#795548",
        },
        { rel: "manifest", href: BASE_URL + "manifest.webmanifest" },
      ],
    },
  },
});
