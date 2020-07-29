<template>
  <header class="w-full flex items-center bg-gray-300 text-left shadow-md fixed top-0 inset-x-0 z-50">
    <div class="container p-4 mx-auto">
      <h1 class="lg:text-3xl leading-extra-loose">{{ title }}</h1>
      <!-- <nav class="mt-4">
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
      </nav> -->
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
