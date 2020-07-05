<template>
  <div class="user-container">
    <header>
      <userCenterHeader></userCenterHeader>
    </header>
    <div @click="hideMenu($event)" class="user-content">
      <div class="content">
        <div class="title">{{$t('messageCenter.text1')}}</div>
        <div class="user-wrap">
          <div class="l-wrap">
<!--            <div :class="[$route.path==='/messageCenter/announcement'?'active':'']" class="item item1">
              <router-link to="/messageCenter/announcement">{{$t('message.text1')}}</router-link>
            </div>
            <div class="line"></div> -->
            <div :class="[$route.path==='/messageCenter/informationPush'?'active':'']" class="item item2">
              <router-link to="/messageCenter/informationPush">{{$t('message.text2')}}</router-link>
            </div>
            <div class="line"></div>
            <div :class="[$route.path==='/messageCenter/myMessage'?'active':'']" class="item item3">
              <router-link to="/messageCenter/myMessage"><span class="message">{{$t('message.text3')}}<i v-if="isshow"></i></span></router-link>
            </div>
          </div>
          <div class="r-wrap">
            <router-view/>
          </div>
        </div>
      </div>
      <footerBar></footerBar>
    </div>
  </div>
</template>

<script>
import {getMyMsg} from '@/api/message';
import userCenterHeader from "@/components/header/userCenterHeader.vue";
import footerBar from "@/components/footer/footer.vue";

export default {
  name: "userCenter",
  components: {
    userCenterHeader,
    footerBar
  },
  data() {
    return {
      isshow: false,
    };
  },
  watch:{
    '$route': function(route){
      if(route.path == '/messageCenter/myMessage'){
        this.len && localStorage.setItem('msgNum', this.len);
      } else {
        var localLen = localStorage.getItem('msgNum');
        localLen && (this.isshow = false);
      }
    }
  },
  computed: {},
  methods: {
    hideMenu(flag) {
      this.$store.dispatch("showMenu", false);
    }
  },
  created() {
	  console.log(this.$route)
    getMyMsg({
      pageNum: 1,
    }).then(res=>{
      var list = res.data.list;
      var len = list.length;
      var localLen = localStorage.getItem('msgNum');
      len && sessionStorage.setItem('myMsgData', JSON.stringify(res.data));
      this.len = len;
      if(localLen){
        if(localLen < len){
          this.isshow = true;
        }
      }else{
        this.isshow = !!len ;
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.user-container {
  background: #f9f9f9;
  .content {
    width: 1180px;
    margin: 0 auto;
    padding: 40px 0 100px;
  }
  .user-wrap {
    display: flex;
    margin-top: 40px;
    .line {
      width: 170px;
      height: 1px;
      margin: 12px auto;
      background: rgba(216, 216, 216, 1);
      border: 1px solid rgba(220, 220, 220, 1);
    }
    a {
      position: relative;
      font-size: 20px;
      color: #3c3f4d;
      font-weight: bold;
      display: block;
      width: 210px;
      height: 40px;
      margin: 0 auto;
      text-align: center;
      line-height: 40px;
    }
    .item a::after{
      position: absolute;
      content: "";
      width: 24px;
      height: 24px;
      left: 22px;
      top: 50%;
      margin-top: -12px;
      background-position: center;
      background-size: 100%;
    }
    .item1 a::after {
      background-image: url("../../assets/images/personal/icon_notice_black.png");
    }
    .item2 a::after {
      background-image: url("../../assets/images/personal/icon_information_black.png");
    }
    .item3 a::after {
      background-image: url("../../assets/images/personal/icon_mine_black.png");
    }
    .active {
      &::after {
        //background: #fff;
      }
      a {
        color: #fff;
        background: #d51d26;
      }
      &.item1 a::after {
        background-image: url("../../assets/images/personal/icon_notice_white.png");
      }
      &.item2 a::after {
        background-image: url("../../assets/images/personal/icon_information_white.png");
      }
      &.item3 a::after {
        background-image: url("../../assets/images/personal/icon_mine_white.png");
      }
    }
    .l-wrap {
      width: 250px;
      min-height: 420px;
      padding-top: 34px;
      box-sizing: border-box;
      background: #f3f3f3;
    }
    .r-wrap {
      width: 930px;
      background: #fff;
      padding: 20px 40px 40px;
      box-sizing: border-box;
    }
  }
  .title {
    font-size: 40px;
    font-weight: 500;
    color: rgba(60, 63, 77, 1);
    line-height: 58px;
  }
  .message{
    position: relative;
    i {
      position: absolute;
      right: -8px;
      top: -2px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
      background: #d51d26;
    }
  }
}
</style>
