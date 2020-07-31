import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseButton from './components/Typography/UiButton/BaseButton.vue'
import BaseInput from './components/Typography/UiInput/BaseInput.vue'
import BaseInputGroup from './components/Typography/UiInput/BaseInputGroup.vue'
import './main.css'

const app = createApp(App)

app.component('BaseButton', BaseButton)
app.component('BaseInput', BaseInput)
app.component('BaseInputGroup', BaseInputGroup)

app
  .use(router)
  .use(store)
  .mount('#app')
