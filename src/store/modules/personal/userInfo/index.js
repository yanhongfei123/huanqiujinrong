import {
    login,
    logout,
    getUserInfo,
} from '@/api'
import {
    getToken,
} from '@/utils/auth'
import Cookies from 'js-cookie';

const userInfo = {
    namespaced: true,
    state: {
        title: '我是title',
        showmenu: false,
        token: getToken(),
        language: Cookies.get('language') || 'zh',
        userInfo: {},
    },
    getters: {
        token: state => state.token,
        showmenu: state => state.showmenu,
        title: state => state.title,
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
            commit,
            dispatch
        }, language) {
            commit('SET_LANGUAGE', language)
        },
        showMenu({
            commit,
            dispatch
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
        LogOut({ commit, dispatch }) {
            return new Promise((resolve, reject) => {
                logout(Cookies.get('accessToken')).then(() => {
                    commit('SET_TOKEN', '');
                    Cookies.remove('accessToken');
                    Cookies.remove('language');
                    resolve();
                }).catch(error => {
                    reject(error);
                });
            });
        },

        GetUserInfo({ commit, dispatch }) {
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

export default userInfo;