(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{327:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("函数中 "),a("strong",[a("font",{attrs:{color:"#d63200"}},[t._v("this")])],1),t._v(" 的指向，是当我们调用的时候确定的，调用方式不同，指向也不同，一般指向调用者。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("调用方式")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("this指向")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("普通函数调用")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("window")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("构造函数调用")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("实例对象(原型对象里的方法也指向实例对象)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("对象方法调用")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("该方法所属对象")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("事件绑定方法")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("绑定事件对象")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("定时器函数")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("window")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("立即执行函数")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("window")])])])]),t._v(" "),a("p",[t._v("其实 "),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("JavaScript")])],1),t._v(" 为我们专门提供了一些函数方法，来处理函数内部 "),a("strong",[a("font",{attrs:{color:"#d63200"}},[t._v("this")])],1),t._v(" 的指向问题，常用的有 "),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("call()")])],1),t._v("，"),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("bind()")])],1),t._v("，"),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("apply()")])],1),t._v(" 三种方法。")]),t._v(" "),a("h3",{attrs:{id:"call"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call"}},[t._v("#")]),t._v(" call()")]),t._v(" "),a("p",[a("strong",[a("font",{attrs:{color:"#d63200"}},[t._v("call()")])],1),t._v(" 方法调用一个对象，简单理解为调用函数的方式，但是它可以改变函数的 "),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("apply()")])],1),t._v(" 指向。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("thisArg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("arg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("arg2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// thisArg  函数内部this 指向，改变这个值 可以改变 this 指向")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// arg1,arg2,... 函数的参数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'木子'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[a("font",{attrs:{color:"#d63200"}},[t._v("call()")])],1),t._v("  有两个主要作用：")]),t._v(" "),a("ul",[a("li",[t._v("可以调用函数")]),t._v(" "),a("li",[t._v("可以改变函数内部的 "),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("apply()")])],1),t._v(" 指向")])]),t._v(" "),a("p",[t._v("在实际的开发中， call 主要用来实现继承")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Teacher")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Student")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Teacher")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" studd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'张三'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);