import {
    loginByUsername,
    logout,
    getUserInfo
} from '@/api/login'
import {
    getToken,
    setToken,
    removeToken
} from '@/utils/auth'
import Cookies from 'js-cookie';

const user = {
    state: {
        showtoast: false,
        title: '',
        token: getToken(),
        language: Cookies.get('language') || 'zh',
    },

    mutations: {
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
            state.language = language
            Cookies.set('language', language)
        }

    },

    actions: {
        setLanguage({
            commit
        }, language) {
            commit('SET_LANGUAGE', language)
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

        // Login({ commit, state }) {
        //     return new Promise((resolve, reject) => {
        //         authLogin(state.token).then(response => {
        //             const data = response.data;
        //             commit('SET_AVATAR', data.avatar);
        //             resolve(response);
        //         }).catch(error => {
        //             reject(error);
        //         });
        //     });
        // },



        // // 邮箱登录
        // LoginByEmail({ commit }, userInfo) {
        //   const email = userInfo.email.trim();
        //   return new Promise((resolve, reject) => {
        //     loginByEmail(email, userInfo.password).then(response => {
        //       const data = response.data;
        //       Cookies.set('X-Ivanka-Token', response.data.token);
        //       commit('SET_TOKEN', data.token);
        //       commit('SET_EMAIL', email);
        //       resolve();
        //     }).catch(error => {
        //       reject(error);
        //     });
        //   });
        // },


        //  // 获取用户信息
        // GetInfo({ commit, state }) {
        //   return new Promise((resolve, reject) => {
        //     getInfo(state.token).then(response => {
        //       const data = response.data;
        //       commit('SET_ROLES', data.role);
        //       commit('SET_NAME', data.name);
        //       commit('SET_AVATAR', data.avatar);
        //       resolve(response);
        //     }).catch(error => {
        //       reject(error);
        //     });
        //   });
        // },

        // // 登出
        // LogOut({ commit, state }) {
        //   return new Promise((resolve, reject) => {
        //     logout(state.token).then(() => {
        //       commit('SET_TOKEN', '');
        //       Cookies.remove('X-Ivanka-Token');
        //       resolve();
        //     }).catch(error => {
        //       reject(error);
        //     });
        //   });
        // },

    }
};

export default user;