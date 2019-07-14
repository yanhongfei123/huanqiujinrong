<template>
  <div class="article-wrap">
    <header>
      <headerNav path="/find"></headerNav>
    </header>
    <div class="com-width">
      <h1 class="title">{{article | filterByLanguage('articleTitle')}}</h1>
      <div class="art-info">
        {{$t('messageCenter.text2')}}:
        <span>{{filterType(article.articleType)}}</span>
        <span class="update-time">{{article.updateTime | parseTime}}</span>
        <span class="has-red">{{article.readSum}}</span>{{$t('article.text1')}}
      </div>
      <div
        class="art-content"
        v-html="filterContent(article, 'articleContent')"
      ></div>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import {getArticleDetail} from '@/api/article'
import { filterByLanguage } from '@/filters/index.js'
import headerNav from "@/components/nav/nav.vue";
import footerBar from "@/components/footer/footer.vue";
export default {
  name: "art",
  components: {
    headerNav,
    footerBar
  },
  data() {
    return {
      article: {
        articleType: '',
        articleTitle: '',
        articleContent: '',
      }
    };
  },
  methods: {
    filterContent(val, key){
     return filterByLanguage(val, 'articleContent');
    },
    filterType(type){
      if(type){
        var val = this.typeList.filter((item) => item.dictValue == type)[0];
        return filterByLanguage(val, 'dictLabel');
      }
    },

  },
  async mounted() {
    var res = await this.getGlobalData("sys_article_type");
    var list = res.data.list;
    this.typeList = list;

    var id = this.$route.params.id;
    getArticleDetail(id).then(res=>{
      this.article = res.data;
    });
  },
};
</script>
<style lang="scss">
.article-wrap {
  margin-top: 82px;
  padding-top: 40px;
  background: #F9F9F9;
  .title {
    font-size: 36px;
    color: #333;
    line-height: 54px;
    margin: 0;
  }
  .art-info {
    font-size: 18px;
    color: #444857;
    line-height: 30px;
    padding: 40px 0 20px;
    border-bottom: 1px solid #D8D8D8;
  }
  .update-time{
    margin: 0 40px;
  }
  .art-content{
    color: #444857;
    font-size:20px;
    padding: 60px 0;
    text-align: center;
    img {
      margin-bottom: 30px;
      //display: block;
    }
    p{
      line-height:30px;
      margin-bottom: 30px;
    }
  }
}
</style>


