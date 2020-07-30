<template>
  <div
    class="bg-main relative"
  >
    <router-view />
    <PopupMenu
      v-if="isPopOpen"
      :resource="popupSrc"
      @update="onPopupUpdate"
      @onClose="onPopupClose"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PopupMenu from '@/components/popupModel.vue'
import { mapState } from 'vuex'
import { MUTATIONS_ACTIONS } from '@/types'
export default Vue.extend({
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
    onPopupUpdate (output: string[]) {
      this.$store.commit(MUTATIONS_ACTIONS.SET_TAILWIND_CONFIG, output)
      this.$store.commit(MUTATIONS_ACTIONS.CLOSE_POPUP)
    },
    onPopupClose () {
      this.$store.commit(MUTATIONS_ACTIONS.CLOSE_POPUP)
    }
  }
})
</script>

<style lang="scss" scoped>
.bg-main {
  background-color: #a4508b;
  background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);
}
</style>
