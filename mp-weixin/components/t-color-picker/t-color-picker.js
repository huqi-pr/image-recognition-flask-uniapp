(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/t-color-picker/t-color-picker"],{"0b36":function(t,r,e){"use strict";var i;e.d(r,"b",(function(){return n})),e.d(r,"c",(function(){return o})),e.d(r,"a",(function(){return i}));var n=function(){var t=this,r=t.$createElement;t._self._c},o=[]},"2eb3":function(t,r,e){"use strict";var i=e("fd4d"),n=e.n(i);n.a},"516f":function(t,r,e){"use strict";e.r(r);var i=e("d78e"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(r,t,(function(){return i[t]}))}(o);r["default"]=n.a},d125:function(t,r,e){"use strict";e.r(r);var i=e("0b36"),n=e("516f");for(var o in n)"default"!==o&&function(t){e.d(r,t,(function(){return n[t]}))}(o);e("2eb3");var s,a=e("f0c5"),h=Object(a["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);r["default"]=h.exports},d78e:function(t,r,e){"use strict";(function(t){function e(t,r){return a(t)||s(t,r)||n(t,r)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,r){if(t){if("string"===typeof t)return o(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,r):void 0}}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,i=new Array(r);e<r;e++)i[e]=t[e];return i}function s(t,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],i=!0,n=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done);i=!0)if(e.push(s.value),r&&e.length===r)break}catch(h){n=!0,o=h}finally{try{i||null==a["return"]||a["return"]()}finally{if(n)throw o}}return e}}function a(t){if(Array.isArray(t))return t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var h={props:{color:{type:Object,default:function(){return{r:0,g:0,b:0,a:0}}},spareColor:{type:Array,default:function(){return[]}}},data:function(){return{show:!1,active:!1,rgba:{r:0,g:0,b:0,a:1},hsb:{h:0,s:0,b:0},site:[{top:0,left:0},{left:0},{left:0}],index:0,bgcolor:{r:255,g:0,b:0,a:1},hex:"#000000",mode:!0,colorList:[{r:244,g:67,b:54,a:1},{r:233,g:30,b:99,a:1},{r:156,g:39,b:176,a:1},{r:103,g:58,b:183,a:1},{r:63,g:81,b:181,a:1},{r:33,g:150,b:243,a:1},{r:3,g:169,b:244,a:1},{r:0,g:188,b:212,a:1},{r:0,g:150,b:136,a:1},{r:76,g:175,b:80,a:1},{r:139,g:195,b:74,a:1},{r:205,g:220,b:57,a:1},{r:255,g:235,b:59,a:1},{r:255,g:193,b:7,a:1},{r:255,g:152,b:0,a:1},{r:255,g:87,b:34,a:1},{r:121,g:85,b:72,a:1},{r:158,g:158,b:158,a:1},{r:0,g:0,b:0,a:.5},{r:0,g:0,b:0,a:0}]}},created:function(){this.rgba=this.color,0!==this.spareColor.length&&(this.colorList=this.spareColor)},methods:{init:function(){this.hsb=this.rgbToHex(this.rgba),this.setValue(this.rgba)},moveHandle:function(){},open:function(){var t=this;this.show=!0,this.$nextTick((function(){t.init(),setTimeout((function(){t.active=!0,setTimeout((function(){t.getSelectorQuery()}),350)}),50)}))},close:function(){var t=this;this.active=!1,this.$nextTick((function(){setTimeout((function(){t.show=!1}),500)}))},confirm:function(){this.close(),this.$emit("confirm",{rgba:this.rgba,hex:this.hex})},select:function(){this.mode=!this.mode},selectColor:function(t){this.setColorBySelect(t)},touchstart:function(t,r){var e=t.touches[0],i=e.pageX,n=e.pageY;this.pageX=i,this.pageY=n,this.setPosition(i,n,r)},touchmove:function(t,r){var e=t.touches[0],i=e.pageX,n=e.pageY;this.moveX=i,this.moveY=n,this.setPosition(i,n,r)},touchend:function(t,r){},setPosition:function(t,r,e){this.index=e;var i=this.position[e],n=i.top,o=i.left,s=i.width,a=i.height;this.site[e].left=Math.max(0,Math.min(parseInt(t-o),s)),0===e?(this.site[e].top=Math.max(0,Math.min(parseInt(r-n),a)),this.hsb.s=parseInt(100*this.site[e].left/s),this.hsb.b=parseInt(100-100*this.site[e].top/a),this.setColor(),this.setValue(this.rgba)):this.setControl(e,this.site[e].left)},setColor:function(){var t=this.HSBToRGB(this.hsb);this.rgba.r=t.r,this.rgba.g=t.g,this.rgba.b=t.b},setValue:function(t){this.hex="#"+this.rgbToHex(t)},setControl:function(t,r){var e=this.position[t],i=(e.top,e.left,e.width);e.height;1===t?(this.hsb.h=parseInt(360*r/i),this.bgcolor=this.HSBToRGB({h:this.hsb.h,s:100,b:100}),this.setColor()):this.rgba.a=(r/i).toFixed(1),this.setValue(this.rgba)},rgbToHex:function(t){var r=[t.r.toString(16),t.g.toString(16),t.b.toString(16)];return r.map((function(t,e){1==t.length&&(r[e]="0"+t)})),r.join("")},setColorBySelect:function(t){var r=t.r,e=t.g,i=t.b,n=t.a,o={};o={r:r?parseInt(r):0,g:e?parseInt(e):0,b:i?parseInt(i):0,a:n||0},this.rgba=o,this.hsb=this.rgbToHsb(o),this.changeViewByHsb()},changeViewByHsb:function(){var t=e(this.position,3),r=t[0],i=t[1],n=t[2];this.site[0].left=parseInt(this.hsb.s*r.width/100),this.site[0].top=parseInt((100-this.hsb.b)*r.height/100),this.setColor(this.hsb.h),this.setValue(this.rgba),this.bgcolor=this.HSBToRGB({h:this.hsb.h,s:100,b:100}),this.site[1].left=this.hsb.h/360*i.width,this.site[2].left=this.rgba.a*n.width},HSBToRGB:function(t){var r={},e=Math.round(t.h),i=Math.round(255*t.s/100),n=Math.round(255*t.b/100);if(0==i)r.r=r.g=r.b=n;else{var o=n,s=(255-i)*n/255,a=e%60*(o-s)/60;360==e&&(e=0),e<60?(r.r=o,r.b=s,r.g=s+a):e<120?(r.g=o,r.b=s,r.r=o-a):e<180?(r.g=o,r.r=s,r.b=s+a):e<240?(r.b=o,r.r=s,r.g=o-a):e<300?(r.b=o,r.g=s,r.r=s+a):e<360?(r.r=o,r.g=s,r.b=o-a):(r.r=0,r.g=0,r.b=0)}return{r:Math.round(r.r),g:Math.round(r.g),b:Math.round(r.b)}},rgbToHsb:function(t){var r={h:0,s:0,b:0},e=Math.min(t.r,t.g,t.b),i=Math.max(t.r,t.g,t.b),n=i-e;return r.b=i,r.s=0!=i?255*n/i:0,0!=r.s?t.r==i?r.h=(t.g-t.b)/n:t.g==i?r.h=2+(t.b-t.r)/n:r.h=4+(t.r-t.g)/n:r.h=-1,r.h*=60,r.h<0&&(r.h=0),r.s*=100/255,r.b*=100/255,r},getSelectorQuery:function(){var r=this,e=t.createSelectorQuery().in(this);e.selectAll(".boxs").boundingClientRect((function(t){t&&0!==t.length?(r.position=t,r.setColorBySelect(r.rgba)):setTimeout((function(){return r.getSelectorQuery()}),20)})).exec()}},watch:{spareColor:function(t){this.colorList=t}}};r.default=h}).call(this,e("543d")["default"])},fd4d:function(t,r,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/t-color-picker/t-color-picker-create-component',
    {
        'components/t-color-picker/t-color-picker-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d125"))
        })
    },
    [['components/t-color-picker/t-color-picker-create-component']]
]);
