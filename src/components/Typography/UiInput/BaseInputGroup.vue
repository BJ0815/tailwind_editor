<template>
  <section class="mb-16">
    <h5 class="text-2xl">{{ title }}</h5>
    <hr class="my-4">
    <slot />
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
