(this["webpackJsonpskeleton-web-react"]=this["webpackJsonpskeleton-web-react"]||[]).push([[0],{137:function(e,t,n){},138:function(e,t,n){},171:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),r=n(20),a=n.n(r),s=(n(137),n(138),n(128)),i=n(174),l=n(178),u=n(121),d=n(181),b=n(179),j=n(175),g=n(127),h=n(24),O=n(173),f=n(176),x=n(177),m=n(11),p=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O.a,{orientation:"left",children:"Free Facebook Video Downloader"}),Object(m.jsx)(f.b,{dataSource:["1. Copy Facebook post URL","2. Paste the URL in the text field below","3. Click the Download button"],renderItem:function(e){return Object(m.jsxs)(f.b.Item,{style:{textAlign:"left",marginLeft:50},children:[Object(m.jsx)(x.a.Text,{mark:!0})," ",e]})}})]})},w=n(180),v=function(e){var t=e.showResult,n=Object(h.f)((function(e){return e.model.urls})),o=Object(h.e)((function(e){return e.model.getAndSetPcbToken})),r=Object(h.f)((function(e){return e.model.pcbToken})),a=Object(h.e)((function(e){return e.model.getPageSourceByPcbToken}));return Object(c.useEffect)((function(){null!=r&&a({pcbToken:r})}),[r]),t?(null===n||void 0===n?void 0:n.length)>0?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O.a,{orientation:"left",children:"Available videos to download"}),Object(m.jsx)(f.b,{grid:{gutter:16,xs:1,sm:2,md:2,lg:2,xl:6,xxl:2},dataSource:n,renderItem:function(e){return Object(m.jsx)(f.b.Item,{children:Object(m.jsx)("video",{controls:!0,children:Object(m.jsx)("source",{src:e,type:"video/mp4"})})})}})]}):null==n?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(w.a,{message:"Not lucky yet!!!",showIcon:!0,description:"We haven't found the video yet. Do you want to give us another chance by doing different search method? ",type:"error",action:Object(m.jsx)(g.a,{size:"small",danger:!0,onClick:function(){o()},children:"Try Again!"}),width:80})}):Object(m.jsx)(m.Fragment,{}):null},k=i.a.Header,S=i.a.Content,y=i.a.Footer,P=i.a.Sider,F=l.a.Search,T=function(){var e=Object(h.f)((function(e){return e.model.loading})),t=Object(h.e)((function(e){return e.model.getPageSource})),n=Object(c.useState)(!1),o=Object(s.a)(n,2),r=o[0],a=o[1];return Object(m.jsx)(u.a,{spinning:e,children:Object(m.jsx)(i.a,{children:Object(m.jsxs)(d.b,{direction:"vertical",children:[Object(m.jsx)(k,{style:{display:"flex",justifyContent:"flex-end"},children:Object(m.jsx)(b.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],children:Object(m.jsx)(b.a.Item,{children:"Contact Us"},"1")})}),Object(m.jsxs)(i.a,{children:[Object(m.jsx)(P,{width:"15%",theme:"light",children:Object(m.jsx)(j.a,{src:"https://longmaba-demo-bucket.s3-us-west-1.amazonaws.com/getfb.video/Yellow+and+Orange+Rectangles+Modern+Swiss+Business+Retractable+Exhibition+Banner.png"})}),Object(m.jsxs)(S,{children:[Object(m.jsx)(p,{}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{children:Object(m.jsx)(F,{placeholder:"Input facebook video url",allowClear:!0,onSearch:function(e){a(!0),t({url:e})},style:{width:"90%"},disabled:r})}),Object(m.jsx)("div",{children:Object(m.jsx)(v,{showResult:r})})]}),Object(m.jsx)(P,{width:"15%",theme:"light",children:Object(m.jsx)(j.a,{src:"https://longmaba-demo-bucket.s3-us-west-1.amazonaws.com/getfb.video/Yellow+and+Orange+Rectangles+Modern+Swiss+Business+Retractable+Exhibition+Banner.png"})})]}),Object(m.jsx)(y,{children:r?Object(m.jsx)(g.a,{onClick:function(){window.location.reload()},children:"Download More"}):null})]})})})},C=n(69),L=n.n(C),I=n(100),B=n(129),R=n(101),A=n.n(R),U="https://e8l09j4oja.execute-api.us-east-1.amazonaws.com/dev/get-pagesource?url=",q={loading:!1,setLoading:Object(h.b)((function(e,t){e.loading=t})),urls:[],setUrls:Object(h.b)((function(e,t){e.urls=t})),pageSource:null,setPageSource:Object(h.b)((function(e,t){e.pageSource=t})),getUrlFromPageSource:Object(h.b)((function(e,t){var n=e.pageSource,c=/video&quot;,&quot;src&quot;:&quot;(.*?)&quot;,&quot/.exec(n);if(null!==c){var o=c[1].replaceAll("amp;","");e.urls=[].concat(Object(B.a)(e.urls),[o.replace(/\\/g,"")])}else e.urls=null})),getPageSource:Object(h.d)(function(){var e=Object(I.a)(L.a.mark((function e(t,n){var c,o,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.url,t.setLoading(!0),e.next=4,A.a.get("".concat(U).concat(c));case 4:o=e.sent,r=o.data,t.setPageSource(r.content),t.getUrlFromPageSource(),t.setLoading(!1);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),pcbToken:null,getAndSetPcbToken:Object(h.b)((function(e,t){var n=e.pageSource,c=/permalink:"(.*?)",setToken/.exec(n);e.pcbToken=null!=c?c[1]:null})),getPageSourceByPcbToken:Object(h.d)(function(){var e=Object(I.a)(L.a.mark((function e(t,n){var c,o,r,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setLoading(!0),c=n.pcbToken,o="https://m.facebook.com".concat(c),e.next=5,A.a.get("".concat(U).concat(o));case 5:r=e.sent,a=r.data,t.setPageSource(a.content),t.getUrlFromPageSource(),t.setLoading(!1);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},z=Object(h.c)({model:q});var D=function(){return Object(m.jsx)(h.a,{store:z,children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(T,{})})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,182)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))};a.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root")),E()}},[[171,1,2]]]);
//# sourceMappingURL=main.155d8e40.chunk.js.map