(this["webpackJsonpbigcommerce-fe"]=this["webpackJsonpbigcommerce-fe"]||[]).push([[0],{79:function(e,t,a){e.exports=a(95)},84:function(e,t,a){},85:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),l=(a(84),a(71)),i=a(32),s=(a(85),a(18)),m=a(29),u=a(14),p={orders:[]},E=a(135),d=a(156),f=a(65),b=a.n(f),g=a(139),O=a(137),h=a(49),v=a.n(h),S=a(61),y=a(50),C=a.n(y),R="http://9ad4a42c7d1a.ngrok.io",k=function(e){return function(t){t(w()),function(e,t){j.apply(this,arguments)}(e.filter((function(e){return e.isChecked})),t)}};function j(){return(j=Object(S.a)(v.a.mark((function e(t,a){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C()("".concat(R,"/api/orders"),{method:"POST",body:JSON.stringify({orders:t}),headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",{type:"SEND_ORDERS_SUCCESS",payload:r.data});case 10:e.prev=10,e.t0=e.catch(0),a(w());case 13:case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function w(){return{type:"SEND_ORDERS_ERROR",payload:[]}}var x=function(e){return function(t){return t(function(e){return{type:"FETCH_ORDERS_REQUEST",payload:e}}(e)),C()("".concat(R,"/api/orders")).then((function(e){return e.json()})).then((function(e){return t(function(e){var t=JSON.parse(JSON.stringify(e));return{type:"FETCH_ORDERS_SUCCESS",payload:t=t.map((function(e){return e.isChecked=!1,e}))}}(e))})).catch((function(e){return t({type:"FETCH_ORDERS_ERROR",payload:[]})}))}};var N=function(e,t){return console.log(e),{type:"ACTION_SELECT_ORDER",payload:e=e.map((function(e){return e.productName.toLowerCase()===t.toLowerCase()&&(e.isChecked=!e.isChecked),e}))}},_=Object(E.a)((function(e){return Object(d.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},button:{margin:"100px 10px 20px 0px"}})}));var T=Object(m.b)((function(e){return{orders:e.orders}}),(function(e){return{getOrders:Object(s.b)(x,e)}}))((function(e){var t=_(),a=e.getOrders,n=e.orders;return r.a.createElement(O.a,{container:!0,direction:"row",justify:"flex-start"},r.a.createElement(g.a,{variant:"outlined",color:"primary",className:t.button,endIcon:r.a.createElement(b.a,null),onClick:function(){a(n)}},"Update Orders"))})),D=a(141),U=a(145),B=a(144),H=a(140),I=a(142),P=a(143),L=a(96),F=a(154),J=a(66),M=a.n(J),W=Object(E.a)({table:{minWidth:650,maxWidth:1300,margin:"0 auto"},button:{marginTop:50,marginBottom:50,padding:"10px 30px"},selected:{backgroundColor:"#0080000f"},none:{backgroundColor:"none"}});var A=Object(m.b)((function(e){return{orders:e.orders}}),(function(e){return{selectOrder:Object(s.b)(N,e),getOrders:Object(s.b)(x,e),sendOrders:Object(s.b)(k,e)}}))((function(e){var t=W(),a=e.sendOrders,c=e.getOrders,o=e.selectOrder,l=e.orders;return Object(n.useEffect)((function(){c([])}),[]),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(T,null),r.a.createElement(H.a,{component:L.a},r.a.createElement(D.a,{className:t.table,"aria-label":"simple table"},r.a.createElement(I.a,null,r.a.createElement(P.a,null,r.a.createElement(B.a,null,"Select"),r.a.createElement(B.a,null,"Order Id"),r.a.createElement(B.a,{align:"center"},"Product Name"),r.a.createElement(B.a,{align:"center"},"SKU"),r.a.createElement(B.a,{align:"center"},"Base Price"),r.a.createElement(B.a,{align:"center"},"Quantity"),r.a.createElement(B.a,{align:"center"},"Location"),r.a.createElement(B.a,{align:"center"},"Customer Name"))),r.a.createElement(U.a,null,l.map((function(e,a){return r.a.createElement(P.a,{className:e.isChecked?t.selected:t.none,onClick:function(t){return o(l,e.productName)},key:a},r.a.createElement(B.a,{component:"th",scope:"row"},r.a.createElement(F.a,{checked:e.isChecked,value:e.isChecked})),r.a.createElement(B.a,{component:"th",scope:"row"},e.id),r.a.createElement(B.a,{align:"center"},e.productName),r.a.createElement(B.a,{align:"center"},e.sku||"-"),r.a.createElement(B.a,{align:"center"},e.basePrice),r.a.createElement(B.a,{align:"center"},e.quantity),r.a.createElement(B.a,{align:"center"},e.country,", ",e.city),r.a.createElement(B.a,{align:"center"},e.first_name," ",e.last_name))}))))),r.a.createElement(g.a,{variant:"contained",color:"primary",disabled:!l.filter((function(e){return e.isChecked})).length,className:t.button,endIcon:r.a.createElement(M.a,null),onClick:function(e){return a(l)}},"Send"))})),Q=a(153),G=a(157),z=a(148),q=a(149),K=a(70),$=a.n(K),V=a(17),X=a(155),Y=a(147),Z=a(151),ee=a(150),te=a(152),ae=a(146),ne=a(46),re=a(53),ce=a.n(re),oe=a(69),le=a(11),ie=a(15),se=(a(92),Object(E.a)((function(e){return Object(d.a)({marginTop:{marginTop:100}})})));function me(){var e=se();return r.a.createElement("div",{className:e.marginTop},r.a.createElement("h2",null,"Comming soon..."))}var ue=Object(E.a)((function(e){return Object(d.a)({marginTop:{marginTop:100}})}));function pe(){var e=ue();return r.a.createElement("div",{className:e.marginTop},r.a.createElement("h2",null,"Comming soon..."))}var Ee=Object(E.a)((function(e){return Object(d.a)({marginTop:{marginTop:100}})}));function de(){var e=Ee();return r.a.createElement("div",{className:e.marginTop},r.a.createElement("h2",null,"Comming soon..."))}var fe=a(67),be=a(68),ge=Object(be.createLogger)(),Oe=Object(s.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTION_SELECT_ORDER":case"FETCH_ORDERS_REQUEST":case"FETCH_ORDERS_SUCCESS":case"FETCH_ORDERS_ERROR":case"SEND_ORDERS_REQUEST":case"SEND_ORDERS_SUCCESS":case"SEND_ORDERS_ERROR":return Object(u.a)(Object(u.a)({},e),{},{orders:t.payload});default:return e}}),Object(s.a)(fe.a,ge)),he=Object(ie.a)(),ve=Object(E.a)((function(e){return{root:{display:"flex"},drawer:Object(i.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(i.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(i.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)},initialisation:{top:"0px",left:"0px",width:"100vw",height:"100%",margin:"0 auto",position:"absolute",backgroundColor:"white",zIndex:1e4,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2.5em"}}}));var Se=function(e){var t=e.window,a=ve(),n=Object(V.a)(),c=r.a.useState(!1),o=Object(l.a)(c,2),i=o[0],s=o[1],u=function(){s(!i)},p=r.a.createElement("div",null,r.a.createElement("div",{className:a.toolbar}),r.a.createElement(Y.a,null,[{link:"/",text:"Orders"},{link:"/templates",text:"Email templates"},{link:"/History",text:"History"},{link:"/contact-us",text:"Contact Us"}].map((function(e,t){return r.a.createElement(oe.a,{to:e.link,key:t},r.a.createElement(G.a,{button:!0,key:e.text},r.a.createElement(z.a,null,t%2===0?r.a.createElement(ce.a,null):r.a.createElement($.a,null)),r.a.createElement(q.a,{primary:e.text})))})))),E=void 0!==t?function(){return t().document.body}:void 0;return r.a.createElement(m.a,{store:Oe},r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:a.initialisation},r.a.createElement("span",null,"App initialisation...")),r.a.createElement(ee.a,null),r.a.createElement(Z.a,{position:"fixed",className:a.appBar},r.a.createElement(te.a,null,r.a.createElement(ae.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:u,className:a.menuButton},r.a.createElement(ce.a,null)),r.a.createElement(ne.a,{variant:"h6",noWrap:!0},"Mail Me"))),r.a.createElement(le.b,{history:he},r.a.createElement(O.a,{container:!0,spacing:3},r.a.createElement(O.a,{item:!0,md:3,sm:4},r.a.createElement("nav",{className:a.drawer,"aria-label":"mailbox folders"},r.a.createElement(X.a,{smUp:!0,implementation:"css"},r.a.createElement(Q.a,{container:E,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:i,onClose:u,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},p)),r.a.createElement(X.a,{xsDown:!0,implementation:"css"},r.a.createElement(Q.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},p)))),r.a.createElement(O.a,{item:!0,xs:8},r.a.createElement(le.c,null,r.a.createElement(le.a,{path:"/templates"},r.a.createElement(me,null)),r.a.createElement(le.a,{path:"/history"},r.a.createElement(pe,null)),r.a.createElement(le.a,{path:"/contact-us"},r.a.createElement(de,null)),r.a.createElement(le.a,{path:"/templates"},r.a.createElement(me,null)),r.a.createElement(le.a,{path:"/"},r.a.createElement(A,null))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(94);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[79,1,2]]]);
//# sourceMappingURL=main.0bbd8c7e.chunk.js.map