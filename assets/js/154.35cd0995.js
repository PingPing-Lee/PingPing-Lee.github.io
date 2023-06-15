(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{424:function(t,a,s){"use strict";s.r(a);var r=s(14),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("由于网络问题，使用真机调试时总会遇到调试困难，加载慢，点不动等问题。"),a("br"),t._v("\n可以通过Iphone USB或者Android的Usb共享网络给mac，但是需要注意以下几点：")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("需要你的手机插卡有网络")]),t._v(" "),a("li",[t._v("确保手机和电脑处在同一个网段内，即它们是在同一个路由器下。")])])]),t._v(" "),a("p",[t._v("具体操作流程如下:")]),t._v(" "),a("h2",{attrs:{id:"ios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios"}},[t._v("#")]),t._v(" iOS")]),t._v(" "),a("blockquote",[a("p",[t._v('在iOS上,可以打开"RCTWebSocketExecutor.mm “文件，将“localhost”改为你的电脑的ip，然后在Developer Menu下单击"Debug with Chrome” 启动JS远程调试功能。但是在遇到网络不好的情况下会很慢，所以更多建议用下面的方式：')])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("打开设置 → 打开个人热点→ 将手机用数据线与Mac连接\n"),a("img",{attrs:{src:"/img/rn/ios.png",alt:"ios"}})])]),t._v(" "),a("li",[a("p",[t._v("打开网络偏好设置添加Iphone USB，取消停用。\n"),a("img",{attrs:{src:"/img/rn/perfer.png",alt:"Preferences"}})])]),t._v(" "),a("li",[a("p",[t._v("此时在手机调试输入上图所示ip即可，会比使用WIFI测试流畅许多。\n"),a("img",{attrs:{src:"/img/rn/ip.png",alt:"ip"}})]),t._v(" "),a("p",[a("strong",[a("font",{attrs:{color:"#d63200"}},[t._v("提示：")]),t._v("：")],1),t._v(" 如果你的Iphone连接电脑后只充电没有弹iTunes或提示信任电脑等步骤，那么你需要更换一根数据线")])])]),t._v(" "),a("h2",{attrs:{id:"android"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android"}},[t._v("#")]),t._v(" Android")]),t._v(" "),a("ol",[a("li",[t._v("下载适用 "),a("a",{attrs:{href:"https://developer.android.com/studio/releases/platform-tools#:~:text=Mac%20%E7%9A%84%20SDK%20Platform%2D-,Tools,-%E4%B8%8B%E8%BD%BD%E9%80%82%E7%94%A8%E4%BA%8E%20Linux",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mac 的 SDK Platform-Tools"),a("OutboundLink")],1),t._v(", 完成后解压\n"),a("img",{attrs:{src:"/img/rn/sdk-tools.png",alt:"sdk-tools"}})]),t._v(" "),a("li",[t._v("给文件配置环境变量")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("echo "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'export PATH=$PATH:~/XXXXXX(对应你电脑上的路径)/platform-tools'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bash_profile\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("重启终端")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("source "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bash_profile\nadb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("version\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[a("a",{attrs:{href:"https://developer.android.google.cn/studio/command-line/adb?hl=zh-cn#Enabling",target:"_blank",rel:"noopener noreferrer"}},[t._v("在设备上启用 adb 调试"),a("OutboundLink")],1)])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("手机通过 USB 连接，并在手机设置 -> 开发者选项 -> 打开 USB 调试，终端输入下述命令")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("adb devices "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看当前adb连接的设备")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"/img/rn/image_391414652545339.png",alt:"ip"}})])]),t._v(" "),a("li",[a("p",[t._v("有些APP的调试工具开启RN调试模式打开， ip 不需要输入\n"),a("img",{attrs:{src:"/img/rn/image_42333256827320365.png",alt:"ip"}})])]),t._v(" "),a("li",[a("p",[t._v("终端运行以下命令，运行本地调试代码，点击设备，即可以看到加载进度条了")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("adb reverse tcp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8081")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tcp")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8081")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加载本地调试代码")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/qq_34304620/article/details/106737016",target:"_blank",rel:"noopener noreferrer"}},[t._v("adb 配置成功 再打开终端却失效"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("安卓手机通过上述截图方式下载adb命令行工具包，修改存放地址以后再向～/.bash_profile中暴露启动地址时，或可能会出现adb全局命令访")])]),t._v(" "),a("p",[t._v("问失败的问题，所以建议直接从Downloads里面安装，很奇怪的问题～")])])}),[],!1,null,null,null);a.default=e.exports}}]);