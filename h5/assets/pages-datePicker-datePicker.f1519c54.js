import{_ as e}from"./z-date-picker.vue_vue_type_script_setup_true_lang.4fc69452.js";import{d as t,k as a,m as l,E as m,o as d,c as u,w as o,a as i,G as s,i as n}from"./index-f30f5313.js";import{r,_ as p}from"./DemoPage.cf3c40e0.js";import"./utils.05ef7895.js";import"./z-picker.f4e3f177.js";import"./useParent.17bb91a9.js";import"./use-touch.6469fcb8.js";import"./useChildren.47d4431b.js";const c=t({__name:"datePicker",setup(t){const c=a(["2021","01","01"]),_=a(["2021","01"]),f=new Date(2020,0,1),v=new Date(2025,5,1),x=["year","month"],V=a(["2021","01"]),j=(e,t)=>("year"===e&&(t.text+="年"),"month"===e&&(t.text+="月"),t),k=a(["2021","01"]),y=(e,t)=>"month"===e?t.filter((e=>Number(e.value)%6==0)):t;return(t,a)=>{const h=r(l("z-date-picker"),e),D=m("demo-block"),P=n,w=r(l("DemoPage"),p);return d(),u(w,{title:"DatePicker"},{default:o((()=>[i(P,{class:"demo-date-picker"},{default:o((()=>[i(D,{title:"基础用法"},{default:o((()=>[i(h,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=e=>c.value=e),title:"选择日期","min-date":s(f),"max-date":s(v)},null,8,["modelValue","min-date","max-date"])])),_:1}),i(D,{title:"选项类型"},{default:o((()=>[i(h,{modelValue:_.value,"onUpdate:modelValue":a[1]||(a[1]=e=>_.value=e),title:"选择年月","min-date":s(f),"max-date":s(v),"columns-type":x},null,8,["modelValue","min-date","max-date"])])),_:1}),i(D,{title:"格式化选项"},{default:o((()=>[i(h,{modelValue:V.value,"onUpdate:modelValue":a[2]||(a[2]=e=>V.value=e),title:"选择年月","min-date":s(f),"max-date":s(v),formatter:j,"columns-type":x},null,8,["modelValue","min-date","max-date"])])),_:1}),i(D,{title:"过滤选项"},{default:o((()=>[i(h,{modelValue:k.value,"onUpdate:modelValue":a[3]||(a[3]=e=>k.value=e),title:"选择年月",filter:y,"min-date":s(f),"max-date":s(v),"columns-type":x},null,8,["modelValue","min-date","max-date"])])),_:1})])),_:1})])),_:1})}}});export{c as default};
