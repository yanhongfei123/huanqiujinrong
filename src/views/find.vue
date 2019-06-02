<template>
  <div class="page-find">
    <header>
      <headerNav path="/find"></headerNav>
    </header>
    <section class="barner">
      <div class="barner-content">
        <div class="barner-title-en">LATEST NEWS</div>
        <div class="barner-title">最新动态</div>
      </div>
    </section>
    <section class="content">
      <div class="com-width">
        <div class="article-nav">
          <div class="art-l">全部最新动态</div>
          <div class="tab-wrap">
            <div
              @click="changeTab(index)"
              :class="[articleType===index?'active':'']"
              v-for="(val,index) in typeList"
              :key="index"
              class="tab-item"
            >{{val}}</div>
          </div>
        </div>
        <div class="article-list">
          <div @click="goArticle"
               v-for="(val,index) in articleList"
              :key="index"
              class="article-item">
              <div :style="{backgroundImage: 'url(' + val.url + ')'}" class="l-wrap"></div>
              <div class="r-wrap">
                <div class="title">{{val.title}}</div>
                <div class="des">{{val.des}}</div>
                <div class="b-wrap">
                  <div class="time">{{val.time}}</div>
                  <div class="has-read">{{val.read}}次阅读</div>
                </div>
              </div>
          </div>
        </div>
        <el-pagination background layout="prev, pager, next" :total="500"></el-pagination>
      </div>
    </section>
    <footerBar></footerBar>
  </div>
</template>

<script>
// @ is an alias to /src
import headerNav from "@/components/nav/nav.vue";
import footerBar from "@/components/footer/footer.vue";

export default {
  name: "contact",
  components: {
    headerNav,
    footerBar
  },
  computed: {},
  data() {
    return {
      articleType: 0,
      typeList: ["文章资讯", "活动推广", "媒体报道"],
      articleList: [
        {
          url:require('../assets/images/banner03.jpg'),
          title: '走出明星投资人的交易陷阱',
          des: '(产品名称)最新产品Smart Investment Engine，以AI算法为基础的投资生命周期管理工具，上线了！',
          time: '2019-05-08 14:00',
          read: 2000
        },
        {
          url:require('../assets/images/banner03.jpg'),
          title: '除了贪婪和恐惧，希望也是理性投资的敌人。',
          des: '(产品名称)最新产品Smart Investment Engine，以AI算法为基础的投资生命周期管理工具，上线了！',
          time: '2019-05-08 14:00',
          read: 2000
        },
        {
          url:require('../assets/images/banner03.jpg'),
          title: '除了贪婪和恐惧，希望也是理性投资的敌人除了贪婪和恐惧，希望也是理性投资的敌希望也是理性投资的敌人除了贪人。',
          des: '(产品名称)最新产品Smart Investment Engine，以AI算法为基础的投资生命周期管理工具，上线了！',
          time: '2019-05-08 14:00',
          read: 2000
        }
      ]
    };
  },
  methods: {
    changeTab(index) {
      this.articleType = index;
    },
    goArticle(){
      this.$router.push('/article')
    }
  }
};
</script>

<style lang="scss">
.page-find {
  .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
    background: #fff;
  }
  .el-pagination.is-background .el-pager li:hover{
    color: #d51d26;
  }
  .el-pagination {
    text-align: center;
    margin-top: 60px;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #d51d26;
  }
  .barner {
    position: relative;
    height: 400px;
    background: url("../assets/images/banner03.jpg") no-repeat center;
    background-size: cover;
    .barner-content {
      width: 1180px;
      margin: 0 auto;
      position: relative;
      color: #fff;
      top: 86px;
    }
    .barner-title-en {
      font-size: 95px;
      font-weight: 800;
      color: #fff;
      line-height: 137px;
      opacity: 0.3;
    }
    .barner-title {
      font-size: 64px;
      color: #fff;
      line-height: 92px;
    }
  }
  .content {
    padding: 120px 0 80px;
    background: #f9f9f9;
    .com-width {
      font-size: 20px;
      font-weight: 400;
    }
  }
  .article-nav{
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #D8D8D8;
  }
  .art-l{
    font-size:28px;
    font-weight: bold;
    color: #333;
  }
  .tab-wrap{
    display: flex;
    justify-content: space-between;
    .tab-item:nth-of-type(2){
      margin: 0 40px;
    }
    .tab-item{
      position: relative;
      font-size:24px;
      color: #999;
       font-weight: bold;
      cursor: pointer;
      &.active, &:hover{
        color: #333;
      }
      &.active{
        &::after{
          content: '';
          position: absolute;
          width: 60px;
          height: 2px;
          left: 50%;
          bottom: -21px;
          margin-left: -30px;
          background: #D51D26;
        }
      }
    }
  }
  .article-list{
    .article-item{
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
    }
    .l-wrap{
      width:390px;
      height:260px;
      margin-right: 60px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .r-wrap{
      width: 730px;
      .title{
        height: 108px;
        margin-bottom: 14px;
        font-size:36px;
        font-weight:bold;
        color:#333;
        line-height:54px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .des{
        font-size: 20px;
        line-height: 30px;
        color: #444857;
        margin-bottom: 50px;
      }
    }
    .b-wrap{
      color: #444857;
      font-size: 18px;
      display: flex;
      justify-content: space-between;
      .has-read{
        padding-left: 30px;
        background: url('../assets/images/gou-red.png') no-repeat left  center;
        background-size:  auto 100%;
      }

    }
  }
}
</style>
