<template>
    <div class="page-register">
        <header>
            <regHeader path="/register"></regHeader>
        </header>
        <div class="content">
            <leftImage></leftImage>
            <div class="tab-wrap fr">
<!--            <div
                @click="changeType('mobile')"
                class="item"
                :class="[type=='mobile'?'active':'']"
            >手机号码</div> -->
            <div
                @click="changeType('email')"
                class="item"
                :class="[type=='email'?'active':'']"
            >{{ $t('setTransPas.text88') }}</div>
            </div>
            <el-form class="form" :model="regForm" :rules="rules" ref="regForm">
                <el-form-item v-show="type === 'email'" prop="email">
                  <el-input
                    v-model="regForm.email"
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
                    v-model="regForm.account"
                    type="text"
                    maxlength="11"
                    :placeholder="$t('setTransPas.text5')"
                  ></el-input>
                </el-form-item>

                <!-- <el-form-item prop="account">
                    <el-input maxlength="11" v-model="regForm.account" type="text"
                              :placeholder="$t('signin.account')"></el-input>
                </el-form-item> -->
                <el-form-item prop="smsCode">
                    <el-row>
                        <el-col :span="18">
                            <el-input v-model="regForm.smsCode" type="tel" maxlength="6"
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
                    <el-input v-model="regForm.password" type="password"
                              :placeholder="$t('signin.password')"></el-input>
                </el-form-item>

                <el-row class="form-action">
                    <el-col :span="8">
                        <span>{{$t('signin.hasAccount')}}？</span><span @click="goPage('login')" class="login color-red">{{$t('signin.goLogin')}}</span>
                    </el-col>
                    <el-col :span="4" :offset="12" class="forget-pwd tr">
                        <span @click="goPage('findPwd')">{{$t('signin.forgetPwd')}}</span>
                    </el-col>
                </el-row>

                <el-button
                    @click="register"
                    type="text"
                    :disabled="!disabled"
                    class="btn btn-register"
                >{{$t('signin.register')}}</el-button>


            </el-form>
        </div>
        <div class="bg-bottom"></div>
        <footerBar></footerBar>
    </div>
</template>

<script>
    import {Message} from 'element-ui';
    import regHeader from '@/components/header/header.vue';
    import footerBar from '@/components/footer/footer.vue';
    import leftImage from '@/components/common/leftImage.vue';
    import {register, sendCode} from '@/api';
    import { mapGetters } from 'vuex';

    export default {
        name: 'register',
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
                locale: this.$i18n.locale,
                rules: {},
                regForm: {
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
                regRules: {
                    smsCode: [
                        {required: true, trigger: 'blur', validator: validateSmsCode}
                    ],
                    password: [
                        {required: true, trigger: 'blur', validator: validatePass}
                    ],
                },
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
                return (this.regForm.email.includes('@') || this.regForm.account.length >= 8) && this.regForm.smsCode.length == 6 && this.regForm.password.length >= 6
            },
            ...mapGetters({
                language: 'language'
            })
        },
        watch: {
          language(val) {
              if(val){
                  this.$refs.regForm.resetFields();
              }
          }
        },
        methods: {
            changeType(type) {
                this.type = type;
                this.$refs.regForm.resetFields();
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
                this.btnText = this.$t('signin.getAgain');
                this.timer = null;
            },
            sendSmsCode() {
                if (this.timer) return;
                this.account = this.regForm.account;
                var rules = this.type === "mobile" ? this.regMobileRules : this.regEmailRules;
                this.rules = rules;
                this.$nextTick(() => {
                    this.regForm.account = this.account;
                    this.$refs.regForm.validate((valid) => {
                        if (valid) {
                            let params = {
                                type: 'REGISTER',
                            };
                            if (this.type === "email") {
                                params['email'] = this.regForm.email;
                            } else {
                                params['phone'] = this.regForm.account;
                            }
                            sendCode(params).then(res => {
                                this.getSmsCodeHandler();
                                Message({
                                    message: this.$t('signin.sendSuccess'),
                                    type: 'success'
                                });
                            });
                        }
                    });
                });
            },
            goPage(path) {
                this.$router.push(path);
            },
            register() {
                var rules = this.type === "mobile" ? this.regMobileRules : this.regEmailRules;
                this.rules = Object.assign({}, this.regRules, rules);
                this.$nextTick(() => {
                    this.$refs.regForm.validate((valid) => {
                        if (valid) {
                            const {account, smsCode, password, email} = this.regForm;
                            let params = {
                                code: smsCode,
                                passWord: password,
                            };
                            if (this.type === "email") {
                                params['email'] = email;
                            } else {
                                params['phone'] = account;
                            }
                            register(params).then(res => {
                                console.log(res);
                                Message({
                                    message: this.$t('signin.registerSuccess'),
                                    type: 'success'
                                });
                                setTimeout(() => {
                                    this.$router.push('/login');
                                }, 2500);
                            }).catch(error => {
                                this.$refs.regForm.resetFields();
                                this.resetCountdown();
                            });
                        }
                    });
                });
            },
        },
        created() {
            // 默认手机
            this.rules = Object.assign({}, this.regRules, this.regMobileRules);
        },
    };
</script>

<style lang="scss">
    .page-register {
        padding-top: 60px;
        background: #fff;
        font-size: 14px;

        .content {
            width: 1180px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
            .tab-wrap {
                display: flex;
                font-size: 18px;
                margin-bottom: 30px;
                margin-right: 262px;
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
                float: right;
                width: 350px;
                margin-right: 120px;

                .form-item .el-form-item__content {
                    display: flex;
                }

                .el-form-item {
                    width: 100%;
                    padding-top: 22px;
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

                    .el-input--medium .el-input__inner {
                        border: none !important;
                        line-height: 34px !important;
                        height: 34px !important;
                        color: #141416;
                        padding: 0;
                    }
                }

                .btn-captcha {
                    width: 100%;
                    line-height: 22px;
                    padding: 0;
                    color: #D51D26;
                    font-size: 12px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    text-align: right;
                    cursor: pointer;
                }

                .form-action {
                    color: #666;
                    margin-top: 60px;
                    font-size: 12px;
                    line-height: 1.4;

                    .login {
                        color: #D51D26;
                        text-decoration: underline;
                        cursor: pointer;
                    }

                    .forget-pwd {
                        cursor: pointer;
                    }
                }

                .btn {
                    width: 100%;
                    height: 44px;
                    //line-height: 44px;
                    background: #D51D26;
                    border-radius: 22px;
                    color: #fff;
                    text-align: center;
                    cursor: pointer;
                    &.is-disabled{
                        opacity: 0.5;
                    }
                    &.btn-register {
                        margin-top: 10px;
                    }
                }

            }
        }

        .bg-bottom {
            height: 246px;
            background: url("../../assets/images/signin/bg_bottom.png") no-repeat center center;
            background-size: contain;
        }
    }
</style>
