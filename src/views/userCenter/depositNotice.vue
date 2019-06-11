<template>
  <div class="depositNotice">
    <div class="info">如果您已汇款，请提交以下表单，方便我们查收入账。</div>
    <div class="item">
      <div class="label">
        <span>*</span>1.您已经选择的币种
      </div>
      <div class="radio-wrap">
        <el-radio v-model="radio" label="1">港币</el-radio>
      </div>
      <div class>
        <el-radio disabled v-model="radio" label="2">美元</el-radio>
      </div>
    </div>
    <div class="item mar0">
      <div class="label">
        <span>*</span>2.详细通讯地址：
      </div>
      <div class="address shadow">
        <el-input placeholder="请填写详细通讯地址" v-model="address" clearable></el-input>
      </div>
    </div>
    <div class="item mar0">
      <div class="label">
        <span>*</span>3.上传凭证，用于银行对账以加快到账速度（照片文件不能超过10M)：
      </div>
      <div class="upload-wrap">
        <el-upload
          class="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-success="handleSuccess"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-change="handleChange"
          :file-list="fileList"
          :before-upload="beforeUpload"
          list-type="picture"
        >
          <div class="upload-btn">
            <div class="add"></div>
            <div class="text">点击上传</div>
          </div>
        </el-upload>
      </div>
    </div>
    <div class="item mar0">
      <div class="label">4.留言备注：</div>
      <div class="textarea-wrap shadow">
        <el-input type="textarea" :rows="3" placeholder="最长50字" v-model="textarea"></el-input>
      </div>
    </div>
    <div class="submit">提交</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "1",
      address: "",
      textarea: "",
      fileList: [
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleSuccess(response, file, fileList) {
      console.log(response, file, fileList);
    },
    handleChange(file, fileList) {
      console.log(file, fileList);
    },
    beforeUpload(file) {
      console.log(file);
      console.log(file.size / (1024 * 1024));
      if (file.size / (1024 * 1024) > 1) {
        this.$alert("文件不能超过10M", "提示", {
          confirmButtonText: "确定"
        });
        return false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.depositNotice {
  padding-top: 40px;
  .shadow {
    box-shadow: 0px 0px 8px 1px rgba(239, 242, 247, 1);
  }
  .item {
    width: 380px;
    margin-bottom: 40px;
  }
  .info {
    font-size: 20px;
    font-weight: 600;
    color: rgba(20, 20, 22, 1);
    line-height: 24px;
    margin-bottom: 40px;
  }
  .label {
    font-size: 14px;
    font-weight: 400;
    color: #141416;
    opacity: 0.8;
    margin-bottom: 20px;
    span {
      color: #d51d26;
    }
  }
  .radio-wrap {
    margin-bottom: 20px;
  }
  .mar0 .label {
    margin-bottom: 8px;
  }
  .upload-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 120px;
    border-radius: 8px;
    background: #eeeff6;
    border: 2px solid rgba(238, 239, 246, 1);
    .add {
      width: 32px;
      height: 32px;
      background: url("../../assets/images/icon_upload.png") no-repeat center;
      background-size: contain;
    }
    .text {
      color: #3c3f4d;
      font-size: 14px;
      opacity: 0.5;
      margin-top: 10px;
    }
  }
  .submit {
    width: 400px;
    height: 80px;
    line-height: 80px;
    margin: 60px auto 40px;
    font-size: 28px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    opacity: 0.9;
    background: url("../../assets/images/other_btn/btn_red400.png") no-repeat
      center;
    background-size: 100%;
    &:hover {
      opacity: 1;
    }
  }
}
</style>

