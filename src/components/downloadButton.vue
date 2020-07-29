<template>
  <div class="fixed mb-4 bottom-0 inset-x-0 leading-16 lg:relative z-50">
    <BaseButton
      text="Download"
      class="bg-green-400 hover:bg-green-600 rounded-none w-11/12 mx-auto lg:w-auto lg:ml-auto text-center"
      :href="url"
      download="tailwindCssTheme.json"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'exportJSON'
    ]),
    url () {
      const JSONData = this.exportJSON
      return 'data:' + JSONData
    }
  }
}
</script>
