import request from '@/utils/request'

// 存款通知
export function editRemittanceNotice(data) {
  return request({
    url: '/user/editRemittanceNotice',
    method: 'post',
    data
  })
}