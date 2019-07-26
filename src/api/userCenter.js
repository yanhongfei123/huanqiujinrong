import request from '@/utils/request'

// 存款通知
export function editRemittanceNotice() {
  return request({
    url: '/user/editRemittanceNotice',
    method: 'post',
    data:{}
  })
}

export function getMyAccount() {
  return request({
    url: '/user/myAccount',
    method: 'post',
    data:{}
  })
}

export function updateAccount(data) {
  return request({
    url: '/user/updateAccount',
    method: 'post',
    data,
  })
}