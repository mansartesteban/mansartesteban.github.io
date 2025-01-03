import "@/assets/styles/style.css"

import { createApp } from 'vue'
import App from './App.vue'

import router from "@/router"

const app = createApp(App)

router(app)

app.mount("#app")