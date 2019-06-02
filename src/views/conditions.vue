<template>
  <div class="page-conditions">
    <header>
      <headerNav></headerNav>
    </header>
    <section class="barner">
      <div class="barner-content">
        <div class="barner-title-en">Terms & conditions</div>
        <div class="barner-title">条款声明</div>
        <div class="barner-info">请各位客户下载并仔细阅读以下各类条款声明</div>
      </div>
    </section>
    <section class="content">
      <div class="com-width">
        <div class="l-wrap">
          <dl>
            <dt>服务相关</dt>
            <dd>开户文档（（产品名称） SmartGlobal-HK用户）</dd>
            <dd>客户协议书</dd>
            <dd>（产品名称）客户首次配置须知简介</dd>
            <dd>盈透证券开户文件</dd>
            <dd>什么是交易所交易基金（ETF）？</dd>
          </dl>
          <dl>
            <dt>表格下载</dt>
            <dd>更改账户资料表</dd>
            <dd>法律实体披露</dd>
            <dd>执行经纪披露</dd>
            <dd>更改账户资料表</dd>
          </dl>
        </div>
        <div class="r-wrap">
          <dl>
            <dt>常规条款</dt>
            <dd>网站使用须知</dd>
            <dd>免责声明</dd>
            <dd>隐私政策</dd>
            <dd>版权声明</dd>
          </dl>
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
.page-conditions {
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
    .barner-title-en{
      font-size:95px;
      font-weight:800;
      color:#fff;
      line-height:137px;
      opacity: 0.3;
    }
    .barner-title {
      font-size: 64px;
      color: #fff;
      line-height: 92px;
    }
    .barner-info {
      font-size: 18px;
      font-weight: 400;
      color: #fff;
      line-height: 28px;
      margin-top: 20px;
    }
  }
  .content {
    padding: 100px 0;
    background: #f9f9f9;
    .com-width{
      display: flex;
      font-size: 20px;
      font-weight:400;
      .l-wrap{
        margin-right: 160px;
      }
      dt{
        color: #444857;
        margin-bottom: 60px;
      }
      dd{
        color: #BE1A21;
        margin-bottom: 40px;
        &:hover{
          color: #141416;
          cursor: pointer;
        }
      }

    }

  }
}
</style>
