<template>
  <div class>
    <div class="article-list">
      <div @click="goArticle(val)" v-for="(val,index) in articleList" :key="index" class="article-item">
        <div class="r-wrap">
          <div class="title">{{val | filterByLanguage('articleTitle')}}</div>
          <div class="des">{{val | filterByLanguage('articleAbstract')}}</div>
          <div class="b-wrap">
            <div class="time">{{val.createTime | parseTime}}</div>
            <div class="has-read">{{$t('messageCenter.text2')}}：{{filterType(val.articleType)}}</div>
          </div>
        </div>
      </div>
      <div class="no-data tc" v-if="articleList.length == 0">暂无消息</div>
    </div>
    <el-pagination
      @current-change="currentChange"
      v-if="total>1"
      background
      layout="prev, pager, next"
      :page-size="1"
      :current-page="currentPage"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import { filterByLanguage } from '@/filters/index.js'
import {getUserArticleList} from '@/api/message';
export default {
  name: "",
  components: {},
  computed: {},
  data() {
    return {
      typeList:[],
      articleList: [],
      total: 1,
      currentPage: 1,
    };
  },
  methods: {
    goArticle(id) {
      this.$router.push(`/article/${id}`);
    },
    getUserArticleList(pageNum){
      getUserArticleList({
        pageNum
      }).then(res => {
        this.articleList = res.data.list;
        this.total = res.data.total;
      });
    },
    currentChange(pageNum) {
      this.currentPage = pageNum;
      this.getUserArticleList(pageNum);
    },
    filterType(type){
      var val = this.typeList.filter((item) => item.dictValue == type)[0];
      return filterByLanguage(val, 'dictLabel');
    }
  },
  async mounted() {
    var res = await this.getGlobalData("sys_article_type");
    var list = res.data.list;
    this.typeList = list;
    this.getUserArticleList(1);
  }
};
</script>

<style lang="scss">
.article-list {
  .no-data{
    margin-top: 60px;
    font-size: 22px;
    color: #777983;
  }
  .article-item {
    padding: 20px 0;
    border-bottom: 1px solid rgba(220, 220, 220, 1);
  }
  .r-wrap {
    .title {
      margin-bottom: 20px;
      font-size: 25px;
      font-weight: bold;
      color: #333;
      line-height: 54px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .des {
      font-size: 20px;
      line-height: 30px;
      color: #444857;
      margin-bottom: 20px;
    }
  }
  .b-wrap {
    color: #444857;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    .has-read {
      padding-left: 30px;
    }
  }
}
</style>
