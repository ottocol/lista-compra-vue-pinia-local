import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' 
import Colada, { PiniaColadaPlugin } from 'colada-plugin';
import "./assets/styles.css"


const app = createApp(App)
app.use(router)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
pinia.use(PiniaColadaPlugin)
app.use(Colada)
app.mount('#app')
