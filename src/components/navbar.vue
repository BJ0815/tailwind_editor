<template>
  <header class="relative z-10 bg-gray-300 text-left shadow-md">
    <div class="container p-8">
      <h1 class="lg:text-3xl">{{ title }}</h1>
      <nav class="mt-4">
        <ul class="flex flex-wrap">
          <li
            v-for="item in navigators"
            :key="item.text"
            class="lg:w-1/5 lg:flex-none flex-1 mr-4 mb-4"
          >
            <BaseButton
              :text="item.text"
              @click="$emit('set-sidebar', item.emit)"
            />
          </li>
        </ul>
      </nav>
    </div>
  </header>
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

<style>

</style>
