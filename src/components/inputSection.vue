<template>
  <div
    class="p-6 overflow-y-auto text-base lg:h-(screen-16) lg:text-sm lg:py-8 lg:pl-6 lg:pr-8 "
  >
    <template v-for="section in resource">
      <BaseInputGroup
        v-for="(itemGroup, key) in section"
        :key="key"
        :title="key"
        @on-click="togglePopup(key)"
      >
        <BaseInput
          v-for="item in itemGroup"
          :key="item.label"
          :label="item.label"
          :id="item.id"
          :value="item.value"
          :type="item.type"
          :placeholder="item.label"
          readonly
          @click="togglePopup(key, item)"
          @change="onChange([key, item, $event.target.value])"
        />
      </BaseInputGroup>
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { MUTATIONS_ACTIONS, SettingParametersType, FormatType } from '@/types'

export default Vue.extend({
  props: {
    resource: {
      type: Array as PropType<FormatType[]>,
      default: () => []
    }
  },
  methods: {
    togglePopup (key: string, field?: FormatType) {
      if (field && field.type === 'color') return

      this.$store.commit(MUTATIONS_ACTIONS.TOGGLE_POPUP, [key, field])
    },
    onChange ([group, item, newValue]: [string, FormatType, string]) {
      const subKey = item.id
      const changeEvent: SettingParametersType = {
        group,
        oldItem: {
          key: item.id,
          value: ''
        },
        newItem: {
          key: subKey,
          value: newValue
        }
      }
      this.$store.commit(MUTATIONS_ACTIONS.SET_TAILWIND_CONFIG, changeEvent)
    }
  }
})
</script>
