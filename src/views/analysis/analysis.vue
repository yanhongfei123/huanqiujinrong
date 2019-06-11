<template>
  <div class="step1-wrap">
    <div class="top-des tc">
      {{$t('analysis.analysis.text1')}}
      <br>
      {{$t('analysis.analysis.text2')}}
    </div>
    <div
      @click="$router.push('/analysis/answer')"
      class="start-btn"
    >{{$t('analysis.analysis.text3')}}</div>
    <dl>
      <dt>{{$t('analysis.analysis.text4')}}</dt>
      <dd>{{$t('analysis.analysis.text5')}}</dd>
      <dd>{{$t('analysis.analysis.text6')}}</dd>
      <dd>{{$t('analysis.analysis.text7')}}</dd>
    </dl>
  </div>
</template>


<script>
export default {};
</script>
<style lang="scss" scoped>
.top-des {
  position: relative;
  width: 540px;
  margin: 0 auto 80px;
  color: rgba(20, 20, 22, 1);
  line-height: 30px;
  &::after {
    position: absolute;
    left: -67px;
    bottom: -67px;
    content: "";
    width: 72px;
    height: 72px;
    background: url("../../assets/images/icon1.png") no-repeat center;
    background-size: contain;
  }
}
.start-btn {
  position: relative;
  width: 400px;
  height: 80px;
  margin: 0 auto;
  text-align: center;
  line-height: 80px;
  font-size: 28px;
  font-weight: 500;
  color: #fff;
  background: #d51d26;
  letter-spacing: 1px;
  cursor: pointer;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 0;
    height: 0;
    border: 40px solid transparent;
    border-left-color: #be1a21;
  }
}
dl {
  position: relative;
  margin-top: 120px;
  &::after {
    position: absolute;
    left: 71%;
    top: 10px;
    content: "";
    width: 72px;
    height: 72px;
    background: url("../../assets/images/icon2.png") no-repeat center;
    background-size: contain;
  }
}
dt {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  line-height: 33px;
  margin-bottom: 50px;
}
dd {
  font-size: 20px;
  color: #141416;
  margin-bottom: 30px;
}
</style>


