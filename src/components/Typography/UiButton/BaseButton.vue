<template>
  <a
    v-bind="$attrs"
    :href="href"
    class="block cursor-pointer btn"
    @click="$emit('on-click')"
  >
    <span :class="[`text-${size}`, txtColor]">
      {{ text }}
    </span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    txtColor: {
      type: String,
      default: () => 'text-gray-100'
    },
    href: {
      type: String,
      default: () => 'javascript:;'
    },
    size: {
      type: String,
      default: () => 'sm'
    },
    text: {
      type: String,
      required: true
    }
  }
})
</script>

<style></style>
