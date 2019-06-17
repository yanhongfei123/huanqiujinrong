<template>
  <div class="riskTest-wrap">
    <HeaderBar/>
    <div class="com-width">
      <div class="btitle">{{$t('riskTest.text1')}}</div>
      <div class="content">
        <div class="sub-title">{{$t('riskTest.text2')}}</div>
        <div class="info">1.{{$t('riskTest.text3')}}</div>
        <div class="info">2.{{$t('riskTest.text4')}}</div>
        <div class="info">3.{{$t('riskTest.text5')}}</div>
        <div class="question-wrap">
          <div class="item clear" v-for="(item, index) in questionList" :key="index">
            <div class="label">
              <span>*</span>
              {{`${index + 1}.`}} {{item | renderFq}}
            </div>
            <div
              class="radio-wrap fl"
              @click="chooseAnswer(val, item.asall,index)"
              v-for="(val, i) in item.asall"
              :key="i"
            >
              <div class="circle fl" :class="[val.checked?'checked':'']">
                <div class="inner"></div>
              </div>
              <span class="as fl">{{`${letterMap[i]}.`}} {{val | renderAnswer}}</span>
              <!-- <el-radio :v-model="`radio${index + 1}`" :label="i+1">{{`${letterMap[i]}.${val.as}`}}</el-radio> -->
            </div>
          </div>
        </div>
      </div>
      <div class="error">
        <span v-show="isshow">{{this.$t('riskTest.text6')}}</span>
      </div>
      <div v-if="showmask" class="mask">
        <div class="content">
          <div @click="showmask=false" class="close"></div>
          <div class="icon-waring"></div>
          <div class="title">{{this.$t('riskTest.text7')}}</div>
          <div class="des">{{this.$t('riskTest.text8')}}</div>
          <div class="btn-wrap clear">
            <el-button @click="showmask=false" class="check-btn fl">{{this.$t('riskTest.text9')}}</el-button>
            <el-button
              @click="goPage"
              class="confirm fr"
              type="primary"
            >{{this.$t('riskTest.text10')}}</el-button>
          </div>
        </div>
      </div>
      <div @click="submit" class="submit">{{this.$t('riskTest.text11')}}</div>
    </div>
  </div>
</template>
<script>
import HeaderBar from "@/components/header/openAccountHeader.vue";
import { deepClone, getType } from "@/utils";
import question from "@/utils/question";
export default {
  name: "",
  components: {
    HeaderBar
  },
  data() {
    return {
      showmask: false,
      isshow: false,
      answer: [0, 0, 0, 0, 0, 0],
      questionList: deepClone(question.questionList),
      letterMap: {
        0: "A",
        1: "B",
        2: "C",
        3: "D"
      }
    };
  },
  computed: {},
  methods: {
    chooseAnswer(item, asall, index) {
      asall.map(val => (val.checked = false));
      item.checked = true;
      this.getScore(item, index);
    },
    getScore(item, index) {
      this.answer[index] = item.score;
      this.totalScore = eval(this.answer.join("+"));
      console.log(this.answer);
      console.log("总得分===" + this.totalScore);
      console.log(getType(this.totalScore));
    },
    submit() {
      var isNotChooseAll = this.answer.some(item => item == 0);
      this.isshow = isNotChooseAll;
      this.showmask = !isNotChooseAll;
    },
    goPage() {
      localStorage.setItem("totalScore", this.totalScore);
      this.$router.push("/riskTestResult");
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.riskTest-wrap {
  padding-top: 40px;
  .question-wrap {
    margin-top: 40px;
  }
  .label {
    font-size: 16px;
    color: #3c3f4d;
    line-height: 32px;
    margin-bottom: 20px;
    span {
      color: #f50000;
    }
  }
  .radio-wrap {
    width: 370px;
    margin: 0 0 20px 0;
    display: flex;
    align-items: center;
    .as {
      font-size: 16px;
      color: rgba(60, 63, 77, 1);
      line-height: 22px;
      padding-left: 10px;
    }
    .circle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      border: 1px solid #666;
      border-radius: 20px;
    }
    .checked {
      .inner {
        width: 8px;
        height: 8px;
        border-radius: 20px;
        background: #d51d26;
      }
    }
  }
  .btitle {
    font-size: 40px;
    font-weight: 500;
    color: rgba(60, 63, 77, 1);
    line-height: 58px;
  }
  .content {
    width: 780px;
    margin: 80px auto 0;
  }
  .sub-title {
    font-size: 24px;
    color: #3b4859;
    margin-bottom: 20px;
  }
  .info {
    font-size: 16px;
    color: #3c3f4d;
    margin-bottom: 10px;
  }
  .error {
    width: 150px;
    font-size: 16px;
    color: rgba(255, 170, 0, 1);
    padding-left: 25px;
    margin: 55px auto 25px;
    background: url("../assets/images/personal/icon_warning.png") no-repeat left
      center;
    background-size: auto 70%;
  }
  .submit {
    width: 400px;
    height: 80px;
    line-height: 80px;
    margin: 0 auto 100px;
    font-size: 28px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    opacity: 0.9;
    background: url("../assets/images/other_btn/btn_red400.png") no-repeat
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
      padding: 20px 70px;
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
      font-size: 16px;
      color: #666;
      margin-bottom: 10px;
      font-weight: bold;
    }
    .des {
      font-size: 14px;
      color: #666;
    }
    .close {
      width: 24px;
      height: 24px;
      position: absolute;
      right: 10px;
      top: 10px;
      background: url("../assets/images/icon_delete.png");
      background-size: contain;
    }
    .icon-waring {
      width: 40px;
      height: 40px;
      margin: 20px auto;
      background: url("../assets/images/personal//icon_popup_warning40.png");
      background-size: contain;
    }
    .pas-wrap {
      box-shadow: 0px 0px 8px 1px rgba(239, 242, 247, 1);
    }
    .btn-wrap {
      margin-top: 25px;
    }
    .confirm,
    .check-btn {
      width: 100px;
      height: 36px;
      padding: 10px!important 0px !important;
    }
  }
}
</style>

