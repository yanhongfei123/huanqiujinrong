<template>
    <div class="container">
        <header>
            <openAccountHeader></openAccountHeader>
        </header>
        <div class="content">
            <div class="title">底层资产选择</div>
            <div class="desc">为了给您提供更加多样化的投资选择，在原来的产品SmartGlobal的基础上推出了以2000+支美国ETF为底层的产品SmartGlobal
                Max，具体两者的信息可通过如下对比图做深入的了解。您可以根据自己的偏好，选择转移您的账户至SmartGlobal Max或者保留在原來的SmartGlobal中。
            </div>
            <div class="market-wrapper">
                <div class="market-item market-us">
                    <div class="market-img"></div>
                    <p class="market-info">美国上市交易的ETF</p>
                    <p class="market-info">投资门槛 50,000 USD</p>
                    <div class="btn btn-confirm" @click="selectMarket(1)" data-type="1">确认开户</div>
                </div>
                <div class="market-item market-hk">
                    <div class="market-img"></div>
                    <p class="market-info">香港上市交易的ETF</p>
                    <p class="market-info">投资门槛 100,000 HKD</p>
                    <div class="btn btn-confirm" @click="selectMarket(2)" data-type="2">确认开户</div>
                </div>
            </div>
        </div>
        <footerBar></footerBar>
    </div>
</template>

<script>
  import openAccountHeader from '@/components/header/openAccountHeader.vue';
  import footerBar from '@/components/footer/footer.vue';

  export default {
    name: 'chooseMarket',
    components: {
      openAccountHeader,
      footerBar,
    },
    data() {
      return {};
    },
    computed: {},
    methods: {
      selectMarket(type) {
        console.log(type);
        this.$router.replace({
          name: 'userInfo',
          query: { type: type }
        });
      }
    },
    mounted() {
    },
  };
</script>

<style lang="scss" scoped>
    .container {
        .content {
            width: 1180px;
            margin: 0 auto;
            padding-top: 40px;
        }

        .title {
            height: 58px;
            font-size: 40px;
            font-family: SourceHanSansSC-Medium;
            font-weight: 500;
            color: rgba(60, 63, 77, 1);
            line-height: 58px;
        }

        .desc {
            padding: 40px 0 60px;
            font-size: 16px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(20, 20, 22, 1);
            line-height: 22px;
        }

        .market-wrapper {
            padding: 0 120px 100px;
            position: relative;
            overflow: hidden;
            text-align: center;

            .market-item {
                width: 340px;
                float: left;

                &.market-us {
                    .market-img {
                        background-image: url("~@/assets/images/openAccount/bg-market-us@2x.png");
                        @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
                            background-image: url("~@/assets/images/openAccount/bg-market-us@3x.png");
                        }
                    }
                }

                &.market-hk {
                    margin-left: 260px;

                    .market-img {
                        background-image: url("~@/assets/images/openAccount/bg-market-hk@2x.png");
                        @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
                            background-image: url("~@/assets/images/openAccount/bg-market-hk@3x.png");
                        }
                    }
                }

                .market-img {
                    margin-bottom: 22px;
                    width: 340px;
                    height: 210px;
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-size: contain;
                }

                .market-info {
                    padding-top: 14px;
                }

                .btn {
                    margin: 40px auto 0;
                    position: relative;
                    width: 240px;
                    height: 60px;
                    text-align: center;
                    line-height: 60px;
                    font-size: 18px;
                    font-weight: 500;
                    font-family: PingFangSC-Medium;
                    color: #fff;
                    background: #d51d26;
                    cursor: pointer;
                    &:after {
                        position: absolute;
                        top: 0;
                        left: 0;
                        content: "";
                        width: 0;
                        height: 0;
                        border: 30px solid transparent;
                        border-left-color: #be1a21;
                    }
                }
            }
        }

    }

</style>
