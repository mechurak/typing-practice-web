(this["webpackJsonptyping-practice-web-temp"]=this["webpackJsonptyping-practice-web-temp"]||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n(0),r=n.n(o),c=n(9),i=n.n(c),s=n(165),l=n(28),b=n(11),j=n(76),d=Object(j.a)({typography:{tab:{textTransform:"none",fontWeight:700,fontSzie:"1rem"}}}),h=n(20),u=n(48),m=n(152),p=n(154),O=n(156),g=n(150),x=n(113),f=n(155),y=n(167),v=n(157),S=n(74),w=n.n(S);function I(e){var t=e.children,n=Object(g.a)({disableHysteresis:!0,threshold:0});return r.a.cloneElement(t,{elevation:n?4:0})}var k=Object(x.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},toolbarMargin:Object(u.a)({},e.mixins.toolbar),tabContainer:{marginLeft:"auto"},tab:Object(u.a)(Object(u.a)({},e.typography.tab),{},{minWidth:10,marginLeft:"25px"})}}));function N(e){var t=k(),n=Object(o.useState)(0),c=Object(h.a)(n,2),i=c[0],s=c[1];return Object(o.useEffect)((function(){"/"===window.location.pathname&&0!==i?s(0):"/practice"===window.location.pathname&&1!==i?s(1):"/import"===window.location.pathname&&2!==i?s(2):"/history"===window.location.pathname&&3!==i&&s(3)}),[i]),Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)(I,{children:Object(a.jsx)(m.a,{position:"fixed",children:Object(a.jsxs)(p.a,{children:[Object(a.jsx)(f.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:Object(a.jsx)(w.a,{})}),Object(a.jsx)(O.a,{variant:"h6",children:"Typing Practice"}),Object(a.jsxs)(y.a,{value:i,onChange:function(e,t){s(t)},className:t.tabContainer,children:[Object(a.jsx)(v.a,{className:t.tab,label:"Home",component:l.b,to:"/"}),Object(a.jsx)(v.a,{className:t.tab,label:"Practice",component:l.b,to:"/practice"}),Object(a.jsx)(v.a,{className:t.tab,label:"Import",component:l.b,to:"/import"}),Object(a.jsx)(v.a,{className:t.tab,label:"History",component:l.b,to:"/history"})]})]})})}),Object(a.jsx)("div",{className:t.toolbarMargin})]})}var B=n(158),E=n(161),C=n(163),J=n(162),H=n(160),F=n(159),T=n(164),q=n(40);function z(e){var t=e.c,n=e.index,o=e.cursor,r=e.input,c=e.guideEnabled,i={};return n===o?i=""===r?{color:"silver",borderBottom:"3px solid blue"}:{color:"red",borderBottom:"3px solid red"}:n<o?i={color:"black"}:n>o&&(i=c?{color:"silver"}:{color:"snow"}),Object(a.jsx)("span",{style:i,children:"\n"===t?Object(a.jsx)("br",{}):t})}function L(e){var t=e.leftStr,n=e.guideEnabled,r=Object(q.a)(t),c=Object(o.useState)(0),i=Object(h.a)(c,2),s=i[0],l=i[1],b=Object(o.useState)(""),j=Object(h.a)(b,2),d=j[0],u=j[1],m=["Alt","Shift","Control","HangulMode","HanjaMode"];Object(o.useEffect)((function(){l(0)}),[t]);return Object(a.jsx)("div",{tabIndex:0,onKeyDown:function(e){m.indexOf(e.key)>-1||("Backspace"===e.key&&s>0?(l(s-1),u("")):e.key===r[s]||"Enter"===e.key&&"\n"===r[s]?(l(s+1),u("")):u(e.key))},children:r.map((function(e,t){return Object(a.jsx)(z,{c:e,index:t,cursor:s,input:d,guideEnabled:n},t)}))})}var A=[[{subject:"Furniture",category:"common",set:"\uac00\uad6c#01",id:"Furniture#q1",final:"",hint:"[Int] \ubcf8\uc778 \uc9d1\uc5d0 \uc788\ub294 \uac00\uad6c, \uac00\uc7a5 \uc88b\uc544\ud558\ub294 \uac00\uad6c \ubb18\uc0ac - \uce68\ub300",question:"Tell me about the furniture you have in your home.\nIs there a piece that is your favorite?",description:"",answer_id:"Furniture#a1"}]],M=[{subject:"Furniture",id:"Furniture#a1",hint:"[Int] \ubcf8\uc778 \uc9d1\uc5d0 \uc788\ub294 \uac00\uad6c, \uac00\uc7a5 \uc88b\uc544\ud558\ub294 \uac00\uad6c \ubb18\uc0ac - \uce68\ub300",answer:"There are many types of furniture in my apartment.\n\nIn the living room, there is a sofa, a coffee table and a display case.\nIn the bedroom, I have a desk, a chair, a bed and a nightstand.\nI also have some bookshelves and a dressing table.\nI also have some dressers and some built-in closets.\n\nAmong them, my favorite furniture is my bed because I love to sleep.\nI have had that bed for five years.\nIt is very comfy and cozy, so it helps me get quality sleep.\nI think getting a good night's sleep is very important.\nI need to get at least seven hours of sleep each day.\nThe mattress is covered with a bed sheet.\nThere is a warm blanket and several pillows on the bed.\nThere is also an electronic mat on the bed, which keeps me warm at night.\n\nI always make my bed when I wake up in the morning.\nI like to keep my bed nice and tidy.\n\nSo, these are the furniture I have at home.",description:"\ubcf8\uc778 \ubc29 \ubb18\uc0ac \ub2f5\ubcc0\uc5d0 \ud65c\uc6a9",important:""}],P=Object(B.a)((function(e){return{root:{flexGrow:1,marginBottom:"10px"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},title:{fontSize:14}}}));function _(){var e=P(),t=JSON.parse(localStorage.getItem("curQuestionsList"))||A,n=JSON.parse(localStorage.getItem("curAnswers"))||M,c=t.length,i=Object(o.useState)(0),s=Object(h.a)(i,2),l=s[0],b=s[1],j=Object(o.useState)(!1),d=Object(h.a)(j,2),u=d[0],m=d[1],p=Object(o.useState)(!1),g=Object(h.a)(p,2),x=g[0],f=g[1],y=t[l].map((function(n,o){return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsxs)(O.a,{className:e.title,color:"textSecondary",gutterBottom:!0,children:["[",n.set,"] ",n.id]}),Object(a.jsx)("pre",{style:{fontFamily:"inherit"},children:Object(a.jsx)(O.a,{variant:"body1",component:"p",children:n.question})}),u?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(O.a,{variant:"body2",color:"textSecondary",gutterBottom:!0,children:["Hint (",n.id,")"]}),Object(a.jsx)(O.a,{variant:"body2",component:"p",children:n.hint})]}):null,o<t[l].length-1?Object(a.jsx)(F.a,{}):null]},o)}));return Object(a.jsx)("div",{className:e.root,children:Object(a.jsxs)(H.a,{container:!0,spacing:1,children:[Object(a.jsxs)(H.a,{item:!0,xs:12,sm:6,children:[Object(a.jsxs)(E.a,{className:e.root,children:[Object(a.jsx)(J.a,{children:y}),Object(a.jsxs)(C.a,{children:[Object(a.jsx)(T.a,{size:"small",onClick:function(){var e=l-1;e<0&&(e=c-1),b(e)},children:"Prev"}),Object(a.jsxs)(O.a,{variant:"body1",children:[l+1," / ",c]}),Object(a.jsx)(T.a,{size:"small",onClick:function(){var e=l+1;e>=c&&(e=0),b(e)},children:"Next"}),Object(a.jsx)(T.a,{size:"small",variant:"outlined",color:u?"primary":"default",onClick:function(){m(~u)},children:u?"Hint off":"Hint on"})]})]}),u?Object(a.jsx)(E.a,{className:e.root,children:Object(a.jsxs)(J.a,{children:[Object(a.jsxs)(O.a,{variant:"body2",color:"textSecondary",gutterBottom:!0,children:["Hint (",n[l].id,")"]}),Object(a.jsx)("pre",{style:{fontFamily:"inherit"},children:Object(a.jsx)(O.a,{variant:"body2",component:"p",children:n[l].hint})}),Object(a.jsxs)(O.a,{variant:"body2",color:"textSecondary",gutterBottom:!0,children:["Description (",n[l].id,")"]}),Object(a.jsx)("pre",{style:{fontFamily:"inherit"},children:Object(a.jsx)(O.a,{variant:"body2",component:"p",children:n[l].description})})]})}):null]}),Object(a.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(a.jsxs)(E.a,{className:e.root,children:[Object(a.jsxs)(J.a,{children:[Object(a.jsx)(O.a,{className:e.title,color:"textSecondary",gutterBottom:!0,children:n[l].id}),Object(a.jsx)(L,{leftStr:n[l].answer,guideEnabled:x})]}),Object(a.jsx)(C.a,{children:Object(a.jsx)(T.a,{size:"small",variant:"outlined",color:x?"primary":"default",onClick:function(){f(~x)},children:x?"Guide off":"Guide on"})})]})})]})})}var W=n(166),G=n(75),Q=n.n(G),D="questions",K="answers";function R(){var e=Object(o.useState)("https://docs.google.com/spreadsheets/d/1q9dzowKY0p5_Ee-OiCH2bbtTkycOmru-evlj9MsHr1E/edit#gid=284135557"),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(o.useState)(!1),i=Object(h.a)(c,2),s=i[0],l=i[1],b=JSON.parse(localStorage.getItem(D))||[],j=JSON.parse(localStorage.getItem(K))||[];return Object(a.jsxs)("div",{children:[Object(a.jsx)(O.a,{variant:"h6",children:"Import your data from google sheet."}),Object(a.jsx)(W.a,{label:"google sheet url",defaultValue:n,fullWidth:!0,onChange:function(e){var t=e.target.value;r(t)}}),Object(a.jsx)(T.a,{variant:"contained",color:"primary",onClick:function(){console.log("loadSheet()",n),l(!0),Q.a.init({key:n,callback:function(e,t){var n=t.sheets("question").all(),a=t.sheets("answer").all();console.log(n),localStorage.setItem(D,JSON.stringify(n)),console.log(a),localStorage.setItem(K,JSON.stringify(a)),l(!1)},simpleSheet:!0})},children:"Import"}),s?Object(a.jsx)(O.a,{variant:"body2",children:"Importing..."}):Object(a.jsxs)(O.a,{variant:"body2",children:[b.length," questions, ",j.length," answers are loaded."]})]})}var U="curQuestionsList",V="curAnswers",Y=Object(B.a)((function(e){return{setButton:{margin:"10px",minWidth:"180px",textTransform:"none"}}})),X=function(e){var t=e.history,n=Y(),o=JSON.parse(localStorage.getItem("questions"))||[];console.log(o);var r=Object(q.a)(new Set(o.map((function(e){return e.set}))));console.log(r);var c=JSON.parse(localStorage.getItem("answers"))||[];console.log(c);var i=Object(q.a)(new Set(c.map((function(e){return e.subject}))));console.log(i);var s=function(e){var n=e.target.innerText;console.log(n);var a=[];o.forEach((function(e){e.set===n&&a.push([e])})),console.log(a);var r=[];a.forEach((function(e){for(var t=0;t<c.length;t++)if(e[0].answer_id===c[t].id){r.push(c[t]);break}})),console.log(r),a.length!==r.length?alert("curQuestionsList(".concat(a.length,") and curAnswers(").concat(r.length,") have different length.")):(localStorage.setItem(U,JSON.stringify(a)),localStorage.setItem(V,JSON.stringify(r)),t.push("practice"))},l=function(e){var n=e.target.innerText;console.log(n);var a=[];c.forEach((function(e){e.subject===n&&a.push(e)})),console.log(a);var r=[];a.forEach((function(e,t){r.push([]);for(var n=0;n<o.length;n++)e.id===o[n].answer_id&&r[t].push(o[n])})),console.log(r),localStorage.setItem(U,JSON.stringify(r)),localStorage.setItem(V,JSON.stringify(a)),t.push("practice")};return Object(a.jsxs)("div",{children:[Object(a.jsx)(O.a,{variant:"h6",children:"Practice by question set"}),r.map((function(e,t){return Object(a.jsx)(T.a,{variant:"contained",className:n.setButton,onClick:s,children:e},t)})),Object(a.jsx)(F.a,{}),Object(a.jsx)(O.a,{variant:"h6",children:"Practice by subject"}),i.map((function(e,t){return Object(a.jsx)(T.a,{variant:"contained",className:n.setButton,onClick:l,children:e},t)}))]})};var Z=function(){return console.log("PUBLIC_URL","/typing-practice-web"),Object(a.jsx)(s.a,{theme:d,children:Object(a.jsxs)(l.a,{basename:"/typing-practice-web",children:[Object(a.jsx)(N,{}),Object(a.jsxs)(b.d,{children:[Object(a.jsx)(b.b,{exact:!0,path:"/",component:X}),Object(a.jsx)(b.b,{exact:!0,path:"/practice",component:_}),Object(a.jsx)(b.b,{exact:!0,path:"/import",component:R}),Object(a.jsx)(b.b,{exact:!0,path:"/history",component:function(){return Object(a.jsx)("div",{children:"History"})}}),Object(a.jsx)(b.a,{to:"/"})]})]})})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(Z,{})}),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.b5df7623.chunk.js.map