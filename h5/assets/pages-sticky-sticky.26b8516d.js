import{d as t,k as e,I as a,u as l,m as s,E as o,o as r,c,w as i,a as u,b as d,i as f,S as n,_ as p}from"./index-f30f5313.js";import{r as _,a as m,_ as y}from"./DemoPage.cf3c40e0.js";import{_ as g}from"./z-sticky.f67df7ce.js";import"./use-id.cdfa0884.js";const v=p(t({__name:"sticky",setup(t){const p=e({});a((()=>{l().select("#container").boundingClientRect((t=>{p.value=t})).exec()}));const v=e(0),b=e(0),k=t=>{l().select("#scroller").boundingClientRect((e=>{v.value=t.detail.scrollTop,b.value=e.top})).exec()};return(t,e)=>{const a=_(s("z-button"),m),l=_(s("z-sticky"),g),x=o("demo-block"),h=f,j=n,w=_(s("DemoPage"),y);return r(),c(w,{title:"Sticky"},{default:i((()=>[u(h,{class:"demo-sticky"},{default:i((()=>[u(x,{title:"基础用法"},{default:i((()=>[u(l,{"custom-navbar":""},{default:i((()=>[u(a,{type:"primary"},{default:i((()=>[d("基础用法")])),_:1})])),_:1})])),_:1}),u(x,{title:"吸顶距离"},{default:i((()=>[u(l,{"custom-navbar":"","offset-top":50},{default:i((()=>[u(a,{type:"primary","custom-style":{"margin-left":"30%"}},{default:i((()=>[d("基础用法")])),_:1})])),_:1})])),_:1}),u(x,{title:"指定容器"},{default:i((()=>[u(h,{id:"container",style:{height:"300rpx","background-color":"#fff"}},{default:i((()=>[u(l,{"custom-navbar":"",container:p.value},{default:i((()=>[u(a,{type:"warning","custom-style":{"margin-left":"300rpx"}},{default:i((()=>[d(" 指定容器 ")])),_:1})])),_:1},8,["container"])])),_:1})])),_:1}),u(x,{title:"嵌套在 scroll-view 内使用"},{default:i((()=>[u(j,{onScroll:k,"scroll-y":"",id:"scroller",style:{height:"400rpx","background-color":"#fff"}},{default:i((()=>[u(h,{style:{height:"800rpx","padding-top":"50px"}},{default:i((()=>[u(l,{"scroll-top":v.value,"offset-top":b.value},{default:i((()=>[u(a,{type:"danger"},{default:i((()=>[d(" 嵌套在 scroll-view 内 ")])),_:1})])),_:1},8,["scroll-top","offset-top"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-3a5039ce"]]);export{v as default};