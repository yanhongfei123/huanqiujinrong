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
          @click="chooseAnswer(item)"
          v-for="(item, index) in sub.asall"
          :key="index"
        >
          <div class="as">{{item.as}}</div>
          <div class="circle" :class="[item.checked?'checked':'']">
            <div class="inner"></div>
          </div>
        </div>
      </div>
      <div @click="getNextSub()" class="next-btn">下一题</div>
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
      questionList: [
        {
          fq: "您的年龄？",
          asall: [
            {
              as: "18-30岁",
              checked: false
            },
            {
              as: "18-30岁",
              checked: false
            },
            {
              as: "18-30岁",
              checked: false
            },
            {
              as: "18-30岁",
              checked: false
            }
          ]
        },
        {
          fq: "您的月收入？",
          asall: [
            {
              as: "3000",
              checked: false
            },
            {
              as: "5000",
              checked: false
            },
            {
              as: "8000",
              checked: false
            }
          ]
        },
        {
          fq: "您的年龄？",
          asall: [
            {
              as: "18-30岁",
              checked: false
            },
            {
              as: "18-30岁",
              checked: false
            },
            {
              as: "18-30岁",
              checked: false
            },
            {
              as: "18-30岁",
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
    chooseAnswer(item) {
      this.sub.asall.map(item => (item.checked = false));
      item.checked = true;
    },
    getNextSub() {
      var answer = this.sub.asall.findIndex(
        (value, index, arr) => value.checked
      );
      if (answer == -1) {
        this.$alert("您还没选择题目答案哦", "提示", {
          confirmButtonText: "确定",
          callback: action => {
            // this.$message({
            //   type: "info",
            //   message: `action: ${action}`
            // });
          }
        });
        return;
      }
      if (this.index + 1 !== this.questionList.length) {
        this.index++;
      } else {
        this.step = 3;
        this.$router.push("/analysis/result");
      }
      this.answer.push(answer + 1);
      this.sub = this.questionList[this.index];
      console.log(this.answer);
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
    width: 67px;
    height: 67px;
    background: url("../../assets/images/gou-red.png") no-repeat center;
    background-size: cover;
  }
  &::before {
    position: absolute;
    left: 82%;
    top: 238px;
    content: "";
    width: 59px;
    height: 51px;
    background: url("../../assets/images/gou-red.png") no-repeat center;
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
    width: 300px;
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
    background: #d51d26;
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
}
</style>


