!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}([function(e,t,n){"use strict";var o=n(9),i=n(2),a=n(8);var r=Object(a.a)(i.default,o.b,o.c,!1,null,"fb05db42","3d503fba",!1,o.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(13).default,this.options.style):Object.assign(this.options.style,n(13).default)}).call(r),t.default=r.exports},function(e,t){e.exports={"only-line-2":{overflow:"hidden",textOverflow:"ellipsis",WebkitLineClamp:2,lineClamp:2,WebkitBoxOrient:"vertical"},"only-line-1":{overflow:"hidden",textOverflow:"ellipsis",WebkitLineClamp:1,lineClamp:1,WebkitBoxOrient:"vertical"},"only-line-3":{overflow:"hidden",textOverflow:"ellipsis",WebkitLineClamp:3,lineClamp:3,WebkitBoxOrient:"vertical"},"@VERSION":2}},function(e,t,n){"use strict";var o=n(3),i=n.n(o);t.default=i.a},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(17)),i=a(n(18));function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var s=uni.getSystemInfoSync(),u={components:{NvVerticalRoll:o.default},props:{},data:function(){return{windowHeight:s.windowHeight,statusBarHeight:s.statusBarHeight,id:1,type:1,list:[],current:0,processData:{currentTime:0,duration:0},showComment:!1}},computed:{processPer:function(){var e=this.processData,t=e.currentTime,n=e.duration;return Math.ceil(t/n*100)},layoutHeight:function(){return this.windowHeight-this.statusBarHeight}},watch:{},onLoad:function(e){this.id=e.id,this.type=e.type},onReady:function(){this.getMediaData()},created:function(){e("log","clientHeight---",s.windowHeight," at pages/playVideoPage/playVideoPage.nvue:136"),this.$api=i.default},onBackPress:function(){this.pause()},methods:{getMediaData:function(){var e=this,t=this.id;2==this.type?this.$api.videoDetail({data:{id:t}}).then((function(n){var o=n.data,i={vid:o.vid,title:o.title,videoType:2,coverUrl:o.coverUrl,shareCount:o.shareCount,commentCount:o.commentCount,subCount:o.subCount,creator:[{userName:o.creator.nickname}]};e.list.push(i),e.doPlay(e.current),e.getRelatedAllvideo(t)})).catch((function(){e.getRelatedAllvideo(t)})):this.$api.mvDetail({data:{mvid:t}}).then((function(n){var o=n.data,i={vid:o.id,title:o.name,videoType:1,coverUrl:o.cover,shareCount:o.shareCount,commentCount:o.commentCount,subCount:o.subCount,creator:[{userName:o.artistName}]};e.list.push(i),e.doPlay(e.current),e.getRelatedAllvideo(t)})).catch((function(){e.getRelatedAllvideo(t)}))},onChange:function(t){e("log","onChange:",t," at pages/playVideoPage/playVideoPage.nvue:200");try{this.pause(t-1),this.pause(t+1)}catch(t){e("error",t," at pages/playVideoPage/playVideoPage.nvue:207")}this.current=t,this.doPlay(t);var n=this.list;t==n.length-1&&this.getRelatedAllvideo(n[n.length-1].vid)},getRelatedAllvideo:function(e){var t=this;this.$api.relatedAllvideo({data:{id:e}}).then((function(e){var n,o=e.data;o.map((function(e){e.videoType=2})),(n=t.list).push.apply(n,r(o)),0==t.current&&t.doPlay(0)}))},doPlay:function(e){var t=this.list[e];t.url?this.play(e):2===t.videoType?this.playVideo(e):this.playMv(e)},playVideo:function(t){var n=this,o=this.list[t];o&&(e("log","playVideo",o," at pages/playVideoPage/playVideoPage.nvue:263"),o.url||this.$api.videoUrl({data:{id:o.vid}}).then((function(e){var i=e.urls;i&&i.length>0?(o.url=i[0],o.urls=i,n.$set(n.list,t,o)):n.showNoneToast({title:"\u64ad\u653e\u5730\u5740\u627e\u4e0d\u5230"})})))},playMv:function(e){var t=this,n=this.list[e];n&&(n.url||this.$api.mvUrl({data:{id:n.vid}}).then((function(o){var i=o.data;i?(n.url=i,t.$set(t.list,e,n)):t.showNoneToast({title:"\u64ad\u653e\u5730\u5740\u627e\u4e0d\u5230"})})))},videoErrorCallback:function(t){e("error","videoErrorCallback",t," at pages/playVideoPage/playVideoPage.nvue:306")},onLoadedmetadata:function(e){var t=this.current;this.doPlay(t)},onPlay:function(t){e("log","onPlay",t," at pages/playVideoPage/playVideoPage.nvue:319");var n=t.detail,o=t.currentTarget;this.processData=n,this.doPauseAudio();var i=o.dataset.set.index,a=this.list[i];a.playing=!0,this.$set(this.list,i,a)},onUpdateTime:function(e){var t=e.detail;this.processData=t},onPause:function(t){e("log","onPause",t," at pages/playVideoPage/playVideoPage.nvue:342");t.detail;var n=t.currentTarget.dataset.set.index,o=this.list[n];o.playing=!1,this.$set(this.list,n,o)},openComment:function(){var e=this;this.showComment=!0,this.$nextTick((function(){var t=e.current,n=e.list[t],o=2===n.videoType?5:1;e.$refs.comments.getList({type:o,id:n.vid})}))},controlstoggle:function(t){e("log",t,"controlstoggle"," at pages/playVideoPage/playVideoPage.nvue:367")},onActive:function(){e("log","onActive--mv--tab"," at pages/playVideoPage/playVideoPage.nvue:373"),this.play()},onHidden:function(){e("log","onHidden--mv--tab"," at pages/playVideoPage/playVideoPage.nvue:380"),this.pause()},pause:function(t){t||(t=this.current);var n=uni.createVideoContext("mVideo"+t);null!=n?n.pause():e("log","video \u4e0a\u4e0b\u6587\u4e0d\u5b58\u5728"," at pages/playVideoPage/playVideoPage.nvue:394")},play:function(t){t||(t=this.current),this.$nextTick((function(){var n=uni.createVideoContext("mVideo"+t);null!=n?n.play():e("log","video \u4e0a\u4e0b\u6587\u4e0d\u5b58\u5728"," at pages/playVideoPage/playVideoPage.nvue:409")}))},onClickVideo:function(t){e("log","onClickVideo",t," at pages/playVideoPage/playVideoPage.nvue:417");t.detail;var n=t.currentTarget.dataset.set.index;!0===this.list[n].playing?this.pause(n):this.play(n)},onClickBack:function(){uni.navigateBack()}}};t.default=u}).call(this,n(11).default)},function(e,t,n){"use strict";n.r(t);var o=n(5),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t.default=i.a},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{num:{default:0}},data:function(){return{currentIndex:0,contentOffsetY:0}},methods:{scroll:function(t){e("log","scroll--",t," at components/custom/nv-vertical-roll.vue:28");this.currentIndex;t.contentOffset.y,this.contentOffsetY,this.contentOffsetY=t.contentOffset.y,this.currentIndex=Math.round(Math.abs(this.contentOffsetY)/(t.contentSize.height/this.num)),this.$emit("change",this.currentIndex)}}};t.default=n}).call(this,n(11).default)},function(e,t){e.exports={"@VERSION":2}},function(e,t){e.exports={"nv-video-page":{width:"750rpx",backgroundColor:"#0062CC"},"nv-title-bar":{backgroundColor:"rgba(0,0,0,0)",position:"fixed",top:0,left:0,width:"750rpx",height:"55rpx",zIndex:999},"nv-back-icon-text":{width:"100rpx",height:"55rpx",fontSize:"32rpx",color:"#ffffff",marginLeft:"20rpx",marginRight:"20rpx",paddingLeft:"20rpx",paddingRight:"20rpx"},"video-box":{width:"750rpx",position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.2)",display:"flex",alignItems:"center",justifyContent:"center"},"bg-image":{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.3)"},mVideo:{width:"750rpx"},"video-info-box":{position:"absolute",left:0,right:0,bottom:0,paddingTop:"24rpx",paddingRight:"24rpx",paddingBottom:"60rpx",paddingLeft:"24rpx"},"video-info-title":{fontSize:"28rpx",fontWeight:"600",color:"#ffffff",textAlign:"left",marginBottom:"20rpx"},"video-info-artist":{fontSize:"28rpx",color:"#ffffff"},"@VERSION":2}},function(e,t,n){"use strict";function o(e,t,n,o,i,a,r,l,s,u){var c,d="function"==typeof e?e.options:e;if(s){d.components||(d.components={});var p=Object.prototype.hasOwnProperty;for(var f in s)p.call(s,f)&&!p.call(d.components,f)&&(d.components[f]=s[f])}if(u&&((u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(d.mixins||(d.mixins=[])).push(u)),t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),o&&(d.functional=!0),a&&(d._scopeId="data-v-"+a),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=c):i&&(c=l?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(d.functional){d._injectStyles=c;var h=d.render;d.render=function(e,t){return c.call(t),h(e,t)}}else{var g=d.beforeCreate;d.beforeCreate=g?[].concat(g,c):[c]}return{exports:e,options:d}}n.d(t,"a",(function(){return o}))},function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[n("view",{staticClass:["nv-video-page"]},[n("NvVerticalRoll",{style:{width:"750rpx",height:e.windowHeight+"px",background:"#000000"},attrs:{num:e.list.length},on:{change:e.onChange}},e._l(e.list,(function(t,o){return n("cell",{key:o,staticClass:["list-item"],style:{height:e.windowHeight+"px"},appendAsTree:!0,attrs:{dataIndex:o,recycle:!1,append:"tree"}},[n("view",{staticClass:["video-box"]},[null!=t.url&&e.current==o?n("u-video",{ref:"mVideo"+o,refInFor:!0,staticClass:["mVideo"],style:{height:e.windowHeight+"px"},attrs:{id:"mVideo"+o,dataSet:{index:o},src:t.url.url,poster:t.coverUrl,controls:!0,loop:!0,showLoading:!0,autoplay:!0,objectFit:"contain",enableProgressGesture:!0,showFullscreenBtn:!0,danmuBtn:!1,enableDanmu:!1},on:{play:e.onplay,loadedmetadata:e.onLoadedmetadata,error:e.videoErrorCallback,timeupdate:e.onUpdateTime,pause:e.onPause,controlstoggle:e.controlstoggle}},[n("u-scalable",{staticStyle:{position:"absolute",left:"0",right:"0",top:"0",bottom:"0"}},[n("cover-view",{staticClass:["nv-title-bar"],style:{marginTop:e.statusBarHeight+"px"}},[n("view",{staticClass:["nv-back-icon"],on:{click:e.onClickBack}})]),n("cover-view",{staticClass:["video-info-box"]},[n("u-text",{staticClass:["video-info-title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("@"+e._s(t.creator?t.creator.map((function(e){return e.userName})).join(","):"\u672a\u77e5"))]),n("u-text",{staticClass:["video-info-artist"],appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(t.title))])])],1)],1):e._e()],1)])})),0)],1)])},i=[]},function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var o=function(){var e=this.$createElement;return(this._self._c||e)("list",{staticClass:["scroll-wrapper"],attrs:{pagingEnabled:!0,showScrollbar:!1,scrollable:!0},on:{scrollend:this.scroll}},[this._t("default")],2)},i=[]},function(e,t,n){"use strict";function o(e){var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1)}function i(){return"string"==typeof __channelId__&&__channelId__}function a(e,t){switch(o(t)){case"Function":return"function() { [native code] }";default:return t}}Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];console[e].apply(console,n)},t.default=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.shift();if(i())return t.push(t.pop().replace("at ","uni-app:///")),console[r].apply(console,t);var l=t.map((function(e){var t=Object.prototype.toString.call(e).toLowerCase();if("[object object]"===t||"[object array]"===t)try{e="---BEGIN:JSON---"+JSON.stringify(e,a)+"---END:JSON---"}catch(n){e=t}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var n=o(e).toUpperCase();e="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+e+"---END:"+n+"---":String(e)}return e})),s="";if(l.length>1){var u=l.pop();s=l.join("---COMMA---"),0===u.indexOf(" at ")?s+=u:s+="---COMMA---"+u}else s=l[0];console[r](s)}},function(e,t,n){"use strict";n.r(t);var o=n(6),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t.default=i.a},function(e,t,n){"use strict";n.r(t);var o=n(7),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t.default=i.a},function(e,t,n){"use strict";n.r(t);n(15);var o=n(0);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){throw n}))}))}),o.default.mpType="page",o.default.route="pages/playVideoPage/playVideoPage",o.default.el="#root",new Vue(o.default)},function(e,t,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(16).default,Vue.prototype.__$appStyle__)},function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t.default=i.a},function(e,t,n){"use strict";n.r(t);var o=n(10),i=n(4);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);var r=n(8);var l=Object(r.a)(i.default,o.b,o.c,!1,null,null,"162bc5de",!1,o.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(12).default,this.options.style):Object.assign(this.options.style,n(12).default)}).call(l),t.default=l.exports},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=(o=n(19))&&o.__esModule?o:{default:o};var a=i.default.yunApiBaseUrl,r={};function l(e){return e.errMsg&&s(e.errMsg),e}function s(e){uni.showToast({title:e,duration:1500,icon:"none"})}[{desc:"\u83b7\u53d6\u8bdd\u9898\u8be6\u60c5",name:"getTopicDetail",url:"/topic/detail"},{desc:"\u9996\u9875\u5e7f\u544a\u8f6e\u64ad\u56fe",name:"banners",url:"/banner"},{desc:"\u7f51\u53cb\u7cbe\u9009\u789f\u6b4c\u5355",name:"topPlaylist",url:"/top/playlist",usedLoading:!1},{desc:"\u83b7\u53d6\u6b4c\u5355\u8be6\u60c5",name:"playlistDetail",url:"/playlist/detail",usedLoading:!1},{desc:"\u83b7\u53d6\u4e13\u8f91\u8be6\u60c5",name:"album",url:"/album",usedLoading:!0},{desc:"\u9ed8\u8ba4\u641c\u7d22\u5173\u952e\u8bcd",name:"searchDefault",url:"/search/default"},{desc:"\u70ed\u641c\u5217\u8868(\u8be6\u7ec6)",name:"searchHotDetail",url:"/search/hot/detail",usedLoading:!1},{desc:"\u641c\u7d22\u5efa\u8bae",name:"searchSuggest",url:"/search/suggest",usedLoading:!1},{desc:"\u641c\u7d22\u591a\u91cd\u5339\u914d",name:"searchMultimatch",url:"/search/multimatch",usedLoading:!0},{desc:"\u641c\u7d22",name:"search",url:"/search",usedLoading:!0},{desc:"\u83b7\u53d6\u97f3\u4e50 url",name:"songUrl",url:"/song/url",usedLoading:!0},{desc:"\u83b7\u53d6\u97f3\u4e50 \u6b4c\u8bcd",name:"lyric",url:"/lyric",usedLoading:!0},{desc:"\u6700\u65b0mv",name:"mvFirst",url:"/mv/first",usedLoading:!0},{desc:"\u6b4c\u624b\u8be6\u60c5",name:"artistDetail",url:"/artist/detail"},{desc:"\u6b4c\u624b\u63cf\u8ff0\uff0c\u66f4\u5168\u7684\u6570\u636e",name:"artistDesc",url:"/artist/desc"},{desc:"\u76f8\u5173\u89c6\u9891",name:"relatedAllvideo",url:"/related/allvideo",usedLoading:!1},{desc:"\u83b7\u53d6\u89c6\u9891\u64ad\u653e\u5730\u5740",name:"videoUrl",url:"/video/url",usedLoading:!0},{desc:"\u83b7\u53d6mv\u64ad\u653e\u5730\u5740",name:"mvUrl",url:"/mv/url",usedLoading:!0},{desc:"\u83b7\u53d6 mv \u6570\u636e",name:"mvDetail",url:"/mv/detail",usedLoading:!1},{desc:"\u89c6\u9891\u8be6\u60c5",name:"videoDetail",url:"/video/detail",usedLoading:!1},{desc:"\u70ed\u95e8\u8bc4\u8bba",name:"commentHot",url:"/comment/hot",usedLoading:!1}].forEach((function(t){r[t.name]=function(n){var o=n||{},i=o.data,r=o.header,u=o.dataType;return new Promise((function(n,o){try{!1!==t.usedLoading&&uni.showLoading({title:"loading..."}),uni.request({url:a+t.url,method:t.method||"GET",data:i,header:r,dataType:u||"json",timeout:1e4,success:function(i){e("info",t.url,i," at service/yunApi.js:171"),null!=i.data&&i.data.hasOwnProperty("code")&&200===i.data.code?n(function(e){return e.data||e.result}(i)):o(l(i))},fail:function(n){e("error","\u63a5\u53e3\u8bf7\u6c42\u9519\u8bef\uff1a"+t.url,n," at service/yunApi.js:179"),o(l(n))},complete:function(){e("log","complete---"," at service/yunApi.js:183"),!1!==t.usedLoading&&uni.hideLoading()}})}catch(t){e("error","\u65b9\u6cd5\u5f02\u5e38\uff1a",t," at service/yunApi.js:190"),o({message:"\u8bf7\u6c42\u9519\u8bef"}),s("\u8bf7\u6c42\u9519\u8bef")}}))}}));var u=r;t.default=u}).call(this,n(11).default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={yunApiBaseUrl:"https://brucetony.vercel.app"};t.default=o}]);