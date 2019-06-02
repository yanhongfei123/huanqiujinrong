<template>
    <div class="page-resetPwd">
        <header>
            <regHeader></regHeader>
        </header>
        <div class="content">
            <el-form class="form" :model="resetForm" :rules="resetRules" ref="resetForm">
                <el-form-item prop="account">
                    <el-input v-model="resetForm.account" type="text" placeholder="手机号/邮箱地址"></el-input>
                </el-form-item>
                <el-form-item prop="smsCode">
                    <el-row>
                        <el-col :span="20">
                            <el-input v-model="resetForm.smsCode" type="tel" maxlength="6" placeholder="验证码"></el-input>
                        </el-col>
                        <el-col :span="4">
                            <el-button type="text" class="btn-captcha">获取验证码</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="resetForm.password" type="password" placeholder="密码"></el-input>
                </el-form-item>

                <div class="btn btn-reset" @click="resetPwd('resetForm')">确定</div>

            </el-form>
        </div>
        <div class="bg-bottom"></div>
        <footerBar></footerBar>
    </div>
</template>

<script>
  import regHeader from '@/components/header/header.vue';
  import footerBar from '@/components/footer/footer.vue';
  import leftImage from '@/components/common/leftImage.vue';

  export default {
    name: 'resetPwd',
    components: {
      regHeader,
      footerBar,
      leftImage
    },
    data() {
      const validateAccount = (rule, value, callback) => {
        let mobileReg = /^1\d{10}$/;
        let mailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if (value == '') {
          callback(new Error('请输入手机号/邮箱'));
        }
        if(value.indexOf('@')> -1 ){
          if (!mailReg.test(value)) {
            callback(new Error('请输入正确的邮箱'));
          } else {
            callback();
          }
        }else{
          if (!mobileReg.test(value)) {
            callback(new Error('请输入正确的手机号'));
          }else{
            callback();
          }
        }

      };
      const validateSmsCode = (rule, value, callback) => {
        let smsReg = /^\d{6}$/;
        if (value == '') {
          callback(new Error('请输入短信验证码'));
        } else if (!smsReg.test(value)) {
          callback(new Error('请输入正确的短信验证码'));
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
        resetRules: {
          account: [
            { required: true, trigger: 'change,blur', validator: validateAccount },
          ],
          smsCode: [
            { required: true, trigger: 'change,blur', validator: validateSmsCode }
          ],
          password: [
            { required: true, trigger: 'change,blur', validator: validatePass }
          ],
        }
      };
    },
    computed: {},
    methods: {
      goPage(path) {
        this.$router.push({ name: path });
      },
      resetPwd(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          }
        });
      }
    },
    mounted() {

    },
  };
</script>

<style lang="scss" scoped>
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
                width: 420px;
                margin: 16px auto 0;
                .el-form-item {
                    width: 100%;
                    padding-top: 22px;
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
                .btn {
                    width: 100%;
                    height: 44px;
                    line-height: 44px;
                    background: #D51D26;
                    border-radius: 22px;
                    color: #fff;
                    text-align: center;
                    cursor: pointer;
                    &.btn-reset {
                        margin-top: 60px;
                    }
                }
            }
        }
        .bg-bottom {
            height: 246px;
            background: url("../assets/images/user/bg-bottom.jpg") no-repeat center center;
            background-size: contain;
        }
    }
</style>
