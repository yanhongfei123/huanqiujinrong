import request from '@/utils/request'

// 账户总览
export function getAccountDetail(data) {
  return request({
    url: '/user/getAccountDetail',
    method: 'post',
    data
  })
}

// 资金记录
export function getUserWithdrawal({ pageNo, pageSize, startTime, endTime  }) {
  return request({
    url: `/user/getUserWithdrawal/${pageNo}/${pageSize}`,
    method: 'post',
    data: {
		startTime,
		endTime
	}
  })
}

// 提取资金
export function updateUserWithdrawal(data) {
  return request({
    url: '/user/updateUserWithdrawal',
    method: 'post',
    data
  })
}

// 资金组合-------- 交易记录
export function getUserContract({ pageNo, pageSize, startTime, endTime  }) {
  return request({
    url: `/user/getUserContract/${pageNo}/${pageSize}`,
    method: 'post',
    data: {
		startTime,
		endTime
	}
  })
}