<template>
  <BaseSection title='Line Height' id="lineHeight">
    <template v-slot:scopeList>
      <template v-for="(value, key) in resource">
        <div class="mb-6" :key="key">
          <p class="text-sm text-gray-500">.leading-{{ key }}</p>
          <p
            class="break-words text-gray-800"
            :style="{ 'line-height': value }"
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore eos, exercitationem iste excepturi id adipisci. Iure culpa laudantium ut sapiente minima beatae temporibus dolor quidem, dolorem, minus incidunt enim aliquid.</p>
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
