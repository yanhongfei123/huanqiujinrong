<template>
  <div class="nav-wrap">
    <div class="logo"></div>
    <div class="nav-cont flex">
      <div class="nav-bar flex">
        <div
          :class="[path === '/accountPreView' ? 'active' : '', 'nav-item']"
          @click="goPage('/accountPreView')"
        >{{$t('userCenterNav.account')}}</div>
        <div
		   v-show="state == 3 || state == 5 || state == 6 || state == -5"
          :class="[path === '/investCombination/accountDetail' ? 'active' : '','nav-item']"
          @click="goPage('/investCombination/accountDetail')"
        >{{$t('userCenterNav.operation')}}</div>
        <div
		  v-show="state == 3 || state == 5 || state == 6 || state == -5"
          :class="[path === '/userCenter/myAccount' ? 'active' : '', 'nav-item']"
          @click="goPage('/userCenter/myAccount')"
        >{{$t('userCenterNav.myAccount')}}</div>
      </div>
      <div class="user-wrap nav-item">
        <span v-if="token" @click="goPage('/messageCenter')" class="notice">
          <i v-if="isshowmsg"></i>
        </span>
        <span
          v-if="token && isshow"
          :class="[path === '/find' ? 'active' : '', 'realName-auth']"
          @click="$store.dispatch('showMenu', true)"
        >{{$t('userCenterNav.realName')}}</span>
        <span class="active" v-if="token && !isshow" @click="showMenu($event)">{{userName}}</span>
        <ul v-show="showmenu" :class="[showmenu?'show':'']" class="dropMenu">
          <li v-if="isshow" @click="goPage('/openAccount')">{{$t('userCenterNav.goOpen')}}</li>
          <li v-if="!isshow" @click="goPage('/userCenter')" class="user-center">{{$t('userCenterNav.userCenter')}}</li>
          <li v-if="!isshow" @click="goPage('/setting')" class="setting">{{$t('userCenterNav.setting')}}</li>
          <li @click="goPage('/loginOut')" class="login-out">{{$t('userCenterNav.loginOut')}}</li>
        </ul>
      </div>
      <div v-if="!token" class="nav-m flex">
        <div class="hover" @click="goPage('/login')">{{$t('nav.login')}}</div>
        <div class="hover" @click="goPage('/register')">{{$t('nav.register')}}</div>
      </div>
      <div class="nav-r flex">
<!--        <div
          :class="[$i18n.locale === 'zh'?'active':'']"
          class="hover"
          @click="setLanguage('zh')"
        >{{$t('nav.zh')}}</div>
        <div class="line"></div> -->
        <div :class="[$i18n.locale === 'Ft'?'active':'']" class="hover" @click="setLanguage('Ft')">繁</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getUserInfo } from "@/api";
export default {
  name: "headerNav",
  props: {
    path: {
      default: "/home"
    }
  },
  computed: {
    ...mapGetters(["token"]),
    showmenu() {
      return this.$store.state.user.showmenu;
    }
  },
  data() {
    return {
      userName: "",
      isshowmsg: true,
      isshow: true,
	  state: 0,
    };
  },
  methods: {
    showMenu(event) {
      this.$store.dispatch("showMenu", true);
    },
    goPage(path) {
      if (path == "/loginOut") {
        this.$store.dispatch("LogOut").then(() => {
          this.$router.push("/login");
        });
        return;
      }
      this.$router.push(path);
    },
    setLanguage(lang) {
      this.$i18n.locale = lang;
      this.$store.dispatch("setLanguage", lang);
    }
  },
  created(){
    if (this.token) {
      getUserInfo().then(res=>{
        var data = res.data;
		this.state = data.state;
        this.$emit('getUserInfo', data)
        var userName = ((data.surnameChina || '') + (data.nameChina || ''));
        var userName_en = ((data.surnameUS || '') + (data.nameUS || ''));
        if (userName || userName_en) {
          this.isshow = false;
          this.userName = this.$i18n.locale == 'En' ? userName_en : userName;
        }
      });
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
    //height: 130px;
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
      margin: 25px 0 0;
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
  .active,
  .nav-r .active {
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
.realName-auth {
  padding: 1px 6px;
  margin-left: 5px;
  border-radius: 4px;
  border: 1px solid #979797;
}
</style>
