import request from '@/utils/request'

export function getArticleList({ articleType, pageNum, pageSize=10, }) {
  return request({
    url: `/index/sysArticle/selectList/${pageNum}/${pageSize}`,
    method: 'post',
    data: {
      articleType
    },
  })
}


