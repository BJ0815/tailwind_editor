<template>
  <BaseSection title='Font Weight' id="fontWeight">
    <template v-slot:scopeList>
      <template v-for="(value, key) in resource">
        <div class="mb-6" :key="key">
          <p class="text-sm text-gray-500">.text-{{ key }}</p>
          <p
            class="truncate text-gray-800"
            :style="{ 'font-weight': value }"
          >The quick brown fox jumped over the lazy dog.</p>
        </div>
      </template>
    </template>
  </BaseSection>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseSection from '@/components/Typography/UiPreviewSection/BaseSection.vue'
export default Vue.extend({
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
