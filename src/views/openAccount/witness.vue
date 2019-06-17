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
                <div class="success-wrapper">
                    <div class="img-success"></div>
                    <div class="text-wrapper">
                        <div class="success-title">恭喜您，开户申请已成功提交</div>
                        <div class="success-detail">为符合香港证监会的要求，您将被要求完成线下见证并签署确认函。此步骤是为了证明您的身份证明文件真实有效，并确认收到您的身份信息。
                        </div>
                    </div>
                </div>
                <div class="btn-wrap">
                    <div @click="escapeStep('InfoForm')" class="btn-item btn">完成</div>
                </div>
            </div>
            <div class="title">开户见证指引</div>

        </div>
        <footerBar></footerBar>
    </div>
</template>

<script>

  import openAccountHeader from '@/components/header/openAccountHeader.vue';
  import footerBar from '@/components/footer/footer.vue';
  import openAccountSteps from '@/components/common/openAccountSteps.vue';
  import { parseTime } from '@/utils/index.js';

  export default {
    name: 'uploadInfo',
    components: {
      openAccountHeader,
      footerBar,
      openAccountSteps
    },
    data() {
      return {
        type: this.$route.query.type,
        step: 4,
        labelPosition: 'top',
        uploadInfoRules: {},
        uploadInfo: {}
      };
    },
    methods: {
      escapeStep() {
        this.$router.replace({ name: 'regulatoryInfo' });
      },
      goDisclosure() {
        this.$router.replace({ name: 'disclosure' });
      },
      agree(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //...请求接口后跳转
            this.$router.replace({ name: 'disclosure' });
          } else {
            //测试
            this.$router.replace({ name: 'disclosure' });
          }
        });
      }
    },
    mounted() {
    }
  };
</script>
<style lang="scss">
    .el-radio-group {
        margin-top: 20px;
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
            padding: 20px 116px 40px;
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
            }
            .title-desc {
                margin-top: 20px;
                font-size: 16px;
                font-family: SourceHanSansSC-Regular;
                font-weight: 400;
                color: rgba(60, 63, 77, 0.5);
                line-height: 32px;
            }
            .label {
                font-size: 16px;
                font-family: SourceHanSansSC-Regular;
                font-weight: 400;
                color: rgba(60, 63, 77, 1);
                line-height: 32px;
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
                color: #fff;

                &:hover {
                    opacity: 1;
                }
            }

            .btn {
                background-image: url("~@/assets/images/other_btn/btn_red160.png");
            }
        }

        .success-wrapper {
            margin-top: 48px;
            position: relative;
            overflow: hidden;
            .img-success {
                float: left;
                width: 436px;
                height: 318px;
                background: url("~@/assets/images/personal/bg_succeed.png") no-repeat center center;
                background-size: contain;
            }
            .text-wrapper {
                float: right;
                text-align: right;
                width: 477px;
                margin-top: 46px;
                .success-title {
                    font-size: 36px;
                    font-family: SourceHanSansSC-Bold;
                    font-weight: bold;
                    color: #141416;
                    line-height: 52px;
                }
                .success-detail {
                    margin-top: 20px;
                    font-size: 20px;
                    font-family: SourceHanSansSC-Regular;
                    font-weight: 400;
                    color: #444857;
                    line-height: 29px;
                }
            }
        }
    }


</style>
