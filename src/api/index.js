import request from '@/utils/request'

//配置列表
export function getGlobalData(dictType) {
  return request({
    url: '/index/getSysDictDataList',
    method: 'post',
    data:{
      dictType,
    }
  })
}

//注册
export function register(data) {
  return request({
    url: '/index/register',
    method: 'post',
    data
  })
}

//登录
export function login(data) {
  return request({
    url: '/index/login',
    method: 'post',
    data
  })
}

//登出
export function logout(accessToken) {
  return request({
    url: '/user/logout',
    method: 'post',
    data:{
      accessToken
    }
  })
}

//发送验证码
export function sendCode(data) {
  return request({
    url: '/index/sendCode',
    method: 'post',
    data
  })
}

//忘记密码
export function findPassword(data) {
  return request({
    url: '/index/findPassword',
    method: 'post',
    data
  })
}

export function getUserInfo(data) {
  return request({
    url: '/user/selectOne',
    method: 'post',
    data
  })
}

export function saveRiskTest(data) {
  return request({
    url: '/userRiskLog/saveOne',
    method: 'post',
    data,
  })
}

