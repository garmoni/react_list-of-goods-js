(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(6),s=c.n(n),o=c(5),r=c(7),a=(c(12),c(13),c(1)),i=c(0),u=function(t){var e=t.goods;return Object(i.jsx)("ul",{children:e.map((function(t){return Object(i.jsx)("li",{"data-cy":"Good",children:t},t)}))})},l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b="alphabetically",j="length";var d=function(){var t=Object(a.useState)(""),e=Object(o.a)(t,2),c=e[0],n=e[1],s=Object(a.useState)(!1),d=Object(o.a)(s,2),h=d[0],p=d[1],O=function(t,e,c){var n=Object(r.a)(t);return e&&n.sort((function(t,c){switch(e){case b:return t.localeCompare(c);case j:return t.length-c.length;default:return 0}})),c&&n.reverse(),n}(l,c,h),f="button is-success",g="button is-success is-light";return Object(i.jsxs)("div",{className:"section content",children:[Object(i.jsxs)("div",{className:"buttons",children:[Object(i.jsx)("button",{type:"button",className:"".concat(c!==b?g:f),onClick:function(){return n(b)},children:"Sort alphabetically"}),Object(i.jsx)("button",{type:"button",className:"".concat(c!==j?g:f),onClick:function(){return n(j)},children:"Sort by length"}),Object(i.jsx)("button",{type:"button",className:"".concat(h?f:g),onClick:function(){p(!h)},children:"Reverse"}),(""!==c||h)&&Object(i.jsx)("button",{type:"button",className:g,onClick:function(){n(""),p(!1)},children:"Reset"})]}),Object(i.jsx)(u,{goods:O})]})};s.a.render(Object(i.jsx)(d,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.436382bf.chunk.js.map