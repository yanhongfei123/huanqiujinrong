<template>
	<div class="container">
		<header>
			<openAccountHeader></openAccountHeader>
		</header>
		<div class="content">
			<div class="title">{{$t('openAccount.userInfo.text1')}}</div>
			<div class="info-wrapper">
				<div class="tips" v-if="$route.query.type==1"><label>* </label>{{$t('openAccount.userInfo.text2')}}</div>
				<div class="tips" v-else><label>* </label>{{$t('openAccount.userInfo.text3')}}</div>
				<openAccountSteps :step=step></openAccountSteps>
				<div class="info-title">{{$t('openAccount.userInfo.text4')}}</div>
				<el-form title="个人信息" class="userInfoForm" :label-position="labelPosition" label-width="80px" :model="userInfo" ref="userInfoForm"
				 :rules="userInfoRules">
					<el-row>
						<el-col style="width: 380px">
							<el-form-item label="姓（中文）:" prop="surnameChina" required>
								<el-input :placeholder="$t('openAccount.userInfo.text5')" v-model="userInfo.surnameChina"></el-input>
							</el-form-item>
						</el-col>
						<el-col style="width: 380px;margin-left: 20px;">
							<el-form-item label="名（中文）:" prop="nameChina" required>
								<el-input :placeholder="$t('openAccount.userInfo.text5')" v-model="userInfo.nameChina"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col style="width: 380px">
							<el-form-item label="姓（英文/拼音）:" prop="surnameUS" required>
								<el-input :placeholder="$t('openAccount.userInfo.text5')" v-model="userInfo.surnameUS"></el-input>
							</el-form-item>
						</el-col>
						<el-col style="width: 380px;margin-left: 20px;">
							<el-form-item label="名（英文/拼音）:" prop="nameUS" required>
								<el-input :placeholder="$t('openAccount.userInfo.text5')" v-model="userInfo.nameUS"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col style="width: 380px">
							<el-form-item label="出生日期:" prop="birthday" required>
								<el-date-picker type="date" :placeholder="$t('openAccount.userInfo.text6')" v-model="userInfo.birthday"
								 value-format="yyyy-MM-dd" style="width: 100%;" :editable=false></el-date-picker>
							</el-form-item>
						</el-col>
						<el-col style="width: 380px;margin-left: 20px;">
							<el-form-item :label="$t('openAccount.userInfo.text7')" prop="card" required>
								<el-input type="text" :placeholder="$t('openAccount.userInfo.text8')" v-model="userInfo.card"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col style="width: 380px">
							<el-form-item label="性别:" prop="sex" required>
								<el-select v-model="userInfo.sex" :placeholder="$t('openAccount.userInfo.text6')" style="width: 100%;">
									<el-option v-for="item in genders" :key="item.dictCode" :label="item | filterByLanguage('dictLabel')" :value="item.dictValue">
									</el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col style="width: 380px;margin-left: 20px;">
							<el-form-item :label="$t('openAccount.userInfo.text9')" prop="marriage" required>
								<el-select v-model="userInfo.marriage" :placeholder="$t('openAccount.userInfo.text6')" style="width: 100%;">
									<el-option v-for="item in maritalStatus" :key="item.dictCode" :label="item | filterByLanguage('dictLabel')"
									 :value="item.dictValue">
									</el-option>
								</el-select>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col style="width: 380px">
							<el-form-item :label="$t('openAccount.userInfo.text10')" prop="phone" required>
								<el-input :placeholder="$t('openAccount.userInfo.text11')" v-model="userInfo.phone"></el-input>
							</el-form-item>
						</el-col>
						<el-col style="width: 380px;margin-left: 20px;">
							<el-form-item :label="$t('openAccount.userInfo.text12')" prop="email" required>
								<el-input :placeholder="$t('openAccount.userInfo.text13')" v-model="userInfo.email"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col style="width: 380px">
							<el-form-item :label="$t('openAccount.userInfo.text14')" prop="familyMembers" required>
								<el-select v-model="userInfo.familyMembers" :placeholder="$t('openAccount.userInfo.text6')" style="width: 100%;">
									<el-option v-for="item in familyMembers" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col style="width: 380px;margin-left: 20px;">
							<el-form-item :label="$t('openAccount.userInfo.text15')" prop="currency" required>
								<el-select v-model="type" :placeholder="$t('openAccount.userInfo.text6')" style="width: 100%;">
									
									<el-option v-show="type == '美元'" key="128" label="美元"
									 value="2">
									</el-option>
									
									<el-option v-show="type == '港币'" key="127" label="港币"
									 value="1">
									</el-option>
								</el-select>
							</el-form-item>
						</el-col>
					</el-row>

					<el-row>
						<el-col style="width: 380px">
							<el-form-item :label="$t('openAccount.userInfo.text16')" prop="accountType" required>
								<el-select v-model="userInfo.accountType" :placeholder="$t('openAccount.userInfo.text6')" style="width: 100%;">
									<el-option v-for="item in accountTypes" :key="item.dictCode" :label="item | filterByLanguage('dictLabel')"
									 :value="item.dictValue">
									</el-option>
									
								</el-select>
							</el-form-item>
						</el-col>
						<el-col style="width: 380px;margin-left: 20px;">
							<el-form-item label="入金方式:" prop="depositType" required>
								<el-select v-model="userInfo.depositType" :placeholder="$t('openAccount.userInfo.text6')" style="width: 100%;">
									<el-option v-for="item in depositTypes" :key="item.dictCode" :label="item | filterByLanguage('dictLabel')"
									 :value="item.dictValue">
									</el-option>
								</el-select>
							</el-form-item>
						</el-col>
					</el-row>

				</el-form>
				<div class="btn-wrap">
					<div @click="saveUserInfo('userInfoForm')" class="btn-item btn1">保存</div>
					<div @click="chooseMarket" class="btn-item btn2">{{$t('openAccount.userInfo.text17')}}</div>
					<div @click="next('userInfoForm')" class="btn-item btn3">{{$t('openAccount.userInfo.text18')}}</div>
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
	import {
		getUserInfo,
		saveUserInfo
	} from '@/api/openAccount';

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
				type: this.$route.query.type == 1 ? '港币' : '美元',
				step: 1,
				labelPosition: 'top',
				genders: [],
				maritalStatus: [],
				familyMembers: [{
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
				depositTypes: [{
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
					currency: this.$route.query.type
				},
				userInfoRules: {
					surnameChina: [{
						required: true,
						message: "请输入姓（中文）"
					}, ],
					nameChina: [{
						required: true,
						message: '请输入名（中文）'
					}],
					surnameUS: [{
						required: true,
						message: '请输入姓（英文/拼音）'
					}],
					nameUS: [{
						required: true,
						message: '请输入名（英文/拼音）'
					}],
					birthday: [{
						required: true,
						message: '请选择出生日期',
						trigger: 'blur'
					}],
					card: [{
							required: true,
							message: '请输入香港身份证号'
						},
						{
							validator: validateIdCard,
							trigger: 'blur'
						}
					],
					sex: [{
						required: true,
						message: '请选择性别',
						trigger: 'change'
					}],
					marriage: [{
						required: true,
						message: '请选择婚姻状态',
						trigger: 'change'
					}],
					phone: [{
							required: true,
							message: '请输入香港手机号码'
						},
						{
							validator: validateMobile,
							trigger: 'blur'
						}
					],
					email: [{
							required: true,
							message: '请输入电子邮箱地址'
						},
						{
							validator: validateEmail,
							trigger: 'blur'
						}
					],
					familyMembers: [{
						required: true,
						message: '请选择家庭成员人数',
						trigger: 'change'
					}],
					currency: [{
						required: true,
						message: '请选择基础货币',
						trigger: 'change'
					}],
					accountType: [{
						required: true,
						message: '请选择账户类型',
						trigger: 'change'
					}],
					depositType: [{
						required: true,
						message: '请选择入金方式',
						trigger: 'change'
					}],

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
				this.$router.replace({
					name: 'chooseMarket'
				});
			},
			next(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						//...请求接口后跳转
						saveUserInfo(this.userInfo).then(() => {
							this.$router.replace({
								name: 'addressInfo',
								query: {
									type: this.$route.query.type
								}
							});
						});
					}
				});
			}
		},
		mounted() {
			let allDictData = ['sys_user_sex', 'Marriage', 'currency_type', 'account_type', 'deposit_type'];
			let allPromise = allDictData.map(item => this.getGlobalData(item));
			Promise.all(allPromise).then(res => {
				this.genders = res[0].data.list;
				this.maritalStatus = res[1].data.list;
				this.currencyTypes = res[2].data.list.filter(item => item.dictValue != this.type);
				console.log(this.currencyTypes)

				this.accountTypes = res[3].data.list;
				this.depositTypes = res[4].data.list;
			}).then(() => {
				getUserInfo().then(res => {
					var data = res.data;
					if (data) {
						data.currency = this.$route.query.type;
						if (data.accountType) {
							data.accountType = data.accountType + '';
						} else {
							data.accountType = '1'
						}
						this.userInfo = Object.assign({}, data);
						console.log(this.userInfo)
					}
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
