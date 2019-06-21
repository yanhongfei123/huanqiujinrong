<template>
    <div class="account-preview">
        <header>
            <userCenterHeader path="/investCombination/accountDetail"></userCenterHeader>
        </header>
        <div @click="hideMenu($event)" class="content">
            <div class="com-width">
                <div class="title">{{$t('userCenter.text1')}}</div>
                <div class="main">
                    <div class="wrap1">
                        <div class="item">
                            <div class="label">{{$t('investCombination.labelAmount')}}</div>
                            <div class="amount">3,000,000.00</div>
                        </div>
                        <div class="item">
                            <div class="label">
                                <span>
                                    {{$t('investCombination.labelIncome')}}
                                    <tips top="0" right="-20px">{{$t('investCombination.tipIncome')}}</tips>
                                </span>
                            </div>
                            <div class="amount">3,000,000.00</div>
                        </div>
                        <div class="item">
                            <div class="label">
                                <span>收益率（%）
                                    <tips top="0" right="-20px">{{$t('investCombination.tipIncomeRate')}}</tips>
                                </span>
                            </div>
                            <div class="amount">3,000,000.00</div>
                        </div>
                    </div>
                    <div class="tab-wrap">
                        <div @click="changeTab('/investCombination/accountDetail')"
                             class="tab-item"
                             :class="[$route.path==='/investCombination/accountDetail'?'active':'']">{{$t('investCombination.tabDetail')}}</div>
                        <div @click="changeTab('/investCombination/accountDetail')"
                             class="tab-item"
                             :class="[$route.path==='/investCombination/accountDetail'?'active':'']">{{$t('investCombination.tabHistory')}}</div>
                        <div @click="changeTab('/investCombination/accountDetail')"
                             class="tab-item"
                             :class="[$route.path==='/investCombination/accountDetail'?'active':'']">{{$t('investCombination.tabAnalysis')}}</div>
                        <div @click="changeTab('/investCombination/investRecords')"
                             class="tab-item"
                             :class="[$route.path==='/investCombination/investRecords'?'active':'']">{{$t('investCombination.tabRecord')}}</div>
                    </div>
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <footerBar></footerBar>
    </div>
</template>
<script>
    import Tips from "@/components/tips.vue";
    import userCenterHeader from "@/components/header/userCenterHeader.vue";
    import footerBar from "@/components/footer/footer.vue";

    export default {
        name: "accountPreview",
        components: {
            Tips,
            userCenterHeader,
            footerBar
        },
        data() {
            return {

            };
        },
        mounted() {

        },
        methods: {
            changeTab(path) {
                this.$router.push(path)
            },
            hideMenu(flag) {
                this.$store.dispatch("showMenu", false);
            }
        }
    };
</script>

<style lang="scss" scoped>
    .account-preview {
        background: #f9f9f9;

        .content {
            padding-top: 40px;
        }

        .main {
            width: 1020px;
            margin: 55px auto 100px;
        }

        .title {
            font-size: 40px;
            font-family: SourceHanSansSC-Medium;
            font-weight: 500;
            color: rgba(60, 63, 77, 1);
            line-height: 58px;
        }

        .tab-wrap {
            margin: 80px auto 50px;
            display: flex;
            justify-content: center;
        }

        .tab-item {
            font-size: 20px;
            color: #444857;
            padding: 0 8px 14px;
            margin: 0 50px;
            border-bottom: 5px solid transparent;

            &.active {
                position: relative;
                color: #d51d26;
                font-weight: bold;
                border-bottom-color: #d51d26;
            }
        }

        .rw-label {
            span {
                position: relative;
            }
        }

        .wrap1 {
            display: flex;
            justify-content: space-between;

            .item {
                width: 312px;
                height: 106px;
                padding-top: 22px;
                background: #fff;
                text-align: center;
            }

            .label {
                font-size: 16px;
                color: rgba(20, 20, 22, 0.5);
                line-height: 22px;

                span {
                    position: relative;
                }
            }

            .amount {
                font-size: 24px;
                font-weight: bold;
                color: rgba(20, 20, 22, 1);
                line-height: 32px;
                margin-top: 6px;
            }
        }
    }
</style>
