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
      style: [
        {
          children: `
        @font-face {
          font-family: "Covered By Your Grace";
          font-display: swap;
          src: local("sans-serif"),
          url("/font/CoveredByYourGrace-Regular.woff2")
            format("woff2"),
          url("/font/CoveredByYourGrace-Regular.woff")
            format("woff"),
          url("/font/CoveredByYourGrace-Regular.ttf")
            format("truetype");
        }
        `,
        },
      ],
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
        { name: "og:image", content: "/favicon.svg" },
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
      script: [{ src: "/theme.js" }],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "apple-touch-startup-image", href: "/favicon.svg" },
        { rel: "icon", href: "/favicon.svg" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "48x48",
          href: "/favicon-48x48.png",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
        {
          rel: "shortcut",
          href: "/favicon.ico",
        },
        {
          as: "style",
          rel: "preload",
          href: "/css/icomoon/style.css",
          onload: "this.onload=null;this.rel='stylesheet'",
        },
        { rel: "manifest", href: "/manifest.webmanifest" },
      ],
    },
  },
});
