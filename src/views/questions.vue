<template>
  <div class="page-questions">
    <header>
      <headerNav></headerNav>
    </header>
    <section class="barner">
      <div class="barner-content">
        <div class="barner-title">Q & A</div>
        <div class="barner-info">常见问题</div>
      </div>
    </section>
    <section class="content">
      <div class="com-width">
        <div class="tab-wrap">
          <div
            @click="changeTab(index)"
            :class="[oIndex===index?'active':'']"
            v-for="(val,index) in typeList"
            :key="index"
            class="tab-item"
          >{{val}}</div>
        </div>
        <div @click="toggle(val)" v-for="(val,index) in fqList" :key="index" class="question">
          <div class="q-title">{{val.fq}}</div>
          <div
            v-show="val.isshow"
            class="answer"
          >{{val.as}}</div>
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

export default {
  name: "contact",
  components: {
    headerNav,
    footerBar
  },
  computed: {},
  data() {
    return {
      oIndex: 0,
      typeList: [
        "常见问题",
        "开户相关",
        "出入金相关",
        "投资相关",
        "具体收费",
        "安全"
      ],
      fqList: [
        {
          isshow: false,
          fq: "最低投资金额是多少？",
          as:
            "最低投资金额为100,000港币。由于在香港上市的ETF的最低投资金额要求，设立这个投资门槛是为了确保客户能组成一个多元分散的投资组合。"
        },
        {
          isshow: false,
          fq: "最低投资金额是多少？",
          as:
            "最低投资金额为100,000港币。由于在香港上市的ETF的最低投资金额要求，设立这个投资门槛是为了确保客户能组成一个多元分散的投资组合。"
        },
        {
          isshow: false,
          fq: "最低投资金额是多少？",
          as:
            "最低投资金额为100,000港币。由于在香港上市的ETF的最低投资金额要求，设立这个投资门槛是为了确保客户能组成一个多元分散的投资组合。"
        }
      ]
    };
  },
  methods: {
    changeTab(index) {
      this.oIndex = index;
    },
    toggle(item){
      item.isshow = !item.isshow;
    }
  }
};
</script>

<style lang="scss" scoped>
.page-questions {
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
      top: 100px;
    }
    .barner-title {
      font-size: 95px;
      font-weight: 800;
      color: #fff;
      line-height: 137px;
      opacity: 0.3;
    }
    .barner-info {
      font-size: 64px;
      color: #fff;
      line-height: 92px;
    }
  }
  .content {
    padding: 100px 0 120px;
    background: #f9f9f9;
    .tab-wrap {
      margin-bottom: 96px;
      display: flex;
      justify-content: center;
    }
    .tab-item {
      font-size: 20px;
      color: #444857;
      padding: 0 7px 12px;
      margin: 0 28px;
      border-bottom: 5px solid transparent;
      &.active {
        position: relative;
        color: #d51d26;
        font-weight: bold;
        border-bottom-color: #d51d26;
        &::after {
          content: "";
          position: absolute;
          left: 50%;
          top: -30px;
          width: 22px;
          height: 19px;
          margin-left: -11px;
          background: url("../assets/images/gou-red.png") no-repeat center;
          background-size: contain;
        }
      }
    }
  }
  .question {
    color: #141416;
    .q-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 40px;
    }
    .answer {
      font-size: 20px;
      line-height: 28px;
      margin: 38px 0 20px;
    }
  }
}
</style>
