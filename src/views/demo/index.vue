<template>
  <div>
    <img src="../../assets//images/gou-red.png" alt="">
    <div>{{$t('route.dashboard')}}</div>
    <div>{{dashboard}}</div>
    <el-button type="primary" @click="setLanguage('zh')">中文</el-button>
    <el-button type="primary" @click="setLanguage('en')">英文</el-button>
    <el-button type="primary" @click="setLanguage('ft')">繁体</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
//import FooterNav from '@/components/footer/index.vue'

export default {
  name: "demo",
  components: {
    
  },
  computed: {
    dashboard(){
      return this.$t('route.dashboard');
    }
  },
  data() {
    return {
      //dashboard: this.$t('route.dashboard')
    };
  },
  mounted() {
    this.$store.dispatch("showToast", '哈哈哈哈哈').then(res => {});
  },
  methods:{
    setLanguage(lang){
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
      //this.$message.success('切换成功')
    }
  }
};
</script>

<style scoped lang="scss">

</style>
