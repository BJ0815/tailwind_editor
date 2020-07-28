<template functional>
  <div>
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
  </div>
</template>

<script>
export default {
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
}
</script>

<style></style>
