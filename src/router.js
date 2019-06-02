import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const Home = () => import('@/views/home.vue');
const Contact = () => import('@/views/contact.vue');
const Introduction = () => import('@/views/introduction.vue');


export default new Router({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '*',
            redirect: '/home',
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
        },
        {
            path: '/introduction',
            name: 'introduction',
            component: Introduction,
        },
    ]
})
