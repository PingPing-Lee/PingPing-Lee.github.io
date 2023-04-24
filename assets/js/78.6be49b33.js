(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{354:function(s,t,a){"use strict";a.r(t);var r=a(14),v=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"浏览器渲染流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染流程"}},[s._v("#")]),s._v(" 浏览器渲染流程")]),s._v(" "),t("p",[s._v("在学习页面加载及渲染过程优化之前，我们先来看看浏览器在接收到服务端返回的资源之后的渲染流程：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/perOpt/dom.png",alt:"dom"}})]),s._v(" "),t("ol",[t("li",[s._v("HTML Parser：解析 HTML，构建 DOM 树，同时加载页面渲染所需的所有外部资源")]),s._v(" "),t("li",[s._v("CSS Parser：解析 CSS，生成 CSS 规则树，并与 DOM 树合并，最终生成 Render 树 (:after 和 :before 这样的伪元素会在这个环节被构建到 DOM 树中)")]),s._v(" "),t("li",[s._v("Layout： 计算图层布局，负责页面中的所有元素的位置、尺寸等信息的计算")]),s._v(" "),t("li",[s._v("Paintting：绘制图层，这一步中浏览器会根据 DOM 代码结果，把每个页面图层转换为像素，并对所有的媒体文件进行解码")]),s._v(" "),t("li",[s._v("Display：整合图层成页面，最后一步浏览器会合并各个图层，将数据由 CPU 输出给 GPU，GPU 进程再将各个图层合成（composite），最后显示出页面。（复杂的视图层会给这个阶段的 GPU 计算带来一些压力，在实际应用中为了优化动画性能，我们有时会手动区分不同的图层）")])]),s._v(" "),t("p",[s._v("渲染过程给说白了，首先是基于 HTML 构建一个 DOM 树，这颗 DOM 树与 CSS 解析器解析出的 CSS 相结合，就有了布局渲染树，最后浏览器以布局渲染树为蓝本，去计算布局并绘制图像，我们页面的初次渲染就大功告成了。"),t("br"),s._v("\n之后每当一个新元素加入到这个 DOM 树当中，浏览器便会通过 CSS 引擎查遍 CSS 样式表，找到符合该元素样式规则应用到这个元素上，然后再重新去绘制它。")]),s._v(" "),t("p",[s._v("为了更快的加载文件，具体可以从以下几方面作出优化策略：")]),s._v(" "),t("h2",{attrs:{id:"http请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http请求"}},[s._v("#")]),s._v(" HTTP请求")]),s._v(" "),t("p",[s._v("http协议是无状态的应用层协议，意味着每次http请求都需要建立通信链路、进行数据传输，而在服务器端，每个http都需要启动独立的线程去处理。这些通信和服务的开销都很昂贵，减少http请求的数目可有效提高访问性能。")]),s._v(" "),t("ol",[t("li",[t("p",[t("strong",[s._v("减少HTTP请求数量")]),s._v("，主要可以通过以下几方面：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("js，css打包")]),t("br"),s._v("\n将浏览器一次访问需要的javascript和CSS合并成一个文件，这样浏览器就只需要一次请求")]),s._v(" "),t("li",[t("strong",[s._v("雪碧图")]),t("br"),s._v("\n使用雪碧图(精灵图)，把所有相对较小的资源图片，绘制在一张大图上，只需要将大图下载下来，然后利用图片定位来讲小图展现在页面中（background-position:百分比，数值）")]),s._v(" "),t("li",[t("strong",[s._v("懒加载")]),t("br"),s._v("\n对于图片而言，在页面刚加载的时候可以只加载第一屏，当用户继续往后滚屏的时候才加载后续的图片")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("避免重定向")])]),s._v(" "),t("p",[s._v("重定向是一个比较常使用的技术手段，比如服务器地址进行迁移，修改了请求的url地址，这时通常会使用重定向，把访问原网址的用户重定向到新的url。"),t("br"),s._v("\n由于浏览器访问地址是一连串的过程，如果重定向的话，就需要在访问过程中重复发起一连串的动作，会消耗很多时间，因此避免出现多次重定向地址或资源的访问。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("DNS预解析")])]),s._v(" "),t("p",[s._v("当浏览器与web服务器建立连接时，它是需要进行DNA解析的，将域名解析为IP地址。首先我们来了解一下它的过程：")]),s._v(" "),t("ul",[t("li",[s._v("先检查本地 hosts 文件中是否有映射，有则使用；")]),s._v(" "),t("li",[s._v("查找本地 DNS 缓存，有则返回；")]),s._v(" "),t("li",[s._v("根据配置在 TCP/IP 参数中设置 DNS 查询服务器，并向其进行查询，这里先称为本地 DNS；")]),s._v(" "),t("li",[s._v("如果该服务器无法解析域名（没有缓存），且不需要转发，则会向根服务器请求；")]),s._v(" "),t("li",[s._v("根服务器根据域名类型判断对应的顶级域名服务器（.com），返回给本地 DNS，然后重复该过程，直到找到该域名；")]),s._v(" "),t("li",[s._v("当然，如果设置了转发，本地 DNS 会将请求逐级转发，直到转发服务器返回或者也不能解析。"),t("br"),s._v("\n所以减少DNS的查询次数非常重要，页面加载时就尽量避免额外耗时。为了减少DNS的询次数，最好的解决方法就是在页面中减少不同的域名请求的机会。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("使用CDN")]),t("br"),s._v("\n使用内容分发网络，把你的网站内容分散到多个、处于不同地域位置的服务器上可以加快下载速度。")])])]),s._v(" "),t("h2",{attrs:{id:"浏览器缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[s._v("#")]),s._v(" 浏览器缓存")]),s._v(" "),t("p",[s._v("通过⽹络获取内容既速度缓慢⼜开销巨⼤。较⼤的响应需要在客户端与服务器之间进⾏多次往返通信，这会延迟浏览器获得和处理内容的时间，还会增加访问者的流量费⽤。因此，合理利⽤浏览器缓存缓存的能⼒成为性能优化的⼀个关键⽅⾯。"),t("br"),s._v(" "),t("img",{attrs:{src:"/img/netpro/cache.png",alt:"cache"}})]),s._v(" "),t("p",[s._v("浏览器在需要获取资源之前，判断以下强缓存中是否存在：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("服务端可以通过在 response 响应头上配置 Expires 和 Cache-Control 来控制强缓存")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("expires")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Sat"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" Feb "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("02")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("58")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GMT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//(过期时间)")]),s._v("\ncache"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("control： max"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("age"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//（http1.1 精准优先级高）")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("如果识别到强缓存，不会发送请求，直接使用本地缓存，状态码是 200\n"),t("img",{attrs:{src:"/img/netpro/fromcache.png",alt:"cache"}})])]),s._v(" "),t("li",[t("p",[s._v("如果强缓存失效了，需要执⾏协商缓存")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("浏览球不会直接发出请求，而是向服务端询问，该资源在指定时间之后有木有修改过，request 请求头上配置 If-Modified-Since ：")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("If"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Modified"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Since"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Sat"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(" Oct "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("06")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("57")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GMT")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("如果服务端返回没有修改，浏览器则直接使用缓存，状态码是 304（not modified）")])]),s._v(" "),t("li",[t("p",[s._v("如果服务端返回文件已修改，浏览器只能重新加载改资源")])])])]),s._v(" "),t("li",[t("p",[s._v("还有一个配置是 etag，这个配置的优先级更高，是文件的指纹"),t("br"),s._v("\n当文件内容不变时，指纹不会变，指纹不变的时候，直接使用缓存")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("ETag")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("W")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2aaa-129892f459"')]),s._v("\nIf"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("None"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Match"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("W")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2aaa-129892f459"')]),s._v("\n")])])])])]),s._v(" "),t("p",[s._v("文件的缓存虽然 js 控制不了，是浏览器自己控制的，但是我们可以通过工程化来更高效的利用缓存")]),s._v(" "),t("h2",{attrs:{id:"页面静态资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#页面静态资源"}},[s._v("#")]),s._v(" 页面静态资源")]),s._v(" "),t("ol",[t("li",[t("p",[t("strong",[s._v("将CSS样式表放在顶部")])]),s._v(" "),t("p",[s._v("如果将css样式定义放在页面中或者页面底部，会出现短暂白屏或者某一区域短暂白板的情况，这和浏览器的运营机制有关的，不管页面如何加载，页面都是逐步呈现的。所以在每做一个页面的时候，用Link标签把每一个样式表定义放在head中。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("将javascript脚本放在底部")])]),s._v(" "),t("p",[s._v("浏览器在加载css文件时，页面逐步呈现会被阻止，直到所有css文件加载完毕，所以要把css文件的引用放到head中去，这样在加载css文件时不会组织页面的呈现。但是对于js文件，在使用的时候，它下面所有也页面内容的呈现都会被阻塞，将脚本放在页面越靠下的地方，就意味着越多的内容能够逐步呈现。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("使用外部javascript和CSS")])]),s._v(" "),t("p",[s._v("内联js和css其实比外部文件有更快的响应速度，那为什么还要使用外部呢？因为使用外部的js和css可以让浏览器缓存他们，这样不仅HTML文档大小减少，而且不会增加HTTP请求数量。另外，使用外部js和css可以提高组件的可复用性。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("图⽚压缩")])]),s._v(" "),t("p",[s._v("图⽚通常是最占⽤流量的，PC端加载的平均图⽚⼤⼩时600K，简直⽐js打包后的⽂件还⼤了，所以针对图⽚的优化，也是很有效果的，在不同的场景下，可以使⽤不同的⽂件⾥类型")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("jpg")]),s._v(" "),t("ul",[t("li",[s._v("有损压缩")]),s._v(" "),t("li",[s._v("体积⼩ 不⽀持透明")]),s._v(" "),t("li",[s._v("⽤于背景图，轮播图")])])]),s._v(" "),t("li",[s._v("png\n"),t("ul",[t("li",[s._v("⽆损压缩，质量⾼，⽀持透明")]),s._v(" "),t("li",[s._v("⾊彩线条更丰富，⼩图，⽐如logo，商品icon")])])]),s._v(" "),t("li",[s._v("svg\n"),t("ul",[t("li",[s._v("⽂本，体积⼩ ⽮量图")]),s._v(" "),t("li",[s._v("渲染成本，学习成本")])])])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("gzip")])]),s._v(" "),t("p",[s._v("Gzip 压缩背后的原理，是在⼀个⽂本⽂件中找出⼀些重复出现的字符串、临时替换它们，从⽽使整个⽂件变⼩。根据这个原理，⽂件中代码的重复率越⾼，那么压缩的效率就越⾼，使⽤ Gzip 的收益也就越⼤。反之亦然。"),t("br"),s._v("\n基本上来说，Gzip都是服务器⼲的活，⽐如nginx")])])])])}),[],!1,null,null,null);t.default=v.exports}}]);