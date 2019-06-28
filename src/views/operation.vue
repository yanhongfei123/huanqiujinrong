<template>
  <div class="page-operation">
    <header>
      <headerNav path="/operation"></headerNav>
    </header>
    <div @click="hideMenu($event)">
      <section class="barner">
        <div class="barner-content">
          <div class="barner-title-en">How to operate</div>
          <div class="barner-title">{{$t('operation.text1')}}</div>
        </div>
      </section>
      <section class="content1 tc">
        <div class="com-width">
          <h2>{{$t('operation.text2')}}</h2>
          <div class="des">Operation process</div>
          <div class="operate-wrap">
            <div class="o-item">
              <div class="icon icon1"></div>
              <div class="o-title">{{$t('operation.text3')}}</div>
              <div class="line"></div>
              <div class="o-info">{{$t('operation.text4')}}</div>
            </div>
            <div class="o-item om-item">
              <div class="icon icon2"></div>
              <div class="o-title">{{$t('operation.text5')}}</div>
              <div class="line"></div>
              <div class="o-info">{{$t('operation.text6')}}</div>
            </div>
            <div class="o-item">
              <div class="icon icon3"></div>
              <div class="o-title">{{$t('operation.text7')}}</div>
              <div class="line"></div>
              <div class="o-info">{{$t('operation.text8')}}</div>
            </div>
          </div>
        </div>
      </section>
      <section class="content tc">
        <div class="com-width">
          <h2>{{$t('operation.text9')}}</h2>
          <div class="des">Our investment style</div>
          <div class="intro-wrap tl">
            <div class="r-wrap">
              <div class="m-info m-info1">
                <div class="icon icon1"></div>
                <div class="text-wrap">
                  <div class="title">{{$t('operation.text10')}}</div>
                  <div class="des-info">{{$t('operation.text11')}}</div>
                </div>
              </div>
              <div class="m-info">
                <div class="icon icon2"></div>
                <div class="text-wrap">
                  <div class="title">{{$t('operation.text12')}}</div>
                  <div class="des-info">{{$t('operation.text13')}}</div>
                </div>
              </div>
            </div>
            <div class="l-wrap"></div>
          </div>
        </div>
      </section>
      <section class="content2 tc">
        <div class="com-width">
          <h2>{{$t('operation.text14')}}</h2>
          <div class="des">Our Advantages</div>
          <div class="bgg"></div>
          <div class="adva-wrap">
            <div class="adva-item">
              <div class="icon icon1"></div>
              <div class="adva-info">{{$t('operation.text15')}}</div>
            </div>
            <div class="adva-item adva-item2">
              <div class="icon icon2"></div>
              <div class="adva-info">{{$t('operation.text16')}}</div>
            </div>
            <div class="adva-item">
              <div class="icon icon3"></div>
              <div class="adva-info">{{$t('operation.text17')}}</div>
            </div>
            <div class="adva-item adva-item4">
              <div class="icon icon4"></div>
              <div class="adva-info">{{$t('operation.text18')}}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
// @ is an alias to /src
import headerNav from "@/components/nav/nav.vue";
import footerBar from "@/components/footer/footer.vue";

export default {
  name: "operation",
  components: {
    headerNav,
    footerBar
  },
  computed: {},
  data() {
    return {};
  },
  methods: {
    hideMenu(flag) {
      this.$store.dispatch("showMenu", false);
    }
  }
};
</script>

<style lang="scss">
.page-operation {
  background: #f9f9f9;
  .barner {
    position: relative;
    height: 400px;
    background: url("../assets/images/operate/banner_operate.png") no-repeat
      center;
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
  .com-width {
    h2 {
      font-size: 40px;
      font-weight: bold;
      color: #333;
      line-height: 58px;
      letter-spacing: 3px;
      margin: 0 0 10px;
    }
    .des {
      opacity: 0.5;
      height: 46px;
      font-size: 32px;
      color: rgba(68, 72, 87, 1);
      line-height: 46px;
    }
  }
  .content {
    padding: 120px 0 120px;
    background: #eeeff6;
    .intro-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 60px;
      .l-wrap {
        width: 560px;
        height: 402px;
        background: url("../assets/images/operate//bg_operate_investment.png")
          no-repeat center;
        background-size: contain;
      }
      .m-info1 {
        margin-bottom: 40px;
      }
      .m-info {
        font-size: 18px;
        color: rgba(68, 72, 87, 0.7);
        line-height: 30px;
        display: flex;
        justify-content: space-between;
        .icon {
          width: 80px;
          height: 80px;
          margin-right: 20px;
        }
        .icon1 {
          background: url("../assets/images/operate//icon_operate_firststep.png")
            no-repeat center;
          background-size: cover;
        }
        .icon2 {
          background: url("../assets/images/operate/icon_operate_dispersed.png")
            no-repeat center;
          background-size: cover;
        }
        .text-wrap {
          width: 480px;
          .title {
            font-size: 28px;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
            line-height: 40px;
            letter-spacing: 2px;
            margin-bottom: 16px;
          }
          .des-info {
            font-size: 20px;
            font-weight: 500;
            color: rgba(68, 72, 87, 1);
            line-height: 30px;
            text-align: justify;
          }
        }
        .text {
          flex: 1;
        }
      }
    }
  }

  .content1 {
    padding: 120px 0;
    .com-width {
      position: relative;
      &::after {
        @include icon2(-28px, auto, 59%, auto);
      }
    }
    .operate-wrap {
      margin-top: 60px;
      display: flex;
      justify-content: center;
      .icon {
        width: 80px;
        height: 80px;
      }
      .icon1 {
        background: url("../assets/images/operate/icon_operate_message.png")
          no-repeat center;
        background-size: cover;
      }
      .icon2 {
        background: url("../assets/images/operate/icon_operate_recommend.png")
          no-repeat center;
        background-size: cover;
      }
      .icon3 {
        background: url("../assets/images/operate/icon_operate_keep.png")
          no-repeat center;
        background-size: cover;
      }
      .o-item {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .om-item {
        margin: 0 100px;
      }
      .o-title {
        font-size: 28px;
        font-weight: 800;
        color: rgba(60, 63, 77, 1);
        line-height: 40px;
        letter-spacing: 2px;
        margin: 24px 0 10px;
      }
      .line {
        width: 60px;
        height: 2px;
        background: rgba(213, 29, 38, 1);
      }
      .o-info {
        width: 328px;
        font-size: 20px;
        font-weight: 500;
        color: rgba(68, 72, 87, 1);
        line-height: 30px;
        margin-top: 40px;
      }
    }
  }
  .content2 {
    padding: 120px 0;
    .bgg {
      width: 984px;
      height: 84px;
      margin: 134px auto 0;
      background: url("../assets/images/operate/bg_operate_line.png");
      background-size: contain;
    }
    .adva-wrap {
      margin-top: -88px;
      display: flex;
      justify-content: space-between;
      .adva-item {
        width: 240px;
      }
      .adva-item2,
      .adva-item4 {
        position: relative;
        top: -70px;
      }
      .adva-info {
        font-size: 18px;
        font-weight: 500;
        color: rgba(68, 72, 87, 1);
        line-height: 30px;
        margin-top: 30px;
      }
      .icon {
        width: 160px;
        height: 160px;
        margin: 0 auto;
        background-size: cover;
      }
      .icon1 {
        background: url("../assets/images/operate/icon_operate_advantage1.png");
      }
      .icon2 {
        background: url("../assets/images/operate/icon_operate_advantage2.png");
      }
      .icon3 {
        background: url("../assets/images/operate/icon_operate_advantage3.png");
      }
      .icon4 {
        background: url("../assets/images/operate/icon_operate_advantage4.png");
      }
    }
  }
}
</style>