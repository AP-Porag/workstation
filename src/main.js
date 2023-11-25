import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import Unicon from 'vue-unicons';
import { uniMusic, uniCarWash } from 'vue-unicons/dist/icons';
import router from './router'
import "bootstrap/dist/css/bootstrap.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

Unicon.add([uniMusic, uniCarWash]);

const app = createApp(App)

// Use plugin defaults (optional)
app.use(VueSweetalert2);
app.use(Unicon);
app.use(setupCalendar, {})
app.use(createPinia())
app.use(router)

const toastOptions = {
    // You can set your default options here
};
app.use(Toast, toastOptions);

// Use the components
app.component('VCalendar', Calendar)
app.component('VDatePicker', DatePicker)


app.mount('#app')

import "bootstrap/dist/js/bootstrap.js";