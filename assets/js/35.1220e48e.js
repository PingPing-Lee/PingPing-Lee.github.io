(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{306:function(v,_,t){"use strict";t.r(_);var r=t(14),s=Object(r.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("在TCP/IP网络体系结构中，TCP(传输控制协议，Transport Control Protocol)、UDP(用户数据报协议，User Data Protocol)是传输层最重要的两种协议，为上层用户提供级别的通信可靠性。")]),v._v(" "),_("h2",{attrs:{id:"tcp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[v._v("#")]),v._v(" TCP")]),v._v(" "),_("p",[_("strong",[v._v("TCP(传输控制协议)")]),v._v(" 定义了两台计算机之间进行可靠的传输而交换的数据和确认信息的格式，以及计算机为了确保数据的正确到达而采取的措施。"),_("br"),v._v("\nTCP 是一种面向连接的、可靠的、基于字节流的传输层通信协议。")]),v._v(" "),_("p",[_("strong",[v._v("TCP 建立连接：")])]),v._v(" "),_("p",[v._v("客户端与服务端在使用TCP传输协议时要先建立一个“通道”，如图所示是建立连接的过程，又称为 三次握手的过程：")]),v._v(" "),_("p",[_("img",{attrs:{src:"/img/netpro/3ws.jpeg",alt:"图解"}})]),v._v(" "),_("p",[_("strong",[v._v("1.")]),v._v(" 在建立通道时，客户端首先要向服务端发送一个SYN同步信号。"),_("br"),v._v(" "),_("strong",[v._v("2.")]),v._v(" 服务端在接收到这个信号之后会向客户端发出SYN同步信号和ACK确认信号。"),_("br"),v._v(" "),_("strong",[v._v("3.")]),v._v(" 当服务端的ACK和SYN到达客户端后，客户端与服务端之间的这个“通道”就会被建立起来。")]),v._v(" "),_("p",[_("strong",[v._v("TCP 断开连接：")])]),v._v(" "),_("p",[v._v("在传输完毕之后又要关闭这“通道”，如图所示是断开连接的过程，又称为 “四次挥手”的过程：")]),v._v(" "),_("p",[_("img",{attrs:{src:"/img/netpro/4hs.jpeg",alt:"图解"}})]),v._v(" "),_("p",[_("strong",[v._v("1")]),v._v(" 在数据传输完毕之后，客户端会向服务端发出一个FIN终止信号。"),_("br"),v._v(" "),_("strong",[v._v("2")]),v._v(" 服务端在收到这个信号之后会向客户端发出一个ACK确认信号。"),_("br"),v._v(" "),_("strong",[v._v("3.")]),v._v(" 如果服务端此后也没有数据发给客户端时服务端会向客户端发送一个FIN终止信号。"),_("br"),v._v(" "),_("strong",[v._v("4.")]),v._v(" 客户端在收到这个信号之后会回复一个确认信号，在服务端接收到这个信号之后，服务端与客户端的通道也就关闭了。")]),v._v(" "),_("h2",{attrs:{id:"udp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#udp"}},[v._v("#")]),v._v(" UDP")]),v._v(" "),_("p",[_("strong",[v._v("UDP(用户数据报协议)")]),v._v(" 是一个简单的面向数据报的传输层协议。具有以下特点：")]),v._v(" "),_("ul",[_("li",[_("p",[_("strong",[v._v("面向无连接")]),_("br"),v._v("\nUDP在传输数据前既不需要建立通道，在数据传输完毕后也不需要将通道关闭。只要客户端给服务端发送一个请求，服务端就会一次性地把所有数据发送完毕")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("不可靠")]),_("br"),v._v("\nUDP不提供可靠性，也不提供报文到达确认、排序以及流量控制等功能。它只是把应用程序传给IP层的数据报发送出去，但是并不能保证它们能到达目的地。因此报文可能会丢失、重复以及乱序等。")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("速度快")]),_("br"),v._v("\nUDP在传输数据报前不用在客户和服务器之间建立一个连接，且没有超时重发等机制，故而传输速度很快。")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("有单播，多播，广播的功能")]),_("br"),v._v("\nUDP 不仅支持一对一的传输方式，而且支持一对多，多对多，多对一的方式，也就是说 UDP 提供了单播，多播，广播的功能。")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("UDP是面向报文的")]),_("br"),v._v("\n发送方的UDP对应用程序交下来的报文，在添加首部后就向下交付IP层。UDP对应用层交下来的报文，既不合并，也不拆分，而是保留这些报文的边界。因此，应用程序必须选择合适大小的报文")])])]),v._v(" "),_("h2",{attrs:{id:"区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[v._v("#")]),v._v(" 区别")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th"),v._v(" "),_("th",[v._v("TCP")]),v._v(" "),_("th",[v._v("UDP")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("连接方式")]),v._v(" "),_("td",[v._v("面向连接")]),v._v(" "),_("td",[v._v("无连接")])]),v._v(" "),_("tr",[_("td",[v._v("可靠性")]),v._v(" "),_("td",[v._v("可靠传输，使用流量控制和拥塞控制，保证数据顺序")]),v._v(" "),_("td",[v._v("不可靠传输，可能丢包且无序的")])]),v._v(" "),_("tr",[_("td",[v._v("连接对象个数")]),v._v(" "),_("td",[v._v("一对一")]),v._v(" "),_("td",[v._v("一对一，一对多，多对多，多对一")])]),v._v(" "),_("tr",[_("td",[v._v("传输方式")]),v._v(" "),_("td",[v._v("面向字节流")]),v._v(" "),_("td",[v._v("面向报文")])]),v._v(" "),_("tr",[_("td",[v._v("适用场景")]),v._v(" "),_("td",[v._v("要求可靠传输的应用，例如文件传输")]),v._v(" "),_("td",[v._v("适用于实时应用（IP电话、视频会议、直播等）")])])])]),v._v(" "),_("ul",[_("li",[v._v("TCP向上层提供面向连接的可靠服务 ，UDP向上层提供无连接不可靠服务。")]),v._v(" "),_("li",[v._v("虽然 UDP 并没有 TCP 传输来的准确，但是可以满足很多实时性要求高的场景")]),v._v(" "),_("li",[v._v("对数据准确性要求高，速度可以相对较慢的，可以选用TCP")])])])}),[],!1,null,null,null);_.default=s.exports}}]);