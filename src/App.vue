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
import { getToken } from '@/utils/auth';
import { mapGetters } from "vuex";
import Toast from "@/components/toast.vue";
export default {
  name: "app",
  components: {
    Toast
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["showtoast", "title"]),
    _showtoast() {
      return this.$store.state.user.showtoast;
    }
  },
  created() {
  },
  methods: {

  }
};
</script>

<style lang="scss">
.assetsConfig {
  .el-checkbox__input.is-checked+.el-checkbox__label{
    color: #000!important;
  }
}

html,
body {
  width: 100%;
  height: 100%;
  padding: 0!important;
  overflow: visible!important;
}
html{
  .el-upload-list {
    width: 180px;
  }
  .el-upload-list--picture .el-upload-list__item-name{
    display: none;
  }
  .el-loading-parent--hidden{
    overflow: visible!important;
  }
}
.pointer {
  cursor: pointer;
}
.el-button--primary {
  background-color: #d51d26 !important;
  border-color: #d51d26 !important;
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
.mask {
  .el-button--medium {
    padding: 10px 0;
  }
}
#mask {
  .el-slider {
    margin-top: 65px;
  }
  .el-slider__input {
    width: 150px;
    position: absolute;
    right: 60px;
    top: 0;
  }
  .el-slider__button {
    width: 20px;
    height: 20px;
    border: none;
    background-color: #d51d26;
  }
  .el-slider__bar {
    height: 2px;
    background-color: #d51d26;
  }
  .el-slider__runway {
    height: 2px;
    margin: 0 12px 0 12px;
    background-color: #fff;
  }
  .el-slider__button-wrapper {
    top: -18px;
  }
  .el-slider__stop {
    height: 8px;
    width: 2px;
    top: -3px;
    background-color: #fff;
  }
  .el-input__inner {
    color: #fff;
    font-size: 20px;
    text-align: left;
    padding-left: 0;
    border: none;
    outline: none;
    background: none;
    border-radius: 0;
    border-bottom: 2px solid #d51d26;
  }
  .el-textarea__inner {
    min-height: 72px !important;
  }
}

#app {
  margin: 82px auto 0;
  font-family: "Helvetica Neue", Helvetica, "PingFangSC-Semibold",
    "Microsoft YaHei", STHeiTi, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .el-upload--picture-card{
    width: auto;
    height: auto;
    line-height: 2;
  }
  .el-pagination.is-background .btn-next,
  .el-pagination.is-background .btn-prev,
  .el-pagination.is-background .el-pager li {
    background: #fff;
    border: 1px solid rgba(217, 217, 217, 1);
  }
  .el-pagination.is-background .el-pager li:hover {
    //color: #d51d26;
  }
  .el-pagination {
    text-align: center;
    margin-top: 60px;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #d51d26;
  }
  table {
    .el-select {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      left: 0;
      top: -14px;
      opacity: 0;
    }
    .el-input__icon {
    }
    .el-input__suffix {
      right: 0;
    }
    .el-icon-arrow-up:before {
      font-size: 18px;
      content: "";
    }
    .el-input--suffix .el-input__inner {
      padding-right: 0;
    }
    .el-input__inner {
      padding: 0;
      border: none;
      background: transparent;
    }
    .el-input--medium .el-input__inner {
      width: 100%;
    }
  }
  .el-radio {
    color: #3c3f4d;
  }
  .el-radio__inner {
    width: 16px;
    height: 16px;
  }
  .el-radio__inner:after {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: #d51d26;
  }
  .el-radio__input.is-checked .el-radio__inner {
    border-color: #444857;
    background: none;
  }
  .el-radio__input.is-checked + .el-radio__label {
    color: #606266;
  }
}

::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #666;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: #666;
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: #666;
}
:-moz-placeholder {
  /* Firefox 18- */
  color: #666;
}

.el-input__inner {
}

.el-form-item__error {
  padding-top: 10px !important;
}

.invest-records {
  .el-tabs__header {
    background-color: #fff !important;
    margin: 0;
  }

  .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
    padding-left: 20px;
  }

  .el-tabs__item {
    padding: 0 30px;
    color: rgba(59, 72, 89, 0.5);
    font-size: 24px;
    font-family: SourceHanSansSC-Medium;
    font-weight: 500;
    line-height: 64px;
    height: 64px;
  }

  .el-tabs__header .el-tabs__item.is-active,
  .el-tabs__header .el-tabs__item:hover {
    color: #d51d26;
  }

  .el-tabs__active-bar {
    background-color: #d51d26;
  }

  .el-tabs__nav-wrap::after {
    background: #d8d8d8;
  }

  .el-date-editor--daterange.el-input__inner {
    width: 250px;
  }
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
