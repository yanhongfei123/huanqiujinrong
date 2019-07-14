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

//税务申明
export function updateUserBase(data) {
  return request({
    url: '/user/updateUserBase',
    method: 'post',
    data: data
  })
}

//上传图片
export function upload(data) {
  return request({
    url: '/file/upload',
    headers: {
      'Content-Type': 'multipart/form-data'// || 'application/x-www-form-urlencoded'
    },
    // transformRequest: [function (data) {
    //   let ret = ''
    //   for (let it in data) {
    //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //   }
    //   return ret
    // }],
    method: 'post',
    withCredentials: true,
    data: data
  })
}