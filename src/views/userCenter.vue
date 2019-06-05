<template>
    <div class="container">
        <header>
            <userCenterHeader></userCenterHeader>
        </header>
        <div class="content">
            <div class="title">个人中心</div>
            <div class="progress-ctn">
                <div class="progress active">
                    <div class="num">1</div>
                    <p>提交开户信息</p>
                </div>
                <div class="progress">
                    <div class="num">2</div>
                    <p>注入资金</p>
                </div>
                <div class="progress">
                    <div class="num">3</div>
                    <p>风险测评</p>
                </div>
                <div class="progress">
                    <div class="num">4</div>
                    <p>开始配置</p>
                </div>
            </div>
            <div v-if="openStatus == 0" class="btn-openAccount active" @click="goOpenAccount">请前往开户</div>
            <div v-else-if="openStatus == 1" class="review-ctn">
                <div class="img-review"></div>
                <div class="review-info">
                    <div class="review-result">您的资料已被提交，正在审核，请您耐心等待</div>
                    <div class="btn-openAccount disabled">请前往开户</div>
                    <div class="review-tip">如您需补交资料，客服人员将会与您联络。温馨提示：完成开户流程预计3-7天。<router-link to="/openAccount">查看开户指引</router-link></div>
                </div>

            </div>
            <div class="tips-ctn">
                <div class="tips-title">开户说明</div>
                <p class="tips-desc">
                    1. 在用户正式开启投资前，需要完成提交开户信息、注入资金、风险测评3个阶段的工作。整个过程需要填写资料、审核等程序，最快需X-Y个工作日，请耐心等待与配合。<br>
                    2. 提交开户信息后，平台需对资料进行审核。为完成香港证监会的监管要求，您将被邀请在香港与我司持牌人士进行线下当面见证，完成见证程序后方可继续开立账户。<br>
                    3. 证券账户开通后，方可注入资金。资金到账需等待一段时间。
                </p>
            </div>
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
          openStatus: 0
      };
    },
    computed: {},
    methods: {
        goOpenAccount() {
            this.$router.push('/openAccount');
        }
    },
    mounted() {
        setTimeout(()=>{
            this.openStatus = 1;
        },3000)
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
            &.disabled{
                background-color: #C6C8CC;
                &:before{
                    background-color: #9C9FA6;
                }
                &:after{
                    border-left-color: #9C9FA6;
                }
            }
            &.active{
                margin: 120px auto 0;
            }
        }
        .review-ctn{
            margin-top: 100px;
            position: relative;
            overflow: hidden;
            .img-review{
                float: left;
                width: 550px;
                height: 396px;
                background: url("~@/assets/images/userCenter/bg_toexamine@2x.png") no-repeat center center;
                @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
                    background-image: url("~@/assets/images/userCenter/bg_toexamine@3x.png");
                }
                background-size: contain;
            }
            .review-info{
                float: left;
                margin: 20px 0 0 130px;
                width: 500px;
                .review-result{
                    margin-bottom: 80px;
                    font-size:48px;
                    font-family:SourceHanSansSC-Medium;
                    font-weight:500;
                    color:rgba(20,20,22,1);
                    line-height: 70px;
                }
                .review-tip{
                    width: 400px;
                    margin-top: 20px;
                    font-size:16px;
                    font-family: SourceHanSansSC-Medium;
                    font-weight: 500;
                    color: rgba(213,29,38,1);
                    line-height: 24px;
                    a{
                        text-decoration: underline;
                        &:hover,
                        &:active,
                        &:link,
                        &:visited{
                            color: #D51D26;
                        }
                    }
                }
            }
        }
        .tips-ctn{
            margin-top: 100px;
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
