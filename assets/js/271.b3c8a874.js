(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{541:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"文件监听"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件监听"}},[t._v("#")]),t._v(" ⽂件监听")]),t._v(" "),s("p",[t._v("在 "),s("strong",[t._v("webpack")]),t._v(" 中，如果不想每次修改代码之后都手动的去执行构建命令，就需要对 "),s("strong",[t._v("文件进行监听")])]),t._v(" "),s("p",[s("strong",[t._v("⽂件监听")]),t._v(" 是在发现源码发⽣变化时，⾃动重新构建出新的输出⽂件")]),t._v(" "),s("p",[s("strong",[t._v("webpack")]),t._v(" 开启监听模式，有两种⽅式：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("启动 webpack 命令时，带上 --watch 参数，即在 package.json -> script 中新增 watch 命令如下")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n+    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"watch"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack --watch"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("在配置 webpack.config.js 中设置 watch: true")])])]),t._v(" "),s("p",[s("strong",[t._v("⽂件监听的原理分析:")])]),t._v(" "),s("p",[s("strong",[t._v("webpack")]),t._v(" 会记录文件的修改时间，并且在下一次有变化的时候去判断⽂件的最后编辑时间是否变化，如果某个⽂件发⽣了变化，并不会⽴刻告诉监听者，⽽是先把文件的修改缓存起来，等待一段时间，这段时间内如果有其他的文件也发生了变化，就会生成变化的文件列表，一起去构建，再把生成结果放到 bundle 文件中")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("export "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认 false，也就是不开启")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("watch")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//只有开启监听模式时，watchOptions才有意义")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("wathcOptions")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认为空，不监听的文件或者文件夹，支持正则匹配")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ignored")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("node_modules")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//监听到变化发生后会等300ms再去执行，默认300ms")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("aggregateTimeout")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//判断文件是否发生变化是通过不停询问系统指定文件有没有变化实现的，默认每秒问1000次")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("poll")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("虽然这种方式可以做到文件的监听，但是还是要手动刷新浏览器页面才会刷新，比较麻烦，如果想要自动刷新，需要了解 "),s("strong",[t._v("webpack")]),t._v(" 的")]),t._v(" "),s("h2",{attrs:{id:"hmr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hmr"}},[t._v("#")]),t._v(" HMR")]),t._v(" "),s("p",[s("strong",[t._v("Hot Module Replacement (HMR:热模块替换)")]),t._v(" 是 "),s("strong",[t._v("webpack")]),t._v(" 提供的最有用的功能之一，它允许在运行时更新各种模块，而无需进行完全刷新")]),t._v(" "),s("p",[t._v("主要是通过以下几种方式，来显著加快开发速度：")]),t._v(" "),s("ul",[s("li",[t._v("保留在完全重新加载页面期间丢失的应用程序状态")]),t._v(" "),s("li",[t._v("只更新变更内容，以节省宝贵的开发时间")]),t._v(" "),s("li",[t._v("在源代码中 "),s("code",[t._v("CSS/JS")]),t._v(" 产生修改时，会立刻在浏览器中进行更新，这几乎相当于在浏览器 "),s("code",[t._v("devtools")]),t._v(" 直接更改样式。")])]),t._v(" "),s("p",[s("strong",[t._v("webpack")]),t._v(" 中想要实现热更新，首先需要通过 "),s("strong",[t._v("webpack-dev-server")]),t._v(" 来自动监听代码的变化，在变化时自动的去打包构建，然后再通过 "),s("strong",[t._v("HotModuleReplacementPlugin")]),t._v(" 插件开启热更新的功能，让浏览器的内容实时的变化，具体的做法如下：")]),t._v(" "),s("ol",[s("li",[t._v("首先在终端运行如下命令，进行"),s("strong",[t._v("安装：")])])]),t._v(" "),s("div",{staticClass:"language-Shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" webpack-dev-server "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("在 package.json 文件中的 scripts 内新增 dev 脚本，如下：")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dev"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack-dev-server --open"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("ul",[s("li",[t._v("这里的 --open 是指每次构建完成自动开启浏览器")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("再来 "),s("strong",[t._v("配置")]),t._v(" webpack.config.js，通过 webpack 内置的 HotModuleReplacementPlugin 插件开启热更新：")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" webpack "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HotModuleReplacementPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("   devServer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("       contentBase"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./dist"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("       open"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("       hot"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 即便 HMR 不生效，浏览器也不自动刷新，就开启hotOnly")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("       port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("最后在终端执行 ```npm run dev`` 命令就会自动打开浏览器并实现热更新")])]),t._v(" "),s("p",[s("strong",[t._v("HMR")]),t._v(" 默认对 CSS 模块支持较好，对 JS 模块需要额外的处理，通过 "),s("code",[t._v("module.hot.accept")]),t._v(" 来对需要更新模块进行监控,如下案例：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("accept")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("除了上面提到的 "),s("strong",[t._v("webpack-dev-server")]),t._v(" 和 "),s("strong",[t._v("HotModuleReplacementPlugin")]),t._v(" 结合使用实现热更新的方式以外，也可以通过 "),s("strong",[t._v("webpack-dev-middleware")]),t._v(" 来实现")]),t._v(" "),s("h2",{attrs:{id:"webpack-dev-middleware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-dev-middleware"}},[t._v("#")]),t._v(" webpack-dev-middleware")]),t._v(" "),s("p",[t._v("通过 "),s("strong",[t._v("webpack-dev-middleware")]),t._v(" 这种方式来实现热更新，需要引入 Node 的 server，可以通过 express 启动一个服务器，然后 "),s("strong",[t._v("webpack-dev-middleware")]),t._v(" 将 "),s("strong",[t._v("webpack")]),t._v(" 输出的⽂件传输给服务器，适⽤于灵活的定制场景，具体的配置可以参考如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" express "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" webpack "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" webpackDevMiddleware "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack-dev-middleware'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("express")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./webpack.config.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" compiler "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("webpack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("webpackDevMiddleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("compiler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("publicPath")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publicPath\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Example app listening on port 3000!\\n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"热更新原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#热更新原理"}},[t._v("#")]),t._v(" 热更新原理")]),t._v(" "),s("p",[t._v("先来看一下图解：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/webpack/hmr.png",alt:"hmr"}})]),t._v(" "),s("p",[t._v("首先名词解释：")]),t._v(" "),s("ul",[s("li",[t._v("Webpack Compile: webpack 的编译器，作用是 将 JS 源代码编译成 bundle.js")]),t._v(" "),s("li",[t._v("HMR Server: 将热更新的⽂件输出给 HMR Rumtime")]),t._v(" "),s("li",[t._v("Bundle server: 提供⽂件在浏览器的访问")]),t._v(" "),s("li",[t._v("HMR Rumtime: 在开发阶段，会将 HMR Rumtime 注⼊到浏览器的 bundle.js 中，和服务器建立连接，更新⽂件的变化")]),t._v(" "),s("li",[t._v("bundle.js: 构建输出的⽂件")])]),t._v(" "),s("p",[t._v("有图可知热更新的过程有两个：")]),t._v(" "),s("ul",[s("li",[t._v("启动阶段，在文件系统进行编译，将初始的代码经过 Webpack Compile 进行打包，打包好之后将编译好的文件传输给 Bundle server，Bundle server 就是一个服务器，让文件以 server 的方式让浏览器访问到")]),t._v(" "),s("li",[t._v("更新阶段，对于开发时本地文件有更新的情况下，文件系统，将初始的代码经过 Webpack Compile 进行打包，然后发送给 HMR Server，找到相应的更新模块，以JSON 的形式传送到 HMR Rumtime,HMR Rumtime 会去更新代码 ，浏览器端的内容也会改变")])])])}),[],!1,null,null,null);s.default=e.exports}}]);