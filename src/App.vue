<template>
  <div
    class="bg-main relative"
    id="app"
  >

    <transition name="fade">
      <router-view />
    </transition>
    <transition name="popup-fade">
      <PopupMenu
        v-if="isPopOpen"
        :resource="popupSrc"
        @update="onPopupUpdate"
        @on-close="onPopupClose"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PopupMenu from '@/components/popupModel.vue'
import { mapState } from 'vuex'
import { MUTATIONS_ACTIONS, SettingParametersType } from '@/types'
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
    onPopupUpdate (output: SettingParametersType) {
      this.$store.commit(MUTATIONS_ACTIONS.SET_TAILWIND_CONFIG, output)
      this.$store.commit(MUTATIONS_ACTIONS.CLOSE_POPUP)
    },
    onPopupClose () {
      this.$store.commit(MUTATIONS_ACTIONS.CLOSE_POPUP)
    }
  }
})
</script>
