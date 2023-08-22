import { createI18n } from 'vue-i18n'
// 引入同级目录下文件
const modules = import.meta.globEager('./*')

//假设你还有其他目录下的语言文件 它的路径是 src/views/home/locales/en-US.ts
//那么你就可以 使用 :lower:（小写） :upper:（大写） 来引入文件
// const viewModules = import.meta.globEager('../views/**/locales/[[:lower:]][[:lower:]]-[[:upper:]][[:upper:]].ts')
function getLangAll() {
  let message = {}
  getLangFiles(modules, message)
  //   getLangFiles(viewModules,message)
  return message
}

/**
 * 获取所有语言文件
 * @param {Object} mList
 */
function getLangFiles(mList, msg) {
  for (let path in mList) {
    if (mList[path].default) {
      //  获取文件名
      let pathName = path.substr(path.lastIndexOf('/') + 1, 5)

      if (msg[pathName]) {
        msg[pathName] = {
          ...mList[pathName],
          ...mList[path].default
        }
      } else {
        msg[pathName] = mList[path].default
      }
    }
  }
}

//得到默认使用的语言
const getDefaultLang = () => {
  // 用户指定了默认语言时，使用用户指定的
  if (navigator.language == 'zh-CN') {
    return 'zh-CN'
  } else {
    return 'en-US'
  }
}

//注册i8n实例并引入语言文件
const i18n = createI18n({
  legacy: false, // 使用Composition API，这里必须设置为false
  globalInjection: true,
  global: true,
  locale: getDefaultLang(),
  fallbackLocale: 'zh-CN', // 默认语言
  messages: getLangAll()
})

export default i18n
