<template>
  <div class="article-wrap">
    <header>
      <headerNav path="/find"></headerNav>
    </header>
    <div class="com-width">
      <h1 class="title">A股投资装甲——（产品名称）智能投资引擎上线！</h1>
      <div class="art-info">
        分类:
        <span> 文章资讯</span>
        <span class="update-time">2019-05-07 14:00</span>
        <span class="has-red">9999</span>次阅读
      </div>
      <div
        class="art-content"
      >“电池”VS “电网” 人工智能在中国商务世界的应用已经非常广泛，无论是商用的语音识别，图像识别，信贷审批，还是在金融市场投资，都可以看到AI的影子。 在李开复的新书《AI·未来》中，曾经提到，人工智能有两种模式与经济和商务场景融合：一个是“电网模式”，另一个是“电池模式”。</div>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import headerNav from "@/components/nav/nav.vue";
import footerBar from "@/components/footer/footer.vue";
export default {
  name: "art",
  components: {
    headerNav,
    footerBar
  },
  data() {
    return {};
  },
  methods: {}
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


