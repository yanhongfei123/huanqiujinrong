<template>
  <div class="accountDetail">
    <div class="wrap2 clear">
      <div class="l-w fl">
        <div class="fl w2-title">{{$t('accountPreview.text6')}}</div>
        <!-- <div @click="$router.push('/riskTest')" class="fr detail pointer">{{$t('accountDetail.text1')}}</div> -->
        <span id="type">{{ type }}</span>
        <div id="echarts"></div>
        <div class="legend">
          <div
            @mouseover="highlight(index)"
            @mouseout="downplay(index)"
            v-for="(item,index) in investList"
            :key="index"
            class="legend-item"
          >
            <div :style="{backgroundColor:colors[index]}" class="color"></div>
            <div class="pecent">{{ item.value }}</div>
            <div class="type">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="r-w fr">
        <div class="w2-title">{{$t('accountDetail.text2')}}</div>
        <div class="cont">
          <div class="rw-label rw-label1">
            <span>
              {{$t('accountPreview.text6')}}
              <tips
                top="0"
                right="-20px"
              >{{$t('accountDetail.text3')}}</tips>
            </span>
          </div>
          <div class="rw-amount rw-amount">{{ type }}</div>
          <div class="line"></div>
<!--          <div class="rw-label rw-label1">
            <span>
              {{$t('accountDetail.text4')}}
              <tips top="0" right="-20px">{{$t('accountDetail.text5')}}</tips>
            </span>
          </div>
          <div class="rw-amount rw-amount">12.18%</div> -->
        </div>
      </div>
    </div>
    <!-- <InvestList></InvestList> -->
    <div class="btm-info tc">{{$t('accountDetail.text6')}}</div>
	<div class="btn-wrap">
	  <div @click="goPage('/userCenter/myAccount')" class="next">{{$t('accountDetail.text7')}}</div>
	</div>
  </div>
</template> 
<script>

import i18n from '@/lang';
import { getInvestment } from "@/api/analysis.js";
import { getType, getTypeByLevel, getConfigType, toThousandslsFilter } from "@/utils";
import { getAccountDetail } from "@/api/myAccount.js";
import Tips from "@/components/tips.vue";
import userCenterHeader from "@/components/header/userCenterHeader.vue";
import footerBar from "@/components/footer/footer.vue";
import InvestList from '@/components/vestList/index.vue'

export default {
  name: "accountPreview",
  computed: {
    type() {
      return getTypeByLevel(this.level); //getType(localStorage.getItem("totalScore") || 0);
    }
  },
  components: {
    Tips,
    userCenterHeader,
    footerBar,
    InvestList
  },
  data() {
    return {
      oIndex: 0,
      typeList: ["组合详情", "历史表现", "组合分析", "投资记录"],
      colors: ["#D51D26", "#E2C6AB", "#B9BBC0", '#333333', '#f5f5f5'],
	  echartData: [],
	  investList: [],
      data: [],
	  level: '0',
    };
  },
  mounted() {
	getAccountDetail().then(res=>{
	  this.level = res.data.risk;
	  this.getGlobalData("assets_type").then(res => {
		this.assetsTypelist = res.data.list;
		this.getInvestment(); 
	  });
	});
  },
  methods: {
	getInvestment() {
	  getInvestment().then(res => {
	    var data = res.data;
	    var datas = [];
		var investList = [];
		var t = getConfigType(data.userScore);
		var sysInvestments = data.sysInvestments.filter(item => item.investmentName.includes(t));
		var sysAssetsInvestments = sysInvestments[0].sysAssetsInvestments;
		console.log(sysInvestments)
	
	    this.id = sysInvestments[0].id;
	    this.assetsTypelist.map((val, index) => {
	      var type = sysAssetsInvestments.filter(item => item.assetsType == val.dictValue);
	      console.log(type);
	      if (type.length) {
			var value = 0;
			type.map(item => {
				value += parseFloat(item.proportion); 
			});  
	        datas.push({
	          // type: {
	          //   assetsType: val.dictLabel,
	          //   assetsTypeFt: val.dictLabelFt,
	          //   assetsTypeEn: val.dictLabelEn
	          // },
	          value: value,
			  name: value + '%',
	        });
			investList.push({
			  name: i18n.locale == 'Ft' ? val.dictLabelFt : val.dictLabelEn,
			  value: value + '%',
			});
	      }
	    });
		
		this.echartData = datas;
		this.investList = investList;
		
		setTimeout(() => {
		  this.drawPie();
		}, 50);

	  });
	},  
	goPage(path) {
	  this.$router.push(path);
	},  
    changeTab(index) {
      this.oIndex = index;
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
      this.myChart = echarts.init(document.getElementById("echarts"));
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
		// { value: 60, name: "60%" },
		// { value: 30, name: "111" },
		// { value: 10, name: "10%" }
        series: [
          {
            name: "投资类型",
            type: "pie",
            radius: ["40%", "54%"],
            center: ["50%", "40%"],
            data: this.echartData,
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
        console.log(e);
        //domType.innerHTML =   this.echartData[e.dataIndex].name;
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
  }
};
</script>

<style lang="scss" scoped>
.accountDetail {
  background: #f9f9f9;
  .content {
    padding-top: 40px;
  }
  .btn-wrap {
    text-align: center;
    margin-top: 50px;
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
    .next {
      color: #fff;
      background-image: url("../../assets/images//other_btn/btn_red240_48.png");
    }
  }
  .main {
    width: 1020px;
    margin: 55px auto 50px;
  }
  .title {
    font-size: 40px;
    font-family: SourceHanSansSC-Medium;
    font-weight: 500;
    color: rgba(60, 63, 77, 1);
    line-height: 58px;
  }
  .tab-wrap {
    margin: 80px auto 50px;
    display: flex;
    justify-content: center;
  }
  .tab-item {
    font-size: 20px;
    color: #444857;
    padding: 0 8px 14px;
    margin: 0 50px;
    border-bottom: 5px solid transparent;
    &.active {
      position: relative;
      color: #d51d26;
      font-weight: bold;
      border-bottom-color: #d51d26;
    }
  }
  .rw-label {
    span {
      position: relative;
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
      color: rgba(20, 20, 22, 1);
      line-height: 22px;
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
        margin: 45px 0 74px;
        background: rgba(216, 216, 216, 1);
      }
      .rw-amount {
        font-size: 32px;
        font-weight: bold;
        color: rgba(20, 20, 22, 1);
        line-height: 32px;
      }
    }
    #echarts {
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
.btm-info {
  font-size: 16px;
  color: rgba(0, 0, 0, 1);
  line-height: 32px;
  margin-top: 40px;
}
.vest-wrap {
  margin-top: 60px;
}
.label-cont {
  padding: 20px 0;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #444857;
  &.label-cont-btm {
    margin-top: 40px;
    border-bottom: none;
    border-top: 1px solid #444857;
  }
  .label {
    text-align: center;
    font-size: 20px;
    color: #141416;
    line-height: 28px;
    font-weight: bold;
  }
  .label1 {
    flex: 1;
    //text-indent: 100px;
  }
  .label2 {
    flex: 1;
  }
  .label3 {
    flex: 1;
  }
  .label4 {
    width: 400px;
    text-align: left;
  }
}
.type-list {
  .type {
    font-size: 30px;
    font-weight: bold;
    color: #adadad;
    margin: 20px 0;
  }
  .k-list {
    padding: 40px 0;
    background: #fff;
  }
  .k-item {
    text-align: center;
    display: flex;
    justify-content: space-around;
    color: #141416;
    font-size: 20px;
    margin-bottom: 42px;
    .item1 {
      flex: 1;
    }
    .item2 {
      flex: 1;
    }
    .item3 {
      flex: 1;
    }
    .item4 {
      width: 400px;
    }
    .hk {
      color: #d51d26;
      font-weight: 600;
      padding-right: 20px;
    }
  }
  .k-item:last-child {
    margin: 0;
  }
}
.speed-cont {
  display: flex;
  align-items: center;
}
.speed-wrap {
  width: 128px;
  height: 10px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  margin: 0 15px 0 60px;
  .speed {
    background: #d51d26;
    border-radius: 10px;
  }
}
</style>
