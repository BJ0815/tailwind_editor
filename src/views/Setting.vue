<template>
  <div class="h-full pt-32 pb-16 lg:pb-0">
    <Navbar :title="title" @set-sidebar="setSidebar" />
    <div class="flex">
      <BaseSidebar>
        <InputSection :resource="tabResource" />
      </BaseSidebar>

      <main class="hidden min-h-screen w-full lg:static lg:block lg:max-h-full lg:overflow-visible lg:w-2/3 xl:w-3/4 ">
        <Preview></Preview>
      </main>
    </div>
    <DownloadButton />
  </div>
</template>

<script>
import InputSection from '@/components/inputSection.vue'
import Preview from '@/components/preview'
import DownloadButton from '@/components/downloadButton'
import { mapState, mapGetters } from 'vuex'
import { MUTATIONS_ACTIONS, GETTERS_ACTIONS } from '../types'

export default {
  components: {
    InputSection,
    Preview,
    DownloadButton
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
