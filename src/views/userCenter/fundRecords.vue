<template>
  <div class="fundRecords">
    <div class="top-wrap">
      <div class="label">{{$t('userCenter.fundRecords.text1')}}</div>
      <div class="date-wrap">
        <el-date-picker
          v-model="date"
          type="daterange"
          range-separator="～"
          :start-placeholder="$t('userCenter.fundRecords.text2')"
          :end-placeholder="$t('userCenter.fundRecords.text3')"
        ></el-date-picker>
      </div>
    </div>
    <table>
      <thead>
        <th>{{$t('userCenter.fundRecords.text4')}}</th>
        <th class="select-wrap">
          <span>{{$t('userCenter.fundRecords.text5')}}</span>
          <span class="icon"></span>
          <el-select @change="selectChange" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </th>
        <th>{{$t('userCenter.fundRecords.text6')}}</th>
        <th>{{$t('userCenter.fundRecords.text7')}}</th>
        <th>{{$t('userCenter.fundRecords.text8')}}</th>
      </thead>
      <tbody>
        <tr v-for="(val,index) in data" :key="index">
          <td>{{val.date}}</td>
          <td>{{val.type}}</td>
          <td>{{val.origin}}</td>
          <td>{{val.bi}}</td>
          <td>{{val.amount}}</td>
        </tr>
      </tbody>
    </table>
    <el-pagination
      @current-change="currentChange"
      background
      layout="prev, pager, next"
      :total="total/100"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "records",
  data() {
    return {
      total: 20000,
      date: [],
      options: [
        {
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
      data: [
        {
          date: "2019-04-30",
          type: "交易",
          origin: "BMO亚洲投资债",
          bi: "港币",
          amount: "352015255"
        },
        {
          date: "2019-04-30",
          type: "交易",
          origin: "BMO亚洲投资债",
          bi: "港币",
          amount: "352015255"
        },
        {
          date: "2019-04-30",
          type: "交易",
          origin: "BMO亚洲投资债",
          bi: "港币",
          amount: "352015255"
        },
        {
          date: "2019-04-30",
          type: "交易",
          origin: "BMO亚洲投资债",
          bi: "港币",
          amount: "352015255"
        }
      ]
    };
  },
  methods: {
    selectChange(item) {

    },
    currentChange(currentpage) {
      console.log(currentpage);
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.fundRecords {
  padding: 20px 0 40px;
  height: 100%;
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
