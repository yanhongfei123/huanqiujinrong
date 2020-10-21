<template>
  <header>
    <div class="nav-wrap">
      <div class="logo"></div>
      <div class="nav-cont flex">
        <div class="nav-bar flex"></div>
        <div class="nav-m flex hover"></div>
        <div class="nav-r flex">
<!--          <div
            :class="[$i18n.locale === 'zh'?'active':'']"
            class="hover"
            @click="setLanguage('zh')"
          >{{$t('nav.zh')}}</div>
          <div class="line"></div> -->
          <div
            :class="[$i18n.locale === 'Ft'?'active':'']"
            class="hover"
            @click="setLanguage('Ft')"
          >繁</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "headerNav",
  props: {
    path: {
      default: "/home"
    }
  },
  data() {
    return {};
  },
  methods: {
    goPage(path) {
      this.$router.push(path);
    },
    setLanguage(lang) {
      this.$i18n.locale = lang;
      this.$store.dispatch("setLanguage", lang);
    }
  },
  mounted() {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav-wrap {
  width: 1180px;
  height: 82px;
  margin: 0 auto;
  color: #777983;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .active {
    color: #141416;
  }
  .flex {
    display: flex;
  }
  .hover:hover {
    color: #141416;
  }
  .logo {
    width: 179px;
    height: 39px;
    //background: url("../../assets/images/logo.png") no-repeat;
    //background-size: contain;
  }
  .hover:hover,
  .nav-item:hover {
    color: #141416;
  }
  .nav-item {
    cursor: pointer;
    margin-right: 40px;
  }
  .nav-m {
    cursor: pointer;
    margin-right: 40px;
  }
  .nav-r {
    cursor: pointer;
    align-items: center;
    .line {
      width: 2px;
      height: 24px;
      background: #777983;
      margin: 0 8px;
    }
  }
}
</style>
