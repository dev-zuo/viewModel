# 工程创建 log

## ESLint 引入
```bash
# 初始化 package.json
npm init
# 安装 eslit + pritter
npm install eslint prettier eslint-config-prettier eslint-plugin-prettier --save-dev
# 初始化 eslint
npx eslint --init
# ✔ How would you like to use ESLint? · style
# ✔ What type of modules does your project use? · commonjs
# ✔ Which framework does your project use? · none
# ✔ Does your project use TypeScript? · No / Yes
# ✔ Where does your code run? · browser
# ✔ How would you like to define a style for your project? · guide
# ✔ Which style guide do you want to follow? · airbnb
# ✔ What format do you want your config file to be in? · JavaScript
# Checking peerDependencies of eslint-config-airbnb-base@latest
# The config that you've selected requires the following dependencies:
```
修改 eslint 规则
```js
// .eslintrc.js 修改
extends: ["airbnb-base", "plugin:prettier/recommended"],
rules: {
  'no-console': 0,
},

// 新增 .prettierrc.js
module.exports = {
  tabWidth: 2, // tab size
  semi: false, // 结尾不要 ; 
  singleQuote: true, 单引号
  printWidth: 100 // 100 字符换行
}
```
依赖 npm 模块解释
```bash
eslint # eslint
prettier # pritter
# 它关闭所有不必要的或可能与 Prettier 冲突的 ESLint 规则
npm install eslint-config-prettier --save-dev
touch .prettierrc.js # 写入一些 prettier 规则
# .eslintrc.js 中配置插件 extends: ['plugin:prettier/recommended'],
npm install eslint-plugin-prettier --save-dev
# 这样 eslint + pritter 就生效了
```