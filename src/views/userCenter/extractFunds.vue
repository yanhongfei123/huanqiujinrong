<template>
	<div class="extractFunds">
		<div class="cash-wrap">
			<div class="label">一.{{$t('userCenter.extractFunds.text1')}}</div>
			<div class="wrap clear">
				<div class="item item1 fl">
					<div class="type">{{$t('userCenter.extractFunds.text2')}}</div>
					<div class="amount">
						HKD
						<span>0</span>
					</div>
				</div>
				<div class="item fl">
					<div class="type">{{$t('userCenter.extractFunds.text3')}}</div>
					<div class="amount">
						USD
						<span>0</span>
					</div>
				</div>
			</div>
		</div>
		<div class="info-wrap">
			<div class="label">二.{{$t('userCenter.extractFunds.text4')}}</div>
			<div class="info">{{$t('userCenter.extractFunds.text5')}}</div>
			<div class="info">
				{{$t('userCenter.extractFunds.text6')}}
				<span> {{$t('userCenter.extractFunds.text7')}}</span>
			</div>
			<div class="info">{{$t('userCenter.extractFunds.text8')}}</div>
		</div>
		<div class="btm-wrap">
			<div class="label">三. {{$t('userCenter.extractFunds.text9')}}</div>

			<div class="q-list">
				<div class="q-item" v-for="(val,index) in fqList" :key="index">
					<div :class="[val.isshow?'show':'']" class="icon"></div>
					<div @click="val.isshow=!val.isshow" class="q-title">{{val | filterByLanguage('helpTitle')}}</div>
					<div :class="[val.isshow?'height-auto':'']" class="q-answer">{{val | filterByLanguage('helpContent')}}</div>
				</div>
			</div>

		</div>
		<div class="label">四.{{$t('userCenter.extractFunds.text10')}}</div>
		<div @click="showmask=true" class="submit">{{$t('userCenter.extractFunds.text11')}}</div>
		<div v-if="showmask" class="mask">
			<div class="content">
				<div @click="showmask=false" class="close"></div>
				<div class="title">{{$t('userCenter.extractFunds.text12')}}</div>
				<div class="des tl">{{$t('userCenter.extractFunds.text13')}}</div>
				<div class="pas-wrap">
					<el-input type="password" maxlength="6" :placeholder="$t('userCenter.extractFunds.text16')" v-model="password"
					 clearable></el-input>
				</div>
				<div class="tips">
					<span v-show="showerror">{{$t('userCenter.extractFunds.text14')}}</span>
				</div>
				<el-button @click="confirm" class="confirm" type="primary">{{$t('userCenter.extractFunds.text15')}}</el-button>
			</div>
		</div>
	</div>
</template>
<script>
	import {
		getQuestionList
	} from "@/api/article";
	import { updateUserWithdrawal } from "@/api/myAccount";
	import { Loading, Message } from 'element-ui';
	export default {
		name: "extractFunds",
		components: {},
		data() {
			return {
				password: "",
				showmask: false,
				showerror: false,
				fqList: []
			};
		},
		methods: {
			confirm(){
				if(this.password == ''){
					Message({
					  message: '请输入交易密码',
					  type: 'warning',
					  duration: 1 * 1000
					});
					return;
				}
				var params = {
					dealPwd: this.password,
				};
				updateUserWithdrawal(params).then(res=>{
					Message({
					  message: '提取成功',
					  type: 'success',
					  duration: 1 * 1000
					});
					this.showmask = false;
				});
			},
			getQuestionList(pageNum) {
				getQuestionList({
					helpType: '1',
					pageNum,
				}).then(res => {
					var list = res.data.list;
					list.map(item => {
						item.isshow = false;
						return item;
					});
					this.fqList = list;
					this.total = res.data.pages;
				});
			},
		},
		mounted: function() {
			this.getQuestionList(1);
		}
	};
</script>
<style lang="scss" scoped>
	.label {
		font-size: 20px;
		color: #141416;
		font-weight: bold;
		margin: 40px 0 20px;
	}

	.wrap {
		margin-top: 40px;

		.item {
			width: 175px;
			text-align: center;
		}

		.item1 {
			margin-right: 240px;
		}

		.type {
			font-size: 16px;
			color: rgba(20, 20, 22, 0.5);
		}

		.amount {
			font-size: 24px;
			font-weight: bold;
			color: rgba(20, 20, 22, 1);
			line-height: 32px;
			margin-top: 35px;
		}
	}

	.info-wrap {
		.info {
			font-size: 14px;
			font-weight: 500;
			color: rgba(20, 20, 22, 0.8);
			line-height: 20px;
			margin-bottom: 20px;

			span {
				color: #D51D26;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}

	.btm-wrap {
		.q-title {
			font-size: 16px;
			font-weight: 500;
			color: rgba(20, 20, 22, 0.8);
			line-height: 24px;
			margin-bottom: 20px;
			cursor: pointer;
		}

		.q-answer {
			height: 0;
			overflow-y: auto;
			font-size: 14px;
			color: rgba(60, 63, 77, 1);
			line-height: 20px;

			&.height-auto {
				max-height: 100px;
				min-height: 60px;
				margin-bottom: 20px;
				text-align: justify;
				transition: height 0.3s;
				-webkit-transition: height 0.3s;
			}
		}

		.q-list {
			margin-left: 35px;
		}

		.q-item {
			position: relative;
		}

		.icon {
			position: absolute;
			top: 4px;
			left: -35px;
			width: 16px;
			height: 16px;
			background: url("../../assets/images/user_center/btn_jia.png");
			background-size: contain;
		}

		.show {
			background: url("../../assets/images/user_center/btn_expand.png");
		}
	}

	.submit {
		width: 400px;
		height: 80px;
		line-height: 80px;
		margin: 60px auto 40px;
		font-size: 28px;
		color: #fff;
		text-align: center;
		opacity: 0.9;
		cursor: pointer;
		background: url("../../assets/images/other_btn/btn_red400.png") no-repeat center;
		background-size: 100%;

		&:hover {
			opacity: 1;
		}
	}

	.mask {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);

		.content {
			position: relative;
			width: 416px;
			height: 280px;
			padding: 20px 78px;
			background: #fff;
			border-radius: 8px;
			text-align: center;
			position: absolute;
			top: 50%;
			left: 50%;
			margin: -140px 0 0 -208px;
			box-shadow: 0px 0px 12px 3px #666;
		}

		.title {
			font-size: 18px;
			color: #333;
			margin-bottom: 20px;
			font-weight: bold;
		}

		.des {
			font-size: 14px;
			font-weight: 400;
			color: rgba(102, 102, 102, 1);
			line-height: 21px;
			margin-bottom: 20px;
		}

		.tips {
			height: 40px;
			line-height: 40px;
			font-size: 12px;
			color: #d51d26;
			text-align: left;
		}

		.close {
			width: 24px;
			height: 24px;
			position: absolute;
			right: 10px;
			top: 10px;
			background: url("../../assets/images/icon_delete.png");
			background-size: contain;
		}

		.pas-wrap {
			box-shadow: 0px 0px 8px 1px rgba(239, 242, 247, 1);
		}

		.confirm {
			width: 100%;
			height: 36px;
		}
	}
</style>
