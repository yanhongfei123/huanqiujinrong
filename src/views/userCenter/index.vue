<template>
  <div class="user-container">
    <header>
      <userCenterHeader path="/userCenter/myAccount"></userCenterHeader>
    </header>
    <div @click="hideMenu($event)" class="user-content">
      <div class="content">
        <div class="title">个人中心</div>

        <!-- 已经进行了资产配置就显示个人中心主页，否则显示当前进度条状态 -->

        <div v-if="openStatus != 5 ">
          <div class="progress-ctn">
            <div
              :class="[index <= openStatus ? 'active' : '']"
              class="progress"
              v-for="(val, index) in openStatusList"
              :key="index"
            >
              <div class="num">{{index + 1}}</div>
              <p>{{val.progressTitle}}</p>
            </div>
          </div>

          <div
            class="btn-openAccount active"
            @click="goPage(openStatusList[openStatus].path)"
          >{{ openStatusList[openStatus].btnText }}</div>

          <div class="review-ctn">
            <div class="img-review"></div>
            <div class="review-info">
              <div class="review-result">您的资料已被提交，正在审核，请您耐心等待</div>
              <div class="btn-openAccount disabled">请前往开户</div>
              <div class="review-tip">
                如您需补交资料，客服人员将会与您联络。温馨提示：完成开户流程预计3-7天。
                <router-link to="/openAccount">查看开户指引</router-link>
              </div>
            </div>
          </div>
          <div class="tips-ctn">
            <div class="tips-title">开户说明</div>
            <p class="tips-desc">
              1. 在用户正式开启投资前，需要完成提交开户信息、注入资金、风险测评3个阶段的工作。整个过程需要填写资料、审核等程序，最快需X-Y个工作日，请耐心等待与配合。
              <br>2. 提交开户信息后，平台需对资料进行审核。为完成香港证监会的监管要求，您将被邀请在香港与我司持牌人士进行线下当面见证，完成见证程序后方可继续开立账户。
              <br>3. 证券账户开通后，方可注入资金。资金到账需等待一段时间。
            </p>
          </div>
        </div>
        <div v-if="openStatus==5" class="user-wrap">
          <div class="l-wrap">
            <div :class="[$route.path==='/userCenter/myAccount'?'active':'']" class="item item1">
              <router-link to="/userCenter/myAccount">我的账户</router-link>
            </div>
            <div class="line"></div>
            <dl>
              <dt>存入资金</dt>
              <dd class="item2" :class="[$route.path==='/userCenter/guide'?'active':'']">
                <router-link to="/userCenter/guide">入金指引</router-link>
              </dd>
              <dd
                class="item3"
                :class="[$route.path==='/userCenter/remittanceAccount'?'active':'']"
              >
                <router-link to="/userCenter/remittanceAccount">汇款账户</router-link>
              </dd>
              <dd class="item4" :class="[$route.path==='/userCenter/depositNotice'?'active':'']">
                <router-link to="/userCenter/depositNotice">存款通知</router-link>
              </dd>
            </dl>
            <div class="line"></div>
            <div :class="[$route.path==='/userCenter/extractFunds'?'active':'']" class="item item5">
              <router-link to="/userCenter/extractFunds">提取资金</router-link>
            </div>
            <div class="line"></div>
            <div :class="[$route.path==='/userCenter/fundRecords'?'active':'']" class="item item6">
              <router-link to="/userCenter/fundRecords">资金记录</router-link>
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
      openStatus: 5,
      checkStatus: 1,
      checkStatusObj:{
        0: {
          text: '您的资料已被提交，正在审核，请您耐心等待',
          btnText:'请前往开户',
        },
        1: {
          text: '您的入金正在审核中 请等待……',
          btnText:'请前往注入资金',
        },
        2: {
          text: '您的配置正在审核中 请等待……',
          btnText:'请前往资产配置',
        },
      },
      openStatusList: [
        {
          progressTitle: "提交开户信息",
          btnText: "请前往开户",
          path: "/openAccount"
        },
        {
          progressTitle: "注入资金",
          btnText: "请前往注入资金",
          path: "/injectFunds"
        },
        {
          progressTitle: "风险测评",
          btnText: "请前往风险评测",
          path: "/analysis/analys"
        },
        {
          progressTitle: "开始配置",
          btnText: "请前往资产配置",
          path: "/configAssets"
        }
      ]
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
  .progress-ctn {
    padding-top: 75px;
    position: relative;
    overflow: hidden;
    width: 1000px;
    margin: 0 auto;
    text-align: center;
    .progress {
      float: left;
      width: 250px;
      border-top: 1px solid #f0f3f7;
      .num {
        width: 40px;
        height: 40px;
        margin: -20px auto 0;
        line-height: 40px;
        border-radius: 50%;
        background: rgba(240, 243, 247, 1);
        box-shadow: 0 5px 20px 0 rgba(240, 243, 247, 1);
      }
      p {
        margin-top: 4px;
        font-size: 16px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #8392a7;
        line-height: 24px;
      }
      &.active {
        border-top: 1px solid #d51d26;
        .num {
          color: #d51d26;
          border: 1px solid #d51d26;
          background-color: #fff;
        }
        p {
          color: #d51d26;
        }
      }
    }
  }
  .btn-openAccount {
    position: relative;
    width: 400px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 28px;
    font-weight: 500;
    font-family: PingFangSC-Medium;
    color: #fff;
    background: #d51d26;
    cursor: pointer;
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 50px;
      height: 80px;
      background-color: #be1a21;
    }
    &:after {
      position: absolute;
      top: 0;
      left: 50px;
      content: "";
      width: 0;
      height: 0;
      border: 40px solid transparent;
      border-left-color: #be1a21;
    }
    &.disabled {
      background-color: #c6c8cc;
      &:before {
        background-color: #9c9fa6;
      }
      &:after {
        border-left-color: #9c9fa6;
      }
    }
    &.active {
      margin: 120px auto 0;
    }
  }
  .review-ctn {
    margin-top: 100px;
    position: relative;
    overflow: hidden;
    .img-review {
      float: left;
      width: 550px;
      height: 396px;
      background: url("~@/assets/images/userCenter/bg_toexamine@2x.png")
        no-repeat center center;
      @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
        background-image: url("~@/assets/images/userCenter/bg_toexamine@3x.png");
      }
      background-size: contain;
    }
    .review-info {
      float: left;
      margin: 20px 0 0 130px;
      width: 500px;
      .review-result {
        margin-bottom: 80px;
        font-size: 48px;
        font-family: SourceHanSansSC-Medium;
        font-weight: 500;
        color: rgba(20, 20, 22, 1);
        line-height: 70px;
      }
      .review-tip {
        width: 400px;
        margin-top: 20px;
        font-size: 16px;
        font-family: SourceHanSansSC-Medium;
        font-weight: 500;
        color: rgba(213, 29, 38, 1);
        line-height: 24px;
        a {
          text-decoration: underline;
          &:hover,
          &:active,
          &:link,
          &:visited {
            color: #d51d26;
          }
        }
      }
    }
  }
  .tips-ctn {
    margin-top: 100px;
    .tips-title {
      height: 33px;
      font-size: 24px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(20, 20, 22, 1);
      line-height: 33px;
    }
    .tips-desc {
      margin: 40px 0 100px;
      height: 100px;
      font-size: 14px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(20, 20, 22, 1);
      line-height: 33px;
    }
  }
}
</style>
