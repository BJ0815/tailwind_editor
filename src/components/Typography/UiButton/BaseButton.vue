<template functional>
  <component
    :is="props.tag"
    v-on="listeners"
    v-bind="data.attrs"
    :href="props.href"
    class="block cursor-pointer btn focus:outline-none focus:shadow-outline"
    :class="[data.class, data.staticClass]"
  >
    <span :class="[`text-${props.size}`, props.txtColor]">
      {{ props.text }}
    </span>
  </component>
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
    },
    tag: {
      type: String,
      default: () => 'button'
    }
  }
})
</script>
