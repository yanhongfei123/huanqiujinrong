<template>
  <div class="riskTest-wrap">
    <HeaderBar/>
    <div class="com-width">
      <div class="btitle">风险测评</div>
      <div class="content">
        <div class="sub-title">风险测评说明</div>
        <div class="info">1.为了更好的了解您的投资风格，保障您的投资安全，根据相关法规，您在投资前需完成风险承受能力测评。</div>
        <div class="info">2.请根据个人情况如实填写。若因偏离事实的填写而产生的后果需本人承担。</div>
        <div class="info">3.平台承诺保障您的资料安全。风险承受能力测评结果仅用于向您个人展示，不会对外公布。</div>
        <div class="question-wrap">
          <div class="item clear" v-for="(item, index) in questionList" :key="index">
            <div class="label">
              <span>*</span>
              {{`${index + 1}.${item.fq}`}}
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
              <span class="as fl">{{`${letterMap[i]}.${val.as}`}}</span>
              <!-- <el-radio :v-model="`radio${index + 1}`" :label="i+1">{{`${letterMap[i]}.${val.as}`}}</el-radio> -->
            </div>
          </div>
        </div>
      </div>
      <div class="error">
        <span v-show="isshow">请完成全部问题</span>
      </div>
      <div v-if="showmask" class="mask">
        <div class="content">
          <div @click="showmask=false" class="close"></div>
          <div class="icon-waring"></div>
          <div class="title">测评提示</div>
          <div class="des">本人保证以上填写符合我的个人情况。</div>
          <div class="btn-wrap clear">
            <el-button @click="showmask=false" class="check-btn fl">我再检查一下</el-button>
            <el-button @click="$router.push('/riskTestResult')" class="confirm fr" type="primary">确 定</el-button>
          </div>
        </div>
      </div>
      <div @click="submit" class="submit">提交评测</div>
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
      showmask: false,
      isshow: false,
      answer: [0, 0, 0, 0, 0, 0],
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
      radio1: "1",
      radio2: "1",
      radio3: "2",
      radio4: "2",
      radio5: "3",
      radio6: "4",
      letterMap: {
        0: "A",
        1: "B",
        2: "C",
        3: "D"
      },
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
  computed: {},
  methods: {
    chooseAnswer(item, asall, index) {
      asall.map(val => (val.checked = false));
      item.checked = true;
      this.getScore(item, index);
    },
    getScore(item, index) {
      this.answer[index] = item.score;
      var totalScore = eval(this.answer.join("+"));
      localStorage.setItem("riskType", this.getType(totalScore));
      console.log(this.answer);
      console.log("总得分===" + totalScore);
      console.log(this.getType(totalScore));
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
    },
    submit() {
      var isNotChooseAll = this.answer.some(item => item == 0);
      this.isshow = isNotChooseAll;
      this.showmask = !isNotChooseAll;
    }
  },
  mounted() {
    console.log(this.answer.length);
  }
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
    .des{
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
    .icon-waring{
      width: 40px;
      height: 40px;
      margin: 20px auto;
      background: url("../assets/images/personal//icon_popup_warning40.png");
      background-size: contain;
    }
    .pas-wrap {
      box-shadow: 0px 0px 8px 1px rgba(239, 242, 247, 1);
    }
    .btn-wrap{
      margin-top: 25px;
    }
    .confirm, .check-btn {
      width: 100px;
      height: 36px;
      padding: 10px!important 0px!important;

    }
  }
}
</style>

