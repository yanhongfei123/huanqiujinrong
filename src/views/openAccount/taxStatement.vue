<template>
    <div class="container">
        <header>
            <openAccountHeader></openAccountHeader>
        </header>
        <div class="content">
            <div class="title">网上开户</div>
            <div class="info-wrapper">
                <div class="tips"><label>* </label>您正在申请的是{{type==1?'美国':'香港'}}上市交易的ETF</div>
                <openAccountSteps :step=step></openAccountSteps>
                <el-form title="合规信息" class="statementInfoForm" :label-position="labelPosition" label-width="80px"
                         :model="statementInfo" ref="statementInfoForm" :rules="statementInfoRules">
                    <div class="info-title title1">
                        一. 税务居住地本人声明<br>
                        <p>税法要求我们获取有关您的税务居住地的某些证明。每个司法辖域对税务居住地的定义可能不同。
                            如您为美国公民，您必须表明美国是您的税务居住地。请咨询您的税务顾问或通过经合组织自动信息交换终端的信息了解更多有关税务居住地的信息，或有关美国国税局网站irs.gov上W8-BEN表说明的更多信息。</p>
                    </div>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="1.受益所有人名称:" prop="beneficiary" required>
                                <el-input v-model="statementInfo.beneficiary" placeholder="请输入受益所有人名称" :disabled="true"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item label="2.国籍:" prop="nationality" required>
                                <el-input v-model="statementInfo.nationality" placeholder="请输入国籍" :disabled="true"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col style="width: 380px">
                            <el-form-item label="3.居住地址:" prop="addr" required>
                                <el-input v-model="statementInfo.addr"
                                          placeholder="请与身份证明文件上地址保持一致。" :disabled="true"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col style="width: 380px;margin-left: 20px;">
                            <el-form-item label="4.出生日期:" prop="birthday" required>
                                <el-date-picker type="date" :placeholder="$t('openAccount.userInfo.text6')"
                                                v-model="statementInfo.birthday"
                                                value-format="yyyy-MM-dd"
                                                style="width: 100%;" :disabled="true"></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item label="5.您是否有美国纳税人识别号？" prop="USDiscern" required>
                        <el-radio-group v-model="statementInfo.USDiscern">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                        </el-radio-group>
                        <el-form-item label="US TIN:" prop="TIN" v-if="statementInfo.USDiscern == 1"
                                      style="width: 380px;margin-top: 10px;">
                            <el-input v-model="statementInfo.TIN" placeholder="请与身份证明文件上地址保持一致。"></el-input>
                        </el-form-item>
                    </el-form-item>
                    <el-form-item label="6.您是否可享受美国所得税协定优惠？" prop="isUsDiscount" required>
                        <el-radio-group v-model="statementInfo.isUsDiscount">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                        </el-radio-group>
                        <p class="desc">
                            尽管您可能与和美国执行税收优惠协定的国家有所关联，但您还未选择协定国。如果不选择，那么您在美国账户赚取的收入可能会被征收额外的预扣税。如果您认为自己符合税收优惠协定的条件，进行选择；反之则无需采取任何行动</p>
                        <div v-if="statementInfo.isUsDiscount == 1">
                            <p class="text tax-text1">本人确认，受益所有人在美国与所属国的税收协定下，符合</p>
                            <el-form-item prop="taxIncentivesCountry" style="width: 416px;margin-top: 10px;">
                                <el-select v-model="statementInfo.usCountry" placeholder="请选择国家/地区"
                                           style="width: 380px;">
                                    <el-option
                                            v-for="item in countryList"
                                            :key="item.dictCode"
                                            :label="item | filterByLanguage('dictLabel')"
                                            :value="item.dictValue">
                                    </el-option>
                                </el-select>
                                <p class="text tax-text2">的居民定义。</p>
                            </el-form-item>
                        </div>
                    </el-form-item>
                    <el-form-item label="7.出生国家/地区" prop="country" required>
                        <el-select v-model="statementInfo.country" placeholder="请选择国家/地区" style="width: 380px;"
                                   disabled>
                            <el-option
                                    v-for="item in countryList"
                                    :key="item.dictCode"
                                    :label="item | filterByLanguage('dictLabel')"
                                    :value="item.dictValue">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="8.税务居住地声明" required>
                        <el-row>
                            <el-col style="width: 380px">
                                <div class="input-title">税务居住国</div>
                                <el-input v-model="statementInfo.taxCountry" :disabled="true"></el-input>
                            </el-col>
                            <el-col style="width: 380px;margin-left: 20px;">
                                <div class="input-title">美国纳税人识别号码</div>
                                <el-input v-model="statementInfo.usTaxNo" :disabled="true"></el-input>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="9.美国国税局声明 - 仅适用于行 1-{0}:" required>
                        <div class="tax-statement">
                            <p>本人声明，我已仔细检查了第1-{0}行内的信息，据我所知及所信，此类信息是真实、正确且完整的；如有不实，甘受伪证罪处罚。我进一步以甘受伪证罪处罚为担保，声明以下事项：</p>
                            <p>
                                1.本人是本表格相关之收入的受益所有人（或被授权为受益所有人签字），或正在使用该表格作为文件证明本人是一家外国金融机构的所有人或账户持有人，本表第1行中列出的人士不是美国税务居民或美国人。</p>
                            <p>2.与本表有关之所得系：(i)与在美国境内从事贸易或商业活动无关，(ii)
                                与在美国境内从事贸易或商业活动有关，但因税收协定而不用纳税，或者(iii)属合伙人分配自其合伙组织之所得。</p>
                            <p>
                                3.本表第1行所列个人，就美国与表格第6行所列之协定国家（如有）之间的所得税协定而言，符合该国居民之定义，且对经纪商交易或易货交易，受益所有人是W-8BEN表说明中定义的免税外籍人士。</p>
                            <p>4.此外，我授权将此表提供给任何一个能够控制、收受或保管以我为受益所有人之所得的扣缴代理人，或任何可以支付或分配以我为受益所有人之所得的扣缴代理人。</p>
                            <p>本人同意本表之任何声明如有不正确时，会在30天内重新提交新的表格。</p>
                            <p>除了用以确立您非美国人身份及降低预扣税率的声明外，美国国税局不需要征得您对本文件条款的同意。</p>
                        </div>
                    </el-form-item>
                    <el-form-item label="10.个人税务居住地自我声明 - 仅适用于行1-{0} 及 {1} - {2}:" required>
                        <div class="tax-statement">
                            <p>本人声明，本人在本表中提供的信息，据我所知和所信，是准确完整的。<br>
                                本人同意，本表中包含的有关账户持有人和账户活动的信息可能会与我们的关联方共享，也可能被用于向<br>
                                Inland Revenue Department报告，后者在法律允许的范围内可能会与全球其他政府当局共享此类信息。在法律要求的范围内，我<br>
                                同意共享此类信息，并在必要的程度内免除数据保护或其他适用法律下对此类信息的保护与权利。</p>
                            <p>日期： <span>{{ statementInfo.date }}</span></p>
                            <p>客户在此输入签名即表示确认所填写的内容准确或同意税务居住地本人声明(Substitute W-8BEN)条款，本人了解并同意此电子签名等同于手写签名。</p>
                        </div>
                    </el-form-item>
                    <el-form-item label="签名：" prop="autograph" required>
                        <el-input placeholder="请输入签名，名与姓之间有一个空格" v-model="statementInfo.autograph"></el-input>
                    </el-form-item>
                    <el-form-item label="11 . 勾选“是”表示您同意我们通过电子化的形式（包括通过账户管理终端）而非纸质形式收集及分发税表。" prop="agreement" required>
                        <el-radio-group v-model="statementInfo.agreement">
                            <el-radio :label="0" style="width: 360px">是</el-radio>
                            <el-radio :label="1" style="width: 360px">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <div class="important-tips">
                        重要提示：（产品名称）作为智能投资顾问服务提供商，为帮助客户完成底层资产交易需与第三方证券交易商合作。因此您的开户信息将被发送至第三方开立证券交易账户。（产品名称）的第三方合作券商为盈透证券有限公司（Interactive
                        Brokers Hong Kong Limited)。盈透证券在香港证监会的监管下从事第一类活动-证券交易，中央编号为ADI249，将为（产品名称）的客户进行底层交易及提供交易明细或交易结单。
                    </div>
                </el-form>
                <div class="btn-wrap">
                    <div @click="saveStatementInfo('statementInfoForm')" class="btn-item btn1">保存</div>
                    <div @click="prev" class="btn-item btn2">上一步</div>
                    <div @click="next('statementInfoForm')" class="btn-item btn3">本人同意</div>
                </div>
            </div>

        </div>
        <footerBar></footerBar>
    </div>
</template>

<script>

  import openAccountHeader from '@/components/header/openAccountHeader.vue';
  import footerBar from '@/components/footer/footer.vue';
  import openAccountSteps from '@/components/common/openAccountSteps.vue';
  import { parseTime } from '@/utils/index.js';
  import { getUserBase, getUserInfo, updateUserBase } from '@/api/openAccount';

  export default {
    name: 'statementInfo',
    components: {
      openAccountHeader,
      footerBar,
      openAccountSteps
    },
    data() {
      return {
        type: this.$route.query.type,
        step: 2,
        labelPosition: 'top',
        countryList: [],
        statementInfoRules: {
          beneficiary: [
            { required: true, message: '请输入收益所有人名称' },
          ],
          nationality: [
            { required: true, message: '请输入国籍' },
          ],
          addr: [
            { required: true, message: '请输入居住地址' },
          ],
          birthday: [
            { required: true, message: '请选择出生日期' },
          ],
          USDiscern: [
            { required: true, message: '请选择' },
          ],
          taxNo: [
            { required: true, message: '请填写纳税识别号' },
          ],
          isUsDiscount: [
            { required: true, message: '请选择' },
          ],
          usCountry: [
            { required: true, message: '请选择优惠国家' },
          ],
          country: [
            { required: true, message: '请选择出生国家/地区' },
          ],
          taxCountry: [
            { required: true, message: '请选择税务居住国家/地区' },
          ],
          usTaxNo: [
            { required: true, message: '请填写美国纳税人识别号码' },
          ],
          autograph: [
            { required: true, message: '请填写签名' },
          ],
          agreement: [
            { required: true, message: '请选择' },
          ]
        },
        statementInfo: {
          nationality: '中国香港',
          birthday: '',
          country: '',
          USDiscern: '',
          taxCountry: '中国香港',
          isUsDiscount: '',

        }
      };
    },
    computed: {
      pickerOptions() {
        return {
          disabledDate(time) {
            return time.getTime() > Date.now();//开始时间不选时，结束时间最大值小于等于当天
          }
        };
      },
    },
    methods: {
      saveStatementInfo(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //...请求接口后提示
            let params = {
              USDiscern: this.statementInfo.USDiscern,
              isUsDiscount: this.statementInfo.isUsDiscount,
              taxTreaty: this.statementInfo.taxTreaty,
              autograph: this.statementInfo.autograph
            };
            if(this.statementInfo.USDiscern==1){
              params.TIN = this.statementInfo.TIN;
            }
            if(this.statementInfo.isUsDiscount==1){
              params.usCountry = this.statementInfo.usCountry;
            }
            updateUserBase(params).then(res => {
              console.log(res);
              this.$message.success('保存成功');
            });
          }
        });
      },
      prev() {
        this.$router.replace({ name: 'regulatoryInfo' });
      },
      next(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //...请求接口后跳转
            let params = {
              USDiscern: this.statementInfo.USDiscern,
              isUsDiscount: this.statementInfo.isUsDiscount,
              taxTreaty: this.statementInfo.taxTreaty,
              autograph: this.statementInfo.autograph
            };
            if(this.statementInfo.USDiscern==1){
                params.TIN = this.statementInfo.TIN;
            }
            if(this.statementInfo.isUsDiscount==1){
              params.usCountry = this.statementInfo.usCountry;
            }
            updateUserBase(params).then(res => {
              console.log(res);
              // this.$router.replace({ name: 'disClosure' });
            });
          }
        });
      }
    },
    mounted() {
      this.getGlobalData('country_type').then(res => {
        this.countryList = res.data.list;
        getUserInfo().then(response => {
          if (response.data) {
            let data = response.data;
            this.statementInfo.birthday = data.birthday;
            this.statementInfo.usTaxNo = data.card;
            this.statementInfo.beneficiary = data.surnameChina+data.nameChina;
            getUserBase().then(data => {
              this.statementInfo.addr = data.data.addr;
              this.statementInfo.country = data.data.country;
              this.statementInfo.isUsDiscount = parseInt(data.data.isUsDiscount);
              this.statementInfo.autograph = data.data.autograph;
              this.statementInfo.USDiscern = parseInt(data.data.uSDiscern);
            });
          }
        });

      });
    }
  };
</script>
<style lang="scss">
    .el-radio-group {
        margin-top: 20px;
    }

</style>

<style scoped lang="scss">
    .container {
        .content {
            width: 1180px;
            margin: 0 auto;
            padding-top: 40px;
        }

        .title {
            height: 58px;
            font-size: 40px;
            font-family: SourceHanSansSC-Medium;
            font-weight: 500;
            color: rgba(60, 63, 77, 1);
            line-height: 58px;
        }

        .info-wrapper {
            padding: 20px 116px 100px;

            .tips {
                padding-bottom: 16px;
                font-size: 16px;
                font-family: SourceHanSansSC-Regular;
                font-weight: 400;
                color: #3B4859;
                line-height: 24px;

                label {
                    color: #F50000;
                }
            }

            .info-title {
                margin-top: 60px;
                padding-bottom: 30px;
                font-size: 24px;
                font-family: SourceHanSansSC-Medium;
                font-weight: 500;
                color: #3B4859;
                line-height: 24px;

                &.title1 {
                    margin-top: 80px;
                }

                p {
                    padding-top: 36px;
                    font-size: 16px;
                    font-family: SourceHanSansSC-Regular;
                    font-weight: 400;
                    color: #3C3F4D;
                    line-height: 32px;
                }
            }

            .statementInfoForm {
                width: 780px;
                margin: 0 auto;

                .el-form-item {
                    margin-bottom: 40px !important;
                }

                p.desc {
                    margin-top: 20px;
                    font-size: 14px;
                    font-family: SourceHanSansSC-Regular;
                    font-weight: 400;
                    color: #3C3F4D;
                    line-height: 32px;
                }

                .text {
                    width: 416px;
                    height: 32px;
                    font-size: 16px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(20, 20, 22, 0.8);
                    line-height: 32px;

                    &.tax-text1 {
                        margin: 20px 0 10px;
                    }

                    &.tax-text2 {
                        margin-top: 10px;
                    }
                }

                .tax-statement {
                    margin-top: 20px;
                    font-size: 14px;
                    font-family: SourceHanSansSC-Regular;
                    font-weight: 400;
                    color: #141416;
                    line-height: 20px;

                    p {
                        margin-bottom: 20px;
                    }
                }

                .important-tips {
                    padding: 40px 0 22px;
                    font-size: 16px;
                    font-family: SourceHanSansSC-Medium;
                    font-weight: 500;
                    color: #000;
                    line-height: 32px;
                }
            }
        }

        .btn-wrap {
            padding-top: 42px;
            position: relative;
            display: flex;
            justify-content: center;

            .btn-item {
                width: 160px;
                height: 48px;
                line-height: 48px;
                font-size: 18px;
                cursor: pointer;
                opacity: 0.9;
                text-align: center;
                background-position: center;
                background-size: contain;

                &:hover {
                    opacity: 1;
                }
            }

            .btn1 {
                color: #3c3f4d;
                background-image: url("~@/assets/images/other_btn/btn_yellow160.png");
            }

            .btn2 {
                margin: 0 40px;
                color: #fff;
                background-image: url("~@/assets/images/other_btn/btn_pink160.png");
            }

            .btn3 {
                color: #fff;
                background-image: url("~@/assets/images/other_btn/btn_red160.png");
            }
        }
    }


</style>
