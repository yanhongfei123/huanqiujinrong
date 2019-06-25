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
                <div class="info-title">个人信息</div>
                <el-form title="个人信息" class="userInfoForm" :label-position="labelPosition" label-width="80px"
                         :model="userInfo" ref="userInfoForm" :rules="userInfoRules">
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="姓（中文）:" prop="surnameChina" required>
                                <el-input placeholder="请确保您填写的姓名与身份证件上的信息完全一致" v-model="userInfo.surnameChina"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item label="名（中文）:" prop="nameChina" required>
                                <el-input placeholder="请确保您填写的姓名与身份证件上的信息完全一致"
                                          v-model="userInfo.nameChina"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="姓（英文/拼音）:" prop="surnameUS" required>
                                <el-input placeholder="请确保您填写的姓名与身份证件上的信息完全一致" v-model="userInfo.surnameUS"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item label="名（英文/拼音）:" prop="nameUS" required>
                                <el-input placeholder="请确保您填写的姓名与身份证件上的信息完全一致"
                                          v-model="userInfo.nameUS"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="出生日期:" prop="birthday" required>
                                <el-date-picker type="date" placeholder="请选择" v-model="userInfo.birthday"
                                                value-format="yyyy-mm-dd"
                                                style="width: 100%;" :editable=false></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item label="香港身份证号码:" prop="HKIDCard" required>
                                <el-input placeholder="请确保与您证件上的号码完全一致，包括英文大小写、符号等"
                                          v-model="userInfo.HKIDCard"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="性别:" prop="sex" required>
                                <el-select v-model="userInfo.sex" placeholder="请选择" style="width: 100%;">
                                    <el-option
                                            v-for="item in genders"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item label="婚姻状况:" prop="Marriage" required>
                                <el-select v-model="userInfo.Marriage" placeholder="请选择" style="width: 100%;">
                                    <el-option
                                            v-for="item in maritalStatus"
                                            :key="item.dictCode"
                                            :label="item | filterByLanguage('dictLabel')"
                                            :value="item.dictValue">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="香港手机号码:" prop="phone" required>
                                <el-input placeholder="请填写香港手机号" v-model="userInfo.phone"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item label="电子邮箱:" prop="email" required>
                                <el-input placeholder="请填写电子邮箱地址" v-model="userInfo.email"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="家庭成员数:" prop="familyMembers" required>
                                <el-select v-model="userInfo.familyMembers" placeholder="请选择" style="width: 100%;">
                                    <el-option
                                            v-for="item in familyMembers"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item label="基础货币:" prop="currency" required>
                                <el-select v-model="userInfo.currency" placeholder="请选择" style="width: 100%;">
                                    <el-option
                                            v-for="item in currencyTypes"
                                            :key="item.dictCode"
                                            :label="item | filterByLanguage('dictLabel')"
                                            :value="item.dictValue">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="基账户类型:" prop="accountType" required>
                                <el-select v-model="userInfo.accountType" placeholder="请选择" style="width: 100%;">
                                    <el-option
                                            v-for="item in accountTypes"
                                            :key="item.dictCode"
                                            :label="item | filterByLanguage('dictLabel')"
                                            :value="item.dictValue">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item label="入金方式:" prop="depositType" required>
                                <el-select v-model="userInfo.depositType" placeholder="请选择" style="width: 100%;">
                                    <el-option
                                            v-for="item in depositTypes"
                                            :key="item.dictCode"
                                            :label="item | filterByLanguage('dictLabel')"
                                            :value="item.dictValue">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>

                </el-form>
                <div class="btn-wrap">
                    <div @click="saveUserInfo('userInfoForm')" class="btn-item btn1">保存</div>
                    <div @click="chooseMarket" class="btn-item btn2">上一步</div>
                    <div @click="goSubmitAddressInfo('userInfoForm')" class="btn-item btn3">下一步</div>
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
    import {getUserInfo} from '@/api/index';
    import {saveUserInfo} from '@/api/openAccount';

    export default {
        name: 'userInfo',
        components: {
            openAccountHeader,
            footerBar,
            openAccountSteps
        },
        data() {
            const validateIdCard = (rule, value, callback) => {
                let idCardReg = /^([A-Z]{1,2})([0-9]{6})([A0-9])$/; //香港身份证
                if (value == '') {
                    callback(new Error('请输入香港身份证号'));
                } else if (!idCardReg.test(value)) {
                    callback(new Error('请输入正确的香港身份证号'));
                } else {
                    callback();
                }
            };

            const validateMobile = (rule, value, callback) => {
                let mobileReg = /^(5|6|8|9)\d{7}$/; //香港手机号码8位数，5|6|8|9开头+7位任意数
                if (value == '') {
                    callback(new Error('请输入香港手机号码'));
                } else if (!mobileReg.test(value)) {
                    callback(new Error('请输入正确的香港手机号码'));
                } else {
                    callback();
                }
            };

            const validateEmail = (rule, value, callback) => {
                let mailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
                if (value == '') {
                    callback(new Error('请输入电子邮箱地址'));
                } else if (!mailReg.test(value)) {
                    callback(new Error('请输入正确的电子邮箱地址'));
                } else {
                    callback();
                }
            };


            return {
                type: this.$route.query.type,
                step: 1,
                labelPosition: 'top',
                genders: [
                    {
                        value: '1',
                        label: '男'
                    },
                    {
                        value: '2',
                        label: '女'
                    }
                ],
                maritalStatus: [],
                familyMembers: [
                    {
                        value: '0',
                        label: '0'
                    },
                    {
                        value: '1',
                        label: '1'
                    },
                    {
                        value: '2',
                        label: '2'
                    },
                    {
                        value: '3',
                        label: '3'
                    },
                    {
                        value: '4',
                        label: '4'
                    },
                    {
                        value: '5',
                        label: '5'
                    },
                    {
                        value: '6',
                        label: '6'
                    },
                    {
                        value: '7',
                        label: '7'
                    },
                    {
                        value: '8',
                        label: '8'
                    },
                    {
                        value: '9',
                        label: '9'
                    },
                    {
                        value: '10',
                        label: '10及以上'
                    },

                ],
                currencyTypes: [],
                accountTypes: [],
                depositTypes: [
                    {
                        dictCode: 134,
                        dictLabel: "电汇",
                        dictLabelEn: "Telegraphic transfer",
                        dictLabelFt: "電匯",
                        dictSort: 1,
                        dictType: "deposit_type",
                        dictValue: "1",
                        isDefault: "Y",
                        status: "0",
                        updateBy: "admin",
                    },
                    {
                        createBy: "admin",
                        createTime: 1560157261000,
                        dictCode: 135,
                        dictLabel: "支票",
                        dictLabelEn: "cheque",
                        dictLabelFt: "支票",
                        dictSort: 2,
                        dictType: "deposit_type",
                        dictValue: "2",
                        isDefault: "Y",
                        status: "0",
                        updateBy: "admin"
                    }
                ],
                userInfo: {
                    currency: '1'
                },
                userInfoRules: {
                    surnameChina: [
                        {required: true, message: "请输入姓（中文）"},
                    ],
                    nameChina: [
                        {required: true, message: '请输入名（中文）'}
                    ],
                    surnameUS: [
                        {required: true, message: '请输入姓（英文/拼音）'}
                    ],
                    nameUS: [
                        {required: true, message: '请输入名（英文/拼音）'}
                    ],
                    birthday: [
                        {required: true, message: '请选择出生日期', trigger: 'blur'}
                    ],
                    HKIDCard: [
                        {required: true, message: '请输入香港身份证号'},
                        {validator: validateIdCard, trigger: 'blur'}
                    ],
                    sex: [
                        {required: true, message: '请选择性别', trigger: 'change'}
                    ],
                    Marriage: [
                        {required: true, message: '请选择婚姻状态', trigger: 'change'}
                    ],
                    phone: [
                        {required: true, message: '请输入香港手机号码'},
                        {validator: validateMobile, trigger: 'blur'}
                    ],
                    email: [
                        {required: true, message: '请输入电子邮箱地址'},
                        {validator: validateEmail, trigger: 'blur'}
                    ],
                    familyMembers: [
                        {required: true, message: '请选择家庭成员人数', trigger: 'change'}
                    ],
                    accountType: [
                        {required: true, message: '请选择账户类型', trigger: 'change'}
                    ],
                    depositType: [
                        {required: true, message: '请选择入金方式', trigger: 'change'}
                    ],

                }
            };
        },
        methods: {
            saveUserInfo(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        saveUserInfo(this.userInfo).then(() => {
                            this.$message.success('保存成功');
                        });
                        //...请求接口后提示
                    }
                });
            },
            chooseMarket() {
                this.$router.replace({name: 'chooseMarket'});
            },
            goSubmitAddressInfo(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //...请求接口后跳转
                        saveUserInfo(this.userInfo);
                        this.$router.replace({name: 'addressInfo'});
                    } else {
                        //测试
                        this.$router.replace({name: 'addressInfo'});
                    }
                });
            }
        },
        mounted() {
            let allDictData = ['Marriage', 'currency_type', 'account_type', 'deposit_type'];
            let allPromise = allDictData.map(item => this.getGlobalData(item));
            Promise.all(allPromise).then(res => {
                console.log(res);
                this.maritalStatus = res[0].data.list;
                this.currencyTypes = res[1].data.list;
                this.accountTypes = res[2].data.list;
                this.depositTypes = res[3].data.list;
            }).then(() => {
                getUserInfo().then(res => {
                    console.log(res);
                })
            });
        }
    };
</script>

<style scoped lang="scss">

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
                margin-top: 80px;
                margin-bottom: 30px;
                font-size: 24px;
                font-family: SourceHanSansSC-Medium;
                font-weight: 500;
                color: #3B4859;
                line-height: 24px;
            }

            .userInfoForm {
                width: 780px;
                margin: 0 auto;
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
