(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{41:function(e,t,r){},42:function(e,t,r){},77:function(e,t,r){},78:function(e,t,r){},79:function(e,t,r){},82:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),s=r(17),a=r.n(s),i=(r(41),r(42),r(6)),o=r(2),u=r(4),l=r.n(u),j=r(10),d=r(12),b=r.n(d),g=r(33);r.n(g).a.config();var h="https://only-login.herokuapp.com",p=r(14),v=Object(p.b)({name:"auth",initialState:{login:{currentUser:void 0,isFeching:!0,error:!1},register:{isFeching:!1,error:!1,success:!1}},reducers:{loginStart:function(e){e.login.isFeching=!0},loginSuccess:function(e,t){e.login.isFeching=!1,e.login.error=!1,e.login.currentUser=t.payload},loginFailed:function(e){e.login.isFeching=!1,e.login.error=!0},logoutStart:function(e){e.login.isFeching=!0},logoutSuccess:function(e){e.login.isFeching=!1,e.login.error=!1,e.login.currentUser=null},logoutFailed:function(e){e.login.isFeching=!1,e.login.error=!0},registerStart:function(e){e.register.isFeching=!0},registerSuccess:function(e){e.register.isFeching=!1,e.register.error=!1,e.register.success=!0},registerFailed:function(e){e.register.isFeching=!1,e.register.error=!0,e.register.success=!1}}}),f=v.actions,O=f.loginStart,x=f.loginSuccess,m=f.loginFailed,S=f.registerStart,k=f.registerSuccess,F=f.registerFailed,y=f.logoutStart,w=f.logoutSuccess,U=f.logoutFailed,N=v.reducer,A=Object(p.b)({name:"user",initialState:{users:{allUser:null,isFeching:!1,error:!1},messages:""},reducers:{getAllUserStart:function(e){e.users.isFeching=!0},getAllUserSuccess:function(e,t){e.users.isFeching=!1,e.users.error=!1,e.users.allUser=t.payload},getAllUserFailed:function(e){e.users.isFeching=!1,e.users.error=!0},deleteUserStart:function(e){e.users.isFeching=!0},deleteUserSuccess:function(e,t){e.users.isFeching=!1,e.users.error=!1,e.messages=t.payload},deleteUserFailed:function(e,t){e.users.isFeching=!1,e.users.error=!0,e.messages=t.payload}}}),E=A.actions,C=E.getAllUserStart,T=E.getAllUserSuccess,D=E.getAllUserFailed,B=E.deleteUserStart,R=E.deleteUserSuccess,L=E.deleteUserFailed,_=A.reducer,M=function(){var e=Object(j.a)(l.a.mark((function e(t,r,n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(O()),e.prev=1,e.next=4,b.a.post("".concat(h,"/v1/auth/login"),t);case 4:c=e.sent,r(x(c.data)),n("/home"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),r(m());case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,r,n){return e.apply(this,arguments)}}(),P=function(){var e=Object(j.a)(l.a.mark((function e(t,r,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(S()),e.prev=1,e.next=4,b.a.post("".concat(h,"/v1/auth/register"),t);case 4:r(k()),n("/login"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r(F());case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r,n){return e.apply(this,arguments)}}(),H=function(){var e=Object(j.a)(l.a.mark((function e(t,r,n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(C()),e.prev=1,e.next=4,b.a.get("".concat(h,"/v1/user/").concat(n),{headers:{token:"Bearer ".concat(r)}});case 4:c=e.sent,t(T(c.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(D());case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r,n){return e.apply(this,arguments)}}(),I=function(){var e=Object(j.a)(l.a.mark((function e(t,r,n,c){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(B()),e.prev=1,e.next=4,c.delete("".concat(h,"/v1/user/").concat(n),{headers:{token:"Bearer ".concat(r)}});case 4:s=e.sent,t(R(s.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(L(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r,n,c){return e.apply(this,arguments)}}(),J=function(){var e=Object(j.a)(l.a.mark((function e(t,r,n,c,s){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(y()),e.prev=1,e.next=4,s.post("".concat(h,"/v1/auth/logout"),r,{headers:{token:"Bearer ".concat(c)}});case 4:t(w()),n("/login"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(U(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r,n,c,s){return e.apply(this,arguments)}}(),W=r(15),q=r(34),z=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("".concat(h,"/v1/auth/refresh"),{withCredentials:!0});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),G=function(e,t,r){var n=b.a.create();return n.interceptors.request.use(function(){var n=Object(j.a)(l.a.mark((function n(c){var s,a,i;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s=new Date,!(Object(q.a)(null===e||void 0===e?void 0:e.accessToken).exp<s.getTime()/1e3)){n.next=9;break}return n.next=5,z();case 5:a=n.sent,i=Object(W.a)(Object(W.a)({},e),{},{accessToken:a.accessToken}),t(r(i)),c.headers.token="Bearer ".concat(a.accessToken);case 9:return n.abrupt("return",c);case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),(function(e){return Promise.reject(e)})),n},K=r(1),Q=function(){var e=Object(i.c)((function(e){return e.auth.login.currentUser})),t=Object(i.c)((function(e){return e.users.users.allUser})),r=Object(i.c)((function(e){var t;return null===(t=e.users)||void 0===t?void 0:t.messages})),c=null===e||void 0===e?void 0:e.accessToken,s=null===e||void 0===e?void 0:e._id,a=Object(i.b)(),u=Object(o.f)(),l=G(e,a,x);return Object(n.useEffect)((function(){e||u("/login"),(null===e||void 0===e?void 0:e.accessToken)&&H(a,c,s,l)}),[]),Object(K.jsxs)("main",{className:"home-container",children:[Object(K.jsx)("div",{className:"home-title",children:"User List"}),Object(K.jsx)("div",{className:"home-userlist",children:null===t||void 0===t?void 0:t.map((function(e){return Object(K.jsxs)("div",{className:"user-container",children:[Object(K.jsxs)("div",{className:"home-user",children:[e.username," ",s===e._id?"(B\u1ea1n)":""]}),Object(K.jsx)("div",{className:"delete-user",onClick:function(){return t=e._id,void I(a,c,t,l);var t},children:" Delete "})]},e._id)}))}),r]})},V=r(9),X=r(7),Y=(r(77),function(){var e=Object(n.useState)(""),t=Object(X.a)(e,2),r=t[0],c=t[1],s=Object(n.useState)(""),a=Object(X.a)(s,2),u=a[0],l=a[1],j=Object(i.b)(),d=Object(o.f)();return Object(K.jsxs)("section",{className:"login-container",children:[Object(K.jsx)("div",{className:"login-title",children:" Log in"}),Object(K.jsxs)("form",{onSubmit:function(e){e.preventDefault(),M({username:r,password:u},j,d)},children:[Object(K.jsx)("label",{children:"USERNAME"}),Object(K.jsx)("input",{type:"text",placeholder:"Enter your username",value:r,onChange:function(e){return c(e.target.value)}}),Object(K.jsx)("label",{children:"PASSWORD"}),Object(K.jsx)("input",{type:"password",placeholder:"Enter your password",value:u,onChange:function(e){return l(e.target.value)}}),Object(K.jsx)("button",{type:"submit",children:" Continue "})]}),Object(K.jsx)("div",{className:"login-register",children:" Don't have an account yet? "}),Object(K.jsx)(V.b,{className:"login-register-link",to:"/register",children:"Register one for free "})]})}),Z=(r(78),function(){var e=Object(n.useState)(""),t=Object(X.a)(e,2),r=t[0],c=t[1],s=Object(n.useState)(""),a=Object(X.a)(s,2),u=a[0],l=a[1],j=Object(n.useState)(""),d=Object(X.a)(j,2),b=d[0],g=d[1],h=Object(i.b)(),p=Object(o.f)();return Object(K.jsxs)("section",{className:"register-container",children:[Object(K.jsx)("div",{className:"register-title",children:" Sign up "}),Object(K.jsxs)("form",{onSubmit:function(e){e.preventDefault(),P({username:r,email:u,password:b},h,p)},children:[Object(K.jsx)("label",{children:"EMAIL"}),Object(K.jsx)("input",{type:"text",placeholder:"Enter your email",value:u,onChange:function(e){return l(e.target.value)}}),Object(K.jsx)("label",{children:"USERNAME"}),Object(K.jsx)("input",{type:"text",placeholder:"Enter your username",value:r,onChange:function(e){return c(e.target.value)}}),Object(K.jsx)("label",{children:"PASSWORD"}),Object(K.jsx)("input",{type:"password",placeholder:"Enter your password",value:b,onChange:function(e){return g(e.target.value)}}),Object(K.jsx)("button",{type:"submit",children:" Create account "})]})]})}),$=(r(79),function(){var e=Object(i.c)((function(e){var t;return null===(t=e.auth.login)||void 0===t?void 0:t.currentUser})),t=null===e||void 0===e?void 0:e._id,r=Object(i.b)(),n=Object(o.f)(),c=G(e,r,w);return Object(K.jsx)("nav",{className:"navbar-container",children:e?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(V.b,{to:"/home",className:"navbar-home",children:" Home "}),Object(K.jsxs)("p",{className:"navbar-user",children:["Hi, ",Object(K.jsxs)("span",{children:[" ",e.username,"  "]})," "]}),Object(K.jsx)(V.b,{to:"/logout",className:"navbar-logout",onClick:function(){J(r,t,n,null===e||void 0===e?void 0:e.accessToken,c),r(R(""))},children:" Log out"})]}):Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(V.b,{to:"/login",className:"navbar-login",children:" Login "}),Object(K.jsx)(V.b,{to:"/register",className:"navbar-register",children:" Register"})]})})});var ee=function(){return Object(K.jsxs)(V.a,{children:[Object(K.jsx)($,{}),Object(K.jsx)("div",{className:"App",children:Object(K.jsxs)(o.c,{children:[Object(K.jsx)(o.a,{path:"/home",element:Object(K.jsx)(Q,{})}),Object(K.jsx)(o.a,{path:"/login",element:Object(K.jsx)(Y,{})}),Object(K.jsx)(o.a,{path:"/register",element:Object(K.jsx)(Z,{})})]})})]})},te=r(35),re=r(5),ne=r(11),ce=r(36),se={key:"root",version:1,storage:r.n(ce).a},ae=Object(re.b)({auth:N,users:_}),ie=Object(ne.g)(se,ae),oe=Object(p.a)({reducer:ie,middleware:function(e){return e({serializableCheck:{ignoredActions:[ne.a,ne.f,ne.b,ne.c,ne.d,ne.e]}})}}),ue=Object(ne.h)(oe);a.a.render(Object(K.jsx)(c.a.StrictMode,{children:Object(K.jsx)(i.a,{store:oe,children:Object(K.jsx)(te.a,{loading:null,persistor:ue,children:Object(K.jsx)(ee,{})})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.16a8c4b4.chunk.js.map