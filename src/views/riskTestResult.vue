<template>
  <div class="riskTestResult-wrap">
    <HeaderBar/>
    <div class="com-width">
      <div class="btitle">风险测评</div>
      <div class="top-wrap">
        <div class="tw-l">
          <div class="info">根据您的回答，您的风险承受类型为</div>
          <div class="result">{{type}}</div>
          <div class="time">测评时间：2019-05-08</div>
        </div>
        <div class="tw-r"></div>
      </div>
      <div class="btn-wrap">
        <div @click="goPage('/riskTest')" class="restart">重新评测</div>
        <div @click="goPage('/configAssets')" class="next">确认并进行资产配置</div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderBar from "@/components/header/openAccountHeader.vue";

export default {
  name: "",
  components: {
    HeaderBar
  },
  data() {
    return {
      type: ''
    };
  },
  computed: {},
  methods: {
    goPage(path){
      this.$router.push(path)
    }
  },
  mounted() {
    this.type = localStorage.getItem("riskType") || "保守型";
  }
};
</script>

<style lang="scss">
.riskTestResult-wrap {
  padding-top: 40px;
  .question-wrap {
    margin-top: 40px;
  }
  .btitle {
    font-size: 40px;
    font-weight: 500;
    color: rgba(60, 63, 77, 1);
    line-height: 58px;
  }
  .top-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 62px;
    padding: 0 0 0 100px;
    .tw-r {
      width: 550px;
      height: 318px;
      background: url("../assets/images/firstpage/bg_risk.png") no-repeat
        center;
      background-size: contain;
    }
    .info {
      font-size: 20px;
      color: #444857;
      line-height: 28px;
    }
    .result {
      font-size: 60px;
      color: #141416;
      line-height: 84px;
      font-weight: 600;
      margin: 20px 0 40px;
    }
    .restart {
      font-size: 16px;
      color: #444857;
      line-height: 22px;
    }
  }
  .btn-wrap{
    text-align: center;
    margin-top: 194px;
    div{
      width: 240px;
      height: 48px;
      font-size:18px;
      line-height: 48px;
      margin: 0 20px;
      cursor: pointer;
      display: inline-block;
      background-position: center;
      background-size: contain;
    }
    .restart{
      color: #3C3F4D;
      background-image: url('../assets/images//other_btn//btn_yellow240_48.png')
    }
    .next{
      color: #fff;
      background-image: url('../assets/images//other_btn/btn_red240_48.png')
    }
  }
}
</style>

