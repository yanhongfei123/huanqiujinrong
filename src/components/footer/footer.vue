<template>
  <div class="footer">
	  <div class="top">
		  <div><img src="../../assets/images/home/18.png" alt="">{{$t('footer.text1')}} </div>
		  <div><img src="../../assets/images/home/17.png" alt="">{{$t('footer.text2')}} </div>
		  <div><img src="../../assets/images/home/16.png" alt="">{{$t('footer.text3')}} </div>
	  </div>
    <div class="footer-content">
      <div class="f-top">
        <div class="f-top-l">
          <ul class="l-ul">
			 <li class="contact"> {{$t('footer.text4')}}</li> 
            <li>
<!--              <div class="label">{{$t('footer.text1')}} :</div> -->
              <div>+852 6728 2812</div>
            </li>
            <li>
             <!-- <div class="label">{{$t('footer.text2')}} :</div> -->
              <div>support@etfcool.com</div>
            </li>
            <li>
              <!-- <div class="label">{{$t('footer.text3')}} :</div> -->
              <div class="address">{{$t('footer.text5')}}</div>
            </li>
			<li>
				<img src="../../assets/images/home/f.png" alt="">
				<img src="../../assets/images/home/c.png" alt="">
				<img src="../../assets/images/home/i.png" alt="">
			</li>
			<li class="link">
				<a href="/#/honme">{{$t('footer.text6')}}</a><span>|</span>
				<a href="/#/product">{{$t('footer.text7')}}</a><span>|</span>
				<a href="/#/why">{{$t('footer.text8')}}</a>
			</li>
          </ul>
        </div>
        <div class="f-top-r">{{$t('footer.text9')}}</div>
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
		  font-size: 30px;
		  display: flex;
		  align-items: center;
		  img {
			  width: 45px;
			  margin-right: 20px;
		  }
	  }
  }
  
  	@media screen and (max-width: 1700px) {
		.footer-content {
			width: 1500px!important;
		}
	}
  
  .footer-content {
    width: 1600px;
	height: 430px;
    margin: 0 auto;
    font-size: 16px;
    color: #fff;
    .l-ul {
	  font-size: 22px;
      li {
        margin-bottom: 10px;
		img{
			width: 30px;
		}
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
	  padding-top: 70px;
      .f-top-l {
        float: left;
		width: 800px;
      }
      .f-top-r {
        float: right;
		width: 674px;
		font-size: 22px;
		line-height: 40px;
      }
    }
  }
}
</style>
