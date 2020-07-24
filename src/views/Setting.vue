<template>
  <div class="wrap h-full">
    <Navbar :title="title" @set-sidebar="setSidebar" />
    <main class="flex h-full">
      <BaseSidebar class="w-full lg:w-1/3 xl:w-1/4">
        <InputSection @input="onChange" :resource="tabResource" />
      </BaseSidebar>

      <div class="flex-1" />
    </main>
  </div>
</template>

<script>
import InputSection from '../components/inputSection.vue'
import { mapState, mapGetters } from 'vuex'
import { MUTATIONS_ACTIONS, GETTERS_ACTIONS } from '../types'

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
  methods: {
    setSidebar (val) {
      this.$store.commit(MUTATIONS_ACTIONS.TOGGLE_TAB_SELECTOR, val)
    },
    onChange (changeEvent) {
      this.$store.commit(MUTATIONS_ACTIONS.SET_TAILWIND_CONFIG, changeEvent)
    }
  }
}
</script>
