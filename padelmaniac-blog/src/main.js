import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue3 } from 'bootstrap-vue-3'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faTwitter, faYoutube, faInstagram} from '@fortawesome/free-brands-svg-icons'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

/* add icons to the library */
library.add(faTwitter, faInstagram, faYoutube)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(BootstrapVue3).use(store).use(router).mount('#app')
