<template>
    <div class="container">
        <header>
            <userCenterHeader></userCenterHeader>
        </header>
        <div class="content">
            <div class="title">个人中心</div>
        </div>
        <footerBar></footerBar>
    </div>
</template>

<script>
  import userCenterHeader from '@/components/header/userCenterHeader.vue';
  import footerBar from '@/components/footer/footer.vue';

  export default {
    name: 'userCenter',
    components: {
      userCenterHeader,
      footerBar,
    },
    data() {
      return {

      };
    },
    computed: {},
    methods: {

    },
    mounted() {

    },
  };
</script>

<style lang="scss" scoped>
    .container{
        .content{
            padding-top: 40px;
        }
        .title{
            width:160px;
            height: 58px;
            font-size: 40px;
            font-family: SourceHanSansSC-Medium;
            font-weight: 500;
            color: rgba(60,63,77,1);
            line-height: 58px;
        }

    }

</style>
