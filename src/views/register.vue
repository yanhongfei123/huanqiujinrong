<template>
    <div class="page-register">
        <header>
            <regHeader path="/register"></regHeader>
        </header>
        <div class="content">
            <leftImage></leftImage>
            <el-form class="form" :model="regForm" :rules="rules" ref="regForm">
                <el-form-item prop="account">
                    <el-input maxlength="11" v-model="regForm.account" type="text"
                              :placeholder="$t('signin.account')"></el-input>
                </el-form-item>
                <el-form-item prop="smsCode">
                    <el-row>
                        <el-col :span="20">
                            <el-input v-model="regForm.smsCode" type="tel" maxlength="6"
                                      :placeholder="$t('signin.smsCode')"></el-input>
                        </el-col>
                        <el-col :span="4">
                            <el-button v-if="disabledBtn" @click="sendSmsCode" type="text"
                                       class="disabled btn-captcha">{{btnText}}</el-button>
                            <el-button v-else @click="sendSmsCode" type="text"
                                       class="btn-captcha">{{$t('signin.getSmsCode')}}</el-button>
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

                <div class="btn btn-register" @click="register">{{$t('signin.register')}}</div>

            </el-form>
        </div>
        <div class="bg-bottom"></div>
        <footerBar></footerBar>
    </div>
</template>

<script>
  import { Message } from 'element-ui';
  import regHeader from '@/components/header/header.vue';
  import footerBar from '@/components/footer/footer.vue';
  import leftImage from '@/components/common/leftImage.vue';
  import { register, sendCode } from '@/api';

  export default {
    name: 'register',
    components: {
      regHeader,
      footerBar,
      leftImage
    },
    data() {
      const validateAccount = (rule, value, callback) => {
        //let mobileReg = /^(5|6|8|9)\d{7}$/; //香港手机号码8位数，5|6|8|9开头+7位任意数
        let mobileReg = /^(5|6|8|9)\d{7}$/;
        let mailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if (value == '') {
          callback(new Error(this.$t('signin.noAccountError')));
        }
        if (value.indexOf('@') > -1) {
          if (!mailReg.test(value)) {
            callback(new Error(this.$t('signin.emailError')));
          } else {
            callback();
          }
        } else {
          if (!mobileReg.test(value)) {
            callback(new Error(this.$t('signin.phoneError')));
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
          account: '',
          smsCode: '',
          password: ''
        },
        regSmsRules: {
          account: [
            { required: true, trigger: 'blur', validator: validateAccount },
          ],
        },
        regRules: {
          account: [
            { required: true, trigger: 'blur', validator: validateAccount },
          ],
          smsCode: [
            { required: true, trigger: 'blur', validator: validateSmsCode }
          ],
          password: [
            { required: true, trigger: 'blur', validator: validatePass }
          ],
        },
        account: '',
        time: 60,
        timer: null, // 定时器
        disabledBtn: false,
        btnText: ''
      };
    },
    watch: {
      locale(val){

      }
    },
    methods: {
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
        this.$refs.regForm.resetFields();
        this.rules = this.regSmsRules;
        this.$nextTick(() => {
          this.regForm.account = this.account;
          this.$refs.regForm.validate((valid) => {
            if (valid) {
              let params = {
                type: 'REGISTER',
              };
              if (this.regForm.account.indexOf('@') > -1) {
                params['email'] = this.regForm.account;
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
        this.rules = this.regRules;
        this.$nextTick(() => {
          this.$refs.regForm.validate((valid) => {
            if (valid) {
              const { account, smsCode, password } = this.regForm;
              let params = {
                code: smsCode,
                passWord: password,
              };
              if (account.indexOf('@') > -1) {
                params['email'] = account;
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
      this.rules = this.regRules;
    }
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

            .form {
                float: right;
                width: 420px;
                margin-top: 16px;
                padding-left: 160px;

                .el-form-item {
                    width: 100%;
                    padding-top: 22px;
                    margin-bottom: 0;
                    border-bottom: 1px solid #D8D8D8;
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
                    line-height: 44px;
                    background: url('../assets/images//signin/btn_signin.png') no-repeat center;
                    background-size: cover;
                    border-radius: 22px;
                    color: #fff;
                    text-align: center;
                    cursor: pointer;

                    &.btn-register {
                        margin-top: 10px;
                    }
                }

            }
        }

        .bg-bottom {
            height: 246px;
            background: url("../assets/images/signin/bg_bottom.png") no-repeat center center;
            background-size: contain;
        }
    }
</style>
