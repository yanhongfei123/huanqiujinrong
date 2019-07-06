<template>
  <div class>
    <div class="article-list">
      <div v-for="(val,index) in articleList" :key="index" class="article-item">
        <div class="r-wrap">
          <div class="title">{{val.title}}</div>
          <div class="des">{{val.des}}</div>
          <div class="b-wrap">
            <div class="time">{{val.time}}</div>
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
import {getUserNotice} from '@/api/message';
export default {
  name: "",
  components: {},
  computed: {},
  data() {
    return {
      articleList: [],
      total: 1,
      currentPage: 1,
    };
  },
  methods: {
    getUserNotice(pageNum){
      getUserNotice({
        pageNum
      }).then(res => {
        this.articleList = res.data.list;
        this.total = res.data.total;
      });
    },
    currentChange(pageNum) {
      this.currentPage = pageNum;
      this.getUserNotice(pageNum);
    },
  },
  mounted(){
    this.getUserNotice(1)
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
  }
}
</style>
