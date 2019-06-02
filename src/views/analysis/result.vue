<template>
  <div class="result-wrap">
    <span class="icon icon1"></span>
    <span class="icon icon2"></span>
    <span class="icon icon3"></span>
    <div class="top-wrap">
      <div class="tw-l">
        <div class="info">根据您的回答，您的风险承受类型为</div>
        <div class="result">稳健型</div>
        <div @click="$router.push('/analysis/analys')" class="restart">重新测评</div>
      </div>
      <div class="tw-r"></div>
    </div>
    <div class="vest-wrap">
      <div class="tab-wrap">
        <div
          @click="changeTab(index)"
          :class="[oIndex===index?'active':'']"
          v-for="(val,index) in typeList"
          :key="index"
          class="tab-item"
        >{{val}}</div>
      </div>
      <div id="myChart"></div>
      <div class="content">
        <div class="label-cont">
          <div class="label label1">名称</div>
          <div class="label label2">代码</div>
          <div class="label label3">预计权重</div>
          <div class="label label4">预计投资金额（港币）</div>
        </div>
        <div class="type-list">
          <div class="item" v-for="(val,index) in datas" :key="index">
            <div class="type">{{val.type}}</div>
            <div class="k-list">
              <div class="k-item" v-for="(item,key) in val.list" :key="key">
                <div class="item1">{{item.v1}}</div>
                <div class="item2">
                  <span class="hk">HK</span>
                  {{item.v2}}
                </div>
                <div class="item3">{{item.v3}}</div>
                <div class="speed-cont item4">
                  <div class="speed-wrap">
                    <div :style="{width: `${item.v3}`}" class="speed"></div>
                  </div>
                  <div>{{getThousand(item.v4)}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="label-cont">
          <div class="label label1">总计</div>
          <div class="label label2"></div>
          <div class="label label3">100.00%</div>
          <div :style="{textIndent: '203px'}" class="label label4">{{ getThousand(525465666)}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toThousandslsFilter } from '@/utils'
export default {
  name: "result",
  data() {
    return {
      oIndex: 0,
      typeList: ["未来预测", "过去分析", "投资组合"],
      datas: [
        {
          type: "股票类",
          list: [
            {
              v1: "领航标普500",
              v2: "03140",
              v3: "100%",
              v4: "354090"
            },
            {
              v1: "领航标普500",
              v2: "03140",
              v3: "90%",
              v4: "35090"
            }
          ]
        },
        {
          type: "投资类",
          list: [
            {
              v1: "领航标普500",
              v2: "03140",
              v3: "50%",
              v4: "3554090"
            },
            {
              v1: "领航标普500",
              v2: "03140",
              v3: "20%",
              v4: "3554090"
            }
          ]
        }
      ]
    };
  },
  methods: {
    changeTab(index) {
      this.oIndex = index;
    },
    drawPie() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart"));
      // 绘制图表
      var option = {
        // title : {
        //     text: '某站点用户访问来源',
        //     subtext: '纯属虚构',
        //     x:'center'
        // },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "700",
          y: "center",
          itemGap: 40,
          data: ["股票", "债务", "其他投资"]
        },
        series: [
          {
            name: "投资类型",
            type: "pie",
            radius: ["38%", "55%"],
            center: ["30%", "50%"],
            data: [
              { value: 335, name: "股票" },
              { value: 310, name: "债务" },
              { value: 234, name: "其他投资" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
            // label: {
            //         normal: {
            //             show: false,
            //             position: 'center'
            //         },
            //         emphasis: {
            //             show: true,
            //             textStyle: {
            //                 fontSize: '30',
            //                 fontWeight: 'bold'
            //             }
            //         }
            //     },
          }
        ]
      };
      myChart.setOption(option);
    },
    getThousand(num){
      return toThousandslsFilter(num)
    }
  },
  mounted() {
    setTimeout(() => {
      this.drawPie();
    }, 50);
  }
};
</script>
<style lang="scss" scoped>
#myChart {
  height: 500px;
}
.result-wrap {
  position: relative;
  .icon1 {
    position: absolute;
    left: 41%;
    top: 153px;
    width: 67px;
    height: 67px;
    background: url("../../assets/images/gou-red.png") no-repeat center;
    background-size: contain;
  }
  .icon2 {
    position: absolute;
    right: 196px;
    top: 408px;
    width: 59px;
    height: 61px;
    background: url("../../assets/images/gou-red.png") no-repeat center;
    background-size: contain;
  }
  .icon3 {
    position: absolute;
    left: 0;
    top: 408px;
    width: 67px;
    height: 67px;
    background: url("../../assets/images/gou-red.png") no-repeat center;
    background-size: contain;
  }
  .top-wrap {
    padding: 35px 0 100px 100px;
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
    color: #d51d26;
    line-height: 22px;
  }
  .tab-wrap {
    margin-bottom: 100px;
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
  .label-cont {
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #444857;
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
}
</style>


