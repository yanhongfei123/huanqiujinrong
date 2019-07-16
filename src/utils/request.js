import axios from 'axios';
import Cookies from 'js-cookie';
import { Loading, Message, MessageBox } from 'element-ui';
import store from '@/store';
import { getToken } from '@/utils/auth';
import router from '../router';
import config from './config';
// create an axios instance
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? config.baseUrl : '/api/', // api的base_url
  timeout: 12000 // request timeout
});
var loadingInstance;

service.interceptors.request.use(config => {
  loadingInstance = Loading.service({
    lock: true,
    background: 'rgba(0, 0, 0, 0.5)'
  });
  // Do something before request is sent
  if (store.getters.token) {
    config.headers['accessToken'] = getToken();
  } else if (config.url.indexOf('login') == -1) {
    // MessageBox.confirm('请先登录', '提示', {
    //   confirmButtonText: '去登录',
    //   cancelButtonText: '取消',
    //   type: 'warning'
    // }).then(() => {
    //   router.push('/login');
    // });
  }
  return config;
}, error => {
  loadingInstance.close();
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
});
// respone interceptor
service.interceptors.response.use(
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过xmlhttprequest来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    loadingInstance.close();
    const res = response.data;
    const whitelist = ['/home', '/find'];// 列表里的页面没登录不自动跳转
    if (res.code !== '0000') {
      switch (res.code) {
        case '0005':
          if (!whitelist.includes(location.hash.substr(1))) {
            router.push('/login');
          }
          // MessageBox.confirm('登录已过期，请重新登录', '提示', {
          //   confirmButtonText: '重新登录',
          //   cancelButtonText: '取消',
          //   type: 'warning'
          // }).then(() => {
          //   router.push('/login');
          //   // store.dispatch('LogOut').then(() => {
          //   //   location.reload() // 为了重新实例化vue-router对象 避免bug
          //   // });
          // });
          break;

        case '0220':
          MessageBox.confirm('该手机号/邮箱尚未注册', '提示', {
            confirmButtonText: '我知道了',
            showCancelButton: false,
            type: 'warning'
          });
          break;

        case '0225':
          MessageBox.confirm('该手机号/邮箱已注册', '提示', {
            confirmButtonText: '我知道了',
            showCancelButton: false,
            type: 'warning'
          });
          break;

        default:
          MessageBox.confirm(res.msg, '提示', {
            confirmButtonText: '我知道了',
            showCancelButton: false,
            type: 'warning'
          });

      }

      return Promise.reject('error');
    } else {
      return response.data;
    }
  },
  error => {
    loadingInstance.close();
    console.log('err' + error); // for debug
    let message = Cookies.get('language') == 'Ft' ? '服務器繁忙，請稍後重試...' : '服务器繁忙，请稍后重试...';
    Message({
      message: message,
      type: 'error',
      duration: 2 * 1000
    });
    return Promise.reject(error);
  });

export default service;
