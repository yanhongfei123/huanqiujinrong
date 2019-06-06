<template>
  <div class="account-wrap">
    <div class="top-wrap">
      <div class="item">
        <div class="type">一. 我的金额</div>
        <div class="tb-wrap">
          <div class="tbl-item">
            <div class="label">可投资金额</div>
            <div class="acount">39870</div>
          </div>
          <div class="tbl-item">
            <div class="label">
              冻结金额
              <span class="tips"></span>
            </div>
            <div class="acount">39870</div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="type">一. 证券账户信息</div>
        <div class="tb-wrap">
          <div class="tbl-item">
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
          <div class="q-title">{{val.title}}</div>
          <div v-show="val.showanswer" class="q-answer">{{val.answer}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "account",
  data() {
    return {};
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
    margin-right: 66px;
  }
  .type {
    height: 64px;
    font-size: 20px;
    font-weight: 500;
    color: rgba(20, 20, 22, 1);
    margin-bottom: 20px;
    line-height: 64px;
    border-bottom: 1px solid #d8d8d8;
  }
  .tb-wrap {
    display: flex;
    .tbl-item {
      text-align: center;
      margin-right: 105px;
    }
    .label {
      color: #141416;
      font-size: 16px;
      opacity: 0.5;
      margin-bottom: 36px;
    }
    .acount {
      font-size: 24px;
      font-weight: bold;
      color: rgba(20, 20, 22, 1);
      line-height: 32px;
    }
  }
}
</style>


