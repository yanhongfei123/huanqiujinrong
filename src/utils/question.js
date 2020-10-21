export default {
  typeList: [{
      typeen: "Conservative type",
      typeft: "保守型",
      type: "保守型",
      score: "0-18",
	  mScore: 15,
	  tag1: '_A1',
	  tag2: '_A2',
      riskLevel: 1,
    },
    {
      typeen: "Cautious type",
      typeft: "謹慎型",
      type: "谨慎型",
      score: "19-24",
	  mScore: 22,
	  tag1: '_B1',
	  tag2: '_B2',
      riskLevel: 2,
    },
    {
      typeen: "Robust type",
      typeft: "穩健型",
      type: "稳健型",
      score: "25-30",
	  mScore: 28,
	  tag1: '_C1',
	  tag2: '_C2',
      riskLevel: 3,
    },
    {
      typeen: "entreprenant",
      typeft: "進取型",
      type: "进取型",
      score: "31-36",
	  mScore: 34,
	  tag1: '_D1',
	  tag2: '_D2',
      riskLevel: 4,
    },
    {
      typeen:'"Radical type"',
      typeft: "激進型",
      type: "激进型",
      score: "37-44",
	  mScore: 40,
	  tag1: '_E1',
	  tag2: '_E2',
      riskLevel: 5,
    }
  ],
  questionList: [{
      fqft: "您的年齡？",
      fq: "您的年龄？",
      asall: [{
          score: 4,
          asft: "18-30歲",
          as: "18-30岁",
          checked: false
        },
        {
          score: 3,
          asft: "31-45歲",
          as: "31-45岁",
          checked: false
        },
        {
          score: 2,
          asft: "41-60歲",
          as: "41-60岁",
          checked: false
        },
        {
          score: 1,
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
	  fqft: "除了您擁有的所有財產外，您還可以獲得$2,000,您會選擇下列哪壹項？",
	  fq: "除了您拥有的所有财产外，您还可以获得$2,000,您会选择下列哪一项？",
      asall: [{
          score: 1,
          asft: " 確定損失$500",
          as: "确定损失$500",
          checked: false
        },
        {
          score: 3,
          asft: "50％的機會失去$1,000，50％的機會保持原狀",
          as: "50％的机会失去$1,000，50％的机会保持原状",
          checked: false
        },
      ]
	},
	{
	  fqft: "假設您必須投資 20,000 美元，您認為以下哪個投資選擇最有吸引力？",
	  fq: "假设您必须投资20,000 美元，您认为以下哪个投资选择最有吸引力？",
	  asall: [{
	      score: 1,
	      asft: "70％在低風險投資中;20％在中風險投資中;10％在高風險投資中",
	      as: "70％在低风险投资中;20％在中风险投资中;10％在高风险投资中",
	      checked: false
	    },
	    {
	      score: 2,
	      asft: "50％在低風險投資中;30％在中風險投資中;20％在高風險投資中",
	      as: "50％在低风险投资中;30％在中风险投资中;20％在高风险投资中",
	      checked: false
	    },
	    {
	      score: 3,
	      asft: "20％在低風險投資中;30％在中風險投資中;50％在高風險投資中",
	      as: "20％在低风险投资中;30％在中风险投资中;50％在高风险投资中",
	      checked: false
	    },
	    {
	      score: 4,
	      asft: "10％在低風險投資中;20％在中風險投資中;70％在高風險投資中",
	      as: "10％在低风险投资中;20％在中风险投资中;70％在高风险投资中",
	      checked: false
	    }
	  ]
	},
	
	{
	  fqft: "假設您一年前購買的股票的價值突然上漲了 40％以上, 您會做什麼？",
	  fq: "假设您一年前购买的股票的价值突然上涨了 40％以上, 您会做什么？",
	  asall: [{
	      score: 1,
	      asft: "考慮出售足夠的資金來支付原始投資",
	      as: "考虑出售足够的资金来支付原始投资",
	      checked: false
	    },
	    {
	      score: 2,
	      asft: "出售現有股票，將現金轉移到低風險投資中",
	      as: "出售现有股票，将现金转移到低风险投资中",
	      checked: false
	    },
	    {
	      score: 3,
	      asft: "借錢買入更多的股票",
	      as: "借钱买入更多的股票",
	      checked: false
	    },
	  ]
	},	
	{
	  fqft: "以下兩種投資: 投資 A 預期收益為 10%,可能最大虧算為 5%; 投資 B 預期收益為30%,可能最大虧算為 15%,您會怎麼選擇?",
	  fq: "以下两种投资: 投资 A 预期收益为 10%,可能最大亏算为 5%; 投资 B 预期收益为30%,可能最大亏算为 15%,您会怎么选择?",
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
	},
	
	{ //9
	  fqft: "以下四種投資選擇的最佳和最壞情況的回報，您希望選擇哪一種？",
	  fq: "以下四种投资选择的最佳和最坏情况的回报，您希望选择哪一种？",
	  asall: [{
	      score: 1,
	      asft: "最好情況獲得$200;最壞情況獲得$0",
	      as: "最好情况获得$200;最坏情况获得$0",
	      checked: false
	    },
	    {
	      score: 2,
	      asft: "最好情況獲得$800;最壞情況獲得$200",
	      as: "好情况获得$800;最坏情况获得$200",
	      checked: false
	    },
	    {
	      score: 3,
	      asft: "最好情況獲得$2600;最壞情況獲得$800",
	      as: "最好情况获得$2600;最坏情况获得$800",
	      checked: false
	    },
	    {
	      score: 4,
	      asft: "最好情況獲得$4800;最壞情況獲得2400",
	      as: "最好情况获得$4800;最坏情况获得2400",
	      checked: false
	    }
	  ]
	},
    { //10
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
	{ //11
	  fqft: "下列哪一項最能貼切地形容您對風險的取向？",
	  fq: "下列哪一项最能贴切地形容您对风险的取向？",
	  asall: [{
	      score: 1,
	      asft: "非常抗拒風險，不願意看到我的投資虧損",
	      as: "非常抗拒风险，不愿意看到我的投资亏损",
	      checked: false
	    },
	    {
	      score: 2,
	      asft: "想為資金保值，但不介意接受少許價格波動，藉以增加投資的回報潛力，達到略高於銀行存款的回報",
	      as: "想为资金保值，但不介意接受少许价格波动，藉以增加投资的回报潜力，达到略高于银行存款的回报",
	      checked: false
	    },
	    {
	      score: 3,
	      asft: "希望穩中求勝，願意承受若干風險，藉以提高投資的回報潛力",
	      as: "希望稳中求胜，愿意承受若干风险，藉以提高投资的回报潜力",
	      checked: false
	    },
	    {
	      score: 4,
	      asft: "富冒險精神，能夠承受高度的投資風險，藉以爭取較高的回報",
	      as: "富冒险精神，能够承受高度的投资风险，藉以争取较高的回报",
	      checked: false
	    }
	  ]
	},
  ]
}