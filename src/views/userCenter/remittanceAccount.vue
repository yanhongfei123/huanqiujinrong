<template>
  <div class="remittanceAccount clear">
    <div class="item">
      <div class="label">1.请选择您的币种</div>
      <div class="radio-wrap">
        <el-radio v-model="radio1" label="1">港币</el-radio>
      </div>
      <div class>
        <el-radio v-model="radio1" label="2">美元</el-radio>
      </div>
    </div>
    <div class="item">
      <div class="label">2.请选择您的入金方式</div>
      <div class="radio-wrap">
        <el-radio v-model="radio2" label="1">电汇</el-radio>
      </div>
      <div class>
        <el-radio v-model="radio2" label="2">支票</el-radio>
      </div>
    </div>
    <div class="clear" v-if="radio2 == 1">
      <div class="item">
        <div class="label">3.银行名称：</div>
        <div class="text">Citibank, N.A. (Hong Kong Branch)</div>
      </div>
      <div class="item">
        <div class="label">4.银行地址：</div>
        <div class="text">50/F Citibank Tower Plaza, 3 Garden Road, Central HK, Hong Kong</div>
      </div>
      <div class="item">
        <div class="label">5.SWIFT BIC代码：</div>
        <div class="text">CITIHKHX</div>
      </div>
      <div class="item">
        <div class="label">6.银行代码：</div>
        <div class="text">6</div>
      </div>
      <div class="item">
        <div class="label">7.分行代码：</div>
        <div class="text">391</div>
      </div>
      <div class="item">
        <div class="label">8.银行账户名称：</div>
        <div class="text">Interactive Brokers Hong Kong Limited</div>
      </div>
      <div class="item">
        <div class="label">9.银行账户地址：</div>
        <div class="text">Suite 1512, Two pacific Place 88 Queensway, Hong Kong</div>
      </div>
      <div class="item">
        <div class="label">10.银行账户号码：</div>
        <div class="text">410345170</div>
      </div>
      <div class="item">
        <div class="label">11.收益方：</div>
        <div class="text">U10179873 / SAI CHUNG LUi</div>
      </div>
    </div>
    <div class="clear" v-if="radio2 == 2">
      <div class="item">
        <div class="label">3.支票抬头：</div>
        <div class="text">Interactive Brokers HONG KONG Limited</div>
      </div>
      <div class="item">
        <div class="label">4.盈透证券办公室地址：</div>
        <div class="text">Suite 1512, Two Pacific Place, 88 Queensway. Hong Kong</div>
      </div>
      <div class="item">
        <div class="label">5.Attn：</div>
        <div class="text">IBCD</div>
      </div>
      <div class="msg">6.请您填写金额，日期及签署,请将您的姓名全拼写在支票背面方便我们核对（支票入金的最低金额为80,000港元），请您将完成填写的支票拍照，于存款通知界面上传。并直接将支票寄往盈透证券办公室。</div>
      <div class="msg">以陈小姐入金100,000.00港币为例</div>
      <div class="ticket">
        <img class="l-img" width="340"  height="193" src="../../assets/images/firstpage/banner_conditions.png" alt="">
        <img width="340"  height="193" src="../../assets/images/firstpage/banner_conditions.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio1: "1",
      radio2: "1"
    };
  }
};
</script>
<style lang="scss" scoped>
.remittanceAccount {
  padding-top: 40px;
  overflow: hidden;
  .item {
    float: left;
    width: 390px;
    min-height: 90px;
    margin: 0 20px 20px 0;
  }
  .label {
    font-size: 16px;
    font-weight: 400;
    color: #141416;
    line-height: 32px;
    margin-bottom: 20px;
    opacity: 0.8;
  }
  .text{
    color: #3C3F4D;
    font-weight: bold;
  }
  .radio-wrap {
    margin-bottom: 20px;
  }
  .msg{
    clear: both;
    font-size:16px;
    color:rgba(20,20,22,0.8);
    line-height:32px;
  }
  .ticket{
    margin-top: 20px;
    .l-img{
      margin-right: 70px;
    }
  }
}
</style>

