import{_ as o}from"./z-cell.b545d216.js";import{k as t,a3 as i,d as e,m as s,E as a,o as l,c as n,w as c,a as r,b as u,C as f,i as m}from"./index-f30f5313.js";import{k as d,o as k,r as y,z as p,a4 as g,_ as v}from"./DemoPage.cf3c40e0.js";import"./z-toast.1a41a7b4.js";import"./z-dialog.a22a98be.js";let w;let h={show:!1,type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,position:"top",className:"",lockScroll:!1,background:void 0,customNavbar:!1};function C(o=""){const e=t(d({},h));i(o?`z-notify-${o}`:"z-notify",e);const s=()=>{e.value=d({},{show:!1})};return{showNotify:o=>{var t;o=d({},h,k(t=o)?t:{message:t}),e.value=d({},o,{show:!0}),clearTimeout(w),o.duration>0&&(w=setTimeout(s,o.duration))},closeNotify:s}}const N=e({__name:"notify",setup(i){const e=C(),d=t(!1),k=()=>{e.showNotify("通知内容")},w=o=>{e.showNotify({message:"通知内容",type:o})},h=()=>{e.showNotify({color:"#ad0000",message:"自定义颜色",background:"#ffe1e1"})},N=()=>{e.showNotify({message:"自定义时长",duration:1e3})},_=()=>{e.showNotify({message:"自定义位置",position:"bottom"})},z=()=>{d.value=!0,setTimeout((()=>{d.value=!1}),2e3)};return(t,i)=>{const e=y(s("z-cell"),o),C=a("demo-block"),b=y(s("z-icon"),p),j=f,x=y(s("z-notify"),g),T=m,D=y(s("DemoPage"),v);return l(),n(D,{title:"Notify"},{default:c((()=>[r(T,{class:"demo-notify"},{default:c((()=>[r(C,{title:"基础用法"},{default:c((()=>[r(e,{"is-link":"",title:"基础用法",onClick:k})])),_:1}),r(C,{title:"通知类型"},{default:c((()=>[r(e,{"is-link":"",title:"主要通知",onClick:i[0]||(i[0]=o=>w("primary"))}),r(e,{"is-link":"",title:"成功通知",onClick:i[1]||(i[1]=o=>w("success"))}),r(e,{"is-link":"",title:"危险通知",onClick:i[2]||(i[2]=o=>w("danger"))}),r(e,{"is-link":"",title:"警告通知",onClick:i[3]||(i[3]=o=>w("warning"))})])),_:1}),r(C,{card:"",title:"自定义配置"},{default:c((()=>[r(e,{"is-link":"",title:"自定义颜色",onClick:h}),r(e,{"is-link":"",title:"自定义位置",onClick:_}),r(e,{"is-link":"",title:"自定义时长",onClick:N})])),_:1}),r(C,{title:"使用 Notify 组件"},{default:c((()=>[r(e,{"is-link":"",title:"使用 Notify 组件",onClick:z}),r(x,{show:d.value,"onUpdate:show":i[4]||(i[4]=o=>d.value=o),type:"success","custom-navbar":"","use-component":""},{default:c((()=>[r(b,{name:"notification"}),r(j,{style:{"margin-left":"8rpx"}},{default:c((()=>[u("内容")])),_:1})])),_:1},8,["show"])])),_:1})])),_:1})])),_:1})}}});export{N as default};
