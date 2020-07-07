<template>
  <div class="trans-wrap">
    <HeaderBar/>
    <div class="com-width">
      <div class="title">{{$t('setTransPas.text1')}}</div>
      <div class="trans-content clear">
        <div class="l-cont fl">
          <div class="label">{{$t('setTransPas.text2')}}</div>
          <div class="info">1.{{$t('setTransPas.text3')}}</div>
          <div class="info">2.{{$t('setTransPas.text4')}}</div>
        </div>
        <div class="r-cont fl">
          <div class="page-trans">
            <div class="content">
              <div class="tab-wrap">
<!--                <div
                  @click="changeType('mobile')"
                  class="item"
                  :class="[type=='mobile'?'active':'']"
                >手机号码</div> -->
                <div
                  @click="changeType('email')"
                  class="item"
                  :class="[type=='email'?'active':'']"
                >{{$t('setTransPas.text88')}}</div>
              </div>
              <!-- 邮箱 -->
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

                <el-form-item prop="smsCode">
                  <el-row>
                    <el-col :span="18">
                      <el-input
                        v-model="regForm.smsCode"
                        type="tel"
                        maxlength="6"
                        :placeholder="$t('setTransPas.text9')"
                      ></el-input>
                    </el-col>
                    <el-col :span="6">
                      <el-button
                        v-if="disabledBtn"
                        @click="sendSmsCode"
                        type="text"
                        class="disabled btn-captcha"
                      >{{btnText}}</el-button>
                      <el-button
                        v-else
                        @click="sendSmsCode"
                        type="text"
                        class="btn-captcha"
                      >{{$t('setTransPas.text6')}}</el-button>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input
                    maxlength="6"
                    v-model="regForm.password"
                    type="password"
                    :placeholder="$t('setTransPas.text10')"
                  ></el-input>
                </el-form-item>
                      <el-button
                        @click="confirm('regForm')"
                        type="text"
                        :disabled="!disabled"
                        class="btn btn-register"
                      >{{$t('setTransPas.text7')}}</el-button>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btm-bgg"></div>
  </div>
</template>
<script>
import {Message} from 'element-ui';
import {sendCode} from '@/api';
import {resetDealPWD} from '@/api/setting';
import HeaderBar from "@/components/header/openAccountHeader.vue";

export default {
  name: "register",
  components: {
    HeaderBar
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
      if (value == "") {
        callback(new Error(this.$t("setTransPas.error.text4")));
      } else if (!smsReg.test(value)) {
        callback(new Error(this.$t("setTransPas.error.text5")));
      } else {
        callback();
      }
    };

    const validatePass = (rule, value, callback) => {
      let pwdReg = /^\d{6}$/;
      if (value == "") {
        callback(new Error(this.$t("setTransPas.error.text6")));
      } else if (!pwdReg.test(value)) {
        callback(new Error(this.$t("setTransPas.error.text6")));
      } else {
        callback();
      }
    };

    return {
      //disabled: true,
      time: 60,
      timer: null, // 定时器
      disabledBtn: false,
      btnText: "",
      rules: {},
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
      regForm: {
        email: "",
        account: "",
        smsCode: "",
        password: ""
      },
      regRules: {
        smsCode: [
          { required: true, trigger: "change,blur", validator: validateSmsCode }
        ],
        password: [
          { required: true, trigger: "change,blur", validator: validatePass }
        ]
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
      }
    };
  },
  computed: {
    disabled(){
      return (this.regForm.email.includes('@') || this.regForm.account.length >= 8) && this.regForm.smsCode.length == 6 && this.regForm.password.length == 6
    }
  },
  methods: {
    goPage(path) {
      this.$router.push(path);
    },
    changeType(type) {
      this.type = type;
      this.$refs.regForm.resetFields();
    },
    confirm(formName) {
      var rules = this.type === "mobile" ? this.regMobileRules : this.regEmailRules;
      this.rules = Object.assign({}, this.regRules, rules);
      this.$nextTick(() => {
        this.$refs[formName].validate(valid => {
          if (valid) {
            const { smsCode, password } = this.regForm;
            const params = {
              code: smsCode,
              dealPwd: password,
            };
            if(this.type === "mobile"){
              params['phone'] = this.regForm.account;
            } else {
              params['email'] = this.regForm.email;
            }
            resetDealPWD(params).then(res=>{
                Message({
                  message: this.$t('msgTips.text1'),
                  type: "success"
                });
                setTimeout(()=>{
                  this.$router.push('/assetsConfig');
                }, 2000);
            })
          }
        });
      })
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
      this.btnText = this.$t("signin.getAgain");
      this.timer = null;
    },
    sendSmsCode() {
      if (this.timer) return;
      this.account = this.regForm.account;
      //this.$refs.regForm.resetFields();
      var rules = this.type === "mobile" ? this.regMobileRules : this.regEmailRules;
      this.rules = rules;
      this.$nextTick(() => {
        this.regForm.account = this.account;
        this.$refs.regForm.validate(valid => {
          if (valid) {
            let params = {
              type: "DEALPWD",
            };
            if (this.type === "email") {
              params["email"] = this.regForm.email;
            } else {
              params["phone"] = this.regForm.account;
            }
            sendCode(params).then(res => {
              this.getSmsCodeHandler();
              Message({
                message: this.$t('signin.sendSuccess'),
                type: "success"
              });
            });
          }
        });
      });
    }
  },
  created() {
    // 默认手机
    this.rules = Object.assign({}, this.regRules, this.regMobileRules);
  }
};
</script>

<style lang="scss">
.trans-wrap {
  padding-top: 40px;
  .form-item .el-form-item__content {
    display: flex;
  }
  .btm-bgg {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 376px;
    background: url("../assets/images/signin/bg_bottom.png") no-repeat center;
    background-size: cover;
  }
  .title {
    font-size: 40px;
    font-weight: 500;
    color: rgba(60, 63, 77, 1);
    line-height: 58px;
  }
  .trans-content {
    padding: 80px 0 0 200px;
  }
  .r-cont {
    margin-left: 200px;
  }
  .label {
    color: #3b4859;
    font-size: 24px;
    margin-bottom: 20px;
  }
  .info {
    width: 400px;
    color: #3c3f4d;
    font-size: 16px;
    line-height: 32px;
  }
  .page-trans {
    //background: #fff;
    font-size: 14px;
    .content {
      position: relative;
      overflow: hidden;
      .tab-wrap {
        display: flex;
        font-size: 18px;
        margin-bottom: 30px;
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
        width: 350px;
        margin: 0 auto;
        .el-form-item {
          width: 100%;
          padding-top: 22px;
          margin-bottom: 0;
          border-bottom: 1px solid #d8d8d8;
        }
        .el-form-item:nth-of-type(1),
        .el-form-item:nth-of-type(2) {
          padding-top: 0;
        }
        .el-form-item__content {
          line-height: 34px;
          .el-input--medium .el-input__inner {
            border: none !important;
            line-height: 34px !important;
            height: 34px !important;
            color: #141416;
            padding-left: 0;
          }
          .el-select--medium {
            .el-input--medium .el-input__inner {
              width: 145px;
              //border: 1px solid #ccc!important;
            }
          }
        }

        .btn-captcha {
          width: 100%;
          line-height: 22px;
          padding: 0;
          color: #d51d26;
          font-size: 12px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          text-align: right;
          cursor: pointer;
        }
        .btn {
          width: 100%;
          height: 36px;
          //line-height: 36px;
          color: #fff;
          text-align: center;
          background: url("../assets/images/other_btn/btn_signin.png") no-repeat
            center;
          background-size: contain;
          cursor: pointer;
          &.btn-register {
            margin-top: 90px;
          }
          &.is-disabled{
            opacity: 0.5;
          }
        }
      }
    }
  }
}
</style>

