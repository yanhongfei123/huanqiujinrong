<template>
	<div class="page-home">
		<header>
			<headerNav></headerNav>
		</header>
		<div @click="hideMenu($event)">
			<div class="com-width section1">
				<div class="text">{{$t('why.text1')}} <span>ETF</span> </div>
				<div class="text3">{{$t('why.text2')}}</div>
				<img src="../assets/images/why/6.png" alt="">
			</div>
			<div class="section2">
				<div class="content">
					<div>{{$t('why.text3')}} <img src="../assets/images/why/7.png" alt=""></div>
					<div>{{$t('why.text4')}}</div>
					<div class="person">{{$t('why.text5')}}</div>
				</div>
			</div>

			<div class="section3">
				<div class="content">
					<div class="item1">
						<img src="../assets/images/why/4.png" alt="">
						<div class="r-cont">
							<div class="title">{{$t('why.text6')}}</div>
							<div class="text">{{$t('why.text7')}}</div>
							<div class="text text2">{{$t('why.text8')}}</div>
						</div>
					</div>
				</div>
				<div class="item2">
					<div class="r-cont">
						<div class="title">{{$t('why.text9')}}</div>
						<dl>
							<dt>{{$t('why.text10')}}</dt>
							<dd>{{$t('why.text11')}}</dd>
						</dl>
						<dl>
							<dt>{{$t('why.text12')}} </dt>
							<dd>{{$t('why.text13')}} </dd>
						</dl>
						<dl>
							<dt>{{$t('why.text14')}}</dt>
							<dd>{{$t('why.text15')}}</dd>
						</dl>
					</div>
					<img src="../assets/images/why/5.png" alt="">
				</div>
			</div>
		</div>

		<div class="section5">
			<div class="title">{{$t('why.text16')}}</div>
			<div class="list">
				<div class="item">
					<img src="../assets/images/why/11.png" alt="">
					<div class="text2">{{$t('why.text17')}} </div>
					<div class="text3">
						{{$t('why.text18')}}
					</div>
				</div>
				<div class="item">
					<img src="../assets/images/why/12.png" alt="">
					<div class="text2"> {{$t('why.text19')}} </div>
					<div class="text3">
						{{$t('why.text20')}}
					</div>
				</div>
				<div class="item">
					<img src="../assets/images/why/10.png" alt="">
					<div class="text2">{{$t('why.text21')}}</div>
					<div class="text3">
						{{$t('why.text22')}}

					</div>
				</div>
			</div>
		</div>

		<div class="section6">
			<div class="title">{{$t('why.text23')}}</div>
			<div class="list">
				<div><img src="../assets/images/product/18.png" alt="">{{$t('why.text24')}}</div>
				<div><img src="../assets/images/product/19.png" alt="">{{$t('why.text25')}} </div>
				<div><img src="../assets/images/product/17.png" alt="">{{$t('why.text26')}} </div>
			</div>
			<div @click="goPage" class="start">{{$t('why.text27')}}</div>
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
				var path = this.token ? '/openAccount' : '/login';
				this.$router.push(path);
			},
			hideMenu(flag) {
				this.$store.dispatch("showMenu", false);
			},
		}
	};
</script>

<style lang="scss" scoped>
	header {
		z-index: 10000;
	}

	.page-home {
		overflow: hidden;
	}

	.com-width {
		width: 1600px;
		margin: 0 auto;
	}
	
	@media screen and (max-width: 1700px) {
		.com-width {
			width: 1500px;
			margin: 0 auto;
		}
		.section3 {
			.content{
				width: 1500px!important;
			}
			
			.item1 img{
				width: 700px!important;
			}
			.item1 .r-cont{
				width: 750px!important;
			}
			.item2 img{
				width: 800px!important;
			}
		}
	}

	.section1 {
		height: 900px;
		position: relative;
		z-index: 10;

		img {
			position: absolute;
			right: -180px;
			top: 0;
			width: 1000px;
		}

		.text {
			color: rgba(25, 25, 25, 0.73);
			font-size: 100px;
			padding-top: 120px;

			span {
				color: rgba(42, 219, 192, 1);
			}
		}

		.text3 {
			color: rgba(82, 73, 73, 0.73);
			font-size: 30px;
			margin-top: 40px;
			width: 680px;
		}

	}

	.section2 {
		height: 860px;
		margin-top: -360px;
		position: relative;
		background: url(../assets/images/why/8.png) no-repeat center;
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: center;

		.content {
			text-align: center;
			width: 1400px
		}

		img {
			margin-bottom: 51px;
		}

		div {
			width: 1000px;
			position: relative;
			margin: 0 auto;
			font-size: 30px;
			color: #FFFFFF;

			img {
				width: 50px;
				position: absolute;
				left: 83px;
				top: -30px;
			}
		}

		.person {
			margin-top: 80px;
		}
	}

	.section3 {
		margin-top: 130px;

		.content {
			width: 1800px;
			margin: 0 auto;
		}

		.item1 {
			overflow: hidden;

			img {
				width: 700px;
				float: left;
				padding-top: 70px;
			}

			.r-cont {
				width: 810px;
				float: right;

				.title {
					font-size: 60px;
					color: rgba(25, 25, 25, 0.73);
					margin-bottom: 18px;
				}

				.text {
					font-size: 30px;
					color: rgba(82, 73, 73, 0.73)
				}

				.text2 {
					margin-top: 60px;
				}
			}
		}

		.item2 {
			position: relative;
			overflow: hidden;
			padding-bottom: 150px;


			img {
				width: 900px;
				float: right;
			}

			.r-cont {
				position: absolute;
				top: 205px;
				left: 80px;
				width: 750px;

				.title {
					font-size: 60px;
					color: rgba(25, 25, 25, 0.73);
					margin-bottom: 42px;
				}

				dl {
					font-size: 30px;
					margin-bottom: 55px;
					color: rgba(82, 73, 73, 0.73);

					dt {
						font-weight: bold;
					}
				}
			}
		}
	}


	.section5 {
		text-align: center;
		height: 700px;

		.title {
			height: 210px;
			color: rgba(25, 25, 25, 0.73);
			font-size: 60px;
			margin-bottom: 20px;
			font-weight: bold;
		}

		.list {
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
				width: 150px;
				margin-bottom: 30px;
			}

			.text2 {
				font-size: 35px;
				font-weight: bold;
			}

			.text3 {
				font-size: 30px;
				text-align: justify;
			}
		}
	}


	.section6 {
		margin-top: 100px;

		.title {
			text-align: center;
			color: rgba(25, 25, 25, 0.73);
			font-size: 60px;
			font-weight: bold;
		}

		.list {
			margin-top: 20px;
			display: flex;
			align-items: center;
			justify-content: center;

			>div {
				margin: 0 20px;
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
