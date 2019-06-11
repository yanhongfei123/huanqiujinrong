<template>
  <div class="page-introduction">
    <header>
      <headerNav></headerNav>
    </header>
    <section class="barner">
      <div class="barner-content">
        <div class="barner-title">
          <span>ETF</span>
          .COOL | {{$t('introduction.text1')}}
        </div>
        <div
          class="barner-info"
        >{{$t('introduction.text2')}}【ETF.cool|{{$t('introduction.text1')}}】。</div>
      </div>
    </section>
    <section class="content1">
      <div class="com-width tr">
        <div class="title">{{$t('introduction.text3')}}</div>
        <div class="info">{{$t('introduction.text4')}}</div>
        <div class="info">{{$t('introduction.text5')}}</div>
        <div class="info">{{$t('introduction.text6')}}</div>
      </div>
    </section>
    <section class="content2">
      <div class="text tc">{{$t('introduction.text7')}}</div>
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
    background: url("../assets/images/firstpage/banner_team.png") no-repeat
      center;
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
      content: "";
      width: 660px;
      height: 464px;
      position: absolute;
      left: 0;
      bottom: 0;
      background: url("../assets/images/firstpage//bg_team.png") no-repeat left
        center;
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
      background: url("../assets//images/firstpage/icon_team.png") no-repeat
        left center;
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
    background: url("../assets/images/firstpage//banner_team2.png") no-repeat
      center;
    background-size: cover;
    display: flex;
    align-items: center;
    .text {
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
