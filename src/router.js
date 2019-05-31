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
            path: '/demo',
            name: 'demo',
            component: () => import('@/views/demo/index.vue'),
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/home.vue'),
        },        
    ]
})
