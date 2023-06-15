(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{531:function(t,s,a){"use strict";a.r(s);var r=a(14),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("每次改完代码都需要重新打包、刷新，很麻烦")]),t._v(" "),s("p",[t._v("我们可以安装使⽤ "),s("code",[t._v("webpackdevserver")]),t._v(" 来改善这块的体验")]),t._v(" "),s("h3",{attrs:{id:"_1-安装包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装包"}},[t._v("#")]),t._v(" 1. 安装包")]),t._v(" "),s("p",[t._v("在终端中运行如下命令，安装支持项目自动打包的工具")]),t._v(" "),s("div",{staticClass:"language-Shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" webpack-dev-server "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改"}},[t._v("#")]),t._v(" 2. 修改")]),t._v(" "),s("p",[t._v("修改 "),s("em",[s("font",{attrs:{color:"#d63200"}},[t._v("package.json")])],1),t._v(" 文件中 "),s("em",[s("font",{attrs:{color:"#d63200"}},[t._v("scripts")])],1),t._v(" 对象的 "),s("em",[s("font",{attrs:{color:"#d63200"}},[t._v("dev")])],1),t._v(" 命令,如下配置：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json 中的配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"dev"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack-dev-server"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("配置 "),s("code",[t._v("webpack.config.js")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("devServer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("contentBase")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./dist"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-打包"}},[t._v("#")]),t._v(" 3. 打包")]),t._v(" "),s("p",[t._v("运行如下命令，重新运行打包")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])])]),s("p",[s("strong",[t._v("注意：")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("webpack-dev-server")]),t._v(" 会启动一个实时打包的 "),s("em",[s("font",{attrs:{color:"#d63200"}},[t._v("http")])],1),t._v(" 服务器")]),t._v(" "),s("li",[s("code",[t._v("webpack-dev-server")]),t._v(" 打包生成的输出文件，默认放到了项目根目录中，而且是虚拟的，看不到的")])]),t._v(" "),s("h3",{attrs:{id:"_4-配置自动打开浏览器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置自动打开浏览器"}},[t._v("#")]),t._v(" 4. 配置自动打开浏览器")]),t._v(" "),s("p",[t._v("此时项目的运行需要我们在浏览器手动输入地址才可以访问，那我要想项目启动之后自动弹开浏览器要怎么配置呢？")]),t._v(" "),s("p",[t._v("我们需要修改 "),s("em",[s("font",{attrs:{color:"#d63200"}},[t._v("package.json")])],1),t._v(" 文件中 "),s("em",[s("font",{attrs:{color:"#d63200"}},[t._v("scripts")])],1),t._v(" 对象的 "),s("em",[s("font",{attrs:{color:"#d63200"}},[t._v("dev")])],1),t._v(" 的相关参数，具体修改如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json 中的配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --open 打包完成后自动打开浏览器页面  --host 配置 IP地址  --port 配置端口")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"dev"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack-dev-server --open --host 127.0.0.0 --port 8888"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("修改之后重新运行 "),s("em",[s("font",{attrs:{color:"#d63200"}},[t._v("npm run dev")])],1),t._v(" 命令进行打包会发现项目自动弹出浏览器，说明我们已经配置成功了～")]),t._v(" "),s("p",[t._v("但是此时我们会发现项目虽然正常运行，没有报错，但却不是我们想要的页面。"),s("br"),t._v("\n那要怎样才可以直接预览到我们想要的页面呢？ 请看下一篇文章 "),s("RouterLink",{attrs:{to:"/webpack/preview.html"}},[t._v("配置预览页面")])],1)])}),[],!1,null,null,null);s.default=e.exports}}]);