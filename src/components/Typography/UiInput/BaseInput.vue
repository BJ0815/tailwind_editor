<template>
  <div class="mb-4">
    <label :for="id" class="block text-left text-gray-700 text-sm font-bold mb-2">{{ label }}</label>
    <input
      class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none h-10 leading-normal"
      :id="id"
      v-bind="$attrs"
      v-on="$listeners"
    >
  </div>
</template>

<script>

export default {
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
}
</script>
