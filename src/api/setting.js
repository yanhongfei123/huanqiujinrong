import request from '@/utils/request'

export function resetPassword(data) {
  return request({
    url: '/user/resetPassword',
    method: 'post',
    data,
  })
}
