<template>
  <section>
    <template v-for="section in resource" >
      <BaseInputGroup
        v-for="itemGroup in section"
        :key="JSON.stringify(Object.keys(itemGroup))"
        :title="Object.keys(section)[0]"
      >
        <BaseInput
          v-for="item in itemGroup"
          :key="item.label"
          :label="item.label"
          :id="item.id"
          :value="item.value"
          :type="'text'"
          :placeholder="item.label"
          @input="$emit('input', [Object.keys(section)[0], item.id, $event.target.value])"
        />
      </BaseInputGroup>
    </template>
  </section>
</template>

<script>
export default {
  props: {
    resource: {
      type: Array,
      default: () => []
    }
  }
}
</script>
