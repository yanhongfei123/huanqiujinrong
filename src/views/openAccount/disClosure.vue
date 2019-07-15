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
                <div class="info-title title1">一.总协议与披露</div>
                <p class="title-desc">
                    （产品名称）作为智能投资顾问服务提供商，为帮助客户完成底层资产交易需与第三方证券交易商合作。因此您的开户信息将被发送至第三方开立证券交易账户。（产品名称）的第三方合作券商为盈透证券有限公司（Interactive
                    Brokers Hong Kong Limited)。以下协议虽由（产品名称）展示，但（产品名称）并不作为协议当事人。请客户在谨慎阅读协议条款后确认。</p>
                <div class="info-title">二.（产品名称）客户协议</div>
                <p class="title-desc">您正在申请开通（产品名称）智能投顾账户，请您阅读并确认同意下列协议：</p>
                <div class="disclosure-link" @click="goPdf(item.pdfUrl)">客户协议书</div>
                <div class="info-title">三. 盈透证券开户协议</div>
                <p class="title-desc">您正在申请开通盈透证券交易账户，请您阅读并确认同意以下由盈透证券提供的各项协议：</p>
                <ul class="disclosure-wrapper">
                    <li class="disclosure-link" v-for="(item, index) in openProtocols" :key="index" @click="goPdf(item.pdfUrl)" >{{item.text}}</li>
                </ul>
                <div class="info-title">四. 签名确认</div>
                <p class="title-desc">客户在此输入签名即表示确认所填写的内容准确或同意以上所有条款 ,本人了解并同意此电子签名等同于手写签名。</p>
                <el-form title="合规信息" class="form" :label-position="labelPosition" label-width="80px"
                         :model="disclosureInfo" ref="disclosureInfoForm" :rules="disclosureInfoRules">
                    <el-row>
                        <el-col :span="18" style="width:380px">
                            <el-form-item label="签名：" prop="signName" required>
                                <el-input v-model="disclosureInfo.signName" placeholder="请输入签名，名与姓之间有一个空格"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6" style="margin: 44px 0  0 25px"><div class="sign-date">日期： 2019-06-12</div></el-col>
                    </el-row>
                    <div class="important-tips">
                        重要提示：（产品名称）作为智能投资顾问服务提供商，为帮助客户完成底层资产交易需与第三方证券交易商合作。因此您的开户信息将被发送至第三方开立证券交易账户。（产品名称）的第三方合作券商为盈透证券有限公司（Interactive Brokers Hong Kong Limited)。盈透证券在香港证监会的监管下从事第一类活动-证券交易，中央编号为ADI249，将为（产品名称）的客户进行底层交易及提供交易明细或交易结单。
                    </div>

                </el-form>
                <div class="btn-wrap">
                    <div @click="saveInfo('disclosureInfoForm')" class="btn-item btn1">保存</div>
                    <div @click="goPrev" class="btn-item btn2">上一步</div>
                    <div @click="agree('disclosureInfoForm')" class="btn-item btn3">本人同意</div>
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
    import {parseTime} from '@/utils/index.js';
    import Cookies from 'js-cookie';
    import { getUserBase, getUserInfo, updateUserBase } from '@/api/openAccount';
    export default {
        name: 'disclosureInfo',
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
                locale: Cookies.get('language') || 'zh-TW',
                type: this.$route.query.type,
                step: 2,
                labelPosition: 'top',
                disclosureInfoRules: {
                    signName: [
                        { required: true, trigger: "blur", validator: validateAutograph }
                    ]
                },
                disclosureInfo: {
                    signName: '',
                    taxCountry: '中国香港',
                    usTaxNo: '678419198501107657',
                    date: '2019-06-11'
                },
                protocols: {
                    cnProtocols: [
                        {text: '客户证券常设授权', pdfUrl: 'https://www.fadada.com/xxx.pdf'},
                        {text: '清算安排通知与确认', pdfUrl: 'https://www.fadada.com/xxx.pdf'},
                        {text: '客户协议', pdfUrl: 'https://www.fadada.com/xxx.pdf'},
                        {text: '盈透证券集团隐私声明', pdfUrl: 'https://www.fadada.com/xxx.pdf'},
                        {text: '客户资金常设授权', pdfUrl: 'https://www.fadada.com/xxx.pdf'},
                        {text: '香港风险披露', pdfUrl: 'https://www.fadada.com/xxx.pdf'},
                        {text: '有关您IB账户的重要法律条款', pdfUrl: 'https://www.fadada.com/xxx.pdf'},
                        {text: '外汇交易与多币种账户风险披露声明', pdfUrl: 'https://www.fadada.com/xxx.pdf'},
                        {text: '客户顾问协议', pdfUrl: 'https://www.fadada.com/xxx.pdf'},
                        {text: '盈透证券定单流定单传递及付款信息披露', pdfUrl: 'https://www.fadada.com/xxx.pdf'},
                        {text: '有限责任协议', pdfUrl: 'https://www.fadada.com/xxx.pdf'},
                        {text: '市后交易风险', pdfUrl: 'https://www.fadada.com/xxx.pdf'},
                        {text: '账户交易控制及所有权证明', pdfUrl: 'https://www.fadada.com/xxx.pdf'},
                        {text: 'IB根据FINRA规则535披露 - 关于美国上市股票和权证的止损和止损限价单', pdfUrl: 'https://www.fadada.com/xxx.pdf'},

                    ],
                    ftProtocols: [
                        {text: '客戶證券常設授權', pdfUrl: 'https://www.fadada.com/xxx.pdf'},
                        {text: '清算安排通知與確認', pdfUrl: 'https://www.fadada.com/xxx.pdf'},
                    ],
                    enProtocols: [
                        {text: 'Customer securities standing authorization', pdfUrl: 'https://www.fadada.com/xxx.pdf'},
                        {text: 'Liquidation arrangement notice and confirmation', pdfUrl: 'https://www.fadada.com/xxx.pdf'}
                    ]
                }
            };
        },
        computed: {
            openProtocols(){
                if( this.locale == 'zh'){
                    return this.protocols.cnProtocols;
                }else if(this.locale == 'zh-TW'){
                    return this.protocols.ftProtocols;
                }else if(this.locale == 'en'){
                    return this.protocols.enProtocols;
                }
            }
        },
        methods: {

            goPdf(url) {
                location.href = url;
            },
            saveInfo(formName) {

                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var params = {
                            treatyAutograph: this.disclosureInfo.signName
                        }
                        updateUserBase(params).then(res => {
                           this.$message.success('保存成功');
                        });
                    }
                });
            },
            goPrev() {
                this.$router.replace({name: 'taxStatement'});
            },
            agree(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //...请求接口后跳转
                        var params = {
                            treatyAutograph: this.disclosureInfo.signName
                        }
                        updateUserBase(params).then(res => {
                           this.$router.replace({name: 'uploadInfo' , query: { type: this.type }});
                        });
                    }
                });
            }
        },
        mounted() {
            getUserBase().then(data => {
              this.disclosureInfo.signName = data.data.treatyAutograph;
            });

            getUserInfo().then(response => {
                if (response.data) {
                    let data = response.data;
                    this.surnameChina = data.surnameChina;
                    this.nameChina = data.nameChina;
                }
            });
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

        .disclosure-wrapper{
            position: relative;
            overflow: hidden;
            .disclosure-link {
                float: left;
                width: 400px;
                margin-top: 40px;
                color: #BE1A21;
                font-size: 20px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                line-height: 28px;
            }
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

            p.title-desc {
                font-size: 16px;
                font-family: SourceHanSansSC-Regular;
                font-weight: 400;
                color: rgba(60, 63, 77, 1);
                line-height: 32px;
                margin-bottom: 30px;
            }

            .form {
                width: 780px;
                .el-form-item {
                    margin-bottom: 40px !important;
                }
            }
            .important-tips{
                padding: 40px 0 22px;
                font-size:16px;
                font-family: SourceHanSansSC-Medium;
                font-weight:500;
                color: #000;
                line-height:32px;
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
