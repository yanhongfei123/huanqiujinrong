<template>
	<div class="page-home">
		<header>
			<headerNav></headerNav>
		</header>
		<div @click="hideMenu($event)">
			<div class="com-width section1">
				<div class="text">為何選擇 <span>ETF</span> </div>
				<div class="text3">我們利用低成本的ETF建立你的核心全球投資組合和新浪潮投資。</div>
				<img src="../assets/images/why/6.png" alt="">
			</div>
			<div class="section2">
				<div class="content">
					<div>如果你投資於低成本的指數基金，把資金攤分10年投資  <img src="../assets/images/why/7.png" alt=""></div>
					<div>你的收益將會比90%把資金同時間投資的人更高。</div>
					 <div class="person">- 華倫 • 巴菲特</div>
				</div>
			</div>
			
			<div class="section3">
				<div class="content">
					<div class="item1">
						<img src="../assets/images/why/4.png" alt="">
						<div class="r-cont">
							<div class="title">什麼是 ETF?</div>
							<div class="text">ETF即交易所買賣基金(exchange-traded fun)，可讓投資者利用傳統基金賬戶輕鬆地以低成本投資市場的每個角落。</div>
					        <div class="text text2">你可以投資於股票、債券、商品、貨幣、期權或其他資產。投資者購買的股票代表在合併資產中的比例權益。</div>
						</div>
					</div>
					<div class="item2">	
						<div class="r-cont">
							<div class="title">ETF 的優勢</div>
							<dl>
								<dt> 1. 入場門檻低</dt>
								<dd> 與股票買賣無異，以每手為單位，市場資訊透明度高</dd>
							</dl>
							<dl>
								<dt> 2. 交易費低 </dt>
								<dd>部分與外地股票相關的ETF豁免印花稅；與一般基金相比，則省卻了基金的認購費及贖回費等 </dd>
							</dl>
							<dl>
								<dt>3. 流通量高 </dt>
								<dd>ETF設有市場莊家，維持市場流通量</dd>
							</dl>
						</div>
						<img src="../assets/images/why/5.png" alt="">
					</div>
				</div>
			</div>
			
			<div class="section5">
				<div class="title">為何選擇 ETF COOL?</div>
				<div class="list">
					<div class="item">
						<img src="../assets/images/why/11.png" alt="">
						<div class="text2">低廉管理費用 </div>
						<div class="text3">
                                ETF COOL 的管理費低至0.8%，比行業價格更低
                            </div>
					</div>
					<div class="item">
						<img src="../assets/images/why/12.png" alt="">
						<div class="text2"> 無資金閉鎖期 </div>
						<div class="text3">
                                你可以隨時因應所需提走資金，毋需附加費用
                            </div>
					</div>
					<div class="item">
						<img src="../assets/images/why/10.png" alt="">
						<div class="text2">全球分散投資</div>
						<div class="text3">
                                投資於全球發達和新興市場的數千家企業

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
		components: {
			headerNav,
			footerBar,
		},
		methods: {
			goPage() {
				var path = this.token ? '/openAccount' : '/register'
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
		height: 1088px;
		margin-top: 120px;
		position: relative;
		z-index: 10;

		img {
			position: absolute;
			right: -180px;
			top: 0;
			width: 1300px;
		}

		.text {
			color: rgba(25, 25, 25, 0.73);
			font-size: 150px;
			padding-top: 120px;
			span{
				color: rgba(42, 219, 192, 1);
			}
		}

		.text3 {
			color: rgba(82, 73, 73, 0.73);
			font-size: 46px;
			margin-top: 50px;
			width: 680px;
		}		

	}

	.section2{
		height: 922px;
		margin-top: -360px;
		position: relative;
		background: url(../assets/images/why/8.png) no-repeat center;
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: center;
		.content{
			text-align: center;
		}
		img {
			margin-bottom: 51px;
		}
		div{
			position: relative;
			font-size: 40px;
			color: #FFFFFF;
			img{
				position: absolute;
				left: -84px;
				top: -66px;
			}
		}
		.person {
			margin-top: 80px;
		}
	}
	
	.section3{
		margin-top: 130px;
		.content{
			width: 1800px;
			margin: 0 auto;
		}
		.item1{
			overflow: hidden;
			img{
				float: left;
				padding-top: 70px;
			}
			.r-cont{
				width: 810px;
				float: right;
				.title{
					font-size: 100px;
					color: rgba(25, 25, 25, 0.73);
					margin-bottom: 18px;
				}
				.text{
					font-size: 42px;
					color:rgba(82, 73, 73, 0.73)
				}
				.text2{
					margin-top: 80px;
				}
			}
		}
		
		.item2{
			position: relative;
			overflow: hidden;
			padding-bottom: 200px;
			img{
				float: right;
			}
			.r-cont{
				position: absolute;
				top: 205px;
				left: 80px;
				width: 750px;
				.title{
					font-size: 100px;
					color: rgba(25, 25, 25, 0.73);
					margin-bottom: 42px;
				}
				dl{
					font-size: 42px;
					margin-bottom: 55px;
					color: rgba(82, 73, 73, 0.73);
					dt{
						font-weight: bold;
					}
				}
			}
		}
	}
	
	
	.section5{
		text-align: center;
		height: 900px;
		.title{
			height: 266px;
			color: rgba(25, 25, 25, 0.73);
			font-size: 100px;
			margin-bottom: 20px;
			font-weight: bold;
		}
		
		.list{
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.item {
			width: 484px;
			color: rgba(82, 73, 73, 0.73);
			margin: 0 40px;
			img {
				display: inline-block;
				width: 208px;
				margin-bottom: 50px;
			}
			.text2{
				font-size: 45px;
				font-weight: bold;
			}
			.text3{
				font-size: 42px;
				text-align: justify;
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
