(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/image/image"],{"027f":function(t,n,e){"use strict";e.r(n);var i=e("5e94"),u=e("f19a");for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);e("d80b");var a,c=e("f0c5"),r=Object(c["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);n["default"]=r.exports},"5e94":function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={uniList:function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"206f"))},uniListItem:function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"bc56"))}},u=function(){var t=this,n=t.$createElement;t._self._c},o=[]},"6e80":function(t,n,e){"use strict";(function(t){e("bae5");i(e("66fd"));var n=i(e("027f"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("a821")["createPage"])},"716d":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{title:"狗哥带你图像识别",src:""}},onLoad:function(){},mounted:function(){},methods:{qclocal:function(){t.getStorage({key:"historys",success:function(){t.showLoading({title:"删除中"}),t.removeStorage({key:"historys",success:function(){t.hideLoading(),t.showToast({title:"清除成功",duration:1500})}})},fail:function(){t.showToast({image:"/static/img/tanqi.png",title:"您还没有识别哦",duration:1500})}})},goSb:function(n){t.navigateTo({url:"../apiuse/apiuse?type="+n})}}};n.default=e}).call(this,e("a821")["default"])},"9ee7":function(t,n,e){},d80b:function(t,n,e){"use strict";var i=e("9ee7"),u=e.n(i);u.a},f19a:function(t,n,e){"use strict";e.r(n);var i=e("716d"),u=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=u.a}},[["6e80","common/runtime","common/vendor"]]]);