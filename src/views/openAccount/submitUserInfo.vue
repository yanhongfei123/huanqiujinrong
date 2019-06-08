<template>
    <div class="container">
        <header>
            <openAccountHeader></openAccountHeader>
        </header>
        <div class="content">
            <div class="title">网上开户</div>
            <div class="info-wrapper">
                <div class="tips"><label>* </label>您正在申请的是{{type==1?'美国':'香港'}}上市交易的ETF</div>
                <openAccountSteps :step=step></openAccountSteps>
                <div class="info-title">个人信息</div>
                <el-form title="个人信息" class="userInfoForm" :label-position="labelPosition" label-width="80px" :model="userInfo">
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="姓（中文）:" prop="cnLastName" required>
                                <el-input  placeholder="请确保您填写的姓名与身份证件上的信息完全一致" v-model="userInfo.cnLastName"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item label="名（中文）:" prop="cnFirstName" required>
                                <el-input  placeholder="请确保您填写的姓名与身份证件上的信息完全一致" v-model="userInfo.cnFirstName"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="姓（英文/拼音）:" prop="enLastName" required>
                                <el-input placeholder="请确保您填写的姓名与身份证件上的信息完全一致" v-model="userInfo.enLastName"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item label="名（英文/拼音）:" prop="enFirstName" required>
                                <el-input placeholder="请确保您填写的姓名与身份证件上的信息完全一致" v-model="userInfo.enFirstName"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="出生日期:" prop="birthDate" required>
                                <el-date-picker type="date" placeholder="请选择" v-model="userInfo.birthDate" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item label="香港身份证号码:" prop="idNo" required>
                                <el-input placeholder="请确保与您证件上的号码完全一致，包括英文大小写、符号等" v-model="userInfo.idNo"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="性别:" prop="gender" required>
                                <el-select v-model="userInfo.gender" placeholder="请选择" style="width: 100%;">
                                    <el-option
                                            v-for="item in genders"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item label="婚姻状况:" prop="gender" required>
                                <el-select v-model="userInfo.marriage" placeholder="请选择" style="width: 100%;">
                                    <el-option
                                            v-for="item in maritalStatus"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="香港手机号码:" prop="mobile" required>
                                <el-input placeholder="请填写香港手机号" v-model="userInfo.mobile"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item label="电子邮箱:" prop="email" required>
                                <el-input placeholder="请填写电子邮箱地址" v-model="userInfo.email"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="家庭成员数:" prop="familyNumber" required>
                                <el-select v-model="userInfo.familyNumber" placeholder="请选择" style="width: 100%;">
                                    <el-option
                                            v-for="item in familyNumber"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item label="基础货币:" prop="currency" required>
                                <el-select v-model="userInfo.currency" placeholder="请选择" style="width: 100%;">
                                    <el-option
                                            v-for="item in currencyTypes"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="基账户类型:" prop="accountType" required>
                                <el-select v-model="userInfo.accountType" placeholder="请选择" style="width: 100%;">
                                    <el-option
                                            v-for="item in accountTypes"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item label="入金方式:" prop="depositWay" required>
                                <el-select v-model="userInfo.depositWay" placeholder="请选择" style="width: 100%;">
                                    <el-option
                                            v-for="item in depositWays"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>

                </el-form>
                <div class="btn-wrap">
                    <div @click="saveUserInfo" class="btn-item btn1">保存</div>
                    <div @click="chooseMarket" class="btn-item btn2">上一步</div>
                    <div @click="goSubmitAddressInfo" class="btn-item btn3">下一步</div>
                </div>
            </div>

        </div>
        <footerBar></footerBar>
    </div>
</template>

<script>
  import openAccountHeader from '@/components/header/openAccountHeader.vue';
  import footerBar from '@/components/footer/footer.vue';
  import openAccountSteps from '@/components/common/openAccountSteps.vue';



  export default {
    name: 'submitInfoStepOne',
    components: {
      openAccountHeader,
      footerBar,
      openAccountSteps
    },
    data() {
      return {
        type: this.$route.query.type,
        step: 1,
        labelPosition: 'top',
        genders: [
          {
            value: '1',
            label: '男'
          },
          {
            value: '2',
            label: '女'
          }
        ],
        maritalStatus: [
          {
            value: '0',
            label: '未婚'
          },
          {
            value: '1',
            label: '已婚'
          },
          {
            value: '2',
            label: '离异'
          },
          {
            value: '3',
            label: '丧偶'
          },
          {
            value: '4',
            label: '普通法伴侣关系'
          },

        ],
        familyNumber: [
          {
            value: '0',
            label: '0'
          },
          {
            value: '1',
            label: '1'
          },
          {
            value: '2',
            label: '2'
          },
          {
            value: '3',
            label: '3'
          },
          {
            value: '4',
            label: '4'
          },
          {
            value: '5',
            label: '5'
          },
          {
            value: '6',
            label: '6'
          },
          {
            value: '7',
            label: '7'
          },
          {
            value: '8',
            label: '8'
          },
          {
            value: '9',
            label: '9'
          },
          {
            value: '10',
            label: '10及以上'
          },

        ],
        currencyTypes: [
          {
            value: '0',
            label: '港币'
          },
          {
            value: '1',
            label: '美元'
          },
          {
            value: '2',
            label: '人民币'
          },
        ],
        accountTypes: [
          {
            value: '0',
            label: '现金账户'
          },
          {
            value: '1',
            label: '孖展账户'
          }
        ],
        depositWays: [
          {
            value: '0',
            label: '转账入金'
          },
          {
            value: '1',
            label: '现金入金'
          }
        ],
        userInfo: {
          currency: '0'
        },
      };
    },
    methods: {
      saveUserInfo() {
        console.log('保存');
      },
      chooseMarket() {
        this.$router.replace({ name: 'chooseMarket' });
      },
      goSubmitAddressInfo() {
        this.$router.replace({ name: 'submitAddressInfo' });
      }
    },
    mounted() {
    }
  };
</script>

<style scoped lang="scss">

    .container {
        .content {
            width: 1180px;
            margin: 0 auto;
            padding-top: 40px;
        }
        .title {
            height: 58px;
            font-size: 40px;
            font-family: SourceHanSansSC-Medium;
            font-weight: 500;
            color: rgba(60, 63, 77, 1);
            line-height: 58px;
        }
        .info-wrapper{
            padding: 20px 116px 100px;
            .tips{
                padding-bottom: 16px;
                font-size:16px;
                font-family:SourceHanSansSC-Regular;
                font-weight:400;
                color: #3B4859;
                line-height:24px;
                label{
                    color: #F50000;
                }
            }
            .info-title{
                margin-top: 80px;
                margin-bottom: 30px;
                font-size: 24px;
                font-family: SourceHanSansSC-Medium;
                font-weight:500;
                color: #3B4859;
                line-height: 24px;
            }
            .userInfoForm{
                width: 780px;
                margin: 0 auto;
            }
        }

        .btn-wrap {
            padding-top: 42px;
            position: relative;
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
                background-image: url("~@/assets/images/other_btn/btn_yellow160.png");
            }
            .btn2 {
                margin: 0 40px;
                color: #fff;
                background-image: url("~@/assets/images/other_btn/btn_pink160.png");
            }
            .btn3 {
                color: #fff;
                background-image: url("~@/assets/images/other_btn/btn_red160.png");
            }
        }
    }



</style>
