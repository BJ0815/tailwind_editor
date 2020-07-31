<template>
  <section class="mb-16">
    <header class="flex items-center h-8">
      <h5 class="text-2xl leading-8 mr-4">{{ title }}</h5>
      <div
        class="text-orange"
        @click="$emit('on-click')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 stroke-current text-white bg-green-400 hover:bg-green-700 rounded-full cursor-pointer"
          viewBox="0 0 24 24"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>
    </header>

    <hr class="my-4" />
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>
