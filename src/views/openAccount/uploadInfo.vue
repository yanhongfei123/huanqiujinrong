<template>
    <div class="container">
        <header>
            <openAccountHeader></openAccountHeader>
        </header>
        <div class="content">
            <div class="title">{{$t('openAccount.uploadInfo.text1')}}</div>
            <div class="info-wrapper">
                <div class="tips"><label>* </label>{{$t('openAccount.uploadInfo.text2')}}{{type==1?'香港':'美國'}}上市交易的ETF</div>
                <openAccountSteps :step=step></openAccountSteps>
                <el-form title="合规信息" class="uploadInfoForm" :label-position="labelPosition" label-width="80px"
                         :model="uploadInfo" ref="uploadInfoForm" :rules="uploadInfoRules">
                    <div class="info-title title1">{{$t('openAccount.uploadInfo.text3')}}</div>
                    <div class="title-desc">{{$t('openAccount.uploadInfo.text4')}}<br>
                        <span>*</span> Whatsapp: +852 5100 6766，<span>*</span> Wechat: {{$t('openAccount.uploadInfo.text5')}}team，<span>*</span>Email:
                        cs@{{$t('openAccount.uploadInfo.text5')}}.com，<span>*</span>{{$t('openAccount.uploadInfo.text6')}}
                    </div>
                    <div class="label">{{$t('openAccount.uploadInfo.text7')}}</div>
					<div class="label-info">{{$t('openAccount.uploadInfo.text8')}}</div>
					<div class="label-info">{{$t('openAccount.uploadInfo.text9')}}</div>
					<div class="label-info">{{$t('openAccount.uploadInfo.text10')}}</div>
					<div class="warn">{{$t('openAccount.uploadInfo.text11')}}</div>
                    <el-row>
                        <el-col style="width: 400px;">
                            <el-form-item :label="$t('openAccount.uploadInfo.text12')" prop="frontIdCard">
                                <div class="upload-wrap">
                                    <input ref="uploadFile1" @change="change($event, 1)" class="file" type="file" name="file">
                                    <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
                                    <div v-else class="upload-btn">
                                        <div class="add"></div>
                                        <div class="text">{{$t('userCenter.depositNotice.text8')}}</div>
                                    </div>
                                </div>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;">
                            <el-form-item :label="$t('openAccount.uploadInfo.text13')" prop="frontIdCard">
                                <div class="upload-wrap">
                                    <input ref="uploadFile2" @change="change($event, 2)" class="file" type="file" name="file">
                                    <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
                                    <div v-else class="upload-btn">
                                        <div class="add"></div>
                                        <div class="text">{{$t('userCenter.depositNotice.text8')}}</div>
                                    </div>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col style="width: 400px;">
                            <el-form-item :label="$t('openAccount.uploadInfo.text14')" prop="frontIdCard">
                                <div class="upload-wrap">
                                    <input ref="uploadFile3" @change="change($event, 3)" class="file" type="file" name="file">
                                    <img v-if="imageUrl3" :src="imageUrl3" class="avatar">
                                    <div v-else class="upload-btn">
                                        <div class="add"></div>
                                        <div class="text">{{$t('userCenter.depositNotice.text8')}}</div>
                                    </div>
                                </div>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;">
                            <el-form-item :label="$t('openAccount.uploadInfo.text15')" prop="frontIdCard">
                                <div class="upload-wrap">
                                    <input ref="uploadFile4" @change="change($event, 4)" class="file" type="file" name="file">
                                    <img v-if="imageUrl4" :src="imageUrl4" class="avatar">
                                    <div v-else class="upload-btn">
                                        <div class="add"></div>
                                        <div class="text">{{$t('userCenter.depositNotice.text8')}}</div>
                                    </div>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col style="width: 430px;">
                            <el-form-item :label="$t('openAccount.uploadInfo.text16')" prop="frontIdCard">
                                <div class="upload-wrap">
                                    <input ref="uploadFile5" @change="change($event, 5)" class="file" type="file" name="file">
                                    <img v-if="imageUrl5" :src="imageUrl5" class="avatar">
                                    <div v-else class="upload-btn">
                                        <div class="add"></div>
                                        <div class="text">{{$t('userCenter.depositNotice.text8')}}</div>
                                    </div>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <div class="important-tips">
                         {{$t('openAccount.uploadInfo.text17')}}
					</div>
                </el-form>
                <div class="btn-wrap">
                    <div @click="escapeStep('uploadInfoForm')" class="btn-item btn1">{{$t('openAccount.uploadInfo.text18')}}</div>
                    <div @click="goDisclosure" class="btn-item btn2">{{$t('openAccount.uploadInfo.text19')}}</div>
                    <div @click="escapeStep('uploadInfoForm')" class="btn-item btn3">提交</div>
                </div>
            </div>

        </div>
        <footerBar></footerBar>
    </div>
</template>

<script>

    import {Message} from 'element-ui';
    import openAccountHeader from '@/components/header/openAccountHeader.vue';
    import footerBar from '@/components/footer/footer.vue';
    import openAccountSteps from '@/components/common/openAccountSteps.vue';
    import {parseTime} from '@/utils/index.js';
    import { upload, getUserFile } from '@/api/openAccount.js'

    export default {
        name: 'uploadInfo',
        components: {
            openAccountHeader,
            footerBar,
            openAccountSteps
        },
        data() {
            return {
                imageUrl1: '',
                imageUrl2: '',
                imageUrl3: '',
                imageUrl4: '',
                imageUrl5: '',
                type: this.$route.query.type,
                step: 3,
                labelPosition: 'top',
                uploadInfoRules: {},
                uploadInfo: {}
            };
        },
        methods: {
            change(e, type) {
                var that = this;
                var file = e.target.files;
                this.uploadImg(file[0], type);
            },
            uploadImg(file, type) {
                var file = this.$refs[`uploadFile${type}`].files[0];
                var isImg = file.type.indexOf('image/') == -1;
                var isLt10M = file.size / 1024 / 1024 > 10;
                if (isImg) {
                    Message({
                        message: '不支持该格式的文件',
                        type: 'warning'
                    });
                    return;
                }
                if (isLt10M) {
                    Message({
                        message: '您上传的图片超过10M，请重新选择图片',
                        type: 'warning'
                    });
                  return
                }
                const formData = new FormData();
                formData.append("file", file);
                formData.append("type", type);
                upload(formData).then(res => {
                    this[`imageUrl${type}`] = res.data.url;
                });
            },
            escapeStep() {
				 this.$router.replace({ name: 'witness' , query: { type: this.type }});
            },
            goDisclosure() {
				this.$router.replace({ name: 'disClosure' , query: { type: this.type }});
            },
        },
        mounted() {
            getUserFile().then(res => {
                var data = res.data;
                var host = data.url;
                var nlist = data.list.filter(item => item.type < 6);
                if(data.list.length && nlist.length){
                    nlist.map(item => {
                        var type = [`imageUrl${item.type}`];
                        this[type] = host + item.url;
                    })
                }
            })
        }
    };
</script>

<style scoped lang="scss">
  .avatar {
    max-width: 200px;
    min-height: 120px;
    display:block;
  }
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
                margin-bottom: 15px;
                font-size: 16px;
                font-family: SourceHanSansSC-Regular;
                font-weight: 400;
                color: rgba(60, 63, 77, 1);
                line-height: 32px;
            }
			.label-info{
				margin-bottom: 5px;
			}
			.warn{
				margin: 40px 0 30px;
				color: #ff0000;
			}
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
