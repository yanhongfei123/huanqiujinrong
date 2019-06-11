<template>
  <div class="answer-wrap">
    <div class="step2-wrap tc">
      <div class="title">
        第
        <span>{{index + 1}}</span>
        {{$t('analysis.text3')}} 共 {{number}} {{$t('analysis.text3')}}
      </div>
      <div class="fq">{{sub | renderFq}}</div>
      <div class="as-list">
        <div
          class="as-item"
          @click="chooseAnswer(item, index)"
          v-for="(item, index) in sub.asall"
          :key="index"
        >
          <div class="as">{{item | renderAnswer}}</div>
          <div class="circle" :class="[item.checked?'checked':'']">
            <div class="inner"></div>
          </div>
        </div>
      </div>
      <div v-if="index != 0" @click="getPrevSub()" class="next-btn">上一题</div>
    </div>
  </div>
</template>
<script>
import question from "@/utils/question";
import { deepClone, getType } from "@/utils";
export default {
  name: "answer",
  computed: {},
  data() {
    return {
      answer: [],
      number: 0,
      index: 0,
      sub: {
        fq: "",
        asall: [
          {
            as: "",
            checked: false
          }
        ]
      },
      questionList: deepClone(question.questionList)
    };
  },
  mounted() {
    this.number = this.questionList.length;
    this.sub = this.questionList[0];
  },
  methods: {
    getScore(index) {
      var score = this.questionList[this.index].asall[index].score;
      if (this.answer[this.index]) {
        this.answer[this.index] = score;
      } else {
        this.answer.push(score);
      }
      var totalScore = eval(this.answer.join("+"));
      localStorage.setItem("type", getType(totalScore));
      console.log(this.answer);
      console.log("总得分===" + totalScore);
    },
    chooseAnswer(item, index) {
      item.checked = true;
      if (this.index + 1 !== this.questionList.length) {
        this.getScore(index);
        this.index++;
        setTimeout(() => {
          this.sub = this.questionList[this.index];
        }, 100);
      } else {
        this.getScore(index);
        this.$router.push("/analysis/result");
      }
    },
    getPrevSub() {
      this.index--;
      this.sub = this.questionList[this.index];
      this.sub.asall.map(item => (item.checked = false));
    }
  }
};
</script>
<style lang="scss" scoped>
.step2-wrap {
  position: relative;
  &::after {
    position: absolute;
    left: 43%;
    top: -55px;
    margin-left: -100px;
    content: "";
    width: 72px;
    height: 72px;
    background: url("../../assets/images/icon1.png") no-repeat center;
    background-size: contain;
  }
  &::before {
    position: absolute;
    left: 82%;
    top: 238px;
    content: "";
    width: 72px;
    height: 72px;
    background: url("../../assets/images/icon2.png") no-repeat center;
    background-size: contain;
  }
  .title {
    font-size: 20px;
    color: #444857;
    line-height: 28px;
    margin-bottom: 10px;
    span {
      color: #eaa45f;
    }
  }
  .fq {
    color: #141416;
    font-size: 24px;
    font-weight: 600;
    line-height: 33px;
  }
  .as-list {
    color: #3c3f4d;
    font-size: 16px;
    .as-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
    }
    width: 320px;
    margin: 60px auto 80px;
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
  .next-btn {
    position: relative;
    width: 240px;
    height: 80px;
    margin: 0 auto;
    text-align: center;
    line-height: 80px;
    font-size: 20px;
    color: #fff;
    background: #ccc;
    cursor: pointer;
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 0;
      height: 0;
      border: 40px solid transparent;
      border-left-color: #999;
    }
  }
}
</style>


