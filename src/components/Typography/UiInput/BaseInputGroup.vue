<template>
  <section>
    <h5 class="text-xl">{{ title }}</h5>
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
