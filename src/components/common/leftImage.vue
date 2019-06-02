<template>
    <div class="img-wrapper">
        <div class="logo"></div>
        <div class="img"></div>
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
    }
    .logo {
        width: 179px;
        height: 39px;
        background: url("../../assets/images/logo.png") no-repeat center center;
        background-size: contain;
    }
    .img{
        width: 560px;
        height: 300px;
        background: url("../../assets/images/user/img-left.jpg  ") no-repeat  center center;
        background-size: contain;
    }

</style>
