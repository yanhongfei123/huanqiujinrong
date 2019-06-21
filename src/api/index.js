import request from '@/utils/request'

export function register(data) {
  return request({
    url: '/index/register',
    method: 'post',
    data
  })
}

export function login(data) {
  return request({
    url: '/index/login',
    method: 'post',
    data
  })
}

export function sendCode(data) {
  return request({
    url: '/index/sendCode',
    method: 'post',
    data
  })
}


export function findPassword(data) {
  return request({
    url: '/index/findPassword',
    method: 'post',
    data
  })
}

// export function getUserInfo(token) {
//   return request({
//     url: '/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

