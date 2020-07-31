<template>
  <div id="preview" class="p-8 w-4/5 mx-auto">
    <SpacingSection :resource="tailwindConfig.spacing" />
    <WidthSection :resource="tailwindConfig.width" :useWidthPreview="useWidthPreview" />
    <FontSizeSection :resource="tailwindConfig.fontSize"/>
    <FontWeightSection :resource="tailwindConfig.fontWeight"/>
    <LetterSpacingSection :resource="tailwindConfig.letterSpacing"/>
    <LineHeightSection :resource="tailwindConfig.lineHeight"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SpacingSection from '@/components/Typography/UiPreviewSection/spacing.vue'
import WidthSection from '@/components/Typography/UiPreviewSection/width.vue'
import FontSizeSection from '@/components/Typography/UiPreviewSection/fontSize.vue'
import FontWeightSection from '@/components/Typography/UiPreviewSection/fontWeight.vue'
import LetterSpacingSection from '@/components/Typography/UiPreviewSection/letterSpacing.vue'
import LineHeightSection from '@/components/Typography/UiPreviewSection/lineHeight.vue'
import { mapState, mapGetters } from 'vuex'
import { GETTERS_ACTIONS } from '@/types'

@Component({
  components: {
    SpacingSection,
    WidthSection,
    FontSizeSection,
    FontWeightSection,
    LetterSpacingSection,
    LineHeightSection
  },
  computed: {
    ...mapState(['tailwindConfig']),
    ...mapGetters([GETTERS_ACTIONS.USE_WIDTH_PREVIEW])
  }
})
export default class Preview extends Vue {
}
</script>

<style>

</style>
