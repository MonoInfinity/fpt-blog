(()=>{"use strict";var e,t,r,n,o={284:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.http=void 0;var n=r(603),o=axios;t.http=o,o.defaults.withCredentials=!0,o.interceptors.request.use(n.requestInterceptor),o.interceptors.response.use(n.responseSuccessInterceptor,n.responseFailedInterceptor)},603:(e,t)=>{function r(){var e=document.getElementById("form-btn"),t=document.getElementById("loading");t&&e&&(e.classList.remove("hidden"),e.classList.add("block"),t.classList.add("hidden"),t.classList.remove("flex"))}Object.defineProperty(t,"__esModule",{value:!0}),t.responseFailedInterceptor=t.responseSuccessInterceptor=t.handleCommonResponse=t.requestInterceptor=void 0,t.requestInterceptor=function(e){var t=document.getElementById("form-btn"),r=document.getElementById("loading"),n=document.getElementById("message"),o=document.getElementById("errorMessage");for(var s in e.data){var a=document.getElementById(s.toUpperCase()+"ERROR");a&&(a.innerHTML="")}return o&&(o.innerHTML=""),n&&(n.innerHTML=""),r&&t&&(t.classList.add("hidden"),r.classList.remove("hidden"),r.classList.add("flex")),e},t.handleCommonResponse=r,t.responseSuccessInterceptor=function(e){var t,n,o,s;if(r(),null===(n=null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.details)||void 0===n?void 0:n.message){var a=document.getElementById("MESSAGEERROR");a&&(a.innerHTML=null===(s=null===(o=null==e?void 0:e.data)||void 0===o?void 0:o.details)||void 0===s?void 0:s.message)}return e},t.responseFailedInterceptor=function(e){var t,n;if(r(),null===(n=null===(t=e.response)||void 0===t?void 0:t.data)||void 0===n?void 0:n.details){var o=e.response.data.details;for(var s in o){var a=document.getElementById(s.toUpperCase()+"LABEL"),i=document.getElementById(s.toUpperCase()+"ERROR");a&&i?i.innerHTML=a.innerHTML+" "+o[s]:!i||"errorMessage"!==s&&"message"!==s||(i.innerHTML=""+o[s])}}return Promise.reject(e.response)}},312:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.routers=t.routerLinks=void 0,t.routerLinks={home:"/",loginForm:"/auth/login"},t.routers={category:{create:"/api/category",update:"/api/category/update"},loginUser:"/api/auth/login",getUser:"/api/user",registerUser:"/api/auth/register",createBlog:"/api/blog",uploadImageBlog:"/api/blog/image"}}},s={};function a(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return o[e](r,r.exports,a),r.exports}e=a(284),t=a(312),r=1,n=document.getElementById("createCategoryForm"),document.querySelectorAll('input[name="status"]').forEach((function(e){e.addEventListener("click",(function(){r=Number(e.value)}))})),null==n||n.addEventListener("submit",(function(n){n.preventDefault();var o=document.getElementById("name"),s=document.getElementById("description");if(null!=o&&null!=s&&null!=r){var a={name:o.value,description:s.value,status:r};e.http.post(t.routers.category.create,a).then((function(){o.value="",s.value=""}))}}))})();