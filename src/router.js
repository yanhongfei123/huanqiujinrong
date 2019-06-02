import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const Home = () => import('@/views/home.vue');
const Contact = () => import('@/views/contact.vue');
const Introduction = () => import('@/views/introduction.vue');
const Analysis = () => import('@/views/analysis.vue');
const Conditions = () => import('@/views/conditions.vue');
const Questions = () => import('@/views/questions.vue');

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
            path: '/analysis',
            name: 'analysis',
            component: Analysis,
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
        {
            path: '/conditions',
            name: 'conditions',
            component: Conditions,
        },
        {
            path: '/questions',
            name: 'questions',
            component: Questions,
        },
    ]
})
