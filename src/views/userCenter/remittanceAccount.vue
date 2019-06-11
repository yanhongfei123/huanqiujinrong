<template>
  <div class="remittanceAccount clear">
    <div class="item">
      <div class="label">1.{{$t('userCenter.remittanceAccount.text1')}}</div>
      <div class="radio-wrap">
        <el-radio v-model="radio1" label="1">{{$t('userCenter.remittanceAccount.text2')}}</el-radio>
      </div>
      <div class>
        <el-radio disabled v-model="radio1" label="2">{{$t('userCenter.remittanceAccount.text3')}}</el-radio>
      </div>
    </div>
    <div class="item">
      <div class="label">2.{{$t('userCenter.remittanceAccount.text4')}}</div>
      <div class="radio-wrap">
        <el-radio v-model="radio2" label="1">{{$t('userCenter.remittanceAccount.text5')}}</el-radio>
      </div>
      <div class>
        <el-radio v-model="radio2" label="2">{{$t('userCenter.remittanceAccount.text6')}}</el-radio>
      </div>
    </div>
    <div class="clear" v-if="radio2 == 1">
      <div class="item">
        <div class="label">3.{{$t('userCenter.remittanceAccount.text7')}}</div>
        <div class="text">Citibank, N.A. (Hong Kong Branch)</div>
      </div>
      <div class="item">
        <div class="label">4.{{$t('userCenter.remittanceAccount.text8')}}</div>
        <div class="text">50/F Citibank Tower Plaza, 3 Garden Road, Central HK, Hong Kong</div>
      </div>
      <div class="item">
        <div class="label">5.SWIFT BIC{{$t('userCenter.remittanceAccount.text19')}}：</div>
        <div class="text">CITIHKHX</div>
      </div>
      <div class="item">
        <div class="label">6.{{$t('userCenter.remittanceAccount.text9')}}</div>
        <div class="text">6</div>
      </div>
      <div class="item">
        <div class="label">7.{{$t('userCenter.remittanceAccount.text10')}}</div>
        <div class="text">391</div>
      </div>
      <div class="item">
        <div class="label">8.{{$t('userCenter.remittanceAccount.text11')}}</div>
        <div class="text">Interactive Brokers Hong Kong Limited</div>
      </div>
      <div class="item">
        <div class="label">9.{{$t('userCenter.remittanceAccount.text12')}}</div>
        <div class="text">Suite 1512, Two pacific Place 88 Queensway, Hong Kong</div>
      </div>
      <div class="item">
        <div class="label">10.{{$t('userCenter.remittanceAccount.text13')}}</div>
        <div class="text">410345170</div>
      </div>
      <div class="item">
        <div class="label">11.{{$t('userCenter.remittanceAccount.text14')}}</div>
        <div class="text">U10179873 / SAI CHUNG LUi</div>
      </div>
    </div>
    <div class="clear" v-if="radio2 == 2">
      <div class="item">
        <div class="label">3.{{$t('userCenter.remittanceAccount.text15')}}</div>
        <div class="text">Interactive Brokers HONG KONG Limited</div>
      </div>
      <div class="item">
        <div class="label">4.{{$t('userCenter.remittanceAccount.text16')}}</div>
        <div class="text">Suite 1512, Two Pacific Place, 88 Queensway. Hong Kong</div>
      </div>
      <div class="item">
        <div class="label">5.Attn：</div>
        <div class="text">IBCD</div>
      </div>
      <div class="msg">6.{{$t('userCenter.remittanceAccount.text17')}}</div>
      <div class="msg">{{$t('userCenter.remittanceAccount.text18')}}</div>
      <div class="ticket">
        <img
          class="l-img"
          width="340"
          height="193"
          src="../../assets/images/user_center/bg_check1.png"
          alt
        >
        <img width="340" height="193" src="../../assets/images/user_center/bg_check2.png" alt>
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
  .text {
    color: #3c3f4d;
    font-weight: bold;
  }
  .radio-wrap {
    margin-bottom: 20px;
  }
  .msg {
    clear: both;
    font-size: 16px;
    color: rgba(20, 20, 22, 0.8);
    line-height: 32px;
  }
  .ticket {
    margin-top: 20px;
    .l-img {
      margin-right: 70px;
    }
  }
}
</style>

