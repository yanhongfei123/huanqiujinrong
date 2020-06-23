<template>
	<div class="invest-records">
		<div class="date-wrap" v-show="activeName != 'statement'">
			<el-date-picker v-model="date" @change="onChange" value-format="yyyy-MM-dd" type="daterange" range-separator="～"
			 :start-placeholder="$t('userCenter.fundRecords.text2')" :end-placeholder="$t('userCenter.fundRecords.text3')"></el-date-picker>
		</div>
		<el-tabs v-model="activeName">
			<el-tab-pane name="history" :label="$t('investCombination.historyRecords.tabHistory')">
				<div class="records">
					<table>
						<thead>
							<th>{{$t('investCombination.historyRecords.history.date')}}</th>
							<th class="select-wrap">
								<span>{{$t('investCombination.historyRecords.history.assetType')}}</span>
								<!--                            <span class="icon"></span>
                            <el-select @change="selectChange" v-model="value"
                                       :placeholder="$t('investCombination.historyRecords.history.placeholder')">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                ></el-option>
                            </el-select> -->
							</th>
							<th>{{$t('investCombination.historyRecords.history.asset')}}</th>
							<th>{{$t('investCombination.historyRecords.history.currency')}}</th>
							<th>{{$t('investCombination.historyRecords.history.amount')}}</th>
						</thead>
						<tbody>
							<tr v-for="(val,index) in historyList" :key="index">
								<td>{{val.date}}</td>
								<td>{{val.secType}}</td>
								<td>{{val.origin}}</td>
								<td>{{val.bi}}</td>
								<td>{{val.strike}}</td>
							</tr>
						</tbody>
					</table>
					<el-pagination v-if="total" @current-change="currentChange" background layout="prev, pager, next" :total="total/5"></el-pagination>
				</div>
				<div class="nodata" v-if="historyList.length === 0">
					~暂无记录
				</div>
			</el-tab-pane>
			<el-tab-pane name="statement" :label="$t('investCombination.historyRecords.tabStatement')">
				<div class="records">
					<table>
						<thead>
							<th>{{$t('investCombination.historyRecords.statement.date')}}</th>
							<th>{{$t('investCombination.historyRecords.statement.desc')}}</th>
							<th>{{$t('investCombination.historyRecords.statement.amount')}}</th>
						</thead>
						<tbody>
							<tr v-for="(val,index) in statementList" :key="index">
								<td>{{val.date}}</td>
								<td>{{val.title}}</td>
								<td>{{val.amount}}</td>
							</tr>
						</tbody>
					</table>
					<el-pagination @current-change="currentChange" background layout="prev, pager, next" :total="total/100"></el-pagination>
				</div>
			</el-tab-pane>
			<el-tab-pane name="billing" :label="$t('investCombination.historyRecords.tabBilling')">
				<div class="records billingRecords">
					<table>
						<thead>
							<th>{{$t('investCombination.historyRecords.billing.date')}}</th>
							<th>{{$t('investCombination.historyRecords.billing.desc')}}</th>
							<th>{{$t('investCombination.historyRecords.billing.amount')}}</th>
							<th>{{$t('investCombination.historyRecords.billing.payingAmount')}}</th>
						</thead>
						<tbody>
							<tr v-for="(val,index) in billingList" :key="index">
								<td>{{val.date}}</td>
								<td>{{val.desc}}</td>
								<td>{{val.amount}}</td>
								<th>{{val.payingAmount}}</th>
							</tr>
							<tr>
								<td>{{$t('investCombination.historyRecords.billing.total')}}</td>
								<td></td>
								<td></td>
								<td>{{ totalAmount }}</td>
							</tr>
						</tbody>
						<div class="line"></div>
					</table>
					<el-pagination @current-change="currentChange" background layout="prev, pager, next" :total="total/100"></el-pagination>
				</div>
			</el-tab-pane>
		</el-tabs>
		<div class="title">{{$t('investCombination.historyRecords.descTitle')}}</div>
		<div class="desc">
			<p>{{$t('investCombination.historyRecords.descContent1')}}</p>
			<p>C ＝ D × 0.8% ÷ N</p>
			<p>{{$t('investCombination.historyRecords.descContent2')}}</p>
			<p>{{$t('investCombination.historyRecords.descContent3')}}</p>
			<p>{{$t('investCombination.historyRecords.descContent4')}}</p>
			<p>{{$t('investCombination.historyRecords.descContent5')}}</p>
		</div>

	</div>
</template>

<script>
	import {
		getUserContract
	} from "@/api/myAccount.js";
	var date = new Date().toLocaleDateString().replace(/\//g, '-');
	export default {
		name: "investRecords",
		data() {
			return {
				activeName: 'history',
				total: 0,
				date: [date, date],
				type: '',
				pageNo: 1,
				pageSize: 5,
				options: [{
						value: "选项1",
						label: "黄金糕"
					},
					{
						value: "选项2",
						label: "双皮奶"
					},
					{
						value: "选项3",
						label: "蚵仔煎"
					},
					{
						value: "选项4",
						label: "龙须面"
					},
					{
						value: "选项5",
						label: "北京烤鸭"
					}
				],
				value: "选项1",
				historyList: [],
				statementList: [{
						date: "2019-04-30",
						title: "2019年4月投资咨询费",
						amount: "35，540.90"
					},
					{
						date: "2019-04-30",
						title: "2019年4月投资咨询费",
						amount: "35，540.90"
					},
					{
						date: "2019-04-30",
						title: "2019年4月投资咨询费",
						amount: "35，540.90"
					},
					{
						date: "2019-04-30",
						title: "2019年4月投资咨询费",
						amount: "35，540.90"
					}
				],
				billingList: [{
						date: "2019-04-30",
						desc: "投资咨询费",
						amount: "15.05",
						payingAmount: "3554090"
					},
					{
						date: "2019-04-30",
						desc: "投资咨询费",
						amount: "15.05",
						payingAmount: "3554090"
					},
					{
						date: "2019-04-30",
						desc: "投资咨询费",
						amount: "15.05",
						payingAmount: "3554090"
					},
				]
			}
		},
		computed: {
			totalAmount() {
				let total = 0;
				this.billingList.map(item => {
					total += parseInt(item.payingAmount);
				});
				return total;
			}
		},
		methods: {
			// selectChange(item) {
			//     this.showLoading();
			//     setTimeout(() => {
			//         this.hideLoading();
			//     }, 2000);
			// },
			showLoading() {
				this.loading = this.$loading({
					lock: true,
					// text: 'Loading',
					// spinner: 'el-icon-loading',
					background: "rgba(0, 0, 0, 0.7)"
				});
			},
			hideLoading() {
				this.loading.close();
			},
			selectChange(item) {
				console.log(item)
				this.onQueryList();
			},
			onChange(e) {
				this.onQueryList();
			},
			currentChange(currentpage) {
				this.pageNo = currentpage;
				this.onQueryList();
			},
			onQueryList() {
				var params = {
					startTime: this.date[0],
					endTime: this.date[1],
					pageNo: 1,
					pageSize: 5,
				};
				getUserContract(params).then(res => {
					var {
						list,
						total
					} = res.data;
					this.historyList = list;
					this.total = total;
				});
			}
		},
		mounted() {
			this.onQueryList();
		}
	}
</script>
<style scoped lang="scss">
	.nodata{
		text-align: center;
		font-size: 20px;
		padding-bottom: 100px;
	}
	.invest-records {
		position: relative;

		.date-wrap {
			position: absolute;
			top: 14px;
			right: 20px;
			width: 250px;
			z-index: 1;
		}

		.records {
			padding-bottom: 60px;
			height: 100%;

			.label {
				font-size: 20px;
				color: #141416;
				font-weight: bold;
			}

			table {
				position: relative;
				width: 100%;

				thead {
					background: rgba(20, 20, 22, 0.0504);
				}

				tbody {
					background: #fff;
				}

				th,
				td {
					font-size: 20px;
					height: 60px;
					line-height: 60px;
					text-align: center;
				}

				.select-wrap {
					position: relative;

					.icon {
						position: absolute;
						right: 10px;
						top: 36%;
						z-index: 0;
						width: 20px;
						height: 20px;
						background: url("../../assets/images/icon_choose.png") no-repeat center;
						background-size: contain;
					}
				}

				.line {
					height: 1px;
					background: #444857;
					position: absolute;
					left: 40px;
					right: 40px;
					bottom: 60px;
				}
			}
		}

		.billingRecords {
			tr:last-child {
				font-family: PingFangSC-Semibold;
				font-weight: 600;
				margin: 0 40px;
				background-color: #fff;
			}
		}

		.title {
			font-size: 24px;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(20, 20, 22, 1);
			line-height: 33px;
		}

		.desc {
			padding-top: 20px;
			font-size: 14px;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(20, 20, 22, 1);
			line-height: 20px;

			p {
				padding-top: 20px;
			}
		}
	}
</style>
