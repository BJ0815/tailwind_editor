<template functional>
  <section class="overflow-hidden mb-8" v-bind="data.attrs">
    <header>
      <h2 class="text-2xl">{{ props.title }}</h2>
    </header>
    <div
      class="bg-white rounded-lg overflow-hidden border-t border-l border-r border-b border-gray-400 p-4"
      style=""
    >
      <slot name="scopeList"></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>
