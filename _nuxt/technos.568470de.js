import{_ as f}from"./BlurHashLazyImage.vue.4ef89d8c.js";import{f as u,v as b,o as a,c as l,b as v,g as p,a as _,t as I,k as T,u as y,s as w,l as A,F as L,r as S,i as $,x,p as B,e as k,d as C}from"./entry.2caa6007.js";import{s as N,u as z}from"./index.e9141bbd.js";import{_ as m}from"./_plugin-vue_export-helper.c27b6911.js";const E={class:"techno-list-item"},H=["innerHTML"],M=u({__name:"AppTechnoListItem",props:{techno:{}},setup(t){const s=t,n=T();function i(e){return`https://${n.public.S3_BUCKET_NAME}.s3.${n.public.S3_REGION}.amazonaws.com/${e}`}const r=b(()=>{var e;return(e=s.techno)!=null&&e.image_40?i(s.techno.image_40):""});return(e,h)=>{var o;const d=f;return a(),l("div",E,[v(d,{blurhash:e.techno.blurhash,src:p(r),width:40,alt:e.techno.name},null,8,["blurhash","src","alt"]),_("div",null,I(e.techno.name),1),_("div",{innerHTML:p(N)((o=e.techno.content)==null?void 0:o.document)},null,8,H)])}}});const G=m(M,[["__scopeId","data-v-926bbccd"]]),R=t=>(B("data-v-edca5dc4"),t=t(),k(),t),V={class:"technos"},F=R(()=>_("h1",null,[_("span",null,"Technologies"),C(" Web")],-1)),U=u({__name:"technos",async setup(t){var e;let s,n;y({title:"Technologies web",meta:[{name:"description",content:"Technologies web"}]});const{data:i}=([s,n]=w(()=>z({operation:"GetAllTechnos"})),s=await s,n(),s),r=A(((e=i.value)==null?void 0:e.technos)||[]);return(h,d)=>{const o=G;return a(),l("section",V,[F,(a(!0),l(L,null,S(p(r),(c,g)=>(a(),$(o,{key:c==null?void 0:c.id,techno:c,class:x([g===0?"technos__item--withMarginRight":""])},null,8,["techno","class"]))),128))])}}});const W=m(U,[["__scopeId","data-v-edca5dc4"]]);export{W as default};
