(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{304:function(t,e,v){"use strict";v.r(e);var n=v(14),_=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("strong",[e("font",{attrs:{color:"#d63200"}},[t._v("HTTP报文")])],1),t._v(" 是由一行一行的简单字符串组成的。"),e("br"),t._v(" "),e("strong",[e("font",{attrs:{color:"#d63200"}},[t._v("HTTP报文")])],1),t._v(" 都是纯文本，不是二进制代码，所以人们可以很方便地对其进行读写。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/netpro/bw.png",alt:"图解"}})]),t._v(" "),e("p",[t._v("从Web客户端发往Web服务器的HTTP报文称为请求报文（request message）。从服务器发往客户端的报文称为响应报文（response message），此外没有其他类型的HTTP报文。HTTP请求和响应报文的格式很类似。")]),t._v(" "),e("p",[t._v("HTTP报文包括以下三个部分。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("起始行\n报文的第一行就是起始行，在请求报文中用来说明要做些什么，在响应报文中说明出现了什么情况。")])]),t._v(" "),e("li",[e("p",[t._v("首部字段\n起始行后面有零个或多个首部字段。每个首部字段都包含一个名字和一个值，为了便于解析，两者之间用冒号（：）来分隔。首部以一个空行结束。添加一个首部字段和添加新行一样简单。")])]),t._v(" "),e("li",[e("p",[t._v("主体\n空行之后就是可选的报文主体了，其中包含了所有类型的数据。请求主体中包括了要发送给Web服务器的数据；响应主体中装载了要返回给客户端的数据。起始行和首部都是文本形式且都是结构化的，而主体则不同，主体中可以包含任意的二进制数据（比如图片、视频、音轨、软件程序）。当然，主体中也可以包含文本。\n请求消息和响应消息都是由 "),e("strong",[t._v("开始行")]),t._v(" (对于请求消息，开始行就是请求行，对于响应消息，开始行就是状态行)，"),e("strong",[t._v("消息报头")]),t._v("(可选)，"),e("strong",[t._v("空行")]),t._v("(只有CRLF的行)，"),e("strong",[t._v("消息正文")]),t._v("(可选)组成。")])])]),t._v(" "),e("p",[e("strong",[t._v("HTTP消息报头")]),t._v(" 包括 "),e("strong",[t._v("通用报头、请求报头、响应报头、实体报头")]),t._v("。")]),t._v(" "),e("p",[t._v("每一个报头域都是由 "),e("strong",[t._v('名字+":"+空格+值')]),t._v(" 组成，消息报头域的名字是大小写无关的。")]),t._v(" "),e("h2",{attrs:{id:"通用报头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通用报头"}},[t._v("#")]),t._v(" 通用报头")]),t._v(" "),e("p",[t._v("通用报头可以出现在请求报头，也可以出现在响应报头")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("首部")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Date")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("表示消息产生的日期和时间")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Connection")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("允许发送指定连接的选项。例如指定连接是连续，或者指定“close”选项，通知服务器，在响应完成后，关闭连接")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Cache-Control")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("用于指定缓存指令，缓存指令是单向的")])])])]),t._v(" "),e("h2",{attrs:{id:"请求报头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求报头"}},[t._v("#")]),t._v(" 请求报头")]),t._v(" "),e("p",[t._v("请求报头 允许客户端向服务器端传递请求的附加信息以及客户端自身的信息。")]),t._v(" "),e("p",[t._v("常用的请求报头如下：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Accept：")]),t._v(" 用于指定客户端可接收的数据格式"),e("br"),t._v("\n例如：Accept：image/gif，表明客户端希望接受GIF图象格式的资源；Accept：text/html，表明客户端希望接受html文本。")]),t._v(" "),e("li",[e("strong",[t._v("Accept-Charset：")]),t._v(" 用于指定客户端可接收的字符集"),e("br"),t._v("\n例如：Accept-Charset:iso-8859-1,gb2312,如果在请求消息中没有设置这个域，缺省是任何字符集都可以接受。")]),t._v(" "),e("li",[e("strong",[t._v("Accept-Encoding：")]),t._v(" 类似于Accept， 用于指定可接收的压缩算法"),e("br"),t._v("\n例如：Accept-Encoding: gzip.deflate.如果请求消息中没有设置这个域，服务器假定客户端对各种压缩算法都可以接受。")]),t._v(" "),e("li",[e("strong",[t._v("Accept-Language：")]),t._v(" 用于指定客户端可接收的语言"),e("br"),t._v("\n例如：Accept-Language:zh-cn，如果请求消息中没有设置，服务器假定客户端对各种语言都可以接受。")]),t._v(" "),e("li",[e("strong",[t._v("Connection：keep-alive：")]),t._v(" 一次 TCP 连接重复使用")]),t._v(" "),e("li",[e("strong",[t._v("Cookie：")]),t._v(" 一次 TCP 连接重复使用")]),t._v(" "),e("li",[e("strong",[t._v("Authorization：")]),t._v(" 用于证明客户端有权查看某个资源"),e("br"),t._v("\n当浏览器访问一个页面时，如果收到服务器的响应代码为401（未授权），可以发送一个包含Authorization 请求头的请求，要求服务器对其进行验证。")]),t._v(" "),e("li",[e("strong",[t._v("Host：")]),t._v(" 用于指定被请求资源的Internet主机和端口号，它通常从HTTP URL中提取出来的。"),e("strong",[t._v("发送请求时，该报头域是必需的")]),t._v("。"),e("br"),t._v("\n例如：我们在浏览器中输入：http://www.baidu.com/，浏览器发送的请求消息中就会包含 Host 请求头(Host：www.baidu.com)，若指定了端口号:8080(Host：www.baidu.com:8080)")]),t._v(" "),e("li",[e("strong",[t._v("User-Agent:")]),t._v(" 简称 UA，用于标识浏览器信息\nUser-Agent请求头允许客户端将它的操作系统、浏览器和其它属性告诉服务器。不过这个报头域不是必需的，如果我们自己编写一个浏览器，不使用 "),e("code",[t._v("User-Agent")]),t._v(" 请求头，那么服务器端就无法得知我们的信息了。")])]),t._v(" "),e("h2",{attrs:{id:"响应报头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应报头"}},[t._v("#")]),t._v(" 响应报头")]),t._v(" "),e("p",[e("strong",[t._v("响应报头")]),t._v(" 允许服务器传递不能放在状态行中的附加响应信息，以及关于服务器的信息和对Request-URI所标识的资源进行下一步访问的信息。")]),t._v(" "),e("p",[t._v("常用的响应报头：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Content-type:")]),t._v(" 返回数据的格式，如 application/json")]),t._v(" "),e("li",[e("strong",[t._v("Content-length:")]),t._v(" 返回数据的大小，多少字节")]),t._v(" "),e("li",[e("strong",[t._v("Content-Encoding：")]),t._v(" 返回数据的压缩算法")]),t._v(" "),e("li",[e("strong",[t._v("Location：")]),t._v(" 响应报头域用于重定向接受者到一个新的位置。Location响应报头域常用在更换域名的时候。")]),t._v(" "),e("li",[e("strong",[t._v("Server：")]),t._v(" 响应报头域包含了服务器用来处理请求的软件信息。与User-Agent请求报头域是相对应的。"),e("br"),t._v("\n例如：Server：Apache-Coyote/1.1")]),t._v(" "),e("li",[e("strong",[t._v("WWW-Authenticate：")]),t._v(" 响应报头域必须被包含在401（未授权的）响应消息中，客户端收到401响应消息时候，并发送Authorization报头域请求服务器对其进行验证时，服务端响应报头就包含该报头域。"),e("br"),t._v('\n例如：WWW-Authenticate:Basic realm="Basic Auth Test!": 可以看出服务器对请求资源采用的是基本验证机制。')])]),t._v(" "),e("h2",{attrs:{id:"实体报头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实体报头"}},[t._v("#")]),t._v(" 实体报头")]),t._v(" "),e("p",[t._v("请求和响应消息都可以传送一个实体。一个实体由实体报头域和实体正文组成，但并不是说实体报头域和实体正文要在一起发送，可以只发送实体报头域。实体报头定义了关于实体正文（eg：有无实体正文）和请求所标识的资源的元信息。"),e("br"),t._v("\n常用的实体报头:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Content-Encoding"),e("br"),t._v("\nContent-Encoding实体报头域被用作媒体类型的修饰符，它的值指示了已经被应用到实体正文的附加内容的编码，因而要获得Content-Type报头域中所引用的媒体类型，必须采用相应的解码机制。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("  Content-Encoding：gzip //用于记录文档的压缩方法\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Content-Language\nContent-Language实体报头域描述了资源所用的自然语言。没有设置该域则认为实体内容将提供给所有的语言阅读者。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("  Content-Language:da\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Content-Length"),e("br"),t._v("\nContent-Length实体报头域用于指明实体正文的长度，以字节方式存储的十进制数字来表示。")])]),t._v(" "),e("li",[e("p",[t._v("Content-Type"),e("br"),t._v("\nContent-Type实体报头域用语指明发送给接收者的实体正文的媒体类型。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("  Content-Type:text/html;charset=UTF-8\n  Content-Type:application/json;charset=UTF-8\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Last-Modified"),e("br"),t._v("\nLast-Modified实体报头域用于指示资源的最后修改日期和时间。")])]),t._v(" "),e("li",[e("p",[t._v("Expires"),e("br"),t._v("\nExpires实体报头域给出响应过期的日期和时间。为了让代理服务器或浏览器在一段时间以后更新缓存中(再次访问曾访问过的页面时，直接从缓存中加载，缩短响应时间和降低服务器负载)的页面"),e("br"),t._v("\n我们可以使用Expires实体报头域指定页面过期的时间, 如：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("  Expires：Thu，15 Sep 2006 16:23:12 GMT\n")])])]),e("p",[t._v("HTTP1.1的客户端和缓存必须将其他非法的日期格式（包括0）看作已经过期。"),e("br"),t._v('\neg：为了让浏览器不要缓存页面，我们也可以利用Expires实体报头域，设置为0，jsp中程序如下：response.setDateHeader("Expires","0");')])])])])}),[],!1,null,null,null);e.default=_.exports}}]);