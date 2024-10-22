import { defineNuxtPlugin } from "nuxt/app";
import VueAwesomeSwiper from "vue-awesome-swiper";
/** import pagination if need */
import SwiperClass, { Navigation, Autoplay } from "swiper";

import "swiper/css";
// import 'swiper/css/pagination';
import "swiper/css/navigation";

export default defineNuxtPlugin((nuxtApp) => {
  SwiperClass.use([Navigation, Autoplay]);
  nuxtApp.vueApp.use(VueAwesomeSwiper);
});
