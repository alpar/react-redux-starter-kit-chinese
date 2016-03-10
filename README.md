React Redux Starter Kit
=======================

[![Join the chat at https://gitter.im/davezuko/react-redux-starter-kit](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/davezuko/react-redux-starter-kit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/davezuko/react-redux-starter-kit.svg?branch=master)](https://travis-ci.org/davezuko/react-redux-starter-kit?branch=master)
[![dependencies](https://david-dm.org/davezuko/react-redux-starter-kit.svg)](https://david-dm.org/davezuko/react-redux-starter-kit)
[![devDependency Status](https://david-dm.org/davezuko/react-redux-starter-kit/dev-status.svg)](https://david-dm.org/davezuko/react-redux-starter-kit#info=devDependencies)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> ### 启用eslint semi(分号规则)并修复项目中的文件
> npm install 成功以后, 修改 `.eslintrc` 中 `semi` 规则,由 `never` 更改为 `always`, 然后运行 `npm run lint:fix` -- 就是这么简单! 另外利用同样的方法, 可以根据你的需要自行修改了或扩展 `.eslingrc` 规则, 并运行 `npm run lint:fix`,它会根据你的设置自动修复一些不符合规则的`js`

This starter kit is designed to get you up and running with a bunch of awesome new front-end technologies, all on top of a configurable, feature-rich webpack build system that's already setup to provide hot reloading, CSS modules with Sass support, unit testing, code coverage reports, bundle splitting, and a whole lot more.

The primary goal of this project is to remain as **unopinionated** as possible. Its purpose is not to dictate your project structure or to demonstrate a complete sample application, but to provide a set of tools intended to make front-end development robust, easy, and, most importantly, fun. Check out the full feature list below!


环境需求
------------

* node `^4.2.0`
* npm `^3.0.0`

功能特点
--------

* [React](https://github.com/facebook/react) (`^0.14.0`)
  * Includes react-addons-test-utils (`^0.14.0`)
* [Redux](https://github.com/rackt/redux) (`^3.0.0`)
  * react-redux (`^4.0.0`)
  * redux-devtools
    * use `npm run dev:nw` to display them in a separate window.
  * redux-thunk middleware
* [react-router](https://github.com/rackt/react-router) (`^2.0.0`)
* [react-router-redux](https://github.com/rackt/react-router-redux) (`^3.0.0`)
* [Webpack](https://github.com/webpack/webpack)
  * [CSS modules!](https://github.com/css-modules/css-modules)
  * sass-loader
  * postcss-loader with cssnano for style autoprefixing and minification
  * Bundle splitting for app and vendor dependencies
  * CSS extraction during builts that are not using HMR (like `npm run compile`)
  * Loaders for fonts and images
* [Koa](https://github.com/koajs/koa) (`^2.0.0-alpha`)
  * webpack-dev-middleware
  * webpack-hot-middleware
* [Karma](https://github.com/karma-runner/karma)
  * Mocha w/ chai, sinon-chai, and chai-as-promised
  * [Airbnb's Enzyme](https://github.com/airbnb/enzyme) with [chai-enzyme](https://github.com/producthunt/chai-enzyme)
  * PhantomJS
  * Code coverage reports
* [Babel](https://github.com/babel/babel) (`^6.3.0`)
  * [babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime) so transforms aren't inlined
  * [babel-preset-react-hmre](https://github.com/danmartinez101/babel-preset-react-hmre) for:
    * react-transform-hmr (HMR for React components)
    * redbox-react (visible error reporting for React components)
  * [babel-plugin-transform-react-constant-elements](https://babeljs.io/docs/plugins/transform-react-constant-elements/) save some memory allocation
  * [babel-plugin-transform-react-remove-prop-types](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types) remove `PropTypes`
* [ESLint](http://eslint.org)
  * Uses [Standard Style](https://github.com/feross/standard) by default, but you're welcome to change this!
  * Includes separate test-specific `.eslintrc` to support chai assertions

如何开始
---------------

```shell
$ git clone https://github.com/davezuko/react-redux-starter-kit.git
$ cd react-redux-starter-kit
$ npm install                   # 安装 ./package.json 中列出的 node 模块
$ npm start                     # 编译并运行
```

创建一个新项目
----------------------

创建一个空的新项目,请按照下面的步骤操作

```shell
$ git checkout -b <your-project-name> new-project
$ npm install                   # There are a few npm dependencies in this branch that aren't in master
$ npm run make:project          # Make your new project
$ rm -rf .git && git init       # Start a new git repository
```

用法
-----

在开始详细介绍 **npm script** 之前, 我们先来做个大概介绍吧:

* 实时开发———— 运行 **npm start** ,启动一个开发服务器.
* 编译项目———— 运行 **npm run compile**.
* 环境部署———— 运行 **npm run deploy**

**注意:** 本项目使用了 [debug](https://github.com/visionmedia/debug) , 它会提升调试体验. For convenience, all of messages are prefixed with `app:*`. If you'd like to to change what debug statements are displayed, you can override the `DEBUG` environment variable via the CLI (e.g. `DEBUG=app:* npm start`) or tweak the npm scripts (`betterScripts` in `package.json`).

Very Good, 现在我们看一下 **npm script** 的详细功能:

* `npm start` - 启动 koa Server `http://localhost:3000`, 开发环境下会启用 `热替换`功能
* `npm run compile` - 运行编译并将编译结果保存到 `dist` 目录
* `npm run dev` - 与 `npm start` 效果相同, 另外会启动 `nodemon` 监听 `server`的源码文件,如果有改动会自动重启 kof server.
* `npm run dev:nw` - 与 `npm run dev` 效果相同, 但是 `redux devtools` 会在一个新的窗口中打开.
* `npm run dev:no-debug` - 与 `npm run dev` 效果相同, 但不启用 `redux devtools`
* `npm run test` - 运行(Karma)单元测试, 并显示测试报告
* `npm run test:dev` - 运行(Karma)单元测试,并监视测试代码,如有改动会重新启动单元测试, 此命令不会显示测试报告.
* `npm run deploy`- 先运行代码质量检查及单元测试, 成功以后, 自动启动编译. 此命令用于部署
* `npm run lint`- 对所有 `.js` 文件进行代码质量及规则检测.
* `npm run lint:fix` - 进行代码质量及规则检测 并尝试修复不符合规范的所有 `.js`. [请参考此文](http://eslint.org/docs/user-guide/command-line-interface.html#fix).

**注意:** 关于特定环境部署 ,首先确认你指定了 `NODE_ENV` 环境变量, 只有指定了环境变量, webpack 才会加载正确的编译配置. 例如: `NODE_ENV=production npm run compile` 调用 `~/build/webpack/_production.js` 的配置然后编译.

### 配置

项目基本配置位于 `~/config/_base.js`. 你可以重新定义 `src` 和 `dist` 目录, 调整编译设置, 增加或捆绑第三方依赖库, 等等. For the most part, you should be able to make changes in here **without ever having to touch the webpack build configuration**. If you need environment-specific overrides, create a file with the name of target `NODE_ENV` prefixed by an `_` in `~/config` (see `~/config/_production.js` for an example).

通用配置:

* `dir_src` - 客户端源码目录
* `dir_dist` - 编译后的输出目录
* `server_host` - Koa server 的主机名或ip
* `server_port` - Koa server 的服务端口
* `compiler_css_modules` - whether or not to enable CSS modules
* `compiler_devtool` - what type of source-maps to generate (set to `false`/`null` to disable)
* `compiler_vendor` - packages to separate into to the vendor bundle

目录结构
---------


```
.
├── bin                      # 构建/启动 脚本
├── build                    # All build-related configuration
│   └── webpack              # Environment-specific configuration files for webpack
├── config                   # 项目配置
├── server                   # Koa application (uses webpack middleware)
│   └── main.js              # 服务端程序的入口点
├── src                      # 源码目录
│   ├── components           # 常击倒 React 组件目录 (generally Dumb components)
│   ├── containers           # 提供上下文环境的组件目录 (例 如. Redux Provider)
│   ├── layouts              # 布局类组件目录
│   ├── redux                # Redux-specific pieces
│   │   ├── modules          # Collections of reducers/constants/actions
│   │   └── utils            # Redux-specific helpers
│   ├── routes               # 路由定义目录
│   ├── static               # 静态资源目录 (not imported anywhere in source code)
│   ├── styles               # Application-wide styles (generally settings)
│   ├── views                # Components that live at a route
│   └── main.js              # 应用程序的入口点
└── tests                    # 单元测试
```

### Components(组件) vs Views(视图) vs Layouts(布局)

**首先明确一点**: Components, Views, Layouts 全部都是组件,之所以这样划分是根据组件的职能不同, 这样看起来会更明确,当然你也可以添加新的分类,比如: Forms

这种区别可能不是对你很重要，这里稍做解释: 一个布局 **Layout** 描述了整个页面的结构, 比如 fixed navigation, viewport, sidebar, footer. 大多数应用只有一种布局, 保持这些组件独立看起来会更清析. **Views** 组件就是 `route` (路由)要渲染的内容, 一般会在 **Layout** 组件内部渲染.

Webpack
-------

### 合并打包第三方库
通过修改 `~/config/_base.js` 中 `compiler_vendor` 项, 你可以定义哪些第三方库将被合并打包 . 默认情况下以下第三方库将合并为一个`verdor.js`:

```js
[
  'history',
  'react',
  'react-redux',
  'react-router',
  'react-router-redux',
  'redux'
]
```

### Webpack Root Resolve
Webpack is configured to make use of [resolve.root](http://webpack.github.io/docs/configuration.html#resolve-root), which lets you import local packages as if you were traversing from the root of your `~/src` directory. Here's an example:

```js
// 当前文件: ~/src/views/some/nested/View.js

// 一般这样导入:
import SomeComponent from '../../../components/SomeComponent'

// 也可以这样导入:
import SomeComponent from 'components/SomeComponent' // Hooray!
```

### 全局设置

这些全局变量在作何地方都可以访问. 如果你想修改他们的话, 我可以修改`~/config/_base.js`文件中的 `globals`项. 添加一个新的全局变量时需同时修改 `~/.eslintrc`.

* `process.env.NODE_ENV` - the active `NODE_ENV` when the build started
* `__DEV__` - True when `process.env.NODE_ENV` is `development`
* `__PROD__` - True when `process.env.NODE_ENV` is `production`
* `__TEST__` - True when `process.env.NODE_ENV` is `test`
* `__DEBUG__` - True when `process.env.NODE_ENV` is `development` and cli arg `--no_debug` is not set (`npm run dev:no-debug`)
* `__BASENAME__` - [npm history basename option](https://github.com/rackt/history/blob/master/docs/BasenameSupport.md)

服务端
------

这个工具包封装了`Koa`做为服务器. 需要注意的是这个服务器的目的是通过 `webpack-dev-middleware` 和 `webpack-hot-middleware` 进行热替换. 如果你想用自己的 koa server 替换内建的 koa server,提供 `api` 服务或想实现`isomorphic`同构/universal rendering 等等,请看 [webpack-dev-server](https://github.com/webpack/webpack-dev-server). 内建的 koa server 请不要用于生产环境. 如你你正在部署生产环境, 请看一下[the deployment section](#deployment).

风格样式
------

`.scss` 和 `.css` 类型的文件全都被支持,请看 [CSS Modules](https://github.com/css-modules/css-modules). 导入以后, 样式会先被 [PostCSS](https://github.com/postcss/postcss)处理,它会自动压缩并添加一些前辍, 在生产环境会自动转换成 `.css` 文件

**NOTE:** If you're importing styles from a base styles directory (useful for generic, app-wide styles), you can make use of the `styles` alias, e.g.:

```js
// current file: ~/src/components/some/nested/component/index.jsx
import 'styles/core.scss' // this imports ~/src/styles/core.scss
```

Furthermore, this `styles` directory is aliased for sass imports, which further eliminates manual directory traversing; this is especially useful for importing variables/mixins.

Here's an example:

```scss
// current file: ~/src/styles/some/nested/style.scss
// what used to be this (where base is ~/src/styles/_base.scss):
@import '../../base';

// can now be this:
@import 'base';
```

单元测试
-------

To add a unit test, simply create a `.spec.js` file anywhere in `~/tests`. Karma will pick up on these files automatically, and Mocha and Chai will be available within your test without the need to import them.

Coverage reports will be compiled to `~/coverage` by default. If you wish to change what reporters are used and where reports are compiled, you can do so by modifying `coverage_reporters` in `~/config/_base.js`.

部署
----------

Out of the box, this starter kit is deployable by serving the `~/dist` folder generated by `npm run compile` (确认你已指定了目标环境变量 `NODE_ENV`). This project does not concern itself with the details of server-side rendering or API structure, since that demands an opinionated structure that makes it difficult to extend the starter kit. However, if you do need help with more advanced deployment strategies, here are a few tips:

如果你想用 `nginx` 提供服务, 确保主目录为 `~/dist/index.html` file and 让 react-router 通过 rest服务获取数据. 通过扩展内建的 koa server 可以提供 `api` 服务或其它一些你想要的功能, 是否要这样做这完全取决于你.


已知问题
---------------

### `npm run dev:nw` produces `cannot read location of undefined.`

This is most likely because the new window has been blocked by your popup blocker, so make sure it's disabled before trying again.

Reference: [issue 110](https://github.com/davezuko/react-redux-starter-kit/issues/110)

### Babel 的问题

Running into issues with Babel? Babel 6 can be tricky, please either report an issue or try out the [stable v0.18.1 release](https://github.com/davezuko/react-redux-starter-kit/tree/v0.18.1) with Babel 5. If you do report an issue, please try to include relevant debugging information such as your node, npm, and babel versions.

### Internationalization Support

In keeping with the goals of this project, no internationalization support is provided out of the box. However, [juanda99](https://github.com/juanda99) has been kind enough to maintain a fork of this repo with internationalization support, [check it out!](https://github.com/juanda99/react-redux-starter-kit)

### 执行编译时编辑器的cpu占用过高

While this is common to any sizable application, it's worth noting for those who may not know: if you happen to notice higher CPU usage in your editor after compiling the application, you may need to tell your editor not to process the dist folder. For example, in Sublime you can add:

```
	"folder_exclude_patterns": [".svn",	".git",	".hg", "CVS",	"node_modules",	"dist"]
```
