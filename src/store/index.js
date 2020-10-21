 import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user';
import getters from './getters';
import personal from './modules/personal';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        personal,
        
      },
      state: {},
      getters,
      actions: {},
      mutations: {},
})
