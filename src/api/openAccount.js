import request from '@/utils/request'

//提交个人信息
export function saveUserInfo(data) {
  return request({
    url: '/user/saveOne',
    method: 'post',
    data: data
  })
}

