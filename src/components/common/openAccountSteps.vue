<template>
    <div class="open-steps-wrapper" :class="'active-step-'+step">
        <div class="open-step step1">1. {{$t('openAccount.step.text1')}}</div>
        <div class="open-step step2">2. {{$t('openAccount.step.text2')}}</div>
        <div class="open-step step3">3. {{$t('openAccount.step.text3')}}</div>
        <div class="open-step step4">4. {{$t('openAccount.step.text4')}}</div>
    </div>

</template>

<script>
  export default {
    name: 'openAccountSteps',
    props: {
      step: {
        type: Number,
        default: 1
      }
    },
    created() {

    }
  };
</script>

<style scoped lang="scss">
    .open-steps-wrapper{
        position: relative;
        overflow: hidden;
        text-align: center;
        &.active-step-1{
            .step1{
                color: #D51D26;
                border: 1px solid #D51D26;
                border-radius: 0 20px 20px 0;
                background-color: #fff;
                z-index: 1;
            }
        }
        &.active-step-2{
            .step1,.step2{
                color: #D51D26;
                border: 1px solid #D51D26;
                background-color: #fff;
                z-index: 1;
            }
            .step2{
                border-left: none;
                border-radius: 0 20px 20px 0;
            }
        }
        &.active-step-3{
            .step1,.step2,.step3{
                color: #D51D26;
                border: 1px solid #D51D26;
                background-color: #fff;
                z-index: 1;
            }
            .step2,.step3{
                border-left: none;
            }
            .step3{
                border-radius: 0 20px 20px 0;
            }
        }
        &.active-step-4{
            .open-step{
                color: #D51D26;
                border: 1px solid #D51D26;
                background-color: #fff;
                &.step2, &.step3, &.step4{
                    border-left: none;
                }
                &.step4{
                    border-radius: 0 20px 20px 0;
                }
            }
        }
    }
    .open-step{
        position: relative;
        float: left;
        margin-left: -20px;
        width: 250px;
        font-size: 16px;
        font-family: SourceHanSansSC-Medium;
        font-weight: 500;
        color: #8392A7;
        height: 40px;
        line-height: 40px;
        background-color: #F0F3F7;
        box-sizing: border-box;
        &.step1{
            margin-left: 0;
        }
    }

</style>
