<template>
  <div id class="result-wrap">
    <span class="icon icon1"></span>
    <span class="icon icon2"></span>
    <span class="icon icon3"></span>
    <div class="top-wrap">
      <div class="tw-l">
        <div class="info">{{$t('analysis.result.text1')}}</div>
        <div class="result">{{type}}</div>
        <div
          @click="$router.push('/analysis/analys')"
          class="restart"
        >{{$t('analysis.result.text13')}}</div>
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
      <div v-show="oIndex==0" class="wrap1">
        <div class="l-wrap">
          <div class="l-item">
            <div class="myChart" id="myChart4"></div>
            <div class="des">15万以上的人为稳健型投资</div>
          </div>
          <div class="l-item">
            <div class="myChart" id="myChart5"></div>
            <div class="des">15万以上的人为稳健型投资</div>
          </div>
          <div class="l-item">
            <div class="myChart" id="myChart6"></div>
            <div class="des">15万以上的人为稳健型投资</div>
          </div>
        </div>
        <div id="myChart1"></div>
      </div>
      <div v-show="oIndex==1" class="wrap wrap2">
        <div id="myChart2"></div>
      </div>
      <div v-show="oIndex==2" class="wrap wrap3">
        <div id="myChart3"></div>
      </div>
      <div v-show="oIndex==2" class="content">
         <InvestList></InvestList>
      </div>

      <div v-show="oIndex!=2" class="btn-wrap">
        <div
          @click="$router.push('/analysis/analys')"
          class="btn-item btn1"
        >{{$t('analysis.result.text5')}}</div>
        <div @click="showmask=true" class="btn-item btn2">{{$t('analysis.result.text6')}}</div>
        <div
          @click="$router.push('/register')"
          class="btn-item btn3"
        >{{$t('analysis.result.text7')}}</div>
      </div>

      <div v-show="showmask" id="mask">
        <div class="center">
          <el-button class="close" @click="showmask=false">关闭</el-button>
          <div class="slide-cont">
            <div class="slide-item">
              <div class="label">{{$t('analysis.result.text8')}}</div>
              <div class="text">{{$t('analysis.result.text19')}}</div>
              <el-slider
                :min="1000"
                :max="10000"
                :step="2500"
                v-model="value1"
                :show-input-controls="false"
                show-stops
                show-input
                :show-tooltip="false"
              ></el-slider>
            </div>
            <div class="slide-item">
              <div class="label">{{$t('analysis.result.text9')}}</div>
              <div class="text">{{$t('analysis.result.text19')}}</div>
              <el-slider
                :min="10"
                :max="400"
                :step="100"
                v-model="value2"
                :show-input-controls="false"
                show-stops
                show-input
                :show-tooltip="false"
              ></el-slider>
            </div>
            <div class="slide-item">
              <div class="label">{{$t('analysis.result.text10')}}</div>
              <div class="text">{{$t('analysis.result.text19')}}</div>
              <el-slider
                :min="1"
                :max="20"
                :step="5"
                v-model="value3"
                :show-input-controls="false"
                show-stops
                show-input
                :show-tooltip="false"
              ></el-slider>
            </div>
            <div class="slide-item">
              <div class="label">{{$t('analysis.result.text11')}}</div>
              <div class="text">{{$t('analysis.result.text19')}}</div>
              <el-slider
                :min="10"
                :max="30"
                :step="5"
                v-model="value4"
                :show-input-controls="false"
                show-stops
                show-input
                :show-tooltip="false"
              ></el-slider>
            </div>
            <div class="slide-item">
              <div class="label">{{$t('analysis.result.text12')}}</div>
              <div class="text">{{$t('analysis.result.text19')}}</div>
              <el-slider
                :min="1"
                :max="5"
                :step="1"
                v-model="value5"
                :show-input-controls="false"
                show-stops
                show-input
                :show-tooltip="false"
              ></el-slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InvestList from '@/components/vestList/index.vue'
import { toThousandslsFilter, getType } from "@/utils";
export default {
  name: "result",
  components: {
    InvestList
  },
  computed: {
    type() {
      return getType(localStorage.getItem("totalScore"));
    },
    typeList() {
      return [
        this.$t("analysis.result.text2"),
        this.$t("analysis.result.text3"),
        this.$t("analysis.result.text4")
      ];
    }
  },
  data() {
    return {
      value1: 1000,
      value2: 10,
      value3: 1,
      value4: 10,
      value5: 1,
      oIndex: 0,
      showmask: false,
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
    drawArea() {},
    drawPie() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart3"));
      // 绘制图表
      var option = {
        // title : {
        //     text: '某站点用户访问来源',
        //     subtext: '纯属虚构',
        //     x:'center'
        // },
        color: ["#D51D26", "#E2C6AB", "#B9BBC0"],
        grid: {
          top: "0%",
          left: "0%",
          right: "15%"
          //bottom: '3%',
        },
        //backgroundColor: "#fff",
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "520",
          y: "center",
          itemGap: 40,
          data: ["40%", "50%", "10%"]
        },
        series: [
          {
            name: "投资类型",
            type: "pie",
            radius: ["56%", "74%"],
            center: ["30%", "50%"],
            data: [
              { value: 40, name: "40%" },
              { value: 30, name: "50%" },
              { value: 30, name: "10%" }
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
                  fontSize: "28",
                  fontWeight: "bold"
                }
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    drawLine() {
      var data = [
        ["2000-06-05", 116, "xxxx"],
        ["2000-06-06", 129],
        ["2000-06-07", 135],
        ["2000-06-08", 86],
        ["2000-06-09", 73],
        ["2000-06-10", 85],
        ["2000-06-11", 73],
        ["2000-06-12", 68],
        ["2000-06-13", 92],
        ["2000-06-14", 130],
        ["2000-06-15", 245],
        ["2000-06-16", 139],
        ["2000-06-17", 115],
        ["2000-06-18", 111],
        ["2000-06-19", 309],
        ["2000-06-20", 206],
        ["2000-06-21", 137],
        ["2000-06-22", 128],
        ["2000-06-23", 85],
        ["2000-06-24", 94],
        ["2000-06-25", 71],
        ["2000-06-26", 106],
        ["2000-06-27", 120],
        ["2000-06-28", 130],
        ["2000-06-29", 200]
      ];

      var dateList = data.map(function(item) {
        return item[0];
      });
      var valueList = data.map(function(item) {
        return item[1];
      });
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      var option = {
        backgroundColor: "#fff",
        grid: {
          top: "15%",
          left: "0%",
          right: "10%",
          bottom: '5%',
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          formatter: "{b}, 原本: {c}"
        },
        xAxis: {
          boundaryGap: false,
          type: "category",
          data: dateList || ["2008", "2010", "2012", "2014", "2016", "2018"],
          splitLine: {
            show: true
            // lineStyle: {
            // color: '#00ff00',
            // width: 2
            // },
          },
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            formatter: "{value}"
          }
        },
        yAxis: {
          type: "value",
          //type: 'category',
          splitLine: {
            show: false
          },
          axisLabel: {
            formatter: "{value}万"
          },
          boundaryGap: false,
          data: ["0", "10", "20", "30", "40", "50", "60", "70", "80"]
        },

        series: [
          {
            name: "哈哈哈",
            data: valueList || [600, 800, 901, 934, 1290],
            type: "line",
            //color: '#ff0000',
            symbol: "none",
            smooth: true,
            lineStyle: {
              normal: {
                width: 3,
                color: "#1890FF" // 1890FF
              }
            },
            markPoint: {
              //symbol: 'none', // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
              itemStyle: {
                normal: {
                  color: "#666",
                  label: {
                    show: true,
                    textStyle: {
                      //color: '#ff0000',
                      fontSize: 14
                      //fontWeight: "bold",
                    },
                    position: "bottom",
                    formatter: function(param) {
                      return "总资产" + param.data.yAxis + "万";
                    }
                  }
                }
              },
              symbolSize: [1, 1], // 容器大小
              symbolOffset: [35, -25], //位置偏移
              data: [
                {
                  //value: '总资产',
                  xAxis: 24,
                  yAxis: 200
                }
              ]
              //data: [{coord:[24,85]}],
            },
            markLine: {
              symbol: "none", //去掉警戒线最后面的箭头
              silent: true,
              // itemStyle: {
              //     normal: {
              //         lineStyle: {
              //             type: 'solid',
              //             color: '#D8B088',
              //             width: 2
              //         },
              //         label: {
              //             //color: '#ff0000',
              //             show: true,
              //             position: 'end',
              //             formatter: function (params) {
              //                 console.log(params)
              //             },
              //         }
              //     }
              // },
              data: [
                [
                  {
                    name: "原本800万",
                    itemStyle: {
                      normal: {
                        show: true,
                        label: {
                          show: true,
                          position: "end",
                          textStyle: {
                            color: "#666",
                            fontSize: 14
                            //fontWeight: "bold",
                          },
                          formatter: function(params) {
                            
                          }
                        }
                      }
                    },
                    lineStyle: {
                      normal: {
                        width: 2,
                        type: "solid",
                        color: "#E9E9E9"
                      }
                    },
                    coord: ["2000-06-06", 50]
                  },
                  {
                    coord: ["2000-06-25", 300]
                  }
                ],
                [
                  {
                    name: "低谷期",
                    itemStyle: {
                      normal: {
                        show: true,
                        label: {
                          show: true,
                          position: "end",
                          textStyle: {
                            color: "#666",
                            fontSize: 14,
                            height: 50,
                            lineHeight: 50
                            //fontWeight: "normal",
                          },
                          formatter: function(params) {
                            
                          }
                        }
                      }
                    },
                    lineStyle: {
                      normal: {
                        width: 2,
                        type: "solid",
                        color: "#999"
                      }
                    },
                    coord: ["2000-06-07", 0]
                  },
                  {
                    coord: ["2000-06-07", 350]
                  }
                ]

                // [{
                //     name: 'xxxx',
                //     coord: ['2000-06-06', 50],
                // }, {
                //     name: 'xxxx',
                //     coord: ['2000-06-25', 300],
                // }],

                // [
                //     {
                //         name: '本金800万',
                //         xAxis: '2000-06-06',
                //         yAxis: 40,
                //         symbol: 'none',
                //     },
                //     {
                //         //name: '标线1',
                //         xAxis: '2000-06-23',
                //         yAxis: 350,
                //         symbol: 'none'
                //     },
                // ],
                // [{
                //         name: '低谷期',
                //         xAxis: '2000-06-07',
                //         yAxis: 0,
                //         symbol: 'none'
                //     },
                //     {
                //         //name: '标线2',
                //         xAxis: '2000-06-07',
                //         yAxis: 350,
                //         symbol: 'none'
                //     },
                // ],
              ]
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    drawCircle(id, color, value) {
      let myChart = echarts.init(document.getElementById(id));
      var option = {
        color: color, //['#1890FF','#F0F2F5'],  //['#1890FF','#F0F2F5'],
        // 标题组件，包含主标题和副标题
        // title: {
        //   show: true,
        //   text: "执行任务",
        //   x: "center",
        //   textStyle: {
        //     fontSize: "15",
        //     color: "green",
        //     fontWeight: "bold"
        //   }
        // },
        //  提示框组件
        tooltip: {
          //是否显示提示框组件，包括提示框浮层和 axisPointe
          show: false,
          // 触发类型: item:数据项触发，axis：坐标轴触发
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        // 系列列表。每个系列通过 type 决定自己的图表类型
        series: [
          {
            // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
            //name: "任务进度",
            type: "pie",
            // 饼图的半径，数组的第一项是内半径，第二项是外半径
            radius: ["80%", "100%"],
            // 是否启用防止标签重叠策略，默认开启
            avoidLabelOverlap: false,
            hoverAnimation: false,
            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
            labelLine: {
              normal: {
                show: false
              }
            },
            // label: {
            //         normal: {
            //             show: false,
            //             position: 'center'
            //         },
            //         emphasis: {
            //             show: true,
            //             textStyle: {
            //                 fontSize: '28',
            //                 fontWeight: 'bold'
            //             }
            //         }
            // },
            data: [
              {
                // 数据值
                value: value,
                // 数据项名称
                //name: "完成率", // 完成率
                //该数据项是否被选中
                selected: false,
                // 单个扇区的标签配置
                label: {
                  normal: {
                    // 是显示标签
                    show: true,
                    position: "center",
                    // fontSize: 30,
                    textStyle: {
                      color: "#333",
                      fontSize: 18
                      //fontWeight: "bold",
                    },
                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
                    formatter: "{b}\n{d}%"
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: "14",
                      fontWeight: "bold"
                    }
                  }
                }
              },
              {
                value: 100 - value,
                label: {
                  normal: {
                    show: false
                  }
                }
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    getThousand(num) {
      return toThousandslsFilter(num);
    }
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.drawCircle("myChart4", ["#1890FF", "#F0F2F5"], 30); //#1890FF
      this.drawCircle("myChart5", ["#2FC25B", "#F0F2F5"], 40); // 2FC25B
      this.drawCircle("myChart6", ["#FACC14", "#F0F2F5"], 50); // FACC14
      this.drawLine();
      this.drawPie();
    }, 50);
  }
};
</script>
<style lang="scss" scoped>
#mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-content: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  .el-button {
    width: 50%;
  }
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .slide-item {
    position: relative;
    height: 100px;
    width: 410px;
    overflow: hidden;
    margin: 35px auto 0;
    color: #fff;
    .label {
      font-size: 20px;
      float: left;
    }
    .text {
      font-size: 20px;
      float: right;
    }
  }

  @media screen and (max-height: 880px) {
    .center{
      text-align: center;
    }
      .el-button{
        margin: 100px 0 50px;
      }
      .slide-item{
        display: inline-block;
        margin: 0 100px 30px;
      }
  }


}
#myChart1 {
  width: 800px;
  height: 400px;
  margin: 0 auto;
}
#myChart2 {
  width: 800px;
  height: 400px;
  margin: 0 auto;
}
#myChart3 {
  width: 800px;
  height: 400px;
  margin: 0 auto;
}
.myChart {
  width: 100px;
  height: 100px;
}
.btn-wrap {
  position: relative;
  top: -90px;
  display: flex;
  justify-content: center;
  .btn-item {
    width: 160px;
    height: 48px;
    line-height: 48px;
    font-size: 18px;
    cursor: pointer;
    opacity: 0.9;
    text-align: center;
    background-position: center;
    background-size: contain;
    &:hover {
      opacity: 1;
    }
  }
  .btn1 {
    color: #3c3f4d;
    background-image: url("../../assets/images/other_btn/btn_yellow160.png");
  }
  .btn2 {
    margin: 0 40px;
    color: #fff;
    background-image: url("../../assets/images/other_btn/btn_pink160.png");
  }
  .btn3 {
    color: #fff;
    background-image: url("../../assets/images/other_btn/btn_red160.png");
  }
}

.result-wrap {
  position: relative;
  .wrap2 {
    background: #fff;
    padding-bottom: 100px;
  }
  .wrap1 {
    height: 600px;
    padding: 80px 0 0 100px;
    box-sizing: border-box;
    background: #fff;
    display: flex;
    justify-content: space-between;
    .l-item {
      display: flex;
      align-items: center;
      margin-bottom: 22px;
      .des {
        width: 150px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
        line-height: 22px;
        margin-left: 42px;
      }
    }
  }
  .icon1 {
    position: absolute;
    left: 41%;
    top: 186px;
    width: 72px;
    height: 72px;
    background: url("../../assets/images/icon1.png") no-repeat center;
    background-size: contain;
  }
  .icon2 {
    position: absolute;
    right: 60px;
    top: 474px;
    width: 72px;
    height: 72px;
    background: url("../../assets/images/icon2.png") no-repeat center;
    background-size: contain;
  }
  .icon3 {
    position: absolute;
    left: 0;
    bottom: -30px;
    width: 72px;
    height: 72px;
    background: url("../../assets/images/icon1.png") no-repeat center;
    background-size: contain;
  }
  .top-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 100px 100px;
    .tw-l {
    }
    .tw-r {
      width: 550px;
      height: 318px;
      background: url("../../assets/images/firstpage/bg_risk.png") no-repeat
        center;
      background-size: contain;
    }
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
    &.label-cont-btm{
      margin-top: 40px ;
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
}
</style>


