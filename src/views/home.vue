<template>
  <div class="page-home">
    <header>
      <headerNav></headerNav>
    </header>
    <div @click="hideMenu($event)">
      <section class="barner">
        <div class="barner-content com-width">
          <div class="barner-title">
            WWW.
            <span>ETF</span>.COOL
          </div>
          <div class="barner-info">{{$t('home.text1')}} >> {{$t('home.text2')}}</div>
          <div @click="$router.push('/register')" class="start-ivest">{{$t('home.text3')}}</div>
        </div>
      </section>
      <section class="content1">
        <h2 class="tc">{{$t('home.text4')}}</h2>
        <div class="why tc">Why choose us</div>
        <div class="com-width">
          <div class="last-wrap item">
            <div class="lw-l">
              <div class="lw-l-t">
                <div class="icon icon1"></div>
                <div class="des">{{$t('home.text5')}}</div>
              </div>
              <div class="lw-l-b tl">{{$t('home.text6')}}</div>
            </div>
            <img width="580" height="350" src="../assets/images/firstpage/pic_no1.png" alt>
          </div>
          <div class="reason-wrap item">
            <img width="580" height="350" src="../assets/images/firstpage/pic_no2.png" alt>
            <div class="lw-l">
              <div class="lw-l-t">
                <div class="icon icon2"></div>
                <div class="des">{{$t('home.text7')}}</div>
              </div>
              <div class="lw-l-b tl">{{$t('home.text8')}}</div>
            </div>
          </div>
          <div class="dispersion-wrap item">
            <div class="lw-l">
              <div class="lw-l-t">
                <div class="icon icon3"></div>
                <div class="des">{{$t('home.text9')}}</div>
              </div>
              <div class="lw-l-b tl">{{$t('home.text10')}}</div>
            </div>
            <img width="580" height="350" src="../assets/images/firstpage/pic_no3.png" alt>
          </div>
        </div>
      </section>
      <section class="content content2">
        <div class="l-cont"></div>
        <div class="r-cont"></div>
        <div class="com-width">
          <div class="strage-wrap">
            <div class="strage-title">{{$t('home.text11')}}</div>
            <div class="strage-des">Mature investment strategy</div>
            <div class="strage-text text1">{{$t('home.text12')}}</div>
            <div class="strage-text text2">{{$t('home.text13')}}</div>
            <div class="strage-text text3">{{$t('home.text14')}}</div>
            <div class="strage-text text4">{{$t('home.text15')}}</div>
            <div class="strage-text">{{$t('home.text16')}}</div>
            <div @click="$router.push('/register')" class="start-ivest">{{$t('home.text3')}}</div>
          </div>
        </div>
      </section>
      <section class="content3 content">
        <div class="com-width">
          <h2 class="tc">{{$t('home.text17')}}</h2>
          <div class="advantage tc">Our advantage</div>
          <div class="tab-wrap">
            <div
              @click="changeSlide(0)"
              class="tab-item"
              :class="[oIndex == 0?'active':'']"
            >{{$t('home.text18')}}</div>
            <div
              @click="changeSlide(1)"
              class="tab-item tab-item2"
              :class="[oIndex == 1?'active':'']"
            >{{$t('home.text19')}}</div>
            <div
              @click="changeSlide(2)"
              class="tab-item"
              :class="[oIndex == 2?'active':'']"
            >{{$t('home.text20')}}</div>
          </div>
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
              <div class="icon icon1"></div>
              <div class="slide-info">{{$t('home.text21')}}</div>
              <div class="slide-info">{{$t('home.text22')}}</div>
            </swiper-slide>
            <swiper-slide>
              <div class="icon icon1"></div>
              <div class="slide-info">{{$t('home.text21')}}</div>
              <div class="slide-info">{{$t('home.text22')}}</div>
            </swiper-slide>
            <swiper-slide>
              <div class="icon icon1"></div>
              <div class="slide-info">{{$t('home.text21')}}</div>
              <div class="slide-info">{{$t('home.text22')}}</div>
            </swiper-slide>
            <!-- Optional controls -->
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
            <div @click="changeSlide" class="swiper-button-prev" slot="button-prev"></div>
            <div @click="changeSlide" class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </section>
      <section class="content4 content">
        <div class="com-width">
          <h2 class="tc">{{$t('home.text23')}}</h2>
          <div class="advantage tc">3 steps to enjoy global income</div>
          <div class="step-wrap">
            <div class="step step1">
              <div class="top-num">
                STEP
                <span>1</span>
              </div>
              <div class="step-info">{{$t('home.text24')}}</div>
            </div>
            <div class="arrow"></div>
            <div class="step step2">
              <div class="top-num">
                STEP
                <span>2</span>
              </div>
              <div class="step-info">{{$t('home.text25')}}</div>
            </div>
            <div class="arrow"></div>
            <div class="step step2">
              <div class="top-num">
                STEP
                <span>3</span>
              </div>
              <div class="step-info">{{$t('home.text26')}}</div>
            </div>
            <div class="arrow"></div>
            <div class="step step2">
              <div class="top-num">
                STEP
                <span>4</span>
              </div>
              <div class="step-info">{{$t('home.text27')}}</div>
            </div>
          </div>
          <div @click="$router.push('/register')" class="start-ivest">{{$t('home.text3')}}</div>
        </div>
      </section>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
// @ is an alias to /src
import headerNav from "@/components/nav/nav.vue";
import footerBar from "@/components/footer/footer.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "home",
  components: {
    headerNav,
    footerBar,
    swiper,
    swiperSlide
  },
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  data() {
    return {
      oIndex: 0,
      swiperOption: {
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        //autoHeight: true,
        //loop: true,
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false
        // },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        // swiper callbacks
        on: {
          slideChangeTransitionStart() {
            var tablist = document.getElementsByClassName("tab-item");
            for (var i = 0; i < tablist.length; i++) {
              tablist[i].className = tablist[i].className.replace("active", "");
            }
            tablist[this.activeIndex].className =
              tablist[this.activeIndex].className + " active";
          },
          slideChangeTransitionEnd() {}
        }
        // more Swiper configs and callbacks...
        // ...
      }
    };
  },
  mounted() {
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // setInterval(() => {
    //   this.oIndex = this.swiper.activeIndex;
    // }, 3300)
  },
  methods: {
    hideMenu(flag) {
      this.$store.dispatch("showMenu", false);
    },
    changeSlide(index) {
      if (typeof index === "number") {
        this.oIndex = index;
        this.swiper.slideTo(index, 300);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  letter-spacing: 3px;
}
.barner {
  position: relative;
  height: 700px;
  background: url("../assets/images/firstpage/banner_firstpage.png") no-repeat
    center;
  background-size: cover;
  .barner-content {
    padding-left: 64px;
    box-sizing: border-box;
    position: relative;
    color: #fff;
    top: 318px;
  }
  .barner-title {
    font-size: 68px;
    font-weight: 300;
    color: #000;
    line-height: 99px;
    font-family: SourceHanSansSC-Light;
    span {
      font-size: 74px;
      font-weight: bold;
      color: #d51d26;
    }
  }
  .barner-info {
    font-size: 32px;
    color: #000;
    margin: 18px 0 55px;
  }
  .start-ivest {
    position: relative;
    width: 400px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 28px;
    color: #333;
    font-weight: 400;
    background: #e2c6ab;
    cursor: pointer;
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 0;
      height: 0;
      border: 40px solid transparent;
      border-left-color: #d3b291;
    }
  }
}
.content1 {
  padding: 120px 0;
  background: rgba(249, 249, 249, 1);
  h2 {
    position: relative;
    color: #333;
    font-size: 40px;
    margin-bottom: 15px;
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: -50px;
      margin-left: 220px;
      width: 72px;
      height: 72px;
      background: url("../assets/images/icon2.png") no-repeat center;
      background-size: cover;
    }
  }
  img {
    position: relative;
    z-index: 10;
  }
  .why {
    color: #999;
    font-size: 32px;
    font-weight: 400;
    line-height: 46px;
  }
  .item {
    position: relative;
    margin: 120px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .last-wrap {
    &::before {
      content: "";
      position: absolute;
      left: 28%;
      bottom: -142px;
      box-sizing: border-box;
      width: 305px;
      height: 166px;
      opacity: 0.2702;
      border: 12px solid rgba(226, 198, 171, 1);
    }
    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: -44px;
      width: 160px;
      height: 4px;
      background: rgba(226, 198, 171, 1);
    }
  }

  .reason-wrap {
    &::before {
      content: "";
      position: absolute;
      left: 43%;
      bottom: -234px;
      box-sizing: border-box;
      width: 305px;
      height: 300px;
      opacity: 0.5;
      border: 12px solid rgba(226, 198, 171, 1);
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -24px;
      width: 160px;
      height: 4px;
      background: rgba(226, 198, 171, 1);
    }
  }
  .dispersion-wrap {
    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: -84px;
      width: 160px;
      height: 4px;
      background: rgba(226, 198, 171, 1);
    }
  }
  .lw-l-b {
    width: 480px;
    font-size: 20px;
    font-weight: 500;
    color: rgba(68, 72, 87, 1);
    line-height: 30px;
  }
  .lw-l-t {
    display: flex;
    align-items: center;
    margin-bottom: 35px;
    .icon {
      width: 80px;
      height: 80px;
      background-size: 100%;
    }
    .icon1 {
      background: url("../assets/images/firstpage/icon_first_one.png");
    }
    .icon2 {
      background: url("../assets/images/firstpage/icon_first_two.png");
    }
    .icon3 {
      background: url("../assets/images/firstpage/icon_first_three.png");
    }
    .des {
      color: #3c3f4d;
      font-size: 28px;
      font-weight: bold;
      padding-left: 20px;
    }
  }
}
.content {
  .strage-title {
    font-size: 40px;
    line-height: 58px;
    font-family: SourceHanSansSC-Bold;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    letter-spacing: 3px;
  }
  .strage-des {
    font-size: 24px;
    margin: 18px 0 60px;
  }
}
.content2 {
  position: relative;
  height: 720px;
  color: #fff;
  font-size: 18px;
  line-height: 28px;
  display: flex;
  .l-cont {
    position: relative;
    flex: 1;
    background: #444857;
    overflow: hidden;
    &::after {
      content: "";
      position: absolute;
      right: -260px;
      bottom: -104px;
      width: 700px;
      height: 400px;
      background: #3c3f4d;
      transform: rotate(135deg);
    }
  }
  .r-cont {
    width: 610px;
    background: url("../assets/images/firstpage/pic_no4.png") no-repeat center;
    background-size: cover;
  }
  .com-width {
    position: absolute;
    height: 100%;
    left: 50%;
    margin-left: -590px;
  }
  .strage-wrap {
    width: 680px;
    padding-top: 60px;
  }
  .text1,
  .text3,
  .text4 {
    margin-bottom: 28px;
  }
  .start-ivest {
    position: relative;
    top: 40px;
    width: 240px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 20px;
    color: #333;
    background: #e2c6ab;
    cursor: pointer;
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 0;
      height: 0;
      border: 40px solid transparent;
      border-left-color: #d3b291;
    }
  }
}
.content3 {
  position: relative;
  padding: 120px 0;
  background: #f9f9f9;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 182px;
    background: url("../assets/images/firstpage/bg_advantage.png") no-repeat
      center;
    background-size: 100% 100%;
  }
  h2 {
    position: relative;
    color: #333;
    font-size: 40px;
    margin-bottom: 15px;
    &::after {
      content: "";
      position: absolute;
      left: 11%;
      bottom: -70px;
      margin-left: 220px;
      width: 72px;
      height: 72px;
      background: url("../assets/images/icon1.png") no-repeat center;
      background-size: cover;
    }
  }
  .advantage {
    color: #999;
    font-size: 32px;
    font-weight: 400;
    line-height: 46px;
  }
  .swiper-slide {
    height: 300px;
    text-align: center;
  }
  .swiper-button-next {
    background-image: url("../assets/images/firstpage//btn_right.png");
  }
  .swiper-button-prev {
    background-image: url("../assets/images/firstpage//btn_left.png");
  }
  .tab-wrap {
    margin: 60px 0 32px;
    display: flex;
    justify-content: center;
  }
  .tab-item {
    font-size: 30px;
    color: #333;
    padding-bottom: 10px;
    border-bottom: 5px solid transparent;
    &.tab-item2 {
      margin: 0 215px;
    }
    &.active {
      color: #d51d26;
      font-weight: bold;
      border-bottom-color: #d51d26;
    }
  }
  .icon {
    width: 100px;
    height: 100px;
    margin: 0 auto 26px;
    background: url("../assets/images/firstpage/icon_firstpage_advantage.png")
      no-repeat;
    background-size: 100%;
  }
  .slide-info {
    width: 620px;
    margin: 0 auto;
    font-size: 18px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 28px;
  }
}
.content4 {
  padding: 120px 0;
  background: rgba(249, 249, 249, 1);
  .com-width {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -60px;
      width: 72px;
      height: 72px;
      background: url("../assets/images/icon1.png") no-repeat center;
      background-size: cover;
    }
  }
  h2 {
    position: relative;
    color: #333;
    font-size: 40px;
    margin-bottom: 15px;
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: -42px;
      margin-left: 260px;
      width: 72px;
      height: 72px;
      background: url("../assets/images/icon2.png") no-repeat center;
      background-size: cover;
    }
  }
  .advantage {
    color: #999;
    font-size: 32px;
    font-weight: 400;
    line-height: 46px;
  }

  img {
    display: block;
    width: 80%;
    margin: 110px auto 120px;
    height: 110px;
  }

  .step-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 106px 0 122px;
    .arrow {
      width: 66px;
      height: 70px;
      margin: 0 55px;
      background: url("../assets/images/firstpage//icon_arrow.png") no-repeat
        center;
      background-size: cover;
    }
    .step {
      .top-num {
        font-size: 20px;
        color: rgba(213, 29, 38, 1);
        span {
          font-size: 40px;
          line-height: 47px;
        }
      }
      .step-info {
        font-size: 32px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 46px;
        margin-top: 16px;
      }
    }
  }

  .start-ivest {
    position: relative;
    width: 400px;
    height: 80px;
    margin: 0 auto;
    text-align: center;
    line-height: 80px;
    font-size: 28px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    background: url("../assets/images/other_btn/btn_red400.png") no-repeat
      center;
    background-size: cover;
  }
}
</style>
