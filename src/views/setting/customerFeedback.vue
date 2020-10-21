<template>
  <div class="address-wrap">
    <div class="item item1">{{$t('setting.address.text1')}}</div>
    <div class="item item2">+852 6728 2812</div>
    <div class="item item3">support@etfcool.com</div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.address-wrap {
  width: 450px;
  margin: 100px auto 0;
  .item {
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    line-height: 24px;
    margin-bottom: 40px;
    padding-left: 40px;
  }
  .item1 {
    background: url("../../assets/images/location.png") no-repeat;
    background-size: auto 100%;
  }
  .item2 {
    background: url("../../assets/images/icon_phone.png") no-repeat;
    background-size: auto 100%;
  }
  .item3 {
    background: url("../../assets/images/icon_mail.png") no-repeat 3px center;
    background-size: auto 100%;
  }
}
</style>
