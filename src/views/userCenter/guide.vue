<template>
  <div class="guide-wrap">
    <div class="step-wrap">
      <div class="step step1">
        <div class="top-num">
          STEP
          <span>1</span>
        </div>
        <div class="step-info">{{$t('userCenter.guide.text1')}}</div>
      </div>
      <div class="arrow"></div>
      <div class="step step2">
        <div class="top-num">
          STEP
          <span>2</span>
        </div>
        <div class="step-info">{{$t('userCenter.guide.text2')}}</div>
      </div>
      <div class="arrow"></div>
      <div class="step step2">
        <div class="top-num">
          STEP
          <span>3</span>
        </div>
        <div class="step-info">{{$t('userCenter.guide.text3')}}</div>
      </div>
    </div>
    <div class="beizhu">{{$t('userCenter.guide.text4')}}</div>
    <p class="btm-tips">{{$t('userCenter.guide.text5')}}</p>
    <p class="btm-tips">{{$t('userCenter.guide.text6')}}</p>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.guide-wrap {
  padding-right: 40px;
}
.step-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0 84px;
  .arrow {
    width: 96px;
    height: 70px;
    margin: 0 40px;
    background: url("../../assets/images/firstpage//icon_arrow.png") no-repeat
      center;
    background-size: cover;
  }
  .step {
    text-align: center;
    .top-num {
      font-size: 20px;
      color: rgba(213, 29, 38, 1);
      span {
        font-size: 40px;
        line-height: 47px;
      }
    }
    .step-info {
      font-size: 18px;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 26px;
      margin-top: 10px;
    }
  }
}
.beizhu {
  height: 33px;
  font-size: 24px;
  font-weight: 600;
  color: rgba(20, 20, 22, 1);
  line-height: 33px;
  margin-bottom: 40px;
}
.btm-tips {
  font-size: 14px;
  color: rgba(20, 20, 22, 1);
  margin-bottom: 20px;
}
</style>

