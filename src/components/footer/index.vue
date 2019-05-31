<template>
  <div class="footer-nav">
    <div
      @click="goPage(item.path)"
      class="nav-item"
      :class="[$route.path === item.path ? 'selected' : '']"
      v-for="(item, index) in footerNav"
      :key="index"
    >
      <div class="icon"></div>
      <div class="text">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {
      footerNav: [
        {
          path: "/home",
          text: "首页"
        },
        {
          path: "/shopCart",
          text: "购物车"
        },
        {
          path: "/buyerShow",
          text: "买家秀"
        },
        {
          path: "/orderCenter",
          text: "订单"
        },
        {
          path: "/my",
          text: "我的"
        }
      ]
    };
  },
  methods:{
    goPage(path){
      this.$router.push({ path })
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer-nav {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.28rem;
  padding: 0.2rem 0;
  color: #fff;
  background: #fff;
  .nav-item {
    text-align: center;
    font-size: 0.24rem;
    flex: 1;
    .text {
      color: #333;
    }
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      margin: 0 auto;
      background-position: center;
      background-size: contain;
    }
  }
    .selected .text {
      color: #d61b52;
    }
    .nav-item:nth-child(1) .icon {
      background-image: url("../../assets/images/nav/home-off.png");
    }
    .nav-item:nth-child(2) .icon {
      background-image: url("../../assets/images/nav/cart-off.png");
    }
    .nav-item:nth-child(3) .icon {
      background-image: url("../../assets/images/nav/show-off.png");
    }
    .nav-item:nth-child(4) .icon {
      background-image: url("../../assets/images/nav/order-off.png");
    }
    .nav-item:nth-child(5) .icon {
      background-image: url("../../assets/images/nav/my-off.png");
    }

    .nav-item:nth-child(1).selected .icon {
      background-image: url("../../assets/images/nav/home-on.png");
    }
    .nav-item:nth-child(2).selected .icon {
      background-image: url("../../assets/images/nav/cart-on.png");
    }
    .nav-item:nth-child(3).selected .icon {
      background-image: url("../../assets/images/nav/show-on.png");
    }
    .nav-item:nth-child(4).selected .icon {
      background-image: url("../../assets/images/nav/order-on.png");
    }
    .nav-item:nth-child(5).selected .icon {
      background-image: url("../../assets/images/nav/my-on.png");
    }

}
</style>
