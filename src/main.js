import { createApp } from 'vue'
import './assets/style/general.scss'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { 
    faStar as faStarSolid
} from '@fortawesome/free-solid-svg-icons'

import { 
    faStar as faStarRegular, 
    faStarHalfStroke  as faStarHalfStrokeRegular
} from '@fortawesome/free-regular-svg-icons'


library.add(faStarRegular, faStarSolid, faStarHalfStrokeRegular)
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')