<template>
    <div id="app">
        <keep-alive>
            <transition name="slide-fade" mode="out-in">
                <router-view/>
            </transition>
        </keep-alive>
        <Toast v-if="showtoast" :content="title"/>
    </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  import Toast from '@/components/toast.vue';

  export default {
    name: 'app',
    components: {
      Toast
    },
    data() {
      return {};
    },
    computed: {
      ...mapGetters(['showtoast', 'title']),
      _showtoast() {
        return this.$store.state.user.showtoast;
      }
    },
    mounted() {
      console.log(this.showtoast);
      console.log(this._showtoast);
    }
  };
</script>

<style lang="scss">
    html, body {
        width: 100%;
        height: 100%;;
    }

    .com-width {
        width: 1180px;
        margin: 0 auto;
    }

    header {
        position: fixed;
        width: 100%;
        height: 82px;
        top: 0;
        z-index: 100;
        background: #fff;
        box-shadow: 0 2px 4px 0 rgba(227, 227, 227, 0.5);
    }

    #app {
        margin: 82px auto 0;
        font-family: "Helvetica Neue", Helvetica, "PingFangSC-Semibold", "Microsoft YaHei", STHeiTi, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: #666;
    }
    ::-moz-placeholder { /* Firefox 19+ */
        color: #666;
    }
    :-ms-input-placeholder { /* IE 10+ */
        color: #666;
    }
    :-moz-placeholder { /* Firefox 18- */
        color: #666;
    }

    .el-input__inner{

    }

    .el-form-item__error{
        padding-top: 10px !important;
    }

    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    // .slide-fade-enter-active {
    //     transition: all 0.3s ease;
    // }

    // .slide-fade-leave-active {
    //     transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
    // }

    // .slide-fade-enter, .slide-fade-leave-to
    //     /* .slide-fade-leave-active for below version 2.1.8 */
    // {
    //     transform: translateX(-100%);
    //     opacity: 0;
    // }
</style>
