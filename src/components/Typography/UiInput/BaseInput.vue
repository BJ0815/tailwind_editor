<template>
  <div class="mb-4">
    <label :for="id" class="block cursor-pointer text-left text-gray-500 hover:text-gray-700 text-sm font-bold mb-2">{{ label }}</label>
    <input
      class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 text-gray-700 rounded-lg py-2 px-4 block w-full appearance-none h-10 leading-normal"
      :id="id"
      v-bind="$attrs"
      @click="$emit('on-click')"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
})
</script>
