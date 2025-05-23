<template>
  <div class="bg-white text-[#303030]">
    <div class="print:hidden sticky -top-px mb-3 w-100 z-10" ref="REF_MENU">
      <allEditor @departureTime="handleDepartureTime" />
    </div>
    <div id="printer">
      <!-- 全尺寸 -->
      <full
        :STEPS="STEPS"
        class="mb-5 hidden md:table print:table"
        :departureTime="departureTime"
      />
      <div
        class="grid grid-cols-2 md:flex print:flex gap-x-10 justify-center items-start"
      >
        <div>
          <type_A :STEPS="STEPS" class="mb-5" :departureTime="departureTime" />
        </div>
        <div>
          <type_A2 :STEPS="STEPS" class="mb-5" :departureTime="departureTime" />
        </div>
        <div>
          <type_B :STEPS="STEPS" :departureTime="departureTime" />
        </div>
        <div>
          <type_B2 :STEPS="STEPS" :departureTime="departureTime" />
        </div>
      </div>
    </div>
    <div
      class="text-center py-5 print:hidden border-t border-dashed border-gray-400 mt-5"
    >
      <button
        :disabled="!Array.isArray(STEPS) || !STEPS.length"
        onclick="window.print()"
        class="btn-print"
        title="列印小抄"
        type="button"
      >
        <i class="icon-print text-2xl" aria-hidden="true" />
        列印小抄
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, onMounted, ref } from "vue";
import full from "./tables/full.vue";
import type_A from "./tables/type_A.vue";
import type_A2 from "./tables/type_A2.vue";
import type_B from "./tables/type_B.vue";
import type_B2 from "./tables/type_B2.vue";
import allEditor from "./allEditor.vue";
import DAY from "dayjs";

export default defineComponent({
  name: "print preview",
  components: { full, type_A, type_A2, type_B, type_B2, allEditor },
  props: {
    modelValue: {
      type: Array as PropType<STEP[]>,
      default: () => [],
    },
  },
  setup(props) {
    /** 格式化地名 */
    const formatPlaceName = (str: string) => {
      switch (str) {
        case "最高小七":
          return "小七";

        case "中心碑":
          return "中心";

        case "人止關":
          return "人止";
        default:
          return str;
      }
    };

    const STEPS = computed(() => {
      return props.modelValue.map((obj) => ({
        ...obj,
        start: formatPlaceName(obj.start),
        end: formatPlaceName(obj.end),
        /** 距離 */
        distance: Number(obj.distance).toFixed(1),
        /** 累積距離 */
        cumulative_distance: Number(obj.cumulative_distance).toFixed(1),
        /** 配瓦 */
        wattage: obj.wattage,
        /** 均速 */
        average_speed: `${Math.floor(Number(obj.average_speed))}`,
        /** 區段時間 */
        segment_time: showTimer(obj.segment_time),
        /** 累計時間 */
        cumulative_time: showTimer(obj.cumulative_time),
        /** 預估到達時間 */
        arrival_time: addDepartureTime(obj.cumulative_time),
      }));

      function addDepartureTime(time: string | null) {
        if (!time || !departureTime.value) return "";
        const [hour_S, minute_S] = departureTime.value.split(":").map(Number);
        const [hour, minute] = time.split(":").map(Number);

        const startTime = DAY()
          .hour(hour_S + hour)
          .minute(minute_S + minute);

        return startTime.format("HH:mm");
      }
    });

    /** 簡化時間的顯示 */
    const showTimer = (time = "") => {
      const arr = time.split(":");
      return arr[0] + ":" + arr[1];
    };

    const REF_MENU = ref<HTMLMenuElement | null>(null);

    const initSticky = () => {
      const el = REF_MENU.value;
      if (!el) return;
      const observer = new IntersectionObserver(
        ([e]) =>
          e.target.classList.toggle("is-sticky", e.intersectionRatio < 1),
        { threshold: [1] }
      );
      observer.observe(el);
    };

    const departureTime = ref<string | null>(null);

    /** 取得出發時間 */
    const handleDepartureTime = (time: string | null) => {
      departureTime.value = time;
    };

    onMounted(() => {
      initSticky();
    });

    return {
      STEPS,
      formatPlaceName,
      REF_MENU,
      handleDepartureTime,
      departureTime,
    };
  },
});
</script>
