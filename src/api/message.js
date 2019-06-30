import request from '@/utils/request'

export function getUserNotice({ pageNum, pageSize=10, }) {
  return request({
    url: `/myMsg/getUserNotice/${pageNum}/${pageSize}`,
    method: 'post',
  })
}


export function getUserArticleList({ pageNum, pageSize=10, }) {
  return request({
    url: `/myMsg/getUserArticleList/${pageNum}/${pageSize}`,
    method: 'post',
  })
}


export function getMyMsg({ pageNum, pageSize=10, }) {
  return request({
    url: `/myMsg/getMyMsg/${pageNum}/${pageSize}`,
    method: 'post',
  })
}