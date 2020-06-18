<template>
  <div class="account-preview">
    <header>
      <userCenterHeader @getUserInfo="setUserInfo" path="/accountPreView"></userCenterHeader>
    </header>
    <div @click="hideMenu($event)" class="content">
      <div class="com-width">
        <div class="title">{{$t('userCenter.text1')}}</div>

        <!-- 已经进行了资产配置就显示个人中心主页，否则显示当前进度条状态 -->

        <div v-if="openStatus != 6">
          <div class="progress-ctn">
            <div
              :class="[index <= state ? 'active' : '']"
              class="progress"
              v-for="(val, index) in openStatusList"
              :key="index"
            >
              <div class="num">{{index + 1}}</div>
			  <!-- <p>{{key}}</p> -->
              <p>{{val.progressTitle}}</p>
            </div>
          </div>

          <div
            v-if="(openStatus==0 || openStatus==3 || openStatus==4 || openStatus==5)"
            class="btn-openAccount active"
            @click="goPage(openStatusList[oIndex].path)"
          >{{ openStatusList[oIndex].btnText }}</div>
		  
		  <!-- 4待评测   3 待入金 -->

          <!-- 1开户审核中 -3 入金审核中  -5 资产配置审核中 -->
          <div v-if="(openStatus == 1 || openStatus == -3 || openStatus == -5)" class="review-ctn">
            <div class="img-review"></div>
            <div class="review-info">
              <div class="review-result">{{checkStatusObj[openStatus].text}}</div>
              <div class="btn-openAccount disabled">{{checkStatusObj[openStatus].btnText}}</div>
              <div v-if="openStatus == 1" class="review-tip">
                {{$t('userCenter.text3')}}
                <router-link to="/openAccount/witness">{{$t('userCenter.text4')}}</router-link>
              </div>
            </div>
          </div>
          <div class="tips-ctn">
            <div class="tips-title">{{$t('userCenter.text5')}}</div>
            <p class="tips-desc">
              {{$t('userCenter.text6')}}
              <br>
              {{$t('userCenter.text7')}}
              <br>
              {{$t('userCenter.text8')}}
            </p>
          </div>
        </div>

        <div v-show="openStatus == 6" class="main">
          <div class="wrap1">
            <div class="item">
              <div class="label">{{$t('accountPreview.text1')}}（港币）</div>
              <div class="amount">3,000,000.00</div>
            </div>
            <div class="item">
              <div class="label">
                <span>
                  {{$t('accountPreview.text2')}}（港币）
                  <tips top="0" right="-20px">{{$t('accountPreview.text3')}}</tips>
                </span>
              </div>
              <div class="amount">3,000,000.00</div>
            </div>
            <div class="item">
              <div class="label">
                <span>
                  {{$t('accountPreview.text4')}}（%）
                  <tips
                    top="0"
                    right="-20px"
                  >{{$t('accountPreview.text5')}}</tips>
                </span>
              </div>
              <div class="amount">3,000,000.00</div>
            </div>
          </div>
          <div class="wrap2 clear">
            <div class="l-w fl">
              <div class="fl w2-title">{{$t('accountPreview.text6')}}</div>
              <div
                @click="$router.push('/investCombination/accountDetail')"
                class="fr detail pointer"
              >{{$t('accountPreview.text7')}}</div>
              <span id="type">进取型</span>
              <div id="echartss"></div>
              <div class="legend">
                <div
                  @mouseover="highlight(index)"
                  @mouseout="downplay(index)"
                  v-for="(val,index) in colors"
                  :key="index"
                  class="legend-item"
                >
                  <div :style="{backgroundColor:val}" class="color"></div>
                  <div class="pecent">60.00%</div>
                  <div class="type">股票</div>
                </div>
              </div>
            </div>
            <div class="r-w fr">
              <div class="w2-title">{{$t('accountPreview.text15')}}</div>
              <div class="cont">
                <div class="rw-label rw-label1">{{$t('accountPreview.text16')}}（港币）</div>
                <div class="rw-amount rw-amount">3,000,000.00</div>
                <div class="line"></div>
                <div class="rw-label rw-label1">{{$t('accountPreview.text17')}}</div>
                <div class="rw-amount rw-amount">12.18%</div>
                <div class="btm-wrap clear">
                  <div @click="$router.push('/userCenter/guide')" class="l-btn fl">{{$t('accountPreview.text18')}}</div>
                  <div @click="$router.push('/userCenter/extractFunds')" class="r-btn fr">{{$t('accountPreview.text19')}}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="fundRecords">
            <div class="top-wrap">
              <div class="label">{{$t('accountPreview.text20')}}</div>
              <div
                @click="$router.push('/userCenter/fundRecords')"
                class="records pointer"
              >{{$t('accountPreview.text21')}}>></div>
            </div>
            <table>
              <thead>
                <th>{{$t('userCenter.fundRecords.text4')}}</th>
                <th class="select-wrap">
                  <span>{{$t('userCenter.fundRecords.text5')}}</span>
                </th>
                <th>{{$t('userCenter.fundRecords.text6')}}</th>
                <th>{{$t('userCenter.fundRecords.text7')}}</th>
                <th>{{$t('userCenter.fundRecords.text8')}}</th>
              </thead>
              <tbody>
                <tr v-for="(val,index) in data" :key="index">
                  <td>{{val.date}}</td>
                  <td>{{val.type}}</td>
                  <td>{{val.origin}}</td>
                  <td>{{val.bi}}</td>
                  <td>{{val.amount}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <footerBar></footerBar>
  </div>
</template>
<script>
import Tips from "@/components/tips.vue";
import userCenterHeader from "@/components/header/userCenterHeader.vue";
import footerBar from "@/components/footer/footer.vue";
import { getUserInfo } from "@/api";
import { getAccountDetail } from "@/api/myAccount.js";

// 0待申请开户  2开户拒绝  4待风险测评   3待入金    5待配置   6已配置

export default {
  name: "accountPreview",
  components: {
    Tips,
    userCenterHeader,
    footerBar
  },
  computed: {
	oIndex() {
		if (this.openStatus == 0) {
		  return 0;
		}
		if (this.openStatus == 3) {
		  return 2;
		}
		if (this.openStatus == 4) {
		  return 1;
		}
		if (this.openStatus == 5) {
		  return 3;
		}
	},
    state() {
      if (this.openStatus == 0 || this.openStatus == 1) {
        return 0;
      }
      if (
        this.openStatus == 2 ||
        this.openStatus == 3 ||
        this.openStatus == -3
      ) {
        return 2;
      }
      if (this.openStatus == 4) {
        return 1;
      }
      if (this.openStatus == 5 || this.openStatus == -5) {
        return 3;
      }
    },
    openStatusList() {
		return [
			{
			  progressTitle: this.$t("userCenter.openStatusList[0].progressTitle"),
			  btnText: this.$t("userCenter.openStatusList[0].btnText"),
			  path: "/openAccount"
			},
			{
			  progressTitle: this.$t("userCenter.openStatusList[1].progressTitle"),
			  btnText: this.$t("userCenter.openStatusList[1].btnText"),
			  path: "/riskTest"
			},
			{
			  progressTitle: this.$t("userCenter.openStatusList[2].progressTitle"),
			  btnText: this.$t("userCenter.openStatusList[2].btnText"),
			  path: "/userCenter/guide"
			},
			{
			  progressTitle: this.$t("userCenter.openStatusList[3].progressTitle"),
			  btnText: this.$t("userCenter.openStatusList[3].btnText"),
			  path: ""  // assetsConfig
			}
		]
  //     return {
  //       "0": {
  //         progressTitle: this.$t("userCenter.openStatusList[0].progressTitle"),
  //         btnText: this.$t("userCenter.openStatusList[0].btnText"),
  //         path: "/openAccount"
  //       },
		// "4": {
		//   progressTitle: this.$t("userCenter.openStatusList[1].progressTitle"),
		//   btnText: this.$t("userCenter.openStatusList[1].btnText"),
		//   path: "/riskTest"
		// },
  //       "3": {
  //         progressTitle: this.$t("userCenter.openStatusList[2].progressTitle"),
  //         btnText: this.$t("userCenter.openStatusList[2].btnText"),
  //         path: "/userCenter/guide"
  //       },
  //       "5": {
  //         progressTitle: this.$t("userCenter.openStatusList[3].progressTitle"),
  //         btnText: this.$t("userCenter.openStatusList[3].btnText"),
  //         path: "/setTransPas"
  //       }
  //     };
    },
    checkStatusObj() {
      return {
        "1": {
          text: this.$t("userCenter.checkStatusObj.0.text"),
          btnText: this.$t("userCenter.checkStatusObj.0.btnText")
        },
        "-3": {
          text: this.$t("userCenter.checkStatusObj.1.text"),
          btnText: this.$t("userCenter.checkStatusObj.1.btnText")
        },
        "-5": {
          text: this.$t("userCenter.checkStatusObj.2.text"),
          btnText: this.$t("userCenter.checkStatusObj.2.btnText")
        }
      }
    }
  },
  data() {
    return {
      openStatus: 0,
      colors: ["#D51D26", "#E2C6AB", "#B9BBC0"],
      data: [
        {
          date: "2019-04-30",
          type: "交易",
          origin: "BMO亚洲投资债",
          bi: "港币",
          amount: "352015255"
        },
        {
          date: "2019-04-30",
          type: "交易",
          origin: "BMO亚洲投资债",
          bi: "港币",
          amount: "352015255"
        },
        {
          date: "2019-04-30",
          type: "交易",
          origin: "BMO亚洲投资债",
          bi: "港币",
          amount: "352015255"
        },
        {
          date: "2019-04-30",
          type: "交易",
          origin: "BMO亚洲投资债",
          bi: "港币",
          amount: "352015255"
        }
      ]
    };
  },
  methods: {
    setUserInfo(data) {
      this.openStatus = data.state;
    },
    goPage(path) {
	  if(path == ''){
		  getAccountDetail().then(res => {
		    var data = res.data;
			if(data.isPwd == '1'){ // 没有设置自交易密码
				this.$router.push('/setTransPas');
			} else {
				this.$router.push('/assetsConfig');
			}
		  })
	  } else {
		  this.$router.push(path);
	  }
    },
    hideMenu(flag) {
      this.$store.dispatch("showMenu", false);
    },
    highlight(index) {
      // this.myChart.dispatchAction({
      //   type: 'downplay',
      //   seriesIndex: 0,
      //   dataIndex: [0,1,2]
      // });
      // this.myChart.dispatchAction({
      //   type: 'highlight',
      //   seriesIndex: 0,
      //   dataIndex: index
      // });
    },
    downplay(index) {
      // this.myChart.dispatchAction({
      //   type: 'downplay',
      //   seriesIndex: 0,
      //   dataIndex: index
      // });
    },
    drawPie() {
      // 基于准备好的dom，初始化echarts实例
      let domType = document.getElementById("type");
      this.myChart = echarts.init(document.getElementById("echartss"));
      // 绘制图表
      var option = {
        // title : {
        //     text: '某站点用户访问来源',
        //     subtext: '纯属虚构',
        //     x:'center'
        // },
        color: this.colors,
        grid: {
          top: "0%",
          left: "0%",
          // right: "15%"
          bottom: "3%"
        },
        //backgroundColor: "#fff",
        // tooltip: {
        //   trigger: "item",
        //   formatter: "{a} <br/>{b} : {c} ({d}%)"
        // },
        // legend: {
        //   orient: "vertical",
        //   x: "20",
        //   y: "center",
        //   itemGap: 40,
        //   data: ["60%", "30%", "10%"]
        // },
        series: [
          {
            name: "投资类型",
            type: "pie",
            radius: ["40%", "54%"],
            center: ["50%", "40%"],
            data: [
              { value: 60, name: "60%" },
              { value: 30, name: "30%" },
              { value: 10, name: "10%" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            label: {
              normal: {
                show: true,
                position: "inside"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "18",
                  fontWeight: "bold"
                }
              }
            }
          }
        ]
      };
      this.myChart.setOption(option);
      this.myChart.on("mouseover", e => {
        //当检测到鼠标悬停事件，取消默认选中高亮
        domType.innerHTML = e.dataIndex;
        this.myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: [0, 1, 2]
        });
        this.myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: e.dataIndex
        });
      });
      this.myChart.on("mouseout", e => {
        this.myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: e.dataIndex
        });
      });
    }
  },
  mounted() {
    setTimeout(()=>{
      this.drawPie();
    }, 100);
	getAccountDetail().then(res => {
	  
	})
  },
};
</script>

<style lang="scss" scoped>
.account-preview {
  background: #f9f9f9;
  .content {
    padding-top: 40px;
  }
  .main {
    width: 1020px;
    margin: 55px auto 100px;
  }
  .title {
    font-size: 40px;
    font-family: SourceHanSansSC-Medium;
    font-weight: 500;
    color: rgba(60, 63, 77, 1);
    line-height: 58px;
  }

  .progress-ctn {
    padding-top: 75px;
    position: relative;
    overflow: hidden;
    width: 1000px;
    margin: 0 auto;
    text-align: center;
    .progress {
      float: left;
      width: 250px;
      border-top: 1px solid #f0f3f7;
      .num {
        width: 40px;
        height: 40px;
        margin: -20px auto 0;
        line-height: 40px;
        border-radius: 50%;
        background: rgba(240, 243, 247, 1);
        box-shadow: 0 5px 20px 0 rgba(240, 243, 247, 1);
      }
      p {
        margin-top: 4px;
        font-size: 16px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #8392a7;
        line-height: 24px;
      }
      &.active {
        border-top: 1px solid #d51d26;
        .num {
          color: #d51d26;
          border: 1px solid #d51d26;
          background-color: #fff;
        }
        p {
          color: #d51d26;
        }
      }
    }
  }
  .btn-openAccount {
    position: relative;
    width: 400px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 28px;
    font-weight: 500;
    font-family: PingFangSC-Medium;
    color: #fff;
    background: #d51d26;
    cursor: pointer;
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 50px;
      height: 80px;
      background-color: #be1a21;
    }
    &:after {
      position: absolute;
      top: 0;
      left: 50px;
      content: "";
      width: 0;
      height: 0;
      border: 40px solid transparent;
      border-left-color: #be1a21;
    }
    &.disabled {
      background-color: #c6c8cc;
      &:before {
        background-color: #9c9fa6;
      }
      &:after {
        border-left-color: #9c9fa6;
      }
    }
    &.active {
      margin: 120px auto 0;
    }
  }
  .review-ctn {
    margin-top: 100px;
    position: relative;
    overflow: hidden;
    .img-review {
      float: left;
      width: 550px;
      height: 396px;
      background: url("~@/assets/images/userCenter/bg_toexamine@2x.png")
        no-repeat center center;
      @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
        background-image: url("~@/assets/images/userCenter/bg_toexamine@3x.png");
      }
      background-size: contain;
    }
    .review-info {
      float: left;
      margin: 20px 0 0 130px;
      width: 500px;
      .review-result {
        margin-bottom: 80px;
        font-size: 48px;
        font-family: SourceHanSansSC-Medium;
        font-weight: 500;
        color: rgba(20, 20, 22, 1);
        line-height: 70px;
      }
      .review-tip {
        width: 400px;
        margin-top: 20px;
        font-size: 16px;
        font-family: SourceHanSansSC-Medium;
        font-weight: 500;
        color: rgba(213, 29, 38, 1);
        line-height: 24px;
        a {
          text-decoration: underline;
          &:hover,
          &:active,
          &:link,
          &:visited {
            color: #d51d26;
          }
        }
      }
    }
  }
  .tips-ctn {
    margin-top: 100px;
    .tips-title {
      height: 33px;
      font-size: 24px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(20, 20, 22, 1);
      line-height: 33px;
    }
    .tips-desc {
      margin: 40px 0 100px;
      height: 100px;
      font-size: 14px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(20, 20, 22, 1);
      line-height: 33px;
    }
  }

  .wrap1 {
    display: flex;
    justify-content: space-between;
    .item {
      width: 312px;
      height: 106px;
      padding-top: 22px;
      background: #fff;
      text-align: center;
    }
    .label {
      font-size: 16px;
      color: rgba(20, 20, 22, 0.5);
      line-height: 22px;
      font-weight: normal;
      span {
        position: relative;
      }
    }
    .amount {
      font-size: 24px;
      font-weight: bold;
      color: rgba(20, 20, 22, 1);
      line-height: 32px;
      margin-top: 6px;
    }
  }
  .wrap2 {
    margin-top: 40px;
    .l-w {
      position: relative;
      padding: 20px;
      background: #fff;
    }
    .r-w {
      width: 490px;
      height: 470px;
      padding: 20px;
      background: #fff;
    }
    .cont {
      width: 410px;
      margin: 60px auto 0;
      text-align: center;
      .rw-label {
        font-size: 16px;
        color: rgba(20, 20, 22, 0.5);
        line-height: 22px;
        margin-bottom: 30px;
      }
      .line {
        width: 410px;
        height: 1px;
        margin: 28px 0;
        background: rgba(216, 216, 216, 1);
      }
      .rw-amount {
        font-size: 32px;
        font-weight: bold;
        color: rgba(20, 20, 22, 1);
        line-height: 32px;
      }
      .btm-wrap {
        margin-top: 45px;
        div {
          width: 160px;
          height: 48px;
          line-height: 48px;
          font-size: 18px;
          background-size: contain;
          cursor: pointer;
        }
        .l-btn {
          color: #3c3f4d;
          background-image: url("../assets/images/other_btn/btn_yellow160.png");
        }
        .r-btn {
          color: #fff;
          background-image: url("../assets/images/other_btn/btn_red160.png");
        }
      }
    }
    #echartss {
      width: 450px;
      height: 430px;
    }
    #type {
      position: absolute;
      width: 100px;
      top: 44%;
      left: 50%;
      margin-left: -50px;
      color: #141416;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
    }
    .w2-title {
      font-size: 24px;
      color: rgba(59, 72, 89, 1);
    }
    .detail {
      font-size: 16px;
      color: rgba(213, 29, 38, 1);
    }
    .legend {
      padding: 0 40px 0 70px;
      position: absolute;
      bottom: 24px;
      width: 450px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
    }
    .pecent {
      font-size: 20px;
      color: rgba(20, 20, 22, 1);
      line-height: 28px;
      margin-bottom: 5px;
    }
    .type {
      font-size: 18px;
      color: rgba(20, 20, 22, 0.5);
      line-height: 25px;
    }
    .legend-item {
      position: relative;
      .color {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 3px;
        left: -30px;
      }
    }
  }
}

.fundRecords {
  padding: 20px 0;
  margin-top: 40px;
  height: 100%;
  background: #fff;
}
.records {
  color: #d51d26;
}
.top-wrap {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-content: flex-end;
}
.label {
  font-size: 20px;
  color: #141416;
  font-weight: bold;
}
table {
  width: 100%;
  margin-top: 20px;
  thead {
    background: rgba(20, 20, 22, 0.1);
  }
  th,
  td {
    font-size: 20px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .select-wrap {
    position: relative;
    .icon {
      position: absolute;
      right: 10px;
      top: 36%;
      z-index: 0;
      width: 20px;
      height: 20px;
      background: url("../assets/images/icon_choose.png") no-repeat center;
      background-size: contain;
    }
  }
}
</style>
