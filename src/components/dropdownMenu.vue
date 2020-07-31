<template>
  <div class="inline-block relative w-full">
    <select
      class="block cursor-pointer appearance-none w-full text-white bg-purple-500 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
    >
      <option v-for="item in navigators" :key="item.text" :value="item.emit" class="bg-gray-200 text-gray-700 text-lg">
        {{ item.text }}
      </option>
    </select>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white"
    >
      <svg
        class="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    navigators: {
      type: Array,
      required: true
    }
  }
})
</script>
