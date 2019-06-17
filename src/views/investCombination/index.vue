<template>
  <div class="account-preview">
    <header>
      <userCenterHeader path="/investCombination/accountDetail"></userCenterHeader>
    </header>
    <div @click="hideMenu($event)" class="content">
      <div class="com-width">
        <div class="title">{{$t('userCenter.text1')}}</div>
        <div class="main">
          <div class="wrap1">
            <div class="item">
              <div class="label">投资金额（港币）</div>
              <div class="amount">3,000,000.00</div>
            </div>
            <div class="item">
              <div class="label">
                <span>
                  累计收益（港币）
                  <tips top="0" right="-20px">您的账户中可能包含以其他币种计费的利息或分红。其价值将按照当日参考汇率以港币显示并计入收益中。</tips>
                </span>
              </div>
              <div class="amount">3,000,000.00</div>
            </div>
            <div class="item">
              <div class="label">
                <span>
                  收益率（%）
                  <tips
                    top="0"
                    right="-20px"
                  >是指根据该账户不同时期的投资金额，计算其首次配置以来整个时间区间收益率的几何平均数，即时间加权收益率。其优点是考虑了资金的时间价值，不受现金流的影响，是业界常用的回报计算方式。</tips>
                </span>
              </div>
              <div class="amount">3,000,000.00</div>
            </div>
          </div>
          <div class="tab-wrap">
            <div
              @click="changeTab(val.path)"
              :class="[$route.path===val.path?'active':'']"
              v-for="(val,index) in typeList"
              :key="index"
              class="tab-item"
            >{{val.title}}</div>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
    <footerBar></footerBar>
  </div>
</template>
<script>
import Tips from "@/components/tips.vue";
import userCenterHeader from "@/components/header/userCenterHeader.vue";
import footerBar from "@/components/footer/footer.vue";
export default {
  name: "accountPreview",
  components: {
    Tips,
    userCenterHeader,
    footerBar
  },
  data() {
    return {
      oIndex: 0,
      typeList: [
        {
          title: "组合详情",
          path: "/investCombination/accountDetail"
        },
        {
          title: "历史表现",
          path: "/investCombination/xxx"
        },
        {
          title: "组合分析",
          path: "/investCombination/xxxx"
        },
        {
          title: "投资记录",
          path: "/investCombination/xxxx"
        }
      ]
    };
  },
  mounted() {
    
  },
  methods: {
    changeTab(path) {
      this.$router.push(path)
    },
    hideMenu(flag) {
      this.$store.dispatch("showMenu", false);
    }
  }
};
</script>

<style lang="scss" scoped>
.account-preview {
  background: #f9f9f9;
  .content {
    padding-top: 40px;
  }
  .main {
    width: 1020px;
    margin: 55px auto 100px;
  }
  .title {
    font-size: 40px;
    font-family: SourceHanSansSC-Medium;
    font-weight: 500;
    color: rgba(60, 63, 77, 1);
    line-height: 58px;
  }
  .tab-wrap {
    margin: 80px auto 50px;
    display: flex;
    justify-content: center;
  }
  .tab-item {
    font-size: 20px;
    color: #444857;
    padding: 0 8px 14px;
    margin: 0 50px;
    border-bottom: 5px solid transparent;
    &.active {
      position: relative;
      color: #d51d26;
      font-weight: bold;
      border-bottom-color: #d51d26;
    }
  }
  .rw-label {
    span {
      position: relative;
    }
  }
  .wrap1 {
    display: flex;
    justify-content: space-between;
    .item {
      width: 312px;
      height: 106px;
      padding-top: 22px;
      background: #fff;
      text-align: center;
    }
    .label {
      font-size: 16px;
      color: rgba(20, 20, 22, 1);
      line-height: 22px;
      span {
        position: relative;
      }
    }
    .amount {
      font-size: 24px;
      font-weight: bold;
      color: rgba(20, 20, 22, 1);
      line-height: 32px;
      margin-top: 6px;
    }
  }
}
</style>
