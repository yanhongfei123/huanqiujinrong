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
                <el-form title="合规信息" class="regulatoryInfoForm" :label-position="labelPosition" label-width="80px"
                         :model="regulatoryInfo" ref="regulatoryInfoForm" :rules="regulatoryInfoRules">
                    <div class="info-title title1">一.合规信息</div>
                    <el-row>
                        <el-form-item
                                label="1.账户持有人或同一居所内居住的任何直系亲属不是注册经纪-自营商；证券或商品经纪公司的雇员、董事或所有人；银行、对冲基金/交易所或其他金融服务公司的雇员"
                                prop="owner" required>
                            <el-radio-group v-model="regulatoryInfo.owner">
                                <el-radio :label="0">是</el-radio>
                                <el-radio :label="1">否</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-row>
                </el-form>
                <div class="btn-wrap">
                    <div @click="saveUserInfo('userInfoForm')" class="btn-item btn1">保存</div>
                    <div @click="chooseMarket" class="btn-item btn2">上一步</div>
                    <div @click="goSubmitAddressInfo('userInfoForm')" class="btn-item btn3">下一步</div>
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
    name: 'regulatoryInfo',
    components: {
      openAccountHeader,
      footerBar,
      openAccountSteps
    },
    data() {
      return {
        type: this.$route.query.type,
        step: 2,
        labelPosition: 'top',
        regulatoryInfoRules: {
          owner: [
            { required: true, message: "请选择" },
          ]
        },
        regulatoryInfo: {}
      };
    },
    methods: {
      saveUserInfo(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //...请求接口后提示
            this.$message.success('保存成功');
          }
        });
      },
      chooseMarket() {
        this.$router.replace({ name: 'chooseMarket' });
      },
      goSubmitAddressInfo(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //...请求接口后跳转
            this.$router.replace({ name: 'addressInfo' });
          } else {
            //测试
            this.$router.replace({ name: 'addressInfo' });
          }
        });
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
                margin-top: 80px;
                margin-bottom: 30px;
                font-size: 24px;
                font-family: SourceHanSansSC-Medium;
                font-weight: 500;
                color: #3B4859;
                line-height: 24px;
            }
            .regulatoryInfoForm {
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
