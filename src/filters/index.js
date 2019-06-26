// set function parseTime,formatTime to filter
export {
  parseTime,
  formatTime
}
from '@/utils'
import i18n from '../lang'

// 传中文字段进来，根据当前语言类型取对应语言的字段
export function filterByLanguage(value, key) {
  var lang = i18n.locale;
  return lang == 'zh' ? value[key] : value[`${key}${lang}`];
}

export function renderFq(sub) {
  var lang = i18n.locale;
  switch (lang) {
    case "zh":
      return sub["fq"];
    case "Ft":
      return sub["fqft"];
    default:
      return sub["fqen"];
  }
}

export function renderAnswer(item) {
  var lang = i18n.locale;
  switch (lang) {
    case "zh":
      return item["as"];
    case "Ft":
      return item["asft"] ? item["asft"] : item["as"];
    default:
      return item["asen"];
  }
}

function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

/* 数字 格式化*/
export function numberFormatter(num, digits) {
  const si = [{
      value: 1E18,
      symbol: 'E'
    },
    {
      value: 1E15,
      symbol: 'P'
    },
    {
      value: 1E12,
      symbol: 'T'
    },
    {
      value: 1E9,
      symbol: 'G'
    },
    {
      value: 1E6,
      symbol: 'M'
    },
    {
      value: 1E3,
      symbol: 'k'
    }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}

export function toThousandslsFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}