import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* Custom: Import Bootstrap framework CSS styles and JavaScript bundles */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './style.css'

createApp(App).use(router).mount('#app')