import { createApp } from 'vue'


import App from './App.vue'
import router from './router'
import { CAlert } from '@coreui/vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'

import CoreuiVue from '@coreui/vue'


const app = createApp(App)
app.use(router)
app.use(CoreuiVue)
app.use(CAlert)





app.mount('#app')
