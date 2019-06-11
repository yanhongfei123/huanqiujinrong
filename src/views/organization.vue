<template>
  <div class="page-organization">
    <header>
      <headerNav path="/organization"></headerNav>
    </header>
    <section class="barner">
      <div class="barner-content">
        <div class="barner-title-en">mechanism</div>
        <div class="barner-title">{{$t('organization.text1')}}</div>
      </div>
    </section>
    <section class="content">
      <div class="com-width">
        <div class="title">{{$t('organization.text2')}}</div>
        <div class="info">{{$t('organization.text3')}}</div>
        <div class="info">{{$t('organization.text4')}}</div>
        <div class="info">{{$t('organization.text5')}}</div>
        <div class="bg"></div>
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
.page-organization {
  background: #f9f9f9;
  .barner {
    position: relative;
    height: 400px;
    background: url("../assets/images/mechanism/banner_mechanism.png") no-repeat
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
  .content {
    position: relative;
    height: 755px;
    overflow: hidden;
    color: #333;
    .title {
      position: relative;
      padding-top: 295px;
      font-size: 40px;
      line-height: 56px;
      margin-bottom: 57px;
      font-weight: 600;
      &::after {
        content: "";
        position: absolute;
        bottom: 10px;
        left: 160px;
        width: 72px;
        height: 72px;
        background: url("../assets/images/icon1.png") no-repeat center;
        background-size: 98%;
      }
    }
    .info {
      width: 800px;
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 36px;
    }
    .bg {
      position: absolute;
      bottom: 0;
      left: 60%;
      width: 1000px;
      height: 464px;
      -webkit-transform: skew(-20deg);
      -moz-transform: skew(-20deg);
      -o-transform: skew(-20deg);
      -ms-transform: skew(-20deg);
      transform: skew(-20deg);
      background: #d51d26;
      overflow: hidden;
      &::after {
        content: "";
        position: absolute;
        bottom: -130px;
        left: -90px;
        width: 200px;
        height: 400px;
        background: #be1a21;
        -webkit-transform: rotate(-30deg);
        transform: rotate(-39deg);
      }
    }
  }
}
</style>
