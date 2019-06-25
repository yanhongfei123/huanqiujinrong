import request from '@/utils/request'

//提交个人信息
export function saveUserInfo(data) {
  return request({
    url: '/user/saveOne',
    method: 'post',
    data: data
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