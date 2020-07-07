import '@/assets/style/reset.css' // 适配css
import '@/assets/style/swiper.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './lang' // Internationalization
import Cookies from 'js-cookie';

import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);
import * as filters from './filters' // global filters
import { getGlobalData } from '@/api';

Vue.prototype.getGlobalData = getGlobalData;

Vue.use(Element, {
    size: 'medium', // set element-ui default size
    i18n: (key, value) => i18n.t(key, value)
});

// register global utility filters.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
	console.log(to)
	if (!['/home', '/product', '/why'].includes(to.path)) {
		Cookies.set('language', 'Ft')
	}
	next()
});


// 路由跳转后页面回到顶部
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
	if (!['/home', '/product', '/why'].includes(to.path)) {
		Cookies.set('language', 'Ft')
	}
});

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');