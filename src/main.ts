import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseButton from './components/Typography/UiButton/BaseButton.vue'
import BaseInput from './components/Typography/UiInput/BaseInput.vue'
import BaseInputGroup from './components/Typography/UiInput/BaseInputGroup.vue'
import './main.css'

Vue.config.productionTip = false

Vue.component('BaseButton', BaseButton)
Vue.component('BaseInput', BaseInput)
Vue.component('BaseInputGroup', BaseInputGroup)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
