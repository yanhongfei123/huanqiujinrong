<template>
  <div class="page-resetPwd">
    <div class="content">
      <el-form class="form" :model="resetForm" :rules="resetRules" ref="resetForm">
        <el-form-item prop="oldPassword">
          <el-input
            maxlength="16"
            v-model="resetForm.oldPassword"
            type="password"
            :placeholder="$t('setting.resetPwd.text1')"
          ></el-input>
        </el-form-item>
        <el-form-item prop="newPassword">
          <el-input
            maxlength="16"
            v-model="resetForm.newPassword"
            type="password"
            :placeholder="$t('setting.resetPwd.text2')"
          ></el-input>
        </el-form-item>
        <el-form-item prop="confirmNewPassword">
          <el-input
            maxlength="16"
            v-model="resetForm.confirmNewPassword"
            type="password"
            :placeholder="$t('setting.resetPwd.text3')"
          ></el-input>
        </el-form-item>
        <el-button
          @click="resetPwd('resetForm')"
          type="text"
          :disabled="!disabled"
          class="btn btn-reset"
        >{{$t('setting.resetPwd.text4')}}</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import {Message} from 'element-ui';
import {resetPassword} from '@/api/setting';
export default {
  name: "resetPwd",
  components: {},
  data() {
    const validateOldPassword = (rule, value, callback) => {
      if (value == "") {
        callback(new Error(this.$t("setting.resetPwd.error.text1")));
      } else {
        callback();
      }
    };

    const validateNewPassword = (rule, value, callback) => {
      let pwdReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,16}$/;
      if (value == "") {
        callback(new Error(this.$t("setting.resetPwd.error.text2")));
      } else if (value === this.resetForm.oldPassword){
        callback(new Error(this.$t("setting.resetPwd.error.text6")));
      } else if (!pwdReg.test(value)) {
        callback(new Error(this.$t("setting.resetPwd.error.text3")));
      } else {
        callback();
      }
    };

    const validateConfirmNewPassword = (rule, value, callback) => {
      if (value == "") {
        callback(new Error(this.$t("setting.resetPwd.error.text4")));
      } else if (value != this.resetForm.newPassword) {
        callback(new Error(this.$t("setting.resetPwd.error.text5")));
      } else {
        callback();
      }
    };

    return {
      resetForm: {
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: ""
      },
      resetRules: {
        oldPassword: [
          {
            required: true,
            trigger: "change,blur",
            validator: validateOldPassword
          }
        ],
        newPassword: [
          {
            required: true,
            trigger: "change,blur",
            validator: validateNewPassword
          }
        ],
        confirmNewPassword: [
          {
            required: true,
            trigger: "change,blur",
            validator: validateConfirmNewPassword
          }
        ]
      }
    };
  },
  computed: {
    disabled() {
      return (
        this.resetForm.oldPassword.length >= 6 &&
        this.resetForm.newPassword.length >= 6 &&
        this.resetForm.confirmNewPassword.length >= 6
      );
    }
  },
  methods: {
    goPage(path) {
      this.$router.push({ name: path });
    },
    resetPwd(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var params = {
            passWord: this.resetForm.oldPassword,
            newPWD: this.resetForm.newPassword,
            newPWD1: this.resetForm.confirmNewPassword,
          };
            resetPassword(params).then(res=>{
                Message({
                  message: '修改成功',
                  type: "success"
                });
                setTimeout(()=>{
                  this.$router.push('/accountPreView');
                }, 2000);
            })
        }
      });
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.page-resetPwd {
  padding-top: 60px;
  background: #fff;
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
      .el-form-item__content {
        line-height: 34px;
      }
      .el-input__inner {
        border: none;
        line-height: 34px;
        height: 34px;
        color: #141416;
        padding-left: 0;
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
        background: url("../../assets/images/other_btn/btn_signin.png")
          no-repeat center;
        background-size: contain;
        cursor: pointer;
        &.btn-reset {
          margin-top: 90px;
        }
        &.is-disabled {
          opacity: 0.5;
        }
      }
    }
  }
}
</style>
