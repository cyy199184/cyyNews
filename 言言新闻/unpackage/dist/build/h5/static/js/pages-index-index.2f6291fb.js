(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0f03":function(t,e,n){"use strict";var a=n("dced"),i=n.n(a);i.a},2909:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,a.default)(t)||(0,i.default)(t)||(0,r.default)(t)||(0,o.default)()};var a=s(n("6005")),i=s(n("db90")),r=s(n("06c5")),o=s(n("3427"));function s(t){return t&&t.__esModule?t:{default:t}}},3427:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n("d9e2"),n("d401")},6005:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(Array.isArray(t))return(0,a.default)(t)};var a=function(t){return t&&t.__esModule?t:{default:t}}(n("6b75"))},7435:function(t,e,n){"use strict";n.r(e);var a=n("b1ea"),i=n("7fa9");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("0f03");var o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"9377aeee",null,!1,a["a"],void 0);e["default"]=s.exports},"7fa9":function(t,e,n){"use strict";n.r(e);var a=n("d7dc"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},a710:function(t,e,n){"use strict";var a=n("d266"),i=n.n(a);i.a},ac21:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.newsbox[data-v-9377aeee]{display:flex}.newsbox .pic[data-v-9377aeee]{width:%?230?%;height:%?160?%}.newsbox .pic uni-image[data-v-9377aeee]{width:100%;height:100%}.newsbox .text[data-v-9377aeee]{flex:1;display:flex;flex-direction:column;justify-content:space-between;padding-left:%?20?%}.newsbox .text .title[data-v-9377aeee]{font-size:%?36?%;color:#333;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.newsbox .text .info[data-v-9377aeee]{font-size:%?26?%;color:#999}.newsbox .text .info uni-text[data-v-9377aeee]{padding-right:%?30?%}',""]),t.exports=e},b1ea:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"newsbox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goDetail(t.item)}}},[n("v-uni-view",{staticClass:"pic"},[n("v-uni-image",{attrs:{src:t.item.picurl,mode:"aspectFill",alt:""}})],1),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.item.title))]),t.item.looktime?n("v-uni-view",{staticClass:"info"},[n("v-uni-text",[t._v("浏览时间: "+t._s(t.item.looktime))])],1):n("v-uni-view",{staticClass:"info"},[n("v-uni-text",[t._v(t._s(t.item.author))]),n("v-uni-text",[t._v(t._s(t.item.hits)+"浏览")])],1)],1)],1)},i=[]},b307:function(t,e,n){"use strict";n.r(e);var a=n("bf0a"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},bf0a:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("99af");var i=a(n("2909")),r={data:function(){return{navIndex:0,navArr:[],newsArr:[],currentPage:1,loading:0}},onLoad:function(){this.getNavData(),this.getNewsData()},onReachBottom:function(){console.log("到底了！！"),2!=this.loading&&(this.currentPage++,this.loading=1,this.getNewsData())},methods:{clicknav:function(t,e){this.navIndex=t,this.currentPage=1,this.newsArr=[],this.loading=0,this.getNewsData(e)},getNavData:function(){var t=this;uni.request({url:"https://ku.qingnian8.com/dataApi/news/navlist.php",success:function(e){t.navArr=e.data}})},getNewsData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;uni.request({url:"https://ku.qingnian8.com/dataApi/news/newslist.php",data:{cid:e,page:this.currentPage},success:function(e){console.log(e),0==e.data.length&&(t.loading=2),t.newsArr=[].concat((0,i.default)(t.newsArr),(0,i.default)(e.data))}})}}};e.default=r},d266:function(t,e,n){var a=n("ff80");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("7647d23c",a,!0,{sourceMap:!1,shadowMode:!1})},d7dc:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("99af");var a={name:"newsbox",props:{item:{type:Object,default:function(){return{title:"组件内默认的标题",author:"张三",hits:"000",picurl:"../../static/images/nopic.png"}}}},data:function(){return{}},methods:{goDetail:function(t){uni.navigateTo({url:"/pages/detail/detail?cid=".concat(t.classid,"&id=").concat(t.id)})}}};e.default=a},db90:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630")},dced:function(t,e,n){var a=n("ac21");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("656b60fa",a,!0,{sourceMap:!1,shadowMode:!1})},e779:function(t,e,n){"use strict";n.r(e);var a=n("fbe1"),i=n("b307");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("a710");var o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"6d20ea95",null,!1,a["a"],void 0);e["default"]=s.exports},f2bc:function(t,e,n){t.exports=n.p+"static/img/nopic.f1c374ec.png"},fbe1:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={newsbox:n("7435").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"home"},[a("v-uni-scroll-view",{staticClass:"navscroll",attrs:{"scroll-x":!0}},t._l(t.navArr,(function(e,n){return a("v-uni-view",{key:e.id,staticClass:"item",class:n==t.navIndex?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clicknav(n,e.id)}}},[t._v(t._s(e.classname))])})),1),a("v-uni-view",{staticClass:"content"},t._l(t.newsArr,(function(t){return a("v-uni-view",{key:t.id,staticClass:"row"},[a("newsbox",{attrs:{item:t}})],1)})),1),t.newsArr.length?t._e():a("v-uni-view",{staticClass:"nodata"},[a("v-uni-image",{attrs:{src:n("f2bc"),mode:"widthFix"}})],1),t.newsArr.length?a("v-uni-view",{staticClass:"loading"},[a("v-uni-view"),1==t.loading?a("v-uni-view",[t._v("数据加载中...")]):t._e(),2==t.loading?a("v-uni-view",[t._v("没有更多了~~~")]):t._e()],1):t._e()],1)},r=[]},ff80:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.navscroll[data-v-6d20ea95]{height:%?100?%;background:#f7f8fa;white-space:nowrap;position:fixed;top:var(--window-top);left:0;z-index:10}.navscroll[data-v-6d20ea95] ::-webkit-scrollbar{width:4px!important;height:1px!important;overflow:auto!important;background:transparent!important;-webkit-appearance:auto!important;display:block}.navscroll .item[data-v-6d20ea95]{font-size:%?40?%;display:inline-block;line-height:%?100?%;padding:0 %?30?%;color:#333}.navscroll .item.active[data-v-6d20ea95]{color:#31c27c}.content[data-v-6d20ea95]{padding:%?30?%;padding-top:%?130?%}.content .row[data-v-6d20ea95]{border-bottom:%?1?% dotted #efefef;padding:%?20?% 0}.nodata[data-v-6d20ea95]{display:flex;justify-content:center}.nodata uni-image[data-v-6d20ea95]{width:%?360?%}.loading[data-v-6d20ea95]{text-align:center;font-size:%?26?%;color:#888;line-height:2em}',""]),t.exports=e}}]);