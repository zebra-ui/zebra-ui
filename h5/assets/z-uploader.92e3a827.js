import{ai as e,aj as a,ak as l,d as t,D as s,o,c as i,w as r,G as n,n as u,x as c,p as d,y as p,a as m,b as v,t as f,i as y,_ as g,k as h,e as b,F as w,r as z,K as k,ae as S,af as x,L as j,al as F,ad as _,C as P,a5 as T}from"./index-f30f5313.js";import{u as C}from"./index.3b818c1b.js";import{i as O,o as D,R as V,O as I,n as R,S as U,I as A,X as B,z as N,c as $,D as M,m as L,s as H,t as Z,l as E,v as G,N as K}from"./DemoPage.cf3c40e0.js";import{_ as X}from"./z-image.8605c909.js";const[q,J,Q]=O("uploader");function W(e,a){return new Promise((t=>{"file"!==a?l({filePath:e.url}).then((a=>{e.size=a.size,t(e)})).catch((()=>{t(e)})):t()}))}function Y(e,a){return V(e).some((e=>!!e.file&&(I(a)?a(e.file):e.file.size>+a)))}const ee=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i;function ae(e){return!!e.isImage||(e.file&&e.file.type?0===e.file.type.indexOf("image"):e.url?(a=e.url,ee.test(a)):"string"==typeof e.content&&0===e.content.indexOf("data:image"));var a}function le(e,a){return D(e)?Object.keys(e).reduce(((l,t)=>(a.includes(t)||(l[t]=e[t]),l)),{}):{}}function te({accept:l,multiple:t,capture:s,compressed:o,maxDuration:i,sizeType:r,camera:n,maxCount:u}){return new Promise(((c,d)=>{switch(l){case"image":a({count:t?Math.min(u,9):1,sourceType:s,sizeType:r,success:e=>c(function(e){return e.tempFiles.map((e=>Object.assign(Object.assign({},le(e,["path"])),{type:"image",url:e.path,thumb:e.path})))}(e)),fail:d});break;case"media":uni.chooseMedia({count:t?Math.min(u,9):1,sourceType:s,maxDuration:i,sizeType:r,camera:n,success:e=>c(function(e){return e.tempFiles.map((a=>Object.assign(Object.assign({},le(a,["fileType","thumbTempFilePath","tempFilePath"])),{type:e.type,url:a.tempFilePath,thumb:"video"===e.type?a.thumbTempFilePath:a.tempFilePath})))}(e)),fail:d});break;case"video":e({sourceType:s,compressed:o,maxDuration:i,camera:n,success:e=>c(function(e){return[Object.assign(Object.assign({},le(e,["tempFilePath","thumbTempFilePath","errMsg"])),{type:"video",url:e.tempFilePath,thumb:e.thumbTempFilePath})]}(e)),fail:d});break;default:uni.chooseMessageFile({count:t?u:1,type:l,success:e=>c(function(e){return e.tempFiles.map((e=>Object.assign(Object.assign({},le(e,["path"])),{url:e.path})))}(e)),fail:d})}}))}const se=g(t({name:"ZUploaderItem",options:{virtualHost:!0},props:{name:R,item:U(Object),index:Number,imageFit:String,lazyLoad:Boolean,deletable:Boolean,reupload:Boolean,previewSize:[Number,String,Array],beforeDelete:Function,comonentSlots:Object},emits:["delete","preview","reupload"],setup(e,{emit:a}){const l=e,t=a,g=e=>{const{name:a,item:s,index:o,beforeDelete:i}=l;e.stopPropagation(),M(i,{args:[s,{name:a,index:o}],done:()=>t("delete")})},h=s((()=>{const e={display:"block",width:"var(--z-uploader-size)",height:"var(--z-uploader-size)",overflow:"hidden",borderRadius:"var(--z-uploader-border-radius)"};return Array.isArray(l.previewSize)?(e.width=l.previewSize[0],e.height=l.previewSize[1]):l.previewSize&&(e.width=l.previewSize,e.height=l.previewSize),{...e}})),b=s((()=>({color:"var(--z-uploader-file-icon-color)",fontSize:"var(--z-uploader-file-icon-size)"}))),w=s((()=>"uploading"===l.item.status||"failed"===l.item.status)),z=s((()=>A(l.item.message)&&""!==l.item.message)),k=s((()=>l.deletable&&"uploading"!==l.item.status)),S=s((()=>({fontSize:"var(--z-uploader-mask-icon-size)"}))),x=s((()=>({width:"var(--z-uploader-loading-icon-size)",height:"var(--z-uploader-loading-icon-size)",color:"var(--z-uploader-loading-icon-color)"}))),j=s((()=>({color:"var(--z-uploader-delete-color)",fontSize:"var(--z-uploader-delete-icon-size)",transform:"scale(0.8)"}))),F=()=>{l.reupload?t("reupload"):t("preview")};return(a,t)=>{const s=y;return o(),i(s,{class:u(n(J)("preview"))},{default:r((()=>[n(ae)(e.item)?(o(),i(X,{key:0,mode:e.imageFit,src:e.item.objectUrl||e.item.content||e.item.url,"custom-style":h.value,onClick:F},{default:r((()=>[e.comonentSlots&&e.comonentSlots["preview-cover"]?(o(),i(s,{key:0,class:u(n(J)("preview-cover"))},{default:r((()=>[c(a.$slots,"preview-cover",{},void 0,!0)])),_:3},8,["class"])):d("",!0)])),_:3},8,["mode","src","custom-style"])):(o(),i(s,{key:1,class:u(n(J)("file")),style:p(n(B)(l.previewSize))},{default:r((()=>[m(N,{"custom-style":b.value,name:"description"},null,8,["custom-style"]),m(s,{class:u([n(J)("file-name"),"z-ellipsis"])},{default:r((()=>[v(f(e.item.file?e.item.file.name:e.item.url),1)])),_:1},8,["class"]),e.comonentSlots&&e.comonentSlots["preview-cover"]?(o(),i(s,{key:0,class:u(n(J)("preview-cover"))},{default:r((()=>[c(a.$slots,"preview-cover",{},void 0,!0)])),_:3},8,["class"])):d("",!0)])),_:3},8,["class","style"])),w.value?(o(),i(s,{key:2,class:u(n(J)("mask"))},{default:r((()=>["failed"===e.item.status?(o(),i(N,{key:0,name:"close-circle","custom-style":S.value},null,8,["custom-style"])):(o(),i($,{key:1,"custom-style":x.value},null,8,["custom-style"])),z.value?(o(),i(s,{key:2,class:u(n(J)("mask-message"))},{default:r((()=>[v(f(l.item.message),1)])),_:1},8,["class"])):d("",!0)])),_:1},8,["class"])):d("",!0),k.value?(o(),i(s,{key:3,class:u([n(J)("preview-delete",{shadow:!(e.comonentSlots&&e.comonentSlots["preview-delete"])})]),onClick:g},{default:r((()=>[e.comonentSlots&&e.comonentSlots["preview-delete"]?c(a.$slots,"preview-delete",{key:0},void 0,!0):(o(),i(N,{key:1,name:"close","badge-wrapper-style":j.value},null,8,["badge-wrapper-style"]))])),_:3},8,["class"])):d("",!0)])),_:3},8,["class"])}}}),[["__scopeId","data-v-42222f3f"]]),oe=g(t({name:"ZUploader",options:{virtualHost:!0},props:{name:L(""),accept:H("image"),capture:String,multiple:Boolean,disabled:Boolean,readonly:Boolean,lazyLoad:Boolean,maxCount:L(1/0),imageFit:H("cover"),resultType:H("dataUrl"),uploadIcon:H("upload"),uploadText:String,deletable:Z,reupload:Boolean,afterRead:Function,showUpload:Z,modelValue:E(),beforeRead:Function,beforeDelete:Function,previewSize:[Number,String,Array],previewImage:Z,previewFullImage:Z,maxSize:{type:[Number,String,Function],default:1/0},compressed:Z,maxDuration:{type:Number,default:60},sizeType:{type:Array,default:()=>["original","compressed"]},camera:{type:String,default:"back"}},emits:["delete","oversize","clickUpload","closePreview","clickPreview","clickReupload","update:modelValue","error"],setup(e,{emit:a}){const l=j(),t=e,g=a,O=[],D=h(-1),I=h(!1),R=(e=t.modelValue.length)=>({name:t.name,index:e}),U=()=>{},A=s((()=>({color:"var(--z-uploader-icon-color)",fontSize:"var(--z-uploader-icon-size)"}))),$=e=>{if(Y(e,t.maxSize)){if(!Array.isArray(e))return void g("oversize",e,R());{const a=function(e,a){const l=[],t=[];return e.forEach((e=>{Y(e,a)?t.push(e):l.push(e)})),{valid:l,invalid:t}}(e,t.maxSize);if(e=a.valid,g("oversize",a.invalid,R()),!e.length)return}}if(e=T(e),D.value>-1){const a=[...t.modelValue];a.splice(D.value,1,e),g("update:modelValue",a),D.value=-1}else g("update:modelValue",[...t.modelValue,...V(e)]);t.afterRead&&t.afterRead(e,R())},M=s((()=>t.modelValue.length>=+t.maxCount&&t.reupload)),L=e=>{const{maxCount:a,modelValue:l,resultType:s}=t;if(Array.isArray(e)){const t=+a-l.length;e.length>t&&(e=e.slice(0,t)),Promise.all(e.map((e=>W(e,s)))).then((a=>{const l=e.map(((e,l)=>{const t={file:e,status:"",message:"",objectUrl:e.url};return a[l]&&(t.content=a[l]),t}));$(l)}))}else W(e,s).then((a=>{const l={file:e,status:"",message:"",objectUrl:a.url};a&&(l.content=a),$(l)}))},H=e=>g("clickUpload",e),Z=()=>{I.value||(D.value=-1),I.value=!1;const{maxCount:e,modelValue:a,disabled:l}=t;l||te(Object.assign(Object.assign({},{accept:t.accept,multiple:t.multiple,capture:t.capture,compressed:t.compressed,maxDuration:t.maxDuration,sizeType:t.sizeType,camera:t.camera,maxCount:t.maxCount}),{maxCount:e-a.length})).then((e=>{(e=>{const a=e;if(t.disabled||!a||!a.length)return;const l=1===a.length?a[0]:[].slice.call(a);if(t.beforeRead){const e=t.beforeRead(l,R());if(!e)return;if(K(e))return void e.then((e=>{L(e||l)})).catch(U)}L(l)})(e)})).catch((e=>{g("error",e)}))};return G({chooseFile:Z,closeImagePreview:()=>{}}),C((()=>t.modelValue)),(e,a)=>{const s=y,h=P;return o(),i(s,{class:u(n(J)())},{default:r((()=>[m(s,{class:u(n(J)("wrapper",{disabled:t.disabled}))},{default:r((()=>[t.previewImage?(o(!0),b(w,{key:0},z(t.modelValue,((a,s)=>(o(),i(se,{key:s,item:a,index:s,name:t.name,deletable:a.deletable||t.deletable,reupload:a.reupload||t.reupload,"preview-size":a.previewSize||t.previewSize,"before-delete":a.beforeDelete||t.beforeDelete,"comonent-slots":n(l).slots,onClick:()=>g(t.reupload?"clickReupload":"clickPreview",a,R(s)),onDelete:e=>((e,a)=>{const l=t.modelValue.slice(0);l.splice(a,1),g("update:modelValue",l),g("delete",e,R(a))})(a,s),onPreview:e=>(e=>{if(t.previewFullImage){const a=t.modelValue.filter(ae),l=a.map((e=>(e.objectUrl&&!e.url&&"failed"!==e.status&&(e.url=e.objectUrl,O.push(e.url)),e.url))).filter(Boolean);F({urls:l,current:a.indexOf(e),showmenu:!0})}})(a),onReupload:e=>(e=>{I.value=!0,D.value=e,_((()=>Z()))})(s)},k({_:2},[n(l).slots["preview-cover"]?{name:"preview-cover",fn:r((()=>[c(e.$slots,"preview-cover",{file:a},void 0,!0)])),key:"0"}:void 0,n(l).slots["preview-delete"]?{name:"preview-delete",fn:r((()=>[c(e.$slots,"preview-delete",{},void 0,!0)])),key:"1"}:void 0]),1032,["item","index","name","deletable","reupload","preview-size","before-delete","comonent-slots","onClick","onDelete","onPreview","onReupload"])))),128)):d("",!0),t.modelValue.length<+t.maxCount?(o(),b(w,{key:1},[n(l).slots.default?S((o(),i(s,{key:0,class:u(n(J)("input-wrapper")),onClick:H},{default:r((()=>[c(e.$slots,"default",{},void 0,!0),t.readonly?d("",!0):(o(),i(s,{key:0,class:u(n(J)("input")),onClick:Z},null,8,["class"]))])),_:3},8,["class"])),[[x,!M.value]]):S((o(),i(s,{key:1,class:u(n(J)("upload",{readonly:t.readonly})),style:p(n(B)(t.previewSize)),onClick:H},{default:r((()=>[m(N,{name:t.uploadIcon,"custom-style":A.value},null,8,["name","custom-style"]),t.uploadText?(o(),i(h,{key:0,class:u(n(J)("upload-text"))},{default:r((()=>[v(f(t.uploadText),1)])),_:1},8,["class"])):d("",!0),t.readonly?d("",!0):(o(),i(s,{key:1,class:u(n(J)("input")),onClick:Z},null,8,["class"]))])),_:1},8,["class","style"])),[[x,t.showUpload&&!M.value]])],64)):d("",!0)])),_:3},8,["class"])])),_:3},8,["class"])}}}),[["__scopeId","data-v-71092e4c"]]);export{oe as _};
