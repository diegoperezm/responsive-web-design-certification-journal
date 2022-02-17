(this["webpackJsonpresponsive-web-design-certification-journal"]=this["webpackJsonpresponsive-web-design-certification-journal"]||[]).push([[0],{184:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(0),n=a.n(c),s=a(23),o=a.n(s),i=(a(53),a(24)),d=(a(83),a(76)),j=a(189),l=a(187),b=a(75),h=a(14),u=a(6),m=a(10),O=a(7),x=new Date,g=(x.getMonth(),"".concat(x.toLocaleString("en-US",{month:"long"}))),v="".concat(x.toLocaleString("en-US",{weekday:"long"})),y="".concat(x.toLocaleString("en-US",{day:"numeric"})),p="".concat(x.toLocaleString("en-US",{year:"numeric"})),f="rgba(0,   120, 200, 1)",N="rgba(0,   200,   0, 1)",P="rgba(170,   0, 200, 1)",k="rgba(255, 190,   0, 1)",C="rgba(255, 100,   0, 1)",T={labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"Tribute Page",backgroundColor:f,borderColor:f,borderWidth:1,hoverBackgroundColor:"rgba(0,   120, 200, 0.5)",hoverBorderColor:f,minBarLength:1},{label:"Survey Form",backgroundColor:N,borderColor:N,borderWidth:1,hoverBackgroundColor:"rgba(0,   200,   0, 0.5)",hoverBorderColor:N,minBarLength:1},{label:"Product Landing Page",backgroundColor:P,borderColor:P,borderWidth:1,hoverBackgroundColor:"rgba(170,   0, 200, 0.5)",hoverBorderColor:P,minBarLength:1},{label:"Technical Documentation Page",backgroundColor:k,borderColor:k,borderWidth:1,hoverBackgroundColor:"rgba(255, 190,   0, 0.5)",hoverBorderColor:k,minBarLength:1},{label:"Personal Portfolio Webpage",backgroundColor:C,borderColor:C,borderWidth:1,hoverBackgroundColor:"rgba(255, 100,   0, 0.5)",hoverBorderColor:C,minBarLength:1}]},S={currentDayName:v,currentMonthName:g,currentDayNumber:y,comments:"",start1:"",start2:"",start3:"",start4:"",end1:"",end2:"",end3:"",end4:"",project1:"",project2:"",project3:"",project4:"",totalHrs:0},D={"Tribute Page":{hours:0,minutes:0},"Survey Form":{hours:0,minutes:0},"Product Landing Page":{hours:0,minutes:0},"Technical Documentation Page":{hours:0,minutes:0},"Personal Portfolio Webpage":{hours:0,minutes:0}},M=[{monthName:"January",days:[],totalTime:D},{monthName:"February",days:[],totalTime:D},{monthName:"March",days:[],totalTime:D},{monthName:"April",days:[],totalTime:D},{monthName:"May",days:[],totalTime:D},{monthName:"June",days:[],totalTime:D},{monthName:"July",days:[],totalTime:D},{monthName:"August",days:[],totalTime:D},{monthName:"September",days:[],totalTime:D},{monthName:"October",days:[],totalTime:D},{monthName:"November",days:[],totalTime:D},{monthName:"December",days:[],totalTime:D}],B={day:Object(m.a)({},g,Object(m.a)({},y,Object(O.a)({},S))),today:Object(O.a)({},S),year:M},F=a(193);function L(e,t){var a,r,c=e.split(":"),n=t.split(":");return+c[0]>+n[0]?r=60*(24-(+c[0]-+n[0]))+(+c[1]+ +n[1]):(a=60*+c[0]+ +c[1],r=60*+n[0]+ +n[1]-a),r}function A(e){var t;switch(e){case"January":t=0;break;case"February":t=1;break;case"March":t=2;break;case"April":t=3;break;case"May":t=4;break;case"June":t=5;break;case"July":t=6;break;case"August":t=7;break;case"September":t=8;break;case"October":t=9;break;case"November":t=10;break;case"December":t=11}return t}function W(e,t){for(var a=A(e),r=new Date(p,a,0).getDate(),c=function(e,t){return new Date(e,t).getDay()}(p,a),n=new Array(r+c).fill(""),s=0;s<t.length;s++)n[c-1+(t[s].dayNumber-1)]=t[s].dayNumber;return n}function w(e,t){for(var a=W(e,t).map((function(t){return""!==t?Object(r.jsx)("td",{children:J(e,t)},Object(F.a)()):Object(r.jsx)("td",{children:" "},Object(F.a)())})),c=[],n=0;n<a.length;n++)n%7===0&&c.push([]),c[c.length-1].push(a[n]);return c.map((function(e){return Object(r.jsx)("tr",{children:e},Object(F.a)())}))}function J(e,t){return Object(r.jsx)(h.b,{className:"inactive",activeClassName:"active-b",exact:!0,to:"/day/".concat(e,"/").concat(t),children:t})}var H=a(190),E=a(191);function I(){return Object(r.jsx)("div",{className:"dashboard",children:Object(r.jsxs)(H.a,{bg:"light",variant:"light",expand:"lg",children:[Object(r.jsx)(H.a.Brand,{href:"/responsive-web-design-certification-journal/",children:"Journal"}),Object(r.jsx)(H.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsx)(H.a.Collapse,{id:"basic-navbar-nav",children:Object(r.jsxs)(E.a,{className:"mr-auto",children:[Object(r.jsx)(h.b,{className:"inactive",activeClassName:"active-b",replace:!0,exact:!0,to:"/today",children:"TODAY"}),Object(r.jsx)(h.b,{className:"inactive",activeClassName:"active-b",replace:!0,exact:!0,to:"/".concat(g,"/"),children:"MONTH"}),Object(r.jsx)(h.b,{className:"inactive",activeClassName:"active-b",replace:!0,exact:!0,to:"/year",children:"YEAR"}),Object(r.jsx)(h.b,{className:"inactive",activeClassName:"active-b",replace:!0,exact:!0,to:"/graph",children:"GRAPH"})]})})]})})}var R=a(192),U=a(186),Y=a(188),Z=a(74);function G(e){var t=e.id,a=e.handleChange,c="start"+e.id,n=e.data["start"+e.id],s="end"+e.id,o=e.data["end"+e.id],i="project"+e.id,d=e.data["project"+e.id];return Object(r.jsxs)("tr",{id:t,children:[Object(r.jsx)("td",{children:Object(r.jsxs)(R.a.Control,{as:"select",name:i,value:d,onChange:a,children:[Object(r.jsx)("option",{disabled:!0,value:"",children:"Choose ..."}),Object(r.jsx)("option",{value:"Tribute Page",children:"Tribute Page"}),Object(r.jsx)("option",{value:"Survey Form",children:"Survey Form"}),Object(r.jsx)("option",{value:"Product Landing Page",children:"Product Landing  Page"}),Object(r.jsx)("option",{value:"Technical Documentation Page",children:"Technical Documentation  Page"}),Object(r.jsx)("option",{value:"Personal Portfolio Webpage",children:"Personal Portfolio Webpage"})]})}),Object(r.jsx)("td",{children:Object(r.jsx)(R.a.Control,{type:"text",disabled:""===d,name:c,value:n,onChange:a,placeholder:"hh:mm"})}),Object(r.jsx)("td",{children:Object(r.jsx)(R.a.Control,{type:"text",disabled:""===d,onChange:a,name:s,value:o,placeholder:"hh:mm"})})]})}function q(e){var t=e.handleChange,a=e.data;return Object(r.jsx)(R.a,{id:"myForm",children:Object(r.jsxs)(U.a,{bordered:!0,hover:!0,responsive:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Project"}),Object(r.jsx)("th",{children:"Start"}),Object(r.jsx)("th",{children:"End"})]})}),Object(r.jsxs)("tbody",{children:[Object(r.jsx)(G,{id:1,handleChange:t,data:a}),Object(r.jsx)(G,{id:2,handleChange:t,data:a}),Object(r.jsx)(G,{id:3,handleChange:t,data:a}),Object(r.jsx)(G,{id:4,handleChange:t,data:a})]})]})})}function z(e){var t=e.data.currentDayName,a=e.data.currentMonthName,c=e.data.currentDayNumber,n=e.data,s=void 0===n.totalHrs.hours?0:n.totalHrs.hours,o=void 0===n.totalHrs.minutes?0:n.totalHrs.minutes,i="".concat(s," hours,  ").concat(o," minutes"),d=e.data.comments,j=e.handleChange;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.a,{children:Object(r.jsx)(b.a,{children:Object(r.jsxs)("h2",{className:"mb-5 currentDate",children:[t,", ",a," ",c]})})}),Object(r.jsx)(l.a,{children:Object(r.jsx)(b.a,{children:Object(r.jsx)(q,{handleChange:j,data:n})})}),Object(r.jsx)(l.a,{children:Object(r.jsx)(b.a,{children:Object(r.jsxs)("p",{className:"float-right primary",children:["Total: ",i]})})}),Object(r.jsx)(l.a,{children:Object(r.jsxs)(b.a,{children:[Object(r.jsx)("h3",{className:"commentsTitle",children:"Comments: "}),Object(r.jsx)(Y.a,{children:Object(r.jsx)(Z.a,{as:"textarea",className:"mt-1 mb-5 commentBox",placeholder:"This area is for comments.\rTo enable <Start> and <End> field: select a <Project> ",value:d,name:"comments",onChange:j})})]})})]})}function K(e){var t=Object(u.f)().pathname.split("/"),a=e.data[t[2]][t[3]],c=void 0===a.totalHrs.hours?0:a.totalHrs.hours,n=void 0===a.totalHrs.minutes?0:a.totalHrs.minutes,s="".concat(c," hours,  ").concat(n," minutes");return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h2",{className:"mb-5 currentDate",children:[a.currentDayName,", ",a.currentMonthName," ",a.currentDayNumber]}),Object(r.jsxs)(U.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Start"}),Object(r.jsx)("th",{children:"End"}),Object(r.jsx)("th",{children:"Project"})]})}),Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsxs)("td",{children:[" ",a.start1,"  "]}),Object(r.jsxs)("td",{children:[" ",a.end1,"    "]}),Object(r.jsxs)("td",{children:[" ",a.project1]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsxs)("td",{children:[" ",a.start2,"  "]}),Object(r.jsxs)("td",{children:[" ",a.end2,"    "]}),Object(r.jsxs)("td",{children:[" ",a.project2]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsxs)("td",{children:[" ",a.start3,"  "]}),Object(r.jsxs)("td",{children:[" ",a.end3,"   "]}),Object(r.jsxs)("td",{children:[" ",a.project3]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsxs)("td",{children:[" ",a.start4,"  "]}),Object(r.jsxs)("td",{children:[" ",a.end4,"    "]}),Object(r.jsxs)("td",{children:[" ",a.project4]})]})]})]}),Object(r.jsxs)("p",{className:"float-right",children:["Total:",s]}),Object(r.jsx)("h3",{className:"mt-5 commentsTitle",children:"Comments:"}),Object(r.jsx)("p",{className:"p-4 comments",style:{border:"2px dashed black"},children:a.comments})]})}function Q(e){var t=e.data.map((function(e){var t=function(){return w(e.monthName,e.days)};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"mt-3 currentMonth",children:e.monthName}),Object(r.jsxs)(U.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"M"}),Object(r.jsx)("th",{children:"T"}),Object(r.jsx)("th",{children:"W"}),Object(r.jsx)("th",{children:"T"}),Object(r.jsx)("th",{children:"F"}),Object(r.jsx)("th",{children:"S"}),Object(r.jsx)("th",{children:"S"})]})}),Object(r.jsx)("tbody",{children:Object(r.jsx)(t,{})})]})]},Object(F.a)())}));return Object(r.jsx)(r.Fragment,{children:t})}function V(e){var t=e.data.monthName,a=e.data.days,c=function(){return w(t,a)};return Object(r.jsxs)(U.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"M"}),Object(r.jsx)("th",{children:"T"}),Object(r.jsx)("th",{children:"W"}),Object(r.jsx)("th",{children:"T"}),Object(r.jsx)("th",{children:"F"}),Object(r.jsx)("th",{children:"S"}),Object(r.jsx)("th",{children:"S"})]})}),Object(r.jsx)("tbody",{children:Object(r.jsx)(c,{})})]})}function X(e){var t=e.data.monthName,a=e.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{className:"mb-4 currentMonth",children:t}),Object(r.jsx)(V,{data:a})]})}var $=a(37);function _(e){var t=e.data,a=function(e,t){for(var a=t.map((function(e){return e.totalTime})),r=[],c=[],n=[],s=[],o=[],i=0;i<a.length;i++)r[i]=(60*a[i]["Tribute Page"].hours+a[i]["Tribute Page"].minutes)/60;for(var d=0;d<a.length;d++)c[d]=(60*a[d]["Survey Form"].hours+a[d]["Survey Form"].minutes)/60;for(var j=0;j<a.length;j++)n[j]=(60*a[j]["Product Landing Page"].hours+a[j]["Product Landing Page"].minutes)/60;for(var l=0;l<a.length;l++)s[l]=(60*a[l]["Technical Documentation Page"].hours+a[l]["Technical Documentation Page"].minutes)/60;for(var b=0;b<a.length;b++)o[b]=(60*a[b]["Personal Portfolio Webpage"].hours+a[b]["Personal Portfolio Webpage"].minutes)/60;return e.datasets[0].data=r,e.datasets[1].data=c,e.datasets[2].data=n,e.datasets[3].data=s,e.datasets[4].data=o,e}(T,t);return Object(r.jsx)("div",{className:"mb-5 canvas-container",children:Object(r.jsx)($.Bar,{data:a,options:{scales:{yAxes:[{stacked:!0,ticks:{beginAtZero:!0}}],xAxes:[{stacked:!0,ticks:{beginAtZero:!0}}]}}})})}function ee(){var e=A(g),t=Object(c.useState)((function(){return function(e,t){var a=JSON.parse(localStorage.getItem("rwdc2021"))||e;return a.year[t].days.some((function(e){return e.dayNumber===parseInt(y)}))||a.year[t].days.push({dayNumber:parseInt(y),totalTime:D}),void 0===a.day[g]&&(console.log("if data [currentmonthname] .... undefined"),a=Object(O.a)(Object(O.a)({},a),{},{day:Object(O.a)(Object(O.a)({},a.day),{},Object(m.a)({},g,Object(m.a)({},y,Object(O.a)({},a.today))))})),void 0===a.day[g][y]&&(console.log("if data [currentmonthname][currentDayNumber] .... undefined"),a=Object(O.a)(Object(O.a)({},a),{},{day:Object(O.a)(Object(O.a)({},a.day),{},Object(m.a)({},g,Object(O.a)(Object(O.a)({},a.day[g]),{},Object(m.a)({},y,Object(O.a)({},S))))),today:Object(O.a)({},S)})),a}(B,e)})),a=Object(i.a)(t,2),n=a[0],s=a[1];Object(c.useEffect)((function(){localStorage.setItem("rwdc2021",JSON.stringify(n))}),[n]);var o=Object(c.useCallback)((function(t){var a=t.target.value,r=t.target.name,c=n.year[e].days,o=function(e,t,a){var r=e.start1,c=e.end1,n=e.start2,s=e.end2,o=e.start3,i=e.end3,d=e.start4,j=e.end4;switch(t){case"start1":r=a;break;case"end1":c=a;break;case"start2":n=a;break;case"end2":s=a;break;case"start3":o=a;break;case"end3":i=a;break;case"start4":d=a;break;case"end4":j=a}var l=[L(r,c),L(n,s),L(o,i),L(d,j)].filter((function(e){return!isNaN(e)})).reduce((function(e,t){return e+t}),0);return{hours:Math.floor(l/60),minutes:l%60}}(n.today,r,a),j=function(e,t,a){var r=e.start1,c=e.end1,n=e.start2,s=e.end2,o=e.start3,d=e.end3,j=e.start4,l=e.end4,b=e.project1,h=e.project2,u=e.project3,x=e.project4;switch(t){case"start1":r=a;break;case"end1":c=a;break;case"start2":n=a;break;case"end2":s=a;break;case"start3":o=a;break;case"end3":d=a;break;case"start4":j=a;break;case"end4":l=a;break;case"project1":b=a;break;case"project2":h=a;break;case"project3":u=a;break;case"project4":x=a}for(var g=L(r,c),v=L(n,s),y=L(o,d),p=L(j,l),f=isNaN(g)?0:Math.floor(g/60),N=isNaN(v)?0:Math.floor(v/60),P=isNaN(y)?0:Math.floor(y/60),k=isNaN(p)?0:Math.floor(p/60),C=isNaN(g)?0:g%60,T=isNaN(v)?0:v%60,S=isNaN(y)?0:y%60,D=isNaN(p)?0:p%60,M=""===b?{}:Object(m.a)({},b,{hours:f,minutes:C}),B=""===h?{}:Object(m.a)({},h,{hours:N,minutes:T}),F=""===u?{}:Object(m.a)({},u,{hours:P,minutes:S}),A=""===x?{}:Object(m.a)({},x,{hours:k,minutes:D}),W={"Tribute Page":{hours:0,minutes:0},"Survey Form":{hours:0,minutes:0},"Product Landing Page":{hours:0,minutes:0},"Technical Documentation Page":{hours:0,minutes:0},"Personal Portfolio Webpage":{hours:0,minutes:0}},w=[Object(O.a)({},M),Object(O.a)({},B),Object(O.a)({},F),Object(O.a)({},A)],J=0;J<w.length;J++)for(var H=0,E=Object.entries(w[J]);H<E.length;H++){var I=Object(i.a)(E[H],2),R=I[0],U=I[1];Object.assign(W,Object(m.a)({},R,{hours:W[R].hours+U.hours,minutes:W[R].minutes+U.minutes}))}return W}(n.today,r,a),l=function(e,t,a){for(var r={},c={"Tribute Page":{hours:0,minutes:0},"Survey Form":{hours:0,minutes:0},"Product Landing Page":{hours:0,minutes:0},"Technical Documentation Page":{hours:0,minutes:0},"Personal Portfolio Webpage":{hours:0,minutes:0}},n=e.filter((function(e){return e.dayNumber!==+t})).map((function(e){return e.totalTime})),s=0;s<n.length;s++)for(var o=0,d=Object.entries(n[s]);o<d.length;o++){var j=Object(i.a)(d[o],2),l=j[0],b=j[1];Object.assign(c,Object(m.a)({},l,{hours:c[l].hours+b.hours,minutes:c[l].minutes+b.minutes}))}for(var h=0,u=Object.entries(a);h<u.length;h++){var O=Object(i.a)(u[h],2),x=O[0],g=O[1];Object.assign(r,Object(m.a)({},x,{hours:c[x].hours+g.hours,minutes:c[x].minutes+g.minutes}))}return r}(c,y,j),b=n.year[e].days.map((function(e){return e.dayNumber})).indexOf(parseInt(y));s(Object(d.a)((function(r){r.day[g][y][t.target.name]=a,r.day[g][y].totalHrs={hours:o.hours,minutes:o.minutes},r.today[t.target.name]=a,r.today.totalHrs={hours:o.hours,minutes:o.minutes},r.year[e].days[b].totalTime=j,r.year[e].totalTime=l})))}),[n,e]);return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(h.a,{children:[Object(r.jsx)(I,{}),Object(r.jsxs)(j.a,{children:[Object(r.jsx)("h1",{className:"mt-5 mb-5 title",children:Object(r.jsx)("u",{children:"Responsive Web Design Certification:"})}),Object(r.jsx)(l.a,{children:Object(r.jsx)(b.a,{children:Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{exact:!0,path:"/",children:Object(r.jsx)(z,{data:n.today,handleChange:o})}),Object(r.jsx)(u.a,{exact:!0,path:"/today",children:Object(r.jsx)(z,{data:n.today,handleChange:o})}),Object(r.jsx)(u.a,{exact:!0,path:"/".concat(g),children:Object(r.jsx)(X,{data:n.year[e]})}),Object(r.jsx)(u.a,{exact:!0,path:"/year",children:Object(r.jsx)(Q,{data:n.year})}),Object(r.jsx)(u.a,{path:"/graph",children:Object(r.jsx)(_,{data:n.year})}),Object(r.jsx)(u.a,{path:"/day/",children:Object(r.jsx)(K,{data:n.day})})]})})})]})]})})}$.defaults.global.animation=!1,$.defaults.global.maintainAspectRatio=!1,o.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(ee,{})}),document.getElementById("root"))},53:function(e,t,a){}},[[184,1,2]]]);
//# sourceMappingURL=main.1618fcbb.chunk.js.map