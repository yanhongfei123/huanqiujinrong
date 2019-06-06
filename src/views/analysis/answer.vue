<template>
  <div class="answer-wrap">
    <div class="step2-wrap tc">
      <div class="title">
        第
        <span>{{index + 1}}</span>
        题 共 {{number}} 题
      </div>
      <div class="fq">{{sub.fq}}</div>
      <div class="as-list">
        <div
          class="as-item"
          @click="chooseAnswer(item, index)"
          v-for="(item, index) in sub.asall"
          :key="index"
        >
          <div class="as">{{item.as}}</div>
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
export default {
  name: "answer",
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
      typeList: [
        {
          type: "保守型",
          score: "6-9"
        },
        {
          type: "谨慎型",
          score: "10-13"
        },
        {
          type: "稳健型",
          score: "14-17"
        },
        {
          type: "进取型",
          score: "18-21"
        },
        {
          type: "激进型",
          score: "22-24"
        }
      ],
      questionList: [
        {
          fq: "您的年龄？",
          asall: [
            {
              score: 1,
              as: "18-30岁",
              checked: false
            },
            {
              score: 2,
              as: "31-45岁",
              checked: false
            },
            {
              score: 3,
              as: "41-60岁",
              checked: false
            },
            {
              score: 4,
              as: "61岁以上",
              checked: false
            }
          ]
        },
        {
          fq: "您的年收入为(港币)？",
          asall: [
            {
              score: 1,
              as: "25万以下",
              checked: false
            },
            {
              score: 2,
              as: "25-70万",
              checked: false
            },
            {
              score: 3,
              as: "71万-300万",
              checked: false
            },
            {
              score: 4,
              as: "300万以上",
              checked: false
            }
          ]
        },
        {
          fq:
            "您的总资产中（自住房屋除外），愿意投资于股票与债权等金融产品的比例？",
          asall: [
            {
              score: 1,
              as: "低于10%",
              checked: false
            },
            {
              score: 2,
              as: "10%-25%",
              checked: false
            },
            {
              score: 3,
              as: "25%-50%",
              checked: false
            },
            {
              score: 4,
              as: "50%以上",
              checked: false
            }
          ]
        },
        {
          fq: "您进行全球资产配置的年限为？",
          asall: [
            {
              score: 1,
              as: "1-3年",
              checked: false
            },
            {
              score: 2,
              as: "3-5年",
              checked: false
            },
            {
              score: 3,
              as: "5-10年",
              checked: false
            },
            {
              score: 4,
              as: "10年以上",
              checked: false
            }
          ]
        },
        {
          fq: "下列哪一项最符合您的投资经验？",
          asall: [
            {
              score: 1,
              as: "相对有限",
              checked: false
            },
            {
              score: 2,
              as: "有一些，但需要听取专业人士的意见",
              checked: false
            },
            {
              score: 3,
              as: "比较丰富，基本可以独立判断和承担风险",
              checked: false
            },
            {
              score: 4,
              as: "具有专业投资资格和经验",
              checked: false
            }
          ]
        },
        {
          fq:
            "假设有两种投资：投资A预期收益为10%,可能最大亏损为5%；投资B预期收益为30%,可能晨大亏损为15%。您会怎么选择？",
          asall: [
            {
              score: 1,
              as: "全部投资于收荒较小且风险较小的A",
              checked: false
            },
            {
              score: 2,
              as: "大部分资金投法于收益较小且风险较小的A",
              checked: false
            },
            {
              score: 3,
              as: "大部分资金投资于收益较大且风险较大的8",
              checked: false
            },
            {
              score: 4,
              as: "全部投资于收益较大且风险较大的B",
              checked: false
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.number = this.questionList.length;
    this.sub = this.questionList[0];
  },
  methods: {
    renderSubs() {
      this.sub = this.questionList[this.index];
    },
    getScore(index) {
      var score = this.questionList[this.index].asall[index].score;
      if (this.answer[this.index]) {
        this.answer[this.index] = score;
      } else {
        this.answer.push(score);
      }
      var totalScore = eval(this.answer.join("+"));
      localStorage.setItem("type", this.getType(totalScore));
      console.log(this.answer);
      console.log("总得分===" + totalScore);
      console.log(this.getType(totalScore));
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
    },
    getType(score) {
      var type;
      this.typeList.map(item => {
        var scoreList = item.score.split("-");
        var minScore = parseInt(scoreList[0]);
        var maxScore = parseInt(scoreList[1]);
        if (score >= minScore && score <= maxScore) {
          type = item.type;
        }
      });
      return type;
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


