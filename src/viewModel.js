/* eslint-disable import/extensions */
// import Complier from './complier.js'
// import Observer from './observer.js'

class ViewModel {
  constructor(options = {}) {
    this.options = options
    this.data = options.data()
    console.log(this.data)
    this.init()
  }

  init() {
    // 编译 html，订阅更新事件
    // 模板语法: 插值文本/插值表达式
    // 指令 v-bind(:) 属性 v-on(@) 事件 v-html 原始 html
    // data 数据拦截，变更后通知需要更新视图
    function observer(data) {
      if (!data || typeof data !== 'object') {
        return
      }

      const keys = Object.keys(data)
      keys.forEach((key) => {
        Object.defineProperty(this, key, {
          get() {
            return data[key]
          },
          set(newVal) {
            if (data[key] === newVal) {
              return
            }
            console.log(`数据变更 ${data[key]} => ${newVal}`)
            // eslint-disable-next-line no-param-reassign
            data[key] = newVal
          },
        })
      })
    }
    observer.bind(this)(this.data)
  }
}

export default ViewModel
