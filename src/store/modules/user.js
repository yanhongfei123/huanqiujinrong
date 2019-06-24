import {
    login,
    logout,
} from '@/api'
import {
    getToken,
    setToken,
    removeToken
} from '@/utils/auth'
import Cookies from 'js-cookie';

const user = {
    state: {
        showmenu: false,
        showtoast: false,
        title: '',
        token: getToken(),
        language: Cookies.get('language') || 'zh',
    },

    mutations: {
        SHOW_MENU: (state, showmenu) => {
            state.showmenu = showmenu;
        },
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SHOW_TOAST: (state, title) => {
            state.showtoast = true;
            state.title = title;
        },
        HIDE_TOAST: (state) => {
            state.showtoast = false;
            state.title = '';
        },
        SET_LANGUAGE: (state, language) => {
            state.language = language;
            Cookies.set('language', language)
        }

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
        showToast({
            commit
        }, title) {
            return new Promise((resolve, reject) => {
                commit('SHOW_TOAST', title);
                resolve();
                setTimeout(() => {
                    commit('HIDE_TOAST');
                }, 2000)
            });
        },

        Login({ commit, state }, params) {
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
        LogOut({ commit, state }) {
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

        // // 邮箱登录
        // LoginByEmail({ commit }, userInfo) {
        //   const email = userInfo.email.trim();
        //   return new Promise((resolve, reject) => {
        //     loginByEmail(email, userInfo.password).then(response => {
        //       const data = response.data;
        //       Cookies.set('X-Ivanka-Token', response.data.accessToken);
        //       commit('SET_TOKEN', data.accessToken);
        //       commit('SET_EMAIL', email);
        //       resolve();
        //     }).catch(error => {
        //       reject(error);
        //     });
        //   });
        // },

    }
};

export default user;