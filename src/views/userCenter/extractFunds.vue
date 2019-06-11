<template>
  <div class="extractFunds">
    <div class="cash-wrap">
      <div class="label">一.现金余额 (*准确金额以IB账户内现金结余为准)</div>
      <div class="wrap clear">
        <div class="item item1 fl">
          <div class="type">港币</div>
          <div class="amount">
            HKD
            <span>39,870.00</span>
          </div>
        </div>
        <div class="item fl">
          <div class="type">美元</div>
          <div class="amount">
            USD
            <span>39,870.00</span>
          </div>
        </div>
      </div>
    </div>
    <div class="info-wrap">
      <div class="label">二.出金须知</div>
      <div class="info">您的证券持仓及资金被托管在盈透证券香港有限公司（“盈透证券”）及其托管银行。您于（产品名称）系统卖出持仓后，将需要登入盈透证券系统提取资金。</div>
      <div class="info">
        点击查看
        <span>详细指引</span>
      </div>
      <div class="info">您需要使用您的同名银行账户进行资金提取。我们建议您使用香港银行账户。</div>
    </div>
    <div class="btm-wrap">
      <div class="label">三. 常见问题</div>
      <div class="q-list">
        <div class="q-item" v-for="(val,index) in qList" :key="index">
          <div :class="[val.showanswer?'show':'']" class="icon"></div>
          <div @click="val.showanswer=!val.showanswer" class="q-title">{{val.title}}</div>
          <div v-show="val.showanswer" class="q-answer">{{val.answer}}</div>
        </div>
      </div>
    </div>
    <div class="label">四.如您希望提取投资组合中的全部资产，请您点击“卖出全部持仓”</div>
    <div @click="showmask=true" class="submit">卖出全部持仓</div>
    <div v-if="showmask" class="mask">
      <div class="content">
        <div @click="showmask=false" class="close"></div>
        <div class="title">输入交易密码</div>
        <div class="des tl">卖出持仓后，您将无法享受到收益，请慎重决定！如已考虑清楚，请在下方输入交易密码。</div>
        <div class="pas-wrap">
          <el-input maxlength="6" placeholder="请输入6位交易密码" v-model="password" clearable></el-input>
        </div>
        <div class="tips">
          <span v-show="showerror">请输入正确的交易密码</span>
        </div>
        <el-button class="confirm" type="primary">确 定</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "extractFunds",
  components: {},
  data() {
    return {
      password: "",
      showmask: false,
      showerror: true,
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
.label {
  font-size: 20px;
  color: #141416;
  font-weight: bold;
  margin: 40px 0 20px;
}
.wrap {
  margin-top: 40px;
  .item {
    width: 175px;
    text-align: center;
  }
  .item1 {
    margin-right: 240px;
  }
  .type {
    font-size: 16px;
    color: rgba(20, 20, 22, 0.5);
  }
  .amount {
    font-size: 24px;
    font-weight: bold;
    color: rgba(20, 20, 22, 1);
    line-height: 32px;
    margin-top: 35px;
  }
}

.info-wrap {
  .info {
    font-size: 14px;
    font-weight: 500;
    color: rgba(20, 20, 22, 1);
    line-height: 20px;
    margin-bottom: 20px;
  }
}

.btm-wrap {
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
    top: 4px;
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
.submit {
  width: 400px;
  height: 80px;
  line-height: 80px;
  margin: 60px auto 40px;
  font-size: 28px;
  color: #fff;
  text-align: center;
  opacity: 0.9;
  cursor: pointer;
  background: url("../../assets/images/other_btn/btn_red400.png") no-repeat
    center;
  background-size: 100%;
  &:hover {
    opacity: 1;
  }
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  .content {
    position: relative;
    width: 416px;
    height: 280px;
    padding: 20px 78px;
    background: #fff;
    border-radius: 8px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -140px 0 0 -208px;
    box-shadow: 0px 0px 12px 3px #666;
  }
  .title {
    font-size: 18px;
    color: #333;
    margin-bottom: 20px;
    font-weight: bold;
  }
  .des {
    font-size: 14px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 21px;
    margin-bottom: 20px;
  }
  .tips {
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    color: #d51d26;
    text-align: left;
  }
  .close {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 10px;
    top: 10px;
    background: url("../../assets/images/icon_delete.png");
    background-size: contain;
  }
  .pas-wrap {
    box-shadow: 0px 0px 8px 1px rgba(239, 242, 247, 1);
  }
  .confirm {
    width: 100%;
    height: 36px;
  }
}
</style>
