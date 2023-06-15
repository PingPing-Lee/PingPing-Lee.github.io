(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{415:function(s,t,a){"use strict";a.r(t);var e=a(14),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("实际上，React Native 的点按组件经历了三个版本的迭代，下面就来一步步了解了解：")]),s._v(" "),t("h2",{attrs:{id:"touchable-组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#touchable-组件"}},[s._v("#")]),s._v(" Touchable 组件")]),s._v(" "),t("p",[s._v("第一代 Touchable 点按组件的设计思路是，提供多种原生平台的反馈风格给开发者自己选择")]),s._v(" "),t("p",[s._v("框架提供了 1 个基类和 4 个扩展类，它们分别是：")]),s._v(" "),t("ul",[t("li",[s._v("TouchableWithoutFeedback：用于响应用户的点按操作，但不给出任何点按反馈效果。反馈效果由 4 个扩展类实现")]),s._v(" "),t("li",[s._v("TouchableNativeFeedback：给出当前原生平台的点按反馈效果，在 Android 中是涟漪（ripple）效果，就是从点击处散开水波纹的效果")]),s._v(" "),t("li",[s._v("TouchableOpacity：短暂地改变组件的透明度")]),s._v(" "),t("li",[s._v("TouchableHighlight：短暂地加深组件的背景色")]),s._v(" "),t("li",[s._v("TouchableBounce：有 bounce 回弹动画的响应效果")])]),s._v(" "),t("p",[s._v("也正是因为可选择性太多，所以给开发者带来了困扰，因为要花额外的时间去学习了解不同类之间的区别，为了降低学习成本，React Native 团队又开发了第二代点按组件 Button")]),s._v(" "),t("h2",{attrs:{id:"button-组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#button-组件"}},[s._v("#")]),s._v(" Button 组件")]),s._v(" "),t("p",[s._v("第二代 Button 组件的实质是对 Touchable 组件的封装")]),s._v(" "),t("p",[s._v("在 Android 上是 TouchableNativeFeedback 组件，在 iOS 上是 TouchableOpacity 组件")]),s._v(" "),t("p",[s._v("但是也正是因为框架默认选择了和原生保持统一的风格，给开发者又带来了新的困扰，因为在实际的项目开发中，很难做到让不同的开发者统一使用默认样式，因此有了组件 Pressable")]),s._v(" "),t("h2",{attrs:{id:"pressable-组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pressable-组件"}},[s._v("#")]),s._v(" Pressable 组件")]),s._v(" "),t("p",[s._v("第三代不再是 Touchable 组件的封装，而是一个全新重构的点按组件，点按反馈效果可由开发者自行配置")]),s._v(" "),t("p",[s._v("其实我们通常所说的反馈效果无非就是未点击时的默认基础样式和点按后的反馈样式之间来回切换的效果，Pressable 组件就可以轻松实现，因为 Pressable 的样式 style 属性同时支持固定样式，和函数返回的“动态样式”，具体的代码示例如下：")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 固定样式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" baseStyle "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("backgroundColor")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'red'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Pressable\n  onPress"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("handlePress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" pressed "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 动态样式 */")]),s._v("\n    baseStyle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("opacity")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" pressed "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Text"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("按钮"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Text"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Pressable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[s._v("上述代码通过点按状态 pressed，来轻松切换点击和未点击反馈效果，而且除了透明度，变背景色，按钮的宽高，甚至按钮的文字都是可以轻松更改的")]),s._v(" "),t("p",[s._v("除了上述样式之外，组件也实现了 Android 平台特有的涟漪效果，通过下面两个属性进行配置：")]),s._v(" "),t("ul",[t("li",[s._v("android_ripple：用于配置 Android 特有的涟漪效果")]),s._v(" "),t("li",[s._v("android_disableSound：禁用 Android 系统的点击音效，默认 false 不禁用")])]),s._v(" "),t("p",[s._v("总结下来，在日常开发中尽量使用 Pressable 组件，同时满足了简单易用和复杂效果可扩展的特性。")]),s._v(" "),t("h2",{attrs:{id:"点击还是长按"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#点击还是长按"}},[s._v("#")]),s._v(" 点击还是长按？")]),s._v(" "),t("p",[s._v("其实在 RN 中，整个点按事件的响应过程是硬件和软件相互配合的过程。")]),s._v(" "),t("p",[s._v("比如 Pressable 组件响应的整体流程，是从触摸屏识别物理手势开始，到系统和框架 Native 部分把物理手势转换为 JavaScript 手势事件，再到框架 JavaScript 部分确定响应手势的组件，最后到 Pressable 组件确定是点击还是长按")]),s._v(" "),t("p",[s._v("那么问题来了， Pressable 又是如何确定的呢？其实方案也很简单")]),s._v(" "),t("p",[s._v("Pressable 组件基于 React Native 中 的开始响应事件(onResponderGrant) 和结束响应事件(onResponderRelease) 封装了开始点按事件 onPressIn 和结束点按事件 onPressOut")]),s._v(" "),t("p",[s._v("然后通过判断 onPressIn 事件和 onPressOut 事件之间触发间隔耗时就可以确定是点击还是长按：")]),s._v(" "),t("ul",[t("li",[s._v("如果间隔耗时 < 500ms 属于点击。用户的点按动作会先触发 onPressIn，再触发 onPressOut，在 onPressOut 事件中可以触发我们 “自定义的”点击事件 onPress")]),s._v(" "),t("li",[s._v("如果间隔耗时 >= 500ms 属于长按。用户的点按动作会先触发 onPressIn，这个时候你可以埋下一个定时器，并在第 500ms 时通过定时器触发我们 “自定义的” onLongPress，最后在用户松手的时候触发 onPressOut")])]),s._v(" "),t("p",[s._v("为了更好的理解这里放一张官网提供的示意图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/rn/source/press.webp",alt:"press"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);