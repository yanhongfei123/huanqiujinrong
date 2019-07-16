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
            </div>
            <div class="title">开户见证指引</div>
            <el-tabs v-model="activeName"
                     style="width:780px;padding-top: 34px;margin: 0 auto;">
                <el-tab-pane label="亲临见证" name="first">
                    <div class="tab-title">一.亲临见证</div>
                    <div class="tab-title-desc"><span>*</span>亲临弘量研究办公室完成见证，将有专人联系您，在您方便的时间与地点完成见证，需携带身份证明文件及住址证明文件。需携带身份证明文件及住址证明文件。
                    </div>
                    <div class="content-title">状态一：本人身份证明原件暂未通过持牌人见证</div>
                    <div class="content-desc">您可以通过拨打+852
                        21552816预约见证。可预约时间为周一至周五早9点至晚6点。我们的持牌代表将会对您的身份证明文件，地址证明，签名样式进行见证，并要求您在确认文件上签署。
                    </div>
                    <div class="tips-title"><span>*</span>敬请携带</div>
                    <el-row style="padding-bottom: 60px;">
                        <el-col style="width: 380px">
                            <div class="tips-desc">
                                1. 身份证明文件原件<br>
                                (1)如您为香港居民：<br>
                                A、香港永久居民身份证 <br>
                                B、香港居民身份证及其他国家护照 <br>
                                C、香港居民身份证及其他国家身份证<br>
                                (2)如您为中国内地居民：<br>
                                D、港澳通行证（请保留入境标签，如适用）及中国内地第二代身份证<br>
                                (3)如您为其他国家居民：<br>
                                E、护照或/及其他国家身份证
                            </div>
                        </el-col>
                        <el-col style="margin-left: 20px;width: 380px">
                            <div class="tips-desc">
                                2. 住址证明原件住址证明原件（需与开户资料相同）<br>
                                住址证明原件（需与开户资料相同）<br>
                                三个月内有效的本人住址证明，如银行账单、公用事业账单等<br>
                                <p style="margin-top: 34px">电话 +852 2155 2816</p>
                            </div>
                        </el-col>
                    </el-row>
                    <div class="content-title">状态二 本人身份证明原件已通过持牌人见证</div>
                    <div class="content-title-desc"><span>*</span>补充材料 ,请上传以下资料，即可完成见证。</div>
                    <el-form label-position="left" class="tab-form" ref="arriveWitForm" :model="arriveWitForm" :rules="witRules">
                        <el-row>
                            <el-col style="width: 380px">
                                <el-form-item label="3.住址证明原件（需与开户资料相同） 三个月内有效的本人住址证明，如银行账单、公用事业账单等" prop="addressProof">
                                    <el-input v-model="arriveWitForm.addressProof" type="hidden"></el-input>
                                    <el-upload
                                            class="upload"
                                            :action="`${config.baseUrl}/file/upload`"
                                            :data="{ type: 6, imgType: 2 }"
                                            :headers="{accessToken: token}"
                                            :on-success="handleSuccess"
                                            :on-preview="handlePreview"
                                            :on-remove="handleRemove"
                                            :on-change="handleChange"
                                            :file-list="addressFileList1"
                                            :before-upload="beforeUpload"
                                            list-type="picture"
                                    >
                                        <div class="upload-btn">
                                            <div class="add"></div>
                                            <div class="text">{{$t('userCenter.depositNotice.text8')}}</div>
                                        </div>
                                    </el-upload>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col style="width: 380px">
                                <el-form-item label="4.其他文件" prop="otherFile">
                                    <el-upload
                                            class="upload"
                                            :action="`${config.baseUrl}/file/upload`"
                                            :data="{ type: 7, imgType: 2 }"
                                            :headers="{accessToken: token}"
                                            :on-success="handleSuccess"
                                            :on-preview="handlePreview"
                                            :on-remove="handleRemove"
                                            :on-change="handleChange"
                                            :file-list="otherFileList1"
                                            :before-upload="beforeUpload"
                                            list-type="picture"
                                    >
                                        <div class="upload-btn">
                                            <div class="add"></div>
                                            <div class="text">{{$t('userCenter.depositNotice.text8')}}</div>
                                        </div>
                                    </el-upload>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                    <div class="important-tips">
                        重要提示：（产品名称）作为智能投资顾问服务提供商，为帮助客户完成底层资产交易需与第三方证券交易商合作。因此您的开户信息将被发送至第三方开立证券交易账户。（产品名称）的第三方合作券商为盈透证券有限公司（Interactive
                        Brokers Hong Kong Limited)。盈透证券在香港证监会的监管下从事第一类活动-证券交易，中央编号为ADI249，将为（产品名称）的客户进行底层交易及提供交易明细或交易结单。
                    </div>
                    <div @click="arriveComplete" class="btn-item btn">完成</div>
                </el-tab-pane>
                <el-tab-pane label="当面见证" name="second">
                    <div class="tab-title">一.当面临见证</div>
                    <div class="tab-title-desc"><span>*</span>将有专人联系您，在您方便的时间与地点完成见证。需携带身份证明文件及住址证明文件。</div>
                    <div class="content-title">状态一：本人身份证明原件暂未通过持牌人见证</div>
                    <div class="content-desc">您可以通过拨打+852
                        21552816预约见证。可预约时间为周一至周五早9点至晚6点。我们的持牌代表将会对您的身份证明文件，地址证明，签名样式进行见证，并要求您在确认文件上签署。
                    </div>
                    <div class="tips-title"><span>*</span>敬请携带</div>
                    <el-row style="padding-bottom: 60px;">
                        <el-col style="width: 380px">
                            <div class="tips-desc">
                                1. 身份证明文件原件<br>
                                (1)如您为香港居民：<br>
                                A、香港永久居民身份证 <br>
                                B、香港居民身份证及其他国家护照 <br>
                                C、香港居民身份证及其他国家身份证<br>
                                (2)如您为中国内地居民：<br>
                                D、港澳通行证（请保留入境标签，如适用）及中国内地第二代身份证<br>
                                (3)如您为其他国家居民：<br>
                                E、护照或/及其他国家身份证
                            </div>
                        </el-col>
                        <el-col style="margin-left: 20px;width: 380px">
                            <div class="tips-desc">
                                2. 住址证明原件住址证明原件（需与开户资料相同）<br>
                                住址证明原件（需与开户资料相同）<br>
                                三个月内有效的本人住址证明，如银行账单、公用事业账单等<br>
                                <p style="margin-top: 34px">电话 +852 2155 2816</p>
                            </div>
                        </el-col>
                    </el-row>
                    <div class="content-title">状态二 本人身份证明原件已通过持牌人见证</div>
                    <div class="content-title-desc"><span>*</span>补充材料 ,请上传以下资料，即可完成见证。</div>
                    <el-form label-position="left" class="tab-form" ref="meetWitForm" :model="meetWitForm" :rules="witRules">
                        <el-row>
                            <el-col style="width: 380px">
                                <el-form-item label="3.住址证明原件（需与开户资料相同） 三个月内有效的本人住址证明，如银行账单、公用事业账单等" prop="addressProof">
                                    <el-input v-model="meetWitForm.addressProof" type="hidden"></el-input>
                                    <el-upload
                                            class="upload"
                                            :action="`${config.baseUrl}/file/upload`"
                                            :data="{ type: 6, imgType: 1 }"
                                            :headers="{accessToken: token}"
                                            :on-success="handleSuccess"
                                            :on-preview="handlePreview"
                                            :on-remove="handleRemove"
                                            :on-change="handleChange"
                                            :file-list="addressFileList2"
                                            :before-upload="beforeUpload"
                                            list-type="picture">
                                        <div class="upload-btn">
                                            <div class="add"></div>
                                            <div class="text">{{$t('userCenter.depositNotice.text8')}}</div>
                                        </div>
                                    </el-upload>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col style="width: 380px">
                                <el-form-item label="4.其他文件">
                                    <el-upload
                                            class="upload"
                                            :action="`${config.baseUrl}/file/upload`"
                                            :data="{ type: 7, imgType: 1 }"
                                            :headers="{accessToken: token}"
                                            :on-success="handleSuccess"
                                            :on-preview="handlePreview"
                                            :on-remove="handleRemove"
                                            :on-change="handleChange"
                                            :file-list="otherFileList2"
                                            :before-upload="beforeUpload"
                                            list-type="picture">
                                        <div class="upload-btn">
                                            <div class="add"></div>
                                            <div class="text">{{$t('userCenter.depositNotice.text8')}}</div>
                                        </div>
                                    </el-upload>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                    <div class="important-tips">
                        重要提示：（产品名称）作为智能投资顾问服务提供商，为帮助客户完成底层资产交易需与第三方证券交易商合作。因此您的开户信息将被发送至第三方开立证券交易账户。（产品名称）的第三方合作券商为盈透证券有限公司（Interactive
                        Brokers Hong Kong Limited)。盈透证券在香港证监会的监管下从事第一类活动-证券交易，中央编号为ADI249，将为（产品名称）的客户进行底层交易及提供交易明细或交易结单。
                    </div>
                    <div @click="arriveComplete" class="btn-item btn">完成</div>
                </el-tab-pane>
                <el-tab-pane label="自行安排见证" name="third">
                    <div class="tab-title">一.合资格见证人士</div>
                    <div class="tab-title-desc"><span>*</span>请您自行联系专业人士（如公证人，执业律师，注册会计师，或证监会持牌人）对您的有效证件及地址证明的复印件进行见证，并签署确认函。请您将相关资料正本邮寄至我们的办公室。</div>
                    <div class="tips-title"><span>*</span>请您准备以下资料</div>
                    <el-row style="padding-bottom: 40px;">
                        <el-col style="width: 380px">
                            <div class="tips-desc">
                                1. 身份证明文件原件<br>
                                (1)如您为香港居民：<br>
                                A、香港永久居民身份证 <br>
                                B、香港居民身份证及其他国家护照 <br>
                                C、香港居民身份证及其他国家身份证<br>
                                (2)如您为中国内地居民：<br>
                                D、港澳通行证（请保留入境标签，如适用）及中国内地第二代身份证<br>
                                (3)如您为其他国家居民：<br>
                                E、护照或/及其他国家身份证
                            </div>
                        </el-col>
                        <el-col style="margin-left: 20px;width: 380px">
                            <div class="tips-desc">
                                2. 住址证明原件住址证明原件（需与开户资料相同）<br>
                                住址证明原件（需与开户资料相同）<br>
                                三个月内有效的本人住址证明，如银行账单、公用事业账单等<br>
                                <p style="margin-top: 34px">电话 +852 2155 2816</p>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="3">3.见证表格</el-col>
                        <el-col :span="2" style="color:#D51D26;cursor: pointer">点击下载</el-col>
                    </el-row>
                    <el-row class="self-witness-tip">见证人需在见证资料的副本上签名注明见证人信息（姓名、专业资格编号、任职公司名称（如有）、职位名称（如有）及见证日期），并写明“确认此文件为原件的真实正确副本”</el-row>
                    <div class="important-tips">
                        重要提示：（产品名称）作为智能投资顾问服务提供商，为帮助客户完成底层资产交易需与第三方证券交易商合作。因此您的开户信息将被发送至第三方开立证券交易账户。（产品名称）的第三方合作券商为盈透证券有限公司（Interactive
                        Brokers Hong Kong Limited)。盈透证券在香港证监会的监管下从事第一类活动-证券交易，中央编号为ADI249，将为（产品名称）的客户进行底层交易及提供交易明细或交易结单。
                    </div>
                    <div @click="arriveComplete" class="btn-item btn">完成</div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <footerBar></footerBar>
    </div>
</template>

<script>
    import config from '../../utils/config';
    import { mapGetters } from "vuex";
    import {Message} from 'element-ui';
    import openAccountHeader from '@/components/header/openAccountHeader.vue';
    import footerBar from '@/components/footer/footer.vue';
    import openAccountSteps from '@/components/common/openAccountSteps.vue';
    import {parseTime} from '@/utils/index.js';
    import { upload, getUserFile, updateState } from '@/api/openAccount.js'

    export default {
        name: 'witness',
        computed: {
            ...mapGetters(["token"]),
        },
        components: {
            openAccountHeader,
            footerBar,
            openAccountSteps
        },
        data() {
            return {
                config:config,
                imageUrl1: '',
                imageUrl2: '',
                type: this.$route.query.type,
                step: 4,
                labelPosition: 'top',
                activeName: 'first',
                addressFileList1: [],
                addressFileList2: [],
                otherFileList1: [],
                otherFileList2: [],
                arriveWitForm: {},
                meetWitForm: {},
                witRules: {
                    addressProof: [
                        //{ required: true, message: "请上传居住地址证明" }
                    ]
                }
            };
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleSuccess(response, file, fileList) {
                console.log(response, file, fileList);
            },
            handleChange(file, fileList) {
                console.log(file, fileList);
            },
            beforeUpload(file) {
                var isImg = file.type.indexOf('image/') == -1;
                var isLt10M = file.size / 1024 / 1024 > 10;
                if (isImg) {
                    Message({
                        message: '不支持该格式的文件',
                        type: 'warning'
                    });
                    return false;
                }
                if (isLt10M) {
                    Message({
                        message: '您上传的图片超过10M，请重新选择图片',
                        type: 'warning'
                    });
                  return false;
                }
                // const formData = new FormData();
                // formData.append("file", file);
                // formData.append("type", 6);
                // upload(formData).then(res => {

                // });


            },
            arriveComplete(formName) {
                updateState().then(res => {
                    this.$router.push({name: 'accountPreView'})
                })
            },
        },
        mounted() {
             getUserFile().then(res => {
                var data = res.data;
                var host = data.url;
                var nlist = data.list.map(item => {
                    item.url = host + item.url;
                    return item;
                })

                var addressFileList1 = nlist.filter(item => (item.type == '6' && item.imgType == '2'));
                var otherFileList1 = nlist.filter(item => (item.type == '7' && item.imgType == '2'));

                var addressFileList2 = nlist.filter(item => (item.type == '6' && item.imgType == '1'));
                var otherFileList2 = nlist.filter(item => (item.type == '7' && item.imgType == '1'));

                addressFileList1.length && (this.addressFileList1 = addressFileList1);
                otherFileList1.length && (this.otherFileList1 = otherFileList1);

                addressFileList2.length && (this.addressFileList2 = addressFileList2);
                otherFileList2.length && (this.otherFileList2 = otherFileList2);

            });
        }
    };
</script>
<style lang="scss">
  .avatar {
    max-width: 200px;
    min-height: 120px;
    display:block;
  }
    .el-radio-group {
        margin-top: 20px;
    }

    .el-tabs__header {
        padding: 0 120px;
        margin-bottom: 60px;
    }

    .el-tabs__item {
        font-size: 20px;
        font-family: SourceHanSansSC-Regular;
        font-weight: 400;
        color: rgba(68, 72, 87, 1);
        width: 180px;
        line-height: 29px;
        letter-spacing: 1px;
        text-align: center;
        height: 44px;

        &.is-active, &:hover {
            color: #D51D26;
            font-family: SourceHanSansSC-Bold;
            font-weight: bold;
        }
    }

    .el-tabs__active-bar {
        height: 5px !important;
        background-color: #D51D26;
    }

    .el-tabs__nav-wrap::after {
        height: 5px;
        background: #fff;
    }

    .el-tabs__nav {
        width: 100% !important;
        float: none;
    }

    .tab-form{
        .el-form-item--medium .el-form-item__label{
            font-size: 14px !important;
            width:380px;
            font-family: SourceHanSansSC-Regular;
            font-weight:400;
            color: #3C3F4D;
            line-height:32px !important;
        }
        .el-form-item{
            margin-bottom: 40px;
        }
    }
</style>

<style scoped lang="scss">
    .container {
        .content {
            width: 1180px;
            margin: 0 auto;
            padding-top: 40px;
            font-family: SourceHanSansSC-Regular;
            color: #3C3F4D;
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

        .btn-item {
            margin: 32px auto 100px;
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

            &.btn {
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

        .tab-title {
            font-size: 24px;
            font-family: SourceHanSansSC-Medium;
            font-weight: 500;
            color: #3B4859;
            line-height: 24px;
        }

        .tab-title-desc {
            margin: 36px 0;
            color: #444857;
            font-size: 18px;
            font-family: SourceHanSansSC-Regular;
            font-weight: 400;
            line-height: 26px;

            span {
                display: inline-block;
                color: #f50000;
                line-height: 26px;
                height: 26px;
            }
        }

        .content-title {
            font-size: 20px;
            font-family: SourceHanSansSC-Medium;
            font-weight: 500;
            color: rgba(59, 72, 89, 1);
            line-height: 24px;
            span {
                display: inline-block;
                color: #f50000;
                line-height: 26px;
                height: 26px;
            }
        }

        .content-title-desc {
            margin: 20px 0;
            color: #444857;
            font-size: 16px;
            font-weight: 400;
            line-height: 32px;

            span {
                display: inline-block;
                color: #f50000;
                line-height: 32px;
                height: 32px;
            }
        }

        .content-desc {
            margin-top: 20px;
            font-size: 16px;
            font-family: SourceHanSansSC-Regular;
            font-weight: 400;
            color: rgba(60, 63, 77, 0.5);
            line-height: 32px;
        }

        .tips-title {
            margin: 36px 0 20px;
            font-size: 14px;
            font-weight: 400;
            color: #3C3F4D;
            line-height: 32px;

            span {
                color: #f50000;
            }
        }

        .tips-desc {
            font-size: 14px;
            font-weight: 400;
            line-height: 32px;
        }

        .upload-wrap{
            position: relative;
            input{
                position: absolute;
                left: 0;
                top: 0;
                z-index: 1;
                opacity: 0;
                width: 180px;
                height: 120px;
            }
        }

        .upload-btn {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 180px;
            height: 120px;
            border-radius: 8px;
            background: #eeeff6;
            border: 2px solid rgba(238, 239, 246, 1);
            .add {
                width: 32px;
                height: 32px;
                background: url("../../assets/images/icon_upload.png") no-repeat center;
                background-size: contain;
            }
            .text {
                color: #3c3f4d;
                font-size: 14px;
                opacity: 0.5;
                margin-top: 10px;
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

        .self-witness-tip{
            padding: 4px 0 40px;
            width:380px;
            font-size:14px;
            font-weight:400;
            color: #3C3F4D;
            line-height:32px;
        }

    }


</style>
