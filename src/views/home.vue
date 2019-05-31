<template>
  <div class="page-home">
    <header>
      <headerNav></headerNav>
    </header>
    <div class="barner">
      <div class="barner-content">
        <div class="barner-info">香港 >> 新一代至 COOL 的投资</div>
        <div class="start-ivest">开启我的投资之旅</div>
      </div>
    </div>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <footerBar></footerBar>
  </div>
</template>

<script>
// @ is an alias to /src
import headerNav from "@/components/nav/nav.vue";
import footerBar from "@/components/footer/footer.vue";

export default {
  name: "home",
  components: {
    headerNav, footerBar
  },
  computed: {},
  data() {
    return {
      //dashboard: this.$t('route.dashboard')
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
header {
  position: fixed;
  width: 100%;
  height: 82px;
  top: 0;
  z-index: 100;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(227, 227, 227, 0.5);
}
.barner {
  position: relative;
  height: 700px;
  margin-top: 82px;
  background: url("../assets/images/banner01.jpg") no-repeat center;
  background-size: cover;
  .barner-content {
    width: 900px;
    margin: 0 auto;
    position: relative;
    color: #fff;
    top: 435px;
  }
  .barner-info {
    font-size: 32px;
    color: #000;
    margin-bottom: 50px;
  }
  .start-ivest {
    position: relative;
    width: 400px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 28px;
    color: #333;
    background: #e2c6ab;
    cursor: pointer;
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 0;
      height: 0;
      border: 40px solid transparent;
      border-left-color: #d3b291;
    }
  }
}
</style>
