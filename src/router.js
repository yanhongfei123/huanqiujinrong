import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        // {
        //     path: '/guide',
        //     component: Layout,
        //     redirect: '/guide/index',
        //     children: [{
        //       path: 'index',
        //       component: () => import('@/views/guide/index'),
        //       name: 'guide',
        //       meta: { title: 'guide', icon: 'guide', noCache: true }
        //     }]
        // },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/home.vue'),
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('@/views/contact.vue'),
        },
        {
            path: '/introduction',
            name: 'introduction',
            component: () => import('@/views/introduction.vue'),
        },         
    ]
})
