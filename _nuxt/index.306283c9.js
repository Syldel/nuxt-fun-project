import{_ as S}from"./BlurHashLazyImage.vue.4ef89d8c.js";import{f as m,o as c,c as l,a as t,i as y,j as v,t as d,g as x,F as g,r as $,b as u,k as D,l as b,m as T,n as k,q as B,p as E,e as A,w as f,T as C,u as N,s as M,v as P,d as Y}from"./entry.2caa6007.js";import{s as V,u as G}from"./index.e9141bbd.js";import{_ as h}from"./_plugin-vue_export-helper.c27b6911.js";const H={key:0,class:"pro-experience"},L={class:"pro-experience__image-container"},j={class:"pro-experience__text pro-experience__text--title"},z={class:"pro-experience__text pro-experience__text--job"},F=["innerHTML"],U={class:"pro-experience__text pro-experience__technos"},q=m({__name:"AppProExperience",props:{data:{}},setup(n){const o=D();function r(e){return`https://${o.public.S3_BUCKET_NAME}.s3.${o.public.S3_REGION}.amazonaws.com/${e}`}function s(e){return e?r(e):""}return(e,p)=>{var i;const _=S;return e.data?(c(),l("div",H,[t("div",L,[e.data.image_40?(c(),y(_,{key:0,blurhash:e.data.blurhash,src:s(e.data.image_40),width:40,alt:e.data.title},null,8,["blurhash","src","alt"])):v("",!0)]),t("div",null,[t("div",j,d(e.data.title),1),t("div",z,d(e.data.job),1),t("div",{class:"pro-experience__text pro-experience__text--content",innerHTML:x(V)((i=e.data.content)==null?void 0:i.document)},null,8,F),t("div",U,[(c(!0),l(g,null,$(e.data.technos,a=>(c(),l("div",{key:a==null?void 0:a.id,class:"pro-experience__techno"},[u(_,{blurhash:a.blurhash,src:s(a.image_40),width:20,alt:a.name},null,8,["blurhash","src","alt"]),t("div",null,d(a==null?void 0:a.name),1)]))),128))])])])):v("",!0)}}});const R=h(q,[["__scopeId","data-v-7ee5a61d"]]),K=n=>(E("data-v-d8b4a2dd"),n=n(),A(),n),O={key:0,class:"timeline-element"},W=K(()=>t("div",{class:"line-with-points"},[t("div",{class:"top-year"}),t("div",{class:"line"}),t("div",{class:"bottom-year"})],-1)),J={class:"slot-container"},Q={class:"years"},X=m({__name:"AppTimelineElement",props:{startYear:{type:String,default:""},endYear:{type:String,default:""},displayDelay:{type:Number,default:0}},setup(n){const o=n,r=b(!1);let s;return T(()=>{s=setTimeout(()=>r.value=!0,o.displayDelay)}),k(()=>clearInterval(s)),(e,p)=>x(r)?(c(),l("div",O,[W,t("div",J,[B(e.$slots,"default",{},void 0,!0)]),t("div",Q,[t("span",null,d(n.endYear),1),t("span",null,d(n.startYear),1)])])):v("",!0)}});const Z=h(X,[["__scopeId","data-v-d8b4a2dd"]]),ee={class:"pro-experiences"},te={class:"timeline"},se=m({__name:"AppProExperiences",props:{items:{}},setup(n){function o(s){return new Date(s||"").getFullYear()}function r(s,e){return(e.length-1-s)*800}return(s,e)=>{const p=R,_=Z;return c(),l("div",ee,[t("section",te,[u(C,{name:"timeline-list"},{default:f(()=>[(c(!0),l(g,null,$(s.items,(i,a)=>(c(),y(_,{key:i.id,"start-year":o(i.startDate).toString(),"end-year":o(i.endDate).toString(),"display-delay":r(a,s.items)},{default:f(()=>[u(p,{data:i},null,8,["data"])]),_:2},1032,["start-year","end-year","display-delay"]))),128))]),_:1})])])}}});const ne=h(se,[["__scopeId","data-v-2e589850"]]),w=n=>(E("data-v-63cd6c52"),n=n(),A(),n),ae=w(()=>t("h1",null,[t("span",null,"Bienvenue"),Y(" sur mon CV")],-1)),oe=w(()=>t("h2",null,"Mon expérience professionnelle",-1)),ie=m({__name:"index",async setup(n){var _;let o,r;N({title:"Accueil",meta:[{name:"description",content:"Mon expérience professionnelle"}]});const{data:s}=([o,r]=M(()=>G({operation:"GetAllExperiences"})),o=await o,r(),o),e=b(((_=s==null?void 0:s.value)==null?void 0:_.experiences)||[]),p=P(()=>e.value.sort((i,a)=>new Date(a.startDate||"").getTime()-new Date(i.startDate||"").getTime()));return(i,a)=>{const I=ne;return c(),l("section",null,[ae,oe,u(I,{items:x(p)},null,8,["items"])])}}});const pe=h(ie,[["__scopeId","data-v-63cd6c52"]]);export{pe as default};
