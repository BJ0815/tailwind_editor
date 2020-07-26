<template>
  <div id="preview">
    <SpacingSection :resource="tailwindConfig.spacing" />
    <WidthSection :resource="tailwindConfig.width" />
  </div>
</template>

<script>
import SpacingSection from '@/components/previewSection/spacing'
import WidthSection from '@/components/previewSection/width'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    SpacingSection,
    WidthSection
  },
  computed: {
    ...mapState(['tailwindConfig']),
    ...mapGetters(['useWidthPreview'])
  }
}
</script>

<style>

</style>
