import{s as u,a as p}from"./index-BjqVrGDF.js";import{k as g,l as x,o as n,c as r,a as t,t as l,u as c,r as _,F as f,b as v}from"./index-BQF74Lkt.js";const h={class:"relative rounded-xl bg-white dark:bg-slate-800 drop-shadow-xl md:m-4 lg:m-8"},b={class:"flex flex-col gap-4 p-8 md:p-10 md:gap-6 lg:p-12 lg:gap-8"},w={class:"asbolute text-center text-xl font-bold rounded-xl h-[calc(10%)] bg-primary text-white -mx-12 md:-mx-16 p-4 md:p-6 lg:-mx-20 lg:p-8 lg:text-2xl"},k={class:"text-slate-500"},S={class:"flex flex-col gap-2"},y={class:"flex items-center gap-2 text-slate-500"},T={class:""},P={class:"flex items-center gap-2 text-slate-500"},B={class:""},D={class:"line-clamp-3"},F={__name:"ArticleCard",props:{title:String,date:Date,public:String,contentPreview:String,link:String,readTime:String},setup(s){const a=s,o=new Intl.DateTimeFormat("fr-FR",{dateStyle:"long"}),e=g(()=>o.format(a.date)),d=x(),m=()=>{d.push("/blog/article/"+u(a.title))};return(V,i)=>(n(),r("div",h,[t("div",b,[t("div",w,l(s.title),1),t("div",k,l(c(e)),1),t("div",S,[t("div",y,[i[0]||(i[0]=t("i",{class:"mdi mdi-target-account"},null,-1)),t("div",T,l(s.public),1)]),t("div",P,[i[1]||(i[1]=t("i",{class:"mdi mdi-target-account"},null,-1)),t("div",B,l(s.readTime),1)])]),t("div",D,l(s.contentPreview),1),t("div",{class:"bg-primary cursor-pointer rounded-full text-white text-center px-4 py-2 mt-4",onClick:m},"Voir l'article")])]))}},R={__name:"ViewList",setup(s){return(a,o)=>(n(!0),r(f,null,_(c(p),e=>(n(),v(F,{title:e.title,date:e.date,public:e.public,readTime:e.readTime,contentPreview:e.contentPreview,link:e.link},null,8,["title","date","public","readTime","contentPreview","link"]))),256))}};export{R as default};
