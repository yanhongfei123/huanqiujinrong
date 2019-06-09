<template>
  <div class="nav-wrap">
    <div class="logo"></div>
    <div class="nav-cont flex">
      <div class="nav-bar flex">
        <div :class="[path === '/account' ? 'active' : '', 'nav-item']" @click="goPage('/')">账户总览</div>
        <div :class="[path === '/operation' ? 'active' : '','nav-item']" @click="goPage('/')">投资组合</div>
        <div
          :class="[path === '/userCenter/myAccount' ? 'active' : '', 'nav-item']"
          @click="goPage('/userCenter/myAccount')"
        >资金出入</div>
        <div
          v-if="!isshowusername"
          :class="[path === '/find' ? 'active' : '', 'nav-item realName-auth']"
          @click="goPage('/openAccount')"
        >请实名</div>
      </div>
      <div v-if="isshowusername" class="user-wrap nav-item active">
        <span @click="goPage('/messageCenter')" class="notice">
          <i v-if="isshowmsg"></i>
        </span>
        <span @click="showMenu($event)">刘某某</span>
        <ul v-show="showmenu" :class="[showmenu?'show':'']" class="dropMenu">
          <li @click="goPage('/userCenter')" class="user-center">个人中心</li>
          <li @click="goPage('/setting')" class="setting">个人设置</li>
          <li @click="goPage('/loginOut')" class="login-out">退出登录</li>
        </ul>
      </div>
      <!-- <div class="nav-m flex hover">
        <div class="hover" @click="goPage('login')">登录</div>
        <div class="hover" @click="goPage('register')">注册</div>
      </div>-->
      <div class="nav-r flex">
        <div class="hover" @click="setLanguage('zh')">简</div>
        <div class="line"></div>
        <div class="hover" @click="setLanguage('ft')">繁</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "header",
  props: {
    path: {
      default: "/home"
    }
  },
  computed: {
    //...mapGetters(["showmenu"]),
    showmenu() {
      return this.$store.state.user.showmenu;
    }
  },
  data() {
    return {
      isshowmsg: true,
      isshowusername: true
    };
  },
  methods: {
    showMenu(event) {
      console.log(event.target);
      this.$store.dispatch("showMenu", true);
    },
    goPage(path) {
      if (path == "/loginOut") {
        alert("退出登录");
        return;
      }
      this.$router.push(path);
    },
    setLanguage(lang) {
      this.$i18n.locale = lang;
      this.$store.dispatch("setLanguage", lang);
    }
  },
  mounted() {
    this.$store.dispatch("showMenu", false);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.user-wrap {
  position: relative;
  .dropMenu {
    position: absolute;
    top: 44px;
    left: 0px;
    opacity: 0;
    transform: translateY(-120%);
    transition: all 0.3s;
    width: 108px;
    height: 130px;
    background: #fff;
    color: rgba(20, 20, 22, 0.7);
    font-size: 14px;
    padding: 14px 12px;
    border-radius: 6px;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
    &.show {
      transform: none;
      opacity: 1;
    }
    &::after {
      position: absolute;
      left: 0;
      bottom: 47px;
      content: "";
      width: 108px;
      border-bottom: 1px solid #dcdcdc;
    }
    li {
      line-height: 22px;
      margin-bottom: 12px;
      padding-left: 23px;
      background-position: left center;
      background-repeat: no-repeat;
      background-size: auto 62%;
      &:hover {
        text-decoration: underline;
      }
    }
    .user-center {
      background-image: url("../../assets/images/icon_personal.png");
    }
    .setting {
      background-image: url("../../assets/images/icon_setup.png");
    }
    .login-out {
      margin-top: 25px;
      background-image: url("../../assets/images/icon_signout.png");
    }
  }
  .notice {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 6px;
    vertical-align: -2px;
    background: url("../../assets/images/icon_push.png") no-repeat center;
    background-size: contain;
    i {
      position: absolute;
      right: -2px;
      top: -2px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
      background: #d51d26;
    }
  }
}
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
      background: #777983;
      margin: 0 8px;
    }
  }
}
.realName-auth {
  padding: 0 10px;
  line-height: 36px;
  border-radius: 4px;
  border: 1px solid #979797;
}
</style>
