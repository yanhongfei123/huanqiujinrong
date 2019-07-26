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
        <el-radio v-model="radio" label="2">{{$t('userCenter.depositNotice.text4')}}</el-radio>
      </div>
    </div>
    <div class="item mar0">
      <div class="label">
        <span>*</span>
        2.{{$t('userCenter.depositNotice.text5')}}
      </div>
      <div class="address">
        <el-input-number v-model="amount" :step="100" :min="100" :max="9999999999"></el-input-number>

        <!-- <el-input type="tel" maxlength="10"  :placeholder="$t('userCenter.depositNotice.text6')" v-model="amount" clearable></el-input> -->
      </div>
    </div>
    <div class="item mar0">
      <div class="label">
        <span>*</span>
        3.{{$t('userCenter.depositNotice.text7')}})：
      </div>
      <div class="upload-wrap">
          <div class="upload-wrap">
              <input ref="uploadFile" @change="change($event)" class="file" type="file" name="file">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <div v-else class="upload-btn">
                  <div class="add"></div>
                  <div class="text">{{$t('userCenter.depositNotice.text8')}}</div>
              </div>
          </div>
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
    <div @click="submit" class="submit">{{$t('userCenter.depositNotice.text11')}}</div>
  </div>
</template>
<script>
import { Message } from 'element-ui';
import config from '../../utils/config';
import { upload, getUserFile } from '@/api/openAccount.js'
import { editRemittanceNotice } from '@/api/userCenter.js'
export default {
  data() {
    return {
      imageUrl: '',
      radio: "1",
      amount: "",
      textarea: "",
      fileList: []
    };
  },
  methods: {
    submit(){
      if(this.imageUrl == ''){
        Message({
            message: '请上传凭证',
            type: 'warning'
        });
        return;
      }
      var params = {
        remark: this.textarea,
        voucherUrl: this.imageUrl,
        currency: this.radio,
        money: this.amount,
      };
      editRemittanceNotice(params).then(res => {
        Message({
            message: '保存成功',
            type: 'success'
        });
        setTimeout(()=>{
          this.$router.push('/accountPreView');
        }, 2000);
      });


    },
    change(e) {
        var file = e.target.files;
        this.uploadImg(file[0]);
    },
    uploadImg(file) {
        var file = this.$refs.uploadFile.files[0];
        var isImg = file.type.indexOf('image/') == -1;
        var isLt10M = file.size / 1024 / 1024 > 10;
        if (isImg) {
            Message({
                message: '不支持该格式的文件',
                type: 'warning'
            });
            return;
        }
        if (isLt10M) {
            Message({
                message: '您上传的图片超过10M，请重新选择图片',
                type: 'warning'
            });
          return
        }
        const formData = new FormData();
        formData.append("file", file);
        formData.append("type", 8);
        upload(formData).then(res => {
            this.imageUrl = res.data.url;
        });
    },
  },
  beforeMount(){
      getUserFile().then(res => {
        var data = res.data;
        var host = data.url;
        var nlist = data.list.filter(item => item.type == 8);
        if(data.list.length && nlist.length){
          this.imageUrl = host + nlist[0].url;
        }
      })
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
    max-width: 180px;
    display:block;
  }

  .upload-wrap{
      position: relative;
      input{
          position: absolute;
          left: 0;
          top: 0;
          z-index: 1;
          opacity: 0;
          width: 180px;
          height: 120px;
      }
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

