<template functional>
  <a
    v-on="listeners"
    v-bind="data.attrs"
    :href="props.href"
    class="block cursor-pointer btn"
    :class="[data.class, data.staticClass]"
  >
    <span :class="[`text-${props.size}`, props.txtColor]">
      {{ props.text }}
    </span>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
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
