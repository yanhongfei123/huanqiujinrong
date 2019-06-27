import {
    login,
    logout,
    getUserInfo,
} from '@/api'
import {
    getToken,
} from '@/utils/auth'
import Cookies from 'js-cookie';

const user = {
    state: {
        showmenu: false,
        token: getToken(),
        language: Cookies.get('language') || 'zh',
        userInfo: {},
    },

    mutations: {
        SHOW_MENU: (state, showmenu) => {
            state.showmenu = showmenu;
        },
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_LANGUAGE: (state, language) => {
            state.language = language;
            Cookies.set('language', language)
        },
        SET_USERINFO: (state, userInfo) => {
            state.userInfo = userInfo;
        },

    },

    actions: {
        setLanguage({
            commit
        }, language) {
            commit('SET_LANGUAGE', language)
        },
        showMenu({
            commit
        }, showmenu) {
            commit('SHOW_MENU', showmenu)
        },
        Login({ commit }, params) {
            return new Promise((resolve, reject) => {
                login(params).then(response => {
                    const data = response.data;
                    Cookies.set('accessToken', data.accessToken);
                    commit('SET_TOKEN', data.accessToken);
                    resolve(response);
                }).catch(error => {
                    reject(error);
                });
            });
        },

        // 登出
        LogOut({ commit }) {
            return new Promise((resolve, reject) => {
              logout(Cookies.get('accessToken')).then(() => {
                commit('SET_TOKEN', '');
                Cookies.remove('accessToken');
                resolve();
              }).catch(error => {
                reject(error);
              });
            });
        },

        GetUserInfo({ commit }) {
            return new Promise((resolve, reject) => {
              getUserInfo().then((res) => {
                commit('SET_USERINFO', res.data);
                resolve();
              }).catch(error => {
                reject(error);
              });
            });
        },

    }
};

export default user;