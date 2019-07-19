<template>
  <div class="information-wrap">
    <div class="item">
      <div class="label">{{$t('setting.information.text1')}}</div>
      <div class="info">{{name}}</div>
    </div>
    <div class="item">
      <div class="label">{{$t('setting.information.text2')}}</div>
      <div class="info">{{mobile}}</div>
    </div>
    <div class="item">
      <div class="label">{{$t('setting.information.text3')}}</div>
      <div class="info">{{email}}</div>
    </div>
    <div class="line"></div>
    <div class="item">
      <div class="label">{{$t('setting.information.text4')}}</div>
      <div class="info">{{openStatus}}</div>
    </div>
    <div class="item">
      <div class="label">{{$t('setting.information.text5')}}</div>
      <div class="info">{{birthday}}</div>
    </div>
    <div class="item">
      <div class="label">{{$t('setting.information.text6')}}</div>
      <div class="info">{{filterType(employmentStatus)}}</div>
    </div>
    <div class="item">
      <div class="label">{{$t('setting.information.text7')}}</div>
      <div class="info">{{company}}</div>
    </div>
    <div class="item">
      <div class="label">{{$t('setting.information.text8')}}</div>
      <div class="info">{{professionalName}}</div>
    </div>
  </div>
</template>
<script>
import { filterByLanguage } from '@/filters/index.js'
import {getUserInfo} from '@/api';
import {filterOpenStatus} from '@/utils';
export default {
  data() {
    return {
      name: "",
      mobile: "",
      email: "",
      openStatus: "",
      birthday: "",
      employmentStatus: "",
      company: "",
      professionalName: "",
    };
  },
  mounted(){
    this.getGlobalData("sys_employment").then(res=>{
      this.typeList = res.data.list;
      this.getUserInfo();
    })

  },
  methods:{
     filterType(status){
       if(status){
          var val = this.typeList.filter((item) => item.dictValue == status)[0];
          return filterByLanguage(val, 'dictLabel');
       }
    },
    getUserInfo(){
      getUserInfo().then(res=>{
        var data = res.data;
        this.name = ((data.surnameChina || '') + (data.nameChina || '')) || ((data.surnameUS || '') + (data.nameUS || ''));
        this.mobile = data.phone;
        this.email = data.email;
        this.openStatus = filterOpenStatus(data.state);
        this.birthday = data.birthday.substr(0,10);
        this.company = data.employmentCompay;
        this.professionalName = data.post;
        this.employmentStatus = data.employmentType;
      })
    }
  }
};
</script>
<style lang="scss">
.information-wrap {
  padding-top: 40px;
  .item {
    display: flex;
    margin-bottom: 40px;
  }
  .label {
    width: 200px;
    font-size: 16px;
    color: #141416;
    opacity: 0.8;
  }
  .info {
    color: #333;
  }
  .line {
    width: 600px;
    height: 1px;
    margin-bottom: 40px;
    background: rgba(68, 72, 87, 1);
  }
}
</style>
