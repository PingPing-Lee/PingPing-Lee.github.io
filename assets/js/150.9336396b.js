(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{420:function(a,t,e){"use strict";e.r(t);var s=e(14),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("安卓平台打包APK时，需要一个证书用于为APP签名，生成签名证书可以Android Studio以可视化的方式生成，也可以使用终端采用命令行的方式生成，下面我们以命令行 为例在 mac 下生成安卓签名证书.keystore文件")]),a._v(" "),t("h3",{attrs:{id:"_1-java环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-java环境"}},[a._v("#")]),a._v(" 1. JAVA环境")]),a._v(" "),t("p",[a._v("先检查当前mac有没有安装JAVA环境，没有的话就去JAVA官网安装一个,\n"),t("img",{attrs:{src:"/img/rn/java.png",alt:"java"}})]),a._v(" "),t("h3",{attrs:{id:"_2-jdk地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-jdk地址"}},[a._v("#")]),a._v(" 2. jdk地址")]),a._v(" "),t("p",[a._v("终端输入 /usr/libexec/java_home -V 命令，查看我们的jdk地址\n"),t("img",{attrs:{src:"/img/rn/jdk.png",alt:"jdk"}})]),a._v(" "),t("h3",{attrs:{id:"_3-打开上图划线文件位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-打开上图划线文件位置"}},[a._v("#")]),a._v(" 3. 打开上图划线文件位置")]),a._v(" "),t("p",[t("code",[a._v("cd /Library/Java/JavaVirtualMachines/jdk-11.0.4.jdk/Contents/Home")])]),a._v(" "),t("h3",{attrs:{id:"_4-命令创建keystore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-命令创建keystore"}},[a._v("#")]),a._v(" 4. 命令创建keystore")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" keytool "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-genkey")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-alias")]),a._v(" ppl.keystore "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-keyalg")]),a._v(" RSA "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-sigalg")]),a._v(" SHA1WithRSA "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-validity")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("20000")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-keysize")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1024")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-keystore")]),a._v(" ppl.keystore "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v("\n")])])]),t("blockquote",[t("p",[a._v("这里解释一下含义："),t("br"),a._v("\n-alias: 是证书别名，可修改为自己想设置的字符，建议使用英文字母和数字\nSHA1WithRSA: 证书签名算法"),t("br"),a._v("\n-validity 20000: 证书的有效期，表示100年有效期，单位天，建议时间设置长一点，避免证书过期"),t("br"),a._v("\nkeysize 1024: 证书的大小"),t("br"),a._v("\nppl.keystorekey: 证书文件名称，可修改为自己想设置的文件名称，也可以指定完整文件路径")])]),a._v(" "),t("p",[a._v("回车之后按照如下步骤：\n"),t("img",{attrs:{src:"/img/rn/keystore.png",alt:"keystore"}})]),a._v(" "),t("blockquote",[t("p",[a._v("请记住红线部分内容，后面会用到")])]),a._v(" "),t("h3",{attrs:{id:"_5-证书所在位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-证书所在位置"}},[a._v("#")]),a._v(" 5. 证书所在位置")]),a._v(" "),t("p",[a._v("Mac 前往 -> 前往文件夹，然后粘贴 步骤2中的 jdk地址，即可看到刚刚生成的 keystore 文件\n"),t("img",{attrs:{src:"/img/rn/qwwjj.png",alt:"qwwjj"}})]),a._v(" "),t("h3",{attrs:{id:"_6-查看key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-查看key"}},[a._v("#")]),a._v(" 6. 查看key")]),a._v(" "),t("p",[a._v("终端输入下面的指令回车")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("keytool "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-list")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-keystore")]),a._v(" /Library/Java/JavaVirtualMachines/jdk-11.0.4.jdk/Contents/Home/ppl.keystore\n")])])]),t("p",[a._v("然后填写上图中的步骤4中的密钥库指令：\n"),t("img",{attrs:{src:"/img/rn/ck.png",alt:"ck"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);