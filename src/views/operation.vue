<template>
  <div class="page-operation">
    <header>
      <headerNav path="/operation"></headerNav>
    </header>
    <section class="barner">
      <div class="barner-content">
        <div class="barner-title-en">How to operate</div>
        <div class="barner-title">如何运作</div>
      </div>
    </section>
    <section class="content1 tc">
      <div class="com-width">
        <h2>运作流程</h2>
        <div class="des">Operation process</div>
        <div class="operate-wrap">
          <div class="o-item">
            <div class="icon icon1"></div>
            <div class="o-title">信息收集</div>
            <div class="line"></div>
            <div class="o-info">我们将收集一些关于您现在的投资状况，例如：您现在的投资阶段，您过去曾投资什么产品，是否计划将来退休生活，教育基金等等。</div>
          </div>
          <div class="o-item om-item">
            <div class="icon icon2"></div>
            <div class="o-title">推荐投资组合</div>
            <div class="line"></div>
            <div class="o-info">我们将就您提供的数据分析及为您计划一个全球分配资产投资组合，继而推荐一份针对您的风险承受能力和时间范围而设计的投资计划。</div>
          </div>
          <div class="o-item">
            <div class="icon icon3"></div>
            <div class="o-title">持续管理</div>
            <div class="line"></div>
            <div class="o-info">设置投资组合完成后，我们会使用我们的投资智能技术持续管理您的投资组合，定期检视投资回报。</div>
          </div>
        </div>
      </div>
    </section>
    <section class="content tc">
      <div class="com-width">
        <h2>我们的投资风格</h2>
        <div class="des">Our investment style</div>
        <div class="intro-wrap tl">
          <div class="r-wrap">
            <div class="m-info m-info1">
              <div class="icon icon1"></div>
              <div class="text-wrap">
                <div class="title">从投资第一步开始</div>
                <div class="des-info">我们将为您建立一个多元化的低成本指数基金组合，优化您的回报，平衡风险。我们的软件随着时间的推移，将定期给予建议，藉以优化您的投资组合。它纯技术分析，不牵涉人为情感，而是以简单的方式建立您的投资组合，通过分散投资，降低风险。</div>
              </div>
            </div>
            <div class="m-info">
              <div class="icon icon2"></div>
              <div class="text-wrap">
                <div class="title">分散投资</div>
                <div class="des-info">通过投资世界各地的各种不同类型的资产，您可以获得全球经济增长的成果，同时保持稳定的回报。</div>
              </div>
            </div>
          </div>
          <div class="l-wrap"></div>
        </div>
      </div>
    </section>
    <section class="content2 tc">
      <div class="com-width">
        <h2>我们的优势</h2>
        <div class="des">Our Advantages</div>
        <div class="bgg"></div>
        <div class="adva-wrap">
          <div class="adva-item">
            <div class="icon icon1"></div>
            <div class="adva-info">基于盈透证券的强大平台，连接最广泛的市场和产品，并将投资组合的构建与调整的成本压到最低。</div>
          </div>
          <div class="adva-item adva-item2">
            <div class="icon icon2"></div>
            <div class="adva-info">费用简单透明，我们只收取您资产规模的0.5%-0.8%的年费，我们的收入取决于托付给我们的资产规模和后续的回报，而不是您的交易频率。</div>
          </div>
          <div class="adva-item">
            <div class="icon icon3"></div>
            <div class="adva-info">除了关于您的投资组合表现等必要讯息，我们不会对您产生任何噪音，让你专注于财务投资之外的事业与生活。</div>
          </div>
          <div class="adva-item adva-item4">
            <div class="icon icon4"></div>
            <div class="adva-info">基于智能手机的应用，你可以随时随地以您喜欢的方式关心的投资组合并与我们沟通交流。</div>
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
  name: "operation",
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
.page-operation {
  background: #F9F9F9;
  .barner {
    position: relative;
    height: 400px;
    background: url("../assets/images/operate/banner_operate.png") no-repeat center;
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
  .com-width{
    h2{
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
  }
  .content{
    padding: 120px 0 120px;
    background: #EEEFF6;
    .intro-wrap{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 60px;
      .l-wrap{
          width: 560px;
          height: 402px;
          background: url("../assets/images/operate//bg_operate_investment.png") no-repeat center;
          background-size: contain;
      }
      .m-info1{
        margin-bottom: 40px;
      }
      .m-info{
        font-size:18px;
        color:rgba(68,72,87,0.7);
        line-height:30px;
        display: flex;
        justify-content: space-between;
        .icon{
          width: 80px;
          height: 80px;
          margin-right: 20px;
        }
        .icon1{
          background: url("../assets/images/operate//icon_operate_firststep.png") no-repeat center;
          background-size: cover;
        }
        .icon2{
          background: url("../assets/images/operate/icon_operate_dispersed.png") no-repeat center;
          background-size: cover;
        }
        .text-wrap{
          width: 480px;
          .title{
            font-size:28px;
            font-weight:bold;
            color:rgba(51,51,51,1);
            line-height:40px;
            letter-spacing:2px;
            margin-bottom: 16px;
          }
          .des-info{
            font-size:20px;
            font-weight:500;
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

  .content1{
    padding: 120px 0;
    .com-width{
      position: relative;
      &::after{
        @include icon2(-28px, auto, 59%,auto);
      }
    }
    .operate-wrap{
      margin-top: 60px;
      display: flex;
      justify-content: center;
      .icon{
        width: 80px;
        height: 80px;
      }
      .icon1{
        background: url("../assets/images/operate/icon_operate_message.png") no-repeat center;
        background-size: cover;
      }
      .icon2{
        background: url("../assets/images/operate/icon_operate_recommend.png") no-repeat center;
        background-size: cover;
      }
      .icon3{
        background: url("../assets/images/operate/icon_operate_keep.png") no-repeat center;
        background-size: cover;
      }
      .o-item{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .om-item{
        margin: 0 100px;
      }
      .o-title{
        font-size:28px;
        font-weight:800;
        color:rgba(60,63,77,1);
        line-height:40px;
        letter-spacing:2px;
        margin: 24px 0 10px;
      }
      .line{
        width:60px;
        height:2px;
        background:rgba(213,29,38,1);
      }
      .o-info{
        width: 328px;
        font-size:20px;
        font-weight:500;
        color:rgba(68,72,87,1);
        line-height:30px;
        margin-top: 40px;
      }
    }
  }
  .content2{
    padding: 120px 0;
    .bgg{
      width: 984px;
      height: 84px;
      margin: 134px auto 0;
      background: url('../assets/images/operate/bg_operate_line.png');
      background-size: contain;
    }
    .adva-wrap{
      margin-top: -88px;
      display: flex;
      justify-content: space-between;
      .adva-item{
        width: 240px;
      }
      .adva-item2, .adva-item4{
        position: relative;
        top: -70px;
      }
      .adva-info{
        font-size:18px;
        font-weight:500;
        color:rgba(68,72,87,1);
        line-height:30px;
        margin-top: 30px;
      }
      .icon{
        width: 160px;
        height: 160px;
        margin: 0 auto;
        background-size: cover;
      }
      .icon1{
        background: url("../assets/images/operate/icon_operate_advantage1.png");
      }
      .icon2{
        background: url("../assets/images/operate/icon_operate_advantage2.png");
      }
      .icon3{
        background: url("../assets/images/operate/icon_operate_advantage3.png");
      }
      .icon4{
        background: url("../assets/images/operate/icon_operate_advantage4.png");
      }

    }
  }


}
</style>