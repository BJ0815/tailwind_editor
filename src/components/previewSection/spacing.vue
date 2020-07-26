<template>
  <section class="overflow-hidden mb-8" id="spacing">
    <header>
      <h2 class="text-2xl">Spacing</h2>
    </header>
    <div
      class="bg-white rounded-lg overflow-hidden border-t border-l border-r border-b border-gray-400 p-4"
      style=""
    >
      <template v-for="key in Object.keys(resource)">
        <div class="flex items-center mb-1" :key="key">
          <p class="text-sm text-gray-600 w-12 mr-2">.*-{{ key }}</p>
          <div
            class="h-4 bg-gray-400 w-0"
            :style="{ width: resource[key] }"
          ></div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    resource: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
