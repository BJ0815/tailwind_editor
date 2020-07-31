<template>
  <div class="h-full pb-16 lg:pb-0 flex">
    <div
      class="inset-0 h-full hidden border-b lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:flex-1 lg:block lg:border-0"
    >
      <!-- <h1>Title</h1> -->
    </div>
    <main
      class="hidden bg-white min-h-screen w-full lg:rounded-tl-large lg:shadow-outer lg:static lg:block lg:max-h-full lg:overflow-visible lg:w-8/12 xl:w-8/12 "
    >
      <Preview></Preview>
    </main>

    <Sidebar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Preview from '@/components/preview.vue'
import Sidebar from '@/components/Sidebar.vue'
import { navigators } from '../data'

export default Vue.extend({
  components: {
    Preview,
    Sidebar
  },
  data () {
    return {
      title: 'Setting Page',
      navigators
    }
  }
})
</script>
