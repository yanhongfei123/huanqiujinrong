import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementTwLocale from 'element-ui/lib/locale/lang/zh-TW' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN' // element-ui lang
import enLocale from './en'
import zhLocale from './zh'
import ftLocale from './ft'



Vue.use(VueI18n)

const messages = {
  En: {
    ...enLocale,
    ...elementEnLocale,
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  },
  Ft: {
    ...ftLocale,
    ...elementTwLocale
  },

}

const i18n = new VueI18n({
  // set locale
  // options: en or zh
  locale: Cookies.get('language') || 'En',
  // set locale messages
  messages
})

export default i18n
