import { createApp } from 'vue'
import './assets/style/general.scss'
import App from './App.vue'

/* Importazione della libreria di font awesome*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Icone Regular Font Awesome
import { 
    faStar as faStarSolid,
    faSpinner as faSpinnerSolid
} from '@fortawesome/free-solid-svg-icons'

// Icone Solid Font Awesome
import { 
    faStar as faStarRegular, 
    faStarHalfStroke  as faStarHalfStrokeRegular
} from '@fortawesome/free-regular-svg-icons'


library.add(faStarRegular, faStarSolid, faStarHalfStrokeRegular, faSpinnerSolid)
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')