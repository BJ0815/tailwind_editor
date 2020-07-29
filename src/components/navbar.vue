<template>
  <nav class="mt-4">
    <ul class="flex flex-wrap">
      <li
        v-for="item in navigators"
        :key="item.text"
        class="lg:w-1/8 lg:flex-none flex-1 mr-4 mb-4"
      >
        <BaseButton
          class="btn-blue"
          :text="item.text"
          @click="$emit('set-sidebar', item.emit)"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
import { navigators } from '../data'

export default {
  props: {
    title: {
      type: String,
      default: () => 'Setting Page'
    }
  },
  data () {
    return {
      navigators
    }
  }
}
</script>

<style></style>
