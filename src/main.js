import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Toasted from 'vue-toasted'
import { store } from './store'
import cart from './mixins/cart'
import Particles from "particles.vue";
Vue.use(Particles);
Vue.mixin(cart)
Vue.use(Toasted)
//const stripe = Stripe('sk_test_BjVmdEEoMzpPa9poTLPJdkXF00QvTWB80s');
//console.log(Stripe)
const error_options = {
    type: 'error',
    position: 'bottom-center',
    singleton: true,
    theme: 'bubble',
    duration: 5000,
    onClick: (e, toastObject) => {
        toastObject.goAway(0)
    }
}
const success_options = {
    type: 'success',
    singleton: true,
    position: 'bottom-center',
    duration: 5000,
    onClick: (e, toastObject) => {
        toastObject.goAway(0)
    }
}
Vue.toasted.register('error',
    (payload) => {
        // if there is no message passed show default message
        if (!payload.message) {
            return 'Oops.. Something Went Wrong..'
        }
        // if there is a message show it with the message
        return payload.message
    },
    error_options
)
Vue.toasted.register('success',
    (payload) => {
        // if there is no message passed show default message
        if (!payload.message) {
            return 'Greate.. Proceed Successfully..'
        }
        // if there is a message show it with the message
        return payload.message
    },
    success_options
)


Vue.config.productionTip = false

new Vue({
    data: {
        URL_ROOT: 'https://5ineprojects.com/Rapidea/backend/api/',
        URL_IMAGES: 'https://5ineprojects.com/Rapidea/backend/api/uploads/',
        Home_link: 'http://rapidea.5ineprojects.com/',
        OC_API: '83e8e742fcec49fbbbcd7cfca4397a53',
        auth: { Authorization: localStorage.getItem('token') }

    },
    store,
    //stripe,
    router,
    render: h => h(App)
}).$mount('#app')