<template>
  <BaseSection title="Fluid Width" id="width">
    <template v-slot:scopeList>
        <template v-for="(row, rowIndex) in useWidthPreview">
          <div class="flex mb-4" :key="rowIndex">
            <div
              v-for="(text, index) in row"
              :key="text + index"
              class="p-2 text-center"
              :class="{
                ['w-' + text]: true,
                'bg-gray-400': index === 0,
                'bg-gray-500': index === 1
              }"
              :style="{ width: resource[text] }"
            >
              .w-{{ text }}
            </div>
          </div>
        </template>
    </template>
  </BaseSection>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseSection from '@/components/Typography/UiPreviewSection/BaseSection.vue'
export default defineComponent({
  components: {
    BaseSection
  },
  props: {
    resource: {
      type: Object,
      required: true
    },
    useWidthPreview: {
      type: Array,
      required: true
    }
  }
})
</script>

<style></style>
