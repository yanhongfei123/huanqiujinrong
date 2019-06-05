<template>
  <div class="step1-wrap">
    <div class="top-des tc">
      我们将通过6到简单的问题分析出您的风险承受能力。
      <br>我们根据分析结果为您寻找最佳投资组合（金融资产组合）。
    </div>
    <div @click="$router.push('/analysis/answer')" class="start-btn">开启免费分析</div>
    <dl>
      <dt>什么是风险承受能力？</dt>
      <dd>“风险承受能力 ”是指资产管理中接受的风险水平。</dd>
      <dd>一般而言，具有高回报的资产配置往往具有高风险，而低风险的资产配置往往会降低回报。</dd>
      <dd>ET.COOL将在提出投资组合提案之前进行风险承受能力评估，风险承受能力将决定适合您投资的金融资产的类型和数量。</dd>
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


