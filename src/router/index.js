/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
<<<<<<< HEAD
    path: '/',
    name: 'Home',
    component: () =>
        import ( /* webpackChunkName: "Home" */ '../views/Home.vue'),
    meta: {
        ambiente: []
    }
}, ]
=======
        path: '/',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "Home" */ '../views/Home.vue')
    },
]
>>>>>>> 0e66ff8fe0051a596ea1a909d36f61ffe0341e31
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,

    routes
})
export default router