import{_ as u,c,d as m,b as s,D as i,H as l,I as p,F as h,r as f,o as _}from"./index-7bd3767d.js";const{VITE_URL:g}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_API:"sakimotorin-vue2022",BASE_URL:"/vue3-2022-week6/",MODE:"production",DEV:!1,PROD:!0},w={data(){return{isLoading:!1,users:{username:"",password:""}}},methods:{login(){this.isLoading=!0,this.$http.post(`${g}/admin/signin`,this.users).then(r=>{this.isLoading=!1;const{token:e,expired:n}=r.data;document.cookie=`vue2022Ex=${e}; expires=${new Date(n)}`,this.clearInputVal(),this.$router.push("/admin/products")}).catch(r=>{this.isLoading=!1,alert(r.message),this.clearInputVal()})},clearInputVal(){this.users.username="",this.users.password=""}}},v=s("h1",{class:"h3 mb-3 font-weight-normal text-center text-danger"}," 請先登入 ",-1),V={class:"form-floating mb-3"},b=s("label",{for:"username"},"Email address",-1),x={class:"form-floating"},E=s("label",{for:"password"},"Password",-1),L=s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1);function I(r,e,n,k,o,a){const d=f("vue-loading");return _(),c(h,null,[m(d,{active:o.isLoading},null,8,["active"]),v,s("form",{id:"form",class:"form-signin",onSubmit:e[2]||(e[2]=p((...t)=>a.login&&a.login(...t),["prevent"]))},[s("div",V,[i(s("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=t=>o.users.username=t)},null,512),[[l,o.users.username]]),b]),s("div",x,[i(s("input",{type:"password",class:"form-control",id:"password",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=t=>o.users.password=t)},null,512),[[l,o.users.password]]),E]),L],32)],64)}const U=u(w,[["render",I]]);export{U as default};
