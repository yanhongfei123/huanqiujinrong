import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const Demo = () => import('@/views/demo/index.vue');
const Home = () => import('@/views/home.vue');
const Contact = () => import('@/views/contact.vue');
const Introduction = () => import('@/views/introduction.vue');
const Analysis = () => import('@/views/analysis/index.vue');
const Conditions = () => import('@/views/conditions.vue');
const Questions = () => import('@/views/questions.vue');
const Result = () => import('@/views/analysis/result.vue');
const Answer = () => import('@/views/analysis/answer.vue');
const Analys = () => import('@/views/analysis/analysis.vue');
const Find = () => import('@/views/find.vue');
const Article = () => import('@/views/article.vue');

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
        {
            path: '/analysis',
            name: 'analysis',
            component: Analysis,
            children: [
                {
                    path: 'analys',
                    name: 'analys',
                    component: Analys,
                },
                {
                    path: 'answer',
                    name: 'answer',
                    component: Answer,
                },
                {
                    path: 'result',
                    name: 'result',
                    component: Result,
                }
            ]
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
        {
            path: '/find',
            name: 'find',
            component: Find,
        },
        {
            path: '/article',
            name: 'article',
            component: Article,
        },
    ]
})
