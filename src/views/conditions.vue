<template>
  <div class="page-conditions">
    <header>
      <headerNav></headerNav>
    </header>
    <section class="barner">
      <div class="barner-content">
        <div class="barner-title-en">Terms & conditions</div>
        <div class="barner-title">{{$t('conditions.text1')}}</div>
        <div class="barner-info">{{$t('conditions.text2')}}</div>
      </div>
    </section>
    <section class="content">
      <div class="com-width">
        <div class="l-wrap">
          <dl>
            <dt>{{$t('conditions.text3')}}</dt>
            <dd>{{$t('conditions.text4')}}</dd>
            <dd>{{$t('conditions.text5')}}</dd>
            <dd>{{$t('conditions.text6')}}</dd>
            <dd>{{$t('conditions.text7')}}</dd>
            <dd>{{$t('conditions.text8')}}</dd>
          </dl>
          <dl>
            <dt>{{$t('conditions.text9')}}</dt>
            <dd>{{$t('conditions.text10')}}</dd>
          </dl>
          <dl>
            <dt>{{$t('conditions.text20')}}</dt>
            <dd>{{$t('conditions.text11')}}</dd>
            <dd>{{$t('conditions.text12')}}</dd>
            <dd>{{$t('conditions.text19')}}</dd>
          </dl>
        </div>
        <div class="r-wrap">
          <dl>
            <dt>{{$t('conditions.text14')}}</dt>
            <dd>{{$t('conditions.text15')}}</dd>
            <dd>{{$t('conditions.text16')}}</dd>
            <dd>{{$t('conditions.text17')}}</dd>
            <dd>{{$t('conditions.text18')}}</dd>
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

<style lang="scss" scoped>
.page-conditions {
  .barner {
    position: relative;
    height: 400px;
    background: url("../assets/images/firstpage//banner_conditions.png")
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
      opacity: 0.5;
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
    .com-width {
      display: flex;
      font-size: 20px;
      font-weight: 400;
      .l-wrap {
        margin-right: 160px;
      }
      dt {
        color: #444857;
        margin: 60px 0;
      }
      dd {
        color: #be1a21;
        margin-bottom: 40px;
        &:hover {
          color: #141416;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
