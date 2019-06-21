<template>
    <div class="page-resetPwd">
        <header>
            <regHeader></regHeader>
        </header>
        <div class="content">
            <el-form class="form" :model="resetForm" :rules="rules" ref="resetForm">
                <el-form-item prop="account">
                    <el-input v-model="resetForm.account" type="text" placeholder="手机号/邮箱地址"></el-input>
                </el-form-item>
                <el-form-item prop="smsCode">
                    <el-row>
                        <el-col :span="16">
                            <el-input v-model="resetForm.smsCode" type="tel" maxlength="6" placeholder="验证码"></el-input>
                        </el-col>
                        <el-col :span="8">
                            <el-button @click="sendSmsCode" type="text" :class="{'disabled': disabledBtn}"
                                       class="btn-captcha">{{btnText}}
                            </el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="resetForm.password" type="password" placeholder="密码"></el-input>
                </el-form-item>

                <div class="btn btn-reset" @click="resetPwd">确定</div>

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

    export default {
        name: 'resetPwd',
        components: {
            regHeader,
            footerBar,
            leftImage
        },
        data() {
            const validateAccount = (rule, value, callback) => {
                let mobileReg = /^(5|6|8|9)\d{7}$/; //香港手机号码8位数，5|6|8|9开头+7位任意数
                let mailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
                if (value == '') {
                    callback(new Error('请输入手机号/邮箱'));
                }
                if (value.indexOf('@') > -1) {
                    if (!mailReg.test(value)) {
                        callback(new Error('请输入正确的邮箱'));
                    } else {
                        callback();
                    }
                } else {
                    if (!mobileReg.test(value)) {
                        callback(new Error('请输入正确的手机号'));
                    } else {
                        callback();
                    }
                }

            };
            const validateSmsCode = (rule, value, callback) => {
                let smsReg = /^\d{6}$/;
                if (value == '') {
                    callback(new Error('请输入验证码'));
                } else if (!smsReg.test(value)) {
                    callback(new Error('请输入正确的验证码'));
                } else {
                    callback();
                }
            };

            const validatePass = (rule, value, callback) => {
                let pwdReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
                if (value == '') {
                    callback(new Error('请输入密码'));
                } else if (!pwdReg.test(value)) {
                    callback(new Error('密码为8-16位，需包含大写字母、小写字母、数字'));
                } else {
                    callback();
                }
            };

            return {
                resetForm: {
                    account: '',
                    smsCode: '',
                    password: ''
                },
                resetSmsRules: {
                    account: [
                        {required: true, trigger: 'blur', validator: validateAccount},
                    ],
                },
                resetRules: {
                    account: [
                        {required: true, trigger: 'change', validator: validateAccount},
                    ],
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
                btnText: '获取验证码'
            };
        },
        methods: {
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
                this.btnText = '重新获取';
                this.timer = null;
            },
            sendSmsCode() {
                if (this.timer) return;
                this.account = this.resetForm.account;
                this.rules = this.resetSmsRules;
                this.$refs.resetForm.resetFields();
                this.$nextTick(()=> {
                    this.$refs.resetForm.validate((valid) => {
                        if (valid) {
                            let params = {
                                type: 'FIND_PWD',
                            };
                            if (this.resetForm.account.indexOf('@') > -1) {
                                params['email'] = this.resetForm.account
                            } else {
                                params['phone'] = this.resetForm.account
                            }
                            sendCode(params).then(res => {
                                this.getSmsCodeHandler();
                                Message({
                                    message: '验证码已发送',
                                    type: 'success'
                                });
                            })
                        }
                    });
                });
            },
            resetPwd() {
                this.rules = this.resetRules;
                this.$nextTick(()=> {
                    this.$refs.resetForm.validate((valid) => {
                        if (valid) {
                            const {account, smsCode, password} = this.resetForm;
                            let params = {
                                code: smsCode,
                                newPWD: password,
                            };
                            if (account.indexOf('@') > -1) {
                                params['email'] = account;
                            } else {
                                params['phone'] = account;
                            }
                            findPassword(params).then(res => {
                                console.log(res);
                                Message({
                                    message: '重置密码成功',
                                    type: 'success'
                                });
                                setTimeout(() => {
                                    this.$router.push('/login')
                                }, 2500)
                            }).catch((e) => {
                                console.log(e);
                                this.$refs.resetForm.resetFields();
                            })
                        }
                    });
                });
            }
        },
        created() {
            this.rules = this.resetRules;
        },
    };
</script>

<style lang="scss">
    .page-resetPwd {
        padding-top: 60px;
        background: #fff;
        font-size: 14px;

        .content {
            width: 1180px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;

            .form {
                width: 324px;
                margin: 16px auto 226px;

                .el-form-item {
                    width: 100%;
                    padding-top: 28px;
                    margin-bottom: 0;
                    border-bottom: 1px solid #D8D8D8;
                }

                .el-form-item__content {
                    line-height: 34px;
                }

                .el-input__inner {
                    border: none;
                    line-height: 34px;
                    height: 34px;
                    color: #141416;
                    font-size: 16px;
                }

                .btn-captcha {
                    width: 100%;
                    line-height: 30px;
                    padding: 0;
                    color: #D51D26;
                    font-size: 16px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    text-align: right;
                    cursor: pointer;
                }

                .btn {
                    width: 100%;
                    height: 48px;
                    line-height: 48px;
                    font-size: 18px;
                    background: url("../assets/images/signin/btn_signin.png") no-repeat center center;
                    background-size: cover;
                    color: #fff;
                    text-align: center;
                    cursor: pointer;

                    &.btn-reset {
                        margin-top: 60px;
                    }
                }
            }
        }

        .el-form-item__error {
            font-size: 14px;
        }
    }
</style>
