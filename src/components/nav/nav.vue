<template>
  <div class="nav-wrap">
    <div class="logo"></div>
    <div class="nav-cont flex">
      <div class="nav-bar flex">
        <div :class="[path === '/home' ? 'active' : '', 'nav-item']" @click="goPage('/home')">{{$t('nav.home')}}</div>
        <div
          :class="[path === '/operation' ? 'active' : '','nav-item']"
          @click="goPage('/operation')"
        >{{$t('nav.operation')}}</div>
        <div
          :class="[path === '/product' ? 'active' : '', 'nav-item']"
          @click="goPage('/product')"
        >{{$t('nav.product')}}</div>
        <div :class="[path === '/find' ? 'active' : '', 'nav-item']" @click="goPage('/find')">{{$t('nav.find')}}</div>
        <div
          :class="[path === '/organization' ? 'active' : '', 'nav-item']"
          @click="goPage('/organization')"
        >{{$t('nav.organization')}}</div>
        <div
          :class="[path === '/analysis/analys' ? 'active' : '', 'nav-item']"
          @click="goPage('/analysis/analys')"
        >{{$t('nav.analysis')}}</div>
      </div>
      <div class="nav-m flex">
        <div class="hover" @click="goPage('/login')">{{$t('nav.login')}}</div>
        <div class="hover" @click="goPage('/register')">{{$t('nav.register')}}</div>
      </div>
      <div class="nav-r flex">
        <div :class="[$i18n.locale === 'zh'?'active':'']" class="hover" @click="setLanguage('zh')">简</div>
        <div class="line"></div>
        <div :class="[$i18n.locale === 'Ft'?'active':'']" class="hover" @click="setLanguage('Ft')">繁</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headernav",
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
  color: #3c3f4d;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .flex {
    display: flex;
  }
  .logo {
    width: 179px;
    height: 39px;
    background: url("../../assets/images/logo.png") no-repeat;
    background-size: contain;
  }
  .nav-item {
    cursor: pointer;
    margin-right: 40px;
    opacity: 0.7;
  }
  .nav-m {
    cursor: pointer;
    margin-right: 40px;
    div {
      opacity: 0.7;
    }
  }
  .nav-r {
    cursor: pointer;
    align-items: center;
    div {
      opacity: 0.7;
    }
    .line {
      width: 2px;
      height: 18px;
      background: #3c3f4d;
      margin: 0 8px;
    }
  }
  .active,.nav-r .active  {
    color: #141416;
    opacity: 1;
  }
  .hover:hover,
  .nav-item:hover {
    color: #141416;
    opacity: 1;
  }
}
</style>
