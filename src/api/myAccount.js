import request from '@/utils/request'

// 账户总览
export function getAccountDetail(data) {
  return request({
    url: '/user/getAccountDetail',
    method: 'post',
    data
  })
}