<template>
  <BaseSection title='Font Weight' id="fontWeight">
    <template v-slot:scopeList>
      <template v-for="key in Object.keys(resource)">
        <div class="mb-6" :key="key">
          <p class="text-sm text-gray-500">.text-{{ key }}</p>
          <p
            class="truncate text-gray-800"
            :style="{ 'font-weight': resource[key] }"
          >The quick brown fox jumped over the lazy dog.</p>
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
