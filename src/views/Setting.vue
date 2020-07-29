<template>
  <div class="h-full pb-16 lg:pb-0 flex">
    <!-- <Header :title="title" @set-sidebar="setSidebar" /> -->
    <div
      class="inset-0 h-full hidden border-b lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:flex-1 lg:block lg:border-0"
    >
      <!-- <h1>Title</h1> -->
    </div>
    <main
      class="hidden bg-white min-h-screen w-full lg:rounded-tl-large lg:shadow-outer lg:static lg:block lg:max-h-full lg:overflow-visible lg:w-8/12 xl:w-8/12 "
    >
      <Preview></Preview>
    </main>

    <BaseSidebar>
      <div class="mx-auto w-80 p-4 shadow-md">
        <DownloadButton />
        <hr class="hidden lg:block lg:my-4" />
        <h3 class="block text-lg text-gray-700 mb-4">Options:</h3>
        <DropdownMenu
          :navigators="navigators"
          @change="setSidebar($event.target.value)"
        />
      </div>
      <InputSection :resource="tabResource" />
    </BaseSidebar>
  </div>
</template>

<script>
import InputSection from '@/components/inputSection.vue'
import Preview from '@/components/preview'
import DownloadButton from '@/components/downloadButton'
import DropdownMenu from '@/components/dropdownMenu'
import { mapState, mapGetters } from 'vuex'
import { MUTATIONS_ACTIONS, GETTERS_ACTIONS } from '../types'
import { navigators } from '../data'

export default {
  components: {
    InputSection,
    Preview,
    DownloadButton,
    DropdownMenu
  },
  data () {
    return {
      title: 'Setting Page',
      navigators
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
