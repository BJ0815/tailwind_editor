<template>
  <BaseSection title='Letter Spacing' id="letterSpacing">
    <template v-slot:scopeList>
      <template v-for="(value, key) in resource">
        <div class="mb-6" :key="key">
          <p class="text-sm text-gray-500">.tracking-{{ key }}</p>
          <p
            class="truncate text-gray-800"
            :style="{ 'letter-spacing': value }"
          >The quick brown fox jumped over the lazy dog.</p>
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
    }
  }
})
</script>

<style></style>
