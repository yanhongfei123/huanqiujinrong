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
    url: '/user/getInvestment',
    method: 'post',
    data
  })
}