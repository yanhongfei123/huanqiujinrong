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
      <div v-show="oIndex==0" id="myChart1"></div>
      <div v-show="oIndex==1" id="myChart2"></div>
      <div v-show="oIndex==2" id="myChart3"></div>
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
import { toThousandslsFilter } from "@/utils";
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
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "700",
          y: "center",
          itemGap: 40,
          data: ["股票 60%", "债务 30%", "其他投资 10%"]
        },
        series: [
          {
            name: "投资类型",
            type: "pie",
            radius: ["38%", "55%"],
            center: ["30%", "50%"],
            data: [
              { value: 335, name: "股票 60%" },
              { value: 310, name: "债务 30%" },
              { value: 234, name: "其他投资 10%" }
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
        grid: {
          top: "10%",
          left: "10%",
          right: "20%",
          //bottom: '3%',
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          formatter: "{b}, 本金: {c}"
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
                      return "总资产" + param.data.yAxis;
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
                    name: "本金800万",
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
                            console.log(params);
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
                            console.log(params);
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
    drawCircle() {
      let myChart = echarts.init(document.getElementById("myChart1"));
      var option = {
        color:['#1890FF','#F0F2F5'],
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
            radius: ["50%", "70%"],
            // 是否启用防止标签重叠策略，默认开启
            avoidLabelOverlap: false,
            hoverAnimation: false,
            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                // 数据值
                value: 40,
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
                      color: '#333',
                      fontSize: 18,
                      //fontWeight: "bold",
                    },
                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
                    formatter: "{b}\n{d}%"
                  }
                }
              },
              {
                value: 100,
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
  mounted() {
    setTimeout(() => {
      this.drawCircle();
      this.drawLine();
      this.drawPie();
    }, 50);
  }
};
</script>
<style lang="scss" scoped>
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


