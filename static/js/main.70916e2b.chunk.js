(this["webpackJsonpshopping-cart3"]=this["webpackJsonpshopping-cart3"]||[]).push([[0],{12:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),n=t(4),i=t.n(n),r=t(2),o=(t(9),t(10),t(0)),l=[{name:"apples",price:1.5,stock:10},{name:"pears",price:1.25,stock:15},{name:"cashews",price:12,stock:20},{name:"trailMix",price:8,stock:20},{name:"chips",price:3.75,stock:5}];var j=function(){var e=Object(s.useState)(l[0]),c=Object(r.a)(e,2),t=c[0],a=(c[1],Object(s.useState)(l[1])),n=Object(r.a)(a,2),i=n[0],j=(n[1],Object(s.useState)(l[2])),b=Object(r.a)(j,2),m=b[0],h=(b[1],Object(s.useState)(l[3])),p=Object(r.a)(h,2),d=p[0],O=(p[1],Object(s.useState)(l[4])),u=Object(r.a)(O,2),k=u[0],x=(u[1],Object(s.useState)(l)),g=Object(r.a)(x,2),f=(g[0],g[1]),N=Object(s.useState)(0),y=Object(r.a)(N,2),C=y[0],v=y[1],w=Object(s.useState)([]),S=Object(r.a)(w,2),P=S[0],T=S[1],M=Object(s.useState)([]),$=Object(r.a)(M,2),A=$[0],E=$[1],B=Object(s.useState)(""),J=Object(r.a)(B,2),F=J[0],H=J[1],I=function(e){var c=e.target.name;console.log(c),l.forEach((function(e){e.name===c&&e.stock>=1&&(f(e.stock--),v(C+e.price),P.push(Object(o.jsxs)("li",{children:[e.name," for ",e.price]}))),e.stock<=-1&&(f(e.stock-0),v(C-0))}))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Welcome to my Store!"}),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("h2",{className:"titles",children:"Products"}),Object(o.jsx)("img",{className:"itemPic",src:"/images/apple.jpeg"}),Object(o.jsxs)("button",{onClick:I,type:"button",name:"apples",className:"btn btn-primary",children:[t.stock," Apples in stock ",Object(o.jsxs)("span",{className:"badge bg-secondary",children:["Apples are $",t.price]})]}),Object(o.jsx)("br",{}),Object(o.jsx)("img",{className:"itemPic",src:"/images/pear.jpeg"}),Object(o.jsxs)("button",{onClick:I,type:"button",name:"pears",className:"btn btn-primary",children:[i.stock," Pears in Stock",Object(o.jsxs)("span",{className:"badge bg-secondary",children:["Pears are $",i.price]})]}),Object(o.jsx)("br",{}),Object(o.jsx)("img",{className:"itemPic",src:"/images/cashew.jpeg"}),Object(o.jsxs)("button",{onClick:I,name:"cashews",type:"button",className:"btn btn-primary",children:[m.stock," Cashews are in stock",Object(o.jsxs)("span",{className:"badge bg-secondary",children:["Cashews are $",m.price]})]}),Object(o.jsx)("br",{}),Object(o.jsx)("img",{className:"itemPic",src:"/images/trailMix.jpeg"}),Object(o.jsxs)("button",{onClick:I,type:"button",name:"trailMix",className:"btn btn-primary",children:[d.stock," TrailMix in stock",Object(o.jsxs)("span",{className:"badge bg-secondary",children:["TrailMix is $",d.price]})]}),Object(o.jsx)("br",{}),Object(o.jsx)("img",{className:"itemPic",src:"/images/chips.jpeg"}),Object(o.jsxs)("button",{onClick:I,type:"button",name:"chips",className:"btn btn-primary",children:[k.stock," Chips in stock",Object(o.jsxs)("span",{className:"badge bg-secondary",children:["Chips are $",k.price]})]}),Object(o.jsx)("br",{})]}),Object(o.jsxs)("div",{className:"col-4",children:[Object(o.jsx)("h2",{className:"titles",children:"Cart"}),Object(o.jsx)("p",{id:"cartTotal"}),Object(o.jsx)("ul",{style:{textAlign:"center"},id:"cart",children:P})]}),Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("h2",{className:"titles",children:"Check Out"}),Object(o.jsx)("div",{id:"checkOut",className:"card",style:{width:"18rem"},children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("h5",{className:"card-title",style:{textAlign:"center"},children:["Your Balance Has Come Out To $",C]}),Object(o.jsx)("p",{className:"card-text",children:"Thank you for shopping with my shop, all sales are final and we  welcome you to come back!"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:"#",onClick:function(){v(0),P.forEach((function(e){var c=e.props.children[0];A.push(c)}));var e=A.filter((function(e){return"apples"===e})),c=A.filter((function(e){return"pears"===e})),s=A.filter((function(e){return"cashews"===e})),a=A.filter((function(e){return"trailMix"===e})),n=A.filter((function(e){return"chips"===e}));A.includes(t.name)&&(t.stock=t.stock+e.length,console.log(t.stock),t.stock>10)||A.includes(i.name)&&(i.stock=i.stock+c.length,console.log(i.stock),i.stock>15)||A.includes(m.name)&&(m.stock=m.stock+s.length,console.log(m.stock),m.stock>20)||A.includes(d.name)&&(d.stock=d.stock+a.length,console.log(d.stock),d.stock>20)||A.includes(k.name)&&(k.stock=k.stock+n.length,console.log(k.stock),k.stock>5)||(T([]),E([]))},className:"card-link",children:"Clear Cart"}),Object(o.jsx)("a",{href:"#",onClick:function(){T([]),H("Thank you for your total of $".concat(C)),setTimeout((function(){return H("")}),5e3),setTimeout((function(){return v(0)}),5e3)},className:"card-link",children:"Check Out"})]})})]}),Object(o.jsx)("p",{id:"status",children:Object(o.jsx)("strong",{children:F})})]})})]})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))},9:function(e,c,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.70916e2b.chunk.js.map