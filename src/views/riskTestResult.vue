<template>
  <div class="riskTestResult-wrap">
    <HeaderBar/>
    <div class="com-width">
      <div class="btitle">{{$t('riskTestResult.text1')}}</div>
      <div class="top-wrap">
        <div class="tw-l">
          <div class="info">{{$t('riskTestResult.text2')}}</div>
          <div class="result">{{type}}</div>
          <div class="time">{{$t('riskTestResult.text3')}}：{{date | parseTime('{y}-{m}-{d}')}}</div>
        </div>
        <div class="tw-r"></div>
      </div>
      <div class="btn-wrap">
        <!-- <div @click="goPage('/riskTest')" class="restart">{{$t('riskTestResult.text4')}}</div> -->
        <div @click="goDetail" class="next">{{$t('riskTestResult.text6')}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderBar from "@/components/header/openAccountHeader.vue";
import { getType } from "@/utils";
import { getUserInfo } from '@/api';
export default {
  name: "",
  components: {
    HeaderBar
  },
  data() {
    return {
      date: +new Date(),
    };
  },
  computed: {
    type() {
      return getType(this.$route.query.totalScore);
    }
  },
  methods: {
	goDetail(){
		this.$router.push('/investCombination/accountDetail?totalScore=' + this.$route.query.totalScore);
	} ,
    goPage(path) {
      if (path) {
        this.$router.push(path);
      }else{
        var url = this.openStatus == 6 ? '/accountPreView' : '/setTransPas';
        this.$router.push(url);
      }
    }
  },
  mounted() {
    getUserInfo().then((res)=>{
      this.openStatus = res.data.state;
    })
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
      background: url("../assets/images/firstpage/bg_risk.png") no-repeat center;
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
  .btn-wrap {
    text-align: center;
    margin-top: 194px;
    div {
      width: 240px;
      height: 48px;
      font-size: 18px;
      line-height: 48px;
      margin: 0 20px;
      cursor: pointer;
      display: inline-block;
      background-position: center;
      background-size: contain;
    }
    .restart {
      color: #3c3f4d;
      background-image: url("../assets/images//other_btn//btn_yellow240_48.png");
    }
    .next {
      color: #fff;
      background-image: url("../assets/images//other_btn/btn_red240_48.png");
    }
  }
}
</style>

