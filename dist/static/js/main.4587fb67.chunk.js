(this["webpackJsonptyping-cn"]=this["webpackJsonptyping-cn"]||[]).push([[0],{153:function(e,t,a){e.exports=a(267)},163:function(e,t,a){},267:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(4),r=a.n(o),c=a(70),i=(a(163),a(93)),u=a(32),s=a(10),b=a(55),m=a(12),d=a(273),f=a(275),x=a(276),h=a(268),g=a(271),p=a(277),w=a(274),E=a(31),j=a(278),y=a(54),O={session:{get:function(e){var t=window.sessionStorage.getItem(e);return t&&JSON.parse(t)},set:function(e,t){var a=JSON.stringify(t);window.sessionStorage.setItem(e,a)},remove:function(e){window.sessionStorage.removeItem(e)}},local:{get:function(e){var t=window.localStorage.getItem(e);return t&&JSON.parse(t)},set:function(e,t){var a=JSON.stringify(t);window.localStorage.setItem(e,a)},remove:function(e){window.localStorage.removeItem(e)}}},v={state:{uiScale:O.local.get("UI_SCALE")||"s",uiTheme:O.local.get("UI_THEME")||"",wordsMode:O.local.get("WORDS_MODE")||"1",countdownTime:O.local.get("COUNTDOWN_TIME")||"60",customerWords:O.local.get("CUSTOMER_WORDS")||[]},reducer:{setUiScale:function(e,t){return O.local.set("UI_SCALE",t),{uiScale:t}},setUiTheme:function(e,t){return O.local.set("UI_THEME",t),{uiTheme:t}},setWordsMode:function(e,t){return O.local.set("WORDS_MODE",t),{wordsMode:t}},setCountdownTime:function(e,t){return O.local.set("COUNTDOWN_TIME",t),{countdownTime:t}},saveCustomerWords:function(e,t){return O.local.set("CUSTOMER_WORDS",t),{customerWords:t}}}},k={root:function(e,t){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,l=arguments.length>1?arguments[1]:void 0;return e[l.type]?Object.assign({},a,e[l.type](a,l.payload)):a}}(v.reducer,v.state)},C=function(e){return{$state:Object(s.a)({},e)}},S=function(e){return{$dispatch:function(t,a){e({type:t,payload:a})},dispatch:e}};function N(e){return Object(c.b)(C,S)(e)}var T=Object(y.c)(Object(y.b)(k)),$=[{label:"\u90ae\u4ef6",text:"youjian"},{label:"\u79bb\u5f00",text:"likai"},{label:"\u51c6\u5907",text:"zhunbei"},{label:"\u5e86\u795d",text:"qingzhu"},{label:"\u5bbf\u820d",text:"sushe"},{label:"\u6ce8\u610f",text:"zhuyi"},{label:"\u975e\u5e38",text:"feichang"},{label:"\u5bb6\u5ead",text:"jiating"},{label:"\u53bb\u5e74",text:"qunian"},{label:"\u70b9\u5fc3",text:"dianxin"},{label:"\u4e0a\u8bfe",text:"shangke"},{label:"\u7f8e\u4e3d",text:"meili"},{label:"\u5fb7\u56fd",text:"deguo"},{label:"\u4e00\u5b9a",text:"yiding"},{label:"\u7740\u6025",text:"zhaoji"},{label:"\u94c5\u7b14",text:"qianbi"},{label:"\u75db\u82e6",text:"tongku"},{label:"\u5fc5\u987b",text:"bixu"},{label:"\u75c5\u4eba",text:"bingren"},{label:"\u73b0\u5728",text:"xianzai"},{label:"\u725b\u5976",text:"niunai"},{label:"\u6708\u4eae",text:"yueliang"},{label:"\u65e9\u4e0a",text:"zaoshang"},{label:"\u7b80\u5355",text:"jiandan"},{label:"\u74f6\u5b50",text:"pingzi"},{label:"\u54e5\u54e5",text:"gege"},{label:"\u97f3\u4e50",text:"yinyue"},{label:"\u7b77\u5b50",text:"kuaizi"},{label:"\u8fd8\u662f",text:"haishi"},{label:"\u684c\u5b50",text:"zhuozi"},{label:"\u770b\u89c1",text:"kanjian"},{label:"\u4e00\u8fb9",text:"yibian"},{label:"\u5927\u58f0",text:"dasheng"},{label:"\u98ce\u666f",text:"fengjing"},{label:"\u9910\u5385",text:"canting"},{label:"\u6728\u5934",text:"mutou"},{label:"\u65b0\u5e74",text:"xinnian"},{label:"\u5634\u5df4",text:"zuiba"},{label:"\u5e94\u8be5",text:"yinggai"},{label:"\u8fc7\u6765",text:"guolai"},{label:"\u867e\u7403",text:"xiaqiu"},{label:"\u6c5f\u6e7e",text:"jiangwan"},{label:"\u6c5f\u5c71",text:"jiangshan"},{label:"\u5bcc\u8d35",text:"fugui"},{label:"\u9178\u5976",text:"suannai"},{label:"\u4eca\u5929",text:"jintian"},{label:"\u771f\u597d",text:"zhenhao"},{label:"\u6ce2\u6ce2",text:"bobo"},{label:"\u8033\u6735",text:"erduo"},{label:"\u5965\u5229\u5965",text:"aoliao"},{label:"\u80d6\u864e",text:"panghu"},{label:"\u952e\u76d8",text:"jianpan"},{label:"\u771f\u5b9e",text:"zhenshi"},{label:"\u4f18\u8054",text:"youlian"},{label:"\u84dd\u7259",text:"lanya"},{label:"\u65e0\u7ebf",text:"wuxian"},{label:"\u4e09\u660e\u6cbb",text:"sanmingzhi"},{label:"\u80f6\u6761",text:"jiaotiao"},{label:"\u661f\u591c",text:"xingye"},{label:"\u5976\u6cb9",text:"naiyou"},{label:"\u718a\u732b",text:"xiongmao"},{label:"\u53ef\u4e50",text:"kele"},{label:"\u6d77\u5916",text:"haiwai"},{label:"\u6d66\u6749",text:"pushan"},{label:"\u77e9\u9635",text:"juzhen"},{label:"\u5851\u6599",text:"suliao"},{label:"\u5927\u9aa8",text:"dagu"},{label:"\u8425\u5730",text:"yingdi"},{label:"\u846b\u82a6",text:"hulu"},{label:"\u5929\u72fc\u661f",text:"tianlangxing"},{label:"\u7a3b\u8349\u4eba",text:"daocaoren"},{label:"\u65e0\u9650",text:"wuxian"},{label:"\u865a\u62df",text:"xuni"},{label:"\u7535\u73a9",text:"dianwan"},{label:"\u5fbd\u7ae0",text:"huizhang"},{label:"\u5317\u6781\u5708",text:"beijiquan"},{label:"\u4ec1\u738b",text:"renwang"},{label:"\u602a\u730e",text:"guailie"},{label:"\u5927\u4f6c",text:"dalao"},{label:"\u5f00\u8f66",text:"kaiche"},{label:"\u5927\u96c4",text:"daxiong"},{label:"\u4ee3\u7ec4",text:"daizu"},{label:"\u4e9a\u514b\u529b",text:"yakeli"},{label:"\u9ec4\u94dc",text:"huangtong"},{label:"\u4e0d\u9508\u94a2",text:"buxiugang"},{label:"\u94dd\u952d",text:"lvding"},{label:"\u6ce8\u5851",text:"zhusu"},{label:"\u6210\u578b",text:"chengxing"},{label:"\u83e0\u841d",text:"boluo"},{label:"\u9713\u8679",text:"nihong"},{label:"\u87ba\u4e1d",text:"luosi"},{label:"\u536b\u661f\u8f74",text:"weixingzhou"},{label:"\u7ea2\u767d\u673a",text:"hongbaiji"},{label:"\u5e7b\u5f71",text:"huanying"},{label:"\u65e5\u6587",text:"riwen"},{label:"\u4fc4\u6587",text:"ewen"},{label:"\u952e\u5e3d",text:"jianmao"},{label:"\u5957\u4ef6",text:"taojian"},{label:"\u78b3\u7ea4\u7ef4",text:"tanxianwei"},{label:"\u73bb\u7ea4",text:"boxian"},{label:"\u70ed\u5347\u534e",text:"reshenghua"},{label:"\u5934\u53d1",text:"toufa"},{label:"\u5ba2\u5385",text:"keting"},{label:"\u6e38\u6cf3\u6c60",text:"youyongchi"},{label:"\u5468\u672b",text:"zhoumo"},{label:"\u5f1f\u5f1f",text:"didi"},{label:"\u53ef\u7231",text:"keai"},{label:"\u9e66\u9e49",text:"yingwu"},{label:"\u6f02\u767d",text:"piaobai"},{label:"\u7535\u6cf3",text:"dianyong"},{label:"\u6b66\u58eb\u9053",text:"wushidao"},{label:"\u7801\u519c",text:"manong"},{label:"\u8109\u51b2",text:"maichong"},{label:"\u84b8\u6c7d\u6ce2",text:"zhengqibo"},{label:"\u9752\u67e0",text:"qingning"},{label:"\u58f0\u6ce2",text:"shengbo"},{label:"\u6a44\u6984",text:"ganlan"},{label:"\u524d\u950b",text:"qianfeng"},{label:"\u6df1\u7a7a",text:"shenkong"},{label:"\u539f\u70b9",text:"yuandian"},{label:"\u6a31\u82b1",text:"yinghua"},{label:"\u539f\u5382",text:"yuanchang"},{label:"\u9759\u7535\u5bb9",text:"jingdianrong"},{label:"\u629b\u5149",text:"paoguang"},{label:"\u4f73\u8fbe\u9686",text:"jiadalong"},{label:"\u5b81\u829d",text:"ningzhi"},{label:"\u5317\u6781\u661f",text:"beijixing"},{label:"\u9000\u70e7",text:"tuishao"},{label:"\u5403\u74dc",text:"chigua"},{label:"\u89e3\u6bd2",text:"jiedu"},{label:"\u6478\u9c7c",text:"moyu"}],z=d.a.Countdown,M=function(e,t){return"1"!==e&&t&&0!==t.length?t:$},R=function(e){var t=Math.floor(e/60),a=e%60;return"".concat(t,":").concat(a<10?"0":"").concat(a)},W=[{path:"/",component:N((function(e){var t=Object(l.useState)(!0),a=Object(m.a)(t,2),o=a[0],r=a[1],c=Object(l.useState)(0),i=Object(m.a)(c,2),u=i[0],d=i[1],y=Object(l.useState)(0),O=Object(m.a)(y,2),v=O[0],k=O[1],C=Object(l.useState)([]),S=Object(m.a)(C,2),N=S[0],T=S[1],$=Object(l.useState)(""),W=Object(m.a)($,2),I=W[0],U=W[1],A=Object(l.useState)(!1),_=Object(m.a)(A,2),D=_[0],q=_[1],J=Object(l.useRef)(M(e.$state.root.wordsMode,e.$state.root.customerWords)),P=Object(l.useRef)(null),V=Object(l.useRef)(null),B=Object(l.useRef)(0),F=Object(l.useRef)(!1),H=Object(l.useRef)(0),K=Object(l.useRef)(0),L=Object(l.useRef)(!1),G=Object(l.useRef)(53),Q=Object(l.useRef)(0),X=Object(l.useRef)(parseInt(e.$state.root.countdownTime,10)),Y=Object(l.useState)(R(X.current)),Z=Object(m.a)(Y,2),ee=Z[0],te=Z[1],ae=function(e){T((function(t){var a=Object(b.a)(J.current);return e?(B.current=0,[Object(s.a)({isCorrect:null},a[B.current])]):(B.current+=1,B.current>=a.length&&(B.current=0),t.concat(Object(s.a)({isCorrect:null},a[B.current])))}))},le=function(e,t){var a=!0;return e.forEach((function(e,l){t.charAt(l)!==e&&(a=!1)})),a},ne=Object(l.useCallback)((function(){F.current=!1,K.current=0,L.current=!1,Q.current=0,q(!1),U(""),k(0),J.current=function(e){for(var t=e.length-1;t>=0;t--){var a=Math.floor(Math.random()*(t+1)),l=e[a];e[a]=e[t],e[t]=l}return e}(J.current),ae(!0),setTimeout((function(){V.current.focus()}),10)}),[]);return Object(l.useEffect)((function(){if(P){var e=P.current.lastElementChild;if(!e||!e.lastElementChild)return;var t=P.current.scrollTop;Array.from(e.children).forEach((function(a,l){G.current=a.offsetHeight;var n=a.offsetTop-e.offsetTop,o=G.current+t,r=o-5<n&&n<o+5;!F.current&&r&&(H.current=l,F.current=!0)})),e.lastElementChild.offsetTop-e.offsetTop-t<3*G.current+1&&ae()}}),[N.length]),Object(l.useEffect)((function(){if(!D)if(""!==I){L.current||function(){var e=X.current;d(Date.now()+1e3*e)}(),L.current=!0;var e=Array.from(I.trim());if(" "===I[I.length-1]){if(U(""),0===e.length)return;T((function(t){var a=Object(b.a)(t),l=a[v],n=le(e,l.text);return a[v].isCorrect=n&&e.length===l.text.length,a})),k(v+1),v+1===H.current&&(K.current+=1,P.current.scrollTop=G.current*K.current,F.current=!1,ae())}else T((function(t){var a=Object(b.a)(t),l=a[v],n=le(e,l.text);return a[v].isCorrect=!1!==n&&null,a}))}else T((function(e){var t=Object(b.a)(e);return t[v]&&(t[v].isCorrect=null),t}))}),[v,D,I]),Object(l.useEffect)((function(){J.current=M(e.$state.root.wordsMode,e.$state.root.customerWords),setTimeout((function(){ne(),r(!1)}),1e3)}),[e.$state.root.wordsMode,e.$state.root.customerWords,ne]),n.a.createElement("div",{className:"home"},n.a.createElement(f.a,{justify:"center",align:"middle"},n.a.createElement(x.a,{flex:"450px",className:"home-scale-box-".concat(e.$state.root.uiScale)},n.a.createElement("div",{className:"home-show-main"},D&&n.a.createElement("div",{className:"type-end"}),n.a.createElement(h.a,{spinning:o,delay:50,wrapperClassName:"loading-wrapper"},n.a.createElement("div",{className:"home-show-main-window",ref:P},n.a.createElement(f.a,{gutter:12},N.map((function(e,t){return n.a.createElement(x.a,{key:t,className:"home-show-main-window-item ".concat(!0===e.isCorrect?"correct":""," ").concat(!1===e.isCorrect?"incorrect":"")},n.a.createElement("div",{className:"home-show-main-window--label ".concat(v===t?"acting":"")},e.label),n.a.createElement("div",{className:"home-show-main-window--text"},e.text))})))))),n.a.createElement(f.a,{justify:"space-between",align:"middle",gutter:0},n.a.createElement(x.a,{flex:"285px"},n.a.createElement(g.a,{className:"home-input",ref:V,value:I,onChange:function(e){U(e.target.value)},onKeyUp:function(e){13===e.keyCode&&ne(),D||(Q.current+=1)}})),n.a.createElement(x.a,{flex:"90px"},n.a.createElement(p.a,{content:n.a.createElement("div",null,n.a.createElement(w.a,{defaultValue:X.current,onChange:function(e){e&&/^\d+$/g.test(String(e))&&(X.current=e,te(R(e)))}}),n.a.createElement("span",null,"\u79d2")),onVisibleChange:function(){return e.$dispatch("setCountdownTime",String(X.current))},overlayClassName:"home-countdown-popover",placement:"bottom",title:"",trigger:"click"},n.a.createElement("div",{className:"home-countdown"},n.a.createElement(z,{className:"home-countdown-main",value:u,format:"m:ss",onFinish:function(){L.current&&(q(!0),console.log(N))}}),n.a.createElement("div",{className:"home-countdown-placeholder ".concat(L.current?"time-run":"")},ee)))),n.a.createElement(x.a,{flex:"50px"},n.a.createElement(E.a,{className:"home-reload-btn",onClick:ne,type:"primary",icon:n.a.createElement(j.a,null)}))),D&&n.a.createElement(f.a,{className:"home-type-result"},n.a.createElement(x.a,{span:24},n.a.createElement("div",{className:"result-wpm"},Math.round(N.filter((function(e){return null!==e.isCorrect})).length/(X.current/60)),"WPM")),n.a.createElement(x.a,{span:12},n.a.createElement("div",{className:"result-title"},"\u6b63\u786e")),n.a.createElement(x.a,{span:12},n.a.createElement("div",{className:"result-numbers correct"},N.filter((function(e){return!0===e.isCorrect})).length)),n.a.createElement(x.a,{span:12},n.a.createElement("div",{className:"result-title"},"\u9519\u8bef")),n.a.createElement(x.a,{span:12},n.a.createElement("div",{className:"result-numbers wrong"},N.filter((function(e){return!1===e.isCorrect})).length)),n.a.createElement(x.a,{span:12},n.a.createElement("div",{className:"result-title"},"\u6309\u952e\u603b\u6570")),n.a.createElement(x.a,{span:12},n.a.createElement("div",{className:"result-numbers"},Q.current))))))})),exact:!0}],I=function(e){return n.a.createElement(i.a,{basename:"/typing-cn"},e.header,n.a.createElement("div",{className:e.mainClass},n.a.createElement(l.Suspense,{fallback:n.a.createElement("div",null)},n.a.createElement(u.c,null,W.map((function(e,t){return n.a.createElement(u.a,{path:e.path,exact:e.exact&&!e.children,key:t,render:function(t){return n.a.createElement("div",null,e.component?n.a.createElement(e.component,t):"",e.children&&e.children.length>0&&n.a.createElement(l.Suspense,{fallback:n.a.createElement("div",null)},n.a.createElement(u.c,null,e.children.map((function(e,a){return n.a.createElement(u.a,{path:t.match.url+e.path,exact:e.exact,key:a,component:e.component})})))))}})}))))),e.footer)},U=a(272),A=a(270),_=a(148),D=a(269),q=a(279),J=a(280),P=a(245);function V(e){return P(e,{removeSpace:!0,removeTone:!0})}var B=a(99),F=a.n(B),H={name:"default",textColor:"#fffffe","@primary-color":"#1890ff","@link-color":"#1890ff","@success-color":"#52c41a","@error-color":"#f5222d","@body-back-color":"#282c34","@text-color-bright":"#fffffe","@home-window-back-color":"#fffffd","@home-window-text-color":"#141414","@home-window-text-sub-color":"inherit","@home-window-text-acting-back-color":"rgba(0, 0, 0, 0.26)","@success-opacity":"inherit","@home-el-focus-color":"rgba(224, 237, 249, 0.21)","@home-countdown-back-color":"#666666","@reload-btn-color":"#fffffe"},K=function(e){var t=Object(s.a)({},e);delete t.name,delete t.textColor,F.a.refresh().then((function(){F.a.modifyVars(Object.assign({},H,t))}))},L=[Object(s.a)({},H),Object(s.a)({},{name:"carbon","@primary-color":"#ed6b21","@body-back-color":"#575d5e","@text-color-bright":"#e3d9c6","@home-window-back-color":"#e3d9c6","@home-window-text-color":"#575d5e","@reload-btn-color":"#e3d9c6"}),Object(s.a)({},{name:"olivia","@primary-color":"#e8c4b8","@link-color":"#e8c4b8","@body-back-color":"#363434","@text-color-bright":"#e8c4b8","@home-window-back-color":"#fafafa","@home-window-text-color":"#363434","@home-window-text-acting-back-color":"rgba(102, 102, 102, 0.26)","@reload-btn-color":"#fafafa"}),Object(s.a)({},{name:"9009",textColor:"#2e2f33","@primary-color":"#6f8c70","@link-color":"#6f8c70","@success-color":"#6f8c70","@error-color":"#ec8f88","@body-back-color":"#b6b09a","@text-color-bright":"#2e2f33","@home-window-back-color":"#d9d2c8","@home-window-text-color":"#2e2f33","@home-countdown-back-color":"#d9d2c8","@reload-btn-color":"#d9d2c8"}),Object(s.a)({},{name:"oblivion","@primary-color":"#ffac00","@link-color":"#ffac00","@success-color":"#93c247","@error-color":"#ea4221","@body-back-color":"#464746","@text-color-bright":"#c8c3b8","@home-window-back-color":"#63696a","@home-window-text-color":"#c8c3b8","@home-countdown-back-color":"#6f7778"}),Object(s.a)({},{name:"godspeed",textColor:"#faee69","@primary-color":"#faee69","@link-color":"#faee69","@body-back-color":"#6A97B5","@text-color-bright":"#e5e8e6","@home-window-back-color":"#eae3d5","@home-window-text-color":"#575d5e","@home-countdown-back-color":"#5A5E61","@reload-btn-color":"#575d5e"}),Object(s.a)({},{name:"nautilus",textColor:"#eac004","@primary-color":"#eac004","@link-color":"#eac004","@body-back-color":"#102c4e","@text-color-bright":"#eac004","@home-window-back-color":"#155d94","@home-window-text-color":"#1ae7ea","@home-countdown-back-color":"#155d94","@reload-btn-color":"#102c4e"}),Object(s.a)({},{name:"avocado",textColor:"rgb(239,234,155)","@primary-color":"rgb(52,31,35)","@link-color":"rgb(52,31,35)","@success-color":"inherit","@body-back-color":"rgb(101,145,91)","@text-color-bright":"rgb(239,234,155)","@home-window-back-color":"rgb(239,234,155)","@home-window-text-color":"rgb(101,145,91)","@success-opacity":".6","@home-countdown-back-color":"rgb(52,31,35)","@reload-btn-color":"rgb(239,234,155)"}),Object(s.a)({},{name:"2600","@primary-color":"#f8cc2a","@link-color":"#f8cc2a","@success-color":"inherit","@error-color":"#6c3b7b","@body-back-color":"#6c3b7b","@home-window-back-color":"#1a8ab7","@home-window-text-color":"#f8cc2a","@success-opacity":".3","@home-countdown-back-color":"#f8cc2a"}),Object(s.a)({},{name:"konmomo",textColor:"rgb(244,84,124)","@primary-color":"rgb(43,38,91)","@link-color":"rgb(43,38,91)","@success-color":"inherit","@body-back-color":"#f7f2ea","@text-color-bright":"rgb(244,84,124)","@home-window-text-color":"rgb(43,38,91)","@home-window-text-sub-color":"rgb(244,84,124)","@success-opacity":".3","@home-countdown-back-color":"rgb(43,38,91)","@reload-btn-color":"#f7f2ea"})],G=/^[\u2E80-\u9FFF]+$/,Q=$.map((function(e){return e.label})).join("|"),X=N((function(e){var t=Object(l.useState)(!1),a=Object(m.a)(t,2),o=a[0],r=a[1],c=Object(l.useState)(!1),i=Object(m.a)(c,2),s=i[0],b=i[1],d=Object(l.useState)(e.$state.root.wordsMode),h=Object(m.a)(d,2),p=h[0],w=h[1],j=Object(l.useRef)(Q),y=Object(l.useState)(e.$state.root.customerWords&&0!==e.$state.root.customerWords.length?e.$state.root.customerWords.map((function(e){return e.label})).join("|"):Q),O=Object(m.a)(y,2),v=O[0],k=O[1],C=Object(l.useState)([]),S=Object(m.a)(C,2),N=S[0],T=S[1],$=Object(u.f)().hash;return Object(l.useEffect)((function(){if($){var t=L.find((function(e){return e.name===$.slice(1).replace("-"," ")}));t&&K(t)}else if(e.$state.root.uiTheme){var a=L.find((function(t){return t.name===e.$state.root.uiTheme}));a&&K(a)}}),[$,e.$state.root.uiTheme]),n.a.createElement("div",{className:"app-header"},n.a.createElement(f.a,null,n.a.createElement(x.a,{flex:"auto"},n.a.createElement(E.a,{type:"link",ghost:!0,icon:n.a.createElement(q.a,null),onClick:function(){return r(!0)}},"\u8bcd\u7ec4\u8bbe\u7f6e"),n.a.createElement(E.a,{type:"link",ghost:!0,icon:n.a.createElement(J.a,null),onClick:function(){return b(!0)}},"\u4e3b\u9898"),n.a.createElement("span",{className:"radio-text"},"\xa0\xa0\xa0\xa0UI\u5c3a\u5bf8:\xa0\xa0"),n.a.createElement(U.a.Group,{onChange:function(t){e.$dispatch("setUiScale",t.target.value)},defaultValue:e.$state.root.uiScale},n.a.createElement(U.a,{value:"s"},"\u6b63\u5e38"),n.a.createElement(U.a,{value:"m"},"\u5927"),n.a.createElement(U.a,{value:"l"},"\u7279\u5927")))),n.a.createElement(A.a,{className:"header-modal-setting",title:"",visible:o,closable:!1,maskClosable:!1,footer:n.a.createElement(_.a,{placement:"left",title:"\u5c06\u81ea\u52a8\u53bb\u9664\u91cd\u590d\u8bcd\u7ec4"},n.a.createElement(E.a,{className:"header-modal-confirm-btn",type:"primary",onClick:function(){if("1"===p)return e.$dispatch("setWordsMode",p),void r(!1);var t=Array.from(new Set(v.split("|").filter(Boolean))),a=[];if(0===t.length&&a.push("\u8bf7\u8f93\u5165\u5b57\u8bcd\uff0c\u5e76\u4ee5\u7b26\u53f7|\u95f4\u9694"),t.forEach((function(e){G.test(e)||a.push(e)})),T(a),0===a.length){e.$dispatch("setWordsMode",p),k(t.join("|")),console.time("getPinyin");var l=t.map((function(e){return{label:e,text:V(e)}}));console.timeEnd("getPinyin"),e.$dispatch("saveCustomerWords",l),r(!1)}}},"\u786e\u5b9a"))},n.a.createElement(D.a,{defaultActiveKey:p,onChange:function(e){w(e),T([])}},n.a.createElement(D.a.TabPane,{tab:"\u9ed8\u8ba4\u8bcd\u7ec4",key:"1"},n.a.createElement(g.a.TextArea,{autoSize:{minRows:9,maxRows:16},disabled:!0,defaultValue:j.current})),n.a.createElement(D.a.TabPane,{tab:"\u81ea\u5b9a\u4e49\u8bcd\u7ec4",key:"2"},n.a.createElement(g.a.TextArea,{autoSize:{minRows:9,maxRows:16},value:v,onChange:function(e){k(e.target.value)}}))),n.a.createElement(f.a,{className:"header-modal--words-length"},n.a.createElement(x.a,{span:12},n.a.createElement(f.a,{gutter:6,className:"error-word"},N.map((function(e,t){return n.a.createElement(x.a,{key:t},e)})))),n.a.createElement(x.a,{span:12,className:"header-modal--total"},"\u5171(","1"===p?j.current.split("|").length:v.split("|").filter(Boolean).length,")\u4e2a\u8bcd"))),n.a.createElement(A.a,{className:"header-modal-theme",title:"",visible:s,footer:"",onCancel:function(){return b(!1)}},n.a.createElement(f.a,{justify:"space-around",className:"header-modal-theme--box"},L.map((function(t,a){return n.a.createElement(x.a,{flex:"100px",className:"theme-display-block",key:a,style:{backgroundColor:t["@body-back-color"],color:t.textColor||t["@primary-color"]},onClick:function(){return function(t){window.location.hash="",e.$dispatch("setUiTheme",t.name)}(t)}},t.name)})),n.a.createElement(x.a,{flex:"100px"}),n.a.createElement(x.a,{flex:"100px"}),n.a.createElement(x.a,{flex:"100px"}),n.a.createElement(x.a,{flex:"100px"}))))})),Y=function(){return n.a.createElement(c.a,{store:T},n.a.createElement(I,{mainClass:"app-main",header:n.a.createElement(X,null),footer:n.a.createElement("div",null)}))};r.a.render(n.a.createElement(Y,null),document.getElementById("root"))}},[[153,1,2]]]);
//# sourceMappingURL=main.4587fb67.chunk.js.map