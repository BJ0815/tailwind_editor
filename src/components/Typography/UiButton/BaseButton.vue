<template functional>
  <div>
    <a
      v-on="listeners"
      href="javascript:;"
      :class="[data.staticClass, data.class]"
      class="block cursor-pointer btn"
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
    btnColor: {
      type: String,
      default: () => 'btn-blue'
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
