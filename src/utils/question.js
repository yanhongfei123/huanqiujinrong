export default {
  typeList: [{
      typeen: "Conservative type",
      typeft: "保守型",
      type: "保守型",
      score: "6-9",
      riskLevel: 1,
    },
    {
      typeen: "Cautious type",
      typeft: "謹慎型",
      type: "谨慎型",
      score: "10-13",
      riskLevel: 2,
    },
    {
      typeen: "Robust type",
      typeft: "穩健型",
      type: "稳健型",
      score: "14-17",
      riskLevel: 3,
    },
    {
      typeen: "entreprenant",
      typeft: "進取型",
      type: "进取型",
      score: "18-21",
      riskLevel: 4,
    },
    {
      typeen:'"Radical type"',
      typeft: "激進型",
      type: "激进型",
      score: "22-24",
      riskLevel: 5,
    }
  ],
  questionList: [{
      fqft: "您的年齡？",
      fq: "您的年龄？",
      asall: [{
          score: 1,
          asft: "18-30歲",
          as: "18-30岁",
          checked: false
        },
        {
          score: 2,
          asft: "31-45歲",
          as: "31-45岁",
          checked: false
        },
        {
          score: 3,
          asft: "41-60歲",
          as: "41-60岁",
          checked: false
        },
        {
          score: 4,
          asft: "61歲以上",
          as: "61岁以上",
          checked: false
        }
      ]
    },
    {
      fqft: "您的年收入爲 (港幣) ？",
      fq: "您的年收入为 (港币) ？",
      asall: [{
          score: 1,
          asft: "25萬以下",
          as: "25万以下",
          checked: false
        },
        {
          score: 2,
          asft: "25-70萬",
          as: "25-70万",
          checked: false
        },
        {
          score: 3,
          asft: "71萬-300萬",
          as: "71万-300万",
          checked: false
        },
        {
          score: 4,
          asft: "300萬以上",
          as: "300万以上",
          checked: false
        }
      ]
    },
    {
      fqft: "您的總資産中（自住房屋除外），願意投資于股票與債權等金融産品的比例？",
      fq: "您的总资产中（自住房屋除外），愿意投资于股票与债权等金融产品的比例？",
      asall: [{
          score: 1,
          as: "低于10%",
          checked: false
        },
        {
          score: 2,
          as: "10%-25%",
          checked: false
        },
        {
          score: 3,
          as: "25%-50%",
          checked: false
        },
        {
          score: 4,
          as: "50%以上",
          checked: false
        }
      ]
    },
    {
      fqft: "您進行全球資産配置的年限爲？",
      fq: "您进行全球资产配置的年限为？",
      asall: [{
          score: 1,
          as: "1-3年",
          checked: false
        },
        {
          score: 2,
          as: "3-5年",
          checked: false
        },
        {
          score: 3,
          as: "5-10年",
          checked: false
        },
        {
          score: 4,
          as: "10年以上",
          checked: false
        }
      ]
    },
    {
      fqft: "下列哪一項最符合您的投資經驗？",
      fq: "下列哪一项最符合您的投资经验？",
      asall: [{
          score: 1,
          asft: "相對有限",
          as: "相对有限",
          checked: false
        },
        {
          score: 2,
          asft: "有一些，但需要聽取專業人士的意見",
          as: "有一些，但需要听取专业人士的意见",
          checked: false
        },
        {
          score: 3,
          asft: "比較豐富，基本可以獨立判斷和承擔風險",
          as: "比较丰富，基本可以独立判断和承担风险",
          checked: false
        },
        {
          score: 4,
          asft: "具有專業投資資格和經驗",
          as: "具有专业投资资格和经验",
          checked: false
        }
      ]
    },
    {
      fqft: "假設有兩種投資：投資A預期收益爲10%,可能最大虧損爲5%；投資B預期收益爲30%,可能最大虧損爲15%。您會怎麽選擇？",
      fq: "假设有两种投资：投资A预期收益为10%,可能最大亏损为5%；投资B预期收益为30%,可能最大亏损为15%。您会怎么选择？",
      asall: [{
          score: 1,
          asft: "全部投資于收益較小且風險較小的A",
          as: "全部投资于收益较小且风险较小的A",
          checked: false
        },
        {
          score: 2,
          asft: "大部分資金投資于收益較小且風險較小的A",
          as: "大部分资金投资于收益较小且风险较小的A",
          checked: false
        },
        {
          score: 3,
          asft: "大部分資金投資于收益較大且風險較大的B",
          as: "大部分资金投资于收益较大且风险较大的B",
          checked: false
        },
        {
          score: 4,
          asft: "全部投資于收益較大且風險較大的B",
          as: "全部投资于收益较大且风险较大的B",
          checked: false
        }
      ]
    }
  ]
}