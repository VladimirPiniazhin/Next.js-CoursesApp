(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[458],{1034:e=>{e.exports={products:"PageComponent_products__PwoxF",title:"PageComponent_title__3iWOk",hhtitle:"PageComponent_hhtitle__sgcfJ",seo:"PageComponent_seo__2kMVd"}},1192:e=>{e.exports={hh:"HhData_hh__1Uy7M",count:"HhData_count__4wslT",salary:"HhData_salary__2IXbJ",title:"HhData_title__5A_Lt",countValue:"HhData_countValue__R6BzF",salaryValue:"HhData_salaryValue__Mt8nW",rate:"HhData_rate__uz_IG",filled:"HhData_filled__SLogg"}},6076:e=>{e.exports={h1:"Htag_h1__JRc3a",h2:"Htag_h2__ZnbzO",h3:"Htag_h3__zc7qQ"}},6264:(e,s,a)=>{Promise.resolve().then(a.bind(a,8508)),Promise.resolve().then(a.bind(a,7469)),Promise.resolve().then(a.bind(a,9421)),Promise.resolve().then(a.bind(a,2538)),Promise.resolve().then(a.bind(a,5179))},8508:(e,s,a)=>{"use strict";a.d(s,{PageComponent:()=>V});var t=a(5155),l=a(2115),r=a(6076),i=a.n(r);let n=e=>{let{tag:s,children:a}=e;switch(s){case"h1":return(0,t.jsx)("h1",{className:i().h1,children:a});case"h2":return(0,t.jsx)("h2",{className:i().h2,children:a});case"h3":return(0,t.jsx)("h3",{className:i().h3,children:a});default:return(0,t.jsx)(t.Fragment,{})}};var c=a(1034),d=a.n(c),h=a(6592),o=a(1192),u=a.n(o),_=a(9814),x=a(3551),m=a(9032);let j=e=>{let{count:s,juniorSalary:a,middleSalary:l,seniorSalary:r,color:i}=e;return(0,t.jsxs)("div",{className:u().hh,children:[(0,t.jsxs)(_.Z,{color:i,className:u().count,children:[(0,t.jsx)("div",{className:u().title,children:"Всего вакансий"}),(0,t.jsx)("div",{className:u().countValue,children:s})]}),(0,t.jsxs)(_.Z,{color:i,className:u().salary,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:u().title,children:"Начальный"}),(0,t.jsx)("div",{className:u().salaryValue,children:(0,m.B3)(a)}),(0,t.jsxs)("div",{className:u().rate,children:[(0,t.jsx)(x.default,{className:u().filled}),(0,t.jsx)(x.default,{}),(0,t.jsx)(x.default,{})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:u().title,children:"Средний"}),(0,t.jsx)("div",{className:u().salaryValue,children:(0,m.B3)(l)}),(0,t.jsxs)("div",{className:u().rate,children:[(0,t.jsx)(x.default,{className:u().filled}),(0,t.jsx)(x.default,{className:u().filled}),(0,t.jsx)(x.default,{})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:u().title,children:"Профессионал"}),(0,t.jsx)("div",{className:u().salaryValue,children:(0,m.B3)(r)}),(0,t.jsxs)("div",{className:u().rate,children:[(0,t.jsx)(x.default,{className:u().filled}),(0,t.jsx)(x.default,{className:u().filled}),(0,t.jsx)(x.default,{className:u().filled})]})]})]})]})};var v=a(9408),p=a.n(v),g=a(574);let N=e=>{let{advantages:s}=e;return(0,t.jsx)(t.Fragment,{children:s.map(e=>(0,t.jsxs)("div",{className:p().advantage,children:[(0,t.jsx)(g.default,{}),(0,t.jsx)("div",{className:p().title,children:e.title}),(0,t.jsx)("hr",{className:p().vline}),(0,t.jsx)("div",{className:p().description,children:e.description})]},e._id))})};var f=a(7491),y=a(1016);let P=(e,s)=>{switch(s.type){case y.u.Rating:return{sort:y.u.Rating,products:e.products.sort((e,s)=>(e.reviewAvg||e.initialRating)>(s.reviewAvg||s.initialRating)?-1:1)};case y.u.Price:return{sort:y.u.Price,products:e.products.sort((e,s)=>e.price>s.price?1:-1)};case y.u.None:return{sort:y.u.None,products:e.products};case"reset":return{sort:y.u.None,products:s.initialState};default:throw Error("Неверный тип сортировки")}};var H=a(4403),w=a(760),b=a(1741);let V=e=>{let{page:s,products:a}=e,[{products:r,sort:i},c]=(0,l.useReducer)(P,{products:a,sort:f.SortEnum.None});return(0,l.useEffect)(()=>{c({type:"reset",initialState:a})},[a]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:d().wrapper,children:[(0,t.jsxs)("div",{className:d().title,children:[(0,t.jsx)(n,{tag:"h1",children:s.title}),(0,t.jsx)(h.v,{color:"grey",size:"medium",children:s.category.length}),(0,t.jsx)(f.Sort,{sort:i,setSort:e=>{c({type:e})}})]}),(0,t.jsx)("div",{className:d().products,children:(0,t.jsx)(w.N,{mode:"sync",children:r&&r.map(e=>(0,t.jsx)(b.P.div,{layout:"position",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2,ease:"easeInOut"},children:(0,t.jsx)(H.Product,{product:e})},e._id))})}),(0,t.jsxs)("div",{className:d().hhtitle,children:[(0,t.jsxs)(n,{tag:"h2",children:["Вакансии - ",s.category]}),(0,t.jsx)(h.v,{color:"red",size:"medium",children:"hh.ru"})]}),s.hh&&(0,t.jsx)(j,{color:"white",...s.hh}),s.advantages&&s.advantages.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{tag:"h2",children:"Преимущества"}),(0,t.jsx)(N,{advantages:s.advantages})]}),s.seoText&&(0,t.jsx)("div",{className:d().seo,dangerouslySetInnerHTML:{__html:s.seoText}}),(0,t.jsx)(n,{tag:"h2",children:"Получаемые навыки"}),s.tags.map(e=>(0,t.jsx)(h.v,{color:"primary",children:e},e))]})})}},9408:e=>{e.exports={advantage:"Advantages_advantage__JCaJ4",title:"Advantages_title__op3lm",vline:"Advantages_vline__81BvF"}}},e=>{var s=s=>e(e.s=s);e.O(0,[483,530,377,743,9,198,441,684,358],()=>s(6264)),_N_E=e.O()}]);