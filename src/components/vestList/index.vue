<template>
  <div class="vest-wrap">
    <div class="label-cont">
      <div class="label label1">{{$t('analysis.result.text14')}}</div>
      <div class="label label2">{{$t('analysis.result.text15')}}</div>
      <div class="label label3">{{$t('analysis.result.text16')}}</div>
      <div :style="{textIndent: '72px'}" class="label label4">{{$t('analysis.result.text17')}}（港币）</div>
    </div>
    <div class="type-list">
      <div class="item" v-for="(val,index) in datas" :key="index">
        <div class="type">{{val.type}}</div>
        <div class="k-list">
          <div class="k-item" v-for="(item,key) in val.list" :key="key">
            <div class="item1">{{item.assetsName}}</div>
            <div class="item2">
              <span class="hk">HK</span>
              {{item.assetsCode}}
            </div>
            <div class="item3">{{item.proportion}}</div>
            <div class="speed-cont item4">
              <div class="speed-wrap">
                <div :style="{width: `${item.proportion}%`}" class="speed"></div>
              </div>
              <div>{{getThousand(1000000000)}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="label-cont label-cont-btm">
      <div class="label label1">{{$t('analysis.result.text18')}}</div>
      <div class="label label2"></div>
      <div class="label label3">100.00%</div>
      <div :style="{textIndent: '203px'}" class="label label4">{{ getThousand(525465666)}}</div>
    </div>
  </div>
</template>
<script>
import { toThousandslsFilter } from "@/utils";
export default {
  props:{
    datas: {
      default: []
    }
  },
  data() {
    return {
    };
  },
  methods: {
    getThousand(num) {
      return toThousandslsFilter(num);
    }
  },
  mounted(){
    
  }
};
</script>

<style lang="scss" scoped>
.vest-wrap {
  margin-top: 60px;
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
}
</style>

