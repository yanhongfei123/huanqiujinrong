<template>
  <div class="page-analysis">
    <header>
      <headerNav path="/analysis/analys"></headerNav>
    </header>
    <div @click="hideMenu($event)">
      <section class="barner">
        <div class="barner-content">
          <div class="barner-title-en">Free analysis</div>
          <div class="barner-title">{{$t('analysis.text1')}}</div>
          <div class="barner-info">{{$t('analysis.text2')}}</div>
        </div>
      </section>
      <section class="content">
        <div class="com-width">
          <router-view/>
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
  name: "contact",
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
.page-analysis {
  .barner {
    position: relative;
    height: 400px;
    background: url("../../assets/images/firstpage/banner_freeanalysis.png")
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
    .barner-info {
      font-size: 18px;
      font-weight: 400;
      color: #fff;
      line-height: 28px;
      margin-top: 20px;
    }
  }
  .content {
    padding: 40px 0 120px;
    background: #f9f9f9;
    .com-width {
      font-size: 20px;
      font-weight: 400;
    }
  }
}
</style>
