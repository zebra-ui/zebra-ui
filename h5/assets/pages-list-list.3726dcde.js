import{d as e,k as s,T as i,D as l,A as a,l as t,am as o,I as r,B as d,a9 as n,s as u,o as f,c as h,w as c,x as v,n as g,G as m,b as p,t as _,p as k,e as z,F as x,L as y,ad as b,ag as j,i as T,_ as $,$ as w,m as L,a as B,r as C}from"./index-f30f5313.js";import{_ as S}from"./z-cell.b545d216.js";import{m as U,s as V,t as D,i as I,j as P,v as A,c as H,x as F,C as G,a1 as O,r as R,_ as Z}from"./DemoPage.cf3c40e0.js";import{_ as q,a as E}from"./z-tabs.b35f9c58.js";import{_ as J}from"./z-pull-refresh.e7b6de86.js";import"./useParent.17bb91a9.js";import"./use-id.cdfa0884.js";import"./useChildren.47d4431b.js";import"./use-touch.6469fcb8.js";import"./z-sticky.f67df7ce.js";const K=$(e({name:"ZList",options:{virtualHost:!0},props:{error:Boolean,offset:U(30),loading:Boolean,disabled:Boolean,finished:Boolean,scroller:Object,errorText:String,direction:V("down"),loadingText:String,finishedText:String,immediateCheck:D,id:String},emits:["load","update:error","update:loading"],setup(e,{expose:$,emit:w}){const[L,B]=I("list");P(L);const C=y(),S=e,U=w,V=s(S.loading),D=i("z-tab"),O=l((()=>a().windowHeight)),R=()=>{b((()=>{if(V.value||S.finished||S.disabled||S.error||!1===(null==D?void 0:D.value))return void(q.value=!1);const{direction:e}=S,s=+S.offset;F(C,".z-list__placeholder").then((i=>{let l=!1;"up"===e||(l=i.bottom-O.value<=s),l&&(q.value=!1,V.value=!0,U("update:loading",!0),U("load"))}))}))},Z=()=>{U("update:error",!1),R()},q=s(!1);t((()=>[S.loading,S.finished,S.error]),R),D&&t(D,(e=>{e&&!q.value&&R()}));const E=()=>{R()};let J=s();return o((()=>{V.value=S.loading})),r((()=>{S.immediateCheck&&(q.value=!0,R()),G((()=>{null!=J.value&&J.value.disconnect();const e=j(C,{thresholds:[0,.5,1],observeAll:!0}).relativeToViewport();J.value=e,J.value.relativeToViewport({top:0,left:0}),J.value.observe(".z-list-rect",(e=>{}))})),d(`z-list-${S.id}`,E)})),n((()=>{u(`z-list-${S.id}`)})),A({check:R}),$({check:R}),(e,s)=>{const i=T;return f(),h(i,{class:g(["z-list-rect",m(B)()])},{default:c((()=>["down"===S.direction?v(e.$slots,"default",{key:0},void 0,!0):(f(),h(i,{key:1,class:g(m(B)("placeholder"))},null,8,["class"])),!V.value||S.finished||S.disabled?k("",!0):(f(),h(i,{key:2,class:g(m(B)("loading"))},{default:c((()=>[m(C).slots.loading?v(e.$slots,"loading",{key:0},void 0,!0):(f(),h(H,{key:1,size:"var(--z-list-loading-icon-size)"},{default:c((()=>[p(_(S.loadingText||"加载中"),1)])),_:1}))])),_:3},8,["class"])),S.finished&&(m(C).slots.finished||S.finishedText)?(f(),h(i,{key:3,class:g(m(B)("finished-text"))},{default:c((()=>[m(C).slots.finished?v(e.$slots,"finished",{key:0},void 0,!0):(f(),z(x,{key:1},[p(_(S.finishedText),1)],64))])),_:3},8,["class"])):k("",!0),S.error&&(m(C).slots.error||S.errorText)?(f(),h(i,{key:4,class:g(m(B)("error-text")),onClick:Z},{default:c((()=>[m(C).slots.error?v(e.$slots,"error",{key:0},void 0,!0):(f(),z(x,{key:1},[p(_(S.errorText),1)],64))])),_:3},8,["class"])):k("",!0),"up"===S.direction?v(e.$slots,"default",{key:5},void 0,!0):(f(),h(i,{key:6,class:g(m(B)("placeholder"))},null,8,["class"]))])),_:3},8,["class"])}}}),[["__scopeId","data-v-665fb417"]]),M=e({__name:"list",setup(e){const i=s([{items:[],refreshing:!1,loading:!1,error:!1,finished:!1},{items:[],refreshing:!1,loading:!1,error:!1,finished:!1},{items:[],refreshing:!1,loading:!1,error:!1,finished:!1}]);O((e=>{w("z-list-list1",e),w("z-list-list2",e),w("z-list-list3",e),w("z-pull-refresh-refresh1",e)}));const l=e=>{const s=i.value[e];s.loading=!0,setTimeout((()=>{s.refreshing&&(s.items=[],s.refreshing=!1);for(let e=0;e<10;e++){const e=s.items.length+1;s.items.push(e<10?"0"+e:String(e))}s.loading=!1,s.refreshing=!1,1!==e||10!==s.items.length||s.error?s.error=!1:s.error=!0,s.items.length>=40&&(s.finished=!0)}),2e3)};return(e,s)=>{const a=R(L("z-cell"),S),t=R(L("z-list"),K),o=R(L("z-tab"),q),r=R(L("z-pull-refresh"),J),d=R(L("z-tabs"),E),n=T,u=R(L("DemoPage"),Z);return f(),h(u,{title:"List"},{default:c((()=>[B(n,{class:"demo-list"},{default:c((()=>[B(d,{animated:"",sticky:"",swipeable:"","custom-navbar":""},{default:c((()=>[B(o,{title:"基础用法"},{default:c((()=>[B(t,{id:"list1",loading:i.value[0].loading,"onUpdate:loading":s[0]||(s[0]=e=>i.value[0].loading=e),finished:i.value[0].finished,"finished-text":"没有更多了",onLoad:s[1]||(s[1]=e=>l(0))},{default:c((()=>[(f(!0),z(x,null,C(i.value[0].items,(e=>(f(),h(a,{key:e,title:`单元格${e}`,value:"内容"},null,8,["title"])))),128))])),_:1},8,["loading","finished"])])),_:1}),B(o,{title:"错误提示"},{default:c((()=>[B(t,{id:"list2",loading:i.value[1].loading,"onUpdate:loading":s[2]||(s[2]=e=>i.value[1].loading=e),error:i.value[1].error,"onUpdate:error":s[3]||(s[3]=e=>i.value[1].error=e),finished:i.value[1].finished,"error-text":"请求失败，点击重新加载",onLoad:s[4]||(s[4]=e=>l(1))},{default:c((()=>[(f(!0),z(x,null,C(i.value[1].items,(e=>(f(),h(a,{key:e,title:`单元格${e}`,value:"内容"},null,8,["title"])))),128))])),_:1},8,["loading","error","finished"])])),_:1}),B(o,{title:"下拉刷新"},{default:c((()=>[B(r,{id:"refresh1",modelValue:i.value[2].refreshing,"onUpdate:modelValue":s[7]||(s[7]=e=>i.value[2].refreshing=e),onRefresh:s[8]||(s[8]=e=>{return s=2,i.value[s].finished=!1,void l(s);var s})},{default:c((()=>[B(t,{id:"list3",loading:i.value[2].loading,"onUpdate:loading":s[5]||(s[5]=e=>i.value[2].loading=e),finished:i.value[2].finished,"finished-text":"没有更多了",onLoad:s[6]||(s[6]=e=>l(2))},{default:c((()=>[(f(!0),z(x,null,C(i.value[2].items,(e=>(f(),h(a,{key:e,title:`单元格${e}`,value:"内容"},null,8,["title"])))),128))])),_:1},8,["loading","finished"])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})}}});export{M as default};
