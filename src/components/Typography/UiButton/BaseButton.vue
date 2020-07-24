<template>
  <div>
    <a
      v-on="$listeners"
      href="javascript:;"
      class="block cursor-pointer btn"
      :class="[btnColor]
    ">
      <span :class="[`text-${size}`, txtColor]">
        {{ text }}
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
