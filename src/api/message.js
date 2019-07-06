import request from '@/utils/request'

// 我的消息
export function getMyMsg({ pageNum, pageSize=10, }) {
  return request({
    url: `/myMsg/getMyMsg/${pageNum}/${pageSize}`,
    method: 'post',
  })
}

// 资讯列表
export function getUserArticleList({ pageNum, pageSize=10, }) {
  return request({
    url: `/myMsg/getUserArticleList/${pageNum}/${pageSize}`,
    method: 'post',
  })
}

// 站内公告
export function getUserNotice({ pageNum, pageSize=10, }) {
  return request({
    url: `/myMsg/getUserNotice/${pageNum}/${pageSize}`,
    method: 'post',
  })
}