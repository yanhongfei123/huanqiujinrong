<template>
  <div class="page-analysis">
    <header>
      <headerNav path="/analysis"></headerNav>
    </header>
    <section class="barner">
      <div class="barner-content">
        <div class="barner-title-en">Free analysis</div>
        <div class="barner-title">免费分析</div>
        <div class="barner-info">6道题 仅需1分钟</div>
      </div>
    </section>
    <section class="content">
      <div class="com-width">
        <div v-show="step == 1" class="step1-wrap">
          <div class="top-des tc">
            我们将通过6到简单的问题分析出您的风险承受能力。
            <br>我们根据分析结果为您寻找最佳投资组合（金融资产组合）。
          </div>
          <div @click="step=2" class="start-btn">开启免费分析</div>
          <dl>
            <dt>什么是风险承受能力？</dt>
            <dd>“风险承受能力 ”是指资产管理中接受的风险水平。</dd>
            <dd>一般而言，具有高回报的资产配置往往具有高风险，而低风险的资产配置往往会降低回报。</dd>
            <dd>ET.COOL将在提出投资组合提案之前进行风险承受能力评估，风险承受能力将决定适合您投资的金融资产的类型和数量。</dd>
          </dl>
        </div>
        <div v-show="step == 2" class="step2-wrap">
          <div class="title">第 {{index + 1}} 题 共{{number}}题</div>
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
          <div @click="getNextSub()" class="next">下一题</div>
        </div>

        <div v-show="step == 3" class="step3-wrap">
          33333333333333
        </div>

      </div>
    </section>
    <footerBar></footerBar>
  </div>
</template>

<script>
// @ is an alias to /src
import headerNav from "@/components/nav/nav.vue";
import footerBar from "@/components/footer/footer.vue";
import { constants } from "crypto";

export default {
  name: "contact",
  components: {
    headerNav,
    footerBar
  },
  computed: {},
  data() {
    return {
      answer: [],
      number: 0,
      index: 0,
      step: 1,
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
      if(answer == -1){
        alert('请选择')
        return;
      }
      if (this.index + 1 !== this.questionList.length) {
        this.index++;
      } else {
        this.step = 3;
      }
      this.answer.push(answer + 1);
      this.sub = this.questionList[this.index];
      console.log(this.answer);
    }
  }
};
</script>

<style lang="scss">
.page-analysis {
  .barner {
    position: relative;
    height: 400px;
    background: url("../assets/images/banner03.jpg") no-repeat center;
    background-size: cover;
    .barner-content {
      width: 1180px;
      margin: 0 auto;
      position: relative;
      color: #fff;
      top: 86px;
    }
    .barner-title-en {
      font-size: 95px;
      font-weight: 800;
      color: #fff;
      line-height: 137px;
      opacity: 0.3;
    }
    .barner-title {
      font-size: 64px;
      color: #fff;
      line-height: 92px;
    }
    .barner-info {
      font-size: 18px;
      font-weight: 400;
      color: #fff;
      line-height: 28px;
      margin-top: 20px;
    }
  }
  .content {
    padding: 100px 0 120px;
    background: #f9f9f9;
    .com-width {
      font-size: 20px;
      font-weight: 400;
    }
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
        width: 67px;
        height: 67px;
        background: url("../assets/images/gou-red.png") no-repeat center;
        background-size: cover;
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
        width: 59px;
        height: 51px;
        background: url("../assets/images/gou-red.png") no-repeat center;
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
    .step2-wrap {
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
    }
  }
}
</style>
