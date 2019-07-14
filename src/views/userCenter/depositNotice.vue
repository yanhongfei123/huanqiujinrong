<template>
  <div class="depositNotice">
    <div class="info">{{$t('userCenter.depositNotice.text1')}}</div>
    <div class="item">
      <div class="label">
        <span>*</span>
        1.{{$t('userCenter.depositNotice.text2')}}
      </div>
      <div class="radio-wrap">
        <el-radio v-model="radio" label="1">{{$t('userCenter.depositNotice.text3')}}</el-radio>
      </div>
      <div class>
        <el-radio disabled v-model="radio" label="2">{{$t('userCenter.depositNotice.text4')}}</el-radio>
      </div>
    </div>
    <div class="item mar0">
      <div class="label">
        <span>*</span>
        2.{{$t('userCenter.depositNotice.text5')}}
      </div>
      <div class="address shadow">
        <el-input :placeholder="$t('userCenter.depositNotice.text6')" v-model="address" clearable></el-input>
      </div>
    </div>
    <div class="item mar0">
      <div class="label">
        <span>*</span>
        3.{{$t('userCenter.depositNotice.text7')}})：
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
          :show-file-list="false"
          list-type="picture-card"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <div v-else class="upload-btn">
            <div class="add"></div>
            <div class="text">{{$t('userCenter.depositNotice.text8')}}</div>
          </div>
        </el-upload>
      </div>
    </div>
    <div class="item mar0">
      <div class="label">4.{{$t('userCenter.depositNotice.text9')}}</div>
      <div class="textarea-wrap shadow">
        <el-input
          type="textarea"
          :rows="3"
          :placeholder="$t('userCenter.depositNotice.text10')"
          v-model="textarea"
        ></el-input>
      </div>
    </div>
    <div class="submit">{{$t('userCenter.depositNotice.text11')}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: '',
      radio: "1",
      address: "",
      textarea: "",
      fileList: []
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
    },
    handleSuccess(response, file, fileList) {
      console.log(response, file, fileList);
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    handleChange(file, fileList) {
      console.log(file, fileList);
    },
    beforeUpload(file) {
        const isImg = file.type.indexOf('image/') != -1;
        const isLt10M = file.size / 1024 / 1024 < 1;
        var msg = '';

        if (!isImg) {
          msg = '请上传.jpg,.jpeg,.png格式的图片'
        } else if (!isLt10M) {
          msg = '图片大小不能超过10MB!';
        }
        if(msg){
          this.$alert(msg, "提示", {
            confirmButtonText: "我知道了"
          });
        }
        return isImg && isLt10M;
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
  .avatar {
    max-width: 400px;
    display:block;
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

