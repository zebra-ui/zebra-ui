import{d as s,D as o,o as a,c as e,w as l,a as t,y as r,n,G as c,x as i,z as u,p as m,i as p,_ as d}from"./index-f30f5313.js";import{t as y,s as f,i as g,j as x,z as b,M as k,e as v}from"./DemoPage.cf3c40e0.js";const z=d(s({name:"ZTag",options:{virtualHost:!0},props:{size:String,mark:Boolean,show:y,type:f("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean},emits:["close"],setup(s,{emit:d}){const[y,f]=g("tag");x(y);const z=s,_=d,w=s=>{_("close",s)},C=o((()=>z.plain?{color:z.textColor||z.color,borderColor:z.color}:{color:z.textColor,background:z.color})),h=o((()=>{const s={mark:z.mark,plain:z.plain,round:z.round};return z.size&&(s[z.size]=z.size),s})),B=o((()=>({display:"inline-flex"})));return(o,d)=>{const y=p;return a(),e(v,{show:z.show,name:z.closeable?"fade":"","custom-style":B.value},{default:l((()=>[t(y,{style:r(C.value),class:n(c(f)([h.value,s.type]))},{default:l((()=>[i(o.$slots,"default",{},void 0,!0),s.closeable?(a(),e(b,{key:0,name:"close","custom-style":{"margin-left":"4rpx"},"custom-class":[c(k)],onClick:u(w,["stop"])},null,8,["custom-class"])):m("",!0)])),_:3},8,["style","class"])])),_:3},8,["show","name","custom-style"])}}}),[["__scopeId","data-v-89b418a4"]]);export{z as _};
