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
                <el-form title="合规信息" class="uploadInfoForm" :label-position="labelPosition" label-width="80px"
                         :model="uploadInfo" ref="uploadInfoForm" :rules="uploadInfoRules">
                    <div class="info-title title1">一. 上传证件</div>
                    <div class="title-desc">如果暂时不想通过以上方式上传您的相关证件，您可以先选择“跳过”完成网上开户流程，然后通过以下方式提交证件资料：<br>
                        <span>*</span> Whatsapp: +852 5100 6766，<span>*</span> Wechat: （产品名称）team，<span>*</span>Email:
                        cs@（产品名称）.com，<span>*</span>现场将必须提交的文件提交到我们办公室
                    </div>
                    <div class="label">您必须提交的文件（支持.jpg, .jpeg,
                        .png格式，单个文件小于10M）1.香港居民身份证影印本（包括正反面）2.护照影印本（包括照片页和署名页）3.居住地址证明影印本（最近三个月内银行信件或水电煤单）
                    </div>
                    <el-row>
                        <el-col style="width: 400px;">
                            <el-form-item label="1.香港居民身份证正面照片:" prop="frontIdCard">
                                <el-upload
                                        class="upload"
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        :on-success="handleSuccess"
                                        :on-preview="handlePreview"
                                        :on-remove="handleRemove"
                                        :on-change="handleChange"
                                        :file-list="fileList"
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
                        <el-col style="width: 380px;">
                            <el-form-item label="1.香港居民身份证反面照片:" prop="frontIdCard">
                                <el-upload
                                        class="upload"
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        :on-success="handleSuccess"
                                        :on-preview="handlePreview"
                                        :on-remove="handleRemove"
                                        :on-change="handleChange"
                                        :file-list="fileList"
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
                        <el-col style="width: 400px;">
                            <el-form-item label="3.请补充本人护照照片页/其他国家身份证正面照片:" prop="frontIdCard">
                                <el-upload
                                        class="upload"
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        :on-success="handleSuccess"
                                        :on-preview="handlePreview"
                                        :on-remove="handleRemove"
                                        :on-change="handleChange"
                                        :file-list="fileList"
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
                        <el-col style="width: 380px;">
                            <el-form-item label="4.请补充本人护照照片页/其他国家身份证反面照片 :" prop="frontIdCard">
                                <el-upload
                                        class="upload"
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        :on-success="handleSuccess"
                                        :on-preview="handlePreview"
                                        :on-remove="handleRemove"
                                        :on-change="handleChange"
                                        :file-list="fileList"
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
                        <el-col style="width: 430px;">
                            <el-form-item label="3.5.居住地址证明照片（例：三个月内同名银行信件或水电煤单）:" prop="frontIdCard">
                                <el-upload
                                        class="upload"
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        :on-success="handleSuccess"
                                        :on-preview="handlePreview"
                                        :on-remove="handleRemove"
                                        :on-change="handleChange"
                                        :file-list="fileList"
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

                    <div class="important-tips">
                        重要提示：（产品名称）作为智能投资顾问服务提供商，为帮助客户完成底层资产交易需与第三方证券交易商合作。因此您的开户信息将被发送至第三方开立证券交易账户。（产品名称）的第三方合作券商为盈透证券有限公司（Interactive
                        Brokers Hong Kong Limited)。盈透证券在香港证监会的监管下从事第一类活动-证券交易，中央编号为ADI249，将为（产品名称）的客户进行底层交易及提供交易明细或交易结单。
                    </div>
                </el-form>
                <div class="btn-wrap">
                    <div @click="escapeStep('uploadInfoForm')" class="btn-item btn1">跳过</div>
                    <div @click="goDisclosure" class="btn-item btn2">上一步</div>
                    <div @click="agree('uploadInfoForm')" class="btn-item btn3">本人同意</div>
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
    import ElUploadDrag from "element-ui/packages/upload/src/upload-dragger";

    export default {
        name: 'uploadInfo',
        components: {
            ElUploadDrag,
            openAccountHeader,
            footerBar,
            openAccountSteps
        },
        data() {
            return {
                type: this.$route.query.type,
                step: 2,
                labelPosition: 'top',
                fileList: [],
                uploadInfoRules: {},
                uploadInfo: {}
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
                console.log(file);
                console.log(file.size / (1024 * 1024));
                if (file.size / (1024 * 1024) > 1) {
                    this.$alert("文件不能超过10M", "提示", {
                        confirmButtonText: "确定"
                    });
                    return false;
                }
            },
            escapeStep() {
                this.$router.replace({name: 'witness'});
            },
            goDisclosure() {
                this.$router.replace({name: 'disClosure'});
            },
            agree(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //...请求接口后跳转
                        this.$router.replace({name: 'witness'});
                    } else {
                        //测试
                        this.$router.replace({name: 'witness'});
                    }
                });
            }
        },
        mounted() {
        }
    };
</script>

<style scoped lang="scss">
    .el-form-item {
        margin-bottom: 40px !important;
    }

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
            }

            .title-desc {
                margin-top: 20px;
                margin-bottom: 30px;
                font-size: 16px;
                font-family: SourceHanSansSC-Regular;
                font-weight: 400;
                color: rgba(60, 63, 77, 0.5);
                line-height: 32px;
                span {
                    color: #F50000;
                }
            }

            .label {
                margin-bottom: 30px;
                font-size: 16px;
                font-family: SourceHanSansSC-Regular;
                font-weight: 400;
                color: rgba(60, 63, 77, 1);
                line-height: 32px;
            }
        }

        .upload-btn {
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
