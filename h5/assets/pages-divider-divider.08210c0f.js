import{d as t,o as e,c as a,w as s,x as l,p as o,n as i,G as d,y as r,L as n,i as c,_ as u,m as f,E as _,a as v,b as m,M as p}from"./index-f30f5313.js";import{t as h,s as y,i as b,j as g,r as j,_ as x}from"./DemoPage.cf3c40e0.js";const D=u(t({name:"ZDivider",options:{virtualHost:!0},props:{dashed:Boolean,hairline:h,vertical:Boolean,contentPosition:y("center"),customStyle:Object},setup(t){const[u,f]=b("divider");g(u);const _=t,v=n();return(n,u)=>{const m=c;return e(),a(m,{class:i(d(f)({dashed:_.dashed,hairline:_.hairline,vertical:_.vertical,[`content-${_.contentPosition}`]:!!d(v).slots.default&&!_.vertical})),style:r(t.customStyle)},{default:s((()=>[_.vertical?o("",!0):l(n.$slots,"default",{key:0},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-6cd778aa"]]);const P=u({},[["render",function(t,l){const o=j(f("z-divider"),D),i=_("demo-block"),d=c,r=j(f("DemoPage"),x);return e(),a(r,{title:"Divider"},{default:s((()=>[v(d,{class:"demo-divider"},{default:s((()=>[v(i,{title:"基础用法"},{default:s((()=>[v(o)])),_:1}),v(i,{title:"展示文本"},{default:s((()=>[v(o,null,{default:s((()=>[m(" 文字 ")])),_:1})])),_:1}),v(i,{title:"内容位置"},{default:s((()=>[v(o,{"content-position":"left"},{default:s((()=>[m(" 文字 ")])),_:1}),v(o,{"content-position":"right"},{default:s((()=>[m(" 文字 ")])),_:1})])),_:1}),v(i,{title:"虚线"},{default:s((()=>[v(o,{dashed:"",hairline:!1},{default:s((()=>[m(" 文字 ")])),_:1})])),_:1}),v(i,{title:"自定义样式"},{default:s((()=>[v(o,{"custom-style":{borderColor:"#1989fa",color:"#1989fa",padding:"0 32rpx"}},{default:s((()=>[m(" 文字 ")])),_:1})])),_:1}),v(i,{title:"垂直"},{default:s((()=>[p("div",{class:"content"},[v(o,{vertical:""}),m(" 文字 "),v(o,{vertical:"",dashed:""}),m(" 文字 "),v(o,{vertical:"",hairline:!1}),m(" 文字 "),v(o,{vertical:"","custom-style":{borderColor:"#1989fa"}})])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-b7481d71"]]);export{P as default};