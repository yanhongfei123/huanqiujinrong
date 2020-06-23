<template>
    <div class="account-preview">
        <header>
            <userCenterHeader @getUserInfo="setUserInfo" path="/investCombination/accountDetail"></userCenterHeader>
        </header>
        <div @click="hideMenu($event)" class="content">
            <div class="com-width">
                <div class="title">{{$t('userCenter.text1')}}</div>
				<!-- 已经进行了资产配置就显示个人中心主页，否则显示当前进度条状态 -->
				
				<div v-if="false">
				  <div class="progress-ctn">
				    <div
				      :class="[index <= state ? 'active' : '']"
				      class="progress"
				      v-for="(val, key, index) in openStatusList"
				      :key="key"
				    >
				      <div class="num">{{index + 1}}</div>
				      <p>{{val.progressTitle}}</p>
				    </div>
				  </div>
				
				  <div
				    v-if="(openStatus==0 || openStatus==3 || openStatus==4 || openStatus==5)"
				    class="btn-openAccount active"
				    @click="goPage(openStatusList[openStatus].path)"
				  >{{ openStatusList[openStatus].btnText }}</div>
				
				  <!-- 1开户审核中 -3 入金审核中  -5 资产配置审核中 -->
				  <div v-if="(openStatus == 1 || openStatus == -3 || openStatus == -5)" class="review-ctn">
				    <div class="img-review"></div>
				    <div class="review-info">
				      <div class="review-result">{{checkStatusObj[openStatus].text}}</div>
				      <div class="btn-openAccount disabled">{{checkStatusObj[openStatus].btnText}}</div>
				      <div v-if="openStatus == 1" class="review-tip">
				        {{$t('userCenter.text3')}}
				        <router-link to="/openAccount/witness">{{$t('userCenter.text4')}}</router-link>
				      </div>
				    </div>
				  </div>
				  <div class="tips-ctn">
				    <div class="tips-title">{{$t('userCenter.text5')}}</div>
				    <p class="tips-desc">
				      {{$t('userCenter.text6')}}
				      <br>
				      {{$t('userCenter.text7')}}
				      <br>
				      {{$t('userCenter.text8')}}
				    </p>
				  </div>
				</div>
                <div>
					<div class="main">
					    <div class="wrap1">
					        <div class="item">
					            <div class="label">{{$t('investCombination.labelAmount')}}</div>
					            <div class="amount">0</div>
					        </div>
					        <div class="item">
					            <div class="label">
					                <span>
					                    {{$t('investCombination.labelIncome')}}
					                    <tips top="0" right="-20px">{{$t('investCombination.tipIncome')}}</tips>
					                </span>
					            </div>
					            <div class="amount">0</div>
					        </div>
					        <div class="item">
					            <div class="label">
					                <span>收益率（%）
					                    <tips top="0" right="-20px">{{$t('investCombination.tipIncomeRate')}}</tips>
					                </span>
					            </div>
					            <div class="amount">0</div>
					        </div>
					    </div>
					    <div class="tab-wrap">
					        <div @click="changeTab('/investCombination/accountDetail')"
					             class="tab-item"
					             :class="[$route.path==='/investCombination/accountDetail'?'active':'']">{{$t('investCombination.tabDetail')}}</div>
					        <div @click="changeTab('/investCombination/history')"
					             class="tab-item"
					             :class="[$route.path==='/investCombination/history'?'active':'']">{{$t('investCombination.tabHistory')}}</div>
					        <div @click="changeTab('/investCombination/combinedAnalysis')"
					             class="tab-item"
					             :class="[$route.path==='/investCombination/combinedAnalysis'?'active':'']">{{$t('investCombination.tabAnalysis')}}</div>
					        <div @click="changeTab('/investCombination/investRecords')"
					             class="tab-item"
					             :class="[$route.path==='/investCombination/investRecords'?'active':'']">{{$t('investCombination.tabRecord')}}</div>
					    </div>
					    <router-view></router-view>
					</div>
				</div>
            </div>
        </div>
        <footerBar></footerBar>
    </div>
</template>
<script>
    import Tips from "@/components/tips.vue";
    import userCenterHeader from "@/components/header/userCenterHeader.vue";
    import footerBar from "@/components/footer/footer.vue";
    import { getUserInfo } from '@/api';
    export default {
        name: "accountPreview",
        components: {
            Tips,
            userCenterHeader,
            footerBar
        },
		computed: {
		  state() {
		    if (this.openStatus == 0 || this.openStatus == 1) {
		      return 0;
		    }
		    if (
		      this.openStatus == 2 ||
		      this.openStatus == 3 ||
		      this.openStatus == -3
		    ) {
		      return 1;
		    }
		    if (this.openStatus == 4) {
		      return 2;
		    }
		    if (this.openStatus == 5 || this.openStatus == -5) {
		      return 3;
		    }
		  },
		  openStatusList() {
		    return {
		      "0": {
		        progressTitle: this.$t("userCenter.openStatusList[0].progressTitle"),
		        btnText: this.$t("userCenter.openStatusList[0].btnText"),
		        path: "/openAccount"
		      },
		      "3": {
		        progressTitle: this.$t("userCenter.openStatusList[1].progressTitle"),
		        btnText: this.$t("userCenter.openStatusList[1].btnText"),
		        path: "/userCenter/guide"
		      },
		      "4": {
		        progressTitle: this.$t("userCenter.openStatusList[2].progressTitle"),
		        btnText: this.$t("userCenter.openStatusList[2].btnText"),
		        path: "/riskTest"
		      },
		      "5": {
		        progressTitle: this.$t("userCenter.openStatusList[3].progressTitle"),
		        btnText: this.$t("userCenter.openStatusList[3].btnText"),
		        path: "/setTransPas"
		      }
		    };
		  },
		  checkStatusObj() {
		    return {
		      "1": {
		        text: this.$t("userCenter.checkStatusObj.0.text"),
		        btnText: this.$t("userCenter.checkStatusObj.0.btnText")
		      },
		      "-3": {
		        text: this.$t("userCenter.checkStatusObj.1.text"),
		        btnText: this.$t("userCenter.checkStatusObj.1.btnText")
		      },
		      "-5": {
		        text: this.$t("userCenter.checkStatusObj.2.text"),
		        btnText: this.$t("userCenter.checkStatusObj.2.btnText")
		      }
		    }
		  }
		},
        data() {
            return {
				openStatus: 0,
            };
        },
        created() {
            getUserInfo().then((res)=>{
                if (res.data.state != 6) {
                   // this.$router.push('/accountPreView')
                }
            })
        },
        methods: {
			goPage(path) {
			  this.$router.push(path);
			},
			setUserInfo(data) {
			  //this.openStatus = data.state;
			},
            changeTab(path) {
                this.$router.push(path)
            },
            hideMenu(flag) {
                this.$store.dispatch("showMenu", false);
            }
        }
    };
</script>

<style lang="scss" scoped>
    .account-preview {
        background: #f9f9f9;

        .content {
            padding-top: 40px;
        }

        .main {
            width: 1020px;
            margin: 55px auto 100px;
        }

        .title {
            font-size: 40px;
            font-family: SourceHanSansSC-Medium;
            font-weight: 500;
            color: rgba(60, 63, 77, 1);
            line-height: 58px;
        }
		
		// 进度条
		.progress-ctn {
		  padding-top: 75px;
		  position: relative;
		  overflow: hidden;
		  width: 1000px;
		  margin: 0 auto;
		  text-align: center;
		  .progress {
		    float: left;
		    width: 250px;
		    border-top: 1px solid #f0f3f7;
		    .num {
		      width: 40px;
		      height: 40px;
		      margin: -20px auto 0;
		      line-height: 40px;
		      border-radius: 50%;
		      background: rgba(240, 243, 247, 1);
		      box-shadow: 0 5px 20px 0 rgba(240, 243, 247, 1);
		    }
		    p {
		      margin-top: 4px;
		      font-size: 16px;
		      font-family: PingFangSC-Regular;
		      font-weight: 400;
		      color: #8392a7;
		      line-height: 24px;
		    }
		    &.active {
		      border-top: 1px solid #d51d26;
		      .num {
		        color: #d51d26;
		        border: 1px solid #d51d26;
		        background-color: #fff;
		      }
		      p {
		        color: #d51d26;
		      }
		    }
		  }
		}
		.btn-openAccount {
		  position: relative;
		  width: 400px;
		  height: 80px;
		  text-align: center;
		  line-height: 80px;
		  font-size: 28px;
		  font-weight: 500;
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
		.review-ctn {
		  margin-top: 100px;
		  position: relative;
		  overflow: hidden;
		  .img-review {
		    float: left;
		    width: 550px;
		    height: 396px;
		    background: url("~@/assets/images/userCenter/bg_toexamine@2x.png")
		      no-repeat center center;
		    @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
		      background-image: url("~@/assets/images/userCenter/bg_toexamine@3x.png");
		    }
		    background-size: contain;
		  }
		  .review-info {
		    float: left;
		    margin: 20px 0 0 130px;
		    width: 500px;
		    .review-result {
		      margin-bottom: 80px;
		      font-size: 48px;
		      font-family: SourceHanSansSC-Medium;
		      font-weight: 500;
		      color: rgba(20, 20, 22, 1);
		      line-height: 70px;
		    }
		    .review-tip {
		      width: 400px;
		      margin-top: 20px;
		      font-size: 16px;
		      font-family: SourceHanSansSC-Medium;
		      font-weight: 500;
		      color: rgba(213, 29, 38, 1);
		      line-height: 24px;
		      a {
		        text-decoration: underline;
		        &:hover,
		        &:active,
		        &:link,
		        &:visited {
		          color: #d51d26;
		        }
		      }
		    }
		  }
		}
		.tips-ctn {
		  margin-top: 100px;
		  .tips-title {
		    height: 33px;
		    font-size: 24px;
		    font-family: PingFangSC-Medium;
		    font-weight: 500;
		    color: rgba(20, 20, 22, 1);
		    line-height: 33px;
		  }
		  .tips-desc {
		    margin: 40px 0 100px;
		    height: 100px;
		    font-size: 14px;
		    font-family: PingFangSC-Regular;
		    font-weight: 400;
		    color: rgba(20, 20, 22, 1);
		    line-height: 33px;
		  }
		}
		// 进度条

        .tab-wrap {
            margin: 80px auto 50px;
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

        .rw-label {
            span {
                position: relative;
            }
        }

        .wrap1 {
            display: flex;
            justify-content: space-between;

            .item {
                width: 312px;
                height: 106px;
                padding-top: 22px;
                background: #fff;
                text-align: center;
            }

            .label {
                font-size: 16px;
                color: rgba(20, 20, 22, 0.5);
                line-height: 22px;

                span {
                    position: relative;
                }
            }

            .amount {
                font-size: 24px;
                font-weight: bold;
                color: rgba(20, 20, 22, 1);
                line-height: 32px;
                margin-top: 6px;
            }
        }
    }
</style>
