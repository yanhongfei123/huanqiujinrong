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
                <el-form title="合规信息" class="form" :label-position="labelPosition" label-width="80px"
                         :model="disclosureInfo" ref="disclosureInfoForm" :rules="disclosureInfoRules">
                    <div class="info-title title1">一.总协议与披露</div>
                    <p class="title-desc">（产品名称）作为智能投资顾问服务提供商，为帮助客户完成底层资产交易需与第三方证券交易商合作。因此您的开户信息将被发送至第三方开立证券交易账户。（产品名称）的第三方合作券商为盈透证券有限公司（Interactive Brokers Hong Kong Limited)。以下协议虽由（产品名称）展示，但（产品名称）并不作为协议当事人。请客户在谨慎阅读协议条款后确认。</p>
                    <div class="info-title">二.（产品名称）客户协议</div>
                    <p class="title-desc">您正在申请开通（产品名称）智能投顾账户，请您阅读并确认同意下列协议：</p>
                </el-form>
                <div class="btn-wrap">
                    <div @click="saveStatementInfo('statementInfoForm')" class="btn-item btn1">保存</div>
                    <div @click="goSubmitRegulatoryInfo" class="btn-item btn2">上一步</div>
                    <div @click="goDisclosure('statementInfoForm')" class="btn-item btn3">本人同意</div>
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

    export default {
        name: 'disclosureInfo',
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
                disclosureInfoRules: {},
                disclosureInfo: {
                    taxCountry: '中国香港',
                    usTaxNo: '678419198501107657',
                    date: '2019-06-11'
                }
            };
        },
        methods: {
            saveStatementInfo(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //...请求接口后提示
                        this.$message.success('保存成功');
                    }
                });
            },
            goSubmitRegulatoryInfo() {
                this.$router.replace({name: 'regulatoryInfo'});
            },
            goDisclosure(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //...请求接口后跳转
                        this.$router.replace({name: 'disClosure'});
                    } else {
                        //测试
                        this.$router.replace({name: 'disClosure'});
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
                padding-bottom: 20px;
                font-size: 24px;
                font-family: SourceHanSansSC-Medium;
                font-weight: 500;
                color: #3B4859;
                line-height: 24px;
                &.title1 {
                    margin-top: 80px;
                }
            }
            .form {
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
