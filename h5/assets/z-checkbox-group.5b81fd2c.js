import{d as e,D as o,l as a,o as l,c as s,K as n,G as i,w as t,x as d,L as c,_ as r,n as p,i as u}from"./index-f30f5313.js";import{u as m}from"./useParent.17bb91a9.js";import{u as b}from"./index.3b818c1b.js";import{E as h,n as g,t as k,i as f,j as V,v as x,s as v,l as S}from"./DemoPage.cf3c40e0.js";import{z as G}from"./z-checker.d45d130d.js";import{u as j}from"./useChildren.47d4431b.js";const z=r(e({name:"ZCheckbox",options:{virtualHost:!0},props:{name:h,disabled:Boolean,iconSize:g,modelValue:h,checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:String,bindGroup:k,indeterminate:{type:Boolean,default:null},iconName:String,customStyle:Object},emits:["change","update:modelValue","click"],setup(e,{expose:r,emit:p}){const[u,h]=f("checkbox");V(u);const g=c(),k=e,v=p,{parent:S}=m("z-checkbox-group"),j=o((()=>S&&k.bindGroup?-1!==S.props.modelValue.indexOf(k.name):!!k.modelValue)),z=(e=!j.value)=>{S&&k.bindGroup?(e=>{const{name:o}=k,{max:a,modelValue:l}=S.props,s=l.slice();if(e)a&&s.length>=+a||s.includes(o)||(s.push(o),k.bindGroup&&S.updateValue(s));else{const e=s.indexOf(o);-1!==e&&(s.splice(e,1),k.bindGroup&&S.updateValue(s))}})(e):v("update:modelValue",e),null!==k.indeterminate&&v("change",e)};return a((()=>k.modelValue),(e=>{null===k.indeterminate&&v("change",e)})),x({toggle:z,props:k,checked:j}),r({toggle:z,props:k,checked:j}),b((()=>k.modelValue)),(o,a)=>(l(),s(G,{bem:i(h),role:"checkbox",parent:i(S),checked:j.value,onToggle:z,name:e.name,disabled:e.disabled,"icon-size":e.iconSize,"icon-name":e.iconName,"model-value":e.modelValue,"checked-color":e.checkedColor,"label-position":e.labelPosition,"label-disabled":e.labelDisabled,shape:e.shape,"bind-group":e.bindGroup,indeterminate:e.indeterminate,"component-slot":i(g).slots,"custom-style":e.customStyle},n({default:t((()=>[d(o.$slots,"default",{},void 0,!0)])),_:2},[i(g).slots.icon?{name:"icon",fn:t((()=>[d(o.$slots,"icon",{},void 0,!0)])),key:"0"}:void 0]),1032,["bem","parent","checked","name","disabled","icon-size","icon-name","model-value","checked-color","label-position","label-disabled","shape","bind-group","indeterminate","component-slot","custom-style"]))}}),[["__scopeId","data-v-5795a03e"]]),_=r(e({name:"ZCheckboxGroup",options:{virtualHost:!0},props:{max:g,shape:v("round"),disabled:Boolean,iconSize:g,direction:String,modelValue:S(),checkedColor:String},emits:["change","update:modelValue"],setup(e,{expose:o,emit:n}){const[c,r]=f("checkbox-group"),m=e,h=n,{children:g,linkChildren:k}=j(c),V=e=>h("update:modelValue",e),v=(e={})=>{"boolean"==typeof e&&(e={checked:e});const{checked:o,skipDisabled:a}=e,l=g.filter((e=>!!e.props.bindGroup&&(e.props.disabled&&a?e.checked.value:o||!e.checked.value))).map((e=>e.name));V(l)};return a((()=>m.modelValue),(e=>h("change",e))),x({toggleAll:v}),o({toggleAll:v}),b((()=>m.modelValue)),k({props:m,updateValue:V}),(e,o)=>{const a=u;return l(),s(a,{class:p(i(r)([m.direction]))},{default:t((()=>[d(e.$slots,"default",{},void 0,!0)])),_:3},8,["class"])}}}),[["__scopeId","data-v-0010048f"]]);export{z as _,_ as a};
