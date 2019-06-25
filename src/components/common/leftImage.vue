<template>
    <div class="img-wrapper">
        <div class="logo"></div>
        <div class="img"></div>
        <div class="division"></div>
    </div>
</template>

<script>
  export default {
    name: 'leftImage'
  };
</script>

<style scoped lang="scss">
    .img-wrapper{
        width: 600px;
        float: left;
        position: relative;
        overflow: hidden;
    }
    .logo {
        width: 179px;
        height: 39px;
        //background: url("../../assets/images/logo.png") no-repeat center center;
        //background-size: contain;
    }
    .img{
        width: 500px;
        height: 300px;
        background: url("../../assets/images/signin/bg_signin.png") no-repeat  center center;
        background-size: contain;
    }
    .division{
        position: absolute;
        right: 0;
        top: 0;
        margin-left: 42px;
        width: 58px;
        height: 418px;
        background: url("../../assets/images/signin/bg_division.png") no-repeat  center center;
        background-size: contain;
    }

</style>
