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
                <el-form title="个人信息" class="addressInfoForm" :label-position="labelPosition" label-width="80px"
                         :model="addressInfo" ref="addressInfoForm" :rules="addressInfoRules">
                    <div class="info-title title1">{{$t('openAccount.addressInfo.text1')}}</div>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item :label="$t('openAccount.userInfo.text2')" prop="addr" required>
                                <el-input :placeholder="$t('openAccount.addressInfo.text23')" maxlength="50"
                                          v-model="addressInfo.addr"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <div class="info-title">{{$t('openAccount.addressInfo.text3')}}</div>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item :label="$t('openAccount.addressInfo.text4')" prop="country" required>
                                <el-select v-model="addressInfo.country"
                                           :placeholder="$t('openAccount.addressInfo.text5')"
                                           style="width: 100%;">
                                    <el-option
                                            v-for="item in countryList"
                                            :key="item.dictCode"
                                            :label="item | filterByLanguage('dictLabel')"
                                            :value="item.dictValue">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item :label="$t('openAccount.addressInfo.text6')" prop="address" required>
                                <el-input :placeholder="$t('openAccount.addressInfo.text7')" maxlength="50"
                                          v-model="addressInfo.address"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <div class="info-title">三.{{$t('openAccount.userInfo.text8')}}</div>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item :label="$t('openAccount.addressInfo.text9')" prop="taxation" required>
                                <el-input :placeholder="$t('openAccount.addressInfo.text10')" maxlength="20"
                                          v-model="addressInfo.taxation"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="tip">{{$t('openAccount.addressInfo.text11')}}</el-col>
                    </el-row>
                    <div class="info-title">{{$t('openAccount.addressInfo.text12')}}</div>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item :label="$t('openAccount.addressInfo.text13')" prop="employmentType" required>
                                <el-select v-model="addressInfo.employmentType"
                                           :placeholder="$t('openAccount.addressInfo.text14')" style="width: 100%;">
                                    <el-option
                                            v-for="item in employmentTypes"
                                            :key="item.dictCode"
                                            :label="item | filterByLanguage('dictLabel')"
                                            :value="item.dictValue">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item :label="$t('openAccount.addressInfo.text15')" prop="employmentCompay"
                                          required>
                                <el-input :placeholder="$t('openAccount.addressInfo.text16')" maxlength="20"
                                          v-model="addressInfo.employmentCompay"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item :label="$t('openAccount.addressInfo.text17')" prop="businessType" required>
                                <el-select v-model="addressInfo.businessType"
                                           :placeholder="$t('openAccount.addressInfo.text18')" style="width: 100%;">
                                    <el-option
                                            v-for="item in businessTypes"
                                            :key="item.dictCode"
                                            :label="item | filterByLanguage('dictLabel')"
                                            :value="item.dictValue">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item :label="$t('openAccount.addressInfo.text19')" prop="post" required>
                                <el-input :placeholder="$t('openAccount.addressInfo.text20')" maxlength="10"
                                          v-model="addressInfo.post"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item :label="$t('openAccount.addressInfo.text21')" prop="businessAddr" required>
                                <el-input :placeholder="$t('openAccount.addressInfo.text22')" maxlength="50"
                                          v-model="addressInfo.businessAddr"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <div class="btn-wrap">
                    <div @click="next(false)" class="btn-item btn1">保存</div>
                    <div @click="prev" class="btn-item btn2">{{$t('openAccount.userInfo.text17')}}</div>
                    <div @click="next(true)" class="btn-item btn3">{{$t('openAccount.userInfo.text18')}}</div>
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
  import { getUserInfo } from '@/api/index';
  import { getUserBase, saveUserBase } from '@/api/openAccount';

  export default {
    name: 'addressInfo',
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
        countryList: [],
        employmentTypes: [],
        businessTypes: [],
        addressInfoRules: {
          addr: [
            { required: true, message: '请输入居住地址' },
          ],
          country: [
            { required: true, message: '请选择通讯地址所在国家/地区', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请输入详细通讯地址' },
          ],
          taxation: [
            { required: true, message: '请输入纳税识别号' },
          ],
          employmentType: [
            { required: true, message: '请选择就业类型', trigger: 'change' }
          ],
          businessType: [
            { required: true, message: '请选择商业性质', trigger: 'change' }
          ],
          employmentCompay: [
            { required: true, message: '请输入雇佣单位名称' },
          ],
          post: [
            { required: true, message: '请输入职位' },
          ],
          businessAddr: [
            { required: true, message: '请输入单位详细地址' },
          ],
        },
        addressInfo: {},
      };
    },
    methods: {
      prev() {
		window.location.href = window.location.href.replace('addressInfo', 'userInfo');
      },
      next(flag) {
        this.$refs.addressInfoForm.validate((valid) => {
          if (valid) {
            //...请求接口后跳转
            saveUserBase(this.addressInfo).then(() => {
              if (!flag) {
                this.$message({
                  message: '保存成功',
                  type: 'success'
                });
                return;
              }
              this.$router.replace({ name: 'regulatoryInfo', query: { type: this.type } });
            });
          }
        });
      }
    },
    mounted() {
      let allDictData = ['country_type', 'sys_employment', 'nature_business'];
      let allPromise = allDictData.map(item => this.getGlobalData(item));
      Promise.all(allPromise).then(res => {
        console.log(res);
        this.countryList = res[0].data.list;
        this.employmentTypes = res[1].data.list;
        this.businessTypes = res[2].data.list;
      }).then(() => {
        getUserBase().then(res => {
          console.log(res);
          if (res.data) {
            this.addressInfo = res.data;
          }
        });
      });
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
