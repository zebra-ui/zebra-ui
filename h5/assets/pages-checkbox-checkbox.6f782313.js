import{_ as e,a as l}from"./z-checkbox-group.5b81fd2c.js";import{d as a,k as t,m as u,E as o,o as d,c as m,w as n,a as s,b as c,e as f,r as _,F as i,i as r,q as p,z as V,t as b,_ as v}from"./index-f30f5313.js";import{r as h,a as k,_ as g}from"./DemoPage.cf3c40e0.js";import{_ as x}from"./z-cell.b545d216.js";import{_ as z}from"./z-cell-group.5d2aafb4.js";import"./useParent.17bb91a9.js";import"./index.3b818c1b.js";import"./z-checker.d45d130d.js";import"./useChildren.47d4431b.js";const U=v(a({__name:"checkbox",setup(a){const v=t(!0),U=t(!0),j=t(!1),C=t(["a","b"]),y=t(["a","b"]),P=t([]),q=t([]),A=t([]),D=["a","b","c"],w=["a","b","c","d"],E=t(null),F=()=>{E.value.toggleAll(!0)},G=()=>{E.value.toggleAll()},I=t([]),$=t(!1),B=t(["a","b","d"]),H=t(!0),J=e=>{B.value=e?w:[],H.value=!1},K=e=>{const l=e.length;$.value=l===w.length,H.value=l>0&&l<w.length};return(a,t)=>{const L=h(u("z-checkbox"),e),M=o("demo-block"),N=r,O=h(u("z-checkbox-group"),l),Q=p,R=h(u("z-button"),k),S=h(u("z-cell"),x),T=h(u("z-cell-group"),z),W=h(u("DemoPage"),g);return d(),m(W,{title:"Checkbox"},{default:n((()=>[s(N,{class:"demo-checkbox"},{default:n((()=>[s(M,{title:"基础用法"},{default:n((()=>[s(L,{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=e=>v.value=e)},{default:n((()=>[c("复选框")])),_:1},8,["modelValue"])])),_:1}),s(M,{title:"禁用状态"},{default:n((()=>[s(L,{modelValue:U.value,"onUpdate:modelValue":t[1]||(t[1]=e=>U.value=e),disabled:""},{default:n((()=>[c("复选框")])),_:1},8,["modelValue"]),s(N,{class:"checkbox-content"},{default:n((()=>[s(L,{modelValue:j.value,"onUpdate:modelValue":t[2]||(t[2]=e=>j.value=e),disabled:""},{default:n((()=>[c("复选框")])),_:1},8,["modelValue"])])),_:1})])),_:1}),s(M,{title:"自定义形状"},{default:n((()=>[s(O,{modelValue:C.value,"onUpdate:modelValue":t[3]||(t[3]=e=>C.value=e),shape:"square"},{default:n((()=>[s(L,{name:"a"},{default:n((()=>[c("复选框 a")])),_:1}),s(N,{class:"checkbox-content"},{default:n((()=>[s(L,{name:"b"},{default:n((()=>[c("复选框 b")])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1}),s(M,{title:"自定义颜色"},{default:n((()=>[s(L,{modelValue:v.value,"onUpdate:modelValue":t[4]||(t[4]=e=>v.value=e),"checked-color":"#ee0a24"},{default:n((()=>[c("复选框")])),_:1},8,["modelValue"])])),_:1}),s(M,{title:"自定义大小"},{default:n((()=>[s(L,{modelValue:v.value,"onUpdate:modelValue":t[5]||(t[5]=e=>v.value=e),"icon-size":"48rpx"},{default:n((()=>[c("复选框")])),_:1},8,["modelValue"])])),_:1}),s(M,{title:"自定义图标"},{default:n((()=>[s(L,{modelValue:v.value,"onUpdate:modelValue":t[6]||(t[6]=e=>v.value=e)},{icon:n((()=>[s(Q,{class:"img-icon",src:v.value?"https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png":"https://cdn.zebraui.com/zebra-ui/images/assets/demo-noselect.png"},null,8,["src"])])),default:n((()=>[c(" 自定义图标 ")])),_:1},8,["modelValue"])])),_:1}),s(M,{title:"左侧文本"},{default:n((()=>[s(L,{modelValue:v.value,"onUpdate:modelValue":t[7]||(t[7]=e=>v.value=e),"label-position":"left"},{default:n((()=>[c("复选框")])),_:1},8,["modelValue"])])),_:1}),s(M,{title:"禁用文本点击"},{default:n((()=>[s(L,{modelValue:v.value,"onUpdate:modelValue":t[8]||(t[8]=e=>v.value=e),"label-disabled":""},{default:n((()=>[c("复选框")])),_:1},8,["modelValue"])])),_:1}),s(M,{title:"复选框组"},{default:n((()=>[s(O,{modelValue:y.value,"onUpdate:modelValue":t[9]||(t[9]=e=>y.value=e)},{default:n((()=>[s(L,{name:"a"},{default:n((()=>[c("复选框 a")])),_:1}),s(N,{class:"checkbox-content"},{default:n((()=>[s(L,{name:"b"},{default:n((()=>[c("复选框 b")])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1}),s(M,{title:"水平排列"},{default:n((()=>[s(O,{modelValue:y.value,"onUpdate:modelValue":t[10]||(t[10]=e=>y.value=e),direction:"horizontal"},{default:n((()=>[s(L,{name:"a"},{default:n((()=>[c("复选框 a")])),_:1}),s(L,{name:"b"},{default:n((()=>[c("复选框 b")])),_:1})])),_:1},8,["modelValue"])])),_:1}),s(M,{title:"限制最大可选数"},{default:n((()=>[s(O,{modelValue:P.value,"onUpdate:modelValue":t[11]||(t[11]=e=>P.value=e),max:2},{default:n((()=>[s(L,{name:"a"},{default:n((()=>[c("复选框 a")])),_:1}),s(N,{class:"checkbox-content"},{default:n((()=>[s(L,{name:"b"},{default:n((()=>[c("复选框 b")])),_:1})])),_:1}),s(N,{class:"checkbox-content"},{default:n((()=>[s(L,{name:"c"},{default:n((()=>[c("复选框 c")])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1}),s(M,{title:"全选与反选"},{default:n((()=>[s(O,{modelValue:q.value,"onUpdate:modelValue":t[12]||(t[12]=e=>q.value=e),ref_key:"checkboxGroup",ref:E},{default:n((()=>[s(L,{name:"a"},{default:n((()=>[c("复选框 a")])),_:1}),s(N,{class:"checkbox-content"},{default:n((()=>[s(L,{name:"b"},{default:n((()=>[c("复选框 b")])),_:1})])),_:1}),s(N,{class:"checkbox-content"},{default:n((()=>[s(L,{name:"c"},{default:n((()=>[c("复选框 c")])),_:1})])),_:1})])),_:1},8,["modelValue"]),s(N,{class:"button-group"},{default:n((()=>[s(R,{type:"primary",size:"small",onClick:F},{default:n((()=>[c("全选")])),_:1}),s(N,{class:"button-content"},{default:n((()=>[s(R,{type:"primary",size:"small",onClick:G},{default:n((()=>[c("反选")])),_:1})])),_:1})])),_:1})])),_:1}),s(M,{title:"搭配单元格组件使用"},{default:n((()=>[s(O,{modelValue:A.value,"onUpdate:modelValue":t[14]||(t[14]=e=>A.value=e)},{default:n((()=>[s(T,null,{default:n((()=>[(d(),f(i,null,_(D,((e,l)=>s(S,{clickable:"",key:e,title:`复选框 ${e}`,onClick:e=>(e=>{I.value[e].toggle()})(l)},{"right-icon":n((()=>[s(L,{name:e,ref_for:!0,ref:e=>I.value[l]=e,onClick:t[13]||(t[13]=V((()=>{}),["stop"]))},null,8,["name"])])),_:2},1032,["title","onClick"]))),64))])),_:1})])),_:1},8,["modelValue"])])),_:1}),s(M,{title:"不确定状态"},{default:n((()=>[s(L,{modelValue:$.value,"onUpdate:modelValue":t[15]||(t[15]=e=>$.value=e),indeterminate:H.value,onChange:J},{default:n((()=>[c(" 全选 ")])),_:1},8,["modelValue","indeterminate"]),s(O,{modelValue:B.value,"onUpdate:modelValue":t[16]||(t[16]=e=>B.value=e),onChange:K},{default:n((()=>[(d(),f(i,null,_(w,(e=>s(L,{key:e,name:e,"custom-style":{"margin-top":"20rpx"}},{default:n((()=>[c(" 复选框 "+b(e),1)])),_:2},1032,["name"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-d6e2ad98"]]);export{U as default};