<template>
  <div class="footer">
    <div class="footer-content">
      <div class="f-top">
        <div class="f-top-l">
          <img width="179" height="39" src="../../assets//images/icon1.png" alt>
          <ul class="l-ul">
            <li>
              <div class="label">{{$t('footer.text1')}} :</div>
              <div>+852XXXXXXX</div>
            </li>
            <li>
              <div class="label">{{$t('footer.text2')}} :</div>
              <div>12345678901@163.com</div>
            </li>
            <li>
              <div class="label">{{$t('footer.text3')}} :</div>
              <div class="address">{{$t('footer.text4')}}</div>
            </li>
          </ul>
        </div>
        <div class="f-top-r">
          <dl class="fr-l">
            <dt>{{$t('footer.text5')}}</dt>
            <dd @click="goPage('/introduction')">{{$t('footer.text6')}}</dd>
            <dd @click="goPage('/contact')">{{$t('footer.text7')}}</dd>
            <dd @click="goPage('/questions')">{{$t('footer.text8')}}</dd>
            <dd @click="goPage('/conditions')">{{$t('footer.text9')}}</dd>
          </dl>
          <!-- <dl class="fr-r">
            <dt>{{$t('footer.text10')}}</dt>
            <dd>
              <div class="mar28">
                <img width="80" height="80" src="../../assets/images/icon1.png" alt>
                <div class="img-wrap wechat">{{$t('footer.text11')}}</div>
              </div>
              <div>
                <img width="80" height="80" src="../../assets/images/icon1.png" alt>
                <div class="img-wrap weibo">{{$t('footer.text12')}}</div>
              </div>
            </dd>
          </dl> -->
        </div>
      </div>
      <div class="f-line"></div>
      <div class="f-bom">
        <div class="fbm-l">
          {{$t('footer.text13')}}
          <br>
          Copyright &#169 {{$t('footer.text14')}}
        </div>
        <div class="fbm-r">{{$t('footer.text15')}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerBar",
  data() {
    return {};
  },
  methods: {
    goPage(path) {
      this.$router.push(path);
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  min-width: 1180px;
  height: 580px;
  padding-top: 78px;
  box-sizing: border-box;
  background: #444857;
  color: #fff;
  font-size: 16px;
  .footer-content {
    width: 1180px;
    margin: 0 auto;
    font-size: 16px;
    color: #fff;
    .l-ul {
      margin-top: 26px;
      li {
        display: flex;
        margin-bottom: 10px;
      }
      div {
        line-height: 24px;
      }
      .label {
        padding-right: 10px;
      }
      .address {
        width: 230px;
      }
    }
    dl {
      dt {
        font-size: 22px;
        margin-bottom: 20px;
      }
      dd {
        margin-bottom: 20px;
      }
    }
    .f-top {
      overflow: hidden;
      .f-top-l {
        float: left;
      }
      .f-top-r {
        float: right;
        display: flex;
      }
      .fr-l {
        margin-right: 112px;
        dt:hover,
        dd:hover {
          color: #ec2c77;
          cursor: pointer;
        }
      }
      .fr-r {
        dd {
          display: flex;
        }
        dt:hover {
          color: #ec2c77;
          cursor: pointer;
        }
      }
      .mar28 {
        margin-right: 28px;
      }
      .img-wrap {
        font-size: 12px;
        margin-top: 12px;
        padding-left: 20px;
        background-size: contain;
      }
      .wechat {
        background: url("../../assets/images/icon_wechat.png") no-repeat left
          center;
      }
      .weibo {
        background: url("../../assets/images/icon_weibo.png") no-repeat left
          center;
      }
    }
  }
  .f-line {
    height: 1px;
    background: #fff;
    margin: 50px 0 40px;
  }
  .f-bom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .fbm-l {
      line-height: 30px;
    }
    .fbm-r {
      width: 700px;
      line-height: 24px;
      font-size: 14px;
    }
  }
}
</style>
