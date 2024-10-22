import { defineNuxtPlugin } from "nuxt/app";
import VueAwesomeSwiper from "vue-awesome-swiper";
/** import pagination if need */
import SwiperClass from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import {} from "swiper/vue";

import "swiper/css";
// import 'swiper/css/pagination';
import "swiper/css/navigation";

export default defineNuxtPlugin((nuxtApp) => {
  SwiperClass.use([Navigation, Autoplay]);
  nuxtApp.vueApp.use(VueAwesomeSwiper);
});
