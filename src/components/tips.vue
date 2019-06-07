<template>
  <div @mouseenter="showTips=true" @mouseleave="showTips=false" :style="{top: top, right: right}" class="tips">
    <div v-show="showTips" class="content"><slot></slot></div>
  </div>
</template>
<script>
export default {
  name:'tips',
  props: ['top', 'right'],
  data(){
    return {
      showTips: false,
    }
  },
  mounted(){

  }
}
</script>
<style lang="scss" scoped>
  .tips{
    position: absolute;
    width: 16px;
    height: 16px;
    z-index: 9;
    background: url('../assets/images/user_center/btn_doubt.png');
    background-size: contain;
    .content {
      position: absolute;
      bottom: 30px;
      left: -16px;
      z-index: 10;
      width: 310px;
      padding: 12px;
      text-align: justify;
      background: #fff;
      border-radius: 6px;
      box-shadow:0px 2px 8px 0px rgba(0,0,0,0.15);
      &::after{
        content: '';
        position: absolute;
        width: 12px;
        height: 12px;
        bottom: -5px;
        left: 18px;
        background: #fff;
        transform: rotate(45deg);
        box-shadow:2px 2px 4px rgba(0,0,0,0.15);
      }
    }
  }
</style>

