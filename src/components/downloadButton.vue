<template>
  <div class="fixed mb-4 bottom-0 inset-x-0 leading-16 lg:relative z-50">
    <BaseButton
      tag="a"
      text="Download"
      class="bg-green-400 hover:bg-green-600 rounded-none w-11/12 mx-auto lg:w-auto lg:ml-auto text-center"
      :href="url"
      download="tailwindCssTheme.json"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { GETTERS_ACTIONS } from '@/types'

export default Vue.extend({
  computed: {
    ...mapGetters([GETTERS_ACTIONS.EXPORT_JSON]),
    url () {
      const JSONData = this.getJSON() as string
      return 'data:' + JSONData
    }
  },
  methods: {
    getJSON (): string {
      return this.exportJSON
    }
  }
})
</script>
