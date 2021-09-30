(()=>{"use strict";var e,t,r,s={284:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.http=void 0;var s=r(603),o=axios;t.http=o,o.defaults.withCredentials=!0,o.interceptors.request.use(s.requestInterceptor),o.interceptors.response.use(s.responseSuccessInterceptor,s.responseFailedInterceptor)},603:(e,t)=>{function r(){var e=document.getElementById("form-btn"),t=document.getElementById("loading");t&&e&&(e.classList.remove("hidden"),e.classList.add("block"),t.classList.add("hidden"),t.classList.remove("flex"))}Object.defineProperty(t,"__esModule",{value:!0}),t.responseFailedInterceptor=t.responseSuccessInterceptor=t.handleCommonResponse=t.requestInterceptor=void 0,t.requestInterceptor=function(e){var t=document.getElementById("form-btn"),r=document.getElementById("loading"),s=document.getElementById("MESSAGEERROR"),o=document.getElementById("ERRORMESSAGEERROR");for(var n in e.data){var a=document.getElementById(n.toUpperCase()+"ERROR");a&&(a.innerHTML="")}return o&&(o.innerHTML=""),s&&(s.innerHTML=""),r&&t&&(t.classList.add("hidden"),r.classList.remove("hidden"),r.classList.add("flex")),e},t.handleCommonResponse=r,t.responseSuccessInterceptor=function(e){var t,s,o,n;if(r(),null===(s=null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.details)||void 0===s?void 0:s.message){var a=document.getElementById("MESSAGEERROR");a&&(a.innerHTML=null===(n=null===(o=null==e?void 0:e.data)||void 0===o?void 0:o.details)||void 0===n?void 0:n.message)}return e},t.responseFailedInterceptor=function(e){var t,s;if(r(),null===(s=null===(t=e.response)||void 0===t?void 0:t.data)||void 0===s?void 0:s.details){var o=e.response.data.details;for(var n in o){var a=document.getElementById(n.toUpperCase()+"ERROR");a&&(a.innerHTML=a.getAttribute("data-label")+" "+o[n]),!a||"errorMessage"!==n&&"message"!==n||(a.innerHTML=""+o[n])}}return Promise.reject(e.response)}},312:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.routers=t.routerLinks=void 0,t.routerLinks={home:"/",loginForm:"/auth/login"},t.routers={category:{create:"/api/category",update:"/api/category/update"},post:{create:"/api/post",addNewTagToPost:"/api/post/tag",getTagOfPost:function(e){return"/api/post/tag?postId="+e},save:"/api/post/save",uploadImagePost:"/api/post/image"},user:{changePassword:"/api/user/change-password",update:"/api/user",get:"/api/user"},tag:{getAll:"/api/tag/all",getByName:function(e){return"/api/tag?name="+e}},auth:{login:"/api/auth/login",register:"/api/auth/register"}}}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return s[e](r,r.exports,n),r.exports}e=n(284),t=n(312),null==(r=document.getElementById("changeUserPasswordForm"))||r.addEventListener("submit",(function(r){r.preventDefault();var s=document.getElementById("oldPassword"),o=document.getElementById("newPassword"),n=document.getElementById("confirmNewPassword");if(null!==s&&null!==o&&null!==n){var a={oldPassword:s.value,newPassword:o.value,confirmNewPassword:n.value};e.http.post(t.routers.user.changePassword,a)}}))})();