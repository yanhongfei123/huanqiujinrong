<template>
  <div class="user-container">
    <header>
      <userCenterHeader path="/userCenter/myAccount"></userCenterHeader>
    </header>
    <div @click="hideMenu($event)" class="user-content">
      <div class="content">
        <div class="title">{{$t('userCenter.text1')}}</div>
        <div class="user-wrap">
          <div class="l-wrap">
            <div :class="[$route.path==='/userCenter/myAccount'?'active':'']" class="item item1">
              <router-link to="/userCenter/myAccount">{{$t('userCenter.text9')}}</router-link>
            </div>
            <div class="line"></div>
            <dl>
              <dt>{{$t('userCenter.text10')}}</dt>
              <dd class="item2" :class="[$route.path==='/userCenter/guide'?'active':'']">
                <router-link to="/userCenter/guide">{{$t('userCenter.text11')}}</router-link>
              </dd>
              <dd
                class="item3"
                :class="[$route.path==='/userCenter/remittanceAccount'?'active':'']"
              >
                <router-link to="/userCenter/remittanceAccount">{{$t('userCenter.text12')}}</router-link>
              </dd>
              <dd class="item4" :class="[$route.path==='/userCenter/depositNotice'?'active':'']">
                <router-link to="/userCenter/depositNotice">{{$t('userCenter.text13')}}</router-link>
              </dd>
            </dl>
            <div class="line"></div>
            <div :class="[$route.path==='/userCenter/extractFunds'?'active':'']" class="item item5">
              <router-link to="/userCenter/extractFunds">{{$t('userCenter.text14')}}</router-link>
            </div>
            <div class="line"></div>
            <div :class="[$route.path==='/userCenter/fundRecords'?'active':'']" class="item item6">
              <router-link to="/userCenter/fundRecords">{{$t('userCenter.text15')}}</router-link>
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
    return {

    };
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
    a,
    dt {
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
    dd {
      a {
        font-size: 18px;
        color: rgba(60, 63, 77, 0.8);
        font-weight: normal;
      }
    }
    .item a::after,
    dt::after {
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
      background-image: url("../../assets/images/user_center/icon_account_black.png");
    }
    dt::after {
      background-image: url("../../assets/images/user_center/icon_deposit_black.png");
    }
    .item5 a::after {
      background-image: url("../../assets/images/user_center/icon_takeout_black.png");
    }
    .item6 a::after {
      background-image: url("../../assets/images/user_center/icon_record_black.png");
    }
    dd {
      position: relative;
    }
    dd::after {
      position: absolute;
      content: "";
      width: 4px;
      height: 4px;
      border-radius: 5px;
      background: #3c3f4d;
      left: 60px;
      top: 50%;
      margin-top: -2px;
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
        background-image: url("../../assets/images/user_center/icon_account_white.png");
      }
      &.item5 a::after {
        background-image: url("../../assets/images/user_center/icon_takeout_white.png");
      }
      &.item6 a::after {
        background-image: url("../../assets/images/user_center/icon_record_white.png");
      }
    }
    .l-wrap {
      width: 250px;
      min-height: 508px;
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
