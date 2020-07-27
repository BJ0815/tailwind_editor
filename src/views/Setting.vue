<template>
  <div class="h-full pt-32">
    <Navbar :title="title" @set-sidebar="setSidebar" />
    <main class="flex">
      <BaseSidebar class="w-full lg:w-1/3 xl:w-1/4">
        <InputSection @input="onChange" :resource="tabResource" />
      </BaseSidebar>

      <div class="hidden min-h-screen w-full lg:static lg:block lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5 ">
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
