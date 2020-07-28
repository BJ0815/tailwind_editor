<template>
  <div class="fixed top-0 left-0 w-full h-full z-50">
    <div class="fixed inset-0 bg-gray-600 opacity-50"></div>
    <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div class="w-full p-6 bg-gray-200 rounded-lg shadow-md">
        <label :for="popupSrc.id" class="block text-gray-700 text-xl font-bold mb-2">{{ popupSrc.group + ' - ' + popupSrc.label }}</label>
        <hr class="my-4" />
        <div class="flex items-center">
          <input
            ref="input"
            class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-l-lg py-2 px-4 block w-full appearance-none h-10 leading-normal"
            v-model="popupSrc.value"
            :id="popupSrc.id"
            :type="popupSrc.type"
          >
          <div class="inline-block relative w-32">
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
        <hr class="my-4" />
        <div class="flex items-center justify-end">
          <BaseButton
              text="確認"
              class="mr-4 btn-blue"
              @click="update"
            />
          <BaseButton
              text="取消"
              class="bg-gray-400 hover:bg-gray-600"
              @click="close"
            />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { validFormats } from '@/utils/shared'

export default {
  props: {
    resource: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      menuSelected: 'none',
      formatTypes: ['vw', 'vh', 'px', 'em', 'rem', '%']
    }
  },
  computed: {
    popupSrc () {
      const src = Object.assign({}, this.resource)
      const exp = validFormats(src.value, this.formatTypes)
      if (!exp) return (this.setMenuSelected('none')) && src

      const [value, e] = exp
      this.setMenuSelected(e)
      src.value = value
      return src
    },
    newValue () {
      const type = this.menuSelected !== 'none' ? this.menuSelected : ''
      return this.popupSrc.value + type
    }
  },
  mounted () {
    this.$refs.input && this.$refs.input.focus()
  },
  methods: {
    update () {
      const group = this.popupSrc.group
      const subKey = this.popupSrc.id
      const newValue = this.newValue
      const changeEvent = [group, subKey, newValue]
      this.$emit('update', changeEvent)
    },
    setMenuSelected (value) {
      this.menuSelected = value
    },
    close () {
      this.$emit('onClose')
    }
  }
}
</script>
