<template>
  <div class="page-product">
    <header>
      <headerNav path="/product"></headerNav>
    </header>
    <section class="barner">
      <div class="barner-content">
        <div class="barner-title-en">Our products</div>
        <div class="barner-title">我们的产品</div>
      </div>
    </section>
    <section class="content tc">
      <div class="com-width">
        <h1>以目标市场分</h1>
        <div class="des">Target market share</div>
        <div class="intro-wrap tl">
          <div class="l-wrap"></div>
          <div class="r-wrap">
            <div class="m-info">
              <div class="icon icon1"></div>
              <div class="text-wrap">
                <div class="title">香港交易所交易基金组合（HK Listed ETF Portfolio）</div>
                <div class="des-info">作为全世界进入中国的最佳窗口与全球最开放的金融市场之一，香港交易所（HKEx）提供了除中国大陆本土之外，最全面最深入的中国市场投资标的。通过港交所的各种交易所上市基金，我们用最低廉的成本使您从中国经济的成长中受益。与此同时，您的投资将置于一个无外汇管制的开放环境中，为未来的调整和部署保留无限的可能性。</div>
              </div>
            </div>
            <div class="m-info">
              <div class="icon icon2"></div>
              <div class="text-wrap">
                <div class="title">美国交易所交易基金组合（US Listed ETF Portfolio）</div>
                <div class="des-info">作为全世界最成熟但又最具活力的金融创新中心，美国的证券市场为投资者提供了最多的可能性。通过这里，您可以将您的投资延展到世界的每一个角落。这里是您投资大中华区之外地区的最佳选择。</div>
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
          <h2>以风险偏好分</h2>
          <div class="t-en">Risk preference score</div>
          <div class="line"></div>
          <div class="cont2-des">根据客户就风险问卷所提供的不同风险偏好以及承受能力，我们针对您的答案定制不同的投资组合以求更好的满足您的投资需求和人生目标</div>
          <div class="item item2">
            <div class="circle"><div>1</div></div>
            <div class="r-item">
              <div class="label">快速成长（Growth）</div>
              <div class="line"></div>
              <div class="text">以权益基金为主的投资组合，在风险可控的情况下，优先追求回报，力求使您充分享受到这个世界每一个行业和角落的进步与成长。</div>
            </div>
          </div>
        </div>
        <div class="m-rw">
          <div class="item item1">
            <div class="circle"><div>2</div></div>
            <div class="r-item">
              <div class="label">稳健收益（Balanced）</div>
              <div class="line"></div>
              <div class="text">平衡布局于权益类基金与债权类基金，兼顾成长与稳定的现金流。在您事业的黄金期既提供足够的保障，又能保有享受世界进步的可能性。</div>
            </div>
          </div>
          <div class="item item3">
            <div class="circle"><div>3</div></div>
            <div class="r-item">
              <div class="label">持重守成（Conservative）</div>
              <div class="line"></div>
              <div class="text">以债权类基金为主要成分，尽可能的追求低风险环境下稳定的成长，侧重现金收益，使您尽可能的避开不必要的市场波动和风险。</div>
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
  background: #F9F9F9;
  .barner {
    position: relative;
    height: 400px;
    background: url("../assets/images/ourproducts/banner_products.png") no-repeat center;
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
  .content{
    padding: 120px 0;
    background: #F9F9F9;
    .com-width{
      position: relative;
      &::after{
        @include icon1(44px, auto,auto,52px);
      }
    }
    h1{
      font-size:40px;
      font-weight:bold;
      color:#333;
      line-height:58px;
      letter-spacing:3px;
      margin: 0 0 10px;
    }
    .des{
      opacity: 0.5;
      height:46px;
      font-size:32px;
      color:rgba(68,72,87,1);
      line-height:46px;
    }

    .intro-wrap{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 60px;
      .l-wrap{
          width: 400px;
          height: 288px;
          margin-right: 40px;
          background: url("../assets/images/ourproducts/bg_target.png") no-repeat center;
          background-size: cover;
      }
      .r-wrap{
        flex: 1;
      }
      .m-info{
        font-size:18px;
        color:rgba(68,72,87,0.7);
        line-height:30px;
        margin-bottom: 40px;
        display: flex;
        justify-content: space-between;
        .icon{
          width: 80px;
          height: 80px;
          margin-right: 20px;
        }
        .icon1{
          background: url("../assets/images/ourproducts/icon_products_hk.png") no-repeat center;
          background-size: cover;
        }
        .icon2{
          background: url("../assets/images/ourproducts/icon_products_us.png") no-repeat center;
          background-size: cover;
        }
        .text-wrap{
          width: 640px;
          .title{
            font-size:20px;
            font-weight:600;
            color:#333;
            line-height:30px;
            margin-bottom: 10px;
          }
          .des-info{
            font-size:18px;
            color:rgba(68,72,87,1);
            line-height:30px;
            text-align: justify;
          }
        }
        .text{
          flex: 1;
        }
      }
    }

  }
  .content2{
    position: relative;
    height: 668px;
    background: url('../assets/images/ourproducts/bg_products.png') no-repeat center;
    background-size: cover;
    .mask{
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
    }
    .com-width{
      display: flex;
      justify-content: space-between;
    }
    .item{
      display: flex;
      margin-top: 120px;
    }
    .item2{
      margin: 0;
    }
    .item3{
      margin-top: 110px;
    }
    h2{
      font-size:40px;
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height:58px;
      letter-spacing:3px;
      margin: 40px 0 10px;
    }
    .line{
      width:40px;
      height:2px;
      margin: 20px 0;
      background:rgba(255,255,255,1)
     }
    .t-en{
      font-size:32px;
      color:rgba(255,255,255,1);
      line-height:46px;
      opacity: 0.5;
    }
    .cont2-des{
      width: 580px;
      font-size:20px;
      font-weight:500;
      color:rgba(255,255,255,1);
      line-height:30px;
      margin-bottom: 110px
    }
    .circle{
      width: 74px;
      height: 74px;
      border-radius: 35px;
      border: 2px dotted #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      div{
        width: 60px;
        height: 60px;
        background: #fff;
        border-radius: 100px;
        font-size:40px;
        font-weight:bold;
        color:#333;
        line-height:60px;
        text-align: center;
      }
    }
    .r-item{
      margin-left: 28px;
      color: #fff;
      .label{
        font-size:28px;
        font-weight:bold;
        color:rgba(255,255,255,1);
        line-height:30px;
      }
      .text{
        width: 426px;
        font-size:18px;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:30px;
      }
    }
  }

}
</style>