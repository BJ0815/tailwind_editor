<template>
  <main class="h-screen">
    <div class="container mx-auto h-full flex justify-center items-center">
      <article class="w-full">
        <header>
          <h1 class="text-3xl my-8 mx-auto typing-demo text-white">Customize your own TailwindCss configuration</h1>
        </header>
        <nav class="text-center">
          <router-link :to="{ path }" class="btn shadow-md  focus:bg-red-500 hover:bg-purple-600 text-white border-solid border">Get Started</router-link>
        </nav>
      </article>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      path: 'setting'
    }
  },
  mounted () {
    window.addEventListener('keyup', this.callEvent)
  },
  methods: {
    callEvent (event: KeyboardEvent) {
      if (event.keyCode === 13) {
        this.$router.push(this.path)
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.callEvent)
  }
})
</script>

<style lang="scss" scoped>
.typing-demo {
  width: 45ch;
  animation: typing 2s steps(45), blink .8s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
}

@keyframes typing {
  from {
    width: 0
  }
}

@keyframes blink {
  50% {
    border-color: transparent
  }
}
</style>>
