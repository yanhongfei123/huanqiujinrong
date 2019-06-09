<template>
  <div class>
    <div class="article-list">
      <div v-for="(val,index) in articleList" :key="index" class="article-item">
        <div class="r-wrap">
          <div class="title">{{val.title}}</div>
          <div class="des">{{val.des}}</div>
          <div class="b-wrap">
            <div class="time">{{val.time}}</div>
            <div class="has-read">分类：文章资讯</div>
          </div>
        </div>
      </div>
    </div>
    <el-pagination background layout="prev, pager, next" :total="500"></el-pagination>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  computed: {},
  data() {
    return {
      articleList: [
        {
          title: "走出明星投资人的交易陷阱",
          des:
            "尊敬的客户，很遗憾，您提交的卖出申请未能通过审核。如有任何疑问，请联系我们。",
          time: "2019-05-08 14:00",
          read: 2000
        },
        {
          title: "开户申请提交成功",
          des:
            "尊敬的客户，您已成功填写并提交开户资料，正在审核，请您耐心等待，完成开户流程预计3-7天。感谢您的信任与支持！",
          time: "2019-05-08 14:00",
          read: 2000
        },
        {
          title:
            "开户申请提交成功",
          des:
            "尊敬的客户，您已成功填写并提交开户资料，正在审核，请您耐心等待，完成开户流程预计3-7天。感谢您的信任与支持！",
          time: "2019-05-08 14:00",
          read: 2000
        }
      ]
    };
  },
  methods: {

  }
};
</script>

<style lang="scss">
.article-list {
  .article-item {
    padding: 20px 0;
    border-bottom: 1px solid rgba(220, 220, 220, 1);
  }
  .r-wrap {
    .title {
      margin-bottom: 20px;
      font-size: 25px;
      font-weight: bold;
      color: #333;
      line-height: 54px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .des {
      font-size: 20px;
      line-height: 30px;
      color: #444857;
      margin-bottom: 20px;
    }
  }
  .b-wrap {
    color: #444857;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    .has-read {
      padding-left: 30px;
    }
  }
}
</style>
