import request from '@/utils/request'

//提交个人信息
export function saveUserInfo(data) {
  return request({
    url: '/user/saveOne',
    method: 'post',
    data: data
  })
}

export function getUserInfo(data) {
  return request({
    url: '/user/getUser',
    method: 'get',
    data
  })
}

//提交其他信息
export function saveUserBase(data) {
  return request({
    url: '/user/saveUserBase',
    method: 'post',
    data: data
  })
}

//获取其他信息
export function getUserBase(data) {
  return request({
    url: '/user/getUserBase',
    method: 'get',
    data: data
  })
}

//添加规管
export function saveUserRegulation(data) {
  return request({
    url: '/user/saveUserRegulation',
    method: 'post',
    data: data
  })
}

//获取规管信息
export function getUserRegulation(data) {
  return request({
    url: '/user/getUserRegulation',
    method: 'get',
    data: data
  })
}
