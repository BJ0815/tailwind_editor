<template>
  <div class="wrap h-full">
    <Navbar :title="title" @set-sidebar="setSidebar" />
    <main class="flex h-full">
      <BaseSidebar class="w-full lg:w-1/3 xl:w-1/4">
        <InputSection @input="onChange" :resource="tabResource" />
      </BaseSidebar>

      <div class="flex-1 lg:my-6 lg:px-6 mx-auto relative overflow-x-hidden overflow-y-auto mb-8">
        <!-- <iframe ref="preview" frameborder="0" width="100%" height="100%" /> -->
        <Preview></Preview>
      </div>
    </main>
  </div>
</template>

<script>
import InputSection from '@/components/inputSection.vue'
import Preview from '@/components/preview'
import { mapState, mapGetters } from 'vuex'
import { MUTATIONS_ACTIONS, GETTERS_ACTIONS } from '../types'

export default {
  components: {
    InputSection,
    Preview
  },
  data () {
    return {
      title: 'Setting Page'
    }
  },
  computed: {
    ...mapState(['tabSelector']),
    ...mapGetters([GETTERS_ACTIONS.GET_TAB_RESOURCE]),
    currentTabSelection () {
      return `tab-${this.tabSelector.toLowerCase()}`
    }
  },
  methods: {
    setSidebar (val) {
      this.$store.commit(MUTATIONS_ACTIONS.TOGGLE_TAB_SELECTOR, val)
    },
    onChange (changeEvent) {
      this.$store.commit(MUTATIONS_ACTIONS.SET_TAILWIND_CONFIG, changeEvent)
      this.setCustomStyle(changeEvent)
    },
    setCustomStyle (changeEvent) {
      console.log('set custom style', changeEvent)
    }
  }
}
</script>
