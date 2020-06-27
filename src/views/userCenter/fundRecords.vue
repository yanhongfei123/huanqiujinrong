<template>
	<div class="fundRecords">
		<div class="top-wrap">
			<div class="label">{{$t('userCenter.fundRecords.text1')}}</div>
			<div class="date-wrap">
				<el-date-picker @change="onChange" v-model="date" value-format="yyyy-MM-dd" type="daterange" range-separator="～"
				 :start-placeholder="$t('userCenter.fundRecords.text2')" :end-placeholder="$t('userCenter.fundRecords.text3')"></el-date-picker>
			</div>
		</div>
		<table>
			<thead>
				<th>{{$t('userCenter.fundRecords.text4')}}</th>
				<th class="select-wrap">
					<span>{{$t('userCenter.fundRecords.text5')}}</span>
					<!--          <span class="icon"></span>
          <el-select @change="selectChange" v-model="type" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select> -->
				</th>
				<!-- <th>{{$t('userCenter.fundRecords.text6')}}</th> -->
				<th>{{$t('userCenter.fundRecords.text7')}}</th>
				<th>{{$t('userCenter.fundRecords.text8')}}</th>
			</thead>
			<tbody>
				<tr v-for="(val,index) in data" :key="index">
					<td>{{val.create_time}}</td>
					<td>{{val.type}}</td>
					<td>{{val.currency}}</td>
					<td>{{val.money}}</td>
				</tr>
			</tbody>
		</table>
		<div class="nodata" v-if="data.length === 0">
			~暂无记录
		</div>
		<el-pagination v-if="total" @current-change="currentChange" background layout="prev, pager, next" :total="total/5"></el-pagination>

	</div>
</template>

<script>
	import {
		getUserWithdrawal
	} from "@/api/myAccount.js";
	var date = new Date().toLocaleDateString().replace(/\//g, '-');
	export default {
		name: "records",
		data() {
			return {
				total: 0,
				date: [date, date],
				type: '',
				pageNo: 1,
				pageSize: 5,
				value: "选项1",
				data: []
			};
		},
		methods: {
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
					//type: this.type,
					pageNo: this.pageNo,
					pageSize: this.pageSize,
				};
				getUserWithdrawal(params).then(res => {
					var {
						list,
						total
					} = res.data;
					//this.data = list;
					//this.total = total;
				});
			}
		},
		mounted() {
			this.onQueryList();
		}
	};
</script>
<style lang="scss" scoped>
	.fundRecords {
		padding: 20px 0 40px;
		height: 100%;
	}
	
	.nodata{
		text-align: center;
		padding-top: 100px;
		font-size: 20px;
	}

	.top-wrap {
		padding-right: 40px;
		display: flex;
		justify-content: space-between;
		align-content: flex-end;
	}

	.label {
		font-size: 20px;
		color: #141416;
		font-weight: bold;
	}

	table {
		width: 100%;
		margin-top: 20px;

		thead {
			background: rgba(20, 20, 22, 0.1);
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
				background: url("../../assets/images//icon_choose.png") no-repeat center;
				background-size: contain;
			}
		}
	}
</style>
