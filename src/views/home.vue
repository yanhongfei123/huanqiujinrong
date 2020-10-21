<template>
	<div class="page-home">
		<header>
			<headerNav></headerNav>
		</header>
		<div @click="hideMenu($event)">
			<div class="com-width section1">
				<div class="text">{{$t('home.text1')}} <br />{{$t('home.text2')}} <span>{{$t('home.text29')}}</span> <br />{{$t('home.text28')}}</div>
				<div @click="goPage" class="start">{{$t('home.text222')}}</div>
				<div class="item">✓ {{$t('home.text3')}} </div>
				<div class="item">✓ {{$t('home.text4')}} </div>
				<div class="item">✓ {{$t('home.text5')}} </div>
				<img src="../assets/images/home/5.png" alt="">
			</div>
			<div class="section2">
				<div class="com-width content">
					<div class="left">
						<div class="text">{{$t('home.text6')}} </div>
						<div class="text2">
							{{$t('home.text7')}}
						</div>
						<div class="text3">
							{{$t('home.text8')}}
						</div>
						<div class="text4">{{$t('home.text9')}}
						</div>
						<a class="btn" href="/#/product">{{$t('home.text99')}}</a>
					</div>
					<img src="../assets/images/home/4.png" alt="">
				</div>
			</div>

			<div class="section3">
				<img src="../assets/images/home/7.png" alt="">
				<div @click="goPage" class="start">{{$t('home.text15')}}</div>
				<div class="content">
					<div class="title"> {{$t('home.text10')}} </div>
					<div class="item">
						<div class="icon icon1"></div>
						<div class="text">
							{{$t('home.text11')}} <br>{{$t('home.text12')}}
						</div>
					</div>
					<div class="item">
						<div class="icon icon2"></div>
						<div class="text"> {{$t('home.text13')}} <br>{{$t('home.text130')}}</div>
					</div>
					<div class="item">
						<div class="icon icon3"></div>
						<div class="text">
							{{$t('home.text14')}} <br>{{$t('home.text140')}}
						</div>
					</div>
				</div>
			</div>
			<div class="section4">
				<div class="content">
					<img src="../assets/images/home/11.png" alt="">
					<div>{{$t('home.text16')}}</div>
					<div>{{$t('home.text17')}}</div>
					<div class="person">{{$t('home.text18')}}</div>
				</div>
			</div>

			<div class="section5">
				<div class="title">{{$t('home.text19')}}</div>
				<div class="text">{{$t('home.text20')}}</div>
				<div class="list">
					<div class="item">
						<img src="../assets/images/home/9.png" alt="">
						<div class="text2">{{$t('home.text21')}}</div>
						<div class="text3">{{$t('home.text24')}} </div>
					</div>
					<div class="item">
						<img src="../assets/images/home/0.png" alt="">
						<div class="text2">{{$t('home.text22')}}</div>
						<div class="text3"> {{$t('home.text25')}}</div>
					</div>
					<div class="item">
						<img src="../assets/images/home/8.png" alt="">
						<div class="text2">{{$t('home.text23')}}</div>
						<div class="text3">{{$t('home.text26')}}</div>
					</div>
				</div>
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
	import {
		swiper,
		swiperSlide
	} from "vue-awesome-swiper";

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
			...mapGetters(["token"]),
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
			console.log('首页');
			// 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
			// setInterval(() => {
			//   this.oIndex = this.swiper.activeIndex;
			// }, 3300)
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
	.com-width {
		width: 1600px;
		margin: 0 auto;
	}


	.section1 {
		height: 973px;
		margin-top: 120px;
		position: relative;
		overflow: hidden;
		z-index: 10;

		img {
			position: absolute;
			right: 0;
			top: 0;
			width: 900px;
			//height: 973px;
		}

		.text {
			position: relative;
			z-index: 999;
			color: rgba(25, 25, 25, 0.73);
			font-size: 100px;
			padding-top: 120px;
			line-height: 120px;

			span {
				color: rgba(42, 219, 192, 1);
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
			margin: 80px 0 85px;
		}

		.item {
			color: rgba(82, 73, 73, 0.73);
			font-size: 50px;
		}

	}


	.section2 {
		margin-top: -156px;
		position: relative;
		height: 1494px;
		background: url(../assets/images/home/12.png) no-repeat center;
		background-size: cover;
		display: flex;
		align-items: center;

		img {
			position: absolute;
			right: 0;
			top: 50%;
			margin-top: -332px;
		}

		.left {
			width: 725px;
		}

		.text {
			font-size: 100px;
			color: #fff;
			margin-bottom: 35px;

		}

		.text2 {
			color: rgba(82, 73, 73, 0.73);
			font-size: 42px;
			font-weight: bold;
		}

		.text3 {
			color: rgba(82, 73, 73, 0.73);
			font-size: 38px;
			margin: 60px 0;
		}

		.text4 {
			color: rgba(82, 73, 73, 0.73);
			font-size: 38px;
		}

		.btn {
			display: block;
			width: 356px;
			height: 109px;
			line-height: 109px;
			text-align: center;
			border: 5px solid #fff;
			opacity: 1;
			color: #fff;
			font-size: 40px;
			margin-top: 120px;
		}
	}

	.section3 {
		height: 1088px;
		position: relative;

		.content {
			position: absolute;
			left: 42%;
			top: 158px;

			.title {
				padding-left: 40px;
				font-size: 100px;
				color: rgba(25, 25, 25, 0.73);
				margin-bottom: 60px;
			}

			.item {
				display: flex;
				align-items: center;

				.icon {
					width: 155px;
					height: 155px;
				}

				.icon1 {
					background: url(../assets/images/home/2.png) no-repeat center;
					background-size: cover;
				}

				.icon2 {
					background: url(../assets/images/home/3.png) no-repeat center;
					background-size: cover;
				}

				.icon3 {
					background: url(../assets/images/home/1.png) no-repeat center;
					background-size: cover;
				}

				.text {
					font-size: 35px;
					color: rgba(25, 25, 25, 0.73);
				}
			}

		}

		img {
			position: absolute;
			left: 0;
			bottom: -230px;
			z-index: 10;
		}

		.start {
			position: absolute;
			left: 60%;
			bottom: 140px;
			width: 387px;
			height: 91px;
			line-height: 91px;
			text-align: center;
			border: 5px solid rgba(42, 219, 192, 1);
			opacity: 1;
			color: rgba(42, 219, 192, 1);
			font-size: 40px;
		}
	}


	.section4 {
		height: 922px;
		position: relative;
		background: url(../assets/images/home/13.png) no-repeat center;
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: center;

		.content {
			text-align: center;
		}

		img {
			margin-bottom: 51px;
		}

		div {
			font-size: 40px;
			color: #FFFFFF;
		}

		.person {
			margin-top: 80px;
		}
	}

	.section5 {
		text-align: center;
		height: 1111px;

		.title {
			padding-top: 80px;
			color: rgba(25, 25, 25, 0.73);
			font-size: 100px;
			margin-bottom: 20px;
			font-weight: bold;
		}

		.text {
			width: 1440px;
			margin: 0 auto;
			color: rgba(25, 25, 25, 0.73);
			font-size: 38px;
			margin-bottom: 106px;
		}

		.list {
			display: flex;
			// align-items: center;
			justify-content: center;
		}

		.item {
			width: 360px;
			color: rgba(25, 25, 25, 0.73);
			margin: 0 86px;

			img {
				display: inline-block;
				width: 208px;
				margin-bottom: 29px;
			}

			.text2 {
				font-size: 36px;
				font-weight: bold;
			}

			.text3 {
				font-size: 28px;
				text-align: justify;
			}
		}
	}
</style>
