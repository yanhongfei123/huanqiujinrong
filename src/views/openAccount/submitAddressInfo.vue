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
                <el-form title="个人信息" class="addressInfoForm" :label-position="labelPosition" label-width="80px"
                         :model="addressInfo" ref="addressInfoForm" :rules="addressInfoRules">
                    <div class="info-title title1">一.居民地址</div>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="详细居住地址:" prop="residenceAddress" required>
                                <el-input placeholder="请与身份证明文件上地址保持一致。" maxlength="50" v-model="addressInfo.residenceAddress"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <div class="info-title">二.通讯地址</div>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="通讯地址所在国家/地区:" prop="contactCountry" required>
                                <el-select v-model="addressInfo.contactCountry" placeholder="请选择国家/地区"
                                           style="width: 100%;">
                                    <el-option
                                            v-for="item in country"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item label="详细通讯地址:" prop="contactDetailAddress" required>
                                <el-input placeholder="请填写详细通讯地址请" maxlength="50"
                                          v-model="addressInfo.contactDetailAddress"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <div class="info-title">三.税务信息</div>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="纳税识别号:" prop="taxNo" required>
                                <el-input placeholder="请填写纳税识别号" maxlength="20" v-model="addressInfo.taxNo"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="tip">
                            如您是香港税务居民，税务国家/地区为中国香港，税务编号为您的香港身份证号码。
                        </el-col>
                    </el-row>
                    <div class="info-title">四.雇佣信息</div>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="就业类型:" prop="jobType" required>
                                <el-select v-model="addressInfo.jobType" placeholder="请选择就业类型" style="width: 100%;">
                                    <el-option
                                            v-for="item in jobTypes"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item label="雇佣单位:" prop="company" required>
                                <el-input placeholder="请填写雇佣单位" maxlength="20" v-model="addressInfo.company"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="商业性质:" prop="industry" required>
                                <el-select v-model="addressInfo.industry" placeholder="请选择商业性质" style="width: 100%;">
                                    <el-option
                                            v-for="item in industryList"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item label="职位:" prop="job" required>
                                <el-input placeholder="请填写职位" maxlength="10" v-model="addressInfo.job"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="详细通讯地址:" prop="companyDetailAddress" required>
                                <el-input placeholder="请填写单位详细地址" maxlength="50" v-model="addressInfo.companyDetailAddress"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <div class="btn-wrap">
                    <div @click="saveAddressInfo('addressInfoForm')" class="btn-item btn1">保存</div>
                    <div @click="goSubmitUserInfo" class="btn-item btn2">上一步</div>
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
        country: [
          {
            value: 'chn',
            label: '中国'
          },
          {
            value: 'hk',
            label: '香港'
          },
          {
            value: 'mac',
            label: '澳门'
          },
          {
            value: 'sg',
            label: '新加坡'
          },
        ],
        jobTypes: [
          {
            value: '0',
            label: '金融保险证券从业人员'
          },
          {
            value: '1',
            label: '计算机'
          },
          {
            value: '2',
            label: '残障人士'
          },
          {
            value: '9',
            label: '专业交易人员'
          },
        ],
        industryList: [],
        addressInfoRules: {
          residenceAddress: [
            { required: true, message: "请输入居住地址" },
          ],
          contactCountry: [
            { required: true, message: '请选择通讯地址所在国家/地区',  trigger: 'blur' }
          ],
          contactDetailAddress: [
            { required: true, message: "请输入详细通讯地址" },
          ],
          taxNo: [
            { required: true, message: "请输入纳税识别号" },
          ],
          jobType: [
            { required: true, message: '请选择就业类型',  trigger: 'blur' }
          ],
          industry: [
            { required: true, message: '请选择商业性质',  trigger: 'blur' }
          ],
          company: [
            { required: true, message: "请输入雇佣单位名称" },
          ],
          job: [
            { required: true, message: "请输入职位" },
          ],
          companyDetailAddress: [
            { required: true, message: "请输入单位详细地址" },
          ],

        },
        addressInfo: {

        },
      };
    },
    methods: {
      saveAddressInfo(formName) {
        console.log('保存');
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      goSubmitUserInfo() {
        this.$router.replace({ name: 'submitUserInfo' });
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
                margin-top: 38px;
                margin-bottom: 36px;
                font-size: 24px;
                font-family: SourceHanSansSC-Medium;
                font-weight: 500;
                color: #3B4859;
                line-height: 24px;
                &.title1 {
                    margin-top: 80px;
                }
            }
            .addressInfoForm {
                width: 780px;
                margin: 0 auto;
            }
            .tip {
                width: 380px;
                margin-left: 20px;
                margin-top: 26px;
                padding-left: 20px;
                position: relative;
                &:before {
                    display: block;
                    position: absolute;
                    top: 16px;
                    left: 0;
                    content: '';
                    width: 14px;
                    height: 14px;
                    background: url("~@/assets/images/openAccount/icon_warning@2x.png") no-repeat center center;
                    background-size: contain;
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
