<template>
  <div class="fixed top-0 left-0 w-full h-full z-50">
    <div class="fixed inset-0 bg-gray-600 opacity-50"></div>
    <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div class="w-full p-6 bg-gray-200 rounded-lg shadow-md">
        <p class="block text-gray-700 text-2xl font-bold mb-2">{{ label }}</p>
        <hr class="my-4" />
        <div class="flex flex-col">
          <div class="flex items-center mb-4">
            <label for="key" class="w-16 block text-gray-700 text-md font-bold mb-2">Key: </label>
            <input
              ref="keyInput"
              class="flex-1 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none h-10 leading-normal"
              id="key"
              type="text"
              v-model="popupSrc.id"
            >
          </div>
          <div class="flex items-center mb-4">
            <label :for="popupSrc.label" class="w-16 block text-gray-700 text-md font-bold mb-2">Value: </label>
            <input
              ref="valueInput"
              class="flex-1 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-l-lg py-2 px-4 block appearance-none h-10 leading-normal"
              v-model="popupSrc.value"
              :id="popupSrc.label"
              :type="inputType"
            >
            <div v-if="!isColorSetting" class="inline-block relative w-32">
              <select v-model="menuSelected" class="block appearance-none bg-blue-600 text-gray-200 w-full hover:border-gray-500 px-4 py-2 pr-8 rounded-r leading-normal focus:outline-none focus:shadow-outline">
                <option
                  v-for="type in formatTypes"
                  :key="type"
                  :value="type"
                >{{type}}</option>
                <option value="none">none</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-200">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-4" />
        <div class="flex items-center justify-end">
          <BaseButton
              type="button"
              text="確認"
              class="mr-4 btn-blue"
              @click="update"
            />
          <BaseButton
              type="button"
              text="取消"
              class="bg-gray-400 hover:bg-gray-600"
              @click="close"
            />
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { validFormats } from '@/utils/shared'
import { FormatType, SettingParametersType } from '@/types'

export default Vue.extend({
  props: {
    resource: {
      type: Object as PropType<FormatType>,
      required: true
    }
  },
  data () {
    return {
      menuSelected: 'none' as string,
      formatTypes: ['vw', 'vh', 'px', 'em', 'rem', '%'] as string[]
    }
  },
  computed: {
    popupSrc (): FormatType {
      const src = Object.assign({}, this.resource)
      const exp = validFormats(src.value, this.formatTypes as string[])
      if (!exp) {
        this.setMenuSelected('none')
        return src
      }

      const [value, e] = exp
      this.setMenuSelected(e)
      src.value = value
      return src
    },
    newValue () {
      const type = this.getType() as string
      const popupSrc = this.popupSrc as FormatType
      return popupSrc.value + type || ''
    },
    label (): string {
      if (!this.resource) return ''

      const { group = '' } = this.resource
      return group
    },
    isColorSetting (): boolean {
      const popupSrc = this.popupSrc as FormatType
      return popupSrc && popupSrc.group === 'colors'
    },
    inputType () {
      const isColorSetting = this.isColorSetting as boolean
      const popupSrc = this.popupSrc as FormatType
      return isColorSetting ? 'color' : popupSrc.type || 'text'
    }
  },
  mounted () {
    this.focus()
    window.addEventListener('keyup', this.keyEventHandler)
  },
  methods: {
    keyEventHandler (event: KeyboardEvent) {
      if (event.keyCode === 27) {
        this.close()
      }
    },
    getType (): string {
      return this.menuSelected !== 'none' ? this.menuSelected || '' : ''
    },
    update () {
      const group = this.popupSrc.group || ''
      const subKey = this.popupSrc.id
      const newValue = this.newValue
      const changeEvent: SettingParametersType = {
        group,
        oldItem: {
          key: this.resource.id,
          value: this.resource.value
        },
        newItem: {
          key: subKey,
          value: newValue
        }
      }
      this.$emit('update', changeEvent)
    },
    setMenuSelected (value: string): void {
      this.menuSelected = value
    },
    close (): void {
      this.$emit('on-close')
    },
    focus (): void {
      const keyInputElm = this.$refs.keyInput as HTMLInputElement
      const valueInputElm = this.$refs.valueInput as HTMLInputElement
      if (!this.resource.label) return keyInputElm.focus()

      valueInputElm.focus()
    }
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.keyEventHandler)
  }
})
</script>
