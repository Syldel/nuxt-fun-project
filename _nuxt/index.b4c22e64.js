import{_ as h}from"./_plugin-vue_export-helper.c27b6911.js";import{i as M,g as o,j as F,r as C,o as g,c as _,k as S,f as V,a as t,n as P,u as j,l as B,m as z,b as r,w,t as A,d as v,h as H,p as T,e as U}from"./entry.0ac10468.js";import{a as W,_ as G}from"./BlurHashLazyImage.vue.41d6ef50.js";import{u as O}from"./asyncData.99e21762.js";function E(e,i,c){const[a={},s]=typeof i=="string"?[{},i]:[i,c],l=a.key||M([s,o(a.baseURL),typeof e=="string"?e:"",o(a.params||a.query)]);if(!l||typeof l!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+l);if(!e)throw new Error("[nuxt] [useFetch] request is missing.");const q=l===s?"$f"+l:l,u=F(()=>{let d=e;return typeof d=="function"&&(d=d()),o(d)});if(!a.baseURL&&typeof u.value=="string"&&u.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:p,lazy:f,default:m,transform:D,pick:I,watch:x,immediate:k,...$}=a,y=C({...$,cache:typeof a.cache=="boolean"?void 0:a.cache}),L={server:p,lazy:f,default:m,transform:D,pick:I,immediate:k,watch:x===!1?[]:[y,u,...x||[]]};let n;return O(q,()=>{var N;return(N=n==null?void 0:n.abort)==null||N.call(n),n=typeof AbortController<"u"?new AbortController:{},typeof u.value=="string"&&u.value.startsWith("/"),(a.$fetch||globalThis.$fetch)(u.value,{signal:n.signal,...y})},L)}const Y={};function Q(e,i){return g(),_("span",null,[S(e.$slots,"default")])}const R=h(Y,[["render",Q]]),J={class:"floating-container"},K=V({__name:"FloatingContainer",props:{width:{type:Number,default:150},height:{type:Number,default:150}},setup(e){const i=e,c=C({width:`${i.width}px`,height:`${i.height}px`});return(a,s)=>(g(),_("div",J,[t("div",{class:"floating-container__animated",style:P(o(c))},[S(a.$slots,"default")],4)]))}});const X=h(K,[["__scopeId","data-v-8422893f"]]),b=e=>(T("data-v-aaa9d5c5"),e=e(),U(),e),Z=b(()=>t("h1",null,[t("span",null,"Welcome"),v(" to the homepage")],-1)),ee=b(()=>t("p",null,[t("a",{href:"/about"},"About")],-1)),ae={class:"layout__abs-left"},ie=b(()=>t("h2",null,"useFetch /api/hello",-1)),te=H("<p data-v-aaa9d5c5> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec magna interdum, tincidunt neque ut, ultrices eros. Aliquam lobortis lacus ornare, ullamcorper nulla ac, commodo lacus. Nam consequat sapien vulputate scelerisque sodales. Suspendisse iaculis congue arcu id tristique. Nullam ullamcorper turpis sed tellus efficitur molestie. Sed vitae lectus ligula. Sed tempor neque libero, et luctus risus pellentesque eu. Nullam ut finibus velit. Aliquam erat volutpat. Aenean id felis eros. Vestibulum orci diam, varius quis consequat ac, ornare ac mauris. Aenean nec sapien lacinia, laoreet ante eget, porta mi. Vestibulum euismod ultrices risus. In vel eros a orci imperdiet accumsan. </p><p data-v-aaa9d5c5> Cras congue ex vestibulum felis tristique porta. Suspendisse sed fringilla erat. Nullam semper ornare maximus. Sed bibendum urna non auctor aliquet. Nunc convallis lorem eu justo convallis, ultricies accumsan risus pretium. Curabitur nulla urna, scelerisque ut sem a, porta tempor ipsum. Integer hendrerit imperdiet leo, sagittis semper massa faucibus sed. Maecenas vitae enim felis. Donec sagittis elit nec fermentum lacinia. </p><p data-v-aaa9d5c5> Curabitur finibus est nunc, vitae bibendum libero mollis non. Vivamus ut lacinia quam. Vestibulum malesuada aliquam neque, in gravida orci. Curabitur risus mauris, malesuada quis vestibulum vitae, condimentum ut dui. Duis mi leo, varius ut est id, porta ultrices ante. Aliquam molestie tellus ligula, non molestie odio condimentum sed. Proin tincidunt tortor et sapien rhoncus, id rhoncus ligula lobortis. Phasellus mattis rutrum varius. Nullam vulputate sed velit a fermentum. Pellentesque scelerisque viverra metus id fringilla. Nam hendrerit sem a bibendum sollicitudin. Vestibulum consequat dolor vel erat bibendum pretium. Ut vel dui sed nunc fringilla tempus. </p><p data-v-aaa9d5c5> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec magna interdum, tincidunt neque ut, ultrices eros. Aliquam lobortis lacus ornare, ullamcorper nulla ac, commodo lacus. Nam consequat sapien vulputate scelerisque sodales. Suspendisse iaculis congue arcu id tristique. Nullam ullamcorper turpis sed tellus efficitur molestie. Sed vitae lectus ligula. Sed tempor neque libero, et luctus risus pellentesque eu. Nullam ut finibus velit. Aliquam erat volutpat. Aenean id felis eros. Vestibulum orci diam, varius quis consequat ac, ornare ac mauris. Aenean nec sapien lacinia, laoreet ante eget, porta mi. Vestibulum euismod ultrices risus. In vel eros a orci imperdiet accumsan. </p><p data-v-aaa9d5c5> Cras congue ex vestibulum felis tristique porta. Suspendisse sed fringilla erat. Nullam semper ornare maximus. Sed bibendum urna non auctor aliquet. Nunc convallis lorem eu justo convallis, ultricies accumsan risus pretium. Curabitur nulla urna, scelerisque ut sem a, porta tempor ipsum. Integer hendrerit imperdiet leo, sagittis semper massa faucibus sed. Maecenas vitae enim felis. Donec sagittis elit nec fermentum lacinia. </p><p data-v-aaa9d5c5> Curabitur finibus est nunc, vitae bibendum libero mollis non. Vivamus ut lacinia quam. Vestibulum malesuada aliquam neque, in gravida orci. Curabitur risus mauris, malesuada quis vestibulum vitae, condimentum ut dui. Duis mi leo, varius ut est id, porta ultrices ante. Aliquam molestie tellus ligula, non molestie odio condimentum sed. Proin tincidunt tortor et sapien rhoncus, id rhoncus ligula lobortis. Phasellus mattis rutrum varius. Nullam vulputate sed velit a fermentum. Pellentesque scelerisque viverra metus id fringilla. Nam hendrerit sem a bibendum sollicitudin. Vestibulum consequat dolor vel erat bibendum pretium. Ut vel dui sed nunc fringilla tempus. </p><p data-v-aaa9d5c5> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec magna interdum, tincidunt neque ut, ultrices eros. Aliquam lobortis lacus ornare, ullamcorper nulla ac, commodo lacus. Nam consequat sapien vulputate scelerisque sodales. Suspendisse iaculis congue arcu id tristique. Nullam ullamcorper turpis sed tellus efficitur molestie. Sed vitae lectus ligula. Sed tempor neque libero, et luctus risus pellentesque eu. Nullam ut finibus velit. Aliquam erat volutpat. Aenean id felis eros. Vestibulum orci diam, varius quis consequat ac, ornare ac mauris. Aenean nec sapien lacinia, laoreet ante eget, porta mi. Vestibulum euismod ultrices risus. In vel eros a orci imperdiet accumsan. </p><p data-v-aaa9d5c5> Cras congue ex vestibulum felis tristique porta. Suspendisse sed fringilla erat. Nullam semper ornare maximus. Sed bibendum urna non auctor aliquet. Nunc convallis lorem eu justo convallis, ultricies accumsan risus pretium. Curabitur nulla urna, scelerisque ut sem a, porta tempor ipsum. Integer hendrerit imperdiet leo, sagittis semper massa faucibus sed. Maecenas vitae enim felis. Donec sagittis elit nec fermentum lacinia. </p><p data-v-aaa9d5c5> Curabitur finibus est nunc, vitae bibendum libero mollis non. Vivamus ut lacinia quam. Vestibulum malesuada aliquam neque, in gravida orci. Curabitur risus mauris, malesuada quis vestibulum vitae, condimentum ut dui. Duis mi leo, varius ut est id, porta ultrices ante. Aliquam molestie tellus ligula, non molestie odio condimentum sed. Proin tincidunt tortor et sapien rhoncus, id rhoncus ligula lobortis. Phasellus mattis rutrum varius. Nullam vulputate sed velit a fermentum. Pellentesque scelerisque viverra metus id fringilla. Nam hendrerit sem a bibendum sollicitudin. Vestibulum consequat dolor vel erat bibendum pretium. Ut vel dui sed nunc fringilla tempus. </p><p data-v-aaa9d5c5> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec magna interdum, tincidunt neque ut, ultrices eros. Aliquam lobortis lacus ornare, ullamcorper nulla ac, commodo lacus. Nam consequat sapien vulputate scelerisque sodales. Suspendisse iaculis congue arcu id tristique. Nullam ullamcorper turpis sed tellus efficitur molestie. Sed vitae lectus ligula. Sed tempor neque libero, et luctus risus pellentesque eu. Nullam ut finibus velit. Aliquam erat volutpat. Aenean id felis eros. Vestibulum orci diam, varius quis consequat ac, ornare ac mauris. Aenean nec sapien lacinia, laoreet ante eget, porta mi. Vestibulum euismod ultrices risus. In vel eros a orci imperdiet accumsan. </p><p data-v-aaa9d5c5> Cras congue ex vestibulum felis tristique porta. Suspendisse sed fringilla erat. Nullam semper ornare maximus. Sed bibendum urna non auctor aliquet. Nunc convallis lorem eu justo convallis, ultricies accumsan risus pretium. Curabitur nulla urna, scelerisque ut sem a, porta tempor ipsum. Integer hendrerit imperdiet leo, sagittis semper massa faucibus sed. Maecenas vitae enim felis. Donec sagittis elit nec fermentum lacinia. </p><p data-v-aaa9d5c5> Curabitur finibus est nunc, vitae bibendum libero mollis non. Vivamus ut lacinia quam. Vestibulum malesuada aliquam neque, in gravida orci. Curabitur risus mauris, malesuada quis vestibulum vitae, condimentum ut dui. Duis mi leo, varius ut est id, porta ultrices ante. Aliquam molestie tellus ligula, non molestie odio condimentum sed. Proin tincidunt tortor et sapien rhoncus, id rhoncus ligula lobortis. Phasellus mattis rutrum varius. Nullam vulputate sed velit a fermentum. Pellentesque scelerisque viverra metus id fringilla. Nam hendrerit sem a bibendum sollicitudin. Vestibulum consequat dolor vel erat bibendum pretium. Ut vel dui sed nunc fringilla tempus. </p>",12),se=b(()=>t("br",null,null,-1)),ue=V({__name:"index",async setup(e){let i,c;j({title:"Accueil",meta:[{name:"description",content:"My amazing website"}]});const{data:a}=([i,c]=B(()=>E("/api/hello","$pqtWcjQkdb")),i=await i,c(),i),s=z(!1);return setTimeout(()=>s.value=!0,4e3),setTimeout(()=>s.value=!1,6e3),(l,q)=>{const u=R,p=W,f=X,m=G;return g(),_("section",null,[Z,r(u,null,{default:w(()=>[v(" This is an auto-imported component ")]),_:1}),ee,t("div",ae,[r(f,{width:150,height:150},{default:w(()=>[r(p,{blurhash:"LgNdE+R*.TWB?bofkCof9uaeeTWB",src:"assets/images/sdelescluse_photolemur_fix01_smaller_square.jpg"})]),_:1})]),ie,t("pre",null,A(o(a)),1),t("p",null,"timerOK: "+A(o(s)),1),r(p,{blurhash:"LGF5?xYk^6#M@-5c,1J5@[or[Q6.",src:"https://images.unsplash.com/photo-1576158114254-3ba81558b87d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",width:"200","lazy-load":o(s)},null,8,["lazy-load"]),r(m,{blurhash:"LGF5?xYk^6#M@-5c,1J5@[or[Q6.",src:"https://images.unsplash.com/photo-1576158114254-3ba81558b87d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",width:200,"enable-lazy":!1}),te,t("p",null,[v(" BlurHash Lazy Image examples:"),se,r(m,{blurhash:"LGF5?xYk^6#M@-5c,1J5@[or[Q6.",src:"https://nuxt.com/assets/design-kit/logo/full-logo-green-dark.png",width:200}),r(m,{src:"https://images.pexels.com/photos/5591708/pexels-photo-5591708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",width:200,height:200})])])}}});const me=h(ue,[["__scopeId","data-v-aaa9d5c5"]]);export{me as default};
