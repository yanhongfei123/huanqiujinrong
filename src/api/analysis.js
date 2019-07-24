import request from '@/utils/request'

// 预测
export function getForecast(data) {
  return request({
    url: '/index/getForecast',
    method: 'post',
    data
  })
}

// 投资组合
export function getInvestment(data) {
  return request({
    url: '/index/getInvestment',
    method: 'post',
    data
  })
}


// 存款通知
export function editRemittanceNotice(data) {
  return request({
    url: '/userAccount/editRemittanceNotice',
    method: 'post',
    data
  })
}