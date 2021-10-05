(()=>{"use strict";var e,t,o,r={284:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.http=void 0;var r=o(603),n=axios;t.http=n,n.defaults.withCredentials=!0,n.interceptors.request.use(r.requestInterceptor),n.interceptors.response.use(r.responseSuccessInterceptor,r.responseFailedInterceptor)},603:(e,t)=>{function o(){var e=document.getElementById("form-btn"),t=document.getElementById("loading");t&&e&&(e.classList.remove("hidden"),e.classList.add("block"),t.classList.add("hidden"),t.classList.remove("flex"))}Object.defineProperty(t,"__esModule",{value:!0}),t.responseFailedInterceptor=t.responseSuccessInterceptor=t.handleCommonResponse=t.requestInterceptor=void 0,t.requestInterceptor=function(e){var t=document.getElementById("form-btn"),o=document.getElementById("loading"),r=document.getElementById("MESSAGEERROR"),n=document.getElementById("ERRORMESSAGEERROR");for(var s in e.data){var a=document.getElementById(s.toUpperCase()+"ERROR");a&&(a.innerHTML="")}return n&&(n.innerHTML=""),r&&(r.innerHTML=""),o&&t&&(t.classList.add("hidden"),o.classList.remove("hidden"),o.classList.add("flex")),e},t.handleCommonResponse=o,t.responseSuccessInterceptor=function(e){var t,r,n,s;if(o(),null===(r=null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.details)||void 0===r?void 0:r.message){var a=document.getElementById("MESSAGEERROR");a&&(a.innerHTML=null===(s=null===(n=null==e?void 0:e.data)||void 0===n?void 0:n.details)||void 0===s?void 0:s.message)}return e},t.responseFailedInterceptor=function(e){var t,r;if(o(),null===(r=null===(t=e.response)||void 0===t?void 0:t.data)||void 0===r?void 0:r.details){var n=e.response.data.details;for(var s in n){var a=document.getElementById(s.toUpperCase()+"ERROR");a&&(a.innerHTML=a.getAttribute("data-label")+" "+n[s]),!a||"errorMessage"!==s&&"message"!==s||(a.innerHTML=""+n[s])}}return Promise.reject(e.response)}},312:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.routers=t.routerLinks=void 0,t.routerLinks={home:"/",loginForm:"/auth/login"},t.routers={category:{create:"/api/category",update:"/api/category"},post:{create:"/api/post",addNewTagToPost:"/api/post/tag",getTagOfPost:function(e){return"/api/post/tag?postId="+e},save:"/api/post/save",uploadImagePost:"/api/post/image",addCategoryToPost:"/api/post/category"},user:{changePassword:"/api/user/change-password",update:"/api/user",get:"/api/user",block:"/api/admin/user/block"},tag:{getAll:"/api/tag/all",getByName:function(e){return"/api/tag?name="+e}},auth:{login:"/api/auth/login",register:"/api/auth/register"}}}},n={};function s(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return r[e](o,o.exports,s),o.exports}e=s(284),t=s(312),null==(o=document.getElementById("createNewPost"))||o.addEventListener("click",(function(o){e.http.post(t.routers.post.create).then((function(e){window.location.reload()}))}))})();