(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{325:function(t,s,a){"use strict";a.r(s);var r=a(14),n=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"什么是微前端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是微前端"}},[t._v("#")]),t._v(" 什么是微前端？")]),t._v(" "),s("p",[t._v("一种将独立的前端应用组成一个更大的整体的架构风格")]),t._v(" "),s("p",[t._v("微前端（Micro-Frontends）是一种类似于微服务的架构，它将微服务的理念应用于浏览器端，即将 Web 应用由单一的单体应用转变为多个小型前端应用聚合为一的应用。各个前端应用还可以独立运行、独立开发、独立部署。微前端不是单纯的前端框架或者工具，而是一套架构体系")]),t._v(" "),s("h2",{attrs:{id:"为什么使用微前端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用微前端"}},[t._v("#")]),t._v(" 为什么使用微前端？")]),t._v(" "),s("p",[t._v("比如你想开始使用新的 JS 语法（或TypeScript），但是你无法在现有的构建过程中使用对应的构建工具（如公司内部的next版本过低，已有的项目不好升级）。又或者，你只想扩展你的开发团队，以便多个团队可以同时处理一个产品，但是现有应用中的耦合和复杂度让每个开发者互相掣肘。这些都是真实存在的问题，这些问题极大地降低了大型团队的开发效率。")]),t._v(" "),s("h2",{attrs:{id:"微前端架构有哪些问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微前端架构有哪些问题"}},[t._v("#")]),t._v(" 微前端架构有哪些问题？")]),t._v(" "),s("ul",[s("li",[t._v("如何进行路由劫持")]),t._v(" "),s("li",[t._v("如何渲染子应用")]),t._v(" "),s("li",[t._v("样式隔离，各子应用之间不能相互影响\n例如，如果一个团队的微前端的样式表为 h2 { color: black; }，而另一个团队的则为 h2 { color: blue; }，而\t这两个选择器都附加在同一页面上，就会冲突！")]),t._v(" "),s("li",[t._v("JS隔离\n全局变量及事件处理等不能相互影响沙箱实现的几种方式")]),t._v(" "),s("li",[t._v("共享组件库")]),t._v(" "),s("li",[t._v("跨微应用通信\n如何使微应用具有各自自己的数据状态和全局的数据状态")]),t._v(" "),s("li",[t._v("后端通信\n如登录态与鉴权")]),t._v(" "),s("li",[t._v("提升体验性的功能")])]),t._v(" "),s("h2",{attrs:{id:"如何实现一个简单的微前端架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何实现一个简单的微前端架构"}},[t._v("#")]),t._v(" 如何实现一个简单的微前端架构？")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("后端模版集成")]),t._v(" "),s("ul",[s("li",[t._v("用一个包含常见内容的html，添加一个include来引入其他模版")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dir")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ltr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utf-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Feed me"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("🍽 Feed me"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!--# include file="$PAGE.html" --\x3e')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ul",[s("li",[t._v("配置 nginx根据不同的请求路由加载不同的模版")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("share"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    index index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ssi on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    # 将 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 重定向到 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("browse\n    rewrite "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("$ http"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("localhost"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("browse redirect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    # 根据路径访问 html \n    location "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("browse "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    set $"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PAGE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'browse'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    location "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("order "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    set $"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PAGE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'order'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    location "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("profile "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    set $"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PAGE")]),t._v(" 'profile'\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    # 所有其他路径都渲染 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html\n    error_page "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("package 集成\n将每个微前端发布为一个 node 包，并让容器应用程序将所有微前端应用作为依赖项。比如这个 package.json")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@feed-me/container"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A food delivery web app"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"dependencies"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"@feed-me/browse-restaurants"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^1.2.3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"@feed-me/order-food"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^4.5.6"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"@feed-me/user-profile"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^7.8.9"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("通过 iframe 集成\niframe 是集成的最简单方式之一。本质上来说，iframe 里的页面是完全独立的，可以轻松构建。而且 iframe 还提供了很多的隔离机制。")])]),t._v(" "),s("li",[s("p",[t._v("使用JS集成\n每个微前端都对应一个 script 标签，并且在加载时导出一个全局变量。然后，容器应用程序确定应该安装哪些微应用，并调用相关函数以告知微应用何时以及在何处进行渲染。"),s("br"),t._v("\n与 package 集成不同，我们可以用不同的bundle.js独立部署每个应用。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("head"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Feed me"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("head"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Welcome to Feed me"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 这些脚本不会马上渲染应用 而是分别暴露全局变量"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://browse.example.com/bundle.js"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://order.example.com/bundle.js"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://profile.example.com/bundle.js"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"micro-frontend-root"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/javascript"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这些全局函数是上面脚本暴露的")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" microFrontendsByRoute "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("renderBrowseRestaurants"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'/order-food'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("renderOrderFood"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'/user-profile'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("renderUserProfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" renderFunction "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" microFrontendsByRoute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 渲染第一个微应用")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'micro-frontend-root'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"微前端的大致实现思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微前端的大致实现思路"}},[t._v("#")]),t._v(" 微前端的大致实现思路")]),t._v(" "),s("p",[t._v("基于上文，当下微前端主要采用的是组合式应用路由方案，该方案的核心是“主从”思想，即包括一个基座（MainApp）应用和若干个微（MicroApp）应用，基座应用大多数是一个前端SPA项目，主要负责应用注册，路由映射，消息下发等，而微应用是独立前端项目，这些项目不限于采用React，Vue，Angular或者JQuery开发，每个微应用注册到基座应用中，由基座进行管理，但是如果脱离基座也是可以单独访问，基本的流程如下图所示：\nimg")]),t._v(" "),s("h2",{attrs:{id:"有哪些微前端的框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有哪些微前端的框架"}},[t._v("#")]),t._v(" 有哪些微前端的框架？")]),t._v(" "),s("ul",[s("li",[t._v("qiankun")]),t._v(" "),s("li",[t._v("icestark")]),t._v(" "),s("li",[t._v("single-spa")]),t._v(" "),s("li",[t._v("Micro Frontends")]),t._v(" "),s("li",[t._v("MicroApp")])])])}),[],!1,null,null,null);s.default=n.exports}}]);