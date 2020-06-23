<template>
  <div class="assetsConfig">
    <header>
      <userCenterHeader path="/accountPreView"></userCenterHeader>
    </header>
    <div class="content">
      <div class="com-width">
        <div class="title">资产配置</div>
        <div class="main">
          <div class="top-wrap">
            <div class="tw-l">
              <div class="info">
                您即将买卖的是在
                <span>{{ isHkJis }}</span>上市的，受
                <span>{{ isHk }}证监会</span>监督的交易所买卖基金，您的风险承受类型为
              </div>
              <div class="result">{{ type }}</div>
              <div class="btm-info">
                投资金额（{{ currencyText }}）：
                <span>{{ totalAmount }}</span>
              </div>
            </div>
            <div class="tw-r"></div>
          </div>
          <div class="dis-label">一.目标组合配置（系统根据您的风险承受类型，为您推荐）</div>
          <div
            class="des-info"
          >说明：我们将实时监控市场，确保以目标配比执行，但市场波动可能导致交易结果与目标配比不同。以上资产预估仅供参考，实际投资金额以买入结果为准。</div>
        </div>
        <InvestList :datas="datas"></InvestList>
        <div class="box-wrap">
          <p v-if="error1" class="error">{{error1}}</p>
          <el-checkbox
            v-model="checked"
          >您已阅读并了解以上投资组合的相关信息，同时我司向您推荐的投资组合或基金也是依据您的风险测评结果及个人投资目标，更在您能承受的风险水平范围。</el-checkbox>
        </div>
        <div class="dis-label">二.输入交易密码</div>
        <div class="pas-label">交易密码：</div>
        <el-input type="password" maxlength="6" v-model="password" placeholder="请输入6位交易密码"></el-input>
		<p class="forget"><a href="/#/setting/resetTranPas">修改密码</a></p>
        <p v-if="error2" class="error">{{error2}}</p>
        <div @click="startConfig" class="btn-openAccount">开启我的资产配置</div>
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
import { getType, getTypeByLevel } from "@/utils";
import { getInvestment } from "@/api/analysis.js";
import { getAccountDetail } from "@/api/myAccount.js";
export default {
  name: "assetsConfig",
  computed: {
    type() {
      return getTypeByLevel(this.level);
    },
    isHkJis(){
      return this.currencyType == '1' ? this.$t('assetsConfig.text1') : this.$t('assetsConfig.text2');
    },
    isHk(){
      return this.currencyType == '1' ? this.$t('assetsConfig.text3') : this.$t('assetsConfig.text4');
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
      currencyType: '',
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
    startConfig(){
      var reg = /^\d{6}$/;
      this.error1 = !this.checked ? '请勾选上方承诺' : '';
      this.error2 = !reg.test(this.password) ? '请输入正确的交易密码' : ''
      if(!this.error1 && !this.error2){
        var params = {
          investmentId: this.id,
          dealPwd: this.password,
        };
        updateAccount(params).then(res => {
          Message({
            message: '配置申请已提交',
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
        this.id = data[0].id;
			console.log('assetsTypelist==',this.assetsTypelist)
        this.assetsTypelist.map((val, index) => {
          var type = data.filter(item => item.assetsType == val.dictValue);
          console.log(type);
          if (type.length) {
            var percent = ((type.length / data.length) * 100).toFixed(2);
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

        var i = 0;
        data.map(item => {
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
      });
    }
  },

  mounted(){
	this.getInvestment();  
	  
    getMyAccount().then(res => {
      var { currency, risk } = res.data;
      this.currencyType = currency;
      //this.level = risk;
	  getAccountDetail().then(res=>{
		  this.level = res.data.risk;
		  // this.getGlobalData("assets_type").then(res => {
		  //   this.assetsTypelist = res.data.list;
		  //   this.getGlobalData("investment_risk").then(res => {
				// console.log(this.type)
		  //     var arr = res.data.list.filter(
		  //       item => item.dictValue == this.level
		  //     );
		  //     if(arr.length){
		  //       this.getInvestment(arr[0].dictValue);
		  //     }
			 //  console.log(arr)
		  //   });
		  // });
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
  }
}
</style>

