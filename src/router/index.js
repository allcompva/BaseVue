/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
<<<<<<< HEAD
            import ( /* webpackChunkName: "Home" */ '../views/Home.vue')
=======
            import ( /* webpackChunkName: "Home" */ '../views/Home.vue'),
>>>>>>> ba505ad40ac95d1d9237b2f541711673a885d338
    },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,

    routes
})
export default router