# Infinity

1. npm init 初始化 生成配置文件 package.json.
2. npm config set registry https://registry.npm.taobao.org 更换淘宝镜像.
3. npm install react react-dom -S 安装 React, React-dom.
4. npm install prettier -D 安装 prettier, 统一编辑器风格,并在根目录创建 .prettierrc 文件,加入对应属性.
5. 安装扩展 Prettier - Code formatter.新建一个文件夹 .vscode, 文件夹下再创建 settings.json.(目的是为了别人下载此项目不会因为 setting.json 配置不同而使 ESLint, StyleLint 失效).
6. npm install eslint -D 安装 eslint. 安装成功后使用 npx eslint --init.
7. .eslintrc.js 中添加 rule, settings 来解决 .ts 和 .tsx 模块引入报错和 TS 报错问题.
8. npm install eslint-plugin-promise eslint-plugin-unicorn -D 安装两个 eslint 插件.
9. npm install typescript -D 安装 TypeScript.
   ------------2022.5.11
10. npm install @typescript-eslint/eslint-plugin
11. npm install clean-webpack-plugin -D build 前删除原本的 dist 代码
12. npm install react react-dom -S 安装 react
13. npm install babel-loader @babel/core @babel/preset-react -D 安装 webpack 识别 jsx 的 loaders
14. 根目录新建 .babelrc 文件 增加 presets 属性
15. npm install @babel/preset-typescript -D 安装 webpack 识别 ts 的 loaders
    ------------2022.5.12
