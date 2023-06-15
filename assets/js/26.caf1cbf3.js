(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{299:function(t,a,s){"use strict";s.r(a);var n=s(14),v=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("数据结构指的是“一组数据的存储结构”，算法指的是“操作数据的一组方法”。"),a("br"),t._v("\n数据结构是为算法服务的，算法是要作用再特定的数据结构上的。")]),t._v(" "),a("p",[t._v("最常用的数据结构与算法:")]),t._v(" "),a("ul",[a("li",[t._v("数据结构：数组、链表、栈、队列、散列表、二叉树、堆、图 等")]),t._v(" "),a("li",[t._v("算法： 递归、排序、二分查找、搜索、哈希算法、动态规划、字符串匹配算法等")])]),t._v(" "),a("h3",{attrs:{id:"算法复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法复杂度"}},[t._v("#")]),t._v(" 算法复杂度")]),t._v(" "),a("p",[t._v("学习数据结构和算法就是为了解“快”和“省”的问题，对于同一问题可用不同算法解决，而一个算法的质量优劣将影响到算法乃至程序的效率。")]),t._v(" "),a("p",[t._v("我们通过算法分析来计算代码的执行效率，选择合适算法和改进算法。")]),t._v(" "),a("p",[t._v("一个算法的评价主要从 时间复杂度 和 空间复杂度 来考虑。")]),t._v(" "),a("h4",{attrs:{id:"时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度"}},[t._v("#")]),t._v(" 时间复杂度")]),t._v(" "),a("p",[t._v("算法的时间复杂度是指执行算法所需要的计算工作量。"),a("br"),t._v("\n算法的总执行时间 T(n) 与每行算法的执行次数成正比。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("O")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("在这个公式中，T(n) 表示代码的执行时间；n 表示数据规模的大小；f(n) 表示每行代码执行的次数总和；O 表示代码的执行时间 T(n) 与 f(n) 表达式成正比。")]),t._v(" "),a("p",[t._v("它不代表代码真正的执行时间，而是表示代码随数据规模增长的变化趋势，简称时间复杂度。")]),t._v(" "),a("p",[t._v("而且当 n 很大时，我们可以忽略常数项，只保留一个最大量级即可。")]),t._v(" "),a("h4",{attrs:{id:"时间复杂度分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度分析"}},[t._v("#")]),t._v(" 时间复杂度分析")]),t._v(" "),a("ul",[a("li",[t._v("只关注循环执行次数最多的一段代码")]),t._v(" "),a("li",[t._v("加法法则：总复杂度等于量级最大的那段代码的复杂度")]),t._v(" "),a("li",[t._v("乘法法则：嵌套代码的复杂度等于嵌套内外代码复杂度的乘积")])]),t._v(" "),a("h4",{attrs:{id:"复杂度分析法则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复杂度分析法则"}},[t._v("#")]),t._v(" 复杂度分析法则")]),t._v(" "),a("ol",[a("li",[t._v("单段代码看高频：比如循环。")]),t._v(" "),a("li",[t._v("多段代码取最大：比如一段代码中有单循环和多重循环，那么取多重循环的复杂度。")]),t._v(" "),a("li",[t._v("嵌套代码求乘积：比如递归、多重循环等")]),t._v(" "),a("li",[t._v("多个规模求加法：比如方法有两个参数控制两个循环的次数，那么这时就取二者复杂度相加。")])]),t._v(" "),a("h4",{attrs:{id:"复杂度分析的4个概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复杂度分析的4个概念"}},[t._v("#")]),t._v(" 复杂度分析的4个概念")]),t._v(" "),a("ol",[a("li",[t._v("最坏情况时间复杂度：代码在最坏情况下执行的时间复杂度。")]),t._v(" "),a("li",[t._v("最好情况时间复杂度：代码在最理想情况下执行的时间复杂度。")]),t._v(" "),a("li",[t._v("平均时间复杂度：代码在所有情况下执行的次数的加权平均值。")]),t._v(" "),a("li",[t._v("均摊时间复杂度：在代码执行的所有复杂度情况中绝大部分是低级别的复杂度，个别情况是高级别复杂度且发生具有时序关系时，可以将个别高级别复杂度均摊到低级别复杂度上。基本上均摊结果就等于低级别复杂度。")])]),t._v(" "),a("h4",{attrs:{id:"几种常见时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#几种常见时间复杂度"}},[t._v("#")]),t._v(" 几种常见时间复杂度")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("多项式阶")]),t._v(" "),a("ul",[a("li",[t._v("常量阶 O(1)")]),t._v(" "),a("li",[t._v("对数阶 O(logn)、O(nlogn)")]),t._v(" "),a("li",[t._v("线性阶 O(n)")]),t._v(" "),a("li",[t._v("线性对数阶 O(nlogn)")]),t._v(" "),a("li",[t._v("平方阶 O(n^2)、立方阶 O(n^3)、...k次方阶O(n^k)")])]),t._v(" "),a("p",[t._v("随着数据规模的增长，算法的执行时间和空间占用，按照多项式的比例增长")])]),t._v(" "),a("li",[a("p",[t._v("非多项式阶")]),t._v(" "),a("ul",[a("li",[t._v("指数阶 O(2^n)")]),t._v(" "),a("li",[t._v("阶乘阶 O(n!)")])]),t._v(" "),a("p",[t._v("随着数据规模的增长，算法的执行时间和空间占用暴增，这类算法性能极差，属于非多项式阶")])])]),t._v(" "),a("h4",{attrs:{id:"空间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空间复杂度"}},[t._v("#")]),t._v(" 空间复杂度")]),t._v(" "),a("p",[t._v("与时间复杂度类似，空间复杂度是指算法在计算机内执行时所需存储空间的度量。记作:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("O")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("算法执行期间所需要的存储空间包括3个部分：")]),t._v(" "),a("ul",[a("li",[t._v("算法程序所占的空间；")]),t._v(" "),a("li",[t._v("输入的初始数据所占的存储空间；")]),t._v(" "),a("li",[t._v("算法执行过程中所需要的额外空间。")])]),t._v(" "),a("p",[t._v("我们常见的空间复杂度就是O(1)、O(n)、 O(n2), 像O(logn)、O(nlogn) 这样的对数阶复杂度平时都用不到")])])}),[],!1,null,null,null);a.default=v.exports}}]);