<template>
  <div class="nav-wrap">
    <div class="logo"></div>
    <div class="nav-cont flex">
      <div class="nav-bar flex">
        <div :class="[$route.path === '/home' ? 'active' : '', 'nav-item']" @click="goPage('home')">首页</div>
        <div :class="[$route.path === '/operation' ? 'active' : '','nav-item']" @click="goPage('operation')">如何运作</div>
        <div :class="[$route.path === '/product' ? 'active' : '', 'nav-item']" @click="goPage('product')">产品</div>
        <div :class="[$route.path === '/find' ? 'active' : '', 'nav-item']" @click="goPage('find')">发现</div>
        <div :class="[$route.path === '/organization' ? 'active' : '', 'nav-item']" @click="goPage('organization')">机构</div>
        <div :class="[$route.path === '/analysis' ? 'active' : '', 'nav-item']" @click="goPage('analysis')">免费分析</div>
      </div>
      <div class="nav-m flex hover">
        <div class="hover" @click="goPage('login')">登录</div>
        <div class="hover" @click="goPage('register')">注册</div>
      </div>
      <div class="nav-r flex">
        <div class="hover" @click="setLanguage('zh')">简</div>
        <div class="line"></div>
        <div class="hover" @click="setLanguage('ft')">繁</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headernav",
  data() {
    return {};
  },
  methods: {
    goPage(path){
      this.$router.push(path)
    },
    setLanguage(lang) {
      this.$i18n.locale = lang;
      this.$store.dispatch("setLanguage", lang);
    }
  },
  mounted(){
    console.log(this.$route)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav-wrap {

  
  width: 1180px;
  height: 82px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: bold;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .active{
    color: #333;
  }
  .flex {
    display: flex;
  }
  .hover:hover{
    color: #333;
  }
  .logo {
    width: 179px;
    height: 39px;
    background: url("../../assets/images/banner01.jpg") no-repeat;
    background-size: contain;
  }
  .hover:hover,
  .nav-item:hover
  {
    color: #333;
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
      height: 18px;
      background: #666;
      margin: 0 8px;
    }
  }
}
</style>
