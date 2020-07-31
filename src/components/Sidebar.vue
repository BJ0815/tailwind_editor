<template>
  <aside class="inset-0 h-full bg-gray-200 z-90 w-full border-b lg:-mb-0 lg:static lg:shadow-2xl lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-3/12 lg:block lg:border-0 xl:w-3/12">
    <div class="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:sticky lg:top-0 bg-white lg:bg-transparent shadow-outline-right">
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
    </div>
  </aside>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import InputSection from '@/components/inputSection.vue'
import DownloadButton from '@/components/downloadButton.vue'
import DropdownMenu from '@/components/dropdownMenu.vue'

import { mapGetters } from 'vuex'
import { navigators } from '../data'
import { GETTERS_ACTIONS, MUTATIONS_ACTIONS } from '@/types'

@Component({
  components: {
    InputSection,
    DownloadButton,
    DropdownMenu
  },
  computed: {
    ...mapGetters([GETTERS_ACTIONS.GET_TAB_RESOURCE])
  }
})
export default class Sidebar extends Vue {
  navigators = navigators

  setSidebar (val: string) {
    this.$store.commit(MUTATIONS_ACTIONS.TOGGLE_TAB_SELECTOR, val)
  }
}
</script>
