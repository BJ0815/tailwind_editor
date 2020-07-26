<template>
  <section class="overflow-hidden mb-8" id="width">
    <header>
      <h2 class="text-2xl">Fluid Width</h2>
    </header>
    <div
      class="bg-white rounded-lg overflow-hidden border-t border-l border-r border-b border-gray-400 p-4"
    >
      <div class="bg-gray-200 p-4">
        <template v-for="item in useWidthPreview">
          <template v-for="(row, rowIndex) in item">
            <div class="flex mb-4" :key="row + rowIndex">
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
        <div class="flex mb-4">
          <div class="w-1/2 p-2 bg-gray-400 text-center">.w-1/2</div>
          <div class="w-1/2 p-2 bg-gray-500 text-center">.w-1/2</div>
        </div>
        <div class="flex mb-4">
          <div class="w-2/5 p-2 bg-gray-400 text-center">.w-2/5</div>
          <div class="w-3/5 p-2 bg-gray-500 text-center">.w-3/5</div>
        </div>
        <div class="flex mb-4">
          <div class="w-1/3 p-2 bg-gray-400 text-center">.w-1/3</div>
          <div class="w-2/3 p-2 bg-gray-500 text-center">.w-2/3</div>
        </div>
        <div class="flex mb-4">
          <div class="w-1/4 p-2 bg-gray-400 text-center">.w-1/4</div>
          <div class="w-3/4 p-2 bg-gray-500 text-center">.w-3/4</div>
        </div>
        <div class="flex mb-4">
          <div class="w-1/5 p-2 bg-gray-400 text-center">.w-1/5</div>
          <div class="w-4/5 p-2 bg-gray-500 text-center">.w-4/5</div>
        </div>
        <div class="flex mb-4">
          <div class="w-1/6 p-2 bg-gray-400 text-center">.w-1/6</div>
          <div class="w-5/6 p-2 bg-gray-500 text-center">.w-5/6</div>
        </div>
        <div class="w-full p-2 bg-gray-400 text-center">.w-full</div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    resource: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['useWidthPreview'])
  }
}
</script>

<style></style>
