<template>
  <div class="invest-records">
    <div class="time-wrap">
      <div
        @click="changeTab(index)"
        v-for="(val,index) in timeList"
        :key="index"
        class="item"
        :class="[oIndex == index ? 'active' : '']"
      >{{val}}</div>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane name="accountIncome" :label="$t('history.text1')">
        <div class="label">{{$t('history.text1')}}（港币）</div>
        <div id="myChart"></div>
      </el-tab-pane>
      <el-tab-pane name="time" :label="$t('history.text2')">
        <div class="label">{{$t('history.text2')}}（%）</div>
        <div id="myChart2"></div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "history",
  computed:{
    timeList(){
      return [this.$t('history.text3'), this.$t('history.text4'), this.$t('history.text5'), this.$t('history.text5')]
    }
  },
  data() {
    return {
      oIndex: 0,
      activeName: "accountIncome",
      data:[
        // ["2000-06-05", 0,],
        // ["2000-06-05", 0],

      ],
      data2:[
        // ["2000-06-05", 0,],
        // ["2000-06-05", 0],
        ],
    };
  },
  watch: {
    activeName(value){
      if (value == 'accountIncome') {
        this.renderEcharts('myChart',this.data.slice(0, 10 + this.oIndex))
      } else {
        this.renderEcharts('myChart2',this.data.slice(0, 8 + this.oIndex))
      }
    }
  },
  mounted(){
    setTimeout(()=>{
      this.renderEcharts('myChart',this.data);
      this.renderEcharts('myChart2',this.data2)
    }, 100);
  },
  methods: {
    showLoading() {
      this.loading = this.$loading({
        lock: true,
        // text: 'Loading',
        // spinner: 'el-icon-loading',
        background: "rgba(0, 0, 0, 0.7)"
      });
    },
    hideLoading() {
      this.loading.close();
    },
    renderEcharts(id, data) {// [220, 182, 191, 234, 290, 330, 310]
      var dateList = data.map(function(item) {
        return item[0];
      });
      var valueList = data.map(function(item) {
        return item[1];
      });
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById(id));
      // 绘制图表
      var option = {
        backgroundColor: "#fff",
        grid: {
          top: "10",
          left: "20",
          right: "25",
          bottom: '50',
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          formatter: "{b}: {c}"
        },
        xAxis: {
          data: dateList,
          splitLine: {
            show: false
            // lineStyle: {
            // color: '#00ff00',
            // width: 2
            // },
          },
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            //formatter: "{value}",
            show:true,              //是否显示
            interval:"auto",        //坐标轴刻度标签的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推
            inside:false,           //刻度标签是否朝内，默认朝外
            rotate:40,               //刻度标签旋转的角度，旋转的角度从 -90 度到 90 度
            margin:12,               //刻度标签与轴线之间的距离
            formatter: function (value, index) {            //使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
                return value;
            },
          },
        },
        yAxis: {
          type: "value",
          //type: 'category',
          splitLine: {
            show: true
          },
          axisLabel: {
            formatter: "{value}"
          },
          boundaryGap: false,
          data: ["0", "10", "20", "30", "40", "50", "60", "70", "80"]
        },
        series: [
          {
            name: "哈哈哈",
            data: valueList ,
            type: "line",
            symbol: "none",
            //smooth: true,
            lineStyle: {
              normal: {
                width: 2,
                color: "#1890FF" // 1890FF
              }
            },
          }
        ]
      };
      myChart.setOption(option);
    },
    changeTab(index){
      if(this.oIndex == index) return;
      this.oIndex = index;
      if (this.activeName == 'accountIncome') {
        this.renderEcharts('myChart',this.data.slice(0, 10 + index))
      } else {
        this.renderEcharts('myChart2',this.data.slice(0, 8 + index))
      }
    }
  }
};
</script>
<style scoped lang="scss">
#myChart, #myChart2 {
  width: 1020px;
  height: 500px;
  margin: 0 auto;
}
.invest-records {
  position: relative;
  background: #fff;
  .label{
    font-size: 20px;
    color: #3B4859;
    padding-left: 20px;
    margin: 40px 0;
  }
  .time-wrap {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 360px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .item {
      font-size: 16px;
      color: rgba(59, 72, 89, 0.5);
      cursor: pointer;
      &.active,
      &:hover {
        color: #d51d26;
      }
    }
  }
}
</style>