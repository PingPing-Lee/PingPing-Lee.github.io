(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{339:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"什么是严格模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是严格模式"}},[t._v("#")]),t._v(" 什么是严格模式？")]),t._v(" "),s("p",[s("strong",[s("font",{attrs:{color:"#d63200"}},[t._v("JavaScript")])],1),t._v(" 除了由正常的模式之外，还提供了严格模式，"),s("strong",[s("font",{attrs:{color:"#d63200"}},[t._v("ES5")])],1),t._v(" 的严格模式是采用具有限制性  "),s("em",[s("font",{attrs:{color:"#d63200"}},[t._v("JavaScript")])],1),t._v("  变体的一种方式，即在严格的条件下运行。"),s("br"),t._v(" "),s("strong",[t._v("严格模式")]),t._v(" 在 "),s("em",[s("font",{attrs:{color:"#d63200"}},[t._v("IE10")])],1),t._v(" 以上的版本才会被执行，低版本浏览器会被忽略\n"),s("strong",[t._v("严格模式")]),t._v(" 对正常的 "),s("em",[s("font",{attrs:{color:"#d63200"}},[t._v("JavaScript")])],1),t._v(" 语法做了一些更改：")]),t._v(" "),s("ul",[s("li",[t._v("消除了 "),s("strong",[t._v("JavaScript")]),t._v(" 语法的不合理，不严谨之处，减少了一些怪异行为")]),t._v(" "),s("li",[t._v("消除了代码运行的不安全性，保证了代码运行的安全")]),t._v(" "),s("li",[t._v("提高编译效率，增加运行速度")]),t._v(" "),s("li",[t._v("禁用了 在 "),s("strong",[t._v("ECMAScript")]),t._v(" 未来版本中可能定义的一些语法"),s("br"),t._v("\n比如 class，import，export，extend，super 等不能做变量名")])]),t._v(" "),s("p",[t._v("简而言之，严格模式的出现是为了解决现有 "),s("strong",[t._v("js")]),t._v(" 里面一些不合理、不合规的语法，同时也为了下一个版本做一些限定。")]),t._v(" "),s("h2",{attrs:{id:"开启严格模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开启严格模式"}},[t._v("#")]),t._v(" 开启严格模式")]),t._v(" "),s("p",[s("strong",[s("font",{attrs:{color:"#d63200"}},[t._v("严格模式")])],1),t._v(" 可以应用到整个脚本或者个别函数中，所以严格模式分为 为脚本开启严格模式 和 为函数开启严格模式 两种情况:")]),t._v(" "),s("ol",[s("li",[t._v("为脚本开启严格模式\n为整个脚本开启严格模式，需要在 所有语句之前 写一句特定的语句 "),s("strong",[s("font",{attrs:{color:"#d63200"}},[t._v("'use strict'")])],1),s("br"),t._v("\n有些 "),s("em",[s("font",{attrs:{color:"#d63200"}},[t._v("script")])],1),t._v(" 是严格模式，有的是正常模式，这样就不利于文件的合并，所以可以讲整个脚本文件放在一个立即执行的函数中，这样独立创建了一个作用域，而不影响其他的 "),s("em",[s("font",{attrs:{color:"#d63200"}},[t._v("script")])],1),t._v(" 脚本文件。"),s("br"),t._v("\n方法调用一个对象，简单理解为调用函数的方式，但是它可以改变函数的 "),s("em",[s("font",{attrs:{color:"#d63200"}},[t._v("apply()")])],1),t._v(" 指向。")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//下面的代码按照严格模式执行")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("给某个函数开启严格模式")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//下面的代码按照严格模式执行")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"严格模式的变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#严格模式的变化"}},[t._v("#")]),t._v(" 严格模式的变化")]),t._v(" "),s("p",[t._v("严格模式对 "),s("em",[s("font",{attrs:{color:"#d63200"}},[t._v("js")])],1),t._v(" 的语法和行为都做了一些改变，例如：")]),t._v(" "),s("ol",[s("li",[t._v("变量规定\n"),s("ul",[s("li",[t._v("在正常的模式下，如果变量没有声明就赋值，默认是全局变量。严格模式下，禁止这种这种用法，变量都必须先声明在使用")]),t._v(" "),s("li",[t._v("严禁删除已经声明变量，如")])])])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是错误的")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("this 指向"),s("br"),t._v("\n严格模式下 "),s("em",[s("font",{attrs:{color:"#d63200"}},[t._v("this")])],1),t._v(" 指向问题")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("函数类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("正常模式")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("严格模式")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("全局作用域函数")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("window")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("构造函数")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不加 new 也可以调用，this指向 window")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不加 new 调用会报错")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("定时器")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("window")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("window")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("事件/对象")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("调用者")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("调用者")])])])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("函数变化\n"),s("ul",[s("li",[t._v("函数不能有重名的参数")]),t._v(" "),s("li",[t._v("严格模式禁止了不在脚本或者函数层面上的函数声明，以下几种都会报错：")])])])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// !!! 语法错误")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// !!! 语法错误")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("baz")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 合法")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同样合法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);