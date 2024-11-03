import{d as e,D as a,N as t,k as l,A as s,I as i,o as u,c as o,w as n,a as r,n as c,G as v,b as d,t as h,L as g,O as m,P as p,C as f,i as w,_,m as y,E as k,p as b}from"./index-f30f5313.js";import{s as C,w as z,i as T,j as x,v as S,a as j,x as P,r as B,_ as D}from"./DemoPage.cf3c40e0.js";import{u as I}from"./use-id.cdfa0884.js";import{_ as W}from"./z-image.8605c909.js";import{u as L}from"./z-toast.1a41a7b4.js";import"./z-dialog.a22a98be.js";const R=_(e({name:"ZSignature",options:{virtualHost:!0},props:{tips:String,type:C("png"),penColor:C("#000"),lineWidth:z(3),clearButtonText:String,backgroundColor:C(""),confirmButtonText:String},emits:["submit","clear","start","end","signing"],setup(e,{emit:_}){const[y,k]=T("signature");x(y);const b=g();let C=!0;const z=e,B=I(),D=_,W=a((()=>{const e=t(B,b);return e||(C=!1,null)}));let L,R=0,A=0;const E=l(s().uniPlatform),F=e=>{if(!W.value)return!1;W.value.beginPath(),W.value.lineWidth=z.lineWidth,W.value.strokeStyle=z.penColor,P(b,`#${B}`).then((a=>{L=a;const t=e.touches[0];let l=t.clientX-((null==L?void 0:L.left)||0),s=t.clientY-((null==L?void 0:L.top)||0);"mp-alipay"==E.value&&(l=t.x,s=t.y),W.value&&W.value.moveTo(l,s)})),D("start")},G=e=>{if(!W.value)return!1;const a=e.touches[0],t=a.x,l=a.y;W.value.lineCap="round",W.value.lineJoin="round",W.value.lineTo(t,l),W.value.stroke(),W.value.draw(!0),W.value.moveTo(t,l),D("signing",e)},H=e=>{D("end")},J=e=>{e&&z.backgroundColor&&(e.fillStyle=z.backgroundColor,e.fillRect(0,0,R,A),e.draw())},N=()=>{const e=W.value;e&&m({canvasId:B,success:a=>{D("submit",{image:a.tempFilePath,width:R,height:A,canvas:e})},fail:e=>{console.error(e)}},b)},O=()=>{W.value&&(W.value.clearRect(0,0,R,A),W.value.closePath(),J(W.value),W.value.draw()),D("clear")},X=()=>{if(C&&W.value){const e=W.value,a=1;P(b,".z-signature__content").then((t=>{var l;R=e.width=(t.width||0)*a,A=e.height=(t.height||0)*a,null==(l=W.value)||l.scale(a,a),J(W.value)}))}},Y=a((()=>({padding:"0 var(--z-padding-md)",marginTop:"var(--z-padding-xs)",marginLeft:"var(--z-padding-xs)"})));return i(X),S({resize:()=>{W.value&&X()}}),(e,a)=>{const t=p,l=f,s=w;return u(),o(s,{class:c(v(k)())},{default:n((()=>[r(s,{class:c(v(k)("content"))},{default:n((()=>[v(C)?(u(),o(t,{key:0,id:v(B),"canvas-id":v(B),"disable-scroll":"",onTouchstartPassive:F,onTouchmove:G,onTouchend:H},null,8,["id","canvas-id"])):(u(),o(l,{key:1},{default:n((()=>[d(h(z.tips),1)])),_:1}))])),_:1},8,["class"]),r(s,{class:c(v(k)("footer"))},{default:n((()=>[r(j,{size:"small","custom-style":Y.value,onClick:O},{default:n((()=>[d(h(z.clearButtonText||"清空"),1)])),_:1},8,["custom-style"]),r(j,{type:"primary",size:"small","custom-style":Y.value,onClick:N},{default:n((()=>[d(h(z.confirmButtonText||"确认"),1)])),_:1},8,["custom-style"])])),_:1},8,["class"])])),_:1},8,["class"])}}}),[["__scopeId","data-v-b128b6f0"]]),A=e({__name:"signature",setup(e){const a=L(),t=l(""),s=l(""),i=l(""),c=l(""),v=l(""),d=l(""),h=l(""),g=l(""),m=l(""),p=l(""),f=l(""),_=l(""),C=e=>{t.value=e.image,s.value=e.width,i.value=e.height},z=e=>{c.value=e.image,v.value=e.width,d.value=e.height},T=e=>{h.value=e.image,g.value=e.width,m.value=e.height},x=e=>{p.value=e.image,f.value=e.width,_.value=e.height},S=()=>a.showToast("clear");return(e,a)=>{const l=B(y("z-signature"),R),j=B(y("z-image"),W),P=k("demo-block"),I=w,L=B(y("DemoPage"),D);return u(),o(L,{title:"Signature"},{default:n((()=>[r(I,{class:"demo-signature"},{default:n((()=>[r(P,{title:"基础用法"},{default:n((()=>[r(l,{onSubmit:C,onClear:S}),t.value?(u(),o(j,{key:0,width:s.value,height:i.value,src:t.value},null,8,["width","height","src"])):b("",!0)])),_:1}),r(P,{title:"自定义颜色"},{default:n((()=>[r(l,{"pen-color":"#ff0000",onSubmit:z,onClear:S}),c.value?(u(),o(j,{key:0,width:v.value,height:d.value,src:c.value},null,8,["width","height","src"])):b("",!0)])),_:1}),r(P,{title:"自定义线宽"},{default:n((()=>[r(l,{"line-width":10,onSubmit:T,onClear:S}),h.value?(u(),o(j,{key:0,width:g.value,height:m.value,src:h.value},null,8,["width","height","src"])):b("",!0)])),_:1}),r(P,{title:"自定义背景颜色"},{default:n((()=>[r(l,{"background-color":"#eee",onSubmit:x,onClear:S}),p.value?(u(),o(j,{key:0,width:f.value,height:_.value,src:p.value},null,8,["width","height","src"])):b("",!0)])),_:1})])),_:1})])),_:1})}}});export{A as default};