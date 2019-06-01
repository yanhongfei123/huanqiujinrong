import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const Demo = () => import('@/views/demo/index.vue');
const Home = () => import('@/views/home.vue');


export default new Router({
    routes: [
        {
            path: '/demo',
            name: 'demo',
            component: Demo,
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '*',
            redirect: '/home',
        },

    ]
})
