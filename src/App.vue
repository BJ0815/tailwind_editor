<template>
  <div :class="$store.state.isPopOpen ? 'fixed inset-0' : 'relative'">
    <router-view />
    <PopupMenu v-if="isPopOpen" :resource="popupSrc" @update="onPopupUpdate" @onClose="onPopupClose" />
  </div>
</template>

<script>
import PopupMenu from '@/components/popupModel.vue'
import { mapState } from 'vuex'
import { MUTATIONS_ACTIONS } from '@/types'
export default {
  components: {
    PopupMenu
  },
  computed: {
    ...mapState({
      isPopOpen: 'isPopOpen',
      popupSrc: 'popupSrc'
    })
  },
  methods: {
    onPopupUpdate (output) {
      this.$store.commit(MUTATIONS_ACTIONS.SET_TAILWIND_CONFIG, output)
      this.$store.commit(MUTATIONS_ACTIONS.CLOSE_POPUP)
    },
    onPopupClose () {
      this.$store.commit(MUTATIONS_ACTIONS.CLOSE_POPUP)
    }
  }
}
</script>
