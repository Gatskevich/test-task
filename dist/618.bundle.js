"use strict";(self.webpackChunktest_task=self.webpackChunktest_task||[]).push([[618],{134:function(e,t,n){n.d(t,{PQ:function(){return c},cN:function(){return s},oT:function(){return u}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((r=r.apply(e,t||[])).next())}))},a=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},i=function(e,t){return o(void 0,void 0,void 0,(function(){return a(this,(function(n){switch(n.label){case 0:return[4,fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r({},t))})];case 1:return[4,n.sent().json()];case 2:return[2,n.sent()]}}))}))},s=function(e){return o(void 0,void 0,void 0,(function(){return a(this,(function(t){return i("http://react-test.somee.com/api/register",e).then((function(e){localStorage.setItem("acessToken",e.tokens.acessToken),localStorage.setItem("refreshToken",e.tokens.refreshToken)})).catch((function(e){console.log(e)})),[2]}))}))},c=function(e){return o(void 0,void 0,void 0,(function(){return a(this,(function(t){return i("http://react-test.somee.com/api/login",e).then((function(e){localStorage.setItem("acessToken",e.tokens.acessToken),localStorage.setItem("refreshToken",e.tokens.refreshToken)})).catch((function(e){console.log(e)})),[2]}))}))},u=function(){var e=localStorage.getItem("refreshToken");if(e)return fetch("http://react-test.somee.com/api/refresh?refreshToken="+e,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.message&&(console.log(e.message),localStorage.clear())}))}},618:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(557),o=n(526),a=n(134),i=n(876),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=(0,i.$j)(null,(function(e){return{userPostFetch:function(t){return e((0,a.cN)(t))}}}))((function(e){var t=(0,o.useState)({email:"",password:"",firstName:"",lastName:""}),n=t[0],i=t[1];return(0,r.jsxs)("form",s({onSubmit:function(t){t.preventDefault(),(0,a.cN)({Username:n.email,Password:n.password,FirstName:n.firstName,LastName:n.lastName}),e.onAdd()}},{children:[(0,r.jsx)("h2",{children:"Sign up"},void 0),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"Email address"},void 0),(0,r.jsx)("input",{type:"email",name:"email",onChange:function(e){return i(s(s({},n),{email:e.target.value}))}},void 0)]},void 0),(0,r.jsxs)("div",s({className:"form-group"},{children:[(0,r.jsx)("label",s({htmlFor:"password"},{children:"Password"}),void 0),(0,r.jsx)("input",{type:"password",name:"password",onChange:function(e){return i(s(s({},n),{password:e.target.value}))}},void 0)]}),void 0),(0,r.jsxs)("div",s({className:"form-group"},{children:[(0,r.jsx)("label",s({htmlFor:"firstName"},{children:"FirstName"}),void 0),(0,r.jsx)("input",{type:"firstName",name:"firstName",onChange:function(e){return i(s(s({},n),{firstName:e.target.value}))}},void 0)]}),void 0),(0,r.jsxs)("div",s({className:"form-group"},{children:[(0,r.jsx)("label",s({htmlFor:"lastName"},{children:"LastName"}),void 0),(0,r.jsx)("input",{type:"lastName",name:"lastName",onChange:function(e){return i(s(s({},n),{lastName:e.target.value}))}},void 0)]}),void 0),(0,r.jsx)("button",s({type:"submit"},{children:"Sign up"}),void 0)]}),void 0)})),u=(0,i.$j)(null,(function(e){return{getRefreshFetch:function(){return e((0,a.oT)())}}}))((function(){var e=function(){(0,a.oT)()};return(0,r.jsx)("div",{children:(0,r.jsx)(c,{onAdd:function(){setTimeout(e,24e4)}},void 0)},void 0)}))}}]);
//# sourceMappingURL=618.bundle.js.map