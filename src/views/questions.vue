<template>
  <div class="page-questions">
    <header>
      <headerNav></headerNav>
    </header>
    <section class="barner">
      <div class="barner-content">
        <div class="barner-title">Q & A</div>
        <div class="barner-info">{{this.$t("question.text1")}}</div>
      </div>
    </section>
    <section class="content">
      <div class="com-width">
        <div class="tab-wrap">
          <div
            @click="changeTab(index, val.dictValue)"
            :class="[oIndex===index?'active':'']"
            v-for="(val,index) in typeList"
            :key="index"
            class="tab-item"
          >{{val | filterByLanguage('dictLabel')}}</div>
        </div>
        <div @click="toggle(val)" v-for="(val,index) in fqList" :key="index" class="question">
          <div :class="[val.isshow?'show':'']" class="icon"></div>
          <div class="q-title">{{val | filterByLanguage('helpTitle')}}</div>
          <div :class="[val.isshow?'height-auto':'']" class="answer">{{val | filterByLanguage('helpContent')}}</div>
        </div>
        <el-pagination
          @current-change="currentChange"
          v-if="total>1"
          background
          layout="prev, pager, next"
          :page-size="1"
          :current-page="currentPage"
          :total="total"
        ></el-pagination>
      </div>
    </section>
    <footerBar></footerBar>
  </div>
</template>

<script>
// @ is an alias to /src
import headerNav from "@/components/nav/nav.vue";
import footerBar from "@/components/footer/footer.vue";
import { getQuestionList } from "@/api/article";
export default {
  name: "contact",
  components: {
    headerNav,
    footerBar
  },
  computed: {
  },
  data() {
    return {
      oIndex: 0,
      total:0,
      currentPage: 1,
      questionType: '',
      typeList:[],
      fqList: [],
    };
  },
  methods: {
    toggle(item) {
      item.isshow = !item.isshow;
    },
    getQuestionList(helpType, pageNum){
      getQuestionList({
        helpType,
        pageNum,
      }).then(res => {
        var list = res.data.list;
        list.map(item => {
          item.isshow = false;
          return item;
        });
        this.fqList = list;
        this.total = res.data.total;
      });
    },
    changeTab(index, questionType) {
      this.oIndex = index;
      this.questionType = questionType;
      this.currentPage = 1;
      this.getQuestionList(questionType, 1)
    },
    currentChange(pageNum){
      this.currentPage = pageNum;
      this.getQuestionList(this.questionType, pageNum)
    },
  },
  async mounted() {
    var res = await this.getGlobalData("sys_help_type");
    var list = res.data.list;
    this.typeList = list;
    this.changeTab(0, list[0].dictValue);
  }
};
</script>

<style lang="scss" scoped>
.page-questions {
  .barner {
    position: relative;
    height: 400px;
    background: url("../assets/images/firstpage/banner_question1.png") no-repeat
      center;
    background-size: cover;
    .barner-content {
      width: 1180px;
      margin: 0 auto;
      position: relative;
      color: #fff;
      top: 100px;
      left: 100px;
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
          @include icon2(-70px, auto, auto, -20px);
          background-size: 50%;
        }
      }
    }
  }
  .question {
    position: relative;
    color: #141416;
    .q-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 30px;
    }
    .answer {
      height: 0;
      overflow: hidden;
      font-size: 20px;
      line-height: 28px;
      opacity: 0.8;
      &.height-auto {
        height: 56px;
        margin: 28px 0 20px;
        transition: height 0.3s;
        -webkit-transition: height 0.3s;
      }
    }
    .icon {
      position: absolute;
      top: 8px;
      left: -35px;
      width: 16px;
      height: 16px;
      background: url("../assets/images/user_center/btn_jia.png");
      background-size: contain;
    }
    .show {
      background: url("../assets/images/user_center/btn_expand.png");
    }
  }
}
</style>
