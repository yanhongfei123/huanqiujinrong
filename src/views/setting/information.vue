<template>
  <div class="information-wrap">
    <div class="item">
      <div class="label">姓名：</div>
      <div class="info">{{name}}</div>
    </div>
    <div class="item">
      <div class="label">手机：</div>
      <div class="info">{{mobile}}</div>
    </div>
    <div class="item">
      <div class="label">邮箱：</div>
      <div class="info">{{email}}</div>
    </div>
    <div class="line"></div>
    <div class="item">
      <div class="label">开户状态</div>
      <div class="info">{{openStatus}}</div>
    </div>
    <div class="item">
      <div class="label">出生日期：</div>
      <div class="info">{{birthday}}</div>
    </div>
    <div class="item">
      <div class="label">雇用状态：</div>
      <div class="info">{{employmentStatus}}</div>
    </div>
    <div class="item">
      <div class="label">公司名称：</div>
      <div class="info">{{company}}</div>
    </div>
    <div class="item">
      <div class="label">职位名称：</div>
      <div class="info">{{professionalName}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      name:'王胜利',
      mobile:'+85 12345678',
      email:'12345678@gmail.com',
      openStatus:'已开户',
      birthday:'1980-01-01',
      employmentStatus:'受雇',
      company:'City Bank',
      professionalName:'Manager'
    }
  }
};
</script>
<style lang="scss">
.information-wrap {
  padding-top: 40px;
  .item{
    display: flex;
    margin-bottom: 40px;
  }
  .label{
    width: 200px;
    font-size: 16px;
    color: #141416;
    opacity: 0.8;
  }
  .info{
    color: #333
  }
  .line{
    width:600px;
    height:1px;
    margin-bottom: 40px;
    background:rgba(68,72,87,1);
  }
}
</style>
