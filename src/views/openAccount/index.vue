<template>
    <div class="container">
        <header>
            <userCenterHeader></userCenterHeader>
        </header>
        <div class="content">
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
            width: 1180px;
            margin: 0 auto;
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
        .progress-ctn{
            padding-top: 75px;
            position: relative;
            overflow: hidden;
            width: 1000px;
            margin: 0 auto;
            text-align: center;
            .progress{
                float: left;
                width: 250px;
                border-top: 1px solid #F0F3F7;
                .num{
                    width:40px;
                    height:40px;
                    margin: -20px auto 0;
                    line-height: 40px;
                    border-radius: 50%;
                    background: rgba(240,243,247,1);
                    box-shadow:0 5px 20px 0 rgba(240,243,247,1);
                }
                p{
                    margin-top: 4px;
                    font-size: 16px;
                    font-family:PingFangSC-Regular;
                    font-weight: 400;
                    color: #8392A7;
                    line-height: 24px;
                }
                &.active{
                    border-top: 1px solid #D51D26;
                    .num{
                        border: 1px solid #D51D26;
                        background-color: #fff;
                    }
                    p{
                        color: #D51D26;
                    }
                }
            }
        }

        .btn-openAccount{
            position: relative;
            width: 400px;
            height: 80px;
            margin: 120px auto 0;
            text-align: center;
            line-height: 80px;
            font-size: 28px;
            font-weight: 500;
            font-family:PingFangSC-Medium;
            color: #fff;
            background: #d51d26;
            cursor: pointer;
            &:before{
                position: absolute;
                top: 0;
                left: 0;
                content: "";
                width: 50px;
                height: 80px;
                background-color: #be1a21;
            }
            &:after{
                position: absolute;
                top: 0;
                left: 50px;
                content: "";
                width: 0;
                height: 0;
                border: 40px solid transparent;
                border-left-color: #be1a21;
            }
        }

        .tips-ctn{
            .tips-title{
                height: 33px;
                font-size: 24px;
                font-family: PingFangSC-Medium;
                font-weight:500;
                color:rgba(20,20,22,1);
                line-height:33px;
            }
            .tips-desc{
                margin: 40px 0 100px;
                height: 100px;
                font-size: 14px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: rgba(20,20,22,1);
                line-height: 33px;
            }
        }
    }

</style>
