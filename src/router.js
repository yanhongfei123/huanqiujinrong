import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Home = () => import('@/views/home.vue');//首页
const Contact = () => import('@/views/contact.vue');// 联系我们
const Introduction = () => import('@/views/introduction.vue');//介绍
const Analysis = () => import('@/views/analysis/index.vue');//分析
const Conditions = () => import('@/views/conditions.vue');//条款声明
const Questions = () => import('@/views/questions.vue'); //问答
const Result = () => import('@/views/analysis/result.vue');//
const Answer = () => import('@/views/analysis/answer.vue');//
const Analys = () => import('@/views/analysis/analysis.vue');//
const Find = () => import('@/views/find.vue');//
const Article = () => import('@/views/article.vue');//文章详情

const Register = () => import('@/views/register.vue'); //注册
const Login = () => import('@/views/login.vue'); //登录
const ResetPwd = () => import('@/views/resetPwd.vue'); //忘记密码
const UserCenter = () => import('@/views/userCenter.vue'); //个人中心
export default new Router({
    routes: [{
            path: '/register',
            name: 'register',
            component: Register,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/resetPwd',
            name: 'resetPwd',
            component: ResetPwd,
        },
        {
            path: '/userCenter',
            name: 'userCenter',
            component: UserCenter,
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
