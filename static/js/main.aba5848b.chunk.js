(this["webpackJsonpskeleton-web-react"]=this["webpackJsonpskeleton-web-react"]||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){},172:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),r=n(20),a=n.n(r),s=(n(131),n.p,n(132),n(122)),l=n(176),i=n(179),u=n(180),d=n(115),j=n(182),b=n(181),h=n(177),g=n(121),x=n(29),O=n(175),f=n(178),m=n(11),p=(i.a.Title,i.a.Paragraph,i.a.Text,function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O.a,{orientation:"left",children:"Free Facebook Video Downloader"}),Object(m.jsx)(f.b,{dataSource:["1. Copy Facebook post URL","2. Paste the URL in the text field below","3. Click the Download button"],renderItem:function(e){return Object(m.jsxs)(f.b.Item,{style:{textAlign:"left",marginLeft:50},children:[Object(m.jsx)(i.a.Text,{mark:!0})," ",e]})}})]})}),w=function(e){var t=e.showResult,n=Object(x.f)((function(e){return e.model.urls}));return console.log(t),t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O.a,{orientation:"left",children:"Available videos to download"}),Object(m.jsx)(f.b,{grid:{gutter:16,xs:1,sm:2,md:2,lg:2,xl:6,xxl:2},dataSource:n,renderItem:function(e){return Object(m.jsx)(f.b.Item,{children:Object(m.jsx)("video",{controls:!0,children:Object(m.jsx)("source",{src:e,type:"video/mp4"})})})}})]}):null},v=(n(148),l.a.Header),S=l.a.Content,k=l.a.Footer,F=l.a.Sider,y=(i.a.Text,u.a.Search),C=function(){var e=Object(x.f)((function(e){return e.model.loading})),t=Object(x.e)((function(e){return e.model.getPageSource})),n=Object(c.useState)(!1),o=Object(s.a)(n,2),r=o[0],a=o[1];return Object(m.jsx)(d.a,{spinning:e,children:Object(m.jsx)(l.a,{children:Object(m.jsxs)(j.b,{direction:"vertical",children:[Object(m.jsx)(v,{style:{display:"flex",justifyContent:"flex-end"},children:Object(m.jsx)(b.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],children:Object(m.jsx)(b.a.Item,{children:"Contact Us"},"1")})}),Object(m.jsxs)(l.a,{children:[Object(m.jsx)(F,{width:"15%",theme:"light",children:Object(m.jsx)(h.a,{src:"https://longmaba-demo-bucket.s3-us-west-1.amazonaws.com/getfb.video/Yellow+and+Orange+Rectangles+Modern+Swiss+Business+Retractable+Exhibition+Banner.png"})}),Object(m.jsxs)(S,{children:[Object(m.jsx)(p,{}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{children:Object(m.jsx)(y,{placeholder:"Input facebook video url",allowClear:!0,onSearch:function(e){a(!0),t({url:e})},style:{width:"90%"},disabled:r})}),Object(m.jsx)("div",{children:Object(m.jsx)(w,{showResult:r})})]}),Object(m.jsx)(F,{width:"15%",theme:"light",children:Object(m.jsx)(h.a,{src:"https://longmaba-demo-bucket.s3-us-west-1.amazonaws.com/getfb.video/Yellow+and+Orange+Rectangles+Modern+Swiss+Business+Retractable+Exhibition+Banner.png"})})]}),Object(m.jsx)(k,{children:r?Object(m.jsx)(g.a,{onClick:function(){console.log("Hello"),window.location.reload()},children:"Download More"}):null})]})})})},P=n(93),I=n.n(P),L=n(117),R=n(123),q=n(118),B=n.n(q),T={loading:!1,setLoading:Object(x.b)((function(e,t){e.loading=t})),urls:[],setUrls:Object(x.b)((function(e,t){e.urls=t})),pageSource:null,setPageSource:Object(x.b)((function(e,t){e.pageSource=t})),getUrlFromPageSource:Object(x.b)((function(e,t){var n=e.pageSource,c=/video&quot;,&quot;src&quot;:&quot;(.*?)&quot;,&quot/.exec(n);if(console.log(c),null!==c){var o=c[1].replaceAll("amp;","");e.urls=[].concat(Object(R.a)(e.urls),[o.replace(/\\/g,"")])}})),getPageSource:Object(x.d)(function(){var e=Object(L.a)(I.a.mark((function e(t,n){var c,o,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.url,t.setLoading(!0),e.next=4,B.a.get("".concat("https://e8l09j4oja.execute-api.us-east-1.amazonaws.com/dev/get-pagesource?url=").concat(c));case 4:o=e.sent,r=o.data,t.setLoading(!1),t.setPageSource(r.content),t.getUrlFromPageSource();case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},U=Object(x.c)({model:T});var z=function(){return Object(m.jsx)(x.a,{store:U,children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(C,{})})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,183)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))};a.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(z,{})}),document.getElementById("root")),A()}},[[172,1,2]]]);
//# sourceMappingURL=main.aba5848b.chunk.js.map