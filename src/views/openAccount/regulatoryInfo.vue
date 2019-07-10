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
                <el-form title="合规信息" class="regulatoryInfoForm" :label-position="labelPosition" label-width="80px"
                         :model="regulatoryInfo" ref="regulatoryInfoForm" :rules="regulatoryInfoRules">
                    <div class="info-title title1">一. 合规信息</div>
                    <el-form-item
                            label="1. 账户持有人或同一居所内居住的任何直系亲属不是注册经纪-自营商；证券或商品经纪公司的雇员、董事或所有人；银行、对冲基金/交易所或其他金融服务公司的雇员"
                            prop="compliance_1" required>
                        <el-radio-group v-model="regulatoryInfo.compliance_1">
                            <el-radio :label="0">是</el-radio>
                            <el-radio :label="1">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item
                            label="2. 账户持有人不是任何一家公共上市公司的董事，持10%股权的股东或决策人"
                            prop="compliance_2" required>
                        <el-radio-group v-model="regulatoryInfo.compliance_2">
                            <el-radio :label="0">是</el-radio>
                            <el-radio :label="1">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item
                            label="3. 账户持有人不是监管或自我监管组织、交易所的成员、雇员或关联人"
                            prop="compliance_3" required>
                        <el-radio-group v-model="regulatoryInfo.compliance_3">
                            <el-radio :label="0">是</el-radio>
                            <el-radio :label="1">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item
                            label="4. 账户持有人不是曾作为主体参与或发起过涉及其他经纪商或经销商的诉讼，仲裁或任何类型的争端解决程序的人"
                            prop="compliance_4" required>
                        <el-radio-group v-model="regulatoryInfo.compliance_4">
                            <el-radio :label="0">是</el-radio>
                            <el-radio :label="1">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item
                            label="5. 账户持有者不是曾接受调查或被任何商品、证券交易所、监管机构或自我监管机构起诉的人"
                            prop="compliance_5" required>
                        <el-radio-group v-model="regulatoryInfo.compliance_5">
                            <el-radio :label="0">是</el-radio>
                            <el-radio :label="1">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <div class="info-title">
                        二. 资产与收入<br>
                        <p>请在下面提供财务信息，我公司合规部门将通过这些信息确定您是否有资格交易现在或将来所选的投资产品。我们绝不会将您的信息出售给第三方或致电建议您投资。</p>
                    </div>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="净资产:" prop="netAsset" required>
                                <el-select v-model="regulatoryInfo.netAsset" placeholder="请选择净资产" style="width: 100%;">
                                    <el-option
                                            v-for="item in netAssets"
                                            :key="item.dictCode"
                                            :label="item | filterByLanguage('dictLabel')"
                                            :value="item.dictValue">
                                    </el-option>
                                </el-select>
                                <p class="desc">净资产：您拥有的所有资产的总价值，减去您所欠部分（包括所有抵押贷款及债务）。</p>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item label="净流动资产:" prop="netAssetFlow" required>
                                <el-select v-model="regulatoryInfo.netAssetFlow" placeholder="请选择净流动资产"
                                           style="width: 100%;">
                                    <el-option
                                            v-for="item in netAssetFlows"
                                            :key="item.dictCode"
                                            :label="item | filterByLanguage('dictLabel')"
                                            :value="item.dictValue">
                                    </el-option>
                                </el-select>
                                <p class="desc">净流动资产：您拥有的能够快速转换为现金的资产的总价值。</p>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="净年收入:" prop="netAssetYear" required>
                                <el-select v-model="regulatoryInfo.netAssetYear" placeholder="请选择净年收入"
                                           style="width: 100%;">
                                    <el-option
                                            v-for="item in netAnnualIncome"
                                            :key="item.dictCode"
                                            :label="item | filterByLanguage('dictLabel')"
                                            :value="item.dictValue">
                                    </el-option>
                                </el-select>
                                <p class="desc">净年收入：您一年的盈收总额减去税款或其他扣款。这些扣款包括医疗保险，退休金，法律支持费用。</p>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item label="总资产（含负债、贷款）:" prop="netAssetTotal" required>
                                <el-select v-model="regulatoryInfo.netAssetTotal" placeholder="请选择总资产"
                                           style="width: 100%;">
                                    <el-option
                                            v-for="item in totalAssets"
                                            :key="item.dictCode"
                                            :label="item | filterByLanguage('dictLabel')"
                                            :value="item.dictValue">
                                    </el-option>
                                </el-select>
                                <p class="desc">总资产：您拥有的流动资产及非流动资产的总价值，包括但不限于现金、股权投资、固定资产和无形资产。</p>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <div class="info-title">三. 投资目标</div>
                    <el-form-item
                            label="1.您的以下选择决定了您能够获得批准进行交易的投资产品，需至少包含收入、增长、交易利润、投机或对冲中的任意一个。请勾选所有适用选项。「可多选」"
                            prop="investTargetArr" required>
                        <el-checkbox-group class="invest-checkbox" v-model="regulatoryInfo.investTargetArr"
                                           @change="changeInvestTarget">
                            <el-checkbox
                                    v-for="item in investmentObjectives"
                                    :key="item.dictCode"
                                    :label="item | filterByLanguage('dictLabel')"
                                    :value="item.dictValue"
                            ></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <div class="info-title">四. 投资经验</div>
                    <el-form-item
                            label="1.选择您想要交易的投资产品，并选择您对各产品的经验及交易知识。 如希望使用智能投顾服务，您至少需要选择“股票”。"
                            required class="experience-form-item">
                        <el-row>
                            <el-checkbox :checked="true" :disabled=true>股票</el-checkbox>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <el-form-item prop="stockExperiencesTimes" class="margin-bottom-30">
                                    <el-select v-model="regulatoryInfo.stockExperiencesTimes" placeholder="请选择每年交易次数">
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
                                    <el-select v-model="regulatoryInfo.stockExperiencesYears" placeholder="请选择交易年数">
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
                                               placeholder="请选择知识水平">
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
                            <el-checkbox v-model="openOptionTrade">期权</el-checkbox>
                        </el-row>
                        <el-row v-if="openOptionTrade">
                            <el-col :span="8">
                                <el-form-item prop="optionExperiencesTimes" class="margin-bottom-30">
                                    <el-select v-model="regulatoryInfo.optionExperiencesTimes" placeholder="请选择每年交易次数">
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
                                    <el-select v-model="regulatoryInfo.optionExperiencesYears" placeholder="请选择交易年数">
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
                                               placeholder="请选择知识水平">
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
                            <el-checkbox v-model="openFeaturesTrade">期货</el-checkbox>
                        </el-row>
                        <el-row v-if="openFeaturesTrade">
                            <el-col :span="8">
                                <el-form-item prop="featuresExperiencesTimes" class="margin-bottom-30">
                                    <el-select v-model="regulatoryInfo.featuresExperiencesTimes"
                                               placeholder="请选择每年交易次数">
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
                                    <el-select v-model="regulatoryInfo.featuresExperiencesYears" placeholder="请选择交易年数">
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
                                               placeholder="请选择知识水平">
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
                    <div @click="saveRegulatoryInfo('regulatoryInfoForm')" class="btn-item btn1">保存</div>
                    <div @click="goSubmitAddressInfo" class="btn-item btn2">上一步</div>
                    <div @click="goTaxStatement('regulatoryInfoForm')" class="btn-item btn3">下一步</div>
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
                if (value == 10) {
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
                if (value == 10) {
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
                if (parseInt(value) == 10) {
                    callback(new Error('开通账户要求净年收入区间最低在“4-4.5万美元”'));
                } else {
                    callback();
                }
            };

            const validateTotalAsset = (rule, value, callback) => {
                value = parseInt(value);
                if (value == 10) {
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

            const validateInvestTarget = (rule, value, callback) => {
                if (value.indexOf(0) == -1 && value.indexOf(1) == -1) {
                    callback(new Error('开通交易需要交易利润和投机至少选择一个'));
                } else {
                    callback();
                }
            };

            return {
                type: this.$route.query.type,
                step: 2,
                labelPosition: 'top',
                netAssetFlows: {
                    10: '少于2万美金',
                    11: '2-5万美金',
                    12: '5-7.5万美金',
                    13: '7.5-10万美金',
                    14: '10-25万美金',
                    15: '25-50万美金',
                    16: '50-100万美金',
                    17: '100-500万美金',
                    18: '多于500万美金',
                },
                netAssets: {
                    10: '少于2万美金',
                    11: '2-5万美金',
                    12: '5-7.5万美金',
                    13: '7.5-10万美金',
                    14: '10-25万美金',
                    15: '25-50万美金',
                    16: '50-100万美金',
                    17: '100-500万美金',
                    18: '500-1,000万美金',
                    19: '1,000-2,500万美金',
                    20: '2,500-3,000万美金',
                    21: '3,000-5,000万美金',
                    22: '多于5,000万美金'
                },
                netAnnualIncome: {
                    10: '少于4万美金',
                    11: '4-4.5万美金',
                    12: '4.5-5万美金',
                    13: '5-10万美金',
                    14: '10-15万美金',
                    15: '15-25万美金',
                    16: '25-50万美金',
                    17: '50-100万美金',
                    18: '多于100万美金'
                },
                totalAssets: {
                    10: '少于2万美金',
                    11: '2-5万美金',
                    12: '5-7.5万美金',
                    13: '7.5-10万美金',
                    14: '10-25万美金',
                    15: '25-50万美金',
                    16: '50-100万美金',
                    17: '100-500万美金',
                    18: '500-1,000万美金',
                    19: '1,000-2,500万美金',
                    20: '2,500-3,000万美金',
                    21: '3,000-5,000万美金',
                    22: '多于5,000万美金'
                },
                yearsOfTrading: {
                    0: '1年',
                    1: '2年',
                    2: '3年',
                    3: '4年',
                    4: '5年',
                    5: '6-10年',
                    6: '10年及以上'
                },
                numberOfTransactions: {
                    2: '1-10次',
                    3: '11-25次',
                    4: '26-50次',
                    5: '51-100次',
                    1: '大于100次',
                },
                knowledgeLevel: {
                    0: '受限',
                    1: '良好',
                    2: '丰富'
                },
                investmentObjectives: {
                    0: '投机',
                    1: '交易利润',
                    2: '增长',
                    3: '对冲',
                    4: '资本保值',
                    5: '股息收入'
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
                regulatoryInfo: {}
            };
        },
        methods: {
            changeInvestTarget() {

            },
            saveRegulatoryInfo(formName) {//添加规管
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //...请求接口后提示
                        this.$message.success('保存成功');
                        saveUserRegulation
                    }
                });
            },
            goSubmitAddressInfo() {
                this.$router.replace({name: 'addressInfo'});
            },
            goTaxStatement(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //...请求接口后跳转
                        this.$router.replace({name: 'taxStatement'});
                    } else {
                        //测试
                        this.$router.replace({name: 'taxStatement'});
                    }
                });
            }
        },
        mounted() {
            /**
             * 账户持有人或同一居所内居住的任何直系亲属不是注册经纪-自营商；证券或商品经纪公司的雇员、董事或所有人；银行、对冲基金\交易所或其他金融服务公司的雇员    compliance_1
             账户持有人不是任何一家公共上市公司的董事，持10%股权的股东或决策人    compliance_2
             账户持有人不是监管或自我监管组织、交易所的成员、雇员或关联人    compliance_3
             账户持有人不是曾作为主体参与或发起过涉及其他经纪商或经销商的诉讼，仲裁或任何类型的争端解决程序的人    compliance_4
             账户持有者不是曾接受调查或被任何商品、证券交易所、监管机构或自我监管机构起诉的人    compliance_5
             净资产    net_assets
             净流动资产    net_asset_flows
             净年收入    net_annual_income
             总资产    total_assets
             交易次数    number_of_transactions
             交易年数    years_of_trading
             知识水平    knowledge_level
             投资目标    Investment_objectives
             */
            let allDictData = ['net_assets', 'net_asset_flows', 'net_annual_income', 'total_assets', 'number_of_transactions', 'years_of_trading', 'knowledge_level', 'Investment_objectives'];
            let allPromise = allDictData.map(item => this.getGlobalData(item));
            Promise.all(allPromise).then(res => {
                console.log(res);
                this.netAssets = res[0].data.list;
                this.netAssetFlows = res[1].data.list;
                this.netAnnualIncome = res[2].data.list;
                this.totalAssets = res[3].data.list;
                this.numberOfTransactions = res[4].data.list;
                this.yearsOfTrading = res[5].data.list;
                this.knowledgeLevel = res[6].data.list;
                this.investmentObjectives = res[7].data.list;
            }).then(() => {
                getUserRegulation().then(res => {
                    console.log(res);
                    this.userInfo = res.data;
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
