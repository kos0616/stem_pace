<template>
  <nav class="flex justify-center mx-auto">
    <label title="變更表格顏色" class="menu-item">
      <input @input="changeColor" type="color" class="invisible w-0 h-0" />
      <i class="fa-solid fa-fill" style="color: var(--table-row-color)"></i>
    </label>
    <button title="變更文字大小" @click="changeFontSize" class="menu-item">
      <i class="fa-solid fa-text-height"></i>
    </button>
    <button
      v-if="!setDepartureTime"
      @click="setDepartureTime = !setDepartureTime"
      title="出發時間設定"
      type="button"
      class="menu-item"
    >
      <i class="fa-solid fa-stopwatch"></i>
    </button>
    <div v-else class="menu-item flex gap-2">
      <button
        @click="
          setDepartureTime = false;
          handleDepartureTime(null);
        "
        title="出發時間設定"
        type="button"
      >
        <i class="fa-solid fa-stopwatch"></i>
      </button>
      <label for="departureTime">
        出發時間
        <select
          @change="handleDepartureTime($event.target.value)"
          v-if="setDepartureTime"
          id="departureTime"
        >
          <option value="">無</option>
          <option value="06:00">06:00</option>
          <option value="05:30">05:30</option>
          <option value="05:00">05:00</option>
        </select>
      </label>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(_, { emit }) {
    const setDepartureTime = ref(false);

    const color = ref("");

    const changeColor = (e: Event) => {
      document.documentElement.style.setProperty(
        "--table-row-color",
        (e.target as HTMLInputElement).value
      );
    };

    const activeSize = ref(1);

    const changeFontSize = () => {
      const dom = document.querySelector("#printer") as HTMLDivElement;
      if (!dom) return;
      const SIZE = ["80%", "100%", "120%"];
      const next = activeSize.value + 1;
      activeSize.value = next > SIZE.length - 1 ? 0 : next;
      dom.style.fontSize = SIZE[activeSize.value];
    };

    const handleDepartureTime = (time: string | null) => {
      emit("departureTime", time);
    };

    return {
      color,
      changeFontSize,
      changeColor,
      setDepartureTime,
      activeSize,
      setDepartureTime,
      handleDepartureTime,
    };
  },
});
</script>

<style lang="postcss">
.is-sticky .menu-item {
  @apply border-gray-300 top-[3.4rem];
}
.menu-item {
  @apply bg-white hover:bg-slate-100 border-transparent last:border-r border-l border-y py-2 px-3 cursor-pointer first:rounded-bl last:rounded-br relative;
}
</style>
