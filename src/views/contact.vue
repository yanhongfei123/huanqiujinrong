<template>
  <div class="page-contact">
    <header>
      <headerNav></headerNav>
    </header>
    <div class="com-width content">
      <div class="contact">{{$t('contact')}}</div>
      <div class="contact-en">CONTACT US</div>
      <div class="map-wrap">
        <img width="1180" src="../assets/images/firstpage/banner_conditions.png" alt>
        <div class="btm-wrap">
          <div class="l-wrap">+852 XXXXXXX</div>
          <div class="r-wrap">info@etf.cool</div>
        </div>
      </div>
    </div>
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
.page-contact {
  padding-top: 60px;
  background: #f9f9f9;
  .contact {
    font-size: 50px;
    font-weight: 500;
    color: rgba(60, 63, 77, 1);
    line-height: 72px;
  }
  .contact-en {
    font-size: 95px;
    font-weight: 800;
    color: #444857;
    line-height: 137px;
    opacity: 0.3;
  }
  .map-wrap {
    margin: 60px 0 100px;
  }
  .btm-wrap {
    padding: 0 195px;
    height: 100px;
    font-size: 24px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .l-wrap {
    padding-left: 42px;
    background: url("../assets/images/icon_phone.png") no-repeat;
    background-size: auto 100%;
  }
  .r-wrap {
    padding-left: 42px;
    background: url("../assets/images/icon_mail.png") no-repeat;
    background-size: auto 100%;
  }
}
</style>
