<template>
    <div class="container">
        <header>
            <openAccountHeader></openAccountHeader>
        </header>
        <div class="content">
            <div class="title">{{$t('openAccount.userInfo.text1')}}</div>
            <div class="info-wrapper">
                <div class="tips" v-if="type==1"><label>* </label>{{$t('openAccount.userInfo.text2')}}</div>
                <div class="tips" v-else><label>* </label>{{$t('openAccount.userInfo.text3')}}</div>
                <openAccountSteps :step=step></openAccountSteps>
                <el-form title="合规信息" class="regulatoryInfoForm" :label-position="labelPosition" label-width="80px"
                         :model="regulatoryInfo" ref="regulatoryInfoForm" :rules="regulatoryInfoRules">
                    <div class="info-title title1">{{$t('openAccount.regulatoryInfo.text1')}}</div>
                    <el-form-item
                            :label="$t('openAccount.regulatoryInfo.text2')"
                            prop="compliance_1" required>
                        <el-radio-group v-model="regulatoryInfo.compliance_1">
                            <el-radio
                                    v-for="item in compliances_1"
                                    :key="item.dictCode"
                                    :label="item.dictValue">
                                    {{item | filterByLanguage('dictLabel')}}
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item
                            :label="$t('openAccount.regulatoryInfo.text3')"
                            prop="compliance_2" required>
                        <el-radio-group v-model="regulatoryInfo.compliance_2">
                            <el-radio
                                    v-for="item in compliances_2"
                                    :key="item.dictCode"
                                    :label="item.dictValue">
                                    {{item | filterByLanguage('dictLabel')}}
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item
                            :label="$t('openAccount.regulatoryInfo.text4')"
                            prop="compliance_3" required>
                        <el-radio-group v-model="regulatoryInfo.compliance_3">
                            <el-radio
                                    v-for="item in compliances_3"
                                    :key="item.dictCode"
                                    :label="item.dictValue">
                                    {{item | filterByLanguage('dictLabel')}}
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item
                            :label="$t('openAccount.regulatoryInfo.text5')"
                            prop="compliance_4" required>
                        <el-radio-group v-model="regulatoryInfo.compliance_4">
                            <el-radio
                                    v-for="item in compliances_4"
                                    :key="item.dictCode"
                                    :label="item.dictValue">
                                    {{item | filterByLanguage('dictLabel')}}
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item
                            :label="$t('openAccount.regulatoryInfo.text6')"
                            prop="compliance_5" required>
                        <el-radio-group v-model="regulatoryInfo.compliance_5">
                            <el-radio
                                    v-for="item in compliances_5"
                                    :key="item.dictCode"
                                    :label="item.dictValue">
                                    {{item | filterByLanguage('dictLabel')}}
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <div class="info-title">
                        {{$t('openAccount.regulatoryInfo.text7')}}<br>
                        <p>{{$t('openAccount.regulatoryInfo.text8')}}</p>
                    </div>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item :label="$t('openAccount.regulatoryInfo.text9')" prop="netAsset" required>
                                <el-select v-model="regulatoryInfo.netAsset" prop="addr" required>
                                    <el-input :placeholder="$t('openAccount.regulatoryInfo.text10')" style="width: 100%;" />
                                    <el-option
                                            v-for="item in netAssets"
                                            :key="item.dictCode"
                                            :label="item | filterByLanguage('dictLabel')"
                                            :value="item.dictValue">
                                    </el-option>
                                </el-select>
                                <p class="desc">{{$t('openAccount.regulatoryInfo.text11')}}</p>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item :label="$t('openAccount.regulatoryInfo.text12')" prop="netAssetFlow" required>
                                <el-select v-model="regulatoryInfo.netAssetFlow" :placeholder="$t('openAccount.regulatoryInfo.text13')"
                                           style="width: 100%;">
                                    <el-option
                                            v-for="item in netAssetFlows"
                                            :key="item.dictCode"
                                            :label="item | filterByLanguage('dictLabel')"
                                            :value="item.dictValue">
                                    </el-option>
                                </el-select>
                                <p class="desc">{{$t('openAccount.regulatoryInfo.text14')}}</p>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item :label="$t('openAccount.regulatoryInfo.text15')" prop="netAssetYear" required>
                                <el-select v-model="regulatoryInfo.netAssetYear" :placeholder="$t('openAccount.regulatoryInfo.text16')"
                                           style="width: 100%;">
                                    <el-option
                                            v-for="item in netAnnualIncome"
                                            :key="item.dictCode"
                                            :label="item | filterByLanguage('dictLabel')"
                                            :value="item.dictValue">
                                    </el-option>
                                </el-select>
                                <p class="desc">{{$t('openAccount.regulatoryInfo.text17')}}</p>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item :label="$t('openAccount.regulatoryInfo.text18')" prop="netAssetTotal" required>
                                <el-select v-model="regulatoryInfo.netAssetTotal" :placeholder="$t('openAccount.regulatoryInfo.text19')"
                                           style="width: 100%;">
                                    <el-option
                                            v-for="item in totalAssets"
                                            :key="item.dictCode"
                                            :label="item | filterByLanguage('dictLabel')"
                                            :value="item.dictValue">
                                    </el-option>
                                </el-select>
                                <p class="desc">{{$t('openAccount.regulatoryInfo.text20')}}</p>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <div class="info-title">{{$t('openAccount.regulatoryInfo.text21')}}</div>
                    <el-form-item
                            :label="$t('openAccount.regulatoryInfo.text22')"
                            prop="investTargetArr" required>
                        <el-checkbox-group class="invest-checkbox" v-model="regulatoryInfo.investTargetArr"
                                           @change="changeInvestTarget">
                            <el-checkbox
                                    v-for="item in investmentObjectives"
                                    :key="item.dictCode"
                                    :label="item.dictValue"
                            >{{item | filterByLanguage('dictLabel')}}</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <div class="info-title">{{$t('openAccount.regulatoryInfo.text23')}}</div>
                    <el-form-item
                            :label="$t('openAccount.regulatoryInfo.text24')"
                            required class="experience-form-item">
                        <el-row>
                            <el-checkbox :checked="true" :disabled=true>股票</el-checkbox>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <el-form-item prop="stockExperiencesTimes" class="margin-bottom-30">
                                    <el-select v-model="regulatoryInfo.stockExperiencesTimes" :placeholder="$t('openAccount.regulatoryInfo.text25')">
                                        <el-option
                                                v-for="item in numberOfTransactions"
                                                :key="item.dictCode"
                                                :label="item | filterByLanguage('dictLabel')"
                                                :value="item.dictValue">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item prop="stockExperiencesYears" class="margin-bottom-30">
                                    <el-select v-model="regulatoryInfo.stockExperiencesYears" :placeholder="$t('openAccount.regulatoryInfo.text26')">
                                        <el-option
                                                v-for="item in yearsOfTrading"
                                                :key="item.dictCode"
                                                :label="item | filterByLanguage('dictLabel')"
                                                :value="item.dictValue">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item prop="stockExperiencesKnowledgeLevel" class="margin-bottom-30">
                                    <el-select v-model="regulatoryInfo.stockExperiencesKnowledgeLevel"
                                               :placeholder="$t('openAccount.regulatoryInfo.text27')">
                                        <el-option
                                                v-for="item in knowledgeLevel"
                                                :key="item.dictCode"
                                                :label="item | filterByLanguage('dictLabel')"
                                                :value="item.dictValue">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-checkbox v-model="openzhaiquanTrade">{{$t('openAccount.regulatoryInfo.text28')}}</el-checkbox>
                        </el-row>
                        <el-row v-if="openzhaiquanTrade">
                            <el-col :span="8">
                                <el-form-item prop="zhaiquanExperiencesTimes" class="margin-bottom-30">
                                    <el-select v-model="regulatoryInfo.zhaiquanExperiencesTimes"
                                               :placeholder="$t('openAccount.regulatoryInfo.text25')">
                                        <el-option
                                                v-for="item in numberOfTransactions"
                                                :key="item.dictCode"
                                                :label="item | filterByLanguage('dictLabel')"
                                                :value="item.dictValue">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item prop="zhaiquanExperiencesYears" class="margin-bottom-30">
                                    <el-select v-model="regulatoryInfo.zhaiquanExperiencesYears"
                                               :placeholder="$t('openAccount.regulatoryInfo.text26')">
                                        <el-option
                                                v-for="item in yearsOfTrading"
                                                :key="item.dictCode"
                                                :label="item | filterByLanguage('dictLabel')"
                                                :value="item.dictValue">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item prop="zhaiquanExperiencesKnowledgeLevel" class="margin-bottom-30">
                                    <el-select v-model="regulatoryInfo.zhaiquanExperiencesKnowledgeLevel"
                                               :placeholder="$t('openAccount.regulatoryInfo.text27')">
                                        <el-option
                                                v-for="item in knowledgeLevel"
                                                :key="item.dictCode"
                                                :label="item | filterByLanguage('dictLabel')"
                                                :value="item.dictValue">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-checkbox v-model="openOptionTrade">{{$t('openAccount.regulatoryInfo.text29')}}</el-checkbox>
                        </el-row>
                        <el-row v-if="openOptionTrade">
                            <el-col :span="8">
                                <el-form-item prop="optionExperiencesTimes" class="margin-bottom-30">
                                    <el-select v-model="regulatoryInfo.optionExperiencesTimes"
                                               :placeholder="$t('openAccount.regulatoryInfo.text25')">
                                        <el-option
                                                v-for="item in numberOfTransactions"
                                                :key="item.dictCode"
                                                :label="item | filterByLanguage('dictLabel')"
                                                :value="item.dictValue">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item prop="optionExperiencesYears" class="margin-bottom-30">
                                    <el-select v-model="regulatoryInfo.optionExperiencesYears"
                                               :placeholder="$t('openAccount.regulatoryInfo.text26')">
                                        <el-option
                                                v-for="item in yearsOfTrading"
                                                :key="item.dictCode"
                                                :label="item | filterByLanguage('dictLabel')"
                                                :value="item.dictValue">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item prop="optionExperiencesKnowledgeLevel" class="margin-bottom-30">
                                    <el-select v-model="regulatoryInfo.optionExperiencesKnowledgeLevel"
                                               :placeholder="$t('openAccount.regulatoryInfo.text27')">
                                        <el-option
                                                v-for="item in knowledgeLevel"
                                                :key="item.dictCode"
                                                :label="item | filterByLanguage('dictLabel')"
                                                :value="item.dictValue">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-checkbox v-model="openFeaturesTrade">{{$t('openAccount.regulatoryInfo.text30')}}</el-checkbox>
                        </el-row>
                        <el-row v-if="openFeaturesTrade">
                            <el-col :span="8">
                                <el-form-item prop="featuresExperiencesTimes" class="margin-bottom-30">
                                    <el-select @change="change" v-model="regulatoryInfo.featuresExperiencesTimes"
                                               :placeholder="$t('openAccount.regulatoryInfo.text25')">
                                        <el-option
                                                v-for="item in numberOfTransactions"
                                                :key="item.dictCode"
                                                :label="item | filterByLanguage('dictLabel')"
                                                :value="item.dictValue">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item prop="featuresExperiencesYears" class="margin-bottom-30">
                                    <el-select v-model="regulatoryInfo.featuresExperiencesYears"
                                               :placeholder="$t('openAccount.regulatoryInfo.text26')">
                                        <el-option
                                                v-for="item in yearsOfTrading"
                                                :key="item.dictCode"
                                                :label="item | filterByLanguage('dictLabel')"
                                                :value="item.dictValue">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item prop="featuresExperiencesKnowledgeLevel" class="margin-bottom-30">
                                    <el-select v-model="regulatoryInfo.featuresExperiencesKnowledgeLevel"
                                               :placeholder="$t('openAccount.regulatoryInfo.text27')">
                                        <el-option
                                                v-for="item in knowledgeLevel"
                                                :key="item.dictCode"
                                                :label="item | filterByLanguage('dictLabel')"
                                                :value="item.dictValue">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form-item>
                </el-form>
                <div class="btn-wrap">
                    <div @click="next(false)" class="btn-item btn1">保存</div>
                    <div @click="prev" class="btn-item btn2">{{$t('openAccount.userInfo.text17')}}</div>
                    <div @click="next(true)" class="btn-item btn3">{{$t('openAccount.userInfo.text18')}}</div>
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
    import {saveUserRegulation, getUserRegulation} from '@/api/openAccount';


    export default {
        name: 'regulatoryInfo',
        components: {
            openAccountHeader,
            footerBar,
            openAccountSteps
        },
        data() {
            const validateNetCurrentAsset = (rule, value, callback) => {
                value = parseInt(value);
                if (value == 1) {
                    callback(new Error('开通账户要求净流动资产区间最低在“2-5万美元”'));
                } else {
                    if (value > parseInt(this.regulatoryInfo.netAsset)) {
                        callback(new Error('净流动资产不能大于净资产'));
                    } else if (value > parseInt(this.regulatoryInfo.netAssetTotal)) {
                        callback(new Error('净流动资产不能大于总资产'));
                    } else {
                        callback();
                    }
                }
            };

            const validateNetAsset = (rule, value, callback) => {
                value = parseInt(value);
                console.log(value);
                if (value == 1) {
                    callback(new Error('开通账户要求净资产区间最低在“2-5万美元”'));
                } else {
                    if (value < parseInt(this.regulatoryInfo.netAssetFlow)) {
                        callback(new Error('净资产不能小于净流动资产'));
                    } else if (value > parseInt(this.regulatoryInfo.netAssetTotal)) {
                        callback(new Error('净资产不能大于总资产'));
                    } else {
                        callback();
                    }
                }
            };

            const validateNetAssetYear = (rule, value, callback) => {
                if (parseInt(value) == 1) {
                    callback(new Error('开通账户要求净年收入区间最低在“4-4.5万美元”'));
                } else {
                    callback();
                }
            };

            const validateTotalAsset = (rule, value, callback) => {
                value = parseInt(value);
                if (value == 1) {
                    callback(new Error('开通账户要求总资产区间最低在“2-5万美元”'));
                } else if (value < parseInt(this.regulatoryInfo.netAssetFlow)) {
                    callback(new Error('总资产不能小于净流动资产'));
                } else if (value < parseInt(this.regulatoryInfo.netAsset)) {
                    callback(new Error('总资产不能小于净资产'));
                } else {
                    callback();
                }
            };

            const validateTradeYears = (rule, value, callback) => {
                if (value == undefined) {
                    callback(new Error('请选择交易年数'));
                }
                if (value < 1) {
                    callback(new Error('开通交易要求您的交易年数在2年以上'));
                } else {
                    callback();
                }
            };

            const validateTradeTimes = (rule, value, callback) => {
                if (value == undefined) {
                    callback(new Error('请选择每年交易次数'));
                    return;
                }
                callback();
            };

            const validateTradeKnowledgeLevel = (rule, value, callback) => {
                if (value == '' || value == undefined) {
                    callback(new Error('请选择知识水平'));
                    return;
                }
                if (value < 1) {
                    callback(new Error('开通交易要求您的投资经验为良好或丰富'));
                } else {
                    callback();
                }
            };

            const validateInvestTarget = (rule, value = [], callback) => {
                var arr = value.filter(item => item > 1);
                if (arr.length == 0) {
                    callback(new Error('投资目标需选择收入、增长、交易利润、投机或对冲中的任意一个'));
                } else {
                    callback();
                }
            };


            return {
                type: this.$route.query.type,
                step: 2,
                labelPosition: 'top',
                compliances_1 : '',
                compliances_2 : '',
                compliances_3 : '',
                compliances_4 : '',
                compliances_5 : '',
                netAssetFlows: {

                },
                netAssets: {

                },
                netAnnualIncome: {

                },
                totalAssets: {

                },
                yearsOfTrading: {

                },
                numberOfTransactions: {

                },
                knowledgeLevel: {

                },
                investmentObjectives: {

                },
                regulatoryInfoRules: {
                    compliance_1: [
                        {required: true, message: '请选择合规信息', trigger: 'change'}
                    ],
                    compliance_2: [
                        {required: true, message: '请选择合规信息', trigger: 'change'}
                    ],
                    compliance_3: [
                        {required: true, message: '请选择合规信息', trigger: 'change'}
                    ],
                    compliance_4: [
                        {required: true, message: '请选择合规信息', trigger: 'change'}
                    ],
                    compliance_5: [
                        {required: true, message: '请选择合规信息', trigger: 'change'}
                    ],
                    netAssetFlow: [
                        {required: true, message: '请选择净流动资产', trigger: 'blur'},
                        {required: true, validator: validateNetCurrentAsset, trigger: 'change'},
                    ],
                    netAsset: [
                        {required: true, message: '请选择净资产', trigger: 'blur'},
                        {validator: validateNetAsset, trigger: 'change'}
                    ],
                    netAssetYear: [
                        {required: true, message: '请选择净年收入', trigger: 'blur'},
                        {validator: validateNetAssetYear, trigger: 'change'}
                    ],
                    netAssetTotal: [
                        {required: true, message: '请选择总资产', trigger: 'blur'},
                        {validator: validateTotalAsset, trigger: 'change'}
                    ],
                    zhaiquanExperiencesYears: [
                        {validator: validateTradeYears, trigger: 'change'}
                    ],
                    zhaiquanExperiencesTimes: [
                        {validator: validateTradeTimes, trigger: 'change'}
                    ],
                    zhaiquankExperiencesKnowledgeLevel: [
                        {validator: validateTradeKnowledgeLevel, trigger: 'change'}
                    ],

                    stockExperiencesYears: [
                        {validator: validateTradeYears, trigger: 'change'}
                    ],
                    stockExperiencesTimes: [
                        {validator: validateTradeTimes, trigger: 'change'}
                    ],
                    stockExperiencesKnowledgeLevel: [
                        {validator: validateTradeKnowledgeLevel, trigger: 'change'}
                    ],

                    optionExperiencesYears: [
                        {validator: validateTradeYears, trigger: 'change'}
                    ],
                    optionExperiencesTimes: [
                        {validator: validateTradeTimes, trigger: 'change'}
                    ],
                    optionExperiencesKnowledgeLevel: [
                        {validator: validateTradeKnowledgeLevel, trigger: 'change'}
                    ],

                    featuresExperiencesYears: [
                        {validator: validateTradeYears, trigger: 'change'}
                    ],
                    featuresExperiencesTimes: [
                        {validator: validateTradeTimes, trigger: 'change'}
                    ],
                    featuresExperiencesKnowledgeLevel: [
                        {validator: validateTradeKnowledgeLevel, trigger: 'change'}
                    ],
                    investTargetArr: [
                        {required: true, message: '请选择投资目标', trigger: 'blur'},
                        {validator: validateInvestTarget, trigger: 'change'}
                    ],
                },
                openOptionTrade: false,
                openFeaturesTrade: false,
                openzhaiquanTrade: false,
                regulatoryInfo: {
                    compliance_1:'',
                    compliance_2:'',
                    compliance_3:'',
                    compliance_4:'',
                    compliance_5:'',
                    investTargetArr: [],
                    featuresExperiencesKnowledgeLevel: "",
                    featuresExperiencesTimes: '',
                    featuresExperiencesYears: "",
                    netAsset: "",
                    netAssetFlow: "",
                    netAssetTotal: "",
                    netAssetYear: "",
                    optionExperiencesKnowledgeLevel: "",
                    optionExperiencesTimes: "",
                    optionExperiencesYears: "",
                    stockExperiencesKnowledgeLevel: "",
                    stockExperiencesTimes: "",
                    stockExperiencesYears: "",
                    zhaiquanExperiencesKnowledgeLevel: "",
                    zhaiquanExperiencesTimes: "",
                    zhaiquanExperiencesYears: "",

                },
                params: [],
            };
        },
        methods: {
            change(value){
                 console.log(value)
            },
            changeInvestTarget(value) {
                console.log(value)
            },
            prev() {
				this.$router.replace({ name: 'addressInfo' , query: { type: this.type }});
            },
            next(flag) {
               console.log(this.regulatoryInfo);

                this.params = [
                    {
                        type: '1',
                        dictType: 'compliances_1',
                        dictDataValue: this.regulatoryInfo.compliance_1,
                        dictDataName: '',
                    },
                    {
                        type: '1',
                        dictType: 'compliances_2',
                        dictDataValue: this.regulatoryInfo.compliance_2,
                        dictDataName: '',
                    },
                    {
                        type: '1',
                        dictType: 'compliances_3',
                        dictDataValue: this.regulatoryInfo.compliance_3,
                        dictDataName: '',
                    },
                    {
                        type: '1',
                        dictType: 'compliances_4',
                        dictDataValue: this.regulatoryInfo.compliance_4,
                        dictDataName: '',
                    },
                    {
                        type: '1',
                        dictType: 'compliances_5',
                        dictDataValue: this.regulatoryInfo.compliance_5,
                        dictDataName: '',
                    },
                    {
                        type: '2',
                        dictType: 'net_assets',
                        dictDataValue: this.regulatoryInfo.netAsset,//
                        dictDataName: '',
                    },
                    {
                        type: '2',
                        dictType: 'net_asset_flows',
                        dictDataValue: this.regulatoryInfo.netAssetFlow,//
                        dictDataName: '',
                    },
                    {
                        type: '2',
                        dictType: 'net_annual_income',
                        dictDataValue: this.regulatoryInfo.netAssetYear,//
                        dictDataName: '',
                    },
                    {
                        type: '2',
                        dictType: 'total_assets',
                        dictDataValue: this.regulatoryInfo.netAssetTotal,//
                        dictDataName: '',
                    },
                    //股票
                    {
                        type: '4',
                        dictType: 'number_of_transactions',
                        dictDataValue: this.regulatoryInfo.stockExperiencesTimes,
                        dictDataName: '',
                    },
                    {
                        type: '4',
                        dictType: 'years_of_trading',
                        dictDataValue: this.regulatoryInfo.stockExperiencesYears,
                        dictDataName: '',
                    },
                    {
                        type: '4',
                        dictType: 'knowledge_level',
                        dictDataValue: this.regulatoryInfo.stockExperiencesKnowledgeLevel,
                        dictDataName: '',
                    },

                ];


                if (this.openzhaiquanTrade) {
                    this.params.push(

                    //债券
                    {
                        type: '5',
                        dictType: 'number_of_transactions',
                        dictDataValue: this.regulatoryInfo.zhaiquanExperiencesTimes,
                        dictDataName: '',
                    },
                    {
                        type: '5',
                        dictType: 'years_of_trading',
                        dictDataValue: this.regulatoryInfo.zhaiquanExperiencesYears,
                        dictDataName: '',
                    },
                    {
                        type: '5',
                        dictType: 'knowledge_level',
                        dictDataValue: this.regulatoryInfo.zhaiquanExperiencesKnowledgeLevel,
                        dictDataName: '',
                    }
                    )
                }

                this.regulatoryInfo.investTargetArr.map((item, index) => {
                    this.params.push(
                            {
                                type: '3',
                                dictType: 'Investment_objectives',
                                dictDataValue: item,
                                dictDataName: '',
                            },
                    )
                });

                if (this.openOptionTrade) {
                    this.params.push(
                    //期权
                    {
                        type: '6',
                        dictType: 'number_of_transactions',
                        dictDataValue: this.regulatoryInfo.optionExperiencesTimes,
                        dictDataName: '',
                    },
                    {
                        type: '6',
                        dictType: 'years_of_trading',
                        dictDataValue: this.regulatoryInfo.optionExperiencesYears,
                        dictDataName: '',
                    },
                    {
                        type: '6',
                        dictType: 'knowledge_level',
                        dictDataValue: this.regulatoryInfo.optionExperiencesKnowledgeLevel,
                        dictDataName: '',
                    }
                    );
                }

                if (this.openFeaturesTrade) {
                    this.params.push(
                    //期货
                    {
                        type: '7',
                        dictType: 'number_of_transactions',
                        dictDataValue: this.regulatoryInfo.featuresExperiencesTimes,
                        dictDataName: '',
                    },
                    {
                        type: '7',
                        dictType: 'years_of_trading',
                        dictDataValue: this.regulatoryInfo.featuresExperiencesYears,
                        dictDataName: '',
                    },
                    {
                        type: '7',
                        dictType: 'knowledge_level',
                        dictDataValue: this.regulatoryInfo.featuresExperiencesKnowledgeLevel,
                        dictDataName: '',
                    },
                    );
                }

                this.$refs['regulatoryInfoForm'].validate((valid) => {
                    if (valid) {
                        saveUserRegulation(this.params).then(res=>{
                           if(flag){
                               this.$router.replace({name: 'taxStatement', query: { type: this.type }});
                           } else{
                               this.$message.success('保存成功');
                           }
                        });
                    }
                });
            },
            getData(data, type){
                    var featuresO = {};
                    var features = data.map(item => {
                        if(item.type == type){
                            if(item.dictType == 'number_of_transactions'){
                                featuresO.times = item.dictDataValue
                            }
                            if(item.dictType == 'years_of_trading'){
                                featuresO.year = item.dictDataValue
                            }
                            if(item.dictType == 'knowledge_level'){
                                featuresO.level = item.dictDataValue
                            }
                        }
                    });
                    return featuresO;
            }
        },
        mounted() {
            /**
             * 账户持有人或同一居所内居住的任何直系亲属不是注册经纪-自营商；证券或商品经纪公司的雇员、董事或所有人；银行、对冲基金\交易所或其他金融服务公司的雇员 compliance_1
             账户持有人不是任何一家公共上市公司的董事，持10%股权的股东或决策人 compliance_2
             账户持有人不是监管或自我监管组织、交易所的成员、雇员或关联人 compliance_3
             账户持有人不是曾作为主体参与或发起过涉及其他经纪商或经销商的诉讼，仲裁或任何类型的争端解决程序的人 compliance_4
             账户持有者不是曾接受调查或被任何商品、证券交易所、监管机构或自我监管机构起诉的人 compliance_5
             净资产    net_assets
             净流动资产    net_asset_flows
             净年收入    net_annual_income
             总资产    total_assets
             交易次数    number_of_transactions
             交易年数    years_of_trading
             知识水平    knowledge_level
             投资目标    Investment_objectives
             */
            let allDictData = ['compliance_1', 'compliance_2', 'compliance_3', 'compliance_4', 'compliance_5', 'net_assets', 'net_asset_flows', 'net_annual_income', 'total_assets', 'number_of_transactions', 'years_of_trading', 'knowledge_level', 'Investment_objectives'];
            let allPromise = allDictData.map(item => this.getGlobalData(item));
            Promise.all(allPromise).then(res => {
                this.compliances_1 = res[0].data.list;
                this.compliances_2 = res[1].data.list;
                this.compliances_3 = res[2].data.list;
                this.compliances_4 = res[3].data.list;
                this.compliances_5 = res[4].data.list;

                this.netAssets = res[5].data.list;
                this.netAssetFlows = res[6].data.list;
                this.netAnnualIncome = res[7].data.list;
                this.totalAssets = res[8].data.list;
                this.numberOfTransactions = res[9].data.list;
                this.yearsOfTrading = res[10].data.list;
                this.knowledgeLevel = res[11].data.list;
                this.investmentObjectives = res[12].data.list;
            }).then(() => {
                getUserRegulation().then(res => {
                    var data = res.data;
                    if(data.length == 0){
                      return;
                    }
                    var investTargetArr = data.filter(item => item.type == 3).map(item => item.dictDataValue);

                    var feature1 = this.getData(data, 4);

                    var feature2 = this.getData(data, 5);
                    this.openzhaiquanTrade = !!Object.keys(feature2).length;

                    var feature3 = this.getData(data, 6);
                    this.openOptionTrade = !!Object.keys(feature3).length;

                    var feature4 = this.getData(data, 7);
                    this.openFeaturesTrade = !!Object.keys(feature4).length;

                    this.regulatoryInfo.investTargetArr = investTargetArr;

                    this.regulatoryInfo.compliance_1 = data.filter(item => item.dictType == 'compliances_1')[0].dictDataValue;
                    this.regulatoryInfo.compliance_2 = data.filter(item => item.dictType == 'compliances_2')[0].dictDataValue;
                    this.regulatoryInfo.compliance_3 = data.filter(item => item.dictType == 'compliances_3')[0].dictDataValue;
                    this.regulatoryInfo.compliance_4 = data.filter(item => item.dictType == 'compliances_4')[0].dictDataValue;
                    this.regulatoryInfo.compliance_5 = data.filter(item => item.dictType == 'compliances_5')[0].dictDataValue;

                    this.regulatoryInfo.netAsset = data.filter(item => item.dictType == 'net_assets')[0].dictDataValue;
                    this.regulatoryInfo.netAssetFlow = data.filter(item => item.dictType == 'net_asset_flows')[0].dictDataValue;
                    this.regulatoryInfo.netAssetYear = data.filter(item => item.dictType == 'net_annual_income')[0].dictDataValue;
                    this.regulatoryInfo.netAssetTotal = data.filter(item => item.dictType == 'total_assets')[0].dictDataValue;


                    this.regulatoryInfo.stockExperiencesTimes = feature1.times;
                    this.regulatoryInfo.stockExperiencesYears = feature1.year;
                    this.regulatoryInfo.stockExperiencesKnowledgeLevel = feature1.level;

                    if(this.openzhaiquanTrade){
                        this.regulatoryInfo.zhaiquanExperiencesTimes = feature2.times;
                        this.regulatoryInfo.zhaiquanExperiencesYears = feature2.year;
                        this.regulatoryInfo.zhaiquanExperiencesKnowledgeLevel = feature2.level;
                    }

                    if(this.openOptionTrade){
                        this.regulatoryInfo.optionExperiencesTimes = feature3.times;
                        this.regulatoryInfo.optionExperiencesYears = feature3.year;
                        this.regulatoryInfo.optionExperiencesKnowledgeLevel = feature3.level;
                    }

                    if(this.openFeaturesTrade){
                        this.regulatoryInfo.featuresExperiencesTimes = feature4.times;
                        this.regulatoryInfo.featuresExperiencesYears = feature4.year;
                        this.regulatoryInfo.featuresExperiencesKnowledgeLevel = feature4.level;
                    }
                  console.log(this.regulatoryInfo);
                })
            });
        }
    };
</script>
<style lang="scss">
    .invest-checkbox {
        position: relative;
        overflow: hidden;

        .el-checkbox {
            float: left;
            width: 260px;
            margin: 0;
            padding: 0;
        }

        .el-checkbox + .el-checkbox {
            margin-left: 0 !important;
        }

        .experience-form-item .el-select {
            width: 246px !important;
        }
    }

</style>

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

                p {
                    padding-top: 36px;
                    font-size: 18px;
                    font-family: SourceHanSansSC-Regular;
                    font-weight: 400;
                    color: #3C3F4D;
                    line-height: 32px;
                }
            }

            .regulatoryInfoForm {
                width: 780px;
                margin: 0 auto;

                p.desc {
                    padding-top: 10px;
                    font-size: 12px;
                    font-family: SourceHanSansSC-Regular;
                    font-weight: 400;
                    color: rgba(68, 72, 87, 0.5);
                    line-height: 16px;
                }
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
