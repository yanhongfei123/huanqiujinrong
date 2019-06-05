<template>
    <div class="nav-wrap">
        <div class="logo"></div>
        <div class="nav-cont flex">
            <div class="nav-bar flex">
                <div :class="[path === '/account' ? 'active' : '', 'nav-item']" @click="goPage('home')">账户总览</div>
                <div :class="[path === '/operation' ? 'active' : '','nav-item']" @click="goPage('operation')">投资组合</div>
                <div :class="[path === '/product' ? 'active' : '', 'nav-item']" @click="goPage('product')">资金出入</div>
                <div :class="[path === '/find' ? 'active' : '', 'nav-item realName-auth']" @click="goPage('find')">实名认证</div>
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
    name: 'header',
    props: {
      path: {
        default: '/home'
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
        this.$store.dispatch('setLanguage', lang);
      }
    },
    mounted() {
      console.log(this.$route);
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
            background: url("../../assets/images/logo.png") no-repeat;
            background-size: contain;
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
                background: #3C3F4D;
                margin: 0 8px;
            }
        }
    }
    .realName-auth{
        padding: 0 10px;
        line-height: 36px;
        border-radius: 4px;
        border:1px solid #979797;
    }

</style>
