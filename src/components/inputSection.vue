<template>
  <div class="p-6 overflow-y-auto text-base lg:h-(screen-16) lg:text-sm lg:py-8 lg:pl-6 lg:pr-8 ">
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
          :type="item.type"
          :placeholder="item.label"
          @input="$emit('input', [Object.keys(section)[0], item.id, $event.target.value])"
        />
      </BaseInputGroup>
    </template>
  </div>
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
