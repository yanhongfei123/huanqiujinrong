<template>
  <div class="account-wrap">
    <div class="top-wrap">
      <div class="item item1">
        <div class="type">一. {{$t('userCenter.myAccount.text1')}}</div>
        <div class="tb-wrap">
          <div class="tbl-item tbl-item1">
            <div class="label">{{$t('userCenter.myAccount.text2')}}</div>
            <div class="acount">{{ money }}</div>
          </div>
          <div class="tbl-item">
            <div class="label">
              {{$t('userCenter.myAccount.text3')}}（{{ currency }}）
              <tips
                top="3px"
                right="-20px"
              >{{$t('userCenter.myAccount.text4')}}（产品名称）{{$t('userCenter.myAccount.text4_1')}}</tips>
            </div>
            <div class="acount">{{ frozenMoney }}</div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="type">
          二. {{$t('userCenter.myAccount.text5')}}
          <!-- <router-link to="/">{{$t('userCenter.myAccount.text6')}}</router-link> -->
        </div>
        <div class="tb-wrap">
          <div v-show="bond" class="tbl-item tbl-item1">
            <div class="label">{{$t('userCenter.myAccount.text7')}}</div>
            <div class="acount">{{ bond }}</div>
          </div>
          <div v-show="userName" class="tbl-item">
            <div class="label">{{$t('userCenter.myAccount.text8')}}</div>
            <div class="acount">{{ userName }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="btm-wrap myAcount">
      <div class="type">三. {{$t('userCenter.myAccount.text9')}}</div>
      <div class="q-list">
        <div class="q-item" v-for="(val,index) in fqList" :key="index">
          <div :class="[val.isshow?'show':'']" class="icon"></div>
          <div @click="val.isshow=!val.isshow" class="q-title">{{val | filterByLanguage('helpTitle')}}</div>
          <div :class="[val.isshow?'height-auto':'']" class="q-answer">{{val | filterByLanguage('helpContent')}}</div>
        </div>
      </div>
      <el-pagination
        @current-change="currentChange"
        v-if="total > 1"
        background
        layout="prev, pager, next"
        :page-size="1"
        :current-page="currentPage"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import Tips from "../../components/tips.vue";
import { getMyAccount } from '@/api/userCenter.js'
import { getQuestionList } from "@/api/article";
export default {
  computed:{
    currency(){
      return this.currencyType == '1' ? this.$t('currency1') : this.$t('currency2');
    },
  },
  name: "account",
  components: {
    Tips
  },
  data() {
    return {
      total:0,
      currentPage: 1,
      fqList: [],
      frozenMoney: 0,
      money: 0,
      userName: '',
      bond: '',
      currencyType: '2',
    };
  },
  methods:{
    getQuestionList(pageNum){
      getQuestionList({
        helpType: '1',
        pageNum,
      }).then(res => {
        var list = res.data.list;
        list.map(item => {
          item.isshow = false;
          return item;
        });
        this.fqList = list;
        this.total = res.data.pages;
      });
    },
    currentChange(pageNum){
      this.currentPage = pageNum;
      this.getQuestionList(pageNum)
    },
  },
  beforeMount(){
    this.getQuestionList(1);
    getMyAccount().then(res => {
      var { frozenMoney, money, currency, bond, userName } = res.data;
      this.currencyType = currency;
      this.frozenMoney = frozenMoney;
      this.money = money;
      this.bond = bond;
      this.userName = userName;

    })
  },

};
</script>
<style lang="scss" scoped>
.account-wrap {
  .top-wrap {
    display: flex;
    padding-bottom: 40px;
    margin-bottom: 20px;
    border-bottom: 1px solid #d8d8d8;
  }
  .item {
    width: 400px;
  }
  .item1 {
    margin-right: 66px;
  }
  .type {
    height: 64px;
    font-size: 20px;
    font-weight: 600;
    color: rgba(20, 20, 22, 1);
    margin-bottom: 20px;
    line-height: 64px;
    border-bottom: 1px solid #d8d8d8;
    a {
      float: right;
      font-size: 16px;
      color: #d51d26;
    }
  }
  .tb-wrap {
    display: flex;
    .tbl-item {
      text-align: center;
    }
    .tbl-item1 {
      margin-right: 130px;
    }
    .label {
      position: relative;
      color: rgba(20, 20, 22, 0.5);
      font-size: 16px;
      margin-bottom: 36px;
    }
    .acount {
      font-size: 24px;
      font-weight: bold;
      color: rgba(20, 20, 22, 1);
      line-height: 32px;
    }
  }
  .btm-wrap {
     padding-bottom: 20px;
    .type {
      margin: 0;
      border: none;
    }
    .q-title {
      font-size: 16px;
      font-weight: 500;
      color: rgba(20, 20, 22, 0.8);
      line-height: 24px;
      margin-bottom: 20px;
      cursor: pointer;
    }
    .q-answer {
      height: 0;
      overflow: hidden;
      font-size: 14px;
      color: rgba(60, 63, 77, 1);
      line-height: 20px;
      &.height-auto {
        height: 40px;
        margin-bottom: 20px;
        transition: height 0.3s;
        -webkit-transition: height 0.3s;
      }
    }

    .q-list {
      margin-left: 35px;
    }
    .q-item {
      position: relative;
    }
    .icon {
      position: absolute;
      top: 5px;
      left: -35px;
      width: 16px;
      height: 16px;
      background: url("../../assets/images/user_center/btn_jia.png");
      background-size: contain;
    }
    .show {
      background: url("../../assets/images/user_center/btn_expand.png");
    }
  }
}
</style>


