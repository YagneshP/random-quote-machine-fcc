(this.webpackJsonprandom_quote_machine=this.webpackJsonprandom_quote_machine||[]).push([[0],{25:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n(0),i=n.n(a),o=n(17),s=n.n(o),r=(n(25),n(47)),l=n(18),u=n(45),d=n(46),j=n(48),h=n(49),b=n(8),x=n.n(b),f=function(){var t=Object(a.useState)(),e=Object(l.a)(t,2),n=e[0],i=e[1];Object(a.useEffect)((function(){x.a.get("https://api.quotable.io/random").then((function(t){i(t.data)}))}),[]);return Object(c.jsx)(u.a,{xs:1,children:Object(c.jsx)(d.a,{children:Object(c.jsx)(j.a,{id:"qoute-box",children:Object(c.jsxs)(j.a.Body,{className:" d-flex justify-content-center align-items-center flex-column",children:[Object(c.jsx)(j.a.Text,{id:"text",className:"quote",children:n?n.content:null}),Object(c.jsx)(j.a.Text,{id:"author",className:"__author",children:n?n.author:null}),Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",width:"100%"},children:[Object(c.jsx)(h.a,{as:"a",href:n?"https://twitter.com/intent/tweet?text=".concat(n.content," ~").concat(n.author):null,"data-text":n?n.content:null,target:"_blank",alt:"twitter",id:"tweet-quote",children:"twitter"}),Object(c.jsx)(h.a,{id:"new-quote",onClick:function(){x.a.get("https://api.quotable.io/random").then((function(t){i(t.data)}))},children:"New Qoute"})]})]})})})})};var O=function(){return Object(c.jsx)(r.a,{className:"App",children:Object(c.jsx)(f,{})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),i(t),o(t)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),m()}},[[44,1,2]]]);
//# sourceMappingURL=main.82fb0989.chunk.js.map