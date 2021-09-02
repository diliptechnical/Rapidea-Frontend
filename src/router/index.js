import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../views/login'
import myaccount from '../views/myaccount'
import Home from '../views/Home.vue'
// var user = localStorage.getItem('user')
Vue.use(VueRouter)
const routes = [{
    path: '/',
    name: 'Home',
    component: Home
},
{
    path: '/product/:name?',
    name: 'Product',
    component: () =>
        import('../views/product.vue')
},
{
    path: '/testmk',
    name: 'Testmk',
    component: () =>
        import('../views/Testmk.vue')
},
{
    path: '/productDetail/:Id?',
    name: 'productDetail',

    component: () =>
        import('../views/productDetail.vue')
},
{
    path: '/login/',
    name: 'login',
    component: () =>
        import('../views/login.vue')
},
{
    path: '/social/',
    name: 'social',
    component: () =>
        import('../views/social.vue')
},
{
    path: '/registration/',
    name: 'registration',
    component: () =>
        import('../views/registration.vue')
},
{
    path: '/myaccount/',
    name: 'myaccount',
    component: myaccount ,
    // component: user ? myaccount : Login,
},
{
    path: '/aboutus/',
    name: 'aboutus',
    component: () =>
        import('../views/aboutus.vue')
},

{
    path: '/wishlist/',
    name: 'wishlist',
    component: () =>
        import('../views/wishlist.vue')
},
{
    path: '/contactus',
    name: 'contactus',
    component: () =>
        import('../views/contactus.vue')
},
{
    path: '/privecypolicy',
    name: 'privecypolicy',
    component: () =>
        import('../views/privecypolicy.vue')
},
{
    path: '/TermsConditions',
    name: 'TermsConditions',
    component: () =>
        import('../views/TermsConditions.vue')
},
{
    path: '/cart',
    name: 'cart',
    component: () =>
        import('../views/cart.vue')
},
{
    path: '/test',
    name: 'test',
    component: () =>
        import('../views/test.vue')
},
{
    path: '/checkout',
    name: 'checkout',
    component: () =>
        import('../views/checkout.vue')
},
{
    path: '/success/:name',
    name: 'success',
    component: () =>
        import('../views/success.vue')
},
{
    path: '/orderDetail',
    name: 'orderDetail',
    component: () =>
        import('../views/orderDetail.vue')
},
{
    path: '/forget',
    name: 'forget',
    component: () =>
        import('../views/forget.vue')
},
{
    path: '/resetpassword',
    name: 'resetpassword',
    component: () =>
        import('../views/resetpassword.vue')
}

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router