(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{348:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("ol",[s("li",[t._v("默认导出语法 "),s("em",[s("font",{attrs:{color:"#d63200"}},[t._v("export default")])],1),t._v("  默认导出的成员,代码如下：")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前模块 为 export1.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义私有成员 a 和 c")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 外界访问不到 变量 d 因为其没有被 暴露出去")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将 本模块中的私有成员 暴露出去，供其他模块使用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    show\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("默认导入语法 "),s("em",[s("font",{attrs:{color:"#d63200"}},[t._v("import")])],1),t._v(" 接收名称 "),s("em",[s("font",{attrs:{color:"#d63200"}},[t._v("from")])],1),t._v(" ‘模块接收符’，代码如下：")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导入模块成员")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" export1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./export1.js'")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("export1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//打印输出结果为 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { a: 10, c: 20, show: [function show] }")]),t._v("\n")])])]),s("blockquote",[s("p",[s("strong",[s("font",{attrs:{color:"#d63200"}},[t._v("注意：")])],1)]),t._v(" "),s("blockquote",[s("p",[t._v("在每一个模块中只允许使用唯一的一次 "),s("em",[s("font",{attrs:{color:"#d63200"}},[t._v("export default")])],1),t._v(" ，否则会报错"),s("br"),t._v("\n在一个模块中如果没有向外 "),s("em",[s("font",{attrs:{color:"#d63200"}},[t._v("export default")])],1),t._v("，则导入该模块时 默认输出 "),s("em",[s("font",{attrs:{color:"#d63200"}},[t._v("{}")])],1)])])])])}),[],!1,null,null,null);s.default=r.exports}}]);