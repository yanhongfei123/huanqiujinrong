<template>
  <div class="article-wrap">
    <header>
      <headerNav path="/find"></headerNav>
    </header>
    <div class="com-width">
      ddd

    </div>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <footerBar></footerBar>
  </div>
</template>

<script>
import headerNav from "@/components/nav/nav.vue";
import footerBar from "@/components/footer/footer.vue";
export default {
  name: "art",
  components: {
    headerNav,
    footerBar
  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>
<style lang="scss" scoped>
.article-wrap {

}
</style>


