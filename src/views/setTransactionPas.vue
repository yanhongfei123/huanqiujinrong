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
              <el-form class="form" :model="regForm" :rules="regRules" ref="regForm">
                <el-form-item prop="account">
                  <el-input
                    v-model="regForm.account"
                    type="text"
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
                        :placeholder="$t('setTransPas.text6')"
                      ></el-input>
                    </el-col>
                    <el-col :span="4">
                      <el-button type="text" class="btn-captcha">{{$t('setTransPas.text6')}}</el-button>
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
                <div
                  class="btn btn-register"
                  @click="confirm('regForm')"
                >{{$t('setTransPas.text7')}}</div>
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
import HeaderBar from "@/components/header/openAccountHeader.vue";

export default {
  name: "register",
  components: {
    HeaderBar
  },
  data() {
    const validateAccount = (rule, value, callback) => {
      let mobileReg = /^1\d{10}$/;
      let mailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
      if (value == "") {
        callback(new Error(this.$t("setTransPas.error.text1")));
      }
      if (value.indexOf("@") > -1) {
        if (!mailReg.test(value)) {
          callback(new Error(this.$t("setTransPas.error.text2")));
        } else {
          callback();
        }
      } else {
        if (!mobileReg.test(value)) {
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
      regForm: {
        account: "",
        smsCode: "",
        password: ""
      },
      regRules: {
        account: [
          { required: true, trigger: "change,blur", validator: validateAccount }
        ],
        smsCode: [
          { required: true, trigger: "change,blur", validator: validateSmsCode }
        ],
        password: [
          { required: true, trigger: "change,blur", validator: validatePass }
        ]
      }
    };
  },
  computed: {},
  methods: {
    goPage(path) {
      this.$router.push(path);
    },
    confirm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        }
      });
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.trans-wrap {
  padding-top: 40px;
  .btm-bgg {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 376px;
    background: url("../assets/images/signin/bg2_signin.png") no-repeat center;
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
      .form {
        width: 250px;
        margin: 0 auto;
        .el-form-item {
          width: 100%;
          padding-top: 22px;
          margin-bottom: 0;
          border-bottom: 1px solid #d8d8d8;
        }
        .el-form-item:nth-of-type(1) {
          padding-top: 0;
        }
        .el-form-item__content {
          line-height: 34px;
          .el-input--medium .el-input__inner {
            border: none !important;
            line-height: 34px !important;
            height: 34px !important;
            color: #141416;
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
          line-height: 36px;
          color: #fff;
          text-align: center;
          background: url("../assets/images/other_btn/btn_signin.png") no-repeat
            center;
          background-size: contain;
          cursor: pointer;
          &.btn-register {
            margin-top: 90px;
          }
        }
      }
    }
  }
}
</style>

