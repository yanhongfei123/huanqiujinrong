<template>
   <div class="footer">
     <div class="footer-content">
       <div class="f-top">
         <div class="f-top-l">
           <img width="179" height="39" src="../../assets//images/banner03.jpg" alt="">
           <ul class="l-ul">
             <li>
               <div class="label">电话 :</div>
               <div>+852XXXXXXX</div>
             </li>
             <li>
               <div class="label">邮箱 :</div>
               <div>12345678901@163.com</div>
             </li>
             <li>
               <div class="label">地址 :</div>
               <div class="address">香港中环金融街8号国际金融中心二期大厦 19楼101室</div>
             </li>
           </ul>
         </div>
         <div class="f-top-r">
          <dl class="fr-l">
            <dt @click="goPage('about')">关于我们</dt>
            <dd @click="goPage('introduction')">团队介绍</dd>
            <dd @click="goPage('contact')">联系我们</dd>
            <dd @click="goPage('questions')">常见回答</dd>
            <dd @click="goPage('conditions')">条款声明</dd>
          </dl>
          <dl class="fr-r">
            <dt>关注我们</dt>
            <dd>
              <div class="mar28">
                <img width="80" height="80" src="../../assets/images/banner01.jpg" alt="">
                <div class="img-wrap">
                  <img width="16"  height="13" src="../../assets//images//banner03.jpg" alt="">
                  <div>微信公众号</div>
                </div>
              </div>
              <div>
                <img width="80" height="80" src="../../assets/images/banner01.jpg" alt="">
                <div class="img-wrap">
                  <img width="16"  height="13" src="../../assets//images//banner03.jpg" alt="">
                  <div>新浪微博</div>
                </div>
              </div>
            </dd>
          </dl>
        </div>
       </div>
       <div class="f-line"></div>
       <div class="f-bom">
         <div class="fbm-l">粤ICP备XXXXX号 <br> Copyright &#169 2019XX科技有限公司 版权所有</div>
         <div class="fbm-r">本网站由XXX有限公司（“XXX”），香港科技大学孵化的金融科技公司开发并维护。www.XXX.com，以及XXX网站是由弘量研究开发的。网站所述目标回报和数字只为信息演示所用，并不是暗示、预测或者保证未来任何组合投资的表现结果，在将来可能会在没有通知的情况下进行改变。各种情况，如经济环境、利率、市场趋势和商业环境等都会影响表现。一个投资组合是否能达到设定目标取决于主观预测和并不完全准确的假设条件。XXXX不为目标收益承担责任，也不会为投资方式，目标回报计算方法的准确度和合理性提供担保性陈述。本网站使用者所见内容并不代表任何隐含担保。</div>
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
    goPage(path){
      this.$router.push(path)
    },
  },
  mounted(){

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .footer{
    height: 580px;
    padding-top: 78px;
    box-sizing: border-box;
    background: #444857;
    color: #fff;
    font-size: 16px;
    .footer-content{
      width: 1180px;
      margin: 0 auto;
      font-size: 16px;
      color: #fff;
      .l-ul{
        margin-top: 26px;
        li{
          display: flex;
          margin-bottom: 10px;
        }
        div{
          line-height:24px;
        }
        .label{
          padding-right: 10px;
        }
        .address{
          width: 230px;
        }
      }
      dl{
        dt{
          font-size: 22px;
          margin-bottom: 20px;
        }
        dd{
          margin-bottom: 20px;
        }
      }
      .f-top{
        overflow: hidden;
        .f-top-l{
          float: left;
        }
        .f-top-r{
          float: right;
          display: flex;
        }
        .fr-l{
          margin-right: 112px;
          dt:hover, dd:hover{
            color: #ec2c77;
            cursor: pointer;
          }
        }
        .fr-r{
          dd{
            display: flex;
          }
          dt:hover{
            color: #ec2c77;
            cursor: pointer;
          }          
        }
        .mar28{
          margin-right: 28px;
        }
        .img-wrap{
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          margin-top: 12px;
        }

      }
    }
    .f-line{
      height:1px;
      background:#fff;
      margin: 50px 0 40px;
    }
    .f-bom{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .fbm-l{
        line-height:30px;
      }
      .fbm-r{
        width: 700px;
        line-height:24px;
        font-size: 14px;
      }
    }

  }
</style>
