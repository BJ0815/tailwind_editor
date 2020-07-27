<template>
  <div :class="$store.state.isPopOpen ? 'fixed inset-0' : 'relative'">
    <router-view />
    <PopupMenu />
  </div>
</template>

<script>
import PopupMenu from '@/components/popupModel.vue'
export default {
  components: {
    PopupMenu
  }
}
</script>
