(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{333:function(t,e,a){"use strict";a.r(e);var n=a(14),r=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("一个正则表达式可以由简单的字符构成，如 "),e("em",[e("font",{attrs:{color:"#d63200"}},[t._v("/abc/")])],1),t._v("，也可以由简单和特殊字符组成，比如 /ab"),e("em",[t._v("c/ 或 /Chapter (\\d+).\\d")]),t._v("/。")]),t._v(" "),e("h4",{attrs:{id:"简单模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单模式"}},[t._v("#")]),t._v(" 简单模式")]),t._v(" "),e("p",[t._v("简单模式由简单的字符构成，一般是由你想直接找到的字符构成。"),e("br"),t._v("\n如 /abc/ 只能匹配 \"abc\" 字符，例 字符串 'abcde' 可以匹配成功，但是 /ab cde/ 会匹配失败，因为它包含的是字符串 'ab c',而不是 'abc'。")]),t._v(" "),e("h4",{attrs:{id:"特殊字符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特殊字符"}},[t._v("#")]),t._v(" 特殊字符")]),t._v(" "),e("p",[t._v("然而在日常开发中，我们会经常需要匹配的是一个不确定字符串，或者 寻找一个或多个特定字符，这是就需要用到特殊字符。\n特殊字符 又被称为 元字符，在正则表达式中是具有特殊意义的专用符号"),e("br"),t._v("\n我们把特殊字符划分为几类学习，可参考 "),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("边界符：")]),t._v(" 又称位置符，用来提示字符串所在的位置，主要有以下两个字符")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("字符")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("^")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("表示匹配行首的文本（以此开始）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("$")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("表示匹配行末的文本（以此结束）")])])])]),t._v(" "),e("p",[e("strong",[t._v("字符类：")]),t._v(" 字符类表示有一系列字符可供选择，只要匹配其中一个就可以，所有可供选择的字符都放在方括号内")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("字符")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("[-]")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("方括号内部范围符 -")])])])]),t._v(" "),e("p",[e("strong",[t._v("量词符：")]),t._v(" 量词符用来设定某个模式出现的次数")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("字符")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("*")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("匹配前一个表达式 0 次或多次。等价于 {0,}")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("匹配前面一个表达式 1 次或者多次。等价于 {1,}")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("?")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("匹配前面一个表达式 0 次或者 1 次。等价于 {0,1}")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("{n}")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("n 是一个正整数，匹配了前面一个字符刚好出现了 n 次")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("{n,}")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("n是一个正整数，匹配前一个字符至少出现了n次")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("{n,m}")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("n 和 m 都是整数。匹配前面的字符至少n次，最多m次。如果 n 或者 m 的值是0， 这个值被忽略")])])])]),t._v(" "),e("p",[e("strong",[t._v("预定义类：")]),t._v(" 预定义类,默认常用模式的简写方式")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("字符")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("\\d")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("匹配一个数字。等价于[0-9]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("\\D")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("匹配一个非数字字符。等价于[^0-9]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("\\s")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("匹配一个空白字符，包括空格、制表符、换页符和换行符")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("\\S")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("匹配一个非空白字符")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("\\w")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("匹配一个单字字符（字母、数字或者下划线）。等价于 [A-Za-z0-9_]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("\\W")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("匹配一个非单字字符，等价于 [^A-Za-z0-9_]")])])])]),t._v(" "),e("ul",[e("li",[e("font",{attrs:{color:"#d63200"}},[t._v("总结：")]),e("br"),t._v("\n大括号 {}，量词符，表示重复次数"),e("br"),t._v("\n中括号 []，匹配中括号中的任意字符"),e("br"),t._v("\n小括号 ()，表示优先级")],1)]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" ：匹配前一个表达式 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" 次或多次。等价于 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("。\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);