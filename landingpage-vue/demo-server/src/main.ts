import { createApp } from 'vue'
import App from './App.vue'
import getfox_landingpage from '@getfoxio/landingpage-vue'

import './assets/main.css'

const app = createApp(App)
app.use(getfox_landingpage)
app.mount('#app')
