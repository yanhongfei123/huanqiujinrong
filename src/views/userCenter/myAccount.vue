<template>
  <div class="account-wrap">
    <div class="top-wrap">
      <div class="item item1">
        <div class="type">一. 我的金额</div>
        <div class="tb-wrap">
          <div class="tbl-item tbl-item1">
            <div class="label">可投资金额</div>
            <div class="acount">398741100</div>
          </div>
          <div class="tbl-item">
            <div class="label">
              冻结金额（港币）
              <tips top="3px" right="-20px">冻结金额冻结金额冻结金额冻结金额冻结金额冻结金额,冻结金额冻结金额冻结金额冻结金额冻结金额冻结金额</tips>
            </div>
            <div class="acount">39870</div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="type">
          一. 证券账户信息
          <router-link to="/">查看证券详情</router-link>
        </div>
        <div class="tb-wrap">
          <div class="tbl-item tbl-item1">
            <div class="label">证券账号</div>
            <div class="acount">xyz39870</div>
          </div>
          <div class="tbl-item">
            <div class="label">用户名</div>
            <div class="acount">xyz39870</div>
          </div>
        </div>
      </div>
    </div>
    <div class="btm-wrap">
      <div class="type">三. 常见问题</div>
      <div class="q-list">
        <div class="q-item" v-for="(val,index) in qList" :key="index">
          <div :class="[val.showanswer?'show':'']" class="icon"></div>
          <div @click="val.showanswer=!val.showanswer" class="q-title">{{val.title}}</div>
          <div v-show="val.showanswer" class="q-answer">{{val.answer}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tips from "../../components/tips.vue";

export default {
  name: "account",
  components: {
    Tips
  },
  data() {
    return {
      qList: [
        {
          showanswer: false,
          title: "最低投资金额是多少？",
          answer:
            "最低投资金额为100,000港币。由于在香港上市的ETF的最低投资金额要求，设立这个投资门槛是为了确保客户能组成一个多元分散的投资组合。"
        },
        {
          showanswer: false,
          title: "最低投资金额是多少？",
          answer:
            "最低投资金额为100,000港币。由于在香港上市的ETF的最低投资金额要求，设立这个投资门槛是为了确保客户能组成一个多元分散的投资组合。"
        },
        {
          showanswer: false,
          title: "最低投资金额是多少？",
          answer:
            "最低投资金额为100,000港币。由于在香港上市的ETF的最低投资金额要求，设立这个投资门槛是为了确保客户能组成一个多元分散的投资组合。"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.account-wrap {
  .top-wrap {
    display: flex;
    padding-bottom: 40px;
    margin-bottom: 20px;
    border-bottom: 1px solid #d8d8d8;
  }
  .item {
    width: 400px;
  }
  .item1 {
    margin-right: 66px;
  }
  .type {
    height: 64px;
    font-size: 20px;
    font-weight: 600;
    color: rgba(20, 20, 22, 1);
    margin-bottom: 20px;
    line-height: 64px;
    border-bottom: 1px solid #d8d8d8;
    a {
      float: right;
      font-size: 16px;
      color: #d51d26;
    }
  }
  .tb-wrap {
    display: flex;
    .tbl-item {
      text-align: center;
    }
    .tbl-item1 {
      margin-right: 130px;
    }
    .label {
      position: relative;
      color: rgba(20, 20, 22, 0.5);
      font-size: 16px;
      margin-bottom: 36px;
    }
    .acount {
      font-size: 24px;
      font-weight: bold;
      color: rgba(20, 20, 22, 1);
      line-height: 32px;
    }
  }
  .btm-wrap {
    .type {
      margin: 0;
      border: none;
    }
    .q-title {
      font-size: 16px;
      font-weight: 500;
      color: rgba(20, 20, 22, 0.8);
      line-height: 24px;
      margin-bottom: 20px;
      cursor: pointer;
    }
    .q-answer {
      font-size: 14px;
      color: rgba(60, 63, 77, 1);
      line-height: 20px;
      margin-bottom: 20px;
    }
    .q-list {
      margin-left: 35px;
    }
    .q-item {
      position: relative;
    }
    .icon {
      position: absolute;
      top: 5px;
      left: -35px;
      width: 16px;
      height: 16px;
      background: url("../../assets/images/user_center/btn_jia.png");
      background-size: contain;
    }
    .show {
      background: url("../../assets/images/user_center/btn_expand.png");
    }
  }
}
</style>


