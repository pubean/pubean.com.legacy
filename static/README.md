Web Starter Kit
===============

一个强大的前端工作流和脚手架。

## INSTALL

```bash
$ mkdir f2e-project-name
$ git clone git@github.com:laozhu/wsk.git ./f2e-project-name
$ cd f2e-project-name && yarn install
```

首先你需要安装 [Valet](https://laravel.com/docs/master/valet) 这个 `Laravel` 作者打造的专用服务器，然后修改 `config/webpack.helpers.js` 中 `PATH` 对象的 `public` 值为 <http://[domain].dev> 后，运行以下命令：

```bash
$ yarn run dev
$ cd build
$ valet link [domain]
$ valet unsecure # 关闭 HTTPS
```

下面你就可以通过 <http://[domain].dev> 访问开发页面，并获得 `Livereload` 特性，你也可以选择使用 `HTTPS`进行本地开发，但缺点是将没法使用 `Livereload` 功能（目前我还没找到办法支持 HTTPS，如果你知道，可以告诉我）。

## USEAGE

```bash
$ yarn run dev
$ yarn run build
$ yarn run eslint
$ yarn run stylelint
$ yarn run imagemin
$ yarn run sprite
```

## FEATURE

- [x] 对于 `dev`, `prod` and `test` 不同的环境，选择不同的 `Webpack` 配置文件
- [x] 提前使用 `ES6/7` 语法，并使用 [babel](https://babeljs.io/) 转译成浏览器兼容代码
- [x] 根据 [eslint-config-airbnb](https://github.com/airbnb/javascript) 规则对 `ES6/7` 代码风格进行检查
- [x] 根据 [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) 规则对 `SCSS/CSS` 风格进行检查
- [x] 使用 [ImageOptim](https://imageoptim.com) 命令行工具压缩图片大小
- [x] 对于 `prod` 环境，压缩 `CSS` 和 `JS` 文件，加快访问速度
- [x] 为 `JavaScript` 和 `SCSS/CSS` 目标文件自动生成 `Source Maps` 文件
- [x] 对于 `prod` 环境，对所有的脚本、样式、图片和字体文件进行版本控制和缓存控制
- [x] 对于未变更的文件，保持文件 `hash` 一致，利用浏览器缓存机制避免用户重复下载
- [x] 当图片或者字体文件大小小于 10k 时，将其转化为 `DATA URI` 并直接插入宿主文件
- [x] 对于 `prod` 环境，文件尺寸超出给定阈值将会收到低性能警告
- [x] 支持 `.ejs` 模版解析，支持提取模版公共部分，并进行 `include` 引入
- [x] 自动生成 `manifest.json` 文件以方便后端处理需要
- [x] 提供 [robots.txt](http://www.robotstxt.org/) 和 [hummans.txt](http://humanstxt.org/) 的基本模版
- [x] 使用 `yarn` 代替 `npm` 作为包管理器, [为什么？](https://shift.infinite.red/npm-vs-yarn-cheat-sheet-8755b092e5cc)
- [x] 使用 `ES6 Import` 代替了 `Node Require` 语法写 `Webpack` 配置文件
- [x] 一个可配置的 [.editorconfig](http://editorconfig.org/) 文件，用来指定不同文件的缩进处理方式等
- [x] 借助 [Laravel Valet](https://laravel.com/docs/master/valet) 工具实现了开发环境域名的自定义和 `Livereload` 功能

## TODO

- [ ] 建立基于 `Webpack` 的测试流程
- [ ] 支持本地 `Mock` 接口数据供开发和测试使用
- [ ] 通过使用 `Sketch` 插件融合设计稿标注工作流
- [ ] 实现 `touch-icons` 和 `favicons` 的自动生成

## CREDITS

Rebuilt with 💗 using [Webpack](https://webpack.js.org/).

Get inspired by [this article](https://survivejs.com/webpack/foreword/) and [this video](https://laracasts.com/series/webpack-for-everyone).
