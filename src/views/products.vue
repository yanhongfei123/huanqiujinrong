<template>
	<div class="page-home">
		<header>
			<headerNav></headerNav>
		</header>
		<div @click="hideMenu($event)">
			<div class="com-width section1">
				<div class="text">ETF COOL</div>
				<div class="text2">投資產品 </div>
				<div class="text3">每個人都有自己的目標，也許是你夢寐以求的公寓、孩子的高等教育、或是到你最喜歡的國家旅行。無論你的目標是什麼，ETF COOL都能助你實現。</div>
				<img src="../assets/images/product/1.png" alt="">
			</div>
			<div class="section2">
				<div class="top">
				  <div><img src="../assets/images/product/2.png" alt="">低管理費用 </div>
				  <div><img src="../assets/images/product/3.png" alt="">低管理費用 </div>
				  <div><img src="../assets/images/product/4.png" alt="">全球分散投資 </div>
				</div>
				<div class="text">我們的投資組合根據諾貝爾得獎研究而設計，投資組合策略包括發達和新興市場的股票投資，以及世界各地政府、機構和企業的債券投資。我們的投資優化過程由客觀數據支持，為你推薦的投資組合亦傾向於市值較小但極具價值的股票和投資。</div>
			</div>
			<div class="section3">
				<div class="com-width">
					<div class="top">
						<img src="../assets/images/product/6.png" alt="">
						<div class="text">全球核心投資</div>
					</div>
					<div class="mid">
						<div class="item">
							<div class="title">香港ETF組合</div>
							<div class="text">香港交易所是全球最開放的金融市場之一，亦是你打入中國市場的最佳門戶。只需少量資金，ETF COOL即可助你從中國蓬勃的經濟發展中獲得收益。</div>
						</div>
						<div class="item">
							<div class="title">美國ETF組合</div>
							<div class="text">作為世界上最成熟和活躍的金融創新中心，美國證券交易所將為你提供前所未有的機會。你可以投資於全球每個角落，擴大投資範圍。</div>
						</div>
					</div>
					<div class="btm">
						<img src="../assets/images/product/8.png" alt="">
						<img src="../assets/images/product/9.png" alt="">
					</div>
				</div>
			</div>
			<div class="section4">
				<div class="text">無論你偏好哪個核心組合，你都可以自由選擇以下不同的基金組合：</div>
				<div class="list">
					<div class="item">
						<img src="../assets/images/product/10.png" alt="">
						<div class="text2">保守組合</div>
						<div class="text3">主要由債券基金組成，專注於現金收益，不受市場波動影響 </div>
					</div>
					<div class="item">
						<img src="../assets/images/product/11.png" alt="">
						<div class="text2">均衡組合</div>
						<div class="text3">由股票和債券基金組成，追求增長之餘，亦會保持穩定的現金流</div>
					</div>
					<div class="item">
						<img src="../assets/images/product/12.png" alt="">
						<div class="text2">增長組合</div>
						<div class="text3">主要由股票基金組成。在風險可控的情況下，增長是優先考慮因素</div>
					</div>
				</div>
			</div>
			<div class="section5">
				<div class="block"></div>
				<div class="content">
					<div class="com-width">
						<div class="top">
							<img src="../assets/images/product/7.png" alt="">
							<div class="text">主題投資組合</div>
						</div>
						<div class="text2">(即將推出) 了解以下主題投資機會，助你增強投資組合，投資於你認為重要的議題上。</div>
						<div class="list">
							<div><img src="../assets/images/product/13.png" alt="">電子汽車</div>
							<div><img src="../assets/images/product/14.png" alt="">雲端運算 </div>
							<div><img src="../assets/images/product/15.png" alt="">綠色能源 </div>
							<div><img src="../assets/images/product/16.png" alt="">生物科技 </div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="section6">
				<div class="title">立刻展開你的智酷投資之旅</div>
				<div class="list">
					<div><img src="../assets/images/product/18.png" alt="">建立你的個人檔案</div>
					<div><img src="../assets/images/product/19.png" alt="">獲得投資建議  </div>
					<div><img src="../assets/images/product/17.png" alt="">見證你的投資增長 </div>
				</div>
				<div @click="goPage" class="start"></div>
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

	.section1 {
		height: 1095px;
		margin-top: 120px;
		position: relative;
		overflow: hidden;
		z-index: 10;

		img {
			position: absolute;
			right: 0;
			top: 0;
		}

		.text {
			color: rgba(42, 219, 192, 1);
			font-size: 150px;
			padding-top: 220px;
		}
		.text2 {
			color: rgba(25, 25, 25, 0.73);
			font-size: 150px;
			margin: -40px 0 0px;
		}
		.text3 {
			color: rgba(82, 73, 73, 0.73);
			font-size: 46px;
			margin-top: 50px;
			width: 680px;
		}		

	}
	
	.section2{
		height: 1023px;
		.top{
			padding-top: 190px;
			display: flex;
			justify-content: center;
			font-size: 50px;
			color: rgba(82, 73, 73, 0.73);
			font-weight: bold;
			img{
				margin-right: 20px;
			}
			
			div{
				display: flex;
				align-items: center;
				margin: 0 20px;
			}
		}
		.text{
			width: 1490px;
			font-size: 47px;
			margin: 108px auto;
			color: rgba(82, 73, 73, 0.73);
		    text-align: center;
		}
	}
	
	.section3{
		height: 1495px;
		background: url('../assets/images/product/5.png') no-repeat center;
		background-size: cover;
		.top{
			padding-top: 50px;
			margin-bottom: 50px;
			img{
				vertical-align: bottom;
				margin-right: 74px;
			}
			.text{
				color: rgba(25, 25, 25, 0.73);
				font-size: 150px;
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
					font-size: 100px;
				}
				.text{
					color: rgba(82, 73, 73, 0.73);
					font-size: 42px;
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
				width: 700px;
				margin-right: 73px;
			}
		}
		
	}
	.section4{
		text-align: center;
		height: 1000px;
		margin-top: 100px;
		.text{
			width: 1440px;
			margin: 0 auto;
			color: rgba(25, 25, 25, 0.73);
			font-size: 45px;
			margin-bottom: 106px;
		}
		.list{
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.item {
			width: 440px;
			color: rgba(25, 25, 25, 0.73);
			margin: 0 37px;
			img {
				display: inline-block;
				width: 220px;
				margin-bottom: 34px;
			}
			.text2{
				font-size: 65px;
				font-weight: bold;
				margin-bottom: 24px;
				color: rgba(25, 25, 25, 0.73);
			}
			.text3{
				font-size: 42px;
				text-align: justify;
				color: rgba(82, 73, 73, 0.73);
			}
		}
		
	}
	
	.section5{
		position: relative;
		height: 1234px;
		margin-top: 100px;

		.content{
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: 100;
		}
		.block{
			position: absolute;
			width: 150%;
			left: -10%;
			top: 50px;
			height: 1000px;
			background-color: rgba(42, 219, 192, 1);
			transform: rotate(-8deg);
		}
		
		.top{
			img{
				vertical-align: bottom;
				margin-right: 74px;
			}
			.text{
				color: rgba(25, 25, 25, 0.73);
				font-size: 150px;
				display: inline-block;
				vertical-align: bottom;
			}
		}
		
		.text2{
			font-size: 45px;
			color: rgba(25, 25, 25, 0.73);
			width: 1323px;
			padding-left: 245px;
		}
		.list{
			margin-top: 200px;
			> div {
				width: 40%;
				margin-right: 20px;
				margin-bottom: 30px;
				float: left;
				display: flex;
				align-items: center;
				font-size: 100px;
				color: rgba(25, 25, 25, 0.73);
			}
		}
		
	}
	
	.section6{
		margin-top: 150px;
		.title{
			text-align: center;
			color: rgba(25, 25, 25, 0.73);
			font-size: 100px;
			font-weight: bold;
		}
		.list{
			margin-top: 20px;
			display: flex;
			align-items: center;
			justify-content: center;
			> div {
				display: flex;
				align-items: center;
				font-size: 50px;
				color: rgba(25, 25, 25, 0.73);
				font-weight: bold;
			}
		}
		.start {
			width: 356px;
			height: 109px;
			background: url('../assets/images/home/14.png') no-repeat center;
			background-size: cover;
			margin: 80px auto 240px;
		}
	}

	
</style>
