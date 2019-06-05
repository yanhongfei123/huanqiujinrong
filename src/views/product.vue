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
        <h1>产品介绍</h1>
        <div class="des">Product introduction</div>
        <div class="intro-wrap tl">
          <div class="l-wrap"></div>
          <div class="r-wrap">
            <h2>ETF.COOL | 易酷</h2>
            <div class="b-info">ETF费用低且透明，操作流程简单，覆盖范围广，涵盖全球范围内多种资产门类，美国、香港作为两大金融中心，涵盖世界几乎所有地区与资产类别，市场开放程度高，基础建设健全</div>
            <div class="m-info">
              <div class="icon icon1"></div>
              <div class="text">发达而开放的现代金融市场为普通人享受上述红利提供了可能，除了代表公司所有权的基础证券之外，发达的基金行业为普通投资者排除了大部分道德风险。</div>
            </div>
            <div class="m-info">
              <div class="icon icon2"></div>
              <div class="text">发达而开放的现代金融市场为普通人享受上述红利提供了可能，除了代表公司所有权的基础证券之外。</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content2">
      <div class="mask">
        <div class="com-width">
        <div class="m-lw">
          <h2>市场因素</h2>
          <div class="t-en">market factors</div>
          <div class="item">
            <div class="circle"><div>1</div></div>
            <div class="r-item">
              <div class="label">条件限制</div>
              <div class="line"></div>
              <div class="text">普通投资者的限制条件，全球化的投资方式并不普及，即使是在市场极其开放的香港，大众也并不是普遍拥有全球化资产配置，而仅限于高净值认识和机构投资者。</div>
            </div>
          </div>
          <div class="item">
            <div class="circle"><div>2</div></div>
            <div class="r-item">
              <div class="label">政策因素</div>
              <div class="line"></div>
              <div class="text">中国内地仍然受外汇管制等政策因素所影响，获取数据成本及数据处理能力要求高。</div>
            </div>
          </div>
        </div>
        <div class="m-rw">
          <div class="item">
            <div class="circle"><div>3</div></div>
            <div class="r-item">
              <div class="label">价格不菲</div>
              <div class="line"></div>
              <div class="text">虽然科技进步，财经数据获取的成本较低，但是大规模的高阶数据购买费用仍然不菲（学术数据库，彭博客户端等）。</div>
            </div>
          </div>
          <div class="item">
            <div class="circle"><div>4</div></div>
            <div class="r-item">
              <div class="label">要求较高</div>
              <div class="line"></div>
              <div class="text">大规模的数据处理和计算对个人能力要求较高（如数学统计能力，计算机编程能力）</div>
            </div>
          </div>
          <div class="item">
            <div class="circle"><div>5</div></div>
            <div class="r-item">
              <div class="label">噪音过多</div>
              <div class="line"></div>
              <div class="text">短期市场波动产生的恐慌情绪，以佣金为收入的经纪商引导（证券，数字货币及其他另类投资品种）</div>
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
  .content{
    padding: 120px 0;
    background: #F9F9F9;
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
      justify-content: space-between;
      margin-top: 60px;
      .l-wrap{
          width: 550px;
          background: url("../assets/images/banner03.jpg") no-repeat center;
          background-size: cover;
      }
      .r-wrap{
        width: 550px;
      }
      h2{
        font-size:28px;
        font-weight:bold;
        color:rgba(51,51,51,1);
        line-height:30px;
        margin-bottom: 35px;
      }
      .b-info{
        font-size:20px;
        font-weight:500;
        color:rgba(51,51,51,1);
        line-height:30px;
        margin-bottom: 40px;
      }
      .m-info{
        font-size:18px;
        color:rgba(68,72,87,0.7);
        line-height:30px;
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .icon{
          width: 80px;
          height: 80px;
          margin-right: 10px;
          background: url("../assets/images/gou-red.png") no-repeat center;
          background-size: cover;
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
    background: url('../assets/images/banner03.jpg') no-repeat center;
    background-size: cover;
    .mask{
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
    }
    .com-width{
      display: flex;
      justify-content: space-between;
    }
    h2{
      font-size:40px;
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height:58px;
      letter-spacing:3px;
      margin: 40px 0 10px;
    }
    .t-en{
      font-size:32px;
      color:rgba(255,255,255,1);
      line-height:46px;
      opacity: 0.5;
    }
    .item{
      display: flex;
      margin-top: 60px;
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
      .line{
        width:40px;
        height:2px;
        margin: 20px 0;
        background:rgba(255,255,255,1)
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
