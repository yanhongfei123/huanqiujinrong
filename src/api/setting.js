import request from '@/utils/request'

// 修改登录密码
export function resetPassword(data) {
  return request({
    url: '/user/resetPassword',
    method: 'post',
    data,
  })
}

// 设置/修改交易密码
export function resetDealPWD(data) {
  return request({
    url: '/userAccount/resetDealPWD',
    method: 'post',
    data,
  })
}
