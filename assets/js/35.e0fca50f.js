(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{307:function(t,r,e){"use strict";e.r(r);var a=e(14),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"安装指导"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装指导"}},[t._v("#")]),t._v(" 安装指导")]),t._v(" "),r("p",[t._v("对于安装步骤，官网有详细的解释，这里就不复述了，"),r("a",{attrs:{href:"https://www.electronjs.org/zh/docs/latest/tutorial/installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接直达"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"chromium"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chromium"}},[t._v("#")]),t._v(" Chromium")]),t._v(" "),r("p",[t._v("Electron 底层是Chromium，设计理念是多进程的")]),t._v(" "),r("p",[r("img",{attrs:{src:"/img/electron/chorm.png",alt:"electron"}})]),t._v(" "),r("p",[t._v("每个Tab 都是一个独立的 renderer 进程，有个多个 tab 就有多少个 渲染进程，还有一个独立的主进程，负责其他渲染进程的创建 分配等，避免了一个 tab 崩溃 影响到其他的 tab 页面，所以 我们的 chrome 才那么占内存。")]),t._v(" "),r("h2",{attrs:{id:"electron"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#electron"}},[t._v("#")]),t._v(" Electron")]),t._v(" "),r("p",[r("img",{attrs:{src:"/img/electron/ele.png",alt:"electron"}})]),t._v(" "),r("p",[t._v("Electron和 chrome 一样会产生多个渲染进程，有一个主进程，因为都是底层都是基于 Chromium 内核的，前面提到过 Electron 中可以细分为 主进程和渲染进程，下面具体解释一下")]),t._v(" "),r("h2",{attrs:{id:"主进程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#主进程"}},[t._v("#")]),t._v(" 主进程")]),t._v(" "),r("p",[t._v("主进程(Main Process)：")]),t._v(" "),r("ul",[r("li",[t._v("可以使用和系统对接的 Electron API 创建菜单上传文件等")]),t._v(" "),r("li",[t._v("创建渲染进程-render process")]),t._v(" "),r("li",[t._v("支持 node")]),t._v(" "),r("li",[t._v("只有一个，作为整个程序的入口")])]),t._v(" "),r("h2",{attrs:{id:"渲染进程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#渲染进程"}},[t._v("#")]),t._v(" 渲染进程")]),t._v(" "),r("p",[t._v("渲染进程(Rnderer Process)：")]),t._v(" "),r("ul",[r("li",[t._v("可以有多个，每个对应一个窗口")]),t._v(" "),r("li",[t._v("每个都是一个单独的进程")]),t._v(" "),r("li",[t._v("支持 node 和 DOM 操作")]),t._v(" "),r("li",[t._v("可以使用一部分 ElectronAPI")])])])}),[],!1,null,null,null);r.default=s.exports}}]);