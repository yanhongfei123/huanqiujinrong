<template>
    <div class="page-resetPwd">
        <header>
            <regHeader></regHeader>
        </header>
        <div class="content">
            <div class="title">忘记密码</div>
            <div class="tab-cont">
                <div class="tab-wrap">
<!--                    <div
                        @click="changeType('mobile')"
                        class="item"
                        :class="[type=='mobile'?'active':'']"
                    >手机号码</div> -->
                    <div
                        @click="changeType('email')"
                        class="item"
                        :class="[type=='email'?'active':'']"
                    >邮箱</div>
                </div>
            </div>
            <el-form class="form" :model="resetForm" :rules="rules" ref="resetForm">

                <el-form-item v-show="type === 'email'" prop="email">
                  <el-input
                    v-model="resetForm.email"
                    type="text"
                    :placeholder="$t('setTransPas.text8')"
                  ></el-input>
                </el-form-item>

                <!-- 手机号 -->
                <el-form-item v-show="type === 'mobile'" prop="account" class="form-item">
                  <el-select v-model="optValue" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                  <el-input
                    v-model="resetForm.account"
                    type="text"
                    maxlength="11"
                    :placeholder="$t('setTransPas.text5')"
                  ></el-input>
                </el-form-item>

                <!-- <el-form-item prop="account">
                    <el-input v-model="resetForm.account" type="text" :placeholder="$t('signin.account')"></el-input>
                </el-form-item> -->


                <el-form-item prop="smsCode">
                    <el-row>
                        <el-col :span="18">
                            <el-input v-model="resetForm.smsCode" type="tel" maxlength="6"
                                      :placeholder="$t('signin.smsCode')"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <el-button v-if="disabledBtn" @click="sendSmsCode" type="text"
                                       class="disabled btn-captcha">{{btnText}}
                            </el-button>
                            <el-button v-else @click="sendSmsCode" type="text"
                                       class="btn-captcha">{{$t('signin.getSmsCode')}}
                            </el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="resetForm.password" type="password"
                              :placeholder="$t('signin.password')"></el-input>
                </el-form-item>

                <el-button
                    @click="findPwd"
                    type="text"
                    :disabled="!disabled"
                    class="btn btn-reset"
                >{{$t('signin.confirm')}}</el-button>

            </el-form>
        </div>
        <footerBar></footerBar>
    </div>
</template>

<script>
    import {Message} from 'element-ui';
    import regHeader from '@/components/header/header.vue';
    import footerBar from '@/components/footer/footer.vue';
    import leftImage from '@/components/common/leftImage.vue';
    import {findPassword, sendCode} from '@/api';
    import { mapGetters } from 'vuex';

    export default {
        name: 'findPwd',
        components: {
            regHeader,
            footerBar,
            leftImage
        },
        data() {

            const validateEmail = (rule, value, callback) => {
                let mailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
                if (value == "") {
                    callback(new Error(this.$t("setTransPas.error.text7")));
                } else if (!mailReg.test(value)) {
                    callback(new Error(this.$t("setTransPas.error.text2")));
                } else {
                    callback();
                }
            };

            const validateAccount = (rule, value, callback) => {
                let mobileReg = /^(5|6|8|9)\d{7}$/; //香港手机号码8位数，5|6|8|9开头+7位任意数
                let mobileReg2 = /^1\d{10}$/;
                if (value == "") {
                    callback(new Error(this.$t("setTransPas.error.text1")));
                } else {
                    var reg = this.optValue === 1 ? mobileReg : mobileReg2
                    if (!reg.test(value)) {
                    callback(new Error(this.$t("setTransPas.error.text3")));
                    } else {
                    callback();
                    }
                }
            };


            const validateSmsCode = (rule, value, callback) => {
                let smsReg = /^\d{6}$/;
                if (value == '') {
                    callback(new Error(this.$t('signin.noSmsCodeError')));
                } else if (!smsReg.test(value)) {
                    callback(new Error(this.$t('signin.smsCodeError')));
                } else {
                    callback();
                }
            };
            const validatePass = (rule, value, callback) => {
                let pwdReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,16}$/;
                if (value == '') {
                    callback(new Error(this.$t('signin.noPwdError')));
                } else if (!pwdReg.test(value)) {
                    callback(new Error(this.$t('signin.pwdError')));
                } else {
                    callback();
                }
            };

            return {
                resetForm: {
                    email: "",
                    account: '',
                    smsCode: '',
                    password: ''
                },
                regMobileRules: {
                    account: [
                    { required: true, trigger: "change,blur", validator: validateAccount }
                    ]
                },
                regEmailRules: {
                    email: [
                    { required: true, trigger: "change,blur", validator: validateEmail }
                    ]
                },
                resetRules: {
                    smsCode: [
                        {required: true, trigger: 'change', validator: validateSmsCode}
                    ],
                    password: [
                        {required: true, trigger: 'change', validator: validatePass}
                    ],
                },
                rules: {},
                account: '',
                time: 60,
                timer: null, // 定时器
                disabledBtn: false,
                btnText: '',
                type: "email", // mobile ，  email
                options: [
                    {
                    value: 1,
                    label: "中国香港 +852"
                    },
                    {
                    value: 2,
                    label: "中国大陆 +86"
                    }
                ],
                optValue: 1,
            };
        },
        computed: {
            disabled(){
                return (this.resetForm.email.includes('@') || this.resetForm.account.length >= 8) && this.resetForm.smsCode.length == 6 && this.resetForm.password.length >= 6
            },
            ...mapGetters({
                language: 'language'
            })
        },
        watch: {
            language(val) {
                if (val) {
                    this.$refs.resetForm.resetFields();
                }
            }
        },
        methods: {
            changeType(type) {
                this.type = type;
                this.$refs.resetForm.resetFields();
            },
            goPage(path) {
                this.$router.push({name: path});
            },
            getSmsCodeHandler() {
                this.disabledBtn = true;
                this.btnText = `${this.time}s`;
                this.timer = setInterval(() => {
                    --this.time;
                    if (this.time >= 0) {
                        this.btnText = `${this.time}s`;
                        return;
                    }
                    this.resetCountdown();
                }, 1000);
            },
            resetCountdown() {
                clearInterval(this.timer);
                this.time = 60;
                this.disabledBtn = false;
                this.timer = null;
            },
            sendSmsCode() {
                if (this.timer) return;
                this.account = this.resetForm.account;
                var rules = this.type === "mobile" ? this.regMobileRules : this.regEmailRules;
                this.rules = rules;
                this.$nextTick(() => {
                    this.$refs.resetForm.validate((valid) => {
                        if (valid) {
                            let params = {
                                type: 'FIND_PWD',
                            };
                            if (this.type === "email") {
                                params['email'] = this.resetForm.email
                            } else {
                                params['phone'] = this.resetForm.account
                            }
                            sendCode(params).then(res => {
                                this.getSmsCodeHandler();
                                Message({
                                    message: this.$t('signin.sendSuccess'),
                                    type: 'success'
                                });
                            })
                        }
                    });
                });
            },
            findPwd() {
                var rules = this.type === "mobile" ? this.regMobileRules : this.regEmailRules;
                this.rules = Object.assign({}, this.resetRules, rules);
                this.$nextTick(() => {
                    this.$refs.resetForm.validate((valid) => {
                        if (valid) {
                            const {account, smsCode, password, email} = this.resetForm;
                            let params = {
                                code: smsCode,
                                newPWD: password,
                            };
                            if (this.type === "email") {
                                params['email'] = email;
                            } else {
                                params['phone'] = account;
                            }
                            findPassword(params).then(res => {
                                console.log(res);
                                Message({
                                    message: this.$t('signin.resetPwdSuccess'),
                                    type: 'success'
                                });
                                setTimeout(() => {
                                    this.$router.push('/login')
                                }, 2500)
                            }).catch((e) => {
                                console.log(e);
                                this.$refs.resetForm.resetFields();
                                this.resetCountdown();
                            })
                        }
                    });
                });
            }
        },
        created() {
            this.rules = this.resetRules;
            // 默认手机
            this.rules = Object.assign({}, this.resetRules, this.regMobileRules);
        },
    };
</script>

<style lang="scss">
    .page-resetPwd {
        padding-top: 15px;
        background: #fff;
        font-size: 14px;

        .content {
            width: 1180px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;

            .title{
                font-size: 40px;
                font-weight: 500;
                color: #3c3f4d;
                line-height: 58px;
            }
            .tab-cont{
                width: 324px;
                margin: 80px auto 0;
            }
            .tab-wrap {
                display: flex;
                font-size: 18px;
                margin:  0 auto 30px;
                color: rgba(0, 0, 0, 0.8);
                div {
                margin-right: 30px;
                padding: 10px 10px;
                border-bottom: 2px solid transparent;
                }
                .active {
                border-color: #ff661b;
                }
            }

            .form {
                width: 324px;
                margin: 0 auto 226px;
                .form-item .el-form-item__content {
                    display: flex;
                }
                .el-form-item {
                    width: 100%;
                    padding-top: 28px;
                    margin-bottom: 0;
                    border-bottom: 1px solid #D8D8D8;
                }

                .el-form-item:nth-of-type(1),
                .el-form-item:nth-of-type(2) {
                   padding-top: 0;
                }
                .el-select--medium {
                    .el-input--medium .el-input__inner {
                    width: 145px;
                    //border: 1px solid #ccc!important;
                    }
                }
                .el-form-item__content {
                    line-height: 34px;
                }

                .el-input__inner {
                    border: none;
                    line-height: 34px;
                    height: 34px;
                    color: #141416;
                    font-size: 14px;
                    padding-left: 0;
                }

                .btn-captcha {
                    width: 100%;
                    line-height: 30px;
                    padding: 0;
                    color: #D51D26;
                    font-size: 12px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    text-align: right;
                    cursor: pointer;
                }

                .btn {
                    width: 100%;
                    height: 48px;
                    //line-height: 48px;
                    font-size: 14px;
                    background: url("../../assets/images/signin/btn_signin.png") no-repeat center center;
                    background-size: cover;
                    color: #fff;
                    text-align: center;
                    cursor: pointer;
                    &.is-disabled{
                        opacity: 0.5;
                    }
                    &.btn-reset {
                        margin-top: 60px;
                    }
                }
            }
        }

        .el-form-item__error {
            font-size: 12px;
        }
    }
</style>
