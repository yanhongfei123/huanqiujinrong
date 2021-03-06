import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Why = () => import('@/views/why.vue'); //首页
const Home = () => import('@/views/home.vue'); //首页
const Contact = () => import('@/views/contact.vue'); // 联系我们
const Introduction = () => import('@/views/introduction.vue'); //介绍
const Analysis = () => import('@/views/analysis/index.vue'); //分析
const Conditions = () => import('@/views/conditions.vue'); //条款声明
const Questions = () => import('@/views/questions.vue'); //问答
const Result = () => import('@/views/analysis/result.vue'); //
const Answer = () => import('@/views/analysis/answer.vue'); //
const Analys = () => import('@/views/analysis/analysis.vue'); //
const Find = () => import('@/views/find.vue'); //
const Article = () => import('@/views/article.vue'); //文章详情
const Organization = () => import('@/views/organization.vue'); //机构
const Product = () => import('@/views/products.vue'); //产品
const Operation = () => import('@/views/operation.vue'); //如何运作

const Register = () => import('@/views/signin/register.vue'); //注册
const Login = () => import('@/views/signin/login.vue'); //登录
const FindPwd = () => import('@/views/signin/findPwd.vue'); //忘记密码

const UserCenter = () => import('@/views/userCenter/index.vue'); //个人中心
const MyAccount = () => import('@/views/userCenter/myAccount.vue'); //个人中心-我的账户
const Guide = () => import('@/views/userCenter/guide.vue'); //个人中心-入金指引
const RemittanceAccount = () => import('@/views/userCenter/remittanceAccount.vue'); //个人中心-我的汇款账户
const DepositNotice = () => import('@/views/userCenter/depositNotice.vue'); //个人中心-存款通知
const ExtractFunds = () => import('@/views/userCenter/extractFunds.vue'); //个人中心-提取资金
const FundRecords = () => import('@/views/userCenter/fundRecords.vue'); //个人中心-资金记录

const Setting = () => import('@/views/setting/index.vue'); //个人设置
const Information = () => import('@/views/setting/information.vue'); //个人设置-个人资料
const ResetLoginPas = () => import('@/views/setting/resetLoginPas.vue'); //个人设置-修改登录密码
const ResetTranPas = () => import('@/views/setting/resetTranPas.vue'); //个人设置-修改交易密码
const CustomerFeedback = () => import('@/views/setting/customerFeedback.vue'); //个人设置-用户反馈

const MessageCenter = () => import('@/views/messageCenter/index.vue'); //消息中心
const Announcement = () => import('@/views/messageCenter/announcement.vue'); //消息中心-站内公告
const InformationPush = () => import('@/views/messageCenter/informationPush.vue'); //消息中心-资讯推送
const MyMessage = () => import('@/views/messageCenter/myMessage.vue'); //消息中心-我的消息

const SetTransPas = () => import('@/views/setTransactionPas.vue'); //设置交易密码
const RiskTest = () => import('@/views/riskTest.vue'); //风险评测
const RiskTestResult = () => import('@/views/riskTestResult.vue'); //风险评测结果
const AccountPreView = () => import('@/views/accountPreView.vue'); //账户总览
const AssetsConfig = () => import('@/views/assetsConfig.vue'); // 资产配置

const InvestCombination = () => import('@/views/investCombination/index.vue'); //投资组合
const AccountDetail = () => import('@/views/investCombination/accountDetail.vue'); //组合详情
const InvestRecords = () => import('@/views/investCombination/investRecords.vue'); //投资记录
const HistoricalPerformance = () => import('@/views/investCombination/history.vue'); //历史表现
const CombinedAnalysis = () => import('@/views/investCombination/combinedAnalysis.vue'); //组合分析

const OpenAccount = () => import('@/views/openAccount/index.vue'); //开户
const ChooseMarket = () => import('@/views/openAccount/chooseMarket.vue'); //开户-选择市场
const UserInfo = () => import('@/views/openAccount/userInfo.vue'); //开户-提交个人信息第一步
const AddressInfo = () => import('@/views/openAccount/addressInfo.vue'); //开户-提交个人信息第二步
const RegulatoryInfo = () => import('@/views/openAccount/regulatoryInfo.vue'); //开户-规管信息
const TaxStatement = () => import('@/views/openAccount/taxStatement.vue'); //开户-税务声明
const DisClosure = () => import('@/views/openAccount/disClosure.vue'); //开户-协议披露
const UploadInfo = () => import('@/views/openAccount/uploadInfo.vue'); //开户-上传证件
const Witness = () => import('@/views/openAccount/witness.vue'); //开户-见证

const routes = [
	{
	    path: '/why',
		name: 'why',
	    component: Why,
	},
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/findPwd',
        name: 'findPwd',
        component: FindPwd,
    },
    {
        path: '/accountPreView',
        name: 'accountPreView',
        component: AccountPreView,
    },
    {
        path: '/assetsConfig',
        name: 'assetsConfig',
        component: AssetsConfig,
    },
    {
        path: '/investCombination',
        name: 'investCombination',
        redirect: '/investCombination/accountDetail',
        component: InvestCombination,
        children: [
            {
                path: 'accountDetail',
                name: 'accountDetail',
                component: AccountDetail,
            },
            {
                path: 'investRecords',
                name: 'investRecords',
                component: InvestRecords,
            },
            {
                path: 'history',
                name: 'history',
                component: HistoricalPerformance,
            },
            {
                path: 'combinedAnalysis',
                name: 'combinedAnalysis',
                component: CombinedAnalysis,
            },

        ]
    },
    {
        path: '/userCenter',
        name: 'userCenter',
        redirect: '/userCenter/myAccount',
        component: UserCenter,
        children: [{
            path: 'myAccount',
            name: 'myAccount',
            component: MyAccount,
        },
            {
                path: 'guide',
                name: 'guide',
                component: Guide,
            },
            {
                path: 'remittanceAccount',
                name: 'remittanceAccount',
                component: RemittanceAccount,
            },
            {
                path: 'depositNotice',
                name: 'depositNotice',
                component: DepositNotice,
            },
            {
                path: 'extractFunds',
                name: 'extractFunds',
                component: ExtractFunds,
            },
            {
                path: 'fundRecords',
                name: 'fundRecords',
                component: FundRecords,
            },
        ]
    },
    {
        path: '/setting',
        name: 'setting',
        redirect: '/setting/information',
        component: Setting,
        children: [{
            path: 'information',
            name: 'information',
            component: Information,
        },
            {
                path: 'resetTranPas',
                name: 'resetTranPas',
                component: ResetTranPas,
            },
            {
                path: 'resetLoginPas',
                name: 'resetLoginPas',
                component: ResetLoginPas,
            },
            {
                path: 'customerFeedback',
                name: 'customerFeedback',
                component: CustomerFeedback,
            },
        ]
    },
    {
        path: '/messageCenter',
        name: 'messageCenter',
        redirect: '/messageCenter/announcement',
        component: MessageCenter,
        children: [{
            path: 'announcement',
            name: 'announcement',
            component: Announcement,
        },
            {
                path: 'informationPush',
                name: 'informationPush',
                component: InformationPush,
            },
            {
                path: 'myMessage',
                name: 'myMessage',
                component: MyMessage,
            },
        ]
    },
    {
        path: '/openAccount',
        name: 'openAccount',
        redirect: '/openAccount/chooseMarket',
        component: OpenAccount,
        children: [
            {
                path: 'chooseMarket',
                name: 'chooseMarket',
                component: ChooseMarket,
            },
            {
                path: 'userInfo',
                name: 'userInfo',
                component: UserInfo,
            },
            {
                path: 'addressInfo',
                name: 'addressInfo',
                component: AddressInfo,
            },
            {
                path: 'regulatoryInfo',
                name: 'regulatoryInfo',
                component: RegulatoryInfo,
            },
            {
                path: 'taxStatement',
                name: 'taxStatement',
                component: TaxStatement,
            },
            {
                path: 'disClosure',
                name: 'disClosure',
                component: DisClosure,
            },
            {
                path: 'uploadInfo',
                name: 'uploadInfo',
                component: UploadInfo,
            },
            {
                path: 'witness',
                name: 'witness',
                component: Witness,
            }
        ]
    },
    {
        path: '/setTransPas',
        name: 'setTransPas',
        component: SetTransPas,
    },
    {
        path: '/riskTest',
        name: 'riskTest',
        component: RiskTest,
    },
    {
        path: '/riskTestResult',
        name: 'riskTestResult',
        component: RiskTestResult,
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
    {
        path: '*',
        redirect: '/home',
    },
    {
        path: '/operation',
        name: 'operation',
        component: Operation,
    },
    {
        path: '/product',
        name: 'product',
        component: Product,
    },
    {
        path: '/organization',
        name: 'organization',
        component: Organization,
    },
    {
        path: '/analysis',
        name: 'analysis',
        component: Analysis,
        children: [{
            path: 'analys',
            name: 'analys',
            component: Analys,
        },
            {
                path: 'answer',
                name: 'answer',
                component: Answer,
            },
            {
                path: 'result',
                name: 'result',
                component: Result,
            }
        ]
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    },
    {
        path: '/introduction',
        name: 'introduction',
        component: Introduction,
    },
    {
        path: '/conditions',
        name: 'conditions',
        component: Conditions,
    },
    {
        path: '/questions',
        name: 'questions',
        component: Questions,
    },
    {
        path: '/find',
        name: 'find',
        component: Find,
    },
    {
        path: '/article/:id',
        name: 'article',
        component: Article,
    },
];

const vueRouter = new Router({
    mode: 'hash',//process.env.NODE_ENV === 'production' ? 'history' : 'hash',
    linkActiveClass: 'active', // 激活路由添加 'active' class名称
    routes: routes
});

export default vueRouter;
