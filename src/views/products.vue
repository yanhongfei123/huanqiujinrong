<template>
	<div class="page-home">
		<header>
			<headerNav></headerNav>
		</header>
		<div @click="hideMenu($event)">
			<div class="com-width section1">
				<div class="text">ETF COOL</div>
				<div class="text2">{{$t('product.text2')}} </div>
				<div class="text3">{{$t('product.text3')}}</div>
				<img src="../assets/images/product/1.png" alt="">
			</div>
			<div class="section2">
				<div class="top">
				  <div><img src="../assets/images/product/2.png" alt="">{{$t('product.text4')}} </div>
				  <div><img src="../assets/images/product/3.png" alt="">{{$t('product.text5')}} </div>
				  <div><img src="../assets/images/product/4.png" alt="">{{$t('product.text6')}} </div>
				</div>
				<div class="text"> {{$t('product.text7')}}</div>
			</div>
			<div class="section3">
				<div class="com-width">
					<div class="top">
						<img src="../assets/images/product/6.png" alt="">
						<div class="text">{{$t('product.text8')}}</div>
					</div>
					<div class="mid">
						<div class="item">
							<div class="title">{{$t('product.text9')}}</div>
							<div class="text">{{$t('product.text10')}}</div>
						</div>
						<div class="item">
							<div class="title">{{$t('product.text11')}}</div>
							<div class="text">{{$t('product.text12')}}</div>
						</div>
					</div>
					<div class="btm">
						<img src="../assets/images/product/8.png" alt="">
						<img src="../assets/images/product/9.png" alt="">
					</div>
				</div>
			</div>
			<div class="section4">
				<div class="text">{{$t('product.text13')}}</div>
				<div class="list">
					<div class="item">
						<img src="../assets/images/product/10.png" alt="">
						<div class="text2">{{$t('product.text14')}}</div>
						<div class="text3">{{$t('product.text15')}} </div>
					</div>
					<div class="item">
						<img src="../assets/images/product/11.png" alt="">
						<div class="text2">{{$t('product.text16')}}</div>
						<div class="text3">{{$t('product.text17')}}</div>
					</div>
					<div class="item">
						<img src="../assets/images/product/12.png" alt="">
						<div class="text2">{{$t('product.text18')}}</div>
						<div class="text3">{{$t('product.text19')}}</div>
					</div>
				</div>
			</div>
			<div class="section5">
				<div class="block"></div>
				<div class="content">
					<div class="com-width">
						<div class="top">
							<img src="../assets/images/product/7.png" alt="">
							<div class="text">{{$t('product.text20')}}</div>
						</div>
						<div class="text2">{{$t('product.text21')}}</div>
						<div class="list">
							<div><img src="../assets/images/product/13.png" alt="">{{$t('product.text22')}}</div>
							<div><img src="../assets/images/product/14.png" alt="">{{$t('product.text23')}} </div>
							<div><img src="../assets/images/product/15.png" alt="">{{$t('product.text24')}} </div>
							<div><img src="../assets/images/product/16.png" alt="">{{$t('product.text25')}} </div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="section6">
				<div class="title">{{$t('product.text26')}}</div>
				<div class="list">
					<div><img src="../assets/images/product/18.png" alt="">{{$t('product.text27')}}</div>
					<div><img src="../assets/images/product/19.png" alt="">{{$t('product.text28')}}  </div>
					<div><img src="../assets/images/product/17.png" alt="">{{$t('product.text29')}} </div>
				</div>
				<div @click="goPage" class="start">{{$t('product.text30')}}</div>
			</div>
			
		</div>
		<footerBar></footerBar>
	</div>
</template>

<script>
	// @ is an alias to /src
	import {
		mapGetters
	} from "vuex";
	import headerNav from "@/components/nav/nav.vue";
	import footerBar from "@/components/footer/footer.vue";

	export default {
		name: "home",
		computed: {
			...mapGetters(["token"]),
		},
		components: {
			headerNav,
			footerBar,
		},
		methods: {
			goPage() {
				var path = this.token ? '/openAccount' : '/login'
				this.$router.push(path);
			},
			hideMenu(flag) {
				this.$store.dispatch("showMenu", false);
			},
		}
	};
</script>

<style lang="scss" scoped>
	header{
		z-index: 10000;
	}
	.page-home{
		overflow: hidden;
	}
	.com-width {
		width: 1600px;
		margin: 0 auto;
	}
	
	@media screen and (max-width: 1700px) {
		.com-width {
			width: 1500px!important;
		}
		
	}

	.section1 {
		height: 850px;
		margin-top: 120px;
		position: relative;
		overflow: hidden;
		z-index: 10;

		img {
			width: 660px;
			position: absolute;
			right: 0;
			top: 0;
		}

		.text {
			color: rgba(42, 219, 192, 1);
			font-size: 110px;
			padding-top: 20px;
		}
		.text2 {
			color: rgba(25, 25, 25, 0.73);
			font-size: 90px;
			margin: -30px 0 0px;
		}
		.text3 {
			color: rgba(82, 73, 73, 0.73);
			font-size: 30px;
			margin-top: 20px;
			width: 680px;
		}		

	}
	
	.section2{
		height: 700px;
		.top{
			padding-top: 190px;
			display: flex;
			justify-content: center;
			font-size: 35px;
			color: rgba(82, 73, 73, 0.73);
			font-weight: bold;
			img{
				width: 150px;
				margin-right: 20px;
			}
			
			div{
				display: flex;
				align-items: center;
				margin: 0 30px;
			}
		}
		.text{
			width: 1490px;
			font-size: 24px;
			margin: 108px auto;
			color: rgba(82, 73, 73, 0.73);
		    text-align: center;
		}
	}
	
	.section3{
		height: 1430px;
		background: url('../assets/images/product/5.png') no-repeat center;
		background-size: cover;
		.top{
			padding-top: 50px;
			margin-bottom: 50px;
			img{
				width: 80px;
				vertical-align: bottom;
				margin-right: 74px;
			}
			.text{
				color: rgba(25, 25, 25, 0.73);
				font-size: 100px;
				display: inline-block;
				vertical-align: bottom;
			}
		}
		
		.mid{
			display: flex;
			.item{
				width: 750px;
				margin-right: 170px;
				.title{
					color: #FFFFFF;
					font-size: 60px;
				}
				.text{
					color: rgba(82, 73, 73, 0.73);
					font-size: 26px;
					margin-top: 50px;
				}
			}
		}
		
		.btm{
			position: relative;
			margin-top: 200px;
			left: -50px;
			display: flex;
			img{
				width: 600px;
				margin-right: 220px;
			}
		}
		
	}
	.section4{
		text-align: center;
		height: 600px;
		margin-top: 100px;
		.text{
			width: 1440px;
			margin: 0 auto;
			color: rgba(25, 25, 25, 0.73);
			font-size: 35px;
			margin-bottom: 106px;
		}
		.list{
			display: flex;
			
			justify-content: center;
		}
		.item {
			width: 440px;
			color: rgba(25, 25, 25, 0.73);
			margin: 0 37px;
			img {
				display: inline-block;
				width: 150px;
				margin-bottom: 20px;
			}
			.text2{
				font-size: 30px;
				font-weight: bold;
				margin-bottom: 24px;
				color: rgba(25, 25, 25, 0.73);
			}
			.text3{
				font-size: 20px;
				text-align: justify;
				color: rgba(82, 73, 73, 0.73);
			}
		}
		
	}
	
	.section5{
		position: relative;
		height: 1000px;
		margin-top: 100px;

		.content{
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: 100;
		}
		.block{
			position: absolute;
			width: 115%;
			left: -10%;
			top: 50px;
			height: 800px;
			background-color: rgba(42, 219, 192, 1);
			transform: rotate(-7deg);
		}
		
		.top{
			img{
				width: 100px;
				vertical-align: bottom;
				margin-right: 74px;
			}
			.text{
				color: rgba(25, 25, 25, 0.73);
				font-size: 100px;
				display: inline-block;
				vertical-align: bottom;
			}
		}
		
		.text2{
			font-size: 32px;
			color: rgba(25, 25, 25, 0.73);
			width: 1323px;
			padding-left: 175px;
		}
		.list{
			margin-top: 140px;
			overflow:hidden;
			> div {
				width: 40%;
				margin-right: 20px;
				margin-bottom: 30px;
				float: left;
				display: flex;
				align-items: center;
				font-size: 60px;
				color: rgba(25, 25, 25, 0.73);
			}
		}
		
	}
	
	.section6{
		margin-top: 100px;
		.title{
			text-align: center;
			color: rgba(25, 25, 25, 0.73);
			font-size: 60px;
			font-weight: bold;
		}
		.list{
			margin-top: 20px;
			display: flex;
			align-items: center;
			justify-content: center;
			> div {
				margin:  0 20px;
				display: flex;
				align-items: center;
				font-size: 30px;
				color: rgba(25, 25, 25, 0.73);
				font-weight: bold;
			}
		}
		.start {
			width: 356px;
			height: 109px;
			line-height: 109px;
			text-align: center;
			border: 5px solid rgba(42, 219, 192, 1);
			opacity: 1;
			color: rgba(42, 219, 192, 1);
			font-size: 40px;
			margin: 80px auto 240px;
		}
	}

	
</style>
