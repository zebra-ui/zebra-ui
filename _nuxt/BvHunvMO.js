import d from"./CJP_ga4_.js";import{k as l,l as c,q as p}from"./B5Qn1AbO.js";import"./D2M6j88b.js";import"./CQEYvhT-.js";const u=(r,t)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:r,data:t},null,2)),y=l({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(r){const t=c(),{path:f,query:a}=r,n={...a||{},path:f||(a==null?void 0:a.path)||"/"};return p(d,n,{default:t!=null&&t.default?({data:e,refresh:o,isPartial:m})=>t.default({list:e,refresh:o,isPartial:m,...this.$attrs}):e=>u("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):u("default",e==null?void 0:e.data),"not-found":e=>{var o;return t!=null&&t["not-found"]?(o=t==null?void 0:t["not-found"])==null?void 0:o.call(t,e):u("not-found",e==null?void 0:e.data)}})}}),S=y;export{S as default};
