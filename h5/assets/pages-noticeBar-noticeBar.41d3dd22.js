import{d as e,a5 as t,D as a,I as s,l as o,ae as l,af as i,o as r,c as n,w as c,G as u,x as d,p,a as f,n as b,y as m,e as w,F as z,b as h,t as y,L as _,i as g,_ as x,m as k,E as v}from"./index-f30f5313.js";import{m as j,i as S,j as I,v as $,z as B,C as D,F as P,x as C,I as T,r as F,_ as N}from"./DemoPage.cf3c40e0.js";import{_ as W,a as A}from"./z-swipe.52e20c50.js";import"./useParent.17bb91a9.js";import"./useChildren.47d4431b.js";import"./use-touch.6469fcb8.js";const E=x(e({name:"ZNoticeBar",options:{virtualHost:!0},props:{text:String,mode:String,color:String,delay:j(1),speed:j(60),leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:!1}},emits:["close","replay"],setup(e,{emit:x}){const[k,v]=S("notice-bar");I(k);const j=_(),F=e,N=x;let W,A=0,E=0;const G=t({show:!0,offset:0,duration:0}),H=()=>"closeable"===F.mode?"close":"link"===F.mode?"right-big":void 0,L=e=>{"closeable"===F.mode&&(G.show=!1,N("close",e))},X=()=>{G.offset=A,G.duration=0,D((()=>{P((()=>{G.offset=-E,G.duration=(E+A)/+F.speed,N("replay")}))}))},Z=()=>{const{delay:e,speed:t,scrollable:a}=F,s=T(e)?1e3*+e:0;A=0,E=0,G.offset=0,G.duration=0,clearTimeout(W),W=setTimeout((()=>{!1!==a&&Promise.all([C(j,".z-notice-wrap"),C(j,".z-notice-content")]).then((([e,s])=>{const o=e.width,l=s.width;(a||l>o)&&P((()=>{A=o,E=l,G.offset=-E,G.duration=E/+t}))}))}),s)},q=a((()=>({minWidth:"var(--z-notice-bar-icon-min-width)",fontSize:"var(--z-notice-bar-icon-size)"}))),J=a((()=>({minWidth:"var(--z-notice-bar-icon-min-width)",fontSize:"var(--z-notice-bar-icon-size)",textAlign:"right",cursor:"pointer"})));return $({reset:Z}),s((()=>{Z()})),o((()=>[F.text,F.scrollable]),Z),(t,a)=>{const s=g;return l((r(),n(s,{class:b(u(v)({wrapable:e.wrapable})),style:m({color:e.color,background:e.background})},{default:c((()=>[u(j).slots["left-icon"]?d(t.$slots,"left-icon",{key:0},void 0,!0):F.leftIcon?(r(),n(B,{key:1,"custom-style":q.value,name:F.leftIcon},null,8,["custom-style","name"])):p("",!0),f(s,{class:b(["z-notice-wrap",u(v)("wrap")])},{default:c((()=>[f(s,{class:b(["z-notice-content",[u(v)("content"),{"z-ellipsis":!1===F.scrollable&&!F.wrapable}]]),style:m({transform:G.offset?`translateX(${G.offset}px)`:"",transitionDuration:`${G.duration}s`}),onTransitionend:X},{default:c((()=>[u(j).slots.default?d(t.$slots,"default",{key:0},void 0,!0):(r(),w(z,{key:1},[h(y(F.text),1)],64))])),_:3},8,["style","class"])])),_:3},8,["class"]),u(j).slots["right-icon"]?d(t.$slots,"right-icon",{key:2},void 0,!0):H()?(r(),n(B,{key:3,"custom-style":J.value,name:H(),onClick:L},null,8,["custom-style","name"])):p("",!0)])),_:3},8,["class","style"])),[[i,G.show]])}}}),[["__scopeId","data-v-6897e4c1"]]);const G=x({},[["render",function(e,t){const a=F(k("z-notice-bar"),E),s=v("demo-block"),o=F(k("z-swipe-item"),W),l=F(k("z-swipe"),A),i=g,u=F(k("DemoPage"),N);return r(),n(u,{title:"NoticeBar"},{default:c((()=>[f(i,{class:"demo-notice-bar"},{default:c((()=>[f(s,{title:"基础用法"},{default:c((()=>[f(a,{"left-icon":"sound",scrollable:"",text:"zebra-swiper是基于uniapp开发的一款移动端轮播组件。"})])),_:1}),f(s,{title:"滚动播放"},{default:c((()=>[f(a,{scrollable:"",text:"zebra-swiper是基于uniapp开发的一款移动端轮播组件。"}),f(a,{scrollable:!1,text:"zebra-swiper是基于uniapp开发的一款移动端轮播组件。"})])),_:1}),f(s,{title:"多行展示"},{default:c((()=>[f(a,{wrapable:"",scrollable:!1,text:"zebra-swiper是基于uniapp开发的一款移动端轮播组件。zebra-swiper是基于uniapp开发的一款移动端轮播组件。"})])),_:1}),f(s,{title:"通知栏模式"},{default:c((()=>[f(a,{mode:"closeable",text:"zebra-swiper是基于uniapp开发的一款移动端轮播组件。"}),f(a,{mode:"link",text:"zebra-swiper是基于uniapp开发的一款移动端轮播组件。"})])),_:1}),f(s,{title:"自定义样式"},{default:c((()=>[f(a,{text:"zebra-swiper是基于uniapp开发的一款移动端轮播组件。",color:"#1989fa",background:"#ecf9ff","left-icon":"setting"})])),_:1}),f(s,{title:"垂直滚动"},{default:c((()=>[f(a,{"left-icon":"sound",scrollable:!1},{default:c((()=>[f(l,{vertical:"","custom-style":{height:"80rpx","line-height":"80rpx"},autoplay:3e3,touchable:!1,"show-indicators":!1},{default:c((()=>[f(o,null,{default:c((()=>[h("zebra-swiper是基于uniapp开发的一款移动端轮播组件。")])),_:1}),f(o,null,{default:c((()=>[h("一款移动端轮播组件。")])),_:1}),f(o,null,{default:c((()=>[h("zebra-swiper")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}]]);export{G as default};
