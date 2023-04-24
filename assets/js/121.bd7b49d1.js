(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{395:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("如果你是 Mac，在搭建环境之前请先明确是不是 M1 芯片的机子"),a("br"),t._v("\n查看步骤，电脑屏幕左上角点击 LOGO -> 关于本机 -> 芯片"),a("br"),t._v("\n如果是的，请参考 "),a("RouterLink",{attrs:{to:"/M1_RN.html"}},[t._v("M1芯片的MAC机上搭建RN开发环境")]),t._v(" 搭建环境...")],1),t._v(" "),a("h2",{attrs:{id:"安装nvm、搭建node环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装nvm、搭建node环境"}},[t._v("#")]),t._v(" 安装nvm、搭建node环境")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("安装"),a("a",{attrs:{href:"https://blog.csdn.net/zmm13298329239/article/details/83587214",target:"_blank",rel:"noopener noreferrer"}},[t._v("nvm"),a("OutboundLink")],1),t._v(":")])]),t._v(" "),a("li",[a("p",[t._v("终端输入")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("常见问题：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("若因为网络问题导致安装失败"),a("br"),t._v("\n在命令行输入，将 "),a("code",[t._v("nvm node")]),t._v(" 镜像地址改成国内淘宝镜像")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NVM_NODEJS_ORG_MIRROR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://npm.taobao.org/mirrors/node\n")])])])]),t._v(" "),a("li",[a("p",[t._v("出现报错信息如下(一般是新电脑或者重装系统后可能出现的问题):")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Failed to connect to raw.githubusercontent.com port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(": Connection refused\n")])])]),a("p",[t._v("解决办法请"),a("a",{attrs:{href:"https://www.jianshu.com/p/c2e829027b0a",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考链接"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("输入"),a("code",[t._v("nvm -v")]),t._v("会出现"),a("code",[t._v("-bash: nvm: command not found")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("进入当前用户的home目录")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" YouFileName\n")])])])]),t._v(" "),a("li",[a("p",[t._v("修改配置文件")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" .bash_profile\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("--  如果文件不存在，自己创建即可，创建命令如下： --"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" .bash_profile\n")])])]),a("p",[t._v("直接更改弹出的.bash_profile文件内容,复制一下代码")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NVM_DIR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v('/.nvm"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NVM_DIR")]),t._v('/nvm.sh"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NVM_DIR")]),t._v('/nvm.sh"')]),t._v("\n")])])]),a("p",[t._v("command + s 保存文件，然后关闭")])]),t._v(" "),a("li",[a("p",[t._v("继续输入以下指令")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" .bash_profile\nnvm "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\n")])])])])])])])]),t._v(" "),a("li",[a("p",[t._v("使用nvm安装node")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("nvm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" stable "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装最新稳定版 node")]),t._v("\nnvm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.2")]),t._v(".2 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 4.2.2 版本")]),t._v("\nnvm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.12")]),t._v(".7 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 0.12.7 版本")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 特别说明：以下模块安装仅供演示说明，并非必须安装模块")]),t._v("\nnvm use "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换至 4.2.2 版本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v(" mz-fis "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 mz-fis 模块至全局目录，安装完成的路径是 /Users/&lt;你的用户名&gt;/.nvm/versions/node/v0.12.7/lib/mz-fis")]),t._v("\nnvm use "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换至 0.12.7 版本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v(" react-native-cli "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#安装 react-native-cli 模块至全局目录，安装完成的路径是 /Users/&lt;你的用户名&gt;/.nvm/versions/node/v4.2.2/lib/react-native-cli")]),t._v("\n\nnvm "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" default "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.12")]),t._v(".7 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置默认 node 版本为 0.12.7")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("常用nvm命令")]),t._v(" "),a("ul",[a("li",[t._v("查看已安装的版本："),a("code",[t._v("nvm ls")])]),t._v(" "),a("li",[t._v("查看可以安装的版本："),a("code",[t._v("nvm ls-remote")])]),t._v(" "),a("li",[t._v("安装指定的版本："),a("code",[t._v("nvm install version")])]),t._v(" "),a("li",[t._v("删除指定的版本："),a("code",[t._v("nvm uninstall version")])]),t._v(" "),a("li",[t._v("使用选定的版本："),a("code",[t._v("nvm use version")])])])])]),t._v(" "),a("h2",{attrs:{id:"安装xcode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装xcode"}},[t._v("#")]),t._v(" 安装Xcode")]),t._v(" "),a("p",[t._v("brew环境需要下，需要在在App Store中安装 Xcode, 同时由于 Xcode 比较大，所以下载同时可以先进行下一步哦~")]),t._v(" "),a("h2",{attrs:{id:"安装homebrew"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装homebrew"}},[t._v("#")]),t._v(" 安装Homebrew")]),t._v(" "),a("p",[t._v("在终端输入")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("/usr/bin/ruby "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-fsSL")]),t._v(" https://raw.githubusercontent.com/Homebrew/install/master/install"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n")])])]),a("h2",{attrs:{id:"搭建react-native环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建react-native环境"}},[t._v("#")]),t._v(" 搭建React Native环境")]),t._v(" "),a("p",[t._v("根据"),a("a",{attrs:{href:"https://reactnative.cn/docs/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Native中文网"),a("OutboundLink")],1),t._v("的配置教程安装"),a("br"),t._v("\n可能遇到的问题")]),t._v(" "),a("ul",[a("li",[t._v("（有mac/linux使用经验者可忽略）npm -g的时候可能会遇到些权限问题，在命令行前加上sudo")])]),t._v(" "),a("blockquote",[a("p",[t._v("特别强调不要用cnpm，下载的包路径会不同，亲测踩坑。"),a("br")])]),t._v(" "),a("h2",{attrs:{id:"安装git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装git"}},[t._v("#")]),t._v(" 安装git")]),t._v(" "),a("ul",[a("li",[t._v("安装: "),a("code",[t._v("brew install git")])]),t._v(" "),a("li",[t._v("配置用户名和邮箱：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your_name"')]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your_email@gmail.com"')]),t._v("\n")])])]),a("ul",[a("li",[t._v("查看git配置信息："),a("code",[t._v("git config --list")])]),t._v(" "),a("li",[t._v("对于git不熟悉或者之前使用svn的同学可以看看"),a("a",{attrs:{href:"https://backlog.com/git-tutorial/cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("git教程"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"常用软件安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用软件安装"}},[t._v("#")]),t._v(" 常用软件安装")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("VSCode"),a("OutboundLink")],1),t._v(" - 为了保证插件统一，最好统一使用VSCode")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint"),a("OutboundLink")],1),t._v(" - 一定要装，编码规范")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git Lens"),a("OutboundLink")],1),t._v(" - Git相关利器，包括不限于页面内历史操作查看对比等")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Native Snippet"),a("OutboundLink")],1),t._v(" - 少打一大推代码")])])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://xclient.info/s/sketch.html?t=5dea63c8cbba161cdafbf5e8f2552a8385501531",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sketch"),a("OutboundLink")],1),t._v(" - 抠图看样式必备")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.wunderlist.com/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("奇妙清单"),a("OutboundLink")],1),t._v("- 面板项目管理必备")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/jhen0409/react-native-debugger/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Native Debugger"),a("OutboundLink")],1),t._v(" - 调整样式、模拟Redux dispatch神器")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("brew update "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("amp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("amp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" brew cask "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" react-native-debugger\n")])])])]),t._v(" "),a("li",[a("p",[t._v("依据个人喜好安装")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://typora.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("typora编辑器"),a("OutboundLink")],1),t._v(" -typora编辑器")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://skim-app.sourceforge.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Skim"),a("OutboundLink")],1),t._v(" -PDF工具，便于演示")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.sourcetreeapp.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("SourceTree"),a("OutboundLink")],1),t._v(" -拉取仓库代码")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.iterm2.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Iterm2"),a("OutboundLink")],1),t._v(" - 比系统自带好用的终端")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/robbyrussell/oh-my-zsh",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oh-my-zsh"),a("OutboundLink")],1),t._v(" - 提升终端逼格利器")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.alfredapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Alfred"),a("OutboundLink")],1),t._v(" - Mac 效率工具必备神器")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/wensonsmith/YoudaoTranslate",target:"_blank",rel:"noopener noreferrer"}},[t._v("有道翻译"),a("OutboundLink")],1),t._v(" - 翻译咯")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/deanishe/alfred-convert",target:"_blank",rel:"noopener noreferrer"}},[t._v("Alfred-Convert"),a("OutboundLink")],1),t._v(" - 方便各种单位换算")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.packal.org/workflow/colors",target:"_blank",rel:"noopener noreferrer"}},[t._v("Colors"),a("OutboundLink")],1),t._v(" - 显示各种rgb,hex,hsl颜色")])])])]),t._v(" "),a("h2",{attrs:{id:"vscode-setting的一些标配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscode-setting的一些标配"}},[t._v("#")]),t._v(" vscode setting的一些标配")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"workbench.colorTheme"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"One Dark Pro"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"problems.decorations.enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"javascript.implicitProjectConfig.experimentalDecorators"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"workbench.iconTheme"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vscode-icons"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"eslint.autoFixOnSave"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor.formatOnSave"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"javascript.format.enable"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"[jsonc]"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor.defaultFormatter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vscode.json-language-features"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"files.autoSaveDelay"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor.tabSize"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"files.autoSave"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"afterDelay"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"explorer.confirmDelete"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"window.zoomLevel"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor.suggestFontSize"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"javascript.updateImportsOnFileMove.enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"always"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor.fontFamily"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ayuthaya"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"terminal.integrated.fontFamily"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ayuthaya"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"debug.console.fontFamily"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ayuthaya"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"explorer.confirmDragAndDrop"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"[json]"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor.defaultFormatter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vscode.json-language-features"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"todo-tree.highlights.enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"todo-tree.tree.showScanModeButton"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prettier.useEditorConfig"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor.minimap.enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor.codeActionsOnSave"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"source.fixAll.eslint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"terminal.integrated.fontSize"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor.fontLigatures"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"debug.console.fontSize"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"json.schemas"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  \n  \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"launch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"configurations"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);