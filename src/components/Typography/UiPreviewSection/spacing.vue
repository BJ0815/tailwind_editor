<template>
  <BaseSection title="Spacing" id="spacing">
    <template v-slot:scopeList>
      <template v-for="(value, key) in resource">
        <div class="flex items-center mb-1" :key="key">
          <p class="text-sm text-gray-600 w-12 mr-2">.*-{{ key }}</p>
          <div
            class="h-4 bg-gray-400 w-0"
            :style="{ width: value }"
          ></div>
        </div>
      </template>
    </template>
  </BaseSection>
</template>

<script>
import BaseSection from '@/components/Typography/UiPreviewSection/BaseSection'
export default {
  components: {
    BaseSection
  },
  props: {
    resource: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
