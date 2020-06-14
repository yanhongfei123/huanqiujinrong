<template>
  <div class="footer">
	  <div class="top">
		  <div><img src="../../assets/images/home/18.png" alt="">低廉管理費用 </div>
		  <div><img src="../../assets/images/home/17.png" alt="">無資金閉鎖期 </div>
		  <div><img src="../../assets/images/home/16.png" alt="">全球分散投資 </div>
	  </div>
    <div class="footer-content">
      <div class="f-top">
        <div class="f-top-l">
          <ul class="l-ul">
			 <li class="contact"> 联络我们</li> 
            <li>
<!--              <div class="label">{{$t('footer.text1')}} :</div> -->
              <div>+852XXXXXXX</div>
            </li>
            <li>
             <!-- <div class="label">{{$t('footer.text2')}} :</div> -->
              <div>12345678901@163.com</div>
            </li>
            <li>
              <!-- <div class="label">{{$t('footer.text3')}} :</div> -->
              <div class="address">{{$t('footer.text4')}}</div>
            </li>
			<li>
				<img src="../../assets/images/home/f.png" alt="">
				<img src="../../assets/images/home/c.png" alt="">
				<img src="../../assets/images/home/i.png" alt="">
			</li>
			<li class="link">
				<a href="">首页</a><span>|</span>
				<a href="">投资产品</a><span>|</span>
				<a href="">为何选择ETC</a>
			</li>
          </ul>
        </div>
        <div class="f-top-r">
			過往表現並不代表未來表現。投資涉及各種風險，包括但不限於市場、匯率、波動性、流動性、信貸/交易對手、評估退化、監管和政治領域。在進行任何投資之前，你應該仔細閱讀投資基金提供的文檔，以獲取詳細的產品信息和風險因素。如果你對此網站或任何銷售文檔有疑問，應尋求獨立的專業建議。
        </div>
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
      if (this.$route.path.includes(path)){
        window.scrollTo(0,0);
        return;
      }
      this.$router.push(path);
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  box-sizing: border-box;
  background: rgba(42, 219, 192, 1);
  color: #fff;
  font-size: 16px;
  
  .top{
	  height: 88px;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  background: rgba(25, 25, 25, 0.73);
	  div{
		  margin: 0 20px;
		  font-size: 40px;
		  display: flex;
		  align-items: center;
		  img {
			  margin-right: 20px;
		  }
	  }
  }
  .footer-content {
    width: 1600px;
	height: 550px;
    margin: 0 auto;
    font-size: 16px;
    color: #fff;
    .l-ul {
	  font-size: 30px;
      li {
        margin-bottom: 10px;
      }
	  .contact{
		  margin-bottom: 40px;
	  }
	  .link{
		  margin-top: 30px;
		  a{
			  color: #FFFFFF;
		  }
		  span{
			  margin: 0 10px;
		  }
	  }
      div {
        line-height: 32px;
      }
      .address {
        
      }
    }
    .f-top {
      overflow: hidden;
	  padding-top: 100px;
      .f-top-l {
        float: left;
      }
      .f-top-r {
        float: right;
		width: 674px;
		font-size: 30px;
      }
    }
  }
}
</style>
