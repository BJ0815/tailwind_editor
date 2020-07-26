<template>
  <div class="wrap h-full">
    <Navbar :title="title" @set-sidebar="setSidebar" />
    <main class="flex h-full">
      <BaseSidebar class="w-full lg:w-1/3 xl:w-1/4">
        <InputSection @input="onChange" :resource="tabResource" />
      </BaseSidebar>

      <div class="flex-1 lg:my-6 lg:px-6 mx-auto">
        <iframe ref="preview" frameborder="0" width="100%" height="100%" />
      </div>
    </main>
  </div>
</template>

<script>
import InputSection from '../components/inputSection.vue'
import { mapState, mapGetters } from 'vuex'
import { MUTATIONS_ACTIONS, GETTERS_ACTIONS, IFRAME_SRC } from '../types'

export default {
  components: {
    InputSection
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
  mounted () {
    this.setPreview()
  },
  methods: {
    setSidebar (val) {
      this.$store.commit(MUTATIONS_ACTIONS.TOGGLE_TAB_SELECTOR, val)
    },
    onChange (changeEvent) {
      this.$store.commit(MUTATIONS_ACTIONS.SET_TAILWIND_CONFIG, changeEvent)
    },
    setPreview () {
      // !! iframe DOM => this.$refs.preview.contentWindow
      this.$refs.preview.src = IFRAME_SRC
    }
  }
}
</script>
