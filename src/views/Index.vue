<template>
  <main class="h-full">
    <div class="container mx-auto h-full flex justify-center items-center">
      <article class="w-full">
        <header>
          <h1 class="text-3xl my-8 mx-auto typing-demo">Customize your own TailwindCss configuration</h1>
          <nav class="text-center">
            <router-link :to="{path: 'setting'}" class="btn btn-blue">Get Started</router-link>
          </nav>
        </header>
      </article>
    </div>
  </main>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
.typing-demo {
  width: 45ch;
  animation: typing 3s steps(45), blink .8s step-end infinite alternate;
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
