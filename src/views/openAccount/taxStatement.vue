<template>
    <div class="container">
        <header>
            <openAccountHeader></openAccountHeader>
        </header>
        <div class="content">
            <div class="title">{{$t('openAccount.userInfo.text1')}}</div>
            <div class="info-wrapper">
                <div class="tips" v-if="type==1"><label>* </label>{{$t('openAccount.userInfo.text2')}}</div>
                <div class="tips" v-else><label>* </label>{{$t('openAccount.userInfo.text3')}}</div>
                <openAccountSteps :step=step></openAccountSteps>
                <el-form title="合规信息" class="statementInfoForm" :label-position="labelPosition" label-width="80px"
                         :model="statementInfo" ref="statementInfoForm" :rules="statementInfoRules">
                    <div class="info-title title1">
                        {{$t('openAccount.statementInfo.text1')}}<br>
                        <p>{{$t('openAccount.statementInfo.text2')}}</p>
                    </div>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item :label="$t('openAccount.statementInfo.text3')" prop="beneficiary" required>
                                <el-input v-model="statementInfo.beneficiary" :placeholder="$t('openAccount.statementInfo.text4')" :disabled="true"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item  :label="$t('openAccount.statementInfo.text5')" prop="nationality" required>
                                <el-input v-model="statementInfo.nationality" :placeholder="$t('openAccount.statementInfo.text6')" :disabled="true"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item  :label="$t('openAccount.statementInfo.text7')" prop="addr" required>
                                <el-input v-model="statementInfo.addr"
                                          :placeholder="$t('openAccount.statementInfo.text8')"
                                          :disabled="true"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item  :label="$t('openAccount.statementInfo.text9')" prop="birthday" required>
                                <el-date-picker type="date" :placeholder="$t('openAccount.statementInfo.text10')"
                                                v-model="statementInfo.birthday"
                                                value-format="yyyy-MM-dd"
                                                style="width: 100%;" :disabled="true"></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item  :label="$t('openAccount.statementInfo.text11')" prop="USDiscern" required>
                        <el-radio-group  v-model="statementInfo.USDiscern">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                        </el-radio-group>
                        <el-form-item label="US TIN:" prop="TIN" v-if="statementInfo.USDiscern == 1"
                                      style="width: 380px;margin-top: 10px;">
                            <el-input  v-model="statementInfo.TIN"  :placeholder="$t('openAccount.statementInfo.text12')"></el-input>
                        </el-form-item>
                    </el-form-item>
                    <el-form-item  :label="$t('openAccount.statementInfo.text13')" prop="isUsDiscount" required>
                        <el-radio-group v-model="statementInfo.isUsDiscount">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                        </el-radio-group>
                        <p class="desc">{{$t('openAccount.statementInfo.text14')}}</p>
                        <div v-if="statementInfo.isUsDiscount == 1">
                            <p class="text tax-text1">{{$t('openAccount.statementInfo.text15')}}</p>
                            <el-form-item prop="taxIncentivesCountry" style="width: 416px;margin-top: 10px;">
                                <el-select v-model="statementInfo.usCountry" :placeholder="$t('openAccount.statementInfo.text16')"
                                           style="width: 380px;">
                                    <el-option
                                            v-for="item in countryList"
                                            :key="item.dictCode"
                                            :label="item | filterByLanguage('dictLabel')"
                                            :value="item.dictValue">
                                    </el-option>
                                </el-select>
                                <p class="text tax-text2">{{$t('openAccount.statementInfo.text17')}}</p>
                            </el-form-item>
                        </div>
                    </el-form-item>
                    <el-form-item  :label="$t('openAccount.statementInfo.text18')" prop="country" required>
                        <el-select v-model="statementInfo.country"  :placeholder="$t('openAccount.statementInfo.text16')" style="width: 380px;"
                                   disabled>
                            <el-option
                                    v-for="item in countryList"
                                    :key="item.dictCode"
                                    :label="item | filterByLanguage('dictLabel')"
                                    :value="item.dictValue">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item  :label="$t('openAccount.statementInfo.text19')" required>
                        <el-row>
                            <el-col style="width: 380px">
                                <div class="input-title">{{$t('openAccount.statementInfo.text20')}}</div>
                                <el-input v-model="statementInfo.taxCountry" :disabled="true"></el-input>
                            </el-col>
                            <el-col style="width: 380px;margin-left: 20px;">
                                <div class="input-title">{{$t('openAccount.statementInfo.text21')}}</div>
                                <el-input v-model="statementInfo.usTaxNo" :disabled="true"></el-input>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item  :label="$t('openAccount.statementInfo.text22')" required>
                        <div class="tax-statement">
                            <p>{{$t('openAccount.statementInfo.text23')}}</p>
                            <p>{{$t('openAccount.statementInfo.text24')}}</p>
                            <p>{{$t('openAccount.statementInfo.text25')}}</p>
                            <p>{{$t('openAccount.statementInfo.text26')}}</p>
                            <p>{{$t('openAccount.statementInfo.text27')}}</p>
                            <p class="weight">{{$t('openAccount.statementInfo.text28')}}</p>
                            <p class="weight">{{$t('openAccount.statementInfo.text29')}}</p>
                        </div>
                    </el-form-item>
                    <el-form-item  :label="$t('openAccount.statementInfo.text30')" required>
                        <div class="tax-statement">
                            <p :style="{ margin:0 }">{{$t('openAccount.statementInfo.text31')}}</p>
							<p>{{$t('openAccount.statementInfo.text311')}}</p>
                            <p>日期： <span>{{ date | parseTime('{y}-{m}-{d}')}}</span></p>
                            <p>{{$t('openAccount.statementInfo.text32')}}</p>
                        </div>
                    </el-form-item>
                    <el-form-item  :label="$t('openAccount.statementInfo.text33')" prop="autograph">
                        <el-input :placeholder="$t('openAccount.statementInfo.text34')" v-model="statementInfo.autograph"></el-input>
                    </el-form-item>
                    <el-form-item  :label="$t('openAccount.statementInfo.text35')" prop="agreement" required>
                        <el-radio-group v-model="statementInfo.agreement">
                            <el-radio :label="1" style="width: 360px">是</el-radio>
                            <el-radio :label="0" style="width: 360px">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <div class="important-tips">
                        {{$t('openAccount.statementInfo.text36')}}
                    </div>
                </el-form>
                <div class="btn-wrap">
                    <div @click="next(false)" class="btn-item btn1">保存</div>
                    <div @click="prev" class="btn-item btn2">{{$t('openAccount.userInfo.text17')}}</div>
                    <div @click="next(true)" class="btn-item btn3">本人同意</div>
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
  import { parseTime } from '@/utils/index.js';
  import { getUserBase, getUserInfo, updateUserBase } from '@/api/openAccount';

  export default {
    name: 'statementInfo',
    components: {
      openAccountHeader,
      footerBar,
      openAccountSteps
    },
    data() {

        const validateAutograph = (rule, value, callback) => {
            var val = value.split(' ');
            if (value == "") {
                callback(new Error('请输入签名，名与姓之间有一个空格'));
            } else if (val.length == 1) {
                callback(new Error('名与姓之间有一个空格'));
            } else if (val[0] != this.surnameChina || val[1] != this.nameChina) {
                callback(new Error('签名的姓名须与身份证上保持一致'));
            } else {
                callback();
            }
        };

      return {
        date: +new Date(),
        type: this.$route.query.type,
        step: 2,
        labelPosition: 'top',
        countryList: [],
        statementInfoRules: {
          beneficiary: [
            { required: true, message: '请输入收益所有人名称' },
          ],
          nationality: [
            { required: true, message: '请输入国籍' },
          ],
          addr: [
            { required: true, message: '请输入居住地址' },
          ],
          birthday: [
            { required: true, message: '请选择出生日期' },
          ],
          USDiscern: [
            { required: true, message: '请选择' },
          ],
          taxNo: [
            { required: true, message: '请填写纳税识别号' },
          ],
          isUsDiscount: [
            { required: true, message: '请选择' },
          ],
          usCountry: [
            { required: true, message: '请选择优惠国家' },
          ],
          country: [
            { required: true, message: '请选择出生国家/地区' },
          ],
          taxCountry: [
            { required: true, message: '请选择税务居住国家/地区' },
          ],
          usTaxNo: [
            { required: true, message: '请填写美国纳税人识别号码' },
          ],
            autograph: [
                { required: true, trigger: "blur", validator: validateAutograph }
            ],
          agreement: [
            { required: true, message: '请选择' },
          ]
        },
        statementInfo: {
          nationality: '中國香港',
          birthday: '',
          country: '',
          USDiscern: '',
          taxCountry: '中國香港',
          isUsDiscount: '',
          usCountry: '',
          TIN: '',
          autograph: '',
          agreement: 1,
        }
      };
    },
    computed: {
      pickerOptions() {
        return {
          disabledDate(time) {
            return time.getTime() > Date.now();//开始时间不选时，结束时间最大值小于等于当天
          }
        }
      },
    },
    methods: {
      prev() {
        this.$router.replace({ name: 'regulatoryInfo?type=' + this.type });
      },
      next(flag) {
        this.$refs.statementInfoForm.validate((valid) => {
          if (valid) {
            //...请求接口后跳转
            let params = {
              discern: this.statementInfo.USDiscern,
              isUsDiscount: this.statementInfo.isUsDiscount,
              taxTreaty: this.statementInfo.usCountry,
              autograph: this.statementInfo.autograph,
              isElectron: this.statementInfo.agreement,
            };
            if(this.statementInfo.USDiscern==1){
                params.TIN = this.statementInfo.TIN;
            }
            if(this.statementInfo.isUsDiscount==1){
              params.usCountry = this.statementInfo.usCountry;
            }
            updateUserBase(params).then(res => {
              if(!flag){
                this.$message({
                  message: '保存成功',
                  type: 'success'
                });
                return;
              }
              this.$router.replace({ name: 'disClosure' , query: { type: this.type }});
            });
          }
        });
      }
    },
    mounted() {
      this.getGlobalData('country_type').then(res => {
        this.countryList = res.data.list;
        getUserInfo().then(response => {
          if (response.data) {
            let data = response.data;
            this.statementInfo.birthday = data.birthday;
            this.statementInfo.usTaxNo = data.card;
            this.statementInfo.beneficiary = data.surnameChina+data.nameChina;
            this.surnameChina = data.surnameChina;
            this.nameChina = data.nameChina;
            getUserBase().then(data => {
              this.statementInfo.TIN = data.data.taxation;
              this.statementInfo.usCountry = data.data.taxTreaty;
              this.statementInfo.addr = data.data.addr;
              this.statementInfo.country = data.data.country;
              this.statementInfo.isUsDiscount = parseInt(data.data.isUsDiscount);
              this.statementInfo.autograph = data.data.autograph || '';
              this.statementInfo.USDiscern = parseInt(data.data.discern);
              this.statementInfo.agreement = data.data.isElectron;
            });
          }
        });

      });
    }
  };
</script>
<style lang="scss">
    .el-radio-group {
        margin-top: 20px;
    }
	
	.weight{
		font-weight: bold;
	}

</style>

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

        .info-wrapper {
            padding: 20px 116px 100px;

            .tips {
                padding-bottom: 16px;
                font-size: 16px;
                font-family: SourceHanSansSC-Regular;
                font-weight: 400;
                color: #3B4859;
                line-height: 24px;

                label {
                    color: #F50000;
                }
            }

            .info-title {
                margin-top: 60px;
                padding-bottom: 30px;
                font-size: 24px;
                font-family: SourceHanSansSC-Medium;
                font-weight: 500;
                color: #3B4859;
                line-height: 24px;

                &.title1 {
                    margin-top: 80px;
                }

                p {
                    padding-top: 36px;
                    font-size: 16px;
                    font-family: SourceHanSansSC-Regular;
                    font-weight: 400;
                    color: #3C3F4D;
                    line-height: 32px;
                }
            }

            .statementInfoForm {
                width: 780px;
                margin: 0 auto;

                .el-form-item {
                    margin-bottom: 40px !important;
                }

                p.desc {
                    margin-top: 20px;
                    font-size: 14px;
                    font-family: SourceHanSansSC-Regular;
                    font-weight: 400;
                    color: #3C3F4D;
                    line-height: 32px;
                }

                .text {
                    width: 416px;
                    height: 32px;
                    font-size: 16px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(20, 20, 22, 0.8);
                    line-height: 32px;

                    &.tax-text1 {
                        margin: 20px 0 10px;
                    }

                    &.tax-text2 {
                        margin-top: 10px;
                    }
                }

                .tax-statement {
                    margin-top: 20px;
                    font-size: 14px;
                    font-family: SourceHanSansSC-Regular;
                    font-weight: 400;
                    color: #141416;
                    line-height: 20px;

                    p {
                        margin-bottom: 20px;
                    }
                }

                .important-tips {
                    padding: 40px 0 22px;
                    font-size: 16px;
                    font-family: SourceHanSansSC-Medium;
                    font-weight: 500;
                    color: #000;
                    line-height: 32px;
                }
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
