<template>
  <div class="user-container">
    <header>
      <userCenterHeader></userCenterHeader>
    </header>
    <div @click="hideMenu($event)" class="user-content">
      <div class="content">
        <div class="title">{{$t('setting.text1')}}</div>
        <div class="user-wrap">
          <div class="l-wrap">
            <div :class="[$route.path==='/setting/information'?'active':'']" class="item item1">
              <router-link to="/setting/information">{{$t('setting.text2')}}</router-link>
            </div>
            <div class="line"></div>
            <div :class="[$route.path==='/setting/resetLoginPas'?'active':'']" class="item item2">
              <router-link to="/setting/resetLoginPas">{{$t('setting.text3')}}</router-link>
            </div>
            <div class="line"></div>
            <div :class="[$route.path==='/setting/resetTranPas'?'active':'']" class="item item3">
              <router-link to="/setting/resetTranPas">{{$t('setting.text4')}}</router-link>
            </div>
            <div class="line"></div>
            <div
              :class="[$route.path==='/setting/customerFeedback'?'active':'']"
              class="item item4"
            >
              <router-link to="/setting/customerFeedback">{{$t('setting.text5')}}</router-link>
            </div>
          </div>
          <div class="r-wrap">
            <router-view/>
          </div>
        </div>
      </div>
      <footerBar></footerBar>
    </div>
  </div>
</template>

<script>
import userCenterHeader from "@/components/header/userCenterHeader.vue";
import footerBar from "@/components/footer/footer.vue";

export default {
  name: "userCenter",
  components: {
    userCenterHeader,
    footerBar
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    goPage(path) {
      this.$router.push(path);
    },
    hideMenu(flag) {
      this.$store.dispatch("showMenu", false);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.user-container {
  background: #f9f9f9;
  .content {
    width: 1180px;
    margin: 0 auto;
    padding: 40px 0 100px;
  }
  .user-wrap {
    display: flex;
    margin-top: 40px;
    .line {
      width: 170px;
      height: 1px;
      margin: 12px auto;
      background: rgba(216, 216, 216, 1);
      border: 1px solid rgba(220, 220, 220, 1);
    }
    a {
      position: relative;
      font-size: 20px;
      color: #3c3f4d;
      font-weight: bold;
      display: block;
      width: 210px;
      height: 40px;
      margin: 0 auto;
      text-align: center;
      line-height: 40px;
    }
    .item2,
    .item3 {
      text-indent: 42px;
    }
    .item a::after {
      position: absolute;
      content: "";
      width: 24px;
      height: 24px;
      left: 22px;
      top: 50%;
      margin-top: -12px;
      background-position: center;
      background-size: 100%;
    }
    .item1 a::after {
      background-image: url("../../assets/images/personal/icon_data_black.png");
    }
    .item2 a::after {
      background-image: url("../../assets/images/personal/icon_modify_black.png");
    }
    .item3 a::after {
      background-image: url("../../assets/images/personal/icon_transaction_black.png");
    }
    .item4 a::after {
      background-image: url("../../assets/images/personal/icon_feedback_black.png");
    }
    .active {
      &::after {
        background: #fff;
      }
      a {
        color: #fff;
        background: #d51d26;
      }
      &.item1 a::after {
        background-image: url("../../assets/images/personal/icon_data_white.png");
      }
      &.item2 a::after {
        background-image: url("../../assets/images/personal/icon_modify_white.png");
      }
      &.item3 a::after {
        background-image: url("../../assets/images/personal/icon_transaction_white.png");
      }
      &.item4 a::after {
        background-image: url("../../assets/images/personal/icon_feedback_white.png");
      }
    }
    .l-wrap {
      width: 250px;
      min-height: 420px;
      padding-top: 34px;
      box-sizing: border-box;
      background: #f3f3f3;
    }
    .r-wrap {
      width: 930px;
      background: #fff;
      padding: 0 0 0 40px;
      box-sizing: border-box;
    }
  }
  .title {
    font-size: 40px;
    font-family: SourceHanSansSC-Medium;
    font-weight: 500;
    color: rgba(60, 63, 77, 1);
    line-height: 58px;
  }
}
</style>
