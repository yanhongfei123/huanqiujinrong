<template>
  <div class="page-product">
    <header>
      <headerNav path="/product"></headerNav>
    </header>
    <section class="barner">
      <div class="barner-content">
        <div class="barner-title-en">Our products</div>
        <div class="barner-title">{{$t('product.text1')}}</div>
      </div>
    </section>
    <section class="content tc">
      <div class="com-width">
        <h1>{{$t('product.text2')}}</h1>
        <div class="des">Target market share</div>
        <div class="intro-wrap tl">
          <div class="l-wrap"></div>
          <div class="r-wrap">
            <div class="m-info">
              <div class="icon icon1"></div>
              <div class="text-wrap">
                <div class="title">{{$t('product.text3')}}（HK Listed ETF Portfolio）</div>
                <div class="des-info">{{$t('product.text4')}}</div>
              </div>
            </div>
            <div class="m-info">
              <div class="icon icon2"></div>
              <div class="text-wrap">
                <div class="title">{{$t('product.text5')}}（US Listed ETF Portfolio）</div>
                <div class="des-info">{{$t('product.text6')}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content2">
      <div class="mask">
        <div class="com-width">
          <div class="m-lw">
            <h2>{{$t('product.text7')}}</h2>
            <div class="t-en">Risk preference score</div>
            <div class="line"></div>
            <div class="cont2-des">{{$t('product.text8')}}</div>
            <div class="item item2">
              <div class="circle">
                <div>1</div>
              </div>
              <div class="r-item">
                <div class="label">{{$t('product.text9')}}（Growth）</div>
                <div class="line"></div>
                <div class="text">{{$t('product.text10')}}</div>
              </div>
            </div>
          </div>
          <div class="m-rw">
            <div class="item item1">
              <div class="circle">
                <div>2</div>
              </div>
              <div class="r-item">
                <div class="label">{{$t('product.text11')}}（Balanced）</div>
                <div class="line"></div>
                <div class="text">{{$t('product.text12')}}</div>
              </div>
            </div>
            <div class="item item3">
              <div class="circle">
                <div>3</div>
              </div>
              <div class="r-item">
                <div class="label">{{$t('product.text13')}}（Conservative）</div>
                <div class="line"></div>
                <div class="text">{{$t('product.text14')}}</div>
              </div>
            </div>
          </div>
        </div>
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
    return {};
  }
};
</script>

<style lang="scss">
.page-product {
  min-width: 1180px;
  background: #f9f9f9;
  .barner {
    position: relative;
    height: 400px;
    background: url("../assets/images/ourproducts/banner_products.png")
      no-repeat center;
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
    padding: 120px 0;
    background: #f9f9f9;
    .com-width {
      position: relative;
      &::after {
        @include icon1(44px, auto, auto, 52px);
      }
    }
    h1 {
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

    .intro-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 60px;
      .l-wrap {
        width: 400px;
        height: 288px;
        margin-right: 40px;
        background: url("../assets/images/ourproducts/bg_target.png") no-repeat
          center;
        background-size: cover;
      }
      .r-wrap {
        flex: 1;
      }
      .m-info {
        font-size: 18px;
        color: rgba(68, 72, 87, 0.7);
        line-height: 30px;
        margin-bottom: 40px;
        display: flex;
        justify-content: space-between;
        .icon {
          width: 80px;
          height: 80px;
          margin-right: 20px;
        }
        .icon1 {
          background: url("../assets/images/ourproducts/icon_products_hk.png")
            no-repeat center;
          background-size: cover;
        }
        .icon2 {
          background: url("../assets/images/ourproducts/icon_products_us.png")
            no-repeat center;
          background-size: cover;
        }
        .text-wrap {
          width: 640px;
          .title {
            font-size: 20px;
            font-weight: 600;
            color: #333;
            line-height: 30px;
            margin-bottom: 10px;
          }
          .des-info {
            font-size: 18px;
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
  .content2 {
    position: relative;
    height: 668px;
    background: url("../assets/images/ourproducts/bg_products.png") no-repeat
      center;
    background-size: cover;
    .mask {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
    .com-width {
      display: flex;
      justify-content: space-between;
    }
    .item {
      display: flex;
      margin-top: 120px;
    }
    .item2 {
      margin: 0;
    }
    .item3 {
      margin-top: 110px;
    }
    h2 {
      font-size: 40px;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      line-height: 58px;
      letter-spacing: 3px;
      margin: 40px 0 10px;
    }
    .line {
      width: 40px;
      height: 2px;
      margin: 20px 0;
      background: rgba(255, 255, 255, 1);
    }
    .t-en {
      font-size: 32px;
      color: rgba(255, 255, 255, 1);
      line-height: 46px;
      opacity: 0.5;
    }
    .cont2-des {
      width: 580px;
      font-size: 20px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 30px;
      margin-bottom: 110px;
    }
    .circle {
      width: 74px;
      height: 74px;
      border-radius: 35px;
      border: 2px dotted #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      div {
        width: 60px;
        height: 60px;
        background: #fff;
        border-radius: 100px;
        font-size: 40px;
        font-weight: bold;
        color: #333;
        line-height: 60px;
        text-align: center;
      }
    }
    .r-item {
      margin-left: 28px;
      color: #fff;
      .label {
        font-size: 28px;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 30px;
      }
      .text {
        width: 426px;
        font-size: 18px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 30px;
      }
    }
  }
}
</style>