import{_ as $}from"./nuxt-link.22254566.js";import{f as p,m as y,o as m,c as f,I as C,J as M,g as n,a as e,v as I,t as u,K as B,L,M as D,x as A,b as o,w as _,d as c,p as w,e as S}from"./entry.0ac10468.js";import{_ as g}from"./_plugin-vue_export-helper.c27b6911.js";import{_ as F}from"./nuxt-icon.vue.c095bf89.js";import{_ as H}from"./BubbleIcon.f2a94db5.js";import{_ as N}from"./BlurHashLazyImage.vue.41d6ef50.js";import{v as k,a as T,n as x,b as V}from"./nuxt.eafd7c87.js";const K=["tabindex","htmlFor","onKeypress"],z=["id","disabled"],G={class:"text"},R=p({__name:"DarkModeToggle",props:{id:{type:String,default:"dark-mode-toggle"},ariaLabel:{type:String,default:"color mode"},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["change"],setup(t,{emit:l}){const s=y(t.checked);function a(){s.value=!s.value,l("change",s.value)}function v(){l("change",!s.value)}return(d,i)=>(m(),f("label",{tabindex:t.disabled?void 0:0,class:B({disabled:t.disabled}),htmlFor:t.id,onKeypress:L(D(a,["prevent"]),["space"])},[C(e("input",{id:t.id,"onUpdate:modelValue":i[0]||(i[0]=r=>I(s)?s.value=r:null),type:"checkbox",disabled:t.disabled,role:"switch"},null,8,z),[[M,n(s)]]),e("span",{class:"slider",onClick:v}),e("span",G,u(t.ariaLabel),1)],42,K))}});const U=g(R,[["__scopeId","data-v-a98679ed"]]),Y=()=>A("color-mode").value,E=t=>(w("data-v-c4529704"),t=t(),S(),t),J=E(()=>e("div",{style:{"background-color":"#ccc"}}," Logo ",-1)),j={class:"social-icons"},q={href:"https://fr.linkedin.com/comm/in/sylvain-delescluse-30b42886",target:"_blank"},O={href:"http://twitter.com/GeekSpaceMaster",target:"_blank"},P=p({__name:"AppHeader",setup(t){const l=Y(),h=y(l.value==="light");function s(a){l.value=a?"light":"dark"}return(a,v)=>{const d=$,i=U,r=F,b=H;return m(),f("header",null,[J,e("nav",null,[e("ul",null,[e("li",null,[o(d,{to:"/"},{default:_(()=>[c(" Home ")]),_:1})]),e("li",null,[o(d,{to:"/technos"},{default:_(()=>[c(" Technos ")]),_:1})]),e("li",null,[o(d,{to:"/gallup"},{default:_(()=>[c(" Gallup ")]),_:1})]),e("li",null,[o(d,{to:"/about"},{default:_(()=>[c(" À propos ")]),_:1})]),e("li",null,[o(d,{to:"/contact"},{default:_(()=>[c(" Contact ")]),_:1})])])]),o(i,{checked:n(h),class:"dark-mode-toggle",onChange:s},null,8,["checked"]),e("div",j,[e("a",q,[o(b,{"font-size":18},{default:_(()=>[o(r,{name:"linkedin"})]),_:1})]),e("a",O,[o(b,null,{default:_(()=>[o(r,{name:"twitter"})]),_:1})])])])}}});const ue=g(P,[["__scopeId","data-v-c4529704"]]),Q=""+new URL("github.774864c6.svg",import.meta.url).href,W=t=>(w("data-v-c12d1a3f"),t=t(),S(),t),X={class:"footer"},Z={class:"footer__line"},ee={class:"footer__line"},te={class:"footer__sub"},oe=W(()=>e("a",{href:"https://github.com/Syldel",class:"footer__link"},"@Syldel",-1)),se={class:"footer__sub"},ae=p({__name:"AppFooter",setup(t){const l=new Date().getFullYear();return(h,s)=>{const a=N;return m(),f("footer",X,[e("div",null,[e("div",Z," Copyright © "+u(n(l))+". All rights reserved. ",1),e("div",ee,[e("div",te,[o(a,{src:n(Q),width:18,height:18,class:"footer__img"},null,8,["src"]),c(" GitHub by "),oe,c(". ")]),e("div",se,[c(" Using "),o(a,{src:n(k),width:18,height:18,class:"footer__img"},null,8,["src"]),c(" Vue v"+u(n(T))+" and ",1),o(a,{src:n(x),width:18,height:18,class:"footer__img"},null,8,["src"]),c(" Nuxt v"+u(n(V)),1)])])]),e("div",null,[o(a,{src:n(k),width:18,height:18,class:"footer__img"},null,8,["src"]),o(a,{src:n(x),width:18,height:18,class:"footer__img"},null,8,["src"])])])}}});const he=g(ae,[["__scopeId","data-v-c12d1a3f"]]);export{ue as _,he as a};