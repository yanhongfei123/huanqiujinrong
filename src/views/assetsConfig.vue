<template>
  <div class="assetsConfig">
    <header>
      <userCenterHeader @getUserInfo="setUserInfo" path="/accountPreView"></userCenterHeader>
    </header>
    <div class="content">
      <div class="com-width">
        <div class="title">{{$t('assetsConfig.text1')}}</div>
        <div class="main">
          <div class="top-wrap">
            <div class="tw-l">
              <div class="info">
                {{$t('assetsConfig.text2')}}
                <span>{{ isHkJis }}</span>上市的，受
                <span>{{ isHk }}{{$t('assetsConfig.text3')}}</span>{{$t('assetsConfig.text4')}}
              </div>
              <div class="result">{{ type }}</div>
              <div class="btm-info">
                {{$t('assetsConfig.text5')}}（{{ currencyText }}）：
                <span>{{ totalAmount }}</span>
              </div>
            </div>
            <div class="tw-r"></div>
          </div>
          <div class="dis-label">{{$t('assetsConfig.text6')}}</div>
          <div
            class="des-info"
          >{{$t('assetsConfig.text7')}}</div>
        </div>
        <InvestList :datas="datas"></InvestList>
        <div class="box-wrap">
          <p v-if="error1" class="error">{{error1}}</p>
          <el-checkbox
            v-model="checked"
          >{{$t('assetsConfig.text8')}}</el-checkbox>
        </div>
        <div class="dis-label">{{$t('assetsConfig.text9')}}</div>
        <div class="pas-label">{{$t('assetsConfig.text10')}}</div>
        <el-input type="password" maxlength="6" v-model="password" :placeholder="$t('assetsConfig.text11')"></el-input>
		<p class="forget"><a href="/#/setting/resetTranPas">{{$t('assetsConfig.text12')}}</a></p>
        <p v-if="error2" class="error">{{error2}}</p>
        <div @click="startConfig" :class="[openStatus == 6 ? 'disabled': '']" class="btn-openAccount">{{$t('assetsConfig.text13')}}</div>
      </div>
    </div>
    <!-- <footerBar></footerBar> -->
  </div>
</template>
<script>
import { Message } from 'element-ui';
import userCenterHeader from "@/components/header/userCenterHeader.vue";
import InvestList from "@/components/vestList/index.vue";
import { updateAccount, getMyAccount } from '@/api/userCenter.js';
import { getType, getTypeByLevel, getConfigType } from "@/utils";
import { getInvestment } from "@/api/analysis.js";
import { getAccountDetail } from "@/api/myAccount.js";

export default {
  name: "assetsConfig",
  computed: {
    type() {
      return getTypeByLevel(this.level);
    },
    isHkJis(){
      return this.currencyType == '1' ? this.$t('assetsConfig.text14') : this.$t('assetsConfig.text15');
    },
    isHk(){
      return this.currencyType == '1' ? this.$t('assetsConfig.text16') : this.$t('assetsConfig.text17');
    },
    currencyText(){
      return this.currencyType == '1' ? this.$t('currency1') : this.$t('currency2');
    }

  },
  components: {
    userCenterHeader,
    InvestList
  },
  data() {
    return {
      id: '',
      level: '0',
	  openStatus: 0,
      currencyType: '1',
      totalAmount: 0,
      checked: false,
      password: "",
      error1: '',
      error2: '',
      datas: {},
      assetsTypelist: [],
    };
  },
  methods:{
	setUserInfo(data) {
		this.openStatus = data.state;
	},  
    startConfig(){
	if (this.openStatus == 6) {
		console.log(this.openStatus)
		return
	}	
      var reg = /^\d{6}$/;
      this.error1 = !this.checked ? '請勾選上方承諾' : '';
      this.error2 = !reg.test(this.password) ? '請輸入正確的交易密碼' : ''
      if(!this.error1 && !this.error2){
        var params = {
          investmentId: this.id,
          dealPwd: this.password,
        };
        updateAccount(params).then(res => {
          Message({
            message: '配置申請已提交',
            type: "success"
          });
          setTimeout(()=>{
            this.$router.push('/accountPreView');
          }, 2000);
        })
      }
    },
    getInvestment() {
      getInvestment().then(res => {
        var data = res.data;
        var datas = [];
		var t = getConfigType(data.userScore);
		var sysInvestments = data.sysInvestments.filter(item => item.investmentName.includes(t));
		var sysAssetsInvestments = sysInvestments[0].sysAssetsInvestments;
		console.log(sysInvestments)

        this.id = sysInvestments[0].id;
        this.assetsTypelist.map((val, index) => {
          var type = sysAssetsInvestments.filter(item => item.assetsType == val.dictValue);
          console.log(type);
          if (type.length) {
            //var percent = ((type.length / data.length) * 100).toFixed(2);
            type.map(item => {
              item.amount = 100000 * parseFloat(item.proportion) / 100;
            });

            datas.push({
              type: {
                assetsType: val.dictLabel,
                assetsTypeFt: val.dictLabelFt,
                assetsTypeEn: val.dictLabelEn
              },
              list: type
            });
          }
        });
		
		console.log(datas)

        var i = 0;
        sysAssetsInvestments.map(item => {
          i += parseFloat(item.proportion);
        });

        var totalPercent = i + "%";
        var totalAmount = 100000 * parseFloat(totalPercent) / 100;
        this.totalAmount = totalAmount;

        this.datas = {
          datas,
          totalPercent,
          totalAmount
        };
		
		console.log(this.datas)
      });
    }
  },

  mounted(){ 
    getMyAccount().then(res => {
      var { currency } = res.data;
      this.currencyType = currency;
	  getAccountDetail().then(res=>{
		  this.level = res.data.risk;
		  this.getGlobalData("assets_type").then(res => {
		    this.assetsTypelist = res.data.list;
			this.getInvestment(); 
		  });
	  });
    });
  }
};
</script>
<style lang="scss" scoped>
	.forget{
		a{
			color: #ff0000;
			text-decoration: underline;
		}
		margin-top: 10px;
	}
.assetsConfig {
  background: #f9f9f9;
  .content {
    padding: 40px 0 130px;
  }
  .main {
    margin-top: 60px;
  }
  .title {
    font-size: 40px;
    color: rgba(60, 63, 77, 1);
    line-height: 58px;
  }
  .top-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 100px;
    color: #444857;
    font-size: 20px;
    margin-bottom: 50px;
    .info {
      width: 470px;
      line-height: 28px;
      span {
        color: #ffba32;
      }
    }
    .btm-info {
      span {
        font-weight: bold;
      }
    }
    .tw-r {
      width: 550px;
      height: 318px;
      background: url("../assets/images/firstpage/bg_risk.png") no-repeat center;
      background-size: contain;
    }
    .result {
      font-size: 60px;
      color: #141416;
      line-height: 84px;
      font-weight: 600;
      margin: 20px 0 40px;
    }
  }
  .dis-label {
    font-size: 24px;
    color: rgba(59, 72, 89, 1);
    line-height: 24px;
  }
  .des-info {
    font-size: 16px;
    color: rgba(59, 72, 89, 1);
    line-height: 32px;
    margin-top: 20px;
  }
  .box-wrap {
    position: relative;
    margin: 40px 0 62px;
    .el-checkbox {
      color: #000!important;
      font-size: 16px;
    }
    .error{
      position: absolute;
      left: 0;
      top: 15px;
    }
  }
  .el-input {
    width: 380px;
  }
  .pas-label {
    margin: 40px 0 10px;
    font-size: 16px;
    color: rgba(20, 20, 22, 1);
    line-height: 32px;
  }
  .error{
    font-size: 14px;
    color: #D51D26;
    margin-top: 12px;
  }
  .btn-openAccount {
    position: relative;
    width: 400px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 28px;
    font-weight: 500;
    margin: 100px auto 0;
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
}
</style>

