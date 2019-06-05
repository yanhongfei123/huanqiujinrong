<template>
  <div class="page-introduction">
    <header>
      <headerNav></headerNav>
    </header>
    <section class="barner">
      <div class="barner-content">
        <div class="barner-title">
          <span>ETF</span>.COOL | 易酷
        </div>
        <div
          class="barner-info"
        >我们是一群分别来自于美国、香港和中国内地的从事金融和计算机技术的小伙伴。我们拥有不同的专业领域，文化背景，职业经历乃至生活方式，但是我们走到一起共同创立【ETF.cool|易酷】。</div>
      </div>
    </section>
    <section class="content1">
      <div class="com-width tr">
        <div class="title">我们坚信以下三件事情</div>
        <div class="info">技术能够使世界更美好，能够将在过去只属于少数人的知识，技能和服务分享给更多的人。</div>
        <div class="info">时代总是在进步，而且每个人都应该享受到这种进步带来的果实。</div>
        <div class="info">我们坚信长期情况下，经典资产配置理论和金融市场的有效性是成立的。</div>
      </div>
    </section>
    <section class="content2">
      <div class="text tc">我们希望更多认同我们以上理念的小伙伴们一起加入我们 证明大家是对的。</div>
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
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {},
  data() {
    return {};
  },
  mounted() {
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // setInterval(() => {
    //   this.oIndex = this.swiper.activeIndex;
    // }, 3300)
  }
};
</script>

<style lang="scss" scoped>
.page-introduction {
  .barner {
    position: relative;
    height: 668px;
    background: url("../assets/images/firstpage/banner_team.png") no-repeat center;
    background-size: cover;
    .barner-content {
      width: 900px;
      margin: 0 auto;
      position: relative;
      color: #fff;
      top: 48%;
    }
    .barner-title {
      font-size: 64px;
      color: #fff;
      line-height: 92px;
      span {
        font-weight: bold;
        color: #d51d26;
      }
    }
    .barner-info {
      font-size: 18px;
      font-weight: 400;
      color: #fff;
      line-height: 28px;
      margin-top: 30px;
    }
  }
  .content1 {
    position: relative;
    height: 750px;
    color: #141416;
    overflow: hidden;
    background: #fff;
    &::after {
      content: '';
      width:660px;
      height: 464px;
      position: absolute;
      left: 0;
      bottom: 0;
      background: url("../assets/images/firstpage//bg_team.png") no-repeat left center;
      background-size: auto 100%;
    }
    .com-width {
      padding-top: 216px;
    }
    .title {
      float: right;
      width: 522px;
      font-size: 40px;
      padding: 12px 0 12px 120px;
      background: url("../assets//images/firstpage/icon_team.png") no-repeat left center;
      background-size: auto 100%;
      margin-bottom: 100px;
    }
    .info {
      clear: both;
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      margin-bottom: 40px;
    }
  }
  .content2 {
    height: 668px;
    background: url("../assets/images/firstpage//banner_team2.png") no-repeat center;
    background-size: cover;
    display: flex;
    align-items: center;
    .text{
      width: 700px;
      margin: 0 auto;
      font-size: 28px;
      font-weight: 600;
      color: #fff;
      line-height: 40px;
    }
  }
}
</style>
