<template>
  <div class="article-wrap">
    <header>
      <headerNav path="/find"></headerNav>
    </header>
    <div class="com-width">
      <h1 class="title">{{article | filterByLanguage('articleTitle')}}</h1>
      <div class="art-info">
        分类:
        <span>{{article | filterByLanguage('articleType')}}</span>
        <span class="update-time">{{article.updateTime | parseTime}}</span>
        <span class="has-red">{{article.readSum}}</span>{{$t('article.text1')}}
      </div>
      <div
        class="art-content"
      >{{article | filterByLanguage('articleContent')}}</div>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import {getArticleDetail} from '@/api/article'
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
      article: {}
    };
  },
  methods: {

  },
  mounted(){
    var id = this.$route.params.id;
    getArticleDetail(id).then(res=>{
      this.article = res.data;
    })
  }
};
</script>
<style lang="scss" scoped>
.article-wrap {
  margin-top: 82px;
  padding-top: 40px;
  background: #F9F9F9;
  .title {
    font-size: 36px;
    color: #333;
    line-height: 54px;
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
    line-height: 30px;
    padding: 60px 0;
  }
}
</style>


