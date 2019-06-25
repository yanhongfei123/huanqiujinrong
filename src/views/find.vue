<template>
  <div class="page-find">
    <header>
      <headerNav path="/find"></headerNav>
    </header>
    <section class="barner">
      <div class="barner-content">
        <div class="barner-title-en">LATEST NEWS</div>
        <div class="barner-title">{{$t('find.text1')}}</div>
      </div>
    </section>
    <section class="content">
      <div class="com-width">
        <div class="article-nav">
          <div class="art-l">{{$t('find.text2')}}</div>
          <div class="tab-wrap">
            <div
              @click="changeTab(val.dictValue, index)"
              :class="[oIndex===index?'active':'']"
              v-for="(val,index) in typeList"
              :key="index"
              class="tab-item"
            >{{ val | filterByLanguage('dictLabel') }}</div>
          </div>
        </div>
        <div class="article-list">
          <div
            @click="goArticle"
            v-for="(val,index) in articleList"
            :key="index"
            class="article-item"
          >
            <div :style="{backgroundImage: 'url(' + val.url + ')'}" class="l-wrap"></div>
            <div class="r-wrap">
              <div class="title">{{val.articleTitle}}</div>
              <div class="des">{{val.articleAbstract}}</div>
              <div class="b-wrap">
                <div class="time">{{val.updateTime | parseTime}}</div>
                <div class="has-read">{{val.readSum}}次阅读</div>
              </div>
            </div>
          </div>
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
    </section>
    <footerBar></footerBar>
  </div>
</template>

<script>
// @ is an alias to /src
import headerNav from "@/components/nav/nav.vue";
import footerBar from "@/components/footer/footer.vue";
import { getArticleList } from "@/api/article";

export default {
  name: "contact",
  components: {
    headerNav,
    footerBar
  },
  computed: {
    // typeList() {
    //   return [
    //     this.$t("find.text3"),
    //     this.$t("find.text4"),
    //     this.$t("find.text5")
    //   ];
    // }
  },
  data() {
    return {
      total:0,
      oIndex: 0,
      currentPage: 1,
      articleType: '',
      articleList: [],
      typeList: []
    };
  },
  methods: {
    getArticleList(articleType, pageNum){
      getArticleList({
        articleType,
        pageNum,
      }).then(res => {
        this.articleList = res.data.list;
        this.total = res.data.total;
      });
    },
    changeTab(articleType, index) {
      this.oIndex = index;
      this.articleType = articleType;
      this.currentPage = 1;
      this.getArticleList(articleType, 1)
    },
    currentChange(pageNum){
      this.currentPage = pageNum;
      this.getArticleList(this.articleType, pageNum)
    },
    goArticle() {
      this.$router.push("/article");
    },
  },
  async mounted() {
    var res = await this.getGlobalData("sys_article_type");
    var list = res.data.list;
    this.typeList = list;
    this.changeTab(list[0].dictValue, 0);
  }
};
</script>

<style lang="scss">
.page-find {
  .barner {
    position: relative;
    height: 400px;
    background: url("../assets/images/news/banner_news.png") no-repeat center;
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
  .article-nav {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #d8d8d8;
  }
  .art-l {
    position: relative;
    font-size: 28px;
    font-weight: bold;
    color: #333;
    &::after {
      @include icon1(auto, 26px, 172px, auto);
    }
  }
  .tab-wrap {
    display: flex;
    justify-content: space-between;
    .tab-item:nth-of-type(2) {
      margin: 0 40px;
    }
    .tab-item {
      position: relative;
      font-size: 24px;
      color: #999;
      font-weight: bold;
      cursor: pointer;
      &.active,
      &:hover {
        color: #333;
      }
      &.active {
        &::after {
          content: "";
          position: absolute;
          width: 60px;
          height: 2px;
          left: 50%;
          bottom: -21px;
          margin-left: -30px;
          background: #d51d26;
        }
      }
    }
  }
  .article-list {
    .article-item {
      margin-top: 50px;
      display: flex;
      justify-content:center;
    }
    .l-wrap {
      // width: 390px;
      // height: 260px;
      // margin-right: 60px;
      // background-position: center;
      // background-repeat: no-repeat;
      // background-size: cover;
    }
    .r-wrap {
      width: 730px;
      .title {
        height: 108px;
        margin-bottom: 14px;
        font-size: 36px;
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
        margin-bottom: 50px;
      }
    }
    .b-wrap {
      color: #444857;
      font-size: 18px;
      display: flex;
      justify-content: space-between;
      .has-read {
        padding-left: 30px;
        background: url("../assets/images/news/icon_news_read.png") no-repeat
          left center;
        background-size: auto 62%;
      }
    }
  }
}
</style>
