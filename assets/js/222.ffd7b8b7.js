(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{494:function(t,s,r){"use strict";r.r(s);var v=r(14),e=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"客户端渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端渲染"}},[t._v("#")]),t._v(" 客户端渲染")]),t._v(" "),s("p",[t._v("在学习服务端渲染之前，我们先来了解一下传统的 "),s("strong",[s("code",[t._v("web")])]),t._v(" 开发体验 ,大致流程如下图:\n"),s("img",{attrs:{src:"/img/vue/ssr/csr.png",alt:"webpack"}}),t._v("\n这个模式下浏览器拿到的是全部的 "),s("strong",[t._v("DOM")]),t._v(" 结构。")]),t._v(" "),s("h3",{attrs:{id:"spa-时代"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spa-时代"}},[t._v("#")]),t._v(" SPA 时代")]),t._v(" "),s("p",[t._v("随着 "),s("code",[t._v("Vue")]),t._v("， "),s("code",[t._v("React")]),t._v("  越来越流行，单页应用优秀的的用户体验，逐渐成为了主流，页面整体是 "),s("strong",[t._v("JS")]),t._v(" 渲染出来的，称之为客户端渲染  "),s("strong",[s("code",[t._v("CSR(client side render)")])]),t._v("：\n"),s("img",{attrs:{src:"/img/vue/ssr/csr-.png",alt:"webpack"}}),t._v("\n此时我们可以发现单页应用的两个 "),s("strong",[s("font",{attrs:{color:"#d63200"}},[t._v("缺点")])],1),t._v("：")]),t._v(" "),s("ol",[s("li",[t._v("首屏渲染等待时间长：必须等 "),s("strong",[t._v("JS")]),t._v(" 加载完，并且执行完毕，才能渲染出首屏。")]),t._v(" "),s("li",[s("strong",[s("font",{attrs:{color:"#d63200"}},[t._v("SEO")])],1),t._v("  不友好：查看网页源代码时，只有一个 "),s("code",[t._v('<div id="app"></div>')]),t._v(" ，所以爬虫只能拿到一个 "),s("code",[t._v("div")]),t._v("，认为页面是空的，不利于 "),s("code",[t._v("SEO")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"服务端渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染"}},[t._v("#")]),t._v(" 服务端渲染")]),t._v(" "),s("p",[t._v("为了解决上面的两个问题，出现了服务端渲染 "),s("strong",[s("code",[t._v("SSR(server side render)")])]),t._v("：后端渲染出完整的首屏的 DOM 结构返回，前端拿到的内容带上首屏，后续的页面操作，再用单页的路由跳转和渲染。\n"),s("img",{attrs:{src:"/img/vue/ssr/ssr.png",alt:"webpack"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);